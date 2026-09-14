# Astra Prompt Lab 🧪

**GPT-6 Astra Prompt Field Lab**: A community-driven collection of **both successful and failed** Astra prompting cases, real-world integrations, and experimental findings.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🎯 Mission

Astra Prompt Lab is an **experimental field lab** that collects real-world GPT-6 Astra prompting experiences — including **wins, failures, and mixed results**. We believe that learning from both successes and failures accelerates the community's understanding of what works (and what doesn't) with Astra's 3D generation capabilities.

## 🔬 How We Differ from Tripo's Awesome List

While [TripoGrowthLab/awesome-astra-prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts) is a curated collection of **successful prompts only**, Astra Prompt Lab takes a different approach:

| Feature | Tripo Awesome List | Astra Prompt Lab |
|---------|-------------------|------------------|
| **Approach** | Curated good-only | Field lab with wins & fails |
| **Content** | High-quality successful examples | Real-world mixed results |
| **Sources** | Manual curation | Folk prompts, X/Twitter, Spider, community |
| **Focus** | Showcase best practices | Learn from both success and failure |
| **Update Frequency** | ~2×/day | Continuous intake from multiple sources |

**We complement each other** — if you want proven prompts, check Tripo's list. If you want to understand edge cases, failure patterns, and experimental approaches, explore this lab.

## 📁 Repository Structure

```
astra-prompt-lab/
├── cases/
│   ├── win/          # Successful Astra generation cases
│   ├── fail/         # Failed attempts with lessons learned
│   └── mixed/        # Cases with partial success
├── sources/
│   ├── folk/         # Community-contributed prompts
│   ├── x/            # Curated from X/Twitter discussions
│   ├── spider/       # Automated Spider intake
│   └── openai/       # Placeholder for official OpenAI examples (future)
├── schema/
│   └── case.schema.json  # JSON Schema defining case format
├── examples/         # Sample cases demonstrating the schema
├── CONTRIBUTING.md   # How to contribute cases
└── CHANGELOG.md      # Project evolution
```

## 📊 Case Schema

Every case follows a structured JSON format defined in [`schema/case.schema.json`](schema/case.schema.json). Key fields include:

- `id`: Unique identifier
- `status`: `win` | `fail` | `mixed`
- `prompt`: The actual Astra prompt used
- `source`: Where this case originated (`folk`, `x`, `spider`, `openai`, `other`)
- `failure_reason`: Required for failed/mixed cases
- `attribution`: Credit to the original creator
- `tags`: Searchable keywords

See [`examples/`](examples/) for complete sample cases.

## 🤝 How to Contribute

We welcome contributions from the community! See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

**Quick start:**
1. Fork this repository
2. Add your case following the schema in [`schema/case.schema.json`](schema/case.schema.json)
3. Place it in the appropriate directory (`cases/win/`, `cases/fail/`, or `cases/mixed/`)
4. Open a pull request with attribution to the original creator

## ⚖️ Attribution & Ethics

- **Credit creators**: Always attribute the original prompt author
- **No fake official branding**: This is a community project, not affiliated with OpenAI or Tripo
- **Honest reporting**: Share real results, including failures
- **Respect IP**: Don't copy Tripo's curated content wholesale

## 🔗 Related Resources

- **Companion site**: [astra3d.app](https://astra3d.app) (affiliate to Tripo Studio via=3dpro)
- **Official Astra docs**: [OpenAI Astra documentation](https://platform.openai.com/docs/models/gpt-6)
- **Tripo's curated list**: [awesome-astra-prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts)

## 📜 License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.

## 🌟 Support the Project

If you find this lab useful, please:
- ⭐ Star the repository
- 🔀 Share interesting cases
- 🐛 Report patterns you discover
- 🤝 Contribute your own experiments

---

**Disclaimer**: This is an independent community project. We are not affiliated with OpenAI, Tripo, or any official Astra program. All trademarks belong to their respective owners.
