# Content Seed Plan

## Purpose

This is the content the new site should launch with on day one, using the research already written in this repo.

## Source files to ingest

All source paths below are repo-relative files that are already present in `docs/` in this repository.

### Core research

- `docs/research/oac/high-level-summary.md`
- `docs/research/oac/oac-stack-diagram.md`
- `docs/research/oac/oac-stack-deep-dive.md`
- `docs/research/oac/private-seams-and-counterparts.md`
- `docs/research/org/repo-signals.md`

### Publishing/meta docs

- `docs/spec/content-format-blueprint.md`
- `docs/spec/cloudflare-astro-template-recommendation.md`

## Launch information architecture

### Homepage

Needs:

- one-sentence thesis
- top five findings
- package cluster cards
- simple timeline strip
- links into topic hubs
- a visible public/mixed/private legend

Source inputs:

- `docs/research/oac/high-level-summary.md`
- `docs/research/oac/private-seams-and-counterparts.md`

### Topic hubs

Ship these first:

- `oac-compiler-stack`
- `public-private-seams`
- `app-bootstrap-and-deploy`
- `ai-and-agents`
- `python-runtime-and-connectivity`

### Package dossiers

Create dossiers for at least these packages/entities:

- `@osdk/maker`
- `@osdk/maker-experimental`
- `@osdk/generator-converters`
- `@osdk/generator-converters.preview`
- `@osdk/functions-testing.experimental`
- `@osdk/language-models`
- `@osdk/create-app`
- `@osdk/cli`
- `@osdk/foundry.thirdpartyapplications`
- `@osdk/foundry.aipagents`
- `foundry-platform-sdk`
- `foundry-compute-modules`
- `external-systems`
- `palantir-mcp`

### Seam pages

Create a dedicated seam index covering:

- hard private runtime dependencies
- public wrappers around private packages
- internal-only packages published on npm
- internal-shaped output artifacts

### Evidence pages

At minimum, expose curated evidence for:

- Maker private import path
- Maker Experimental `BlockGeneratorResult`
- preview converter `generate-sdk` behavior
- internal-only `@osdk/internal.foundry.*` npm metadata
- `palantir-mcp` description referencing private `@palantir/mcp`

## Suggested content collections

### `topics`

Use for high-level explainers and hubs.

Suggested fields:

- `title`
- `slug`
- `summary`
- `importance`
- `status`
- `relatedPackages`
- `relatedSeams`

### `packages`

Suggested fields:

- `title`
- `slug`
- `packageName`
- `kind`
- `status`
- `firstSeen`
- `importance`
- `repo`
- `topicIds`
- `seamIds`
- `keyTakeaways`

### `seams`

Suggested fields:

- `title`
- `slug`
- `seamType`
- `status`
- `confidence`
- `publicSurface`
- `likelyInternalCounterpart`
- `evidenceRefs`

### `evidence`

Suggested fields:

- `title`
- `slug`
- `sourceType`
- `sourcePath`
- `capturedAt`
- `claimIds`

### `timeline`

Can be JSON instead of markdown.

Suggested fields:

- `title`
- `date`
- `kind`
- `relatedIds`
- `summary`

## Page types to build

- `/`
- `/topics/[slug]`
- `/packages/[slug]`
- `/seams/[slug]`
- `/evidence/[slug]`
- `/timeline`
- `/graph`
- `/llms.txt`

## Content migration rule

Do not paste giant raw markdown files unchanged into the site.

Instead:

- split claims into the right entities
- preserve source attribution and evidence links
- keep pages concise and skimmable
- move raw excerpts into evidence pages or drawers

## Launch bar

The first shipped version should already let a reader:

- understand the big thesis in under a minute
- click into a package and see what changed
- see which surfaces are public vs mixed
- inspect evidence for important claims
- browse the stack by workflow or timeline
