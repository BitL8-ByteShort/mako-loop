[![MakoLoop animated hero: mako shark circling a glowing cloud-code core with code trails](assets/makoloop-hero.gif)](assets/makoloop-hero.mp4)

# MakoLoop

A principal-grade product-engineering loop for AI coding agents.

MakoLoop is a Codex plugin that turns vague product requests into a disciplined build loop: outcome lock, scope challenge, coherence harness, implementation-grade research, boss/subagent orchestration, security and database review, verification, and a hard done gate.

Use it when an AI-built project keeps widening, losing coherence, accumulating disconnected surfaces, or stopping at "almost done."

## What It Adds

- **MakoLoop**: the main product-engineering loop.
- **Coherence harness**: durable `.mako-loop/` project state for long tasks.
- **Implementation-grade research**: research that tells an engineer what to build, how to build it, and how to verify it.
- **App research/recreation**: competitor research and original rebuild planning.
- **Boss/subagent orchestration**: keep the main session as project boss while delegating scoped work.
- **Security and database review**: read-only review for auth, tenancy, PII, SQL/ORM, migrations, roles, and deploy exposure.
- **Mode packs**: source-led website production, app, game, and launch-readiness quality loops.
- **Hard done gate**: final state must be `DONE`, `BLOCKED`, or `RESCOPED`.

## Install Locally

Clone the repo:

```bash
git clone https://github.com/BitL8-ByteShort/mako-loop.git ~/plugins/mako-loop
cd ~/plugins/mako-loop
npm run validate
```

Add it to a local Codex marketplace:

```json
{
  "name": "personal",
  "interface": {
    "displayName": "Personal"
  },
  "plugins": [
    {
      "name": "mako-loop",
      "source": {
        "source": "local",
        "path": "/absolute/path/to/mako-loop"
      },
      "policy": {
        "installation": "AVAILABLE",
        "authentication": "ON_INSTALL"
      },
      "category": "Developer Tools"
    }
  ]
}
```

Then install it through Codex using your configured marketplace.

## Use

Use the main loop:

```text
Use MakoLoop on this app. Keep going until the primary workflow is DONE, BLOCKED, or RESCOPED.
```

Initialize durable state for long work:

```bash
node scripts/init_coherence_harness.mjs /path/to/project "Ship the first paid customer workflow"
```

Checkpoint before resuming or finishing:

```bash
node scripts/checkpoint_coherence.mjs /path/to/project --label "before-final-review"
```

Create scoped subagent prompts:

```bash
node scripts/create_subagent_prompt_pack.mjs /path/to/project "Ship the onboarding workflow"
```

Create an app research pack:

```bash
node scripts/create_app_research_pack.mjs "Example App" ./research/example-app
```

Audit a JavaScript or TypeScript web app for route drift:

```bash
node scripts/product_surface_audit.mjs /path/to/project
```

## Mode Packs

- `mako-loop`: main product-engineering loop.
- `coherence-harness`: durable state and checkpoints.
- `implementation-grade-research`: build-ready research and architecture.
- `app-research-recreate`: research existing products and design original equivalents.
- `boss-subagent-orchestration`: scoped subagents with the session agent as boss.
- `killer-website`: source-led website production loop for serious sites, landing pages, product pages, local business sites, and marketing surfaces.
- `killer-app`: complete SaaS/product workflow loop.
- `killer-game`: playable loop, feel, feedback, and verification.
- `launch-readiness`: buyer-facing final pass.

## Subagent Roles

MakoLoop treats the current session as the boss. Subagents are scoped helpers:

- `explorer`: read-only current-state discovery.
- `researcher`: current external research with sources.
- `worker`: bounded implementation in non-overlapping files.
- `security`: read-only security and database-security review.
- `reviewer`: independent bug, regression, UX, and proof review.

The boss owns product direction, integration, verification, deploy decisions, and the final state.

## Security Review Scope

Run a security subagent before shipping changes that touch:

- Authentication, authorization, ownership checks, and tenant isolation.
- Database schema, migrations, rollback risk, SQL/ORM queries, raw SQL, RLS or tenant filters, DB roles, and connection strings.
- PII, CRM/customer records, logs, telemetry, retention, and least-privilege access.
- Payments, billing, admin tooling, file uploads, public endpoints, webhooks, API keys, env handling, dependencies, deploy config, or infrastructure.

Security agents are read-only by default. They should not print secrets, run destructive commands, deploy, or scan live public services without explicit approval.

## Examples

See:

- [Build a SaaS app](examples/build-a-saas-app.md)
- [Research and recreate an app](examples/research-and-recreate-app.md)
- [Killer website](examples/killer-website.md)
- [Security and database review](examples/security-database-review.md)
- [Subagent orchestration](examples/subagent-orchestration.md)
- [Launch readiness](examples/launch-readiness.md)

## Validate

```bash
npm run validate
```

Validation checks the plugin manifest, skill frontmatter, public-safe strings, script smoke tests, generated research packs, generated subagent prompts, and route-audit output.

## License

MIT
