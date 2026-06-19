#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const [targetArg, outArg, ...flags] = process.argv.slice(2);

if (!targetArg || !outArg) {
  console.error('Usage: create_app_research_pack.mjs "<target app>" <output-dir> [--force]');
  process.exit(1);
}

const force = flags.includes("--force");
const target = targetArg.trim();
const outDir = path.resolve(outArg);
const now = new Date().toISOString();

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "target-app";
}

function writeFile(name, content) {
  const file = path.join(outDir, name);
  if (fs.existsSync(file) && !force) {
    throw new Error(`${file} exists. Re-run with --force to overwrite.`);
  }
  fs.writeFileSync(file, content);
}

fs.mkdirSync(outDir, { recursive: true });

writeFile(
  "00-research-brief.md",
  `# ${target} Research Brief

Generated: ${now}

## Target

- App:
- Website:
- Category:
- Audience:
- Buyer:
- Primary promise:
- Pricing:

## Sources

| Source | URL | Date Checked | Notes |
| --- | --- | --- | --- |
| Official site |  |  |  |
| Docs/help |  |  |  |
| Pricing |  |  |  |
| Launch/demo |  |  |  |
| Reviews |  |  |  |

## One-Sentence Read


## Why It Works


## Open Questions

`
);

writeFile(
  "01-pattern-ledger.md",
  `# ${target} Pattern Ledger

## Audience Pressure


## Onboarding


## First Value Moment


## Core Workflow

Input -> Transformation -> Output -> Next action

## Screen Architecture

| Screen | Job | Primary action | Notes |
| --- | --- | --- | --- |

## Data Objects

| Object | Fields | Relationships | Notes |
| --- | --- | --- | --- |

## UX Patterns To Adapt


## Weaknesses To Improve


## Do Not Copy

- Brand identity
- Exact copy
- Protected assets
- Confusingly similar visual trade dress
`
);

writeFile(
  "02-recreation-spec.md",
  `# ${target} Recreation Spec

## Original Product Contract

For [user], this product helps them [job] by [workflow], proven when [observable result].

## Build Mode

- [ ] research-only
- [ ] recreate-plan
- [ ] build-slice
- [ ] launch-grade

## Scope Cuts


## Routes / Screens

| Route or screen | Classification | Purpose | Proof |
| --- | --- | --- | --- |

## Components


## Data Model


## Implementation Plan

1.
2.
3.

## Verification Plan

- Build/typecheck:
- Tests:
- Browser proof:
- Mobile proof:
- Source citations:
`
);

writeFile(
  "03-ship-review.md",
  `# ${target} Ship Review

## Proof


## Principal Review

- Would a buyer understand the promise in 10 seconds?
- Is the main workflow complete without explanation?
- Does it feel intentionally designed?
- Is it meaningfully distinct from the researched target?
- Is there proof beyond code existing?

## Decision

- [ ] passes
- [ ] blocked
- [ ] re-scoped

## Remaining Risks

`
);

writeFile(
  "04-capability-matrix.md",
  `# ${target} Capability Matrix

| Capability | Evidence / source | Required v1 behavior | Later behavior | Acceptance criteria |
| --- | --- | --- | --- | --- |

`
);

writeFile(
  "05-implementation-blueprint.md",
  `# ${target} Implementation Blueprint

## Product Contract


## Recommended Architecture


## App / Client Architecture


## Service / Background Architecture


## Data Model


## State Machines


## Error Handling


## Security / Privacy


## Performance Targets


## Open Risks And Defaults

| Risk / unknown | Default decision | Why | How to verify |
| --- | --- | --- | --- |

`
);

writeFile(
  "06-model-runtime-decision.md",
  `# ${target} Model / Runtime Decision

## Hardware Target


## Candidate Models / Runtimes

| Candidate | Size / memory | Latency expectation | Quality expectation | Integration path | Decision |
| --- | --- | --- | --- | --- | --- |

## Recommended Default


## Fallback Plan


## Benchmark Plan

| Test | Input | Target | Pass criteria |
| --- | --- | --- | --- |

`
);

writeFile(
  "07-build-tasks.md",
  `# ${target} Build Tasks

## Milestones

| Order | Milestone | Files / modules | Acceptance criteria | Verification |
| --- | --- | --- | --- | --- |

## Dependency Decisions


## Do Not Build Yet

`
);

writeFile(
  "08-verification-matrix.md",
  `# ${target} Verification Matrix

| Area | Test | Command / method | Pass criteria | Evidence path |
| --- | --- | --- | --- | --- |
| Functional |  |  |  |  |
| UX |  |  |  |  |
| Performance |  |  |  |  |
| Privacy / security |  |  |  |  |
| Packaging / deploy |  |  |  |  |

`
);

writeFile(
  "research-ledger.json",
  JSON.stringify(
    {
      target,
      slug: slugify(target),
      generatedAt: now,
      sources: [],
      mode: "",
      researchDepth: "implementation-grade",
      status: "draft"
    },
    null,
    2
  ) + "\n"
);

console.log(`Created app research pack for "${target}" at ${outDir}`);
