# Agent Implementation Guide

## Mission

Build a production-ready first version of the Palantir research atlas site from a freshly scaffolded Cloudflare + Astro repo, using the docs in this folder as the product spec.

The human does not want to be involved in implementation details. Own the result end to end.

## Primary inputs

All paths below are repo-relative files that are already committed under `docs/` in this repository.

Read these first, in this order:

1. `docs/spec/cloudflare-astro-template-recommendation.md`
2. `docs/spec/content-format-blueprint.md`
3. `docs/spec/content-seed-plan.md`
4. `docs/research/oac/high-level-summary.md`
5. `docs/research/oac/oac-stack-diagram.md`
6. `docs/research/oac/oac-stack-deep-dive.md`
7. `docs/research/oac/private-seams-and-counterparts.md`

## Product goal

Ship a static, content-first research atlas that is easy to skim at a high level and easy to drill into for evidence.

The site should feel intentional and editorial, not like default docs or a blog.

## Required stack choices

- Astro on Cloudflare Pages
- Astro content collections as the canonical content system
- MDX enabled
- static search via Pagefind
- one small interactive island framework, preferably React
- generated `llms.txt`

## Required page types

- homepage
- topic hub pages
- package dossier pages
- seam pages
- evidence pages
- timeline page
- graph/map page

## Core UX requirements

### 1. Progressive disclosure

Every major page should support three levels:

- quick takeaway
- deeper explanation
- linked evidence

### 2. Navigation model

Users must be able to browse by:

- package
- timeline
- workflow
- seam
- evidence

### 3. Public vs mixed vs private clarity

This distinction should be visible across cards, pages, and diagrams. Use a clear labeling system and consistent visuals.

### 4. Content-first interaction

Interactive diagrams are supporting tools, not the main event. They should orient the reader and link deeper, not become a toy app.

## Content model requirements

Implement content collections for:

- `topics`
- `packages`
- `seams`
- `evidence`

Use JSON or TS data for timeline/graph relationships if that is cleaner.

## Must-have launch content

The first implementation must cover, at minimum:

- OAC/compiler stack overview
- package dossiers for Maker, Maker Experimental, generator-converters preview, functions-testing.experimental, language-models, create-app, cli, and palantir-mcp
- a public/private seam index
- curated evidence showing the strongest claims

It is acceptable to stage the Python cluster as a clearly marked secondary topic if time is tight, but the architecture must support it.

## Design direction

- avoid boilerplate docs-site vibes
- avoid flat white-with-purple startup styling
- create a strong editorial/research identity
- make desktop and mobile both feel deliberate
- typography and spacing should emphasize readability and hierarchy

## Implementation sequence

1. scaffold or inspect the Cloudflare Astro starter
2. establish content collections and schemas
3. create base layout, navigation, and design system tokens
4. implement homepage and one topic hub
5. implement package/seam/evidence page templates
6. migrate seed content into structured entries
7. implement timeline and graph/map views with light client islands
8. add `llms.txt` generation
9. add search and metadata polish
10. test thoroughly and fix all issues

## Approval gates

Do not ask for routine implementation decisions, but stop for explicit human sign-off if any change would:

- change data retention, analytics, or tracking behavior
- introduce external integrations or third-party hosted services beyond the approved static-site stack
- change the deployment target away from Astro on Cloudflare Pages or Workers
- materially expand scope beyond the research-atlas information architecture
- require publishing private research or credentials that are not already intended for the repo

## Testing requirements

You must test thoroughly before opening a PR.

At minimum run:

- `npm install`
- `npx astro check`
- `npm run build`
- `npm run preview` or `npm run dev` for a local smoke test
- lint if configured

Also perform browser validation using an agent-browser workflow or equivalent browser automation.

Browser validation must include:

- homepage on desktop
- homepage on mobile width
- one topic page
- one package dossier page
- one seam/evidence flow
- search behavior
- graph/timeline interaction sanity check
- no broken internal links

If preview deployments are available, validate the deployed preview too.

## Acceptance criteria

Do not stop until all are true:

- the homepage communicates the thesis quickly
- the content is structured, not dumped
- important claims link to evidence
- public/private/mixed states are obvious
- `llms.txt` exists and is useful
- the site builds cleanly
- browser testing passes on desktop and mobile
- the result feels polished enough for human review

## Content handling rules

- prefer concise rewritten summaries over raw dump imports
- preserve source references and evidence paths
- do not invent facts beyond the provided research
- if a claim is uncertain, label it as interpretation or confidence-based

## Git expectations

- make focused commits
- when finished, open a PR with a clear summary of what shipped, what was tested, and any remaining gaps
- do not leave the branch in a half-working state

## Final PR checklist

- pages implemented
- content seeded
- search working
- `llms.txt` generated
- build passes
- browser checks done
- screenshots or notes captured for review
- PR description explains information architecture and testing

## One-line execution summary

Build a static research atlas, not a generic docs site: make it fast to skim, easy to drill into, and well-evidenced.
