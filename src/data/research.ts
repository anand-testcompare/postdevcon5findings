export const timelineEvents = [
	{
		date: "2023-11",
		label: "@osdk/cli",
		summary: "Public deploy and site-management CLI shows up first.",
	},
	{
		date: "2024-02",
		label: "@osdk/create-app",
		summary: "App scaffolding becomes a formal public workflow.",
	},
	{
		date: "2024-03",
		label: "@osdk/maker",
		summary: "Public ontology-as-code authoring DSL appears.",
	},
	{
		date: "2025-08",
		label: "@osdk/maker-experimental",
		summary: "Compiler/backend rewrite path becomes visible.",
	},
	{
		date: "2026-02",
		label: "@osdk/generator-converters.preview",
		summary: "Cross-language discovery and generate-sdk bridge lands publicly.",
	},
	{
		date: "2026-02",
		label: "functions-testing.experimental",
		summary: "Local-first mocking and function testing surface appears.",
	},
	{
		date: "2026-03",
		label: "@osdk/language-models",
		summary: "Thin Foundry LLM proxy helper enters the package graph.",
	},
];

export const homepageHighlights = [
	"Maker is a real public ontology-as-code DSL, not just a branding shell.",
	"The biggest visible seam is TypeScript function discovery, which still depends on a private runtime package.",
	"Maker Experimental looks like a surfaced compiler/backend boundary, not just a small feature flag package.",
	"generator-converters.preview is the clearest public bridge from ontology IR to discovery-aware SDK generation.",
	"App bootstrap and deployment are public, but they sit downstream of the more interesting compiler shift.",
];

export const workflowSteps = [
	{
		title: "Author",
		detail: "Define ontology in TypeScript with @osdk/maker.",
	},
	{
		title: "Compile",
		detail: "Push ontology state through Maker Experimental or converter layers.",
	},
	{
		title: "Discover",
		detail: "Discover TS or Python functions where the public seams allow it.",
	},
	{
		title: "Generate",
		detail: "Emit metadata and SDK output through generator packages.",
	},
	{
		title: "Ship",
		detail: "Bootstrap apps with create-app and deploy through the OSDK CLI.",
	},
];

export const importanceOrder = {
	high: 0,
	medium: 1,
	low: 2,
} as const;
