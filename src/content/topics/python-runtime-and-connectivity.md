---
title: Python Runtime and Connectivity
summary: On the Python side, the interesting story is the separation between general Foundry API access, compute-module runtime support, and external-system connectivity.
status: public
importance: medium
relatedPackages:
  - foundry-platform-sdk
  - foundry-compute-modules
  - external-systems
relatedSeams: []
---

The Python cluster breaks into three layers:

- `foundry-platform-sdk` for general Foundry API access
- `foundry-compute-modules` for runtime bootstrapping, annotations, schemas, logging, and resource helpers
- `external-systems` for proxied connectivity, sessions, and secrets handling

That separation matters because it shows Palantir treating runtime execution concerns as distinct from broad API coverage.

It also gives the public story a cross-language dimension: TypeScript dominates the OAC/compiler story, while Python shows up more strongly in runtime and connectivity workflows.
