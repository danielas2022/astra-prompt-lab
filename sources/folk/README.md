# Folk Source

**Type**: Community PR intake

## About

This folder receives direct community contributions via pull requests.

Anyone can submit their own Astra prompt cases here, following the lab's schema.

## How to Contribute

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for full guidelines.

### Quick Start

1. Fork this repository
2. Create a new JSON file in `sources/folk/cases/`
3. Follow [`schema/case.schema.json`](../../schema/case.schema.json)
4. Set `source: "folk"` in your case
5. Include your attribution
6. Open a pull request

## Structure

```
folk/
├── README.md       # This file
└── cases/          # Community-submitted cases (JSON)
```

## Example Case

```json
{
  "id": "folk-example-001",
  "source": "folk",
  "prompt": "A steampunk clockwork dragon with brass gears",
  "status": "success",
  "tags": ["dragon", "steampunk", "mechanical"],
  "author": "YourName",
  "authorLink": "https://twitter.com/yourhandle",
  "createdAt": "2026-09-14T00:00:00Z"
}
```

## Review Process

Community PRs are reviewed for:
- Schema compliance
- Proper attribution
- Non-duplicate content
- Appropriate tags

## License

By contributing, you agree your submissions will follow the project's license terms.
