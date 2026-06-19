---
name: killer-website
description: Use this when Codex must create, redesign, rebuild, convert, polish, or verify a serious website, landing page, product page, portfolio, venue page, local business site, or marketing surface. This is a MakoLoop mode pack and must use a source-led website production workflow, not prompt-led visual invention.
---

# Killer Website

This skill is part of `mako-loop`.

## Core Rule

Build or rebuild websites from evidence and a real design source. Do not invent a premium website from a blank prompt.

The old prompt-led fallback is removed. Fast mode exists, but it is still source-led. Client-grade mode has hard gates and cannot proceed from vibes, screenshots, weak scrapes, or unsupported claims.

## Required Reference

Read `../../references/killer-website.md` completely before building, redesigning, converting, judging, or verifying any serious website.

If the task includes a modern competitive site, current template source, current platform behavior, SEO/AEO/GEO requirements, model/API pricing, or plugin/tool capability, verify current facts with live sources or the appropriate connector before acting.

## Mandatory Defaults

- Existing client site: produce a full browser-crawler rebuild packet before redesign or conversion.
- No existing client site: research competitors first, then ask only for missing facts and assets.
- Template/design source: Envato is the hard gate for client-grade work. Use Envato MCP for discovery, or use downloaded Envato files already supplied in the workspace. If neither is available, stop with setup tasks; do not use Stitch/exported HTML/CSS or another source unless the user explicitly approves that bypass after the blocker is reported.
- Downloaded Envato item: once the user places the downloaded files in the workspace from a subscribed account, treat them as ready to use.
- Implementation target: convert all websites to Next.js App Router + TypeScript for Vercel.
- Styling: use existing repo styling if present; otherwise use plain CSS/global CSS by default to preserve the selected template identity. Use Tailwind only when the repo or template is Tailwind-native.
- Screenshot rule: never rebuild downloaded/exported template code primarily from screenshots. Screenshots are verification artifacts only.
- Visibility: SEO/AEO/GEO/LLM output is required for every site.
- Verification: do not call a website done until it is visually verified, functionally tested, content-source checked, visibility-ready, and deployed or previewed according to mode.

## Hard Stop Conditions

Stop and report the exact blocker when any client-grade requirement is unavailable:

- Existing-site browser crawler cannot run.
- Full rebuild packet cannot be produced.
- Envato MCP is not callable for client-grade template discovery and no downloaded Envato template has been supplied.
- Required template/source files are missing.
- Docker/crawler access is unavailable for an existing-site rebuild.
- Factual content boundaries are unclear.
- Required credentials/tools for off-site visibility cannot be accessed or added.
- Vercel preview cannot be produced.

Do not silently downgrade to weak scraping, screenshot recreation, generic AI design, or manual setup tasks when an executable tool path exists.
