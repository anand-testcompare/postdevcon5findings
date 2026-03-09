# Palantir OSDK High-Level Summary

## Core takeaways

- A real public compiler/tooling layer is forming around ontology-as-code, function discovery, SDK generation, and richer app scaffolding.
- `@osdk/maker` is the real public ontology-as-code DSL today.
- `@osdk/maker-experimental` looks like the next-generation backend/output model for OAC, not just a toy side package.
- `@osdk/generator-converters` and `@osdk/generator-converters.preview` are the key metadata/codegen plumbing packages.
- `@osdk/functions-testing.experimental` is a new local testing/mocking surface for OSDK functions.
- New platform namespaces like `@osdk/foundry.aipagents` and `@osdk/foundry.thirdpartyapplications` are mostly generated clients over newer public platform APIs.
- On Python, Palantir is clearly building three layers: broad Foundry API SDK, compute-module runtime SDK, and source/external-system connectivity SDK.

## OAC and compiler stack

### `@osdk/maker`

- Main public ontology-as-code package.
- Provides the authoring DSL: `defineOntology`, `defineObject`, `defineInterface`, `defineLink`, action helpers, shared property types, and value types.
- Recent work shows this is still evolving quickly: direct datasources, derived datasources, links/actions as code, interface actions, struct support, value types, property security groups, assumed markings, custom decimal types, media query support, and function discovery.

### `@osdk/maker-experimental`

- Much smaller and clearly more backend-oriented.
- Exposes `defineOntologyV2`, import-object helpers, and RID/block-shape generation types.
- Looks like the rewritten V2 output pipeline for Maker-authored ontologies.
- Commit history explicitly references an OAC rewrite and rewiring to Maker Experimental.

### `@osdk/generator-converters`

- Low-level converter layer that translates ontology/query metadata into OSDK-friendly definitions.
- Exports things like action, object, property, and query wiring utilities.
- Recent changes show Palantir extending query semantics: branch-aware execution, transaction IDs, media inputs/outputs, formatting/type improvements.

### `@osdk/generator-converters.preview`

- The most interesting new package in the stack.
- Adds a preview IR-to-full-metadata converter plus a `generate-sdk` CLI.
- Preserves richer action metadata like `fullLogicRules`.
- Supports TypeScript and Python function discovery.
- Can generate TS SDK output and install a generated Python ontology SDK to help Python function discovery resolve ontology imports.
- Strong signal of a future unified workflow: ontology + functions + generated SDKs from one code-defined source of truth.

## Function development

### `@osdk/functions-testing.experimental`

- New testing/mocking surface for local OSDK function development.
- Exports mock object creation plus a mock client with object/object-set stubbing and query stubbing.
- Makes local-first function testing more realistic, though still incomplete.

### `@osdk/language-models`

- Small helper package for using Foundry's LLM proxy with external SDKs.
- Exposes helpers like `createFetch`, `getFoundryToken`, `getOpenAiBaseUrl`, and `getAnthropicBaseUrl`.
- Thin interop layer, not a full AI framework.

## Newer platform namespaces

### `@osdk/foundry.aipagents`

- Generated SDK surface for Agent APIs.
- Includes resources like agents, agent versions, sessions, content, and session traces.
- Session APIs support blocking and streaming continuation, cancellation, RAG context, and title updates.
- Important because it means AIP agent interactions are formal enough to have a real public client surface.

### `@osdk/foundry.thirdpartyapplications`

- Important public deployment-management surface for third-party apps.
- Includes app metadata, website deployment, version upload/list/delete, deploy/undeploy, and snapshot uploads.
- Especially relevant for CI/CD and automated deployment workflows.

## CLI and scaffolding signals

### `@osdk/create-app`

- Main app bootstrap CLI.
- Recent themes: bootstrapping without requiring an OSDK up front, template updates, `@osdk/foundry` in templates, SDK-version defaulting to latest compatible template version, and ongoing media query support.

### `@osdk/create-widget`

- Widget bootstrap CLI.
- Less novel than the OAC/compiler stack, but clearly maturing.
- Notable shifts include widget-set orientation, minimal React template without OSDK, and repository-oriented release flows.

## Python side

### `foundry-platform-sdk` / `palantir/foundry-platform-python`

- Official broad Python SDK for Foundry APIs.
- Most mature of the Python surfaces.
- Recent changes include new endpoint coverage, table/dataframe improvements, async/beta features, and Python 3.10+ support.

### `foundry-compute-modules` / `palantir/python-compute-module`

- Runtime/helper library for building Python Compute Modules.
- Covers function registration, schema inference, runtime helpers, logging, pipeline resources, and auth helpers.
- Increasingly tied to `external-systems` for Sources support.

### `external-systems` / `palantir/external-systems`

- Focused SDK for Foundry Sources and proxied external connectivity.
- Provides preconfigured HTTP clients, secrets, session credentials, proxy URIs, and proxy sockets.
- Looks like the connectivity substrate for compute modules and related Python runtimes.

## Working thesis

- The most important new public story is not just PACK.
- It is the emergence of a compiler-like OAC stack centered on Maker, converters, function discovery, and generated SDK workflows.
- The most practically important operational/public surfaces are likely `foundry.thirdpartyapplications`, `create-app`, and the broader app deployment ecosystem.
