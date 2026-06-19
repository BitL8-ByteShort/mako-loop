---
name: coherence-harness
description: Use this when Codex must preserve coherence across a long task, multi-file implementation, product rebuild, live deploy, research project, autonomous continuation, or "keep going until built" request. Creates and refreshes durable `.mako-loop/` state files for goal, scope, decisions, evidence, review, next action, and checkpoints so self-correction is based on project evidence instead of prompt memory.
---

# Coherence Harness

Use this mode pack with `mako-loop` whenever task coherence matters more than a one-shot answer.

## Core Rule

Move long-task memory out of the model and into durable project files. Before continuing, re-read the harness. Before calling work complete, checkpoint it.

Use the hard done gate from `mako-loop`: final state must be `DONE`, `BLOCKED`, or `RESCOPED`. If the harness shows unfinished work and no blocker, continue working.

## Initialize

When `.mako-loop/` is missing or stale for the current goal:

```bash
node ../../scripts/init_coherence_harness.mjs <repo-root> "<goal>"
```

This creates:

- `.mako-loop/state.md`
- `.mako-loop/decisions.md`
- `.mako-loop/evidence.md`
- `.mako-loop/review.md`
- `.mako-loop/next.md`
- `.mako-loop/checkpoints/`

## Checkpoint

Run before resuming, after significant edits, before deploy, and before final response:

```bash
node ../../scripts/checkpoint_coherence.mjs <repo-root> --label "<short-label>"
```

The checkpoint captures git status, diff stats, route/drift summary when applicable, and the current harness contents.

## Required Behavior

- Read `../../references/coherence-harness.md` for long tasks.
- Keep `state.md` honest: goal, scope, constraints, stop conditions.
- Append decisions to `decisions.md` when product or architecture choices are made.
- Append evidence to `evidence.md` when tests, screenshots, deploys, browser checks, or data checks run.
- Update `next.md` with the next smallest action before pausing.
- Use `review.md` for a blunt self-review, not a recap.

Do not treat a passing build as coherence. Coherence means the latest work still matches the goal, scope, and proof contract.
