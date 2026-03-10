---
title: Language Models
summary: A tiny package, but a clear public signal that Foundry model-proxy access is being normalized around the PlatformClient.
packageName: '@osdk/language-models'
kind: model proxy helper
status: public
importance: medium
firstSeen: 2026-03
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Wraps `PlatformClient` auth and fetch behavior for OpenAI and Anthropic proxy endpoints.
  - Does not ship an agent framework; it standardizes connection plumbing only.
  - Matters because it turns Foundry LLM proxy access into normal app code rather than an ad hoc helper.
topicIds:
  - ai-and-agents
seamIds: []
---

The package is technically small, but strategically meaningful.

What is new is not complex orchestration logic. It is the decision to expose a clean public path for using existing model SDKs through Foundry's proxy by reusing the same `PlatformClient` token provider and fetch implementation.

That makes `@osdk/language-models` relevant as a direction-of-travel signal: Palantir is telling developers to keep using normal OpenAI/Anthropic clients, but route them through Foundry's auth and proxy surface.
