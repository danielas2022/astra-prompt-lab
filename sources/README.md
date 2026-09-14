# Intake Sources

This directory organizes intake workflows for different content sources feeding the Astra Prompt Lab.

## Primary Sources

### 1. Tripo (`tripo/`)
- **Repo**: https://github.com/TripoGrowthLab/awesome-astra-prompts
- **Type**: Community-curated growth list (NOT product-official)
- **Cadence**: Daily scan
- **Focus**: Curated prompt examples and best practices

### 2. BeatAPI (`beatapi/`)
- **Repo**: https://github.com/BeatAPI/awesome-3d-prompts
- **Type**: First-class integrated source
- **Cadence**: Regular sync
- **Focus**: 3D prompt patterns and techniques

### 3. X/Twitter (`x/`)
- **Platform**: X/Twitter
- **Priority**: FAILURE cases (status=fail)
- **Focus**: Real-world failures and edge cases for research
- **Method**: Manual curation of interesting Astra prompt discussions

## Optional/Future Sources

### Spider (`spider/`)
- **Type**: Automation layer / future crawler placeholder
- **Purpose**: Pipeline infrastructure for automated intake
- **Status**: Placeholder for future automation

Automated crawler configuration and staging area:
- Spider intake scripts will scan configured sources
- Raw data staged here before processing
- Validation and deduplication before moving to `cases/`

### OpenAI (`openai/`)
- **Type**: Placeholder for official OpenAI Astra documentation
- **Status**: Reserved for future integration

Reserved for potential future ingestion of official OpenAI examples:
- Official tutorials or documentation examples
- OpenAI Cookbook entries
- Sanctioned case studies
- **Status**: Placeholder — awaiting official permission/availability

### Folk (`folk/`)
- **Type**: Generic community PR intake
- **Purpose**: Direct community contributions via pull requests

Community members submit cases via:
- Pull requests following CONTRIBUTING.md
- GitHub Issues using the case submission template
- Direct community submissions

These are reviewed and moved to the appropriate `cases/` directory.

## 🔄 Intake Workflows

### Tripo — Daily Scan

1. Automated daily scan of the upstream repository
2. Parse markdown/YAML content into standardized JSON cases
3. Preserve original attribution links
4. Tag with `source: "tripo"`
5. Store in `sources/tripo/cases/`

### BeatAPI — Regular Sync

1. Monitor upstream repository for changes
2. Parse and normalize 3D prompt patterns
3. Preserve original attribution
4. Tag with `source: "beatapi"`
5. Store in `sources/beatapi/cases/`

### X/Twitter — Manual Curation

Maintainers manually curate interesting Astra prompt discussions:
1. Identify relevant tweets/threads (prioritize failures)
2. Create case JSON following the schema
3. Set `source: "x"` and include `source_url` to the tweet
4. Credit the original poster in `attribution`
5. Store in `sources/x/cases/`

## 🏷️ Source Field Mapping

When creating cases from these sources, use the corresponding `source` value in your JSON:

```json
{
  "source": "tripo",   // → sources/tripo/
  "source": "beatapi", // → sources/beatapi/
  "source": "x",       // → sources/x/
  "source": "spider",  // → sources/spider/
  "source": "folk",    // → sources/folk/
  "source": "openai"   // → sources/openai/
}
```

## Folder Structure

Each source folder contains:
- `README.md` - Source-specific documentation
- `cases/` - Prompt case files in standardized JSON format
- `meta.json` - Source metadata and sync status (for automated sources)

## ⚠️ Important Guidelines

1. **Always attribute** — Credit original creators in the `author` field
2. **Link to source** — Include `authorLink` and `upstreamUrl` to original content
3. **No wholesale copying** — Don't copy entire curated lists without transformation
4. **Respect licenses** — Upstream content retains original licenses
5. **Get permission** — For non-public content, obtain creator consent

## Attribution

All upstream content retains original attribution. See individual case files for author/source links.

## 🔧 Future Automation

The `spider/` directory structure is prepared for future automated intake:
- RSS/API monitoring of Astra discussions
- Automated schema validation
- Deduplication checks
- Staging queue for human review

---

**Note**: The three primary sources (Tripo, BeatAPI, X) drive the lab's content. Other directories are placeholders for future expansion.
