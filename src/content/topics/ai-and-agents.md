---
title: AI and Agents
summary: The AI-related packages are smaller and more generated than the compiler stack, but they show Foundry agent and model surfaces becoming part of the public package graph.
status: public
importance: medium
relatedPackages:
  - osdk-language-models
  - osdk-foundry-aipagents
relatedSeams: []
---

The AI cluster is less about one big handwritten framework and more about normalization around public access points.

`@osdk/language-models` is a thin helper for reaching Foundry-proxied OpenAI and Anthropic endpoints with the right auth and base URLs.

`@osdk/foundry.aipagents` is a generated namespace, but it is strategically useful because it shows public resources for agents, sessions, content, and traces.

The net effect is not a full public AI stack, but a signal that agent and model workflows are moving into the same package universe as OSDK apps and ontology tooling.
