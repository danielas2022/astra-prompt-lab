# Example Cases

This document provides example JSON cases for each source type.

## Tripo Source Example

```json
{
  "id": "tripo-dragon-001",
  "source": "tripo",
  "prompt": "A majestic dragon perched on a mountain peak, scales glistening in moonlight",
  "status": "success",
  "tags": ["dragon", "fantasy", "creature"],
  "category": "character",
  "author": "TripoGrowthLab",
  "authorLink": "https://github.com/TripoGrowthLab",
  "upstreamUrl": "https://github.com/TripoGrowthLab/awesome-astra-prompts",
  "imageUrl": "https://example.com/dragon.png",
  "createdAt": "2026-09-14T10:00:00Z"
}
```

## BeatAPI Source Example

```json
{
  "id": "beatapi-technique-001",
  "source": "beatapi",
  "prompt": "Low-poly geometric fox, faceted surfaces, warm orange tones, minimalist",
  "status": "success",
  "tags": ["low-poly", "geometric", "animal", "minimalist"],
  "category": "object",
  "author": "BeatAPI Community",
  "authorLink": "https://github.com/BeatAPI",
  "upstreamUrl": "https://github.com/BeatAPI/awesome-3d-prompts",
  "notes": "Demonstrates low-poly technique pattern",
  "createdAt": "2026-09-13T15:30:00Z"
}
```

## X/Twitter Failure Case Example

```json
{
  "id": "x-fail-texture-001",
  "source": "x",
  "prompt": "A realistic human face with detailed skin texture and pores",
  "status": "fail",
  "tags": ["human", "face", "realistic", "failure"],
  "category": "character",
  "author": "@user_handle",
  "authorLink": "https://x.com/user_handle",
  "upstreamUrl": "https://x.com/user_handle/status/123456789",
  "failureReason": "Uncanny valley effect, texture artifacts in eye region",
  "notes": "Astra struggles with hyper-realistic human faces as of Sept 2026",
  "createdAt": "2026-09-12T08:45:00Z"
}
```

## Folk (Community) Source Example

```json
{
  "id": "folk-steampunk-001",
  "source": "folk",
  "prompt": "A steampunk clockwork dragon with brass gears and steam vents",
  "status": "success",
  "tags": ["dragon", "steampunk", "mechanical", "brass"],
  "category": "character",
  "author": "Jane Doe",
  "authorLink": "https://twitter.com/janedoe",
  "notes": "Combining organic and mechanical elements works well",
  "createdAt": "2026-09-14T12:00:00Z"
}
```

## Minimal Valid Case

```json
{
  "id": "minimal-001",
  "source": "folk",
  "prompt": "A simple cube",
  "status": "success"
}
```

## Full-Featured Case

```json
{
  "id": "full-featured-001",
  "source": "x",
  "prompt": "Abandoned cyberpunk street market at night, neon signs, rain puddles reflecting lights",
  "status": "partial",
  "tags": ["cyberpunk", "environment", "night", "urban", "neon"],
  "category": "environment",
  "author": "@cyberpunk_fan",
  "authorLink": "https://x.com/cyberpunk_fan",
  "upstreamUrl": "https://x.com/cyberpunk_fan/status/987654321",
  "imageUrl": "https://example.com/market.jpg",
  "modelUrl": "https://example.com/market.glb",
  "notes": "Neon signs generated well, but rain puddle reflections are inconsistent",
  "failureReason": "Partial: reflections not physically accurate",
  "createdAt": "2026-09-10T19:20:00Z",
  "updatedAt": "2026-09-14T10:00:00Z",
  "metadata": {
    "generationTime": "45s",
    "retries": 2,
    "platform": "web"
  }
}
```

## Notes

- All cases must include: `id`, `source`, `prompt`, `status`
- Use ISO 8601 format for timestamps
- URLs must be valid and publicly accessible
- IDs should be unique across all sources (use source prefix)
- Failure cases should include `failureReason` when `status: "fail"`
