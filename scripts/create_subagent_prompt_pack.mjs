#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const forceIndex = args.indexOf("--force");
const force = forceIndex !== -1;
if (force) args.splice(forceIndex, 1);

const [repoRootInput, ...goalParts] = args;
const goal = goalParts.join(" ").trim();

if (!repoRootInput || !goal) {
  console.error('Usage: create_subagent_prompt_pack.mjs <repo-root> "<goal>" [--force]');
  process.exit(1);
}

const repoRoot = path.resolve(repoRootInput);
const outputDir = path.join(repoRoot, ".mako-loop", "subagents");

if (!fs.existsSync(repoRoot)) {
  console.error(`Repo root does not exist: ${repoRoot}`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const writeFile = (name, content) => {
  const filePath = path.join(outputDir, name);
  if (fs.existsSync(filePath) && !force) {
    console.error(`Refusing to overwrite existing file without --force: ${filePath}`);
    process.exit(1);
  }
  fs.writeFileSync(filePath, `${content.trim()}\n`, "utf8");
};

const sharedHeader = `You are a scoped subagent under a boss session.

Goal:
${goal}

Repo/project:
${repoRoot}

Global operating rule:
The current session agent is the boss. You are responsible only for the assigned scope. Do not deploy, touch secrets, run destructive commands, make final product decisions, or claim the full project is done. Return evidence the boss can verify.`;

const outputContract = `Output exactly:
- status: DONE | BLOCKED | NEEDS_CONTEXT
- scope:
- sources:
- findings:
- changes:
- risks:
- next_action:`;

writeFile(
  "README.md",
  `# Subagent Prompt Pack

Goal:
${goal}

Repo/project:
${repoRoot}

Use these prompts when the boss session needs to keep context small while delegating scoped work.

Rules:
- The boss owns product direction, integration, proof, deploys, and final state.
- Subagents own only their assigned scope.
- Give every subagent a narrow target and a hard output contract.
- Prefer read-only explorer/reviewer work unless file ownership is explicit.
- Verify all subagent output in the boss session before shipping.

Files:
- explorer-template.md
- researcher-template.md
- worker-template.md
- security-template.md
- reviewer-template.md
- integration-checklist.md`
);

writeFile(
  "explorer-template.md",
  `${sharedHeader}

Your role:
explorer

Scope:
<specific files, folders, routes, services, integrations, or docs to inspect>

Allowed actions:
Read files and run non-mutating inspection commands only.

Forbidden actions:
- Do not edit files.
- Do not deploy.
- Do not touch secrets.
- Do not run destructive commands.
- Do not change dependencies.
- Do not make final product decisions.

What to find:
- Current behavior.
- Existing patterns to follow.
- Dead ends, duplicate surfaces, or confusing partials.
- Integration boundaries.
- Tests or proof commands related to this scope.

${outputContract}`
);

writeFile(
  "researcher-template.md",
  `${sharedHeader}

Your role:
researcher

Scope:
<competitors, primary docs, APIs, SDKs, architecture options, models, runtimes, or platform constraints to research>

Allowed actions:
Use current primary sources and local docs. Separate confirmed facts from inference.

Forbidden actions:
- Do not write product copy as a substitute for implementation decisions.
- Do not rely on stale memory for current facts.
- Do not copy proprietary UI or code.
- Do not make final architecture decisions.

What to return:
- Concrete implementation implications.
- Candidate architecture with tradeoffs.
- Required dependencies, APIs, permissions, and limits.
- Verification strategy.
- Source links or file paths.

${outputContract}`
);

writeFile(
  "worker-template.md",
  `${sharedHeader}

Your role:
worker

Scope:
<exact files, folders, module, route, component, or service you may edit>

Allowed actions:
Edit only assigned files. Run assigned local proof commands if available.

Forbidden actions:
- Do not edit outside scope.
- Do not reformat unrelated files.
- Do not revert user or other-agent changes.
- Do not deploy.
- Do not touch secrets.
- Do not run destructive commands.
- Do not claim the full project is done.

Acceptance criteria:
<specific behavior, tests, build checks, UI state, API response, or artifact expected>

Proof commands:
<commands to run, or "report unable to run with exact reason">

${outputContract}`
);

writeFile(
  "reviewer-template.md",
  `${sharedHeader}

Your role:
reviewer

Scope:
<diff, files, workflow, route, artifact, or product surface to review>

Allowed actions:
Read files, inspect diffs, run non-mutating proof commands where useful.

Forbidden actions:
- Do not rewrite unless explicitly assigned.
- Do not deploy.
- Do not touch secrets.
- Do not make final ship decisions.

Review focus:
- Bugs and behavioral regressions.
- Missing tests or weak proof.
- UX incoherence or buyer-facing embarrassment.
- Security, privacy, performance, and data integrity risks.
- Scope creep or disconnected surfaces.

Return findings first, ordered by severity, with file/line references when available.

${outputContract}`
);

writeFile(
  "security-template.md",
  `${sharedHeader}

Your role:
security

Scope:
<auth, authorization, tenant isolation, database schema, migrations, SQL/ORM queries, row-level security, database roles/permissions, backup/retention behavior, payments, billing, PII, CRM/customer records, webhooks, uploads, admin tooling, API keys, env handling, public endpoints, dependencies, deploy config, or infrastructure changes to review>

Allowed actions:
Read files, inspect diffs, and run non-mutating audit/test commands where useful.

Forbidden actions:
- Do not edit unless explicitly assigned a fix.
- Do not deploy.
- Do not touch or print secrets, tokens, raw credentials, private customer data, or sensitive env values.
- Do not run destructive commands.
- Do not run public scans against live services unless explicitly approved by the boss.
- Do not make final ship decisions.

Security focus:
- Authentication, authorization, ownership checks, and tenant isolation.
- Database schema safety, migrations, rollback risk, seed data, constraints, row-level security or equivalent tenant filters, and least-privilege database roles.
- SQL/ORM query safety, raw SQL usage, transaction boundaries, connection-string handling, pooled connections, and accidental cross-tenant reads/writes.
- Secrets, environment variables, API keys, OAuth tokens, and credential storage.
- Input validation, output encoding, injection, XSS, CSRF, SSRF, and file upload handling.
- Webhook signature validation, replay protection, idempotency, and rate limits.
- PII handling, logs, telemetry, retention, and least-privilege data access.
- Payment/billing trust boundaries and admin-only actions.
- Dependency, deployment, CORS, cookie, header, and infrastructure exposure.

Return confirmed vulnerabilities separately from hardening recommendations. For each confirmed issue, include severity, exploit path, affected files/routes, and concrete fix direction.

${outputContract}`
);

writeFile(
  "integration-checklist.md",
  `# Boss Integration Checklist

Goal:
${goal}

Before using subagent output:
- Read reports directly.
- Read changed files directly.
- Check for scope violations.
- Run security-template.md for auth, authorization, tenancy, database schema, migrations, SQL/ORM queries, row-level security, database roles/permissions, backup/retention behavior, payments, billing, PII, webhooks, uploads, admin tooling, API keys, env handling, public endpoints, dependencies, deploy config, or infrastructure changes.
- Resolve conflicting recommendations.
- Update .mako-loop/decisions.md for adopted decisions.
- Update .mako-loop/evidence.md with proof.
- Run the boss-owned proof contract.
- Verify buyer-facing workflows directly when UI/product behavior changed.
- Decide final state: DONE, BLOCKED, or RESCOPED.

Do not ship from a subagent claim alone.`
);

console.log(`Created subagent prompt pack at ${outputDir}`);
