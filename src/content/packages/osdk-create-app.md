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
  - The fresh 2.7.5 stable publish appears to be mostly a template refresh, with starters moving to Vite ^7.3.1.
topicIds:
  - app-bootstrap-and-deploy
seamIds: []
---

`@osdk/create-app` is the public on-ramp for application development, but it is not the heart of the compiler story.

Its importance is that it turns generated SDKs and public platform APIs into something app developers can consume quickly.

The newest stable release wave matters because it shows where Palantir is spending maintenance effort right now: not on a new CLI surface, but on keeping starter apps aligned with newer frontend tooling.

For the last 24 hours specifically, the clearest concrete change is the template dependency bump to Vite `^7.3.1` across the generated app flows.
