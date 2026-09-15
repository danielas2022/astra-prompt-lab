#!/usr/bin/env node

/**
 * BeatAPI Ingest Script
 * 
 * 将 BeatAPI/awesome-3d-prompts 的 data/prompts.json 转换为 astra-prompt-lab 的 case schema
 * 
 * 用途：
 * - 首次同步：摄取所有 BeatAPI 条目
 * - 增量同步：检测新条目并添加
 * 
 * 运行: node scripts/ingest_beatapi.mjs <path-to-beatapi-repo>
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 工作区根目录
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const CASES_DIR = path.join(WORKSPACE_ROOT, 'sources', 'beatapi', 'cases');
const META_FILE = path.join(WORKSPACE_ROOT, 'sources', 'beatapi', 'meta.json');

/**
 * 生成符合 kebab-case 规则的 case ID
 */
function generateCaseId(slug, id) {
  // 使用 BeatAPI 提供的 slug，添加 beatapi- 前缀
  const cleanSlug = slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `beatapi-${cleanSlug}`;
}

/**
 * 将 BeatAPI 条目转换为我们的 case schema
 */
function convertToCase(item) {
  const caseData = {
    id: generateCaseId(item.slug, item.id),
    title: item.title || 'Untitled',
    source: 'beatapi',
    prompt: item.instruction.text,
    status: 'unknown', // BeatAPI 主要是展示成功案例，但我们标记为 unknown 因为没有明确的成功/失败标记
    tags: [],
    category: item.category || undefined,
  };

  // 添加作者信息
  if (item.source?.author) {
    caseData.author = item.source.author.name || item.source.author.handle;
    if (item.source.author.handle) {
      caseData.authorLink = `https://x.com/${item.source.author.handle}`;
    }
  }

  // 添加上游 URL（原始推文或来源）
  if (item.source?.url) {
    caseData.source_url = item.source.url;
  }

  // 添加上游仓库归属
  caseData.upstreamUrl = `https://github.com/BeatAPI/awesome-3d-prompts`;

  // 添加预览图片/视频 URL
  if (item.result?.preview_public_url) {
    caseData.preview_url = item.result.preview_public_url;
  }
  if (item.result?.video_public_url) {
    caseData.modelUrl = item.result.video_public_url;
  }

  // 添加模型证据 URL
  if (item.model?.evidence_url) {
    caseData.imageUrl = item.model.evidence_url;
  }

  // 添加创建时间
  if (item.source?.published_at) {
    try {
      const date = new Date(item.source.published_at);
      if (!isNaN(date.getTime())) {
        caseData.created_at = date.toISOString();
      }
    } catch (e) {
      // 忽略日期解析错误
    }
  }

  // 添加归属信息
  caseData.attribution = {
    name: 'BeatAPI awesome-3d-prompts',
    url: 'https://github.com/BeatAPI/awesome-3d-prompts',
  };

  // 添加权限说明
  if (item.rights?.status === 'review-required') {
    caseData.notes = 'Rights status: review-required. Original content retains upstream attribution and license.';
  }

  // 添加元数据
  caseData.metadata = {
    beatapi_id: item.id,
    beatapi_slug: item.slug,
    schema_version: item.schema_version,
  };

  if (item.model?.id) {
    caseData.model_version = item.model.id;
  }

  return caseData;
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node ingest_beatapi.mjs <path-to-beatapi-repo>');
    console.error('Example: node ingest_beatapi.mjs /tmp/beatapi-upstream');
    process.exit(1);
  }

  const beatApiRepoPath = args[0];
  const promptsJsonPath = path.join(beatApiRepoPath, 'data', 'prompts.json');

  // 检查文件是否存在
  if (!fs.existsSync(promptsJsonPath)) {
    console.error(`Error: prompts.json not found at ${promptsJsonPath}`);
    process.exit(1);
  }

  console.log('📦 BeatAPI Ingest Script');
  console.log('========================\n');

  // 读取 prompts.json
  console.log(`Reading ${promptsJsonPath}...`);
  const rawData = fs.readFileSync(promptsJsonPath, 'utf-8');
  const prompts = JSON.parse(rawData);
  
  console.log(`Found ${prompts.length} prompts\n`);

  // 确保输出目录存在
  if (!fs.existsSync(CASES_DIR)) {
    fs.mkdirSync(CASES_DIR, { recursive: true });
  }

  // 转换并写入每个 case
  let successCount = 0;
  let errorCount = 0;

  for (const item of prompts) {
    try {
      const caseData = convertToCase(item);
      const filename = `${caseData.id}.json`;
      const filepath = path.join(CASES_DIR, filename);
      
      fs.writeFileSync(filepath, JSON.stringify(caseData, null, 2) + '\n');
      successCount++;
      
      if (successCount % 50 === 0) {
        console.log(`Progress: ${successCount}/${prompts.length} cases written...`);
      }
    } catch (error) {
      console.error(`Error processing item ${item.id}:`, error.message);
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
    const gitHeadPath = path.join(beatApiRepoPath, '.git', 'HEAD');
    const headContent = fs.readFileSync(gitHeadPath, 'utf-8').trim();
    
    if (headContent.startsWith('ref:')) {
      const refPath = headContent.split(' ')[1];
      const refFile = path.join(beatApiRepoPath, '.git', refPath);
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
    source: 'beatapi',
    name: 'BeatAPI awesome-3d-prompts',
    upstreamUrl: 'https://github.com/BeatAPI/awesome-3d-prompts',
    description: 'First-class integrated source for 3D prompt patterns',
    cadence: 'on_update',
    lastSync: new Date().toISOString(),
    totalCases: successCount,
    status: 'synced',
    upstream: {
      commit: upstreamCommit,
      totalPrompts: prompts.length,
      syncedAt: new Date().toISOString(),
    }
  };

  fs.writeFileSync(META_FILE, JSON.stringify(meta, null, 2) + '\n');
  console.log('✅ meta.json updated');

  console.log('\n🎉 BeatAPI ingest complete!');
  console.log(`   Total cases: ${successCount}`);
  console.log(`   Output directory: ${CASES_DIR}`);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
