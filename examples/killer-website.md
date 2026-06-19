# Example: Killer Website

Prompt:

```text
Use MakoLoop with killer-website. Build this as a source-led website, not a blank AI landing page. If there is an existing client site, produce the browser-crawler rebuild packet first. If there is no existing site, research competitors first and ask only for missing business facts/assets. Use a real template/design source when client-grade, preserve factual claims exactly, produce SEO/AEO/GEO/LLM visibility output, verify desktop and mobile, deploy or preview according to mode, and finish only when the site is DONE, BLOCKED, or RESCOPED.
```

Expected loop:

- Choose fast mode or client-grade mode.
- Existing site: crawl with the approved browser crawler and produce a rebuild packet.
- No existing site: research competitors, expected content, proof, page types, CTAs, and visibility patterns.
- Choose a real design/template source. Envato discovery is preferred when available.
- Convert to Next.js App Router + TypeScript for Vercel unless the current repo requires another target.
- Preserve factual business data exactly. Do not invent claims, awards, service areas, reviews, certifications, guarantees, pricing, or proof.
- Produce SEO/AEO/GEO/LLM visibility output, including `llms.txt` and `llms-full.txt`.
- Verify desktop and mobile screenshots, CTA/form path, overflow, text clipping, source-content preservation, schema/metadata, accessibility smoke, and performance sanity.
- Finish with `DONE`, `BLOCKED`, or `RESCOPED`.
