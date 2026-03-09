---
title: OSDK CLI
summary: The operational CLI for site deploys, versioning, and selected unstable or experimental flows.
packageName: '@osdk/cli'
kind: deploy and operations CLI
status: public
importance: high
firstSeen: 2023-11
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Handles site deployment and version workflows.
  - Promoted widgetset commands out of unstable.
  - Uses public Foundry third-party-application APIs underneath site deploy flows.
topicIds:
  - app-bootstrap-and-deploy
  - oac-compiler-stack
seamIds: []
---

This package is the oldest major public layer in the story.

It matters because it shows Palantir exposed deployment and operational workflows before it fully exposed the compiler and discovery internals.

That timeline helps explain why the public stack can feel more mature at the deploy end than at the compiler end.
