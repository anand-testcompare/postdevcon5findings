---
title: Language Models
summary: A thin helper package for Foundry-proxied model access, notable more for strategic direction than implementation depth.
packageName: '@osdk/language-models'
kind: model proxy helper
status: public
importance: medium
firstSeen: 2026-03
repo: https://github.com/palantir/osdk-ts
keyTakeaways:
  - Small wrapper around auth and proxy plumbing for OpenAI and Anthropic endpoints.
  - Not a full agent or orchestration framework.
  - Signals that LLM access is becoming a normalized SDK-adjacent workflow.
topicIds:
  - ai-and-agents
seamIds: []
---

The package is technically small, but strategically meaningful.

It shows Palantir making Foundry's model proxying easier to consume from application code without forcing a larger opinionated AI runtime into the public story.
