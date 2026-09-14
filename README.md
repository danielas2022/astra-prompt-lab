# Astra Prompt Lab

English | [简体中文](README.zh-CN.md)

**GPT-6 Astra Prompt Field Lab**: Independent research repository aggregating wins, fails, and community patterns from multiple sources.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 🎯 What This Is

This is an **independent field lab** for GPT-6 Astra prompts — capturing real creator experiences across wins, fails, and mixed results. Unlike curated showcases, we deliberately preserve failure cases because they're the scarcest learning asset.

We aggregate and analyze Astra (GPT-6) 3D generation prompts from multiple sources to identify patterns, failure modes, and best practices. **Independent of official Tripo lists**, focusing on practical field research with **both successful and failed cases**.

---

## 💡 Why This Exists

![Learning Loop](assets/learning-loop.png)

### The Blind Spot of Curated Lists

When you browse Tripo's curated awesome list, you see carefully selected success cases. They're beautiful, but incomplete — **you never see what doesn't work**.

A success-only dataset misleads three groups:

1. **Creators**: Copy "winning prompts" only to get completely different results, not knowing why
2. **Researchers**: Lack failure mode distributions, can't build realistic evaluation benchmarks
3. **Site owners / Tool developers**: Need complete edge cases to test API robustness

### Failure Cases Are Reproducible Assets

Unlike success cases (which may involve luck, hidden parameters, or version drift), **failure cases tend to be highly reproducible**:

- "Glass always deforms when generating buildings" ← structural issue
- "Animal legs frequently disconnect" ← boundary case
- "Crashes when prompt contains 'transparent'" ← bug pattern

Once documented, these failures become:

- ✅ **Negative sample datasets** for model evaluation
- ✅ **Edge case test suites** for API stability validation
- ✅ **Anti-pattern handbooks** for creator education

### Who We Serve

- **Creators**: Want to know what pitfalls others hit, avoid them fast
- **Researchers / Developers**: Need real failure distributions to train / test systems
- **Site owners / Affiliates**: Need complete case libraries for content marketing and SEO (we run astra3d.app ourselves)

---

## 📊 How We Differ from Tripo's Awesome List

While [TripoGrowthLab/awesome-astra-prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts) is a curated collection of **successful prompts only**, Astra Prompt Lab takes a different approach:

| Feature | Tripo Awesome List | Astra Prompt Lab |
|---------|-------------------|------------------|
| **Approach** | Curated good-only | Field lab with wins & fails |
| **Content** | High-quality successful examples | Real-world mixed results |
| **Sources** | Manual curation | Three-source intake: Tripo + BeatAPI + X |
| **Focus** | Showcase best practices | Learn from both success and failure |
| **Update Frequency** | ~2×/day | Continuous intake from multiple sources |

**We complement each other** — if you want proven prompts, check Tripo's list. If you want to understand edge cases, failure patterns, and experimental approaches, explore this lab.

---

## 🔄 Primary Sources

![Data Sources](assets/data-sources.png)

We integrate prompts from three locked sources:

### Source 1: Tripo — [TripoGrowthLab/awesome-astra-prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts)

- **Type**: Mostly success cases
- **Frequency**: Daily automated scans
- **Strategy**: Compare with last snapshot, sync incremental additions
- **Note**: Community-curated growth list (NOT product-official)

### Source 2: BeatAPI — [BeatAPI/awesome-3d-prompts](https://github.com/BeatAPI/awesome-3d-prompts)

- **Type**: Cross-model 3D prompts (includes Astra-relevant)
- **Frequency**: Weekly scans
- **Strategy**: Filter Astra tags, dedupe, import
- **Note**: First-class integrated source for 3D prompt patterns

### Source 3: X/Twitter — Real-world failure cases

- **Type**: **Actively collected failures / mixed results**
- **Frequency**: Real-time + manual review
- **Strategy**:
  - Search keywords: `"Astra" + "failed"`, `"Astra" + "doesn't work"`, `"Astra" + "bug"`
  - Manual verification: Confirm genuine failure cases, not user misunderstandings
  - Anonymization: Obfuscate if privacy concerns exist
- **Note**: Prioritized for failure case harvesting from X

See [`sources/README.md`](sources/README.md) for detailed source documentation.

---

## 📦 Repository Structure

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
├── assets/           # Images and diagrams
├── CONTRIBUTING.md   # How to contribute cases
└── CHANGELOG.md      # Project evolution
```

---

## 📋 Schema

All prompt cases follow a standardized JSON format defined in [`schema/case.schema.json`](schema/case.schema.json). Key fields include:

- `id`: Unique identifier
- `source`: Where this case originated (`tripo`, `beatapi`, `x`, `spider`, `folk`, `openai`, `other`)
- `prompt`: The actual Astra prompt text
- `status`: `success` | `fail` | `partial` | `unknown`
- `tags`: Searchable keywords
- `author`: Original creator attribution
- `authorLink`: Link to creator profile
- `upstreamUrl`: Source content link

### Case Types Explained

![Pipeline Overview](assets/pipeline-overview.png)

- **WIN (Success)**: Prompt generates high-quality 3D model as expected
- **FAIL (Failure)**: Cannot generate at all, or output severely deviates from expectations
- **MIXED (Mixed)**: Partially successful but with notable defects (still valuable as counter-examples)

See [`examples/`](examples/) and [`docs/examples.md`](docs/examples.md) for complete sample cases.

---

## 🤝 Contributing

We welcome community contributions, **especially failure cases**! See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

### Submit a Failure Case (Most Valuable)

1. Fork this repository
2. Add your case following the schema in [`schema/case.schema.json`](schema/case.schema.json)
3. Submit to `sources/folk/cases/` with `source: "folk"`
4. **Required**: Attach output screenshots or descriptions proving the failure is reproducible
5. Open a pull request with proper attribution (title format: `[FAIL] Brief description`)

### Submit Success / Mixed Cases

Same process, but note:

- Success cases: We prioritize unconventional ones (multi-object combos, complex materials)
- Mixed cases: Explain what worked and what failed

Direct PR contributions go into `sources/folk/`.

### Why Star?

- ⭐ **For creators**: Star count signals credibility to newcomers ("this library is used")
- ⭐ **For researchers**: GitHub stars commonly used for dataset citation counts
- ⭐ **For us**: Motivates continued maintenance (we're site owners, but also community members)

---

## ⚠️ Attribution & Ethics

### Data Source Attribution

- **TripoGrowthLab/awesome-astra-prompts**: Community-maintained curated list, not Tripo official
- **BeatAPI/awesome-3d-prompts**: Cross-model prompt library maintained by Beat API team
- **X (Twitter) cases**: Collected from publicly posted content, anonymized

We preserve original source links (`source_url`) in each case to respect original authors.

### Commercial Affiliation

- This project's maintainers operate **astra3d.app**, an affiliate site promoting Tripo Studio (via=3dpro)
- We are **not** official teams of OpenAI, Tripo, or Beat API
- Case library uses MIT License (see LICENSE), free to use with attribution

### Failure Case Ethics

- **Credit creators**: Always attribute the original prompt author
- **No fake official branding**: This is a community project, not affiliated with OpenAI, Tripo, or BeatAPI
- **Honest reporting**: Share real results, including failures
- **Respect IP**: Upstream content retains original licenses and attributions
- We don't collect "failure cases" that are offensive or defamatory
- We don't criticize the Astra model itself — failures are a normal part of AI research
- We encourage constructive discussion, not mere venting

---

## 📚 Related Resources

- **Companion site**: [astra3d.app](https://astra3d.app) (affiliate to Tripo Studio via=3dpro)
- **Official Astra docs**: [OpenAI Astra documentation](https://platform.openai.com/docs/models/gpt-6)
- **Tripo's curated list**: [TripoGrowthLab/awesome-astra-prompts](https://github.com/TripoGrowthLab/awesome-astra-prompts)
- **BeatAPI's 3D prompts**: [BeatAPI/awesome-3d-prompts](https://github.com/BeatAPI/awesome-3d-prompts)

---

## 📮 Contact

- **Website**: [astra3d.app](https://astra3d.app)
- **GitHub Issues**: Have suggestions or found issues? [Open an issue](https://github.com/danielas2022/astra-prompt-lab/issues)
- **Email**: See GitHub profile (for business inquiries or privacy concerns)

---

## 🙏 Acknowledgments

Thanks to all creators willing to publicly share their failure cases — your "crash scenes" are future-proofing guides for others.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.

This lab structure and tooling: MIT  
Upstream content: Retains original licenses (see individual case attributions)

---

## 💫 Support the Project

If you find this lab useful, please:
- ⭐ Star the repository
- 🔀 Share interesting cases
- 🐛 Report patterns you discover
- 🤝 Contribute your own experiments

---

<p align="center">
  <sub>Independently maintained · Unofficial project · Data-driven</sub><br>
  <sub>Built with ❤️ by <a href="https://astra3d.app">astra3d.app</a> team</sub>
</p>

---

**Disclaimer**: This is an independent community project. We are not affiliated with OpenAI, Tripo, BeatAPI, or any official Astra program. All trademarks belong to their respective owners.
