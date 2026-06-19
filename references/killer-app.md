# Killer App Mode

Use this for SaaS apps, dashboards, CRMs, internal tools, workflow products, marketplaces, and AI apps.

## Outcome

A real user can complete one valuable workflow without needing a developer to explain the product.

## Build Standard

- One workflow is complete before the surface area expands.
- Navigation reflects real capabilities, not aspirations.
- Data model and UI language agree.
- The product starts with useful state, not filler explanation.
- Empty states tell the user what is missing and what action is available.
- Diagnostics and provider setup are separated from normal product use.
- Buttons are useful, disabled with concrete reasons, or hidden.
- The app uses route-level UX where appropriate instead of all-sections-at-once screens.

## Workflow Formula

`input/source -> work queue/state -> record/detail -> action -> result/audit -> next action`

Examples:

- Lead -> queue -> record -> call/email/book -> follow-up status.
- Client request -> work item -> approval -> signed proof -> history.
- URL -> crawl/research -> findings -> report -> send/export.

## Product Surface Rules

- `core`: visible and polished.
- `support`: visible only where it helps the workflow.
- `diagnostic`: admin/operator-only.
- `hidden`: setup or maintenance.
- `redirect`: compatibility only.
- `remove-later`: stale or misleading.

## Verification

- Build/typecheck/lint where available.
- Browser path through the workflow.
- Data persistence or state proof.
- Error/empty state check.
- Mobile or narrow viewport check if the app is responsive.
- Blunt ship/no-ship report.
