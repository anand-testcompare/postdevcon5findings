---
title: Public Wrapper Around Non-Public Runtime
summary: Some packages are intentionally public as installers or access layers while the full runtime remains outside the visible package surface.
seamType: public wrapper around non-public runtime
status: mixed
confidence: high
publicSurface:
  - 'palantir-mcp'
evidenceRefs:
  - npm package `palantir-mcp` describes itself as a lightweight wrapper/installer.
  - Public source at `palantir/palantir-mcp/src/spawn.ts` shows process launch behavior rather than server implementation.
  - Public source at `palantir/palantir-mcp/src/preflightChecks.ts` shows setup and validation logic in the public package.
  - This behavior is visible in the current public `develop` branch and the published npm package.
---

This pattern is cleaner than the Maker seam because it is explicit. It shows a public access layer without requiring the full runtime to appear in the same package surface.
