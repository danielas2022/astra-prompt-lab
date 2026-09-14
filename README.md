# astra-prompt-lab

**GPT-6 Astra Prompt Field Lab**: Independent research repository aggregating wins, fails, and community patterns from multiple sources.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Overview

This repository aggregates and analyzes Astra (GPT-6) 3D generation prompts from multiple sources to identify patterns, failure modes, and best practices. It is **independent of official Tripo lists** and focuses on practical field research with **both successful and failed cases**.

## Primary Sources

We integrate prompts from three locked sources:

1. **Tripo** — [TripoGrowthLab/awesome-astra-prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts)  
   Community-curated growth list (NOT product-official). Daily scan.

2. **BeatAPI** — [BeatAPI/awesome-3d-prompts](https://github.com/BeatAPI/awesome-3d-prompts)  
   First-class integrated source for 3D prompt patterns.

3. **X/Twitter** — Real-world failure cases harvested from X (prioritized).

See [`sources/README.md`](sources/README.md) for detailed source documentation.

## 🔬 How We Differ from Tripo's Awesome List

While [TripoGrowthLab/awesome-astra-prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts) is a curated collection of **successful prompts only**, Astra Prompt Lab takes a different approach:

| Feature | Tripo Awesome List | Astra Prompt Lab |
|---------|-------------------|------------------|
| **Approach** | Curated good-only | Field lab with wins & fails |
| **Content** | High-quality successful examples | Real-world mixed results |
| **Sources** | Manual curation | Three-source intake: Tripo + BeatAPI + X |
| **Focus** | Showcase best practices | Learn from both success and failure |
| **Update Frequency** | ~2×/day | Continuous intake from multiple sources |

**We complement each other** — if you want proven prompts, check Tripo's list. If you want to understand edge cases, failure patterns, and experimental approaches, explore this lab.

## Repository Structure

```
astra-prompt-lab/
├── sources/           # Intake source folders
│   ├── tripo/        # TripoGrowthLab curated list (daily scan)
│   ├── beatapi/      # BeatAPI awesome-3d-prompts (first-class integration)
│   ├── x/            # X/Twitter failure cases (prioritized)
│   ├── spider/       # Automation placeholder (future)
│   └── folk/         # Community PR intake
├── cases/            # Organized prompt cases
│   ├── win/          # Successful Astra generation cases
│   ├── fail/         # Failed attempts with lessons learned
│   └── mixed/        # Cases with partial success
├── schema/           # JSON schemas for prompt cases
│   └── case.schema.json
├── docs/             # Documentation and intake guides
│   ├── intake.md     # Intake process details
│   └── examples.md   # Example cases
├── examples/         # Sample cases demonstrating the schema
├── CONTRIBUTING.md   # How to contribute cases
└── CHANGELOG.md      # Project evolution
```

## Schema

All prompt cases follow a standardized JSON format defined in [`schema/case.schema.json`](schema/case.schema.json). Key fields include:

- `id`: Unique identifier
- `source`: Where this case originated (`tripo`, `beatapi`, `x`, `spider`, `folk`, `openai`, `other`)
- `prompt`: The actual Astra prompt text
- `status`: `success` | `fail` | `partial` | `unknown`
- `tags`: Searchable keywords
- `author`: Original creator attribution
- `authorLink`: Link to creator profile
- `upstreamUrl`: Source content link

See [`examples/`](examples/) and [`docs/examples.md`](docs/examples.md) for complete sample cases.

## Contributing

We welcome community contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Quick start:**
1. Fork this repository
2. Add your case following the schema in [`schema/case.schema.json`](schema/case.schema.json)
3. Submit to `sources/folk/cases/` with `source: "folk"`
4. Open a pull request with proper attribution

Direct PR contributions go into `sources/folk/`.

## Attribution & Ethics

- **Credit creators**: Always attribute the original prompt author
- **No fake official branding**: This is a community project, not affiliated with OpenAI, Tripo, or BeatAPI
- **Honest reporting**: Share real results, including failures
- **Respect IP**: Upstream content retains original licenses and attributions

## Related Resources

- **Companion site**: [astra3d.app](https://astra3d.app) (affiliate to Tripo Studio via=3dpro)
- **Official Astra docs**: [OpenAI Astra documentation](https://platform.openai.com/docs/models/gpt-6)
- **Tripo's curated list**: [TripoGrowthLab/awesome-astra-prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts)
- **BeatAPI's 3D prompts**: [BeatAPI/awesome-3d-prompts](https://github.com/BeatAPI/awesome-3d-prompts)

## License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.

This lab structure and tooling: MIT  
Upstream content: Retains original licenses (see individual case attributions)

## Support the Project

If you find this lab useful, please:
- ⭐ Star the repository
- 🔀 Share interesting cases
- 🐛 Report patterns you discover
- 🤝 Contribute your own experiments

---

**Disclaimer**: This is an independent community project. We are not affiliated with OpenAI, Tripo, BeatAPI, or any official Astra program. All trademarks belong to their respective owners.
