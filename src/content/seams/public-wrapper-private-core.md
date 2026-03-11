---
title: Public Wrapper Around Private Core
summary: Some packages are intentionally public as installers or access layers while the full runtime remains outside the visible package surface.
seamType: public wrapper around non-public runtime
status: mixed
confidence: high
publicSurface:
  - 'palantir-mcp'
evidenceRefs:
  - The package describes itself as a wrapper/installer rather than the full runtime.
  - Its public source focuses on setup and launch behavior rather than implementing the full server itself.
---

This pattern is cleaner than the Maker seam because it is explicit. It shows a public access layer without requiring the full runtime to appear in the same package surface.
