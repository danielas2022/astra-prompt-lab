# Contributing to astra-prompt-lab

Thank you for contributing to the Astra prompt field lab!

## Overview

This repository aggregates Astra (GPT-6) 3D generation prompts from three primary sources plus community contributions. We welcome **all real-world Astra prompting experiences**, including successes, failures, and mixed results.

## 🎯 What We're Looking For

- ✅ **Successful generations** that worked as expected
- ❌ **Failed attempts** that didn't produce the desired result
- ⚖️ **Mixed results** that partially succeeded
- 🔬 **Experimental approaches** trying novel prompting techniques
- 🐛 **Edge cases** that reveal interesting model behaviors

## Primary Sources (Automated)

These sources are automatically synced - **do not manually edit**:
- `sources/tripo/` — TripoGrowthLab daily scan
- `sources/beatapi/` — BeatAPI regular sync
- `sources/x/` — X/Twitter harvesting (failures prioritized)
- `sources/spider/` — Automation placeholder (future)

## How to Contribute

### Community Prompt Submissions

To submit your own Astra prompt cases:

1. **Fork this repository** to your GitHub account

2. **Clone your fork locally**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/astra-prompt-lab.git
   cd astra-prompt-lab
   ```

3. **Create a new branch**:
   ```bash
   git checkout -b add-case-your-description
   ```

4. **Add your case(s)** to `sources/folk/cases/` following the schema
   - Name it descriptively: `folk-dragon-001.json`
   - Set `source: "folk"` in your case JSON
   - Include attribution (your name/handle, link)

5. **Validate against the schema**:
   ```bash
   # If you have Node.js installed:
   npm install -g ajv-cli
   ajv validate -s schema/case.schema.json -d sources/folk/cases/your-case.json
   ```

6. **Commit your changes**:
   ```bash
   git add sources/folk/cases/your-case.json
   git commit -m "Add folk case: realistic dragon generation"
   ```

7. **Push to your fork**:
   ```bash
   git push origin add-case-your-description
   ```

8. **Open a pull request** from your fork to the main repository

### Reporting Issues

Found a problem? Open an issue:
- Schema validation errors
- Broken intake pipelines
- Documentation gaps
- Incorrect attributions

### Improving Documentation

Help us improve:
- Intake process documentation
- Schema examples
- Source integration guides

## Case JSON Format

Each prompt case should follow [`schema/case.schema.json`](schema/case.schema.json).

### Minimal Example

```json
{
  "id": "folk-example-001",
  "source": "folk",
  "prompt": "A steampunk clockwork dragon with brass gears",
  "status": "success"
}
```

### Full Example

```json
{
  "id": "folk-dragon-001",
  "source": "folk",
  "title": "Steampunk Dragon Success",
  "prompt": "A steampunk clockwork dragon with brass gears and steam vents",
  "status": "success",
  "tags": ["dragon", "steampunk", "mechanical", "brass"],
  "category": "character",
  "author": "Your Name",
  "authorLink": "https://twitter.com/yourhandle",
  "notes": "Combining organic and mechanical elements works well",
  "createdAt": "2026-09-14T12:00:00Z"
}
```

### Required Fields

- `id` — Unique identifier (lowercase, hyphenated)
- `source` — Must be one of: `tripo`, `beatapi`, `x`, `spider`, `folk`, `openai`, `other`
- `prompt` — The Astra prompt text
- `status` — One of: `success`, `fail`, `partial`, `unknown`

### Optional But Recommended

- `title` — Brief descriptive title
- `tags` — Categorization array
- `author` — Original author name/handle
- `authorLink` — Link to author profile
- `upstreamUrl` — Original content URL (if applicable)
- `notes` — Additional observations
- `failureReason` — Required for `status: "fail"` or `status: "partial"`

See [`docs/examples.md`](docs/examples.md) for complete examples.

## Source Field Values

When creating cases, use the appropriate `source` value:

- `"tripo"` — From TripoGrowthLab/awesome-astra-prompts
- `"beatapi"` — From BeatAPI/awesome-3d-prompts
- `"x"` — From X/Twitter
- `"spider"` — From automation pipelines
- `"folk"` — Community contributions (your PRs!)
- `"openai"` — Official OpenAI examples (future)
- `"other"` — Other sources

## Attribution Requirements

All cases **must** properly attribute original creators:

- `author` — Original author name/handle
- `authorLink` — Profile or post URL
- `upstreamUrl` — Source content link (if applicable)

## Code of Conduct

- Respect original attributions
- Follow the schema strictly
- Provide clear, descriptive commit messages
- Keep PRs focused and scoped
- Be honest about results (failures are valuable!)
- No fake official branding — this is a community project

## Review Process

Community PRs are reviewed for:
- Schema compliance
- Proper attribution
- Non-duplicate content
- Appropriate tags and categorization

## File Organization

```
sources/
├── tripo/cases/       # TripoGrowthLab synced cases (automated)
├── beatapi/cases/     # BeatAPI synced cases (automated)
├── x/cases/           # X/Twitter curated cases (automated)
├── folk/cases/        # Community contributions (YOUR PRs!)
├── spider/cases/      # Future automation
└── openai/cases/      # Future official examples
```

Additionally, cases may be organized in:
```
cases/
├── win/               # Successful cases
├── fail/              # Failed cases
└── mixed/             # Partially successful cases
```

## Questions?

Open a discussion or issue in this repo.

## License

By contributing, you agree your contributions will be licensed under the same terms as the project:
- MIT License for tooling and structure
- Original licenses for upstream content

## Useful Links

- Schema: [`schema/case.schema.json`](schema/case.schema.json)
- Examples: [`docs/examples.md`](docs/examples.md)
- Intake Process: [`docs/intake.md`](docs/intake.md)
- Sources Overview: [`sources/README.md`](sources/README.md)

---

**Thank you for contributing to the Astra prompt field lab!** 🚀
