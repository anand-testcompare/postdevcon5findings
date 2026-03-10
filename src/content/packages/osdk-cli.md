---
title: OSDK CLI
summary: The operational CLI for deploys and selected generation workflows; most mature on shipping/runtime operations rather than compiler internals.
packageName: '@osdk/cli'
kind: deploy and operations CLI
status: public
importance: high
firstSeen: 2023-11
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Handles site deployment, snapshots, version inference, and operational workflows around third-party apps.
  - Matured deploy ergonomics before Palantir exposed much of the compiler stack.
  - Uses public Foundry third-party-application APIs underneath site deploy flows.
topicIds:
  - app-bootstrap-and-deploy
  - oac-compiler-stack
seamIds: []
---

This package is the oldest major public layer in the story.

The meaningful features here are not recent patch bumps. They are the shape of the public contract: site deployment, snapshot upload, auto-versioning, preview links, and widget/site operational commands all landed before the newer OAC compiler pieces were visible.

The deploy command is especially revealing because it is not doing hidden magic. It zips a directory, uploads a version through the third-party applications API, and either deploys it live or returns a preview link. That is a very concrete public ops surface.

That timeline helps explain why the public stack can feel more mature at the deploy end than at the compiler end.
