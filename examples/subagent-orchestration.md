# Example: Subagent Orchestration

Prompt:

```text
Use MakoLoop boss/subagent orchestration. Keep the current session as boss. Create scoped prompts for explorer, researcher, worker, security, and reviewer roles. Do not let subagents deploy, touch secrets, make final architecture decisions, or claim the whole task is done.
```

Generate prompts:

```bash
node scripts/create_subagent_prompt_pack.mjs /path/to/project "Ship the first paid workflow"
```

Boss responsibilities:

- Lock the outcome.
- Decide what is safe to split.
- Keep `.mako-loop/` current.
- Review every subagent report.
- Integrate code and decisions.
- Run proof in the boss session.
- Own final `DONE`, `BLOCKED`, or `RESCOPED` state.
