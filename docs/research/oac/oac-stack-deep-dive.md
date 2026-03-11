# OAC Compiler Stack Deep Dive

Provenance note: this document is based on public GitHub repositories, public npm/PyPI package pages, and public published builds on unpkg.

## Main conclusion

The public OSDK toolchain now spans three visible layers:

1. ontology authoring in `@osdk/maker`
2. conversion / backend-oriented compilation in `@osdk/generator-converters*` and `@osdk/maker-experimental`
3. app bootstrap and deployment in `@osdk/create-app` and `@osdk/cli`

That story is visible from public sources alone; it does not depend on private repository access.

## Public source basis

- `@osdk/maker`: `https://github.com/palantir/osdk-ts/tree/main/packages/maker`
- `@osdk/maker-experimental`: `https://github.com/palantir/osdk-ts/tree/main/packages/maker-experimental`
- `@osdk/generator-converters`: `https://github.com/palantir/osdk-ts/tree/main/packages/generator-converters`
- `@osdk/generator-converters.preview`: `https://github.com/palantir/osdk-ts/tree/main/packages/generator-converters.preview`
- `@osdk/create-app`: `https://github.com/palantir/osdk-ts/tree/main/packages/create-app`
- `@osdk/cli`: `https://github.com/palantir/osdk-ts/tree/main/packages/cli`
- `palantir-mcp`: `https://github.com/palantir/palantir-mcp`

## What each layer does

### `@osdk/maker`: authoring layer

Public source and changelog history show Maker growing from basic ontology definitions into a broader authoring DSL covering objects, interfaces, actions, imports, links, value handling, and function-oriented workflows.

Relevant public source:

- `https://github.com/palantir/osdk-ts/blob/main/packages/maker/src/api/defineFunction.ts`

What that supports:

- ontology definition is a first-class source-language concern
- function-related workflows now sit close to the authoring layer
- the authoring surface is broad enough to act like the front end of a compiler pipeline

### `@osdk/maker-experimental`: backend-oriented output path

Relevant public source:

- `https://github.com/palantir/osdk-ts/blob/main/packages/maker-experimental/src/cli/main.ts`

Publicly visible behavior:

- writes `ontology.json`
- emits `BlockGeneratorResult`
- layers on top of Maker-owned ontology state

That makes it look like a second compilation target focused on structured output artifacts rather than only app-facing authoring.

### `@osdk/generator-converters`: normalization layer

Relevant public source:

- `https://github.com/palantir/osdk-ts/blob/main/packages/generator-converters/src/wireQueryTypeV2ToSdkQueryMetadata.ts`

Publicly visible behavior:

- converts ontology/query structures into SDK-facing metadata
- captures semantics like branch awareness, transaction IDs, and media query handling

This is the package to watch when trying to understand where new execution semantics land first.

### `@osdk/generator-converters.preview`: discovery-aware bridge

Relevant public source:

- `https://github.com/palantir/osdk-ts/blob/main/packages/generator-converters.preview/src/cli/generate-sdk.ts`

Publicly visible behavior:

- accepts ontology IR
- enriches metadata
- supports TypeScript and Python discovery hooks
- invokes SDK generation from the same flow

This is the clearest public sign of an end-to-end codegen pipeline rather than a narrow helper package.

### `@osdk/functions-testing.experimental`: local testing support

Relevant public source:

- `https://github.com/palantir/osdk-ts/blob/main/packages/functions-testing.experimental/src/mock/createMockClient.ts`

Publicly visible behavior:

- mock object helpers
- query stubbing
- client-level testing ergonomics for local development

That points to a more complete external developer workflow around functions.

### `@osdk/language-models`: model-proxy interop

Relevant public source:

- `https://github.com/palantir/osdk-ts/blob/main/packages/language-models/src/utils.ts`

Publicly visible behavior:

- wraps fetch / token / base-url helpers around `PlatformClient`
- acts as plumbing for existing model SDKs rather than a standalone framework

### `@osdk/create-app` and `@osdk/cli`: downstream app path

Relevant public source:

- `https://github.com/palantir/osdk-ts/blob/main/packages/create-app/src/prompts/promptSdkVersion.ts`
- `https://github.com/palantir/osdk-ts/blob/main/packages/cli/src/commands/site/deploy/siteDeployCommand.mts`

Publicly visible behavior:

- scaffold application templates around generated SDK lines
- deploy and version sites through the public CLI

These packages matter, but they sit downstream of the more interesting ontology/compiler shift.

## Boundary notes visible from public sources

- Maker's TypeScript discovery path is the clearest mixed boundary, because the function path is visible in public source but not fully self-contained in the main public package flow.
- `palantir-mcp` is a public wrapper package whose implementation is centered on setup and process launch rather than the full runtime.
- Some registry-visible package families have narrower support signals than the main OSDK packages.

## Best public-only reading

Even without any private access, the public package set already shows a coherent architecture shift:

- ontology is authored in code
- metadata is normalized explicitly
- discovery and code generation are being combined
- app bootstrap and deployment are downstream consumers of that pipeline

That is enough to support the thesis that a public ontology-as-code toolchain is taking shape.
