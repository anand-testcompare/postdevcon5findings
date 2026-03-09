---
title: Foundry Third-Party Applications
summary: A generated namespace that underpins public site deployment workflows and makes the OSDK CLI's deployment layer easier to understand.
packageName: '@osdk/foundry.thirdpartyapplications'
kind: generated platform namespace
status: public
importance: medium
firstSeen: 2025-01
repo: https://github.com/palantir/foundry-platform-typescript
keyTakeaways:
  - Exposes resources for applications, websites, and versions.
  - Supports upload, deploy, undeploy, and version management operations.
  - Appears to be the API substrate used by the public OSDK CLI site deploy workflow.
topicIds:
  - app-bootstrap-and-deploy
seamIds: []
---

This namespace is strategically important because it shows the deployment APIs are not magic hidden behavior. They are public platform resources wrapped by the CLI.
