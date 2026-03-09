# Post-DevCon 5 Findings

An Astro + Cloudflare research atlas for Palantir's public OSDK, ontology-as-code compiler stack, and the public-private seams still visible in the package graph.

## What is in the site

- topic hubs for the main storylines
- package dossiers for the most important public surfaces
- seam pages for the strongest public-private boundary signals
- a timeline view showing when the stack started appearing publicly
- a generated `llms.txt` route for machine-readable consumption

## Local development

```bash
npm install
npm run dev
```

## Build and validation

```bash
npm run build
npx astro check
```

## Key folders

- `src/content/topics/` - topic hub content
- `src/content/packages/` - package dossiers
- `src/content/seams/` - seam writeups
- `src/pages/` - route entrypoints
- `docs/` - implementation spec and research handoff pack
