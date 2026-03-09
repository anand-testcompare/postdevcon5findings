---
title: Maker
summary: The real public ontology-as-code DSL and the front door to the emerging OAC stack.
packageName: '@osdk/maker'
kind: ontology authoring DSL
status: mixed
importance: high
firstSeen: 2024-03
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Public authoring DSL for ontology objects, links, actions, value types, and related helpers.
  - Expanded rapidly through 2024 and 2025 into a much richer ontology-definition language.
  - Contains a TypeScript function-generation hook that still relies on a private package.
topicIds:
  - oac-compiler-stack
  - public-private-seams
seamIds:
  - maker-ts-discovery
---

Maker is the package to watch if you want the public face of Palantir's ontology-as-code strategy.

It already supports a broad and growing ontology language: objects, interfaces, links, actions, datasource variants, structs, value types, markings, media references, and more.

The important caveat is that its TypeScript function-discovery path is not fully public. The built code attempts to lazy-load `@foundry/functions-typescript-osdk-discovery`, which is not publicly installable.

So Maker is both a real public DSL and the clearest example of a leaky public/private seam.
