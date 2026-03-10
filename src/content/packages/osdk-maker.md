---
title: Maker
summary: The real public ontology-as-code DSL; important because it kept expanding from object definitions into actions, imports, discovery, and compiler-facing workflows.
packageName: '@osdk/maker'
kind: ontology authoring DSL
status: mixed
importance: high
firstSeen: 2024-03
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Grew from basic ontology definitions into actions-as-code, imports, links, structs, value types, and query/function-related workflows.
  - Picked up concrete compiler-facing features like branching support, direct datasources, PSGs, and query function discovery.
  - Contains a TypeScript function-discovery hook that still relies on a private package.
topicIds:
  - oac-compiler-stack
  - public-private-seams
seamIds:
  - maker-ts-discovery
---

Maker is the package to watch if you want the public face of Palantir's ontology-as-code strategy.

What makes it significant is not just that it exists, but how quickly it expanded. The changelog shows a steady move from object definitions into actions-as-code, links-as-code, imports, interface actions, direct datasources, PSG handling, custom decimal/value formatting, and query function discovery.

That means Maker is no longer just a declarative DSL for ontology shape. It is increasingly the public authoring front-end for a broader compiler pipeline.

The important caveat is that its TypeScript function-discovery path is still not fully public. The code lazy-loads `@foundry/functions-typescript-osdk-discovery`, so one of the most interesting new workflows still crosses a private boundary.

So Maker is both a real public DSL and the clearest example of a leaky public/private seam.
