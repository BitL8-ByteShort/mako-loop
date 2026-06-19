# Quality Bar

Use this reference before declaring a product workflow finished.

## Finished Means

- The first screen makes the product's job obvious.
- The user can complete the workflow without reading implementation hints.
- Empty states are honest and useful.
- Buttons either work, are disabled with a concrete reason, or are hidden.
- Provider/setup gaps are separated from normal product use.
- The UI uses the project's existing design system and patterns.
- The happy path and at least one failure path are verified.
- Live/deployed proof is used when the project contract requires live truth.

## Not Finished

- A route renders but the data is fake or disconnected.
- A page contains broad explanatory filler instead of controls and state.
- A connected-provider row exists but the workflow cannot use it.
- The app requires the developer to explain what the user should click.
- The proof is only a local build when the user asked for live product behavior.

## Principal Review Questions

- Would a serious buyer understand the value within 10 seconds?
- Would a user trust this screen with real business work?
- Is this smaller and clearer than before?
- Did we remove a source of confusion, or only add a nicer layer on top?
