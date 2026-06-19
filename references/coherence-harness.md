# Coherence Harness

Use this when a task spans many files, multiple sessions, research plus implementation, live deploys, or repeated continuation.

## Why This Exists

Long-task coherence and genuine self-correction cannot come from a prompt alone. The agent must externalize state, re-read it, and compare claims against evidence.

## Harness Files

`.mako-loop/state.md`

- Current goal.
- User outcome.
- Scope.
- Out-of-scope cuts.
- Constraints.
- Stop conditions.
- Proof contract.

`.mako-loop/decisions.md`

- Product decisions.
- Architecture decisions.
- Tradeoffs.
- Rejected alternatives.

`.mako-loop/evidence.md`

- Commands run.
- Tests/builds.
- Browser/live URLs.
- Screenshots or artifact paths.
- Data checks.
- Failures and fixes.

`.mako-loop/review.md`

- Principal review.
- Bugs/risks.
- UX coherence issues.
- Fake completion checks.
- Ship/no-ship judgment.

`.mako-loop/next.md`

- Next smallest action.
- Current blocker.
- Files to inspect next.
- What must not be touched.

`.mako-loop/checkpoints/`

- Timestamped snapshots from `checkpoint_coherence.mjs`.

## When To Initialize

Initialize when:

- The user asks to keep going until built.
- The task will touch more than a few files.
- The task includes research plus implementation.
- The task includes a live deploy.
- The project has been drifting or feeling incoherent.
- A previous run left unclear partial state.

## When To Checkpoint

Checkpoint:

- Before implementation after the plan is locked.
- After significant edits.
- Before deploy.
- After verification.
- Before pausing or final response.
- After interruption/resume.

## Self-Correction Loop

At each checkpoint, answer:

- Is the current work still inside the locked outcome?
- Did any visible surface widen the product?
- Did evidence prove the claim, or only prove code exists?
- Did we add or remove confusion?
- What is the next smallest action?

If the answer shows drift, re-scope before writing more code.

## Done Gate

Before final response:

- If the proof contract passed, mark `DONE`.
- If a named external dependency prevents proof, mark `BLOCKED`.
- If evidence changed the target, mark `RESCOPED`.
- If none applies, keep working and do not present progress as completion.
