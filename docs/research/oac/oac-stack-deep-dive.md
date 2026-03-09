# OAC Compiler Stack Deep Dive

## Main conclusion

Palantir now has a real public ontology-as-code stack, but it is not yet a cleanly productized single pipeline. What is public today looks like three layers that were opened at different times:

1. authoring DSL (`@osdk/maker`)
2. conversion/compiler plumbing (`@osdk/generator-converters*`, `@osdk/maker-experimental`)
3. downstream app bootstrap and deployment (`@osdk/create-app`, `@osdk/cli`)

The stack is becoming more coherent, especially with `@osdk/generator-converters.preview`, but there are still obvious mixed public/private edges.

## Timeline

| Approx. first appearance | Package | Why it matters |
| --- | --- | --- |
| Nov 2023 | `@osdk/cli` | Earliest public ops/deploy CLI surface |
| Feb 2024 | `@osdk/create-app` | Public app bootstrap path starts becoming formal |
| Mar 2024 | `@osdk/maker` | Public ontology authoring DSL appears |
| Aug 2025 | `@osdk/maker-experimental` | New V2/backend rewrite path becomes visible |
| Feb 2026 | `@osdk/generator-converters.preview` | First public cross-language discovery + generate-sdk bridge |
| Feb 2026 | `@osdk/functions-testing.experimental` | Local-first testing/mocking for functions |
| Mar 2026 | `@osdk/language-models` | Thin Foundry LLM proxy interop helper |

The rough arc is: deploy first, scaffold second, author ontology third, then expose more of the compiler/discovery/testing internals much later.

## What each package appears to do

### `@osdk/maker`: public authoring layer

- This is the real public ontology DSL, not just branding.
- It owns ontology state and exports the authoring primitives: objects, interfaces, links, actions, value types, and related helpers.
- Changelog and build output show steady expansion toward a complete ontology-definition language: links/actions as code, datasource variants, structs, media types, markings, PSGs, custom decimals, and function-discovery hooks.

What changed functionally:

- ontology definition moved from mostly generated SDK consumption toward authorable source
- richer ontology surface area became representable in code
- function-oriented metadata started to appear in the same ecosystem

Important limitation:

- public Maker includes `generateFunctionsIr()`, but TypeScript discovery is not self-contained. It lazy-loads private `@foundry/functions-typescript-osdk-discovery` and fails without it.
- That means the public package surface promises more than a fully public install can deliver.

### `@osdk/maker-experimental`: rewrite/backend layer

- This package is smaller because it is not the main authoring DSL.
- `defineOntologyV2()` directly imports Maker state helpers, runs the ontology body, converts the result, computes shapes, and returns V2 output.
- The CLI loads `.ontology/ontology.ts`, writes `build/temp_block_data/ontology.json`, and emits a `BlockGeneratorResult` JSON file.

What changed functionally:

- ontology-as-code gained a second compilation target that looks designed for marketplace/block ingestion
- RID generation and shape extraction became explicit compiler concerns
- the public packages now expose evidence of an OAC backend rewrite, not just incremental DSL additions

Interpretation:

- this looks like Palantir externalizing a compiler boundary that was previously internal
- but the artifact shape still feels backend/platform-centric, so it may be ahead of the polished user workflow

### `@osdk/generator-converters`: metadata plumbing

- This is not the glamorous package, but it is where the semantics are normalized.
- It turns ontology/query structures into the metadata forms expected by SDK generators and related tooling.
- Recent changes around branch awareness, transaction IDs, and media IO suggest this is where new execution semantics land before they become visible in higher-level tooling.

Interpretation:

- if Maker is the source language, converters are the normalization pass
- this package is one of the strongest signs that Palantir is treating ontology definitions more like compiler input than static config

### `@osdk/generator-converters.preview`: discovery + codegen bridge

- This is the most strategically revealing package in the set.
- It publishes a `generate-sdk` CLI and explicitly describes itself as supporting Python and TSv2 discovered functions.
- It accepts Ontology IR JSON, validates the structure, converts it into preview full metadata, optionally discovers functions, then invokes `@osdk/generator`.

What it adds beyond the older path:

- richer action metadata via `fullLogicRules`
- query/function metadata stitched into the same output model
- cross-language discovery hooks for both TypeScript and Python
- a sidecar `ontology-metadata.json` artifact

The Python part is especially interesting:

- the CLI can take `--python-functions-dir`, `--python-root-project-dir`, and `--python-binary`
- it can generate/install a Python ontology SDK so Python functions can resolve ontology imports during discovery

Interpretation:

- this is much closer to a unified compiler pipeline: source ontology IR in, metadata enriched with discovered functions, SDK out
- it still feels preview-grade because the package names and dependencies expose the internal layering pretty directly

### `@osdk/functions-testing.experimental`: local function dev support

- Adds a mock client and mock object helpers.
- Supports `when(...)`-style stubbing for object/object-set flows and `whenQuery(...)` for query flows.
- It is intentionally incomplete; some APIs like `fetchMetadata()` still throw unsupported errors.

What changed functionally:

- Palantir now appears to expect external developers to write and test OSDK functions locally, not just deploy against a live stack
- query execution is now treated as something that should be stubbed in unit tests, which matches the broader function-discovery story

### `@osdk/language-models`: LLM proxy helper, not a framework

- Very thin package.
- Helps external code reach Foundry's proxied OpenAI/Anthropic endpoints with the right token/base URL plumbing.

Interpretation:

- strategically interesting because it shows AI/LLM workflows being normalized into SDK-adjacent tooling
- technically small; it is not part of the core compiler stack

## Public vs private boundary

### Clearly public

- `@osdk/maker`
- `@osdk/maker-experimental`
- `@osdk/generator-converters.preview`
- `@osdk/generator-converters`
- `@osdk/create-app`
- `@osdk/cli`
- generated namespaces like `@osdk/foundry.thirdpartyapplications` and `@osdk/foundry.aipagents`

### Clearly mixed

- Maker's function path depends on private `@foundry/functions-typescript-osdk-discovery`
- `palantir-mcp` is public but wraps private `@palantir/mcp`
- some `@osdk/internal.foundry*` packages are technically published but explicitly labeled internal-only

### What that likely means

- Palantir is publishing the edges that support external ecosystems first
- but some compiler/discovery capabilities are still shared with or borrowed from internal Developer Console / function-runtime infrastructure
- the public surface is therefore real, but not yet fully isolated from internal implementation details

## Likely intended workflow today

### Best-effort current workflow

1. define ontology in TypeScript with `@osdk/maker`
2. optionally compile that ontology into V2/block-style artifacts with `@osdk/maker-experimental`
3. convert IR into richer metadata and discover functions with `@osdk/generator-converters.preview`
4. generate SDK output with `@osdk/generator`
5. consume that SDK in an app scaffolded by `@osdk/create-app`
6. deploy the app/site with `@osdk/cli`, which ultimately talks to third-party-app APIs

### Why this does not feel fully finished yet

- there is no single clean public story that starts at Maker and ends at deployment without preview or experimental markers
- the compiler boundaries are visible in package names and intermediate artifacts
- TypeScript function discovery still has a private-package dependency

## Best explanation of the architecture shift

The package history suggests Palantir did not start by opening a polished compiler product. They opened the downstream operational path first, then gradually exposed more authoring and compilation internals:

- first: let people scaffold and deploy
- then: let people author ontology in code
- then: expose the rewrite/V2 backend and function-aware codegen pieces
- now: add local testing and AI-adjacent helpers

That sequencing implies the external OAC workflow is still converging. The direction is clear, though: ontology, functions, SDK generation, app bootstrap, and deployment are being brought into one public developer story.

## Most important practical takeaways

- `@osdk/maker` is the package to watch for the real public ontology DSL.
- `@osdk/maker-experimental` is the strongest sign of backend/compiler re-architecture.
- `@osdk/generator-converters.preview` is the strongest sign of a future unified cross-language workflow.
- `@osdk/functions-testing.experimental` means external function development is becoming a first-class use case.
- the public/private boundary is still leaky, especially around TypeScript function discovery.
- `@osdk/create-app` and `@osdk/cli` matter, but they are downstream of the more interesting compiler shift.

## Open questions worth pulling next

- whether `@foundry/functions-typescript-osdk-discovery` eventually becomes public or gets replaced by a public discovery path
- whether Maker Experimental becomes the default backend for Maker or remains a parallel pipeline
- whether `generator-converters.preview` graduates into a stable package name and absorbs more of the end-to-end workflow
- whether Python function discovery becomes more central than TypeScript in the public story because its dependency chain may be easier to externalize cleanly
