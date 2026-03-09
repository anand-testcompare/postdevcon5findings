# Private Seams and Likely Internal Counterparts

## Bottom line

The OSDK/OAC story is public enough to inspect and use, but several important edges still reveal internal implementation layers. The seams are not all the same. Some are hard private dependencies, some are public wrappers around private packages, and some are public artifacts that still look shaped for internal platform ingestion.

## Seam types

| Seam type | What it looks like | Example |
| --- | --- | --- |
| Hard private runtime dependency | public package imports a package that is not publicly installable | `@osdk/maker -> @foundry/functions-typescript-osdk-discovery` |
| Public wrapper around private core | public package exists mainly to fetch or front a private package | `palantir-mcp -> @palantir/mcp` |
| Published-but-explicitly-internal package | package is on npm but description says internal only | `@osdk/internal.foundry.*` |
| Internal-shaped output artifact | public package emits outputs that look like platform/backend contracts | `@osdk/maker-experimental -> BlockGeneratorResult` |
| Hidden template / workflow boundary | public package exposes some workflows while richer templates or flows stay private | `@osdk/create-app` tutorials/beta templates vs likely internal Developer Console flows |

## Highest-confidence seams

### 1. `@osdk/maker` -> private TypeScript function discovery

Evidence:

- `oac-compiler-research/npm-inspect/unpacked/maker/build/esm/api/defineFunction.js:30` dynamically imports `@foundry/functions-typescript-osdk-discovery`
- `oac-compiler-research/npm-inspect/unpacked/maker/build/esm/api/defineFunction.js:50` throws if that package is not installed
- direct npm lookup for `@foundry/functions-typescript-osdk-discovery` returns 404/not found

What this means:

- public Maker exposes a function-discovery entrypoint
- but the actual TS discovery engine is still private or access-controlled
- this is the clearest example of a public package promising a workflow that is not fully self-contained in public npm

Likely internal counterpart:

- an internal Foundry/Developer Console function indexer for TypeScript OSDK functions
- probably shared with the same runtime that understands function names, locators, query shapes, and ontology entity mappings

Confidence: high

### 2. `palantir-mcp` -> private `@palantir/mcp`

Evidence:

- npm metadata for `palantir-mcp` describes it as "A lightweight open-source MCP wrapper for downloading and installing the `@palantir/mcp` package from secure Foundry environments."
- direct npm lookup for `@palantir/mcp` returns 404/not found

What this means:

- Palantir intentionally made the installer/bootstrapper public while keeping the actual MCP package private
- this is a cleaner seam than Maker's because the wrapper is honest about its role

Likely internal counterpart:

- the actual Foundry-authenticated MCP client/server package used inside customer environments

Confidence: high

### 3. `@osdk/internal.foundry.*` published on npm but labeled internal-only

Evidence:

- npm metadata exists for packages like:
  - `@osdk/internal.foundry`
  - `@osdk/internal.foundry.core`
  - `@osdk/internal.foundry.geo`
  - `@osdk/internal.foundry.ontologies`
  - `@osdk/internal.foundry.ontologiesv2`
  - `@osdk/internal.foundry.datasets`
  - `@osdk/internal.foundry.mediasets`
- each package description says: `This is an internal only package.`
- repo metadata points to public `palantir/foundry-platform-typescript`

What this means:

- Palantir is willing to publish internal package artifacts to npm without treating them as supported public surfaces
- the generated/public `@osdk/foundry.*` packages likely sit beside richer or less stable internal siblings in the same release machinery
- public visibility does not mean public contract

Likely internal counterpart:

- non-public or supportless generated SDK layers with endpoints/types not meant for external consumption
- possibly shared substrate packages used by generated public SDK namespaces and internal clients

Confidence: high

## Strong but more interpretive seams

### 4. `@osdk/maker-experimental` exposes backend/platform artifact shapes

Evidence:

- `oac-compiler-research/npm-inspect/unpacked/maker-experimental/build/esm/cli/main.js:28` announces `Generating BlockGeneratorResult for ontology...`
- `oac-compiler-research/npm-inspect/unpacked/maker-experimental/build/esm/cli/main.js:83` writes `ontology.json`
- `oac-compiler-research/npm-inspect/unpacked/maker-experimental/build/esm/cli/main.js:88` creates a `BlockGeneratorResult`
- `oac-compiler-research/npm-inspect/unpacked/maker-experimental/build/esm/api/defineOntologyV2.js:17` imports Maker state and converts it through a V2 pipeline

What this means:

- this package does not feel like a polished user-facing CLI first
- it feels like Palantir surfaced a compiler/backend boundary because that boundary was already meaningful internally

Likely internal counterpart:

- ontology/block packaging or marketplace ingestion systems that consume `ontology.json`, shapes, and block metadata
- internal build graph components that expect `BlockGeneratorResult` as a contract

Confidence: medium-high

### 5. `@osdk/generator-converters.preview` looks like a publicized internal bridge layer

Evidence:

- package description: `OSDK generator with support for Python and TSv2 discovered functions`
- `oac-compiler-research/npm-inspect/unpacked/generator-converters.preview/build/esm/cli/generate-sdk.js:106` converts Ontology IR into preview full metadata
- `oac-compiler-research/npm-inspect/unpacked/generator-converters.preview/build/esm/cli/generate-sdk.js:115` calls cross-language query/function discovery
- `oac-compiler-research/npm-inspect/unpacked/generator-converters.preview/build/esm/cli/generate-sdk.js:153` writes `ontology-metadata.json`
- `oac-compiler-research/npm-inspect/unpacked/generator-converters.preview/build/esm/PreviewOntologyIrConverter.js:34` extends base conversion with richer action metadata and UUID-style RIDs

What this means:

- this package is public, but it exposes a lot of internal layering directly: IR conversion, full metadata, preview-only action logic, discovery hooks, SDK generation
- it looks like a bridge package that escaped earlier than a simplified stable product surface

Likely internal counterpart:

- an internal end-to-end codegen pipeline that already understood Ontology IR, function discovery, and generated SDK output as one flow
- possibly a shared pipeline used by Developer Console or internal ontology tooling

Confidence: medium-high

## Supporting signals

### Historical dependency traces

- `oac-compiler-research/npm-inspect/unpacked/generator-converters/CHANGELOG.md:1358` references `@osdk/internal.foundry.core@0.2.0`
- earlier beta changelog lines also reference `@osdk/internal.foundry.core`

Interpretation:

- public packages in this ecosystem have at least historically moved near or through internal substrate packages
- even when current package manifests are cleaner, changelog history shows some public/private untangling work happened recently

### Public wrapper packages may be replacing direct exposure

- `@osdk/vite-plugin-oac` describes a complete OAC pipeline from source code to ready-to-use assets
- its npm dependencies are all public-facing packages: `@osdk/maker`, `@osdk/cli`, `@osdk/generator-converters.ontologyir`, `@osdk/foundry.ontologies`, `@osdk/client.unstable`, and others

Interpretation:

- Palantir may be trying to wrap rougher internal-style steps into a more public DX layer rather than publishing every low-level piece as a polished standalone workflow
- that supports the idea that some current preview/experimental packages are transitional exposure, not the final public abstraction

## Best current map of likely internal counterparts

| Public surface | Likely internal counterpart | Why |
| --- | --- | --- |
| `@osdk/maker` function discovery hook | internal TS OSDK function discoverer/indexer | direct private import and runtime failure without it |
| `@osdk/maker-experimental` | ontology/block compiler backend | emits backend-style artifact contracts |
| `@osdk/generator-converters.preview` | integrated IR/discovery/codegen pipeline | bundles too many compiler-stage concerns together to feel accidental |
| `@osdk/foundry.*` public namespaces | broader internal generated Foundry clients | explicit `@osdk/internal.foundry.*` package family exists |
| `palantir-mcp` | private MCP package and secure distribution flow | public wrapper says so directly |

## What to watch next

- whether `@foundry/functions-typescript-osdk-discovery` ever becomes public
- whether Maker Experimental becomes the default backend behind Maker
- whether `generator-converters.preview` stabilizes into a less obviously internal package shape
- whether `@osdk/vite-plugin-oac` becomes the preferred public facade that hides some of these seams

## Practical takeaway

The public OAC stack is real, but the cleanest way to read it is not as a finished product line. It is a partially externalized internal toolchain. The important question is not "is this public or private" in the abstract; it is "which layer is a supported public contract, and which layer is a visible implementation seam?"
