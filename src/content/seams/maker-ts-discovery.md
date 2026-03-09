---
title: Maker TypeScript Discovery Dependency
summary: Public Maker exposes a function-discovery path that still depends on a private runtime package.
seamType: hard private runtime dependency
status: mixed
confidence: high
publicSurface: '@osdk/maker'
likelyInternalCounterpart: Internal TypeScript OSDK function discoverer or indexer used by Foundry and Developer Console flows.
evidenceRefs:
  - maker/build/esm/api/defineFunction.js dynamically imports @foundry/functions-typescript-osdk-discovery
  - npm lookup for @foundry/functions-typescript-osdk-discovery returns not found
---

This is the sharpest seam in the whole public OAC story.

Maker is public and real, but one of its most strategically important flows is not self-contained in public npm. That makes the package simultaneously credible and incomplete.
