---
title: Generator Converters
summary: The normalization layer where ontology and query semantics become SDK metadata; this is where semantic support tends to land before it becomes visible in higher layers.
packageName: '@osdk/generator-converters'
kind: metadata conversion layer
status: public
importance: medium
firstSeen: 2025-01
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Wires raw ontology/query structures into the metadata shapes the generated SDK actually uses.
  - Real capability changes landed here for branch-aware queries, transaction IDs, media query IO, formatting, and interface-property handling.
  - Reveals where new semantics often land before they become obvious in higher-level tooling.
  - The 2.7.5 stable patch itself is mostly version alignment; the important changes are earlier minor additions in the 2.6/2.7/2.8 line.
topicIds:
  - oac-compiler-stack
seamIds: []
---

This package is not the flashiest part of the stack, but it is essential to understanding how Palantir thinks about the compiler pipeline.

If Maker is the source language, generator converters are the normalization pass.

Watching this layer helps explain functional change, because it is where execution semantics become metadata that generators and discovery flows can consume.

The meaningful additions were not the most recent stable patch. They were changes like branch execution support, transaction IDs on queries, media query types, and interface-property metadata improvements. Those are exactly the kinds of semantics that later show up as “new SDK behavior.”

In other words, this package remains strategically important even when an individual patch release is mostly coordinated version alignment.
