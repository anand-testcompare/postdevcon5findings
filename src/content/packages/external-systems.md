---
title: External Systems
summary: The Python connectivity layer for proxied external sessions, secrets handling, and source-style runtime access.
packageName: external-systems
kind: python connectivity sdk
status: public
importance: medium
firstSeen: 2025-01
repo: https://github.com/palantir/external-systems
keyTakeaways:
  - Handles proxied connectivity, sessions, and secrets.
  - Used by compute modules for source connectivity scenarios.
  - Shows Palantir externalizing the connectivity substrate as its own library.
topicIds:
  - python-runtime-and-connectivity
seamIds: []
---

External Systems matters because it turns what could have been hidden runtime plumbing into its own explicit public layer.
