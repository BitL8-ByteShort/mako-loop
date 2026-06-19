# Example: Security And Database Review

Prompt:

```text
Use MakoLoop boss/subagent orchestration. Spawn or prepare a security subagent for this feature. Scope it to auth, authorization, tenant isolation, database schema, migrations, SQL/ORM queries, row-level security or tenant filters, database roles, connection strings, backup/retention behavior, PII, webhooks, public endpoints, and deploy config. Keep it read-only unless explicitly assigned a fix.
```

Security output should include:

- `status`: `DONE`, `BLOCKED`, or `NEEDS_CONTEXT`.
- `scope`: files/routes/services inspected.
- `sources`: files, commands, docs, or URLs used.
- `findings`: confirmed vulnerabilities first, ordered by severity.
- `changes`: empty unless fixes were explicitly assigned.
- `risks`: assumptions and hardening recommendations.
- `next_action`: the single next boss action.

The boss session must verify the report before shipping.
