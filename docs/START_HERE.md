# Start Here

This repo now includes the product spec and research pack for turning the current Astro + Cloudflare starter into a Palantir research atlas.

## Read in this order

1. `docs/spec/agent-implementation-guide.md`
2. `docs/spec/cloudflare-astro-template-recommendation.md`
3. `docs/spec/content-format-blueprint.md`
4. `docs/spec/content-seed-plan.md`

Then use the research inputs:

5. `docs/research/oac/high-level-summary.md`
6. `docs/research/oac/oac-stack-diagram.md`
7. `docs/research/oac/oac-stack-deep-dive.md`
8. `docs/research/oac/private-seams-and-counterparts.md`
9. `docs/research/org/repo-signals.md`

## What these docs are for

- `docs/spec/` defines the target product, information architecture, content model, and implementation/testing expectations
- `docs/research/oac/` contains the core findings that should seed the first launch content
- `docs/research/org/` contains supporting broader Palantir repo context

## Intended workflow

- use the current repo as the implementation repo
- build the site from these docs without asking the human for routine implementation decisions
- ship a polished first version
- test thoroughly, including browser validation
- commit and open a PR only when it is reviewable

## One-line brief

Build a static, content-first research atlas that is fast to skim, easy to drill into, and tightly linked to evidence.
