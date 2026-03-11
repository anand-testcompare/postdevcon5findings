---
title: palantir-mcp
summary: A public wrapper package that sets up access to a broader MCP runtime rather than implementing that runtime itself.
packageName: palantir-mcp
kind: wrapper installer
status: mixed
importance: high
firstSeen: 2025-01
repo: https://github.com/palantir/palantir-mcp
keyTakeaways:
  - Public package explicitly positions itself as a wrapper/installer layer.
  - Handles setup, preflight checks, and process launch behavior.
  - Cleaner seam than Maker because the boundary is documented instead of hidden.
  - Strong evidence of Palantir publishing access tooling separately from the full runtime.
topicIds:
  - public-private-seams
seamIds:
  - public-wrapper-non-public-runtime
---

This package is useful as a contrast case.

Unlike the Maker seam, where the boundary shows up inside a function-discovery path, `palantir-mcp` describes its own boundary clearly. Its public source is focused on preflight checks and process launch behavior rather than implementing the full MCP runtime directly.

That makes it a good example of a public wrapper around a broader runtime surface: the public package is useful on its own, while the full runtime remains outside the main package implementation.
