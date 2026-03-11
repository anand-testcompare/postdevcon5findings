---
title: Public-Private Seams
summary: Several packages are public enough to inspect, but they still reveal incomplete public workflows, wrapper layers, and backend-oriented artifacts.
status: mixed
importance: high
relatedPackages:
  - osdk-maker
  - palantir-mcp
  - osdk-maker-experimental
  - osdk-generator-converters-preview
relatedSeams:
  - maker-ts-discovery
  - public-wrapper-non-public-runtime
  - support-level-boundary-packages
  - internal-shaped-artifacts
---

The public/private boundary is not a single line. It shows up in several patterns:

- incomplete public workflows inside otherwise useful packages
- public installer packages that front a fuller runtime elsewhere
- registry-visible packages with mixed support expectations
- outputs that look more like platform contracts than end-user artifacts

The clearest hard seam is Maker's TypeScript function discovery path, which is visible in public code but not fully packaged as a standalone public workflow.

The cleanest wrapper seam is `palantir-mcp`, which publicly describes itself as a wrapper rather than the full runtime.
