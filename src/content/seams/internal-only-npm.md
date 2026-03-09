---
title: Internal-Only Packages Published on npm
summary: Some packages are published on npm but explicitly label themselves as internal-only, which weakens any simple public-versus-private reading of the ecosystem.
seamType: published but explicitly internal
status: mixed
confidence: high
publicSurface:
  - '@osdk/internal.foundry'
  - '@osdk/internal.foundry.core'
  - '@osdk/internal.foundry.ontologies'
likelyInternalCounterpart: Broader generated Foundry client layers and unsupported internal SDK substrates.
evidenceRefs:
  - package descriptions literally say This is an internal only package
  - repository metadata points to public foundry-platform-typescript
---

This pattern matters because it shows package visibility is not the same thing as supportability. A package being on npm does not automatically make it a public contract.
