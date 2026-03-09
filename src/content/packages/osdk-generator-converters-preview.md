---
title: Generator Converters Preview
summary: The clearest public bridge between ontology IR, function discovery, richer metadata, and SDK generation.
packageName: '@osdk/generator-converters.preview'
kind: preview codegen bridge
status: preview
importance: high
firstSeen: 2026-02
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Publishes a `generate-sdk` CLI.
  - Supports both TypeScript and Python discovered functions.
  - Writes richer metadata like `ontology-metadata.json` in addition to codegen output.
topicIds:
  - oac-compiler-stack
  - public-private-seams
seamIds:
  - publicized-bridge-layer
---

This is the package that makes the future direction easiest to see.

It takes Ontology IR, enriches it into preview full metadata, optionally discovers functions across languages, and then drives `@osdk/generator`.

That combination makes it look less like a one-off helper and more like a partially externalized internal pipeline.
