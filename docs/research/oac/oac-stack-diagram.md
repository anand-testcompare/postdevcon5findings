# OAC Stack Mental Model

Provenance note: this diagram is derived from public package source and public package metadata only.

## Short version

- `@osdk/maker` is the public authoring DSL.
- `@osdk/maker-experimental` extends that flow with a newer backend-oriented V2 path.
- Convert metadata with `@osdk/generator-converters`.
- Use `@osdk/generator-converters.preview` to bridge ontology IR to discovery-aware SDK generation.
- `@osdk/create-app` and `@osdk/cli` provide downstream bootstrap and deployment tooling.
- The main mixed boundary visible in public source is TypeScript function discovery under Maker.

## Dependency view

```mermaid
flowchart TD
    A[Ontology source code\n@osdk/maker DSL] --> B[Maker ontology state]
    B --> C[@osdk/maker-experimental\ndefineOntologyV2]
    B --> D[Ontology IR / metadata conversion]

    C --> E[Ontology V2 + shapes]
    E --> F[ontology.json + BlockGeneratorResult]

    D --> G[@osdk/generator-converters]
    G --> H[Full metadata]
    H --> I[@osdk/generator]
    I --> J[Generated SDK]

    A --> K[TS functions directory]
    L[Python functions directory] --> M[@osdk/generator-converters.preview]
    K --> M
    D --> M
    M --> N[Preview full metadata]
    N --> I
    M --> O[ontology-metadata.json]
    M --> P[Generated Python ontology SDK step]

    Q[@osdk/create-app] --> R[Template-based apps]
    R --> J

    S[@osdk/cli] --> T[Site deploy/version flows]
    T --> U[@osdk/foundry.thirdpartyapplications APIs]

    V[Additional TS discovery runtime] -.-> K
    A -. function discovery path .-> V
```

## Public evidence for the diagram

- Maker authoring / function path: `https://github.com/palantir/osdk-ts/blob/main/packages/maker/src/api/defineFunction.ts`
- Maker Experimental CLI: `https://github.com/palantir/osdk-ts/blob/main/packages/maker-experimental/src/cli/main.ts`
- Generator Converters Preview CLI: `https://github.com/palantir/osdk-ts/blob/main/packages/generator-converters.preview/src/cli/generate-sdk.ts`
- Create App template selection: `https://github.com/palantir/osdk-ts/blob/main/packages/create-app/src/prompts/promptSdkVersion.ts`
- CLI site deploy path: `https://github.com/palantir/osdk-ts/blob/main/packages/cli/src/commands/site/deploy/siteDeployCommand.mts`

## Best current mental model

- Maker is the public authoring front end.
- Maker Experimental is a backend-oriented output path.
- Converters and preview converters are the glue between ontology state, metadata, discovery, and SDK generation.
- App creation and deployment are increasingly public, but they are consumers of the ontology/compiler pipeline rather than the pipeline itself.
