# Boss Subagent Orchestration

Use this reference when a task is large enough that the main session should preserve strategy and integration context while subagents do narrow, disposable work.

## Operating Model

The boss owns:

- Product contract and user outcome.
- Scope cuts and architecture decisions.
- `.mako-loop/` state, decisions, evidence, review, and next action.
- Integration of all findings and code.
- Test, build, browser, deploy, and final proof.
- Final `DONE`, `BLOCKED`, or `RESCOPED` state.

Subagents own:

- Narrow research.
- Bounded codebase exploration.
- Disjoint implementation slices.
- Security and database-security review for sensitive surfaces.
- Independent verification or review.

Subagents are not project managers. They are context-isolated specialists whose output is evidence for the boss to judge.

## Delegation Rules

1. Do not delegate before the outcome is locked.
2. Do not pass the full session history by default.
3. Give each subagent only the repo path, goal, local instructions, allowed files/surfaces, forbidden actions, proof target, and output contract it needs.
4. Prefer read-only explorer/reviewer roles unless an implementation slice has clear file ownership.
5. For coding workers, assign non-overlapping modules or files.
6. Tell workers not to revert, overwrite, or reformat unrelated work.
7. Never delegate live deploys, secrets work, destructive cleanup, billing changes, irreversible data writes, or final ship decisions.
8. Review every result. A subagent report is input, not truth.

## Boss Prompt Template

```text
You are a scoped subagent under a boss session.

Goal:
<single outcome>

Repo/project:
<absolute path>

Your role:
<explorer | researcher | worker | security | reviewer>

Scope:
<specific files, folders, routes, competitors, docs, APIs, or surfaces>

Allowed actions:
<read-only | edit only these files | run these commands>

Forbidden actions:
- Do not deploy.
- Do not touch secrets.
- Do not run destructive commands.
- Do not change files outside your scope.
- Do not print secrets or sensitive values.
- Do not run public scans against live services unless explicitly approved by the boss.
- Do not make final product decisions.
- Do not claim the full task is done.

Local instructions to respect:
<AGENTS.md / CLAUDE.md / plugin skill paths / proof contract>

Output exactly:
- status: DONE | BLOCKED | NEEDS_CONTEXT
- scope:
- sources:
- findings:
- changes:
- risks:
- next_action:
```

## Role Templates

### Explorer

Use for current truth discovery.

Prompt emphasis:

- Inspect only the named files, folders, routes, or services.
- Report current behavior, dead code, conflicting patterns, and likely integration boundaries.
- Do not edit.

### Researcher

Use for current external evidence.

Prompt emphasis:

- Browse or inspect primary sources where current facts matter.
- Separate confirmed facts from inference.
- Return implementation decisions, not inspiration.
- Include source links or file paths.

### Worker

Use for bounded implementation.

Prompt emphasis:

- Edit only the assigned files.
- Follow existing project patterns.
- Run the assigned proof commands if possible.
- Report exact files changed and any proof failures.

### Security

Use before shipping changes that touch auth, authorization, tenancy, database schema, migrations, SQL/ORM queries, row-level security, database roles/permissions, backup/retention behavior, payments, billing, PII, CRM/customer records, voice/SMS/email webhooks, file uploads, admin tooling, API keys, environment variables, production deploy config, public endpoints, or dependency upgrades.

Prompt emphasis:

- Stay read-only unless explicitly assigned a fix.
- Do not print secrets, tokens, raw credentials, private customer data, or sensitive env values.
- Review authentication, authorization, tenant isolation, ownership checks, input validation, output encoding, CSRF, XSS, SSRF, SQL/query safety, database schema safety, migration rollback risk, row-level security or equivalent tenant filters, least-privilege database roles, connection-string handling, backup/retention behavior, webhook signature validation, rate limits, logging, data retention, dependency risk, and deploy/config exposure.
- Separate confirmed vulnerabilities from hardening recommendations.
- Provide severity, exploit path, affected files/routes, and a concrete fix direction.

### Reviewer

Use after implementation.

Prompt emphasis:

- Look for bugs, regressions, missing tests, incoherent UX, security issues, and unproven claims.
- Findings first, ordered by severity.
- Use file/line references where available.
- Do not rewrite unless explicitly assigned.

## Integration Checklist

Before trusting subagent work, the boss must:

- Read changed files and reports directly.
- Check for scope violations.
- Run a security subagent for any security-sensitive surface listed above.
- Resolve conflicts or inconsistent recommendations.
- Update `.mako-loop/decisions.md` when adopting a recommendation.
- Run the proof contract in the boss session.
- Verify buyer-facing workflows directly when UI/product behavior changed.
- Make the final state decision from boss-owned evidence.

## Stop Conditions

Stop delegating and centralize in the boss session when:

- Subagent outputs conflict on core architecture.
- More context is needed than the subagent can safely receive.
- Workers would edit the same files.
- The product contract changes.
- The next action is deploy, migration, secrets, billing, data deletion, or final launch.
