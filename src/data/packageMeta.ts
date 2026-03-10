export type PackageCodeLanguage = 'js' | 'ts' | 'tsx' | 'json' | 'python' | 'bash' | 'text';

export type PackageMeta = {
	inspectedVersion?: string;
	registryLabel?: string;
	registryUrl?: string;
	latestReleaseVersion?: string;
	latestReleasePublishedAt?: string;
	latestReleaseUrl?: string;
	latestReleaseSummary?: string;
	repoUrl?: string;
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
		repoUrl: "https://github.com/palantir/osdk-ts",
		codeUrl: "https://unpkg.com/@osdk/maker@0.16.0-beta.9/build/esm/api/defineFunction.js",
		codePath: "build/esm/api/defineFunction.js",
		codeLanguage: "js",
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
		repoUrl: "https://github.com/palantir/osdk-ts",
		codeUrl: "https://unpkg.com/@osdk/maker-experimental@0.6.0-beta.4/build/esm/cli/main.js",
		codePath: "build/esm/cli/main.js",
		codeLanguage: "js",
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
		repoUrl: "https://github.com/palantir/osdk-ts",
		notes: ["Normalization layer where query execution semantics keep landing first."],
	},
	"osdk-generator-converters-preview": {
		inspectedVersion: "0.1.0-beta.2",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/generator-converters.preview/v/0.1.0-beta.2",
		repoUrl: "https://github.com/palantir/osdk-ts",
		codeUrl: "https://unpkg.com/@osdk/generator-converters.preview@0.1.0-beta.2/build/esm/cli/generate-sdk.js",
		codePath: "build/esm/cli/generate-sdk.js",
		codeLanguage: "js",
		codeSnippet: `const previewMetadata = PreviewOntologyIrConverter.getPreviewFullMetadataFromIr(irJson);

if (argv.functionsDir || argv.pythonFunctionsDir) {
  const queryTypes = await OntologyIrToFullMetadataConverter.getOsdkQueryTypes(...);
  previewMetadata.queryTypes = queryTypes;
}

await generateClientSdkVersionTwoPointZero(metadata, ...);
await fs.writeFile(metadataPath, JSON.stringify(previewMetadata, null, 2), "utf-8");`,
		notes: ["Most revealing bridge from ontology IR to discovery-aware SDK generation."],
	},
	"osdk-functions-testing-experimental": {
		inspectedVersion: "0.2.0-beta.3",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/functions-testing.experimental/v/0.2.0-beta.3",
		repoUrl: "https://github.com/palantir/osdk-ts",
		codeUrl: "https://unpkg.com/@osdk/functions-testing.experimental@0.2.0-beta.3/build/esm/mock/createMockClient.js",
		codePath: "build/esm/mock/createMockClient.js",
		codeLanguage: "js",
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
		repoUrl: "https://github.com/palantir/osdk-ts",
		codeUrl: "https://unpkg.com/@osdk/language-models@0.1.0/build/esm/utils.js",
		codePath: "build/esm/utils.js",
		codeLanguage: "js",
		codeSnippet: `export function getAnthropicBaseUrl(client) {
  return \`${'${client.baseUrl}'}/api/v2/llm/proxy/anthropic\`;
}

export function getOpenAiBaseUrl(client) {
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
		repoUrl: "https://github.com/palantir/osdk-ts",
		codeUrl: "https://unpkg.com/@osdk/create-app@2.8.0-beta.15/build/esm/index.js",
		codePath: "build/esm/index.js",
		codeLanguage: "js",
		codeSnippet: `async function promptSdkVersion({ sdkVersion, template }) {
	  if (sdkVersion == null) {
	    return Object.keys(template.files).at(-1);
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
		repoUrl: "https://github.com/palantir/osdk-ts",
		notes: ["Public facade over the OAC pipeline; useful because compatibility bumps here usually mirror deeper compiler churn."],
	},
	"osdk-cli": {
		inspectedVersion: "0.32.0-beta.3",
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/@osdk/cli/v/0.32.0-beta.3",
		repoUrl: "https://github.com/palantir/osdk-ts",
		codeUrl: "https://unpkg.com/@osdk/cli@0.32.0-beta.3/build/esm/siteDeployCommand-PLEDSCX7.js",
		codePath: "build/esm/siteDeployCommand-PLEDSCX7.js",
		codeLanguage: "js",
		codeSnippet: `if (snapshot) {
  await uploadSnapshot(clientCtx, application, siteVersion, snapshotId ?? "", archive);
  return;
}

await upload(clientCtx, application, siteVersion, archive);
const website = await third_party_applications_exports.deployWebsite(clientCtx, application, {
  version: siteVersion
});`,
	},
	"palantir-mcp": {
		registryLabel: "npm",
		registryUrl: "https://www.npmjs.com/package/palantir-mcp",
		repoUrl: "https://github.com/palantir/palantir-mcp",
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
