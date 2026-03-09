# Content Format Blueprint

## Recommendation

The best medium is probably a static research site backed by plain markdown and structured metadata, not a single long report.

Why:

- you want summary first, but also drill-down
- the material is graph-like, not linear
- people will want to jump between packages, timelines, seams, and evidence
- you explicitly want machine-readable output too, which fits a markdown-plus-metadata setup well

So the right shape is:

1. static site for humans
2. markdown corpus plus `llms.txt` for LLMs and power users
3. optionally JSON data files for diagrams, filters, and timelines

## The communication problem to solve

This research has at least four reading modes:

1. `skim` - "what is the big story in 60 seconds?"
2. `understand` - "how do these packages fit together?"
3. `verify` - "what evidence supports this claim?"
4. `explore` - "show me related packages, timelines, seams, and artifacts"

One document cannot do all four well. The format should therefore use progressive disclosure on purpose.

## Recommended information architecture

### Level 0: homepage / executive brief

This should answer, immediately:

- what changed
- why it matters
- what is public vs mixed vs private
- what the three or four most important packages are

Ideal elements:

- one-sentence thesis
- 5-bullet key takeaways
- one visual stack diagram
- one timeline strip
- one "start here" chooser

### Level 1: topic pages

One page per topic cluster:

- OAC/compiler stack
- app scaffolding and deployment
- AI/agents
- Python compute/external systems
- public/private seams

Each page should have the same rhythm:

1. short thesis
2. package map
3. timeline
4. important findings
5. evidence links

### Level 2: package dossiers

One page per important package.

Suggested sections:

- what it is
- what changed
- where it sits in the stack
- public/private notes
- evidence
- open questions

This is where readers drill down without getting buried in raw dumps.

### Level 3: evidence pages

These are the raw but curated backing materials:

- npm metadata
- extracted package.json snippets
- built-code snippets
- changelog excerpts
- command notes

These should feel like appendices, not the main story.

## Navigation primitives that matter most

If you build a site, the most useful navigation is not a top nav alone. It is faceted entry points.

Use these entry modes:

- `By package`
- `By timeline`
- `By workflow`
- `By seam`
- `By evidence`

That gives both top-down and bottom-up readers a way in.

## Best interaction model

### Core idea: cards -> overlays -> evidence drawer

Instead of giant docs pages, think:

- overview pages made of concise cards
- click a card to open a richer explainer panel
- from there, open evidence drawers or source links

That gives the user three depths without feeling lost.

### Diagrams should be interactive, but lightly

The diagrams should do three things only:

- highlight relationships
- filter the rest of the page
- link to the relevant dossier/evidence

Do not turn diagrams into full apps. The point is orientation, not novelty.

Good interactive diagrams for this material:

- dependency graph
- timeline with package appearance and release lanes
- workflow graph from ontology authoring to deployment
- public/private seam map

## Recommended content model

Treat the research like a small knowledge graph.

Core entity types:

- `package`
- `repo`
- `api namespace`
- `workflow`
- `artifact`
- `seam`
- `timeline event`
- `evidence`

Core shared fields:

- `id`
- `title`
- `summary`
- `status` (`public`, `mixed`, `private`, `experimental`, `preview`)
- `first_seen`
- `importance`
- `related_ids`
- `evidence_refs`

This matters because once the content is structured, you can render it multiple ways:

- site cards
- tables
- diagrams
- `llms.txt`
- downloadable markdown bundles

## `llms.txt` should be first-class, not an afterthought

You already have the right instinct here.

The site should not try to do AI itself. Instead:

- publish a root `llms.txt`
- publish per-topic markdown files that are stable and linkable
- keep the language crisp, claim-oriented, and citation-backed

Best `llms.txt` structure:

- short project description
- canonical URLs for the major topic pages
- links to raw markdown dossiers
- note on update cadence / freshness

Also useful:

- one `llms-full.txt` or equivalent topic index for deeper ingestion
- stable fragment IDs or headings so models can cite exact sections

## What not to do

- do not make the primary artifact a giant PDF
- do not make the homepage a wall of prose
- do not hide evidence behind too many clicks
- do not make the diagram engine the product
- do not force readers to understand package names before they understand the story

## Concrete recommended format

If I were optimizing for clarity, I would ship this as:

### Human-facing

- a static site with:
  - homepage thesis
  - topic hubs
  - package dossiers
  - interactive relationship/timeline views
  - evidence drawers or linked evidence pages

### Machine-facing

- `llms.txt`
- topic markdown files
- package markdown files
- optional JSON graph/timeline datasets

### Authoring-facing

- markdown as the canonical source
- a small schema for packages, seams, and evidence refs
- generated pages and diagrams from that schema

## If you want one especially strong UX pattern

Use a three-panel mental model:

1. `Map` - where am I in the ecosystem?
2. `Story` - what changed and why does it matter?
3. `Proof` - what is the evidence?

Almost every page can follow that pattern.

## My strongest recommendation

Do not think of this as "a documentation site." Think of it as an annotated research atlas.

That framing pushes the format in the right direction:

- overview first
- relationship-aware navigation
- claims separated from evidence but tightly linked
- easy export to markdown / `llms.txt`

If you want, next I can turn this into a concrete site spec: routes, page wireframes, content schema, and example component patterns for a static implementation.
