import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const topics = defineCollection({
	loader: glob({ base: "./src/content/topics", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		status: z.enum(["public", "mixed", "private", "experimental", "preview"]),
		importance: z.enum(["high", "medium", "low"]),
		relatedPackages: z.array(z.string()).default([]),
		relatedSeams: z.array(z.string()).default([]),
	}),
});

const packages = defineCollection({
	loader: glob({ base: "./src/content/packages", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		packageName: z.string(),
		kind: z.string(),
		status: z.enum(["public", "mixed", "private", "experimental", "preview"]),
		importance: z.enum(["high", "medium", "low"]),
		firstSeen: z.string().regex(/^\d{4}-\d{2}$/),
		repo: z.string().optional(),
		keyTakeaways: z.array(z.string()).default([]),
		topicIds: z.array(z.string()).default([]),
		seamIds: z.array(z.string()).default([]),
	}),
});

const seams = defineCollection({
	loader: glob({ base: "./src/content/seams", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		seamType: z.string(),
		status: z.enum(["public", "mixed", "private", "experimental", "preview"]),
		confidence: z.enum(["high", "medium", "low"]),
		publicSurface: z.array(z.string()).default([]),
		evidenceRefs: z.array(z.string()).default([]),
	}),
});

export const collections = { topics, packages, seams };
