# Loop Exit

Use this reference when the user asks the agent to continue until the product is built.

## Valid Exit States

`DONE`

The target workflow works end to end and the proof contract passed.

`BLOCKED`

A real external blocker prevents progress, such as missing credentials, unavailable provider access, production auth failure, payment account limitation, or a product decision only the user can make.

`RESCOPED`

Evidence shows the original target was the wrong wedge. The new target is documented and smaller.

`CONTINUING`

The work is still in progress. Use this only for interim updates. Do not use it as a final answer.

## Invalid Exit States

- "I made progress."
- "The page looks better."
- "The build passes."
- "The rest is future work."
- "The user can probably figure it out."
- "This is a good foundation."
- "This mostly solves it."
- "This does not fully solve it yet."
- "The next upgrade should finish it."

These are status updates, not loop completion.

## Final Answer Rule

Do not end a task with partial-completion language. If the requested outcome is unfinished and no real blocker exists, keep working. If a blocker exists, say `BLOCKED` and name the exact blocker. If the outcome changed for a sound reason, say `RESCOPED` and name the new target. Otherwise, finish the work and say `DONE`.
