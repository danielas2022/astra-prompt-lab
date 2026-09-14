# Schema Documentation

This folder contains JSON schemas for the astra-prompt-lab data model.

## case.schema.json

The primary schema for all Astra prompt cases across all sources.

### Key Fields

- **id**: Unique identifier (lowercase, hyphenated)
- **source**: Origin source (`tripo`, `beatapi`, `x`, `spider`, `folk`, `openai`, `other`)
- **prompt**: The Astra prompt text
- **status**: Result status (`success`, `fail`, `partial`, `unknown`)
- **tags**: Categorization array
- **author**: Original author name/handle
- **authorLink**: Link to author profile
- **upstreamUrl**: Original content URL

### Validation

All case files must pass schema validation before merge:

```bash
# Example validation (requires ajv-cli)
ajv validate -s schema/case.schema.json -d "sources/*/cases/*.json"
```

## Usage

```javascript
// Node.js example
const Ajv = require('ajv');
const schema = require('./case.schema.json');
const ajv = new Ajv();
const validate = ajv.compile(schema);

const valid = validate(caseData);
if (!valid) {
  console.error(validate.errors);
}
```

## Extending the Schema

To propose schema changes:
1. Open an issue describing the use case
2. Update `case.schema.json`
3. Provide migration path for existing cases
4. Submit PR with examples

## Version History

- **v1.0** (2026-09-14): Initial schema with three-source model (tripo, beatapi, x)
