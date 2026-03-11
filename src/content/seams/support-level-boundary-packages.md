---
title: Support-Level Boundary Packages
summary: Some packages are visible in registries or release machinery but are not framed as normal public developer entry points.
seamType: visible package with limited public support
status: mixed
confidence: high
publicSurface:
  - generated namespace packages
  - lower-level registry artifacts
evidenceRefs:
  - some registry-visible packages are not presented as ordinary public developer surfaces
  - package visibility and support level do not always match one-to-one
---

This pattern matters because it shows package visibility is not the same thing as supportability. A package being on npm does not automatically make it a public contract.
