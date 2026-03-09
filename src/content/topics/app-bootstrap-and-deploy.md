---
title: App Bootstrap and Deploy
summary: Public app creation and deployment exist today, but they are downstream of the more interesting OAC and compiler changes.
status: public
importance: medium
relatedPackages:
  - osdk-create-app
  - osdk-cli
  - osdk-foundry-thirdpartyapplications
relatedSeams: []
---

`@osdk/create-app` and `@osdk/cli` matter because they close the loop from generated SDKs to running apps.

`@osdk/create-app` now includes multiple embedded templates, hidden tutorial variants, and behavior that tries to choose the latest compatible SDK version automatically.

`@osdk/cli` is more operational than compiler-oriented. It handles site deploys, version management, and widgetset workflows, and it appears to wrap the `foundry.thirdpartyapplications` API surface under the hood.

That makes these packages strategically important, but still downstream of the deeper compiler and discovery shift.
