# Spider Source

**Type**: Automation layer / future crawler placeholder

## About

This folder is reserved for generic automation infrastructure and future intake pipelines.

## Use Cases

- Cross-platform harvesting
- Scheduled bulk ingests
- API-driven imports
- Custom scraper outputs
- Third-party data feeds

## Status

**Placeholder** — no active intake currently.

## Structure

```
spider/
├── README.md       # This file
├── meta.json       # Pipeline metadata (when active)
└── cases/          # Automated intake cases (future)
```

## Integration

When active, spider pipelines should:
1. Output standardized JSON cases
2. Set `source: "spider"` or appropriate sub-source
3. Include full attribution metadata
4. Follow deduplication rules
5. Validate against `schema/case.schema.json`

## Future

This folder will host:
- Automation scripts
- Pipeline configurations
- Scheduled job outputs
- Third-party API integrations
