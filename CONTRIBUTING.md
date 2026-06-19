# Contributing

MakoLoop is intentionally strict. Contributions should make agent work more coherent, verifiable, secure, or shippable.

## Development

```bash
npm run validate
```

Keep changes portable:

- No hardcoded local paths.
- No private hostnames, internal project names, or credentials.
- No examples that require paid account access.
- No vague placeholders in public docs.

## Skill Changes

Every `SKILL.md` must include frontmatter:

```yaml
---
name: skill-name
description: Short trigger and use guidance.
---
```

Descriptions must stay under 1024 characters.

## Script Changes

Scripts must run with Node.js 18 or newer and must not require third-party packages unless the repo explicitly adds and validates them.

## Pull Request Bar

A pull request should include:

- What changed.
- Why it improves the loop.
- Proof from `npm run validate`.
- Any behavior risks or compatibility notes.
