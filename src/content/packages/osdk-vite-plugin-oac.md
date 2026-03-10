---
title: Vite Plugin OAC
summary: The public Vite-facing wrapper around the OAC pipeline, important because it turns ontology compilation into a normal dev-server/build step.
packageName: '@osdk/vite-plugin-oac'
kind: OAC build plugin
status: public
importance: medium
firstSeen: 2025-06
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Runs Maker, IR-to-metadata conversion, and OSDK generation as part of Vite dev/build.
  - Shows the public OAC workflow being shaped around ordinary frontend tooling rather than a separate compiler UX.
  - Recent stable patches are mostly compatibility alignment; the meaningful feature is the three-stage build pipeline itself.
topicIds:
  - oac-compiler-stack
seamIds:
  - public-wrapper-private-core
---

`@osdk/vite-plugin-oac` matters because it does more than expose config. It explicitly orchestrates three steps: ontology source to IR, IR to full metadata, and full metadata to generated OSDK output.

That means Palantir is turning ontology-as-code into something a frontend developer can run inside a normal Vite loop, instead of treating compilation as a totally separate internal pipeline.

The recent 0.5.6 stable patch is not the interesting part. The interesting part is that this package exists at all, and that its internals openly call Maker, metadata conversion, and `osdk unstable typescript generate` in sequence.
