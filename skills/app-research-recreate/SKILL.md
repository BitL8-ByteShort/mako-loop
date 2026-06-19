---
name: app-research-recreate
description: Use this when Codex must perform world-class, implementation-grade research on an existing app, website, SaaS, mobile product, marketplace, AI tool, local-first app, or game and recreate an original high-quality equivalent from proven patterns. Trigger on "research this app", "clone/recreate this", "make an app like X", "reverse engineer competitor", "no question how to build it", or requests to study apps and rebuild them. Requires current research, architecture, build plan, and verification.
---

# App Research Recreate

## Core Rule

Research the target like a product strategist and rebuild like a principal engineer. Extract patterns, workflows, information architecture, interaction models, technical architecture, model/runtime choices, constraints, and quality bars, then create an original implementation.

Do not waste the user's time with generic caveats. Keep the boundary practical: compete on the same outcome and workflow quality; do not use someone else's protected branding, assets, private APIs, proprietary copy, or account-only material without permission.

This is a mode pack for the `mako-loop` plugin. Use the MakoLoop for scope, proof, and ship/no-ship discipline.

## Start Here

Read `../../references/app-research-recreate.md` when doing a real research/rebuild task. Use it as the research rubric and output contract.

For "no question how to build it" tasks, also use the `implementation-grade-research` skill and read `../../references/implementation-grade-research.md`.

If a structured project folder would help, run:

```bash
node ../../scripts/create_app_research_pack.mjs "<target app>" ./research/<slug>
```

## Research Requirements

Use current sources for modern apps. Browse live public surfaces unless the user explicitly provides enough screenshots/files and says not to browse.

Prefer:

- Official website, docs, changelog, pricing, security/trust pages.
- App Store, Play Store, Chrome Web Store, marketplace listings.
- Product Hunt, launch videos, demos, help docs, public screenshots.
- Reviews and comparison pages for pain points, not as sole truth.
- The user's screenshots, screen recordings, or account access when available.

Capture source URLs and dates in the research brief. Do not rely on memory for current pricing, feature claims, rankings, or availability.

## Rebuild Modes

Choose the smallest mode that satisfies the request:

- `research-only`: produce a benchmark brief and opportunity map.
- `recreate-plan`: produce a screen/workflow spec and implementation plan.
- `implementation-grade-research`: produce enough current research, architecture, model/runtime decisions, data flows, tasks, and acceptance criteria that an engineer can start building without guessing.
- `build-slice`: implement one complete workflow inspired by the target.
- `launch-grade`: implement, verify, polish, and produce a ship/no-ship report.

If the user says "no question how to build it", "fully functional", "seasoned professional app", or names specific technical constraints, default to `implementation-grade-research` before code.

If the user says "recreate it" without scope, default to `build-slice` around the target's main magic moment.

## Pattern Extraction

Create a ledger with:

- Audience and buyer.
- Primary promise.
- Onboarding path.
- First value moment.
- Core workflow.
- Navigation and screen architecture.
- Data objects and inferred model.
- Integrations and platform dependencies.
- Pricing and packaging signals.
- Trust/security/compliance signals.
- Empty states, failure states, and support surfaces.
- UX details worth adapting.
- Gaps or weaknesses to improve.

## Implementation-Grade Requirements

For build-grade research, produce:

- Product requirements and non-goals.
- User journeys and edge cases.
- Screen map and command/menu surface.
- System architecture.
- Data model and persistence.
- Integration and OS permission requirements.
- Model/runtime selection with constraints, benchmarks, and fallback plan.
- Latency, privacy, offline, security, and reliability requirements.
- Implementation sequence with file/module boundaries.
- Acceptance criteria and verification matrix.
- Open risks with recommended decisions.

## Recreation Rules

Build an original product that competes on outcome, not a pixel clone.

Allowed:

- Similar workflow mechanics.
- Common UI patterns.
- Functional equivalents.
- Original copy and naming.
- Original visual system adapted to the current project.

Avoid unless the user owns or has permission:

- Exact page copy.
- Logos, icons, mascots, illustrations, screenshots, videos, or brand assets.
- Distinctive layout combinations that make the result confusingly similar.
- Scraping private app screens, paid-only content, or non-public API behavior.

## Verification

For websites and apps, use browser-visible proof. Check desktop and mobile viewports, empty states, loading/error states, and the primary workflow. For games, verify the playable loop, controls, frame/render health, and reset/failure states.

Completion requires:

- Research brief with sources.
- Pattern ledger.
- Rebuild target and scope cuts.
- Implementation-grade blueprint when requested.
- Implementation proof.
- Principal review: does this feel world-class for the chosen wedge?
