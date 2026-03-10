---
title: Vite Plugin OAC
summary: The public Vite-facing wrapper around OAC generation, useful mostly because its release cadence exposes compiler-side compatibility movement.
packageName: '@osdk/vite-plugin-oac'
kind: OAC build plugin
status: public
importance: medium
firstSeen: 2025-06
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Sits at the public edge of the ontology-as-code compile and generation path.
  - Patch releases often mirror dependency motion in @osdk/api, client.unstable, and ontology IR converters.
  - The fresh 0.5.6 release looks like compatibility maintenance rather than a new developer-facing feature.
topicIds:
  - oac-compiler-stack
seamIds:
  - public-wrapper-private-core
---

`@osdk/vite-plugin-oac` is interesting less because of its own API surface and more because it is one of the cleanest public hints that the OAC toolchain is being productized behind a normal frontend workflow.

The latest 0.5.6 stable publish landed in the same release wave as the 2.7.5 OSDK packages.

From the public changelog and package diff, this patch looks like a dependency rollup across the OAC pipeline rather than a brand-new plugin feature. That still matters: it suggests the public wrapper is being kept in lockstep with deeper compiler layers.
