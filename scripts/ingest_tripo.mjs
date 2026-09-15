#!/usr/bin/env node

/**
 * Tripo Ingest Script
 * 
 * 将 TripoGrowthLab/awesome-astra-prompts README 中的条目转换为 astra-prompt-lab 的 case schema
 * 
 * 用途：
 * - 首次同步：摄取所有 Tripo 展示条目
 * - 增量同步：检测新条目并添加
 * 
 * 运行: node scripts/ingest_tripo.mjs <path-to-tripo-repo>
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 工作区根目录
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const CASES_DIR = path.join(WORKSPACE_ROOT, 'sources', 'tripo', 'cases');
const META_FILE = path.join(WORKSPACE_ROOT, 'sources', 'tripo', 'meta.json');

/**
 * 生成符合 kebab-case 规则的 case ID
 */
function generateCaseId(title, tweetId) {
  // 从标题生成 slug
  let slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60); // 限制长度
  
  // 如果有 tweet ID，使用它作为后缀以保证唯一性
  if (tweetId) {
    return `tripo-${tweetId}`;
  }
  
  return `tripo-${slug}`;
}

/**
 * 从 markdown 链接中提取 tweet ID
 */
function extractTweetId(url) {
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : null;
}

/**
 * 从 markdown 链接中提取作者 handle
 */
function extractAuthorHandle(url) {
  const match = url.match(/x\.com\/([^\/]+)/);
  return match ? match[1] : null;
}

/**
 * 解析 README 中的条目
 * 格式示例：
 * - [Title](#anchor) · GitHub
 * - [Title](#tweet-id)
 */
function parseReadme(readmePath) {
  const content = fs.readFileSync(readmePath, 'utf-8');
  const lines = content.split('\n');
  
  const entries = [];
  let inPromptSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // 检测是否进入 prompt 列表部分
    if (line.includes('## Latest Astra prompts') || line.includes('Browse examples')) {
      inPromptSection = true;
      continue;
    }
    
    // 解析列表项
    if (inPromptSection && line.trim().startsWith('- [')) {
      // 匹配格式: - [Title](link)
      const match = line.match(/- \[(.+?)\]\((#?\S+?)\)/);
      if (match) {
        const title = match[1];
        const link = match[2];
        
        // 跳过包含 "Browse examples" 等导航链接
        if (title.toLowerCase().includes('browse') || 
            title.toLowerCase().includes('explore')) {
          continue;
        }
        
        entries.push({
          title,
          anchor: link.replace('#', ''),
          line: i + 1,
        });
      }
    }
    
    // 停止解析（到达末尾标记）
    if (inPromptSection && line.trim().startsWith('</details>')) {
      break;
    }
  }
  
  // 现在查找每个 anchor 的详细信息
  for (const entry of entries) {
    const anchorPattern = new RegExp(`<a id="${entry.anchor}"></a>`);
    
    for (let i = 0; i < lines.length; i++) {
      if (anchorPattern.test(lines[i])) {
        // 找到 anchor，查找后续的详细信息
        // 通常格式是:
        // <a id="..."></a>
        // 
        // ### Title
        // 
        // [X post](url) · author name
        // 
        // > prompt text
        
        for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
          const detailLine = lines[j];
          
          // 提取 X post URL
          const xPostMatch = detailLine.match(/\[X post\]\((https:\/\/x\.com\/\S+?)\)/);
          if (xPostMatch) {
            entry.sourceUrl = xPostMatch[1];
            entry.tweetId = extractTweetId(xPostMatch[1]);
            entry.authorHandle = extractAuthorHandle(xPostMatch[1]);
          }
          
          // 提取作者名
          const authorMatch = detailLine.match(/· (.+?)$/);
          if (authorMatch && !entry.author) {
            entry.author = authorMatch[1].trim();
          }
          
          // 提取 prompt (blockquote)
          if (detailLine.trim().startsWith('> ') && !entry.prompt) {
            entry.prompt = detailLine.replace(/^>\s*/, '').trim();
            
            // 可能是多行 prompt
            for (let k = j + 1; k < Math.min(j + 10, lines.length); k++) {
              if (lines[k].trim().startsWith('> ')) {
                entry.prompt += '\n' + lines[k].replace(/^>\s*/, '').trim();
              } else if (lines[k].trim() === '') {
                break;
              }
            }
          }
        }
        
        break;
      }
    }
  }
  
  return entries;
}

/**
 * 将 Tripo 条目转换为我们的 case schema
 */
function convertToCase(entry) {
  const caseData = {
    id: generateCaseId(entry.title, entry.tweetId),
    title: entry.title,
    source: 'tripo',
    prompt: entry.prompt || 'Prompt details not available in README',
    status: 'success', // Tripo 是展示列表，默认为成功案例
    tags: ['tripo-curated'],
  };

  // 添加作者信息
  if (entry.author) {
    caseData.author = entry.author;
  }
  if (entry.authorHandle) {
    caseData.authorLink = `https://x.com/${entry.authorHandle}`;
  }

  // 添加原始来源 URL
  if (entry.sourceUrl) {
    caseData.source_url = entry.sourceUrl;
  }

  // 添加上游仓库归属
  caseData.upstreamUrl = `https://github.com/TripoGrowthLab/awesome-astra-prompts`;

  // 添加归属信息
  caseData.attribution = {
    name: 'TripoGrowthLab awesome-astra-prompts',
    url: 'https://github.com/TripoGrowthLab/awesome-astra-prompts',
  };

  // 添加说明
  caseData.notes = 'Community-curated growth list (NOT product-official). Curated showcase example.';

  // 添加元数据
  caseData.metadata = {
    tripo_anchor: entry.anchor,
    readme_line: entry.line,
  };

  if (entry.tweetId) {
    caseData.metadata.tweet_id = entry.tweetId;
  }

  return caseData;
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node ingest_tripo.mjs <path-to-tripo-repo>');
    console.error('Example: node ingest_tripo.mjs /tmp/tripo-upstream');
    process.exit(1);
  }

  const tripoRepoPath = args[0];
  const readmePath = path.join(tripoRepoPath, 'README.md');

  // 检查文件是否存在
  if (!fs.existsSync(readmePath)) {
    console.error(`Error: README.md not found at ${readmePath}`);
    process.exit(1);
  }

  console.log('📦 Tripo Ingest Script');
  console.log('======================\n');

  // 解析 README
  console.log(`Parsing ${readmePath}...`);
  const entries = parseReadme(readmePath);
  
  console.log(`Found ${entries.length} entries\n`);

  // 确保输出目录存在
  if (!fs.existsSync(CASES_DIR)) {
    fs.mkdirSync(CASES_DIR, { recursive: true });
  }

  // 转换并写入每个 case
  let successCount = 0;
  let errorCount = 0;

  for (const entry of entries) {
    try {
      const caseData = convertToCase(entry);
      const filename = `${caseData.id}.json`;
      const filepath = path.join(CASES_DIR, filename);
      
      fs.writeFileSync(filepath, JSON.stringify(caseData, null, 2) + '\n');
      successCount++;
      
      if (successCount % 20 === 0) {
        console.log(`Progress: ${successCount}/${entries.length} cases written...`);
      }
    } catch (error) {
      console.error(`Error processing entry "${entry.title}":`, error.message);
      errorCount++;
    }
  }

  console.log(`\n✅ Successfully wrote ${successCount} cases`);
  if (errorCount > 0) {
    console.log(`⚠️  ${errorCount} errors encountered`);
  }

  // 获取上游仓库的 commit SHA
  let upstreamCommit = null;
  try {
    const gitHeadPath = path.join(tripoRepoPath, '.git', 'HEAD');
    const headContent = fs.readFileSync(gitHeadPath, 'utf-8').trim();
    
    if (headContent.startsWith('ref:')) {
      const refPath = headContent.split(' ')[1];
      const refFile = path.join(tripoRepoPath, '.git', refPath);
      upstreamCommit = fs.readFileSync(refFile, 'utf-8').trim().substring(0, 7);
    } else {
      upstreamCommit = headContent.substring(0, 7);
    }
  } catch (e) {
    console.warn('Warning: Could not determine upstream commit SHA');
  }

  // 更新 meta.json
  console.log('\nUpdating meta.json...');
  const meta = {
    source: 'tripo',
    name: 'TripoGrowthLab awesome-astra-prompts',
    upstreamUrl: 'https://github.com/TripoGrowthLab/awesome-astra-prompts',
    description: 'Community-curated growth list (NOT product-official)',
    cadence: 'daily',
    lastSync: new Date().toISOString(),
    totalCases: successCount,
    status: 'synced',
    upstream: {
      commit: upstreamCommit,
      totalEntries: entries.length,
      syncedAt: new Date().toISOString(),
    }
  };

  fs.writeFileSync(META_FILE, JSON.stringify(meta, null, 2) + '\n');
  console.log('✅ meta.json updated');

  console.log('\n🎉 Tripo ingest complete!');
  console.log(`   Total cases: ${successCount}`);
  console.log(`   Output directory: ${CASES_DIR}`);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
