---
title: OAC Compiler Stack
summary: The most important story is the emergence of a public ontology-as-code stack, with authoring, compiler, conversion, and deployment layers becoming separately visible.
status: mixed
importance: high
relatedPackages:
  - osdk-maker
  - osdk-maker-experimental
  - osdk-generator-converters
  - osdk-generator-converters-preview
  - osdk-cli
relatedSeams:
  - maker-ts-discovery
  - internal-shaped-artifacts
---

Palantir's public OSDK story no longer looks like only SDK consumption. It now looks like a gradually externalized toolchain:

- `@osdk/maker` as the public authoring DSL
- `@osdk/maker-experimental` as a more compiler-like backend path
- `@osdk/generator-converters*` as the metadata normalization layer
- `@osdk/create-app` and `@osdk/cli` as downstream app bootstrap and deployment tools

The most revealing package is `@osdk/generator-converters.preview`. It is the first public package that clearly bridges ontology IR, cross-language function discovery, richer metadata, and SDK generation in one workflow.

The shape of the ecosystem suggests a compiler pipeline is being exposed through multiple packages rather than one simple stable product surface.
