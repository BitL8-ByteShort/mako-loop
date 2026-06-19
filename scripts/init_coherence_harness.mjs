#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const [repoArg, goalArg, ...flags] = process.argv.slice(2);

if (!repoArg || !goalArg) {
  console.error('Usage: init_coherence_harness.mjs <repo-root> "<goal>" [--force]');
  process.exit(1);
}

const repoRoot = path.resolve(repoArg);
const goal = goalArg.trim();
const force = flags.includes("--force");
const harnessDir = path.join(repoRoot, ".mako-loop");
const checkpointsDir = path.join(harnessDir, "checkpoints");
const generatedAt = new Date().toISOString();

function writeIfNeeded(file, content) {
  if (fs.existsSync(file) && !force) return false;
  fs.writeFileSync(file, content);
  return true;
}

fs.mkdirSync(checkpointsDir, { recursive: true });

const files = [
  [
    "state.md",
    `# MakoLoop State

Generated: ${generatedAt}

## Goal

${goal}

## Locked Outcome


## User / Buyer


## Scope


## Out Of Scope


## Constraints


## Proof Contract


## Stop Conditions

- passes:
- blocked:
- re-scoped:
`
  ],
  [
    "decisions.md",
    `# Decisions

Generated: ${generatedAt}

Append product and architecture decisions here.

| Time | Decision | Reason | Alternatives Rejected |
| --- | --- | --- | --- |
`
  ],
  [
    "evidence.md",
    `# Evidence

Generated: ${generatedAt}

Append commands, screenshots, live URLs, data checks, failures, and fixes here.

| Time | Evidence | Result | Notes |
| --- | --- | --- | --- |
`
  ],
  [
    "review.md",
    `# Principal Review

Generated: ${generatedAt}

## Current Review

- Would this embarrass us if a buyer clicked it?
- Does the main workflow work without explanation?
- Did we reduce confusion?
- Did proof match the claim?

## Risks


## Ship / No-Ship

`
  ],
  [
    "next.md",
    `# Next Action

Generated: ${generatedAt}

## Next Smallest Action


## Current Blocker


## Files / Surfaces To Inspect Next


## Do Not Touch

`
  ]
];

const written = [];
const preserved = [];

for (const [name, content] of files) {
  const file = path.join(harnessDir, name);
  if (writeIfNeeded(file, content)) {
    written.push(path.relative(repoRoot, file));
  } else {
    preserved.push(path.relative(repoRoot, file));
  }
}

console.log(
  JSON.stringify(
    {
      ok: true,
      repoRoot,
      harnessDir,
      written,
      preserved,
      force
    },
    null,
    2
  )
);
