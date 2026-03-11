# Public Seam Notes

Provenance note: every claim below is based on public GitHub source, public npm metadata, or public published package builds. No local unpacked artifacts or private repositories are cited.

## Bottom line

The OSDK/OAC package set is public enough to inspect in detail, but some workflows still show mixed boundaries. The main seams visible from public sources are:

| Seam type | Public evidence shape | Example |
| --- | --- | --- |
| Deferred runtime dependency | a public package imports part of a workflow lazily instead of shipping it inline | `@osdk/maker` function discovery |
| Wrapper/launcher package | a public package sets up or launches a broader runtime instead of implementing it end to end | `palantir-mcp` |
| Registry-visible limited-support package | package metadata is public, but support expectations are explicitly narrow | internal limited-support package families |
| Backend-oriented artifact surface | public CLI output looks closer to compiler or platform contracts than app-facing DX | `@osdk/maker-experimental` |
| Bridge package | one package ties together IR conversion, discovery, and SDK generation | `@osdk/generator-converters.preview` |

## Highest-confidence seams

### 1. Maker TypeScript discovery boundary

Public evidence:

- Public source: `https://github.com/palantir/osdk-ts/blob/main/packages/maker/src/api/defineFunction.ts`
- Public published build: `https://unpkg.com/@osdk/maker@0.16.0-beta.9/build/esm/api/defineFunction.js`

What is visible from those sources:

- Maker exposes function-related authoring and discovery hooks.
- The discovery step is loaded separately at execution time rather than being fully inlined into the main package flow.
- That makes TypeScript discovery the clearest place where the public workflow is still not fully self-contained.

### 2. `palantir-mcp` as a wrapper layer

Public evidence:

- Public npm page: `https://www.npmjs.com/package/palantir-mcp`
- Public source: `https://github.com/palantir/palantir-mcp/blob/develop/src/spawn.ts`

What is visible from those sources:

- The package presents itself as a lightweight wrapper/installer layer.
- The public implementation focuses on setup, preflight checks, and process launch behavior.
- That makes it a clean example of access tooling being published separately from a broader runtime surface.

### 3. Registry-visible packages with limited public support

Public evidence:

- public npm package pages for limited-support package families in the OSDK namespace
- package descriptions and naming on those public pages

What is visible from those sources:

- These package pages are publicly visible.
- Their naming and package descriptions signal that visibility and support level are not the same thing.
- That matters when mapping the ecosystem, because public registry presence alone does not guarantee a normal public contract.

## Stronger interpretive seams

### 4. `@osdk/maker-experimental` exposes backend-oriented artifacts

Public evidence:

- Public source: `https://github.com/palantir/osdk-ts/blob/main/packages/maker-experimental/src/cli/main.ts`
- Public published build: `https://unpkg.com/@osdk/maker-experimental@0.6.0-beta.4/build/esm/cli/main.js`

Visible behavior:

- The CLI writes `ontology.json`.
- It emits a `BlockGeneratorResult` payload.
- The overall output shape reads more like a compiler/backend handoff than a simple app-facing scaffold.

### 5. `@osdk/generator-converters.preview` bridges IR, discovery, and codegen

Public evidence:

- Public source: `https://github.com/palantir/osdk-ts/blob/main/packages/generator-converters.preview/src/cli/generate-sdk.ts`
- Public published build: `https://unpkg.com/@osdk/generator-converters.preview@0.1.0-beta.2/build/esm/cli/generate-sdk.js`

Visible behavior:

- The CLI converts ontology IR into richer metadata.
- It can incorporate discovered functions.
- It drives SDK generation from the same flow.
- That combination makes it the clearest public bridge package in the stack.

## Practical takeaway

Using only public evidence, the package graph already supports a strong technical reading: Palantir has opened a meaningful ontology-as-code toolchain, but some pieces are still separated by runtime boundaries, wrapper layers, or backend-oriented artifacts.
