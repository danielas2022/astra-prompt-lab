# Sources Directory

This directory organizes intake workflows for different content sources feeding the Astra Prompt Lab.

## 📁 Structure

- **`folk/`** — Community-contributed prompts submitted directly by creators
- **`x/`** — Curated cases from X/Twitter discussions and threads
- **`spider/`** — Automated Spider crawler intake scripts and staging
- **`openai/`** — Placeholder for future official OpenAI example ingestion

## 🔄 Intake Workflows

### Folk Contributions
Community members submit cases via:
- Pull requests following CONTRIBUTING.md
- GitHub Issues using the case submission template
- Direct community submissions

These are reviewed and moved to the appropriate `cases/` directory.

### X/Twitter (Manual Curation)
Maintainers manually curate interesting Astra prompt discussions:
1. Identify relevant tweets/threads
2. Create case JSON following the schema
3. Set `source: "x"` and include `source_url` to the tweet
4. Credit the original poster in `attribution`

### Spider (Automated)
Automated crawler configuration and staging area:
- Spider intake scripts will scan configured sources
- Raw data staged here before processing
- Validation and deduplication before moving to `cases/`
- **Status**: Placeholder for future automation

### OpenAI Official
Reserved for potential future ingestion of official OpenAI examples:
- Official tutorials or documentation examples
- OpenAI Cookbook entries
- Sanctioned case studies
- **Status**: Placeholder — awaiting official permission/availability

## 🏷️ Source Field Mapping

When creating cases from these sources, use the corresponding `source` value in your JSON:

```json
{
  "source": "folk",   // → sources/folk/
  "source": "x",      // → sources/x/
  "source": "spider", // → sources/spider/
  "source": "openai"  // → sources/openai/
}
```

## ⚠️ Important Guidelines

1. **Always attribute** — Credit original creators in the `attribution` field
2. **Link to source** — Include `source_url` to the original post/discussion
3. **No wholesale copying** — Don't copy entire curated lists (e.g., Tripo's repo)
4. **Respect licenses** — Only share content with appropriate permissions
5. **Get permission** — For non-public content, obtain creator consent

## 🔧 Future Automation

The `spider/` directory structure is prepared for future automated intake:
- RSS/API monitoring of Astra discussions
- Automated schema validation
- Deduplication checks
- Staging queue for human review

---

**Note**: Most subdirectories are currently placeholders. Active ingestion will populate them as the project matures.
