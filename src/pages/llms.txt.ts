import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
	const base = site?.toString().replace(/\/$/, '');
	const link = (path: string) => (base ? `${base}${path}` : path);
	const topics = await getCollection('topics');
	const packages = await getCollection('packages');
	const seams = await getCollection('seams');

	const lines = [
		'Post-DevCon 5 Findings',
		'A research atlas for Palantir public OSDK, ontology-as-code, and public-private package seams.',
		'',
		`Base: ${base ?? 'relative URLs'}`,
		'',
		'Topics:',
		...topics.map((entry) => `- ${entry.data.title}: ${link(`/topics/${entry.id}`)}`),
		'',
		'Packages:',
		...packages.map((entry) => `- ${entry.data.packageName}: ${link(`/packages/${entry.id}`)}`),
		'',
		'Seams:',
		...seams.map((entry) => `- ${entry.data.title}: ${link(`/seams/${entry.id}`)}`),
		'',
		`Timeline: ${link('/timeline')}`,
	];

	return new Response(lines.join('\n'), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
