# Contributing to Astra Prompt Lab

Thank you for considering contributing to the Astra Prompt Lab! This guide will help you add your Astra prompt experiments to the collection.

## 🎯 What We're Looking For

We welcome **all real-world Astra prompting experiences**, including:

- ✅ **Successful generations** that worked as expected
- ❌ **Failed attempts** that didn't produce the desired result
- ⚖️ **Mixed results** that partially succeeded
- 🔬 **Experimental approaches** trying novel prompting techniques
- 🐛 **Edge cases** that reveal interesting model behaviors

## 📋 Before You Contribute

1. **Search existing cases** to avoid duplicates
2. **Follow the schema** defined in `schema/case.schema.json`
3. **Credit the original creator** if you're not the prompt author
4. **Be honest** about results — failed cases are valuable too!

## 🚀 How to Contribute

### Option 1: Submit via Pull Request (Recommended)

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

4. **Add your case JSON file**:
   - Place it in the appropriate directory:
     - `cases/win/` for successful cases
     - `cases/fail/` for failed cases
     - `cases/mixed/` for partially successful cases
   - Name it descriptively: `win-001-realistic-dragon.json`

5. **Validate your case** against the schema:
   ```bash
   # If you have Node.js installed:
   npm install -g ajv-cli
   ajv validate -s schema/case.schema.json -d cases/win/your-case.json
   ```

6. **Commit your changes**:
   ```bash
   git add cases/win/your-case.json
   git commit -m "Add case: realistic dragon generation"
   ```

7. **Push to your fork**:
   ```bash
   git push origin add-case-your-description
   ```

8. **Open a Pull Request** on GitHub with:
   - Clear title describing the case
   - Brief explanation in the PR description
   - Attribution to the original creator (if not you)

### Option 2: Submit via Issue

If you're not comfortable with Git:

1. Go to the [Issues page](https://github.com/danielas2022/astra-prompt-lab/issues)
2. Click "New Issue"
3. Choose "Submit a Case" template
4. Fill in all required fields following the schema
5. Submit the issue

## 📝 Case Format Example

Here's a minimal valid case (see `examples/` for complete samples):

```json
{
  "id": "win-001",
  "title": "Photorealistic Dragon with Fire",
  "status": "win",
  "source": "folk",
  "source_url": "https://example.com/my-experiment",
  "prompt": "A highly detailed, photorealistic dragon breathing fire, 8K resolution, cinematic lighting",
  "notes": "Generated on first attempt. The fire effects came out particularly well.",
  "created_at": "2026-09-14T10:30:00Z",
  "tags": ["dragon", "photorealistic", "fire", "creatures"],
  "attribution": {
    "name": "YourName",
    "url": "https://github.com/yourprofile"
  }
}
```

### Required Fields

- `id`: Unique identifier (format: `status-###`)
- `title`: Brief descriptive title
- `status`: One of `win`, `fail`, or `mixed`
- `source`: Origin type (`folk`, `x`, `spider`, `openai`, `other`)
- `prompt`: The actual prompt text
- `created_at`: ISO 8601 timestamp
- `attribution`: Object with at least `name` field

### Conditional Requirements

- `failure_reason`: **Required** when `status` is `fail` or `mixed`

## 🏷️ Choosing the Right Directory

- **`cases/win/`**: The output matched or exceeded expectations
- **`cases/fail/`**: The generation failed completely or produced unusable results
- **`cases/mixed/`**: Some aspects worked, others didn't (explain in `failure_reason`)

## ✍️ Attribution Guidelines

### If You're the Original Prompt Author:
```json
"attribution": {
  "name": "Your Name",
  "url": "https://github.com/yourprofile"
}
```

### If You're Sharing Someone Else's Prompt:
```json
"attribution": {
  "name": "Original Creator's Name",
  "url": "https://twitter.com/creator/status/123456",
  "license": "CC BY 4.0"
}
```

**Always get permission** before sharing others' prompts, or ensure they were shared publicly with appropriate licensing.

## ❌ What We Don't Accept

- 🚫 **Wholesale copies** from other curated lists (e.g., Tripo's awesome list)
- 🚫 **Fake or fabricated** results
- 🚫 **Spam or promotional** content without real prompting value
- 🚫 **Cases without proper attribution** when the creator is known
- 🚫 **NSFW or offensive** content

## 🔍 Review Process

1. Maintainers will review your PR for:
   - Schema compliance
   - Proper attribution
   - Duplicate detection
   - Content policy alignment

2. You may be asked to:
   - Add missing information
   - Update attribution
   - Move to a different category

3. Once approved, your case will be merged!

## 🤝 Community Guidelines

- **Be respectful** of other contributors
- **Learn from failures** — they're just as valuable as successes
- **Share insights** in the `notes` field
- **Use descriptive tags** to help others find relevant cases
- **Keep it real** — honest reporting benefits everyone

## 💡 Tips for High-Quality Contributions

1. **Add context** in the `notes` field — what was your goal? What surprised you?
2. **Include preview URLs** when possible (ensure you have rights to share the output)
3. **Tag thoroughly** — think about what others might search for
4. **Document model versions** if you know them
5. **Explain failures clearly** — what specifically went wrong?

## 📬 Questions?

- Open a [Discussion](https://github.com/danielas2022/astra-prompt-lab/discussions) for general questions
- Open an [Issue](https://github.com/danielas2022/astra-prompt-lab/issues) for bug reports or suggestions

## 📜 License

By contributing, you agree that your contributions will be licensed under the same [MIT License](LICENSE) that covers this project.

---

Thank you for helping build a comprehensive, honest collection of Astra prompting knowledge! 🎉
