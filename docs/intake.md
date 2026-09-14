# Intake Process

This document describes how prompt cases are ingested into the lab from each source.

## Overview

The astra-prompt-lab uses a multi-source intake strategy to capture diverse prompt patterns, successes, and failures.

## Source-Specific Intake

### 1. Tripo — Daily Scan

**Source**: https://github.com/TripoGrowthLab/awesome-astra-prompts

**Cadence**: Once per day

**Process**:
1. Automated daily scan of the upstream repository
2. Parse markdown/YAML content into standardized JSON cases
3. Preserve original attribution links
4. Tag with `source: "tripo"`
5. Store in `sources/tripo/cases/`

**Priority**: Curated success cases and best practices

---

### 2. BeatAPI — Regular Sync

**Source**: https://github.com/BeatAPI/awesome-3d-prompts

**Cadence**: Regular sync (on upstream updates)

**Process**:
1. Monitor upstream repository for changes
2. Parse and normalize 3D prompt patterns
3. Preserve original attribution
4. Tag with `source: "beatapi"`
5. Store in `sources/beatapi/cases/`

**Priority**: Technique patterns and structured 3D prompt strategies

---

### 3. X/Twitter — Failure Hunt

**Source**: X/Twitter platform

**Cadence**: Continuous monitoring

**Process**:
1. Search for Astra-related failure reports
2. **Priority**: status=fail cases (edge cases, bugs, limitations)
3. Extract prompt + failure context
4. Link to original post
5. Tag with `source: "x"`
6. Store in `sources/x/cases/`

**Priority**: Real-world failure modes and limitations

**Search Strategy**:
- Keywords: "Astra", "GPT-6 3D", "generation failed"
- Hashtags: #AstraFails, #3DGeneration
- Community reports of broken/unexpected outputs

---

### 4. Spider — Automation Layer (Future)

**Purpose**: Generic crawler/automation infrastructure

**Status**: Placeholder for future pipeline expansions

**Use Cases**:
- Cross-platform harvesting
- Scheduled bulk ingests
- API-driven imports

Folder: `sources/spider/` (reserved)

---

## Attribution Requirements

All ingested cases **must** include:
- `author` — Original author name/handle
- `authorLink` — Profile or post URL
- `upstreamUrl` — Source content link (if applicable)

## Deduplication

Cases are deduplicated by:
1. Prompt text similarity (fuzzy match)
2. Author + date combination
3. Upstream URL

Duplicates across sources are merged with priority: `x` > `beatapi` > `tripo`

## Validation

All cases are validated against [`schema/case.schema.json`](../schema/case.schema.json) before commit.

## Automation

Intake automation runs via:
- GitHub Actions (scheduled)
- Manual trigger scripts in `scripts/`

See individual source folders for sync scripts.

---

## Manual Contributions

Community PRs go to `sources/folk/` — see [CONTRIBUTING.md](../CONTRIBUTING.md).
