---
title: Public Wrapper Around Private Core
summary: Some packages are intentionally public only as installers or wrappers while the core runtime remains private.
seamType: public wrapper around private core
status: mixed
confidence: high
publicSurface: palantir-mcp
likelyInternalCounterpart: Private Foundry-authenticated MCP core package distributed inside secure environments.
evidenceRefs:
  - palantir-mcp npm metadata says it downloads and installs @palantir/mcp
  - npm lookup for @palantir/mcp returns not found
---

This pattern is cleaner than the Maker seam because it is explicit. It shows Palantir is willing to publish access tooling without publishing the full runtime.
