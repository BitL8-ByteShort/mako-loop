---
name: implementation-grade-research
description: Use this when Codex must produce build-ready research so there is no question how to implement a product, app, website, AI tool, local-first system, game, integration, or clone-inspired original. Trigger on "implementation-grade research", "no question how to build it", "fully functional", "seasoned professional app", "build-ready plan", "technical research", "model/runtime decision", "local LLM", or requests needing architecture, data model, tasks, risks, and verification before code.
---

# Implementation-Grade Research

## Core Rule

Produce research that can be built from. Do not stop at a competitive brief, feature list, or recommendation dump. The output must tell a principal engineer what to build, how to build it, what to use, what to avoid, how to verify it, and what uncertainty remains.

Use this skill with `app-research-recreate` when studying existing products. Use it with `mako-loop` when the research will drive implementation.

## Required Reference

Read `../../references/implementation-grade-research.md` before producing the final artifact.

For competitor-inspired work, also read `../../references/app-research-recreate.md`.

## Required Output

Deliver these sections or files:

- `research-brief`: sources, current evidence, audience, platform, positioning, first value moment.
- `capability-matrix`: feature evidence, required v1 behavior, later behavior, acceptance criteria.
- `implementation-blueprint`: architecture, app/client modules, service/background modules, data model, state machines, errors, privacy/security, performance.
- `model-runtime-decision`: candidates, hardware constraints, memory/latency/quality tradeoffs, recommended default, fallback, benchmark plan.
- `build-tasks`: ordered milestones with files/modules, dependencies, acceptance criteria, verification commands.
- `verification-matrix`: functional, UX, performance, privacy/security, packaging/deploy tests.

## Current Research Requirement

Browse current sources for modern apps, models, APIs, pricing, platform capabilities, system requirements, and hardware constraints. Do not rely on stale memory for facts that can change.

## Decision Standard

If research leaves uncertainty, choose a recommended default and explain how to validate it. Do not leave the user with vague options unless the decision genuinely requires their business preference.

## Completion Gate

The research is `DONE` only when an engineer can start implementation without guessing at architecture, dependencies, data model, model/runtime, milestones, or verification.
