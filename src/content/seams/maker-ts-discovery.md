---
title: Maker TypeScript Discovery Boundary
summary: In the public materials reviewed for this repo, Maker exposes a function-discovery path whose standalone install workflow is not clearly documented.
seamType: discovery boundary with incomplete public install guidance
status: mixed
confidence: high
publicSurface:
  - '@osdk/maker'
evidenceRefs:
  - Maker includes a lazy-loaded TypeScript discovery step in its function path.
  - In the public materials reviewed for this repo, we did not find a documented standalone install workflow for that discovery step.
---

This is the sharpest seam in the whole public OAC story.

Maker is public, but one of its most strategically important flows is not shown here as a standalone public install path. Based on the public materials reviewed for this repo, that discovery step still appears to sit outside the simplest install flow.
