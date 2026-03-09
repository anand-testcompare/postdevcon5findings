---
title: Maker Experimental
summary: A compiler-flavored V2 path layered on top of Maker state, exposing backend-oriented artifacts and shape generation.
packageName: '@osdk/maker-experimental'
kind: ontology compiler backend
status: experimental
importance: high
firstSeen: 2025-08
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Imports Maker state instead of replacing it.
  - Produces V2-style ontology output, shapes, and block-generation artifacts.
  - Feels more like an exposed backend contract than a polished end-user CLI.
topicIds:
  - oac-compiler-stack
  - public-private-seams
seamIds:
  - internal-shaped-artifacts
---

Maker Experimental is the strongest public sign that Palantir is rewriting or re-layering the backend/compiler side of ontology-as-code.

Its CLI writes `ontology.json` and a `BlockGeneratorResult`, which strongly suggests it is exposing a platform ingestion boundary rather than only a DX-facing workflow.

The package matters because it shows the compiler architecture becoming visible, not just the authoring syntax.
