---
title: Maker TypeScript Discovery Boundary
summary: Public Maker exposes a function-discovery path that is not fully self-contained in the public install flow.
seamType: incomplete public discovery path
status: mixed
confidence: high
publicSurface:
  - '@osdk/maker'
evidenceRefs:
  - Maker includes a lazy-loaded TypeScript discovery step in its function path.
  - That discovery path is not documented as a fully standalone public install workflow.
---

This is the sharpest seam in the whole public OAC story.

Maker is public, but one of its most strategically important flows is not self-contained in the public package set. That makes the package both valuable and still dependent on a boundary outside the simplest public install path.
