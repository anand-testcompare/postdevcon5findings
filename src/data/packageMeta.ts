export type PackageCodeLanguage = 'js' | 'ts' | 'tsx' | 'json' | 'python' | 'bash' | 'text';

export type PackageMeta = {
	inspectedVersion?: string;
	registryLabel?: string;
	registryUrl?: string;
	latestReleaseVersion?: string;
	latestReleasePublishedAt?: string;
	latestReleaseUrl?: string;
	latestReleaseSummary?: string;
	latestReleaseFeatured?: boolean;
	repoUrl?: string;
	sourceUrl?: string;
	sourcePath?: string;
	publishedCodeUrl?: string;
	publishedCodePath?: string;
	codeUrl?: string;
	codePath?: string;
	codeLanguage?: PackageCodeLanguage;
	codeSnippet?: string;
	notes?: string[];
};

export const packageMeta: Record<string, PackageMeta> = {
	"osdk-maker": {
		inspectedVersion: "0.16.0-beta.9",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/maker/v/0.16.0-beta.9",
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/maker",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/maker/src/api/defineFunction.ts",
		sourcePath: "packages/maker/src/api/defineFunction.ts",
		publishedCodeUrl: "https://unpkg.com/@osdk/maker@0.16.0-beta.9/build/esm/api/defineFunction.js",
		publishedCodePath: "build/esm/api/defineFunction.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/maker/src/api/defineFunction.ts",
		codePath: "packages/maker/src/api/defineFunction.ts",
		codeLanguage: "ts",
		codeSnippet: `let cachedFunctionDiscoverer = null;
async function loadFunctionDiscoverer() {
  try {
    const module = await import("@foundry/functions-typescript-osdk-discovery");
    cachedFunctionDiscoverer = module.FunctionDiscoverer;
    return cachedFunctionDiscoverer;
  } catch {
    return null;
  }
}`,
		notes: [
			"Public DSL is real; TS function discovery is still a private seam.",
		],
	},
	"osdk-maker-experimental": {
		inspectedVersion: "0.6.0-beta.4",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/maker-experimental/v/0.6.0-beta.4",
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/maker-experimental",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/maker-experimental/src/cli/main.ts",
		sourcePath: "packages/maker-experimental/src/cli/main.ts",
		publishedCodeUrl: "https://unpkg.com/@osdk/maker-experimental@0.6.0-beta.4/build/esm/cli/main.js",
		publishedCodePath: "build/esm/cli/main.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/maker-experimental/src/cli/main.ts",
		codePath: "packages/maker-experimental/src/cli/main.ts",
		codeLanguage: "ts",
		codeSnippet: `consola.log("Generating BlockGeneratorResult for ontology...");
const ontologyJsonPath = path.join(blockDataDir, "ontology.json");
await fs.promises.writeFile(ontologyJsonPath, ontologyJson);

const blockGeneratorResult = {
  block_identifier: "ontology",
  block_data_directory: blockDataDir,
  block_type: "ONTOLOGY"
};`,
		notes: ["Compiler/backend rewrite path surfaced through block-oriented artifacts."],
	},
	"osdk-generator-converters": {
		inspectedVersion: "2.8.0-beta.15",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/generator-converters/v/2.8.0-beta.15",
		latestReleaseVersion: "2.7.5",
		latestReleasePublishedAt: "2026-03-09T18:43:18.901Z",
		latestReleaseUrl: "https://www.npmjs.com/package/@osdk/generator-converters/v/2.7.5",
		latestReleaseSummary: "Fresh stable publish, but the diff is mostly version alignment with @osdk/api rather than new converter behavior.",
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/generator-converters",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/generator-converters/src/wireQueryTypeV2ToSdkQueryMetadata.ts",
		sourcePath: "packages/generator-converters/src/wireQueryTypeV2ToSdkQueryMetadata.ts",
		publishedCodeUrl: "https://unpkg.com/@osdk/generator-converters@2.8.0-beta.15/build/esm/wireQueryTypeV2ToSdkQueryMetadata.js",
		publishedCodePath: "build/esm/wireQueryTypeV2ToSdkQueryMetadata.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/generator-converters/src/wireQueryTypeV2ToSdkQueryMetadata.ts",
		codePath: "packages/generator-converters/src/wireQueryTypeV2ToSdkQueryMetadata.ts",
		codeLanguage: "ts",
		codeSnippet: `export function wireQueryTypeV2ToSdkQueryMetadata(input: QueryTypeV2): QueryMetadata {
	  return {
	    apiName: input.apiName,
	    version: input.version,
	    parameters: Object.fromEntries(...),
	    output: wireQueryDataTypeToQueryDataTypeDefinition(input.output),
	    rid: input.rid,
	  };
	}`,
		notes: ["Normalization layer where query execution semantics keep landing first."],
	},
	"osdk-generator-converters-preview": {
		inspectedVersion: "0.1.0-beta.2",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/generator-converters.preview/v/0.1.0-beta.2",
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/generator-converters.preview",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/generator-converters.preview/src/cli/generate-sdk.ts",
		sourcePath: "packages/generator-converters.preview/src/cli/generate-sdk.ts",
		publishedCodeUrl: "https://unpkg.com/@osdk/generator-converters.preview@0.1.0-beta.2/build/esm/cli/generate-sdk.js",
		publishedCodePath: "build/esm/cli/generate-sdk.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/generator-converters.preview/src/cli/generate-sdk.ts",
		codePath: "packages/generator-converters.preview/src/cli/generate-sdk.ts",
		codeLanguage: "ts",
		codeSnippet: `const previewMetadata = PreviewOntologyIrConverter.getPreviewFullMetadataFromIr(irJson);

if (argv.pythonBinary && argv.pythonFunctionsDir) {
  generatePythonSdk(previewMetadata, argv.pythonBinary);
}

if (argv.functionsDir || argv.pythonFunctionsDir) {
  const queryTypes = await OntologyIrToFullMetadataConverter.getOsdkQueryTypes(...);
  previewMetadata.queryTypes = queryTypes;
}

await generateClientSdkVersionTwoPointZero(metadata, ...);`,
		notes: ["Most revealing bridge from ontology IR to discovery-aware SDK generation."],
	},
	"osdk-functions-testing-experimental": {
		inspectedVersion: "0.2.0-beta.3",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/functions-testing.experimental/v/0.2.0-beta.3",
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/functions-testing.experimental",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/functions-testing.experimental/src/mock/createMockClient.ts",
		sourcePath: "packages/functions-testing.experimental/src/mock/createMockClient.ts",
		publishedCodeUrl: "https://unpkg.com/@osdk/functions-testing.experimental@0.2.0-beta.3/build/esm/mock/createMockClient.js",
		publishedCodePath: "build/esm/mock/createMockClient.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/functions-testing.experimental/src/mock/createMockClient.ts",
		codePath: "packages/functions-testing.experimental/src/mock/createMockClient.ts",
		codeLanguage: "ts",
		codeSnippet: `export function createMockClient() {
  const stubs = [];
  const queryStubs = [];

  mockClient.whenQuery = (query, params) => ({
    thenReturn: result => {
      queryStubs.push({ queryApiName: query.apiName, params, value: result });
    }
  });
}`,
	},
	"osdk-language-models": {
		inspectedVersion: "0.1.0",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/language-models/v/0.1.0",
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/language-models",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/language-models/src/utils.ts",
		sourcePath: "packages/language-models/src/utils.ts",
		publishedCodeUrl: "https://unpkg.com/@osdk/language-models@0.1.0/build/esm/utils.js",
		publishedCodePath: "build/esm/utils.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/language-models/src/utils.ts",
		codePath: "packages/language-models/src/utils.ts",
		codeLanguage: "ts",
		codeSnippet: `export function createFetch(client: PlatformClient): typeof globalThis.fetch {
	  return client.fetch;
}

	export async function getFoundryToken(client: PlatformClient): Promise<string> {
	  return client.tokenProvider();
	}

	export function getOpenAiBaseUrl(client: PlatformClient): string {
	  return \`${'${client.baseUrl}'}/api/v2/llm/proxy/openai/v1\`;
}`,
	},
	"osdk-create-app": {
		inspectedVersion: "2.8.0-beta.15",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/create-app/v/2.8.0-beta.15",
		latestReleaseVersion: "2.7.5",
		latestReleasePublishedAt: "2026-03-09T18:43:24.757Z",
		latestReleaseUrl: "https://www.npmjs.com/package/@osdk/create-app/v/2.7.5",
		latestReleaseSummary: "Fresh stable release; the clearest user-facing change is the bundled starter templates moving to Vite ^7.3.1.",
		latestReleaseFeatured: true,
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/create-app",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/create-app/src/prompts/promptSdkVersion.ts",
		sourcePath: "packages/create-app/src/prompts/promptSdkVersion.ts",
		publishedCodeUrl: "https://unpkg.com/@osdk/create-app@2.8.0-beta.15/build/esm/prompts/promptSdkVersion.js",
		publishedCodePath: "build/esm/prompts/promptSdkVersion.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/create-app/src/prompts/promptSdkVersion.ts",
		codePath: "packages/create-app/src/prompts/promptSdkVersion.ts",
		codeLanguage: "ts",
		codeSnippet: `async function promptSdkVersion({ sdkVersion, template }) {
	  if (sdkVersion == null) {
	    return Object.keys(template.files).at(-1) as SdkVersion;
	  }

	  if (template.files[sdkVersion as SdkVersion] == null) {
	    sdkVersion = await consola.prompt("Please choose which version of the OSDK you'd like to use", ...);
	  }
	}`,
	},
	"osdk-vite-plugin-oac": {
		inspectedVersion: "0.5.6",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/vite-plugin-oac/v/0.5.6",
		latestReleaseVersion: "0.5.6",
		latestReleasePublishedAt: "2026-03-09T18:43:42.293Z",
		latestReleaseUrl: "https://www.npmjs.com/package/@osdk/vite-plugin-oac/v/0.5.6",
		latestReleaseSummary: "Fresh OAC-side release, but this patch looks like a dependency rollup across @osdk/api, client.unstable, and ontology IR converters.",
		latestReleaseFeatured: true,
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/vite-plugin-oac",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/vite-plugin-oac/src/generateOntologyAssets.ts",
		sourcePath: "packages/vite-plugin-oac/src/generateOntologyAssets.ts",
		publishedCodeUrl: "https://unpkg.com/@osdk/vite-plugin-oac@0.5.6/build/esm/generateOntologyAssets.js",
		publishedCodePath: "build/esm/generateOntologyAssets.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/vite-plugin-oac/src/generateOntologyAssets.ts",
		codePath: "packages/vite-plugin-oac/src/generateOntologyAssets.ts",
		codeLanguage: "ts",
		codeSnippet: `await ontologyJsToIr(opts);
await ontologyIrToFullMetadata(opts);
await fullMetadataToOsdk(opts);

const { stdout } = await execa("pnpm", [
  "exec", "osdk", "unstable", "typescript", "generate", ...
]);`,
		notes: ["Public facade over the OAC pipeline; useful because compatibility bumps here usually mirror deeper compiler churn."],
	},
	"osdk-cli": {
		inspectedVersion: "0.32.0-beta.3",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/cli/v/0.32.0-beta.3",
		repoUrl: "https://github.com/palantir/osdk-ts/tree/main/packages/cli",
		sourceUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/cli/src/commands/site/deploy/siteDeployCommand.mts",
		sourcePath: "packages/cli/src/commands/site/deploy/siteDeployCommand.mts",
		publishedCodeUrl: "https://unpkg.com/@osdk/cli@0.32.0-beta.3/build/esm/siteDeployCommand-PLEDSCX7.js",
		publishedCodePath: "build/esm/siteDeployCommand-PLEDSCX7.js",
		codeUrl: "https://github.com/palantir/osdk-ts/blob/main/packages/cli/src/commands/site/deploy/siteDeployCommand.mts",
		codePath: "packages/cli/src/commands/site/deploy/siteDeployCommand.mts",
		codeLanguage: "ts",
		codeSnippet: `if (snapshot) {
	  await uploadSnapshot(clientCtx, application, siteVersion, snapshotId ?? "", archive);
	  return;
	}

	await upload(clientCtx, application, siteVersion, archive);
	const website = await thirdPartyApplications.deployWebsite(clientCtx, application, {
	  version: siteVersion,
	});`,
	},
	"palantir-mcp": {
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/palantir-mcp",
		repoUrl: "https://github.com/palantir/palantir-mcp/tree/develop",
		sourceUrl: "https://github.com/palantir/palantir-mcp/blob/develop/src/spawn.ts",
		sourcePath: "src/spawn.ts",
		publishedCodeUrl: "https://unpkg.com/palantir-mcp/dist/index.js",
		publishedCodePath: "dist/index.js",
		codeUrl: "https://github.com/palantir/palantir-mcp/blob/develop/src/spawn.ts",
		codePath: "src/spawn.ts",
		codeLanguage: "ts",
		codeSnippet: `const child = spawn('npx', ['-y', '@palantir/mcp@latest', ...args], {
	  stdio: 'inherit',
	  env: {
	    ...process.env,
	    NPM_CONFIG_REGISTRY: npmRegistry.toString(),
	    [authTokenEnvVar]: foundryToken,
	  },
	})`,
		notes: ["Public wrapper installs a private MCP core from secure Foundry environments."],
	},
	"osdk-foundry-thirdpartyapplications": {
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/foundry.thirdpartyapplications",
		repoUrl: "https://github.com/palantir/foundry-platform-typescript",
	},
	"osdk-foundry-aipagents": {
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/foundry.aipagents",
		repoUrl: "https://github.com/palantir/foundry-platform-typescript",
	},
	"foundry-platform-sdk": {
		inspectedVersion: "1.74.0",
		registryLabel: "PyPI",
		registryUrl: "https://pypi.org/project/foundry-platform-sdk/1.74.0/",
		repoUrl: "https://github.com/palantir/foundry-platform-python",
	},
	"foundry-compute-modules": {
		registryLabel: "PyPI",
		registryUrl: "https://pypi.org/project/foundry-compute-modules/",
		repoUrl: "https://github.com/palantir/python-compute-module",
	},
	"external-systems": {
		registryLabel: "PyPI",
		registryUrl: "https://pypi.org/project/external-systems/",
		repoUrl: "https://github.com/palantir/external-systems",
	},
};

export function compareFirstSeenDesc(a: string, b: string) {
	return b.localeCompare(a);
}

export function comparePackagePriority(
	a: { data: { importance: string; firstSeen: string; packageName: string }; id: string },
	b: { data: { importance: string; firstSeen: string; packageName: string }; id: string },
	importanceOrder: Record<string, number>,
) {
	const aFeatured = packageMeta[a.id]?.latestReleaseFeatured ? 0 : 1;
	const bFeatured = packageMeta[b.id]?.latestReleaseFeatured ? 0 : 1;

	return importanceOrder[a.data.importance] - importanceOrder[b.data.importance]
		|| aFeatured - bFeatured
		|| compareFirstSeenDesc(a.data.firstSeen, b.data.firstSeen)
		|| a.data.packageName.localeCompare(b.data.packageName);
}
