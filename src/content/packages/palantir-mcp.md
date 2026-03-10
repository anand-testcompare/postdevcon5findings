---
title: palantir-mcp
summary: A public wrapper package that authenticates against a Foundry-hosted npm registry and launches the private `@palantir/mcp` package.
packageName: palantir-mcp
kind: wrapper installer
status: mixed
importance: high
firstSeen: 2025-01
repo: https://github.com/palantir/palantir-mcp
keyTakeaways:
  - Public package explicitly states that it wraps private `@palantir/mcp`.
  - Handles token refresh, package availability checks, registry URL construction, and process spawning.
  - Cleaner seam than Maker because the boundary is documented instead of hidden.
  - Strong evidence of Palantir publishing access tooling without fully publishing the runtime core.
topicIds:
  - public-private-seams
seamIds:
  - public-wrapper-private-core
---

This package is useful as a contrast case.

Unlike the Maker seam, where the private dependency shows up through a lazy-loaded import, `palantir-mcp` describes its own boundary clearly. It checks connectivity and token validity, constructs a Foundry-hosted npm registry URL, then launches `npx @palantir/mcp@latest` with the right registry auth injected.

That makes it a good example of a public wrapper around a private core: the public package is useful on its own, while the MCP server remains inside the secure environment.
