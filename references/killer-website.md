# Killer Website Source-Led Workflow

Use this mode pack for serious websites, landing pages, product pages, portfolios, local business sites, venue pages, and marketing surfaces.

## Outcome

The visitor understands the offer within 10 seconds, trusts it enough to continue, has an obvious next action, and the site is ready for Google, local search, AI search, and AI chat discovery.

## Removed Behavior

Do not start from a blank AI-generated landing page.

Do not use screenshots as the implementation source when template/source code exists.

Do not invent claims, awards, guarantees, service areas, review counts, certifications, pricing, or proof.

Do not call local screenshots a production proof.

Do not treat SEO/AEO/GEO/LLM output as optional.

## Operating Modes

### Fast Mode

Fast mode is for internal previews, concept checks, or low-stakes drafts.

Requirements:

- Use a real source basis: competitor research, existing references, exported design/code, or a template source.
- Include a minimum SEO/AEO/GEO/LLM visibility layer.
- Produce local desktop and mobile screenshots.
- Test the primary CTA/form path.
- Check for horizontal overflow and obvious text clipping.
- List known gaps.

Fast mode must not become a loophole for generic AI-site generation.

### Client-Grade Mode

Client-grade mode is for paid client work, production sites, or anything that represents the agency.

Hard gates:

- Existing-site projects require a full browser-crawler rebuild packet.
- No-existing-site projects require competitor research and a missing-facts intake.
- A real template/design source is required, with Envato as the priority discovery source.
- Factual content boundaries are required.
- Vercel preview and launch-grade verification are required.

If a hard gate cannot be satisfied, stop and report the exact blocker.

## Existing-Site Intake Path

For clients with an existing site, use the Docker browser crawler, Camoufox/Camofox or the locally configured equivalent, before redesign or template conversion.

Runtime crawler rules:

1. Check whether the crawler container/service is available.
2. If it exists but is stopped, start it.
3. If it is not configured but Docker is available, initialize a crawler instance using the approved project workflow.
4. If Docker is not running or the crawler cannot be started, block the client-grade flow.
5. Do not silently fall back to a weak scrape.

No fallback scraping is allowed for existing-site client-grade rebuilds. If a browser-crawler packet cannot be produced, no redesign begins.

Default crawl scope:

- Crawl all public reachable pages on the client domain.
- Include linked public business/trust/profile surfaces such as Google Business Profile, Facebook, Yelp, BBB, industry directories, social profiles, and citation pages.
- Skip private/login/admin/cart/search-result junk.
- Log blocked, excluded, or failed URLs with reasons.
- Distinguish owned-site facts from off-site profile/citation facts.

## No-Existing-Site Intake Path

For clients with no existing site:

1. Research local and industry competitors first.
2. Identify expected content, proof, page types, CTAs, and visibility patterns.
3. Ask only for missing business facts and assets.
4. Build through preview feedback in Codex.

Never invent business facts, proof, service areas, certifications, review counts, awards, or guarantees.

## Default Workspace Structure

The current working folder is usually:

```text
clients/<client-name>/website/
```

Default structure:

```text
clients/<client-name>/website/
  rebuild-packet/
    site-inventory.json
    content-brief.md
    template-requirements.md
    section-map.md
    url-migration-map.md
    crawl-logs/
    screenshots/
    source-assets/
    off-site-profiles/
    visibility/
      seo-aeo-geo-plan.md
      schema-plan.json
      llms.txt
      llms-full.txt
  template-source/
    envato-item/
  code/
    nextjs-site/
```

The exact project path can differ, but print artifact paths clearly at the start and end.

## Rebuild Packet Requirements

For existing-site work, the rebuild packet is the source of truth.

Required files:

```text
rebuild-packet/
  site-inventory.json
  content-brief.md
  template-requirements.md
  section-map.md
  url-migration-map.md
  crawl-logs/
  screenshots/
  source-assets/
  off-site-profiles/
  visibility/
    seo-aeo-geo-plan.md
    schema-plan.json
    llms.txt
    llms-full.txt
```

Capture every public reachable URL unless duplicate/junk, plus page titles, headings, body copy, CTAs, forms, phone, email, address, hours, services, service areas, prices, numbers, claims, reviews, testimonials, awards, licenses, certifications, photos, logos, PDFs, videos, menus, schema, metadata, links, and crawl errors.

Classify each page as preserve, consolidate only if duplicate/junk, redirect, or exclude with reason.

Preserve every public URL as a migrated page unless it is duplicate/junk. Produce `url-migration-map.md` before launch.

If something is not in the packet or explicitly provided by the user/client, do not invent it.

## Template Source Policy

Use real design sources instead of inventing layout from scratch.

Source priority:

1. Envato MCP for template discovery and metadata.
2. Downloaded Envato template files supplied by the user into the workspace.
3. Stitch/exported HTML/CSS when available.
4. Other high-quality template sources or references when Envato is unsuitable.

Envato rule:

- Envato MCP is for discovery and candidate comparison.
- Once the user downloads the Envato item into the workspace from a subscribed account, treat it as cleared and ready to use.
- Do not ask for additional license approval after downloaded Envato files exist in the workspace.
- If files are missing, ask for the download or choose another source.

Client-grade selection:

- Show template candidates and get approval before conversion.
- Evaluate industry fit, visual quality, mobile behavior, available sections, asset compatibility, and fit with the rebuild packet.

Fast mode:

- The agent may choose a source/template and explain why, but must still use a real source basis.

## Template Inspection And Conversion

Inspect downloaded/exported templates before conversion:

- File structure.
- Framework/runtime.
- Pages/demos.
- CSS/JS assets.
- Fonts.
- Images/media.
- Dependencies.
- Build tooling.
- Readme/package notes included in the downloaded files.

Conversion target:

- Next.js App Router.
- TypeScript.
- Vercel deployment.
- Existing repo styling rules if a repo exists.
- Plain CSS/global CSS by default for new sites, preserving template identity.
- Tailwind only when the repo or chosen template is Tailwind-native.

Hard ban:

- Never rebuild a downloaded/exported template primarily from screenshots.
- Screenshots are only for verification and visual parity checks.

Visual parity target:

- Preserve the selected template identity as exactly as practical.
- Intentional departures happen through preview feedback, not silent improvisation.

## Content Rules

Preserve factual business data exactly:

- Services.
- Service areas.
- Phone numbers.
- Addresses.
- Hours.
- Prices.
- Guarantees.
- Review counts.
- Years in business.
- Certifications.
- Licenses.
- Staff names.
- Awards.
- Photos.
- Claims.

Allowed improvements:

- Layout.
- Hierarchy.
- Clarity.
- CTAs.
- Section order.
- Internal linking.
- Readability.
- Conversion flow.

Disallowed without explicit user/client input:

- Inventing stronger claims.
- Inventing awards.
- Inventing guarantees.
- Inventing rankings.
- Inventing service areas.
- Inventing review counts.
- Inventing certifications.
- Inventing pricing.

If a claim would help conversion but is not present in the packet, ask for it or leave it out.

## Mandatory Visibility Output

SEO/AEO/GEO/LLM output is required for every site, including fast mode.

Fast mode receives a minimum viable version. Client-grade receives the full pack.

SEO:

- Titles.
- Meta descriptions.
- Canonicals.
- Sitemap.
- Robots.txt.
- Crawlable pages.
- Internal links.
- Image alt text.
- OpenGraph/Twitter metadata where useful.

Local SEO where relevant:

- NAP consistency.
- Service/location pages.
- Google Business Profile alignment tasks.
- Review acquisition path.
- Citation opportunities.

AEO:

- Direct answer sections.
- FAQs where factual.
- Service-area answers.
- Booking/contact answers.
- Pricing/process answers where factual.
- FAQ schema only where FAQ content is visible and factual.

GEO:

- Clear entity structure for generative engines.
- Who the business is.
- What it does.
- Where it operates.
- Why it is credible.
- What proof supports claims.
- How to contact/book.

LLM files:

- `/llms.txt` is required.
- `/llms-full.txt` is required.
- `/llm.txt` may redirect or alias to `/llms.txt`.
- LLM files must not expose private information, customer PII, internal notes, hidden offers, or unverifiable claims.

Schema where valid:

- Organization or LocalBusiness.
- Service.
- BreadcrumbList.
- FAQPage where visible and factual.
- Review or AggregateRating only if real client proof supports it.

AI-search prompt tests where practical:

- Google.
- Gemini.
- ChatGPT.
- Perplexity.
- Bing/Copilot.

## Off-Site Visibility Operations

Execute off-site visibility work when tools and credentials exist:

- Google Business Profile review/update tasks.
- Search Console setup or sitemap submission.
- Bing Webmaster Tools setup or sitemap submission.
- Citation profile checks.
- Review request path setup.
- AI-search prompt testing.

If a connector/tool/credential is missing but addable, request or guide adding it.

If it cannot be added, produce explicit setup tasks with owner, account/tool needed, URL, exact action, and verification step.

Do not silently skip off-site visibility tasks.

## Verification Gate

Do not call a website done because the code builds.

Fast mode requires:

- Local desktop screenshot.
- Local mobile screenshot.
- CTA/form click path.
- No horizontal overflow or obvious text clipping.
- Source/template noted.
- Minimum SEO/AEO/GEO/LLM files present.
- Known gaps listed.

Client-grade mode requires:

- Vercel preview deployment URL.
- Desktop screenshot from preview.
- Mobile screenshot from preview.
- CTA/form test.
- Phone link test.
- Booking link test.
- Chat/voice-agent entrypoint test if present.
- No horizontal overflow.
- No incoherent overlap.
- No clipped controls.
- Template parity check against selected source.
- Source-content checklist showing every important crawled fact/page was preserved, migrated, consolidated only if duplicate/junk, or excluded with reason.
- URL migration map and redirect plan.
- SEO checks: metadata, sitemap, robots.txt, canonical URLs, internal links, image alt text.
- AEO/GEO checks: answer sections, entity clarity, service/location proof, schema validity.
- LLM checks: `/llms.txt`, `/llms-full.txt`, optional `/llm.txt` alias.
- Accessibility smoke test: keyboard focus, labels, contrast sanity, alt text.
- Performance sanity check.
- Off-site execution report or setup task list.
- Explicit unresolved risks.

Definition of done:

> A site is done only when it is visually verified, functionally tested, content-source checked, search/AI visibility-ready, and preview-deployed with remaining risks named.
