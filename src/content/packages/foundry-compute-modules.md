---
title: Foundry Compute Modules
summary: The Python runtime/tooling layer for compute modules, focused on annotations, schema inference, bootstrapping, logging, and resources.
packageName: foundry-compute-modules
kind: python runtime library
status: public
importance: medium
firstSeen: 2025-01
repo: https://github.com/palantir/python-compute-module
keyTakeaways:
  - Supports runtime bootstrapping and schema/runtime utilities.
  - Depends on external-systems for source connectivity.
  - Helps separate runtime execution concerns from broad API access.
topicIds:
  - python-runtime-and-connectivity
seamIds: []
---

This package makes the Python story more operational. It is not the broadest SDK, but it is closer to how runtime code actually executes inside Foundry-adjacent environments.
