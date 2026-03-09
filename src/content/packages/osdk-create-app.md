---
title: Create App
summary: The public scaffolding CLI for SDK-consuming apps, with multiple template families and hidden tutorial variants.
packageName: '@osdk/create-app'
kind: app bootstrap CLI
status: public
importance: medium
firstSeen: 2024-02
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Packages React, Expo, Vue, and tutorial templates into the CLI bundle.
  - Includes beta behavior and chooses the latest compatible SDK version automatically.
  - Supports bootstrapping even when an OSDK is not yet present in some flows.
topicIds:
  - app-bootstrap-and-deploy
seamIds: []
---

`@osdk/create-app` is the public on-ramp for application development, but it is not the heart of the compiler story.

Its importance is that it turns generated SDKs and public platform APIs into something app developers can consume quickly.
