---
title: Public-Private Seams
summary: Several packages are public enough to inspect, but they still reveal private runtime dependencies, public wrappers around private packages, and internal-only packages published to npm.
status: mixed
importance: high
relatedPackages:
  - osdk-maker
  - palantir-mcp
  - osdk-maker-experimental
  - osdk-generator-converters-preview
relatedSeams:
  - maker-ts-discovery
  - public-wrapper-private-core
  - internal-only-npm
  - internal-shaped-artifacts
---

The public/private boundary is not a single line. It shows up in several patterns:

- hard private runtime dependencies inside public packages
- public installer packages that front private cores
- public npm packages that explicitly call themselves internal-only
- outputs that look more like platform contracts than end-user artifacts

The clearest hard seam is Maker's TypeScript function discovery path, which attempts to load private `@foundry/functions-typescript-osdk-discovery` at runtime.

The cleanest wrapper seam is `palantir-mcp`, which publicly describes itself as a wrapper for the private `@palantir/mcp` package.
