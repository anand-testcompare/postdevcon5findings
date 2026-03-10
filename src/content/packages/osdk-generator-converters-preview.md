---
title: Generator Converters Preview
summary: The clearest public bridge between ontology IR, cross-language function discovery, richer metadata, and SDK generation.
packageName: '@osdk/generator-converters.preview'
kind: preview codegen bridge
status: preview
importance: high
firstSeen: 2026-02
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Publishes a `generate-sdk` CLI.
  - Supports both TypeScript and Python discovered functions.
  - Generates Python SDK artifacts first so Python function discovery can resolve ontology imports.
  - Writes richer metadata like `ontology-metadata.json` in addition to codegen output.
topicIds:
  - oac-compiler-stack
  - public-private-seams
seamIds:
  - publicized-bridge-layer
---

This is one of the few packages where the new capability is concrete, not cosmetic.

It takes Ontology IR, enriches it into preview full metadata, optionally discovers TypeScript and Python functions, and then drives `@osdk/generator`.

The Python path is especially revealing: it generates a temporary Python SDK first so Python functions can import ontology types during discovery. That is a real compiler-pipeline behavior, not a superficial wrapper.

That combination makes the package look less like a one-off helper and more like a partially externalized internal pipeline.
