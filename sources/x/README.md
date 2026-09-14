# X/Twitter Source

**Platform**: X (Twitter)

## About

Real-world Astra prompt cases harvested from X, with **priority on FAILURE cases**.

This source focuses on:
- Edge cases and limitations (`status=fail`)
- Community-reported bugs
- Unexpected outputs
- Generation failures
- Real-world problem reports

## Harvest Strategy

**Keywords**: "Astra", "GPT-6 3D", "generation failed", etc.  
**Hashtags**: #AstraFails, #3DGeneration  
**Priority**: `status=fail` > `status=partial` > `status=success`

## Structure

```
x/
├── README.md       # This file
├── meta.json       # Harvest metadata
└── cases/          # Harvested cases (JSON)
```

## Attribution

Each case includes:
- `author` — X handle
- `authorLink` — Profile URL
- `upstreamUrl` — Tweet/post URL

## Compliance

Harvesting respects X Terms of Service:
- Public posts only
- Attribution preserved
- Links to original posts
- No bulk scraping (rate-limited)

## Privacy

No personal data beyond public usernames and post URLs.
