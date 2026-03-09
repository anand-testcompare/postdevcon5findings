---
title: Generator Converters
summary: The normalization layer where ontology and query semantics are translated into richer metadata for SDK generation.
packageName: '@osdk/generator-converters'
kind: metadata conversion layer
status: public
importance: medium
firstSeen: 2025-01
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Handles conversion from ontology and query structures into OSDK-friendly metadata.
  - Recent changes include branch-aware execution, transaction IDs, and media query IO.
  - Reveals where new semantics often land before they become obvious in higher-level tooling.
topicIds:
  - oac-compiler-stack
seamIds: []
---

This package is not the flashiest part of the stack, but it is essential to understanding how Palantir thinks about the compiler pipeline.

If Maker is the source language, generator converters are the normalization pass.

Watching this layer helps explain functional change, because it is where execution semantics become metadata that generators and discovery flows can consume.
