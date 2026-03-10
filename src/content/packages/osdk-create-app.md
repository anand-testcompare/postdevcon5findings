---
title: Create App
summary: The public scaffolding CLI for SDK apps; more interesting for its template/versioning model than for any recent patch bump.
packageName: '@osdk/create-app'
kind: app bootstrap CLI
status: public
importance: medium
firstSeen: 2024-02
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Couples starter templates to supported OSDK lines such as `1.x` and `2.x`.
  - Defaults to the latest compatible SDK template when the user does not pass `--sdkVersion`.
  - Supports bootstrapping flows even before a local OSDK package exists.
  - The recent stable patch is mostly maintenance; the meaningful additions were template/versioning behavior in the 2.7 line.
topicIds:
  - app-bootstrap-and-deploy
seamIds: []
---

`@osdk/create-app` is the public on-ramp for application development, but the meaningful part is not the Vite bump.

Its importance is that it exposes how Palantir wants generated SDKs to become apps: through version-coupled templates, hidden tutorial variants, and bootstrap flows that can start before the SDK package is fully wired in.

The `promptSdkVersion` function is not an LLM prompt. It is the interactive CLI step that decides which OSDK template line to scaffold. In practice, that means `create-app` is carrying compatibility policy for generated apps, not only copying files.

The meaningful additions in the 2.7 generation were: bootstrapping without an existing OSDK, adding `@osdk/foundry` to templates, and making the default SDK choice the latest compatible template rather than the earliest one. The 2.7.5 patch itself is mostly maintenance.
