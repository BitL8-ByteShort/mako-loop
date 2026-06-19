# Agent Instructions

This repo is the public MakoLoop Codex plugin.

Before changing behavior:

1. Read `README.md`.
2. Read `.codex-plugin/plugin.json`.
3. Read the affected `skills/*/SKILL.md` and referenced `references/*.md`.
4. Run `npm run validate` before declaring completion.

Rules:

- Keep the repo portable and public-safe.
- Do not add hardcoded local paths, private hostnames, internal project names, secrets, tokens, or credentials.
- Keep helper scripts dependency-free unless package metadata and validation are updated.
- If a skill references scripts or references, use paths relative to the skill file, usually `../../scripts/...` or `../../references/...`.
- Preserve the boss/subagent model: the main session owns product direction, integration, deploy decisions, and final completion.
