# Example: Build A SaaS App

Prompt:

```text
Use MakoLoop on this SaaS app. Lock the first sellable workflow, challenge scope, initialize the coherence harness, implement the workflow, run proof, use a security subagent for auth/tenant/database risk, and keep going until the result is DONE, BLOCKED, or RESCOPED.
```

Expected loop:

1. Lock one buyer-facing workflow.
2. Cut unrelated dashboards, settings, and diagnostics.
3. Classify touched routes as core, support, diagnostic, hidden, redirect, or remove-later.
4. Read the current app before proposing architecture.
5. Implement the smallest complete workflow.
6. Run build, tests, and browser-visible proof.
7. Run security review for auth, tenancy, database, PII, and public endpoints.
8. Make a final ship/no-ship call.
