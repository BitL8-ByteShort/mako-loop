# Security Policy

MakoLoop is an agent workflow plugin. It does not require secrets, network credentials, or production access.

## Supported Versions

Security fixes target the latest released version.

## Reporting Issues

Use GitHub issues for non-sensitive security hardening requests.

For sensitive reports, avoid posting secrets, tokens, private customer data, or exploit details publicly. Open a minimal issue asking for a private disclosure channel.

## Security Model

- MakoLoop skills are instructions and local helper scripts.
- Security subagents are read-only by default.
- The boss session owns final security decisions, deploy decisions, destructive operations, and live-service interaction.
- Generated prompt packs explicitly forbid printing secrets, touching credentials, deploying, or running public scans without approval.

## Database-Security Coverage

The security role reviews database schema safety, migrations, rollback risk, SQL/ORM query safety, raw SQL, row-level security or equivalent tenant filters, database roles and permissions, connection-string handling, pooled connections, retention, backups, and cross-tenant read/write risk.
