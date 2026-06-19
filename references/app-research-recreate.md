# App Research Recreate Mode

Use this reference when researching an existing product and building an original high-quality equivalent.

## Deliverables

For a serious task, produce these artifacts in the workspace or response:

1. `research-brief`
   - Target app and source URLs.
   - Date researched.
   - Audience, buyer, promise, category, pricing, and launch positioning.
   - What the app does in one sentence.

2. `pattern-ledger`
   - Onboarding.
   - First value moment.
   - Core workflows.
   - Screens and information architecture.
   - Data objects.
   - Integrations.
   - Trust signals.
   - UX patterns to adapt.
   - Weaknesses to improve.

3. `recreation-spec`
   - Original product contract.
   - What will be similar by function.
   - What must be visually and textually original.
   - Scope cuts.
   - Screens/routes.
   - Components.
   - Data model.
   - Verification plan.

4. `implementation-proof`
   - Tests/build commands.
   - Browser screenshots or live URL when applicable.
   - Notes on what was intentionally not copied.

## Research Standard

World-class research is not a feature list. It explains why the product works.

Answer:

- Who is under pressure and why do they buy?
- What is the smallest job the app completes better than alternatives?
- What does the user see before they trust it?
- Where does the app hide complexity?
- What is the first moment that feels valuable?
- What does the app make feel obvious?
- What parts are commodity and should not be overbuilt?
- What parts are the magic and must be nailed?

## Source Stack

Use current public sources when the target is modern or competitive:

- Official website and product pages.
- Docs/help center.
- Pricing page.
- Changelog/release notes.
- App marketplace listing.
- Product Hunt or launch announcement.
- Demo videos and screenshots.
- Reviews and social posts for pain signals.

Use direct quotes sparingly. Prefer paraphrase and cite URLs.

## Rebuild Strategy

Do not start with "build all screens." Start with the main wedge:

`input -> transformation -> output -> next action`

Examples:

- Website builder: prompt/assets -> generated page -> editable preview -> publish/export.
- CRM: lead source -> work queue -> record -> action -> follow-up state.
- Audit tool: URL/input -> crawl/research -> findings -> client-ready report.
- Game: controls -> moment-to-moment loop -> scoring/failure -> restart/progression.

The first recreation should finish the wedge before expanding to secondary screens.

## App Type Notes

### Websites

The first viewport must communicate the product, place, person, or offer. Use real or generated visual assets when appropriate. Verify responsive text fit and above-the-fold clarity.

### SaaS Apps

Prioritize dense, usable operational screens over marketing-style dashboards. Avoid decorative cards when the user needs repeated action, comparison, or scanning.

### Mobile-Style Apps

Respect mobile ergonomics: reachable controls, clear tab structure, sensible empty states, and no desktop-only interaction assumptions.

### Games

Use a proven engine or library for established mechanics where practical. Verify that the game is playable, nonblank, responsive, and has clear win/loss/reset behavior.

## Ethical Recreation

The goal is competitive learning, not impersonation.

Recreate:

- Outcome.
- Workflow.
- Interaction pattern.
- Quality level.
- Product clarity.

Do not recreate:

- Brand identity.
- Proprietary copy.
- Protected assets.
- Confusingly similar trade dress.
- Private implementation details.

## Ship Review

Before calling the rebuild done:

- Would a buyer understand the promise in 10 seconds?
- Is the main workflow complete without explanation?
- Does it feel intentionally designed?
- Is it meaningfully distinct from the researched target?
- Is there proof beyond code existing?
