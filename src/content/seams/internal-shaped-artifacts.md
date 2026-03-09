---
title: Internal-Shaped Output Artifacts
summary: Some public packages emit outputs that look like platform or backend contracts rather than polished end-user artifacts.
seamType: internal-shaped output artifact
status: mixed
confidence: medium
publicSurface:
  - '@osdk/maker-experimental'
  - '@osdk/generator-converters.preview'
likelyInternalCounterpart: Ontology block packaging, ingestion, and integrated codegen pipelines used by internal tooling.
evidenceRefs:
  - Maker Experimental CLI emits BlockGeneratorResult and ontology.json
  - generator-converters.preview writes ontology-metadata.json and combines conversion plus discovery plus generation
---

These packages feel public, but not yet productized all the way down. Their outputs suggest Palantir surfaced meaningful internal boundaries before fully simplifying the surrounding workflow.
