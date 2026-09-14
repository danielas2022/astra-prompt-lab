# Cases Directory

This directory contains real-world Astra prompting cases organized by outcome.

## 📁 Structure

- **`win/`** — Successful generations that met or exceeded expectations
- **`fail/`** — Failed attempts with documented lessons learned
- **`mixed/`** — Cases with partial success (some aspects worked, others didn't)

## 📝 Naming Convention

Use descriptive filenames that include the case ID and a brief identifier:

```
[status]-[###]-[short-description].json
```

**Examples:**
- `win-042-steampunk-airship.json`
- `fail-015-transparent-glass-sphere.json`
- `mixed-008-underwater-ruins.json`

## ✅ Before Adding a Case

1. Validate your JSON against `schema/case.schema.json`
2. Ensure proper attribution to the original creator
3. Choose the correct subdirectory based on outcome
4. Check for duplicates
5. Follow the guidelines in [CONTRIBUTING.md](../CONTRIBUTING.md)

## 🔍 Finding Cases

All cases follow the schema defined in `schema/case.schema.json` and can be searched by:
- `tags` field for keywords
- `source` field for origin type
- `status` field for outcome type

## 📊 Current Stats

This section will be updated as cases are added to the repository.

---

**Note**: Empty directories are placeholders for incoming contributions. See [examples/](../examples/) for sample case formats.
