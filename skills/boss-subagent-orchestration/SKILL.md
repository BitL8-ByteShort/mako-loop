---
name: boss-subagent-orchestration
description: Use this when Codex should keep the current session agent as the project boss while deploying subagents for narrow research, codebase exploration, implementation slices, verification, or review. Trigger on "subagents", "parallel agents", "keep context small", "boss of the project", "delegate research", "workers", "review agents", or long tasks where isolated subagents should preserve main-session context and report structured findings.
---

# Boss Subagent Orchestration

## Core Rule

The current session agent is the boss. Subagents are scoped workers, explorers, researchers, security reviewers, or general reviewers. They do not own product direction, final architecture, live deploys, destructive commands, broad refactors, or completion claims.

Use this with `mako-loop` for long tasks where context pressure would otherwise make the main session lose the product thread.

## Required Reference

Before delegating, read:

```text
../../references/boss-subagent-orchestration.md
```

## Prompt Pack

For a repo or project folder, create reusable subagent prompts:

```bash
node ../../scripts/create_subagent_prompt_pack.mjs <repo-root> "<goal>"
```

This writes templates under `.mako-loop/subagents/` so the boss can delegate without re-explaining the full session.

## When To Delegate

Delegate only when parallelism reduces context load without fragmenting ownership:

- Current-state research across competitors, docs, APIs, or technical options.
- Codebase exploration by subsystem, route group, or integration boundary.
- Route/surface audits where each agent can inspect a bounded area.
- Implementation slices with disjoint files and clear acceptance criteria.
- Security review for auth, authorization, tenant isolation, database security, payments, PII, webhooks, provider credentials, data writes, dependency changes, deploy changes, or infrastructure changes.
- Independent verification, regression review, or performance review.

## When Not To Delegate

Keep work in the boss session when:

- The task is one coherent architecture decision.
- Edits would overlap in the same files or contracts.
- The product contract is unclear.
- The action involves secrets, live deploys, destructive cleanup, billing, or irreversible data changes.
- The subagent would need the whole conversation to avoid wrong assumptions.

## Boss Responsibilities

The boss must:

- Lock the outcome before delegation.
- Decide which work is safe to split.
- Give each subagent a narrow mission, allowed files/surfaces, forbidden actions, and output contract.
- Keep `.mako-loop/state.md`, `.mako-loop/decisions.md`, `.mako-loop/evidence.md`, and `.mako-loop/next-action.md` current when the coherence harness is active.
- Review every subagent result before using it.
- Integrate code, resolve conflicts, run proof, and make the final ship/no-ship call.

## Subagent Roles

Use explicit role labels:

- `explorer`: reads code/docs and reports current truth. Usually read-only.
- `researcher`: gathers external/current evidence and turns it into implementation-grade findings.
- `worker`: implements one bounded slice in non-overlapping files.
- `security`: reviews security-sensitive changes, threat models risks, and verifies that secrets, auth, tenancy, database access, data handling, and external boundaries are safe.
- `reviewer`: checks finished work for bugs, regressions, tests, UX issues, and missing proof.

Use a `security` subagent before shipping any feature touching authentication, authorization, account/workspace membership, database schema, migrations, SQL/ORM queries, row-level security, database roles/permissions, backup/retention behavior, payments, billing, PII, CRM/customer records, voice/SMS/email webhooks, file uploads, admin tooling, API keys, environment variables, production deploy config, or public endpoints.

## Required Subagent Output

Every subagent must return:

- `status`: `DONE`, `BLOCKED`, or `NEEDS_CONTEXT`.
- `scope`: what it inspected or changed.
- `sources`: files, URLs, commands, screenshots, or docs used.
- `findings`: concise, evidence-backed observations.
- `changes`: files edited, if any.
- `risks`: unresolved issues or assumptions.
- `next_action`: the single next boss action.

The boss must not copy a subagent's conclusion into the final answer until it is verified or explicitly labeled as unverified.
