---
title: palantir-mcp
summary: A public wrapper package that exists mainly to install or bootstrap a private MCP core from secure Foundry environments.
packageName: palantir-mcp
kind: wrapper installer
status: mixed
importance: high
firstSeen: 2025-01
repo: https://github.com/palantir/palantir-mcp
keyTakeaways:
  - Public package explicitly states that it wraps private `@palantir/mcp`.
  - Cleaner seam than Maker because the boundary is documented instead of hidden.
  - Strong evidence of Palantir publishing access tooling without fully publishing the runtime core.
topicIds:
  - public-private-seams
seamIds:
  - public-wrapper-private-core
---

This package is useful as a contrast case.

Unlike the Maker seam, where the private dependency shows up as a runtime surprise, `palantir-mcp` describes its own boundary clearly. That makes it a good example of a public wrapper around a private core.
