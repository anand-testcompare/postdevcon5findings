---
title: Functions Testing Experimental
summary: A local-first mocking package that suggests external function development is becoming a first-class workflow.
packageName: '@osdk/functions-testing.experimental'
kind: local testing helper
status: experimental
importance: medium
firstSeen: 2026-02
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Exposes `createMockClient` and helpers for mock objects and object sets.
  - Supports `when(...)` and `whenQuery(...)` style stubbing.
  - Some APIs are still explicitly unsupported, so it is not yet complete.
topicIds:
  - oac-compiler-stack
seamIds: []
---

This package matters because it changes the implied workflow.

Instead of assuming all interesting testing happens inside Foundry, it suggests Palantir expects developers to write and validate function logic locally.

That fits the broader discovery and SDK-generation story: ontology and function development are becoming more toolable outside the platform UI.
