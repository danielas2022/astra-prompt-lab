# Example Cases

This directory contains **sample placeholder cases** that demonstrate the schema format and submission structure.

## ⚠️ Important Notice

These examples are **NOT real Astra prompting results**. They are illustrative samples created to help contributors understand:

- The JSON schema structure
- Required and optional fields
- How to document wins, fails, and mixed results
- Proper attribution format
- Effective tagging strategies

## 📋 Available Examples

### 1. `win-001-photorealistic-dragon.json`
Demonstrates a **successful case** where the generation met expectations on the first attempt. Shows:
- Complete field population
- Descriptive notes with specific details
- Comprehensive tagging
- Preview URL inclusion

### 2. `fail-001-abstract-impossible-geometry.json`
Demonstrates a **failed case** with clear failure analysis. Shows:
- Required `failure_reason` field
- Multiple attempt documentation
- Pattern identification (model limitations with impossible geometry)
- Learning value from negative results

### 3. `mixed-001-character-scene-composition.json`
Demonstrates a **partially successful case**. Shows:
- Balance between what worked and what didn't
- Detailed failure analysis for mixed results
- Pattern observation (character detail vs. environmental effects)
- Nuanced evaluation

## 🚀 Using These Examples

1. **Copy an example** that matches your case type (win/fail/mixed)
2. **Update all fields** with your real data:
   - Change the `id` to a unique identifier
   - Replace placeholder URLs with real sources
   - Use your actual prompt text
   - Update attribution to credit the real creator
3. **Validate** against `schema/case.schema.json`
4. **Move to the appropriate directory**:
   - Real wins → `cases/win/`
   - Real fails → `cases/fail/`
   - Real mixed → `cases/mixed/`

## 📖 Need Help?

See [CONTRIBUTING.md](../CONTRIBUTING.md) for complete submission guidelines.
