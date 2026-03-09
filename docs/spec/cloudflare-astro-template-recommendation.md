# Cloudflare Astro Template Recommendation

## Recommendation

Use the official Cloudflare C3 Astro Pages starter, then build the atlas on top of that.

Recommended scaffold command:

```bash
npm create cloudflare@latest palantir-research-atlas -- --framework=astro --platform=pages
```

When prompted inside Astro, choose the least opinionated project type available (`Minimal` if offered).

## Why this is the right starting point

- official Cloudflare path, not a random community starter
- gives you Astro configured for Cloudflare Pages from day one
- cheap hosting, preview deployments, and simple CI wiring
- does not trap the implementation inside a blog theme or marketing template
- easier for an agent to extend cleanly than a more opinionated template

## Why I am not recommending a heavier template

- this project is an annotated research atlas, not a blog and not standard product docs
- a more opinionated template would create cleanup work and push the site toward the wrong IA
- the value is in content collections, custom hubs, and light interactive views, not in fancy starter chrome

## Add immediately after scaffold

The agent should add these pieces right away:

- `@astrojs/mdx`
- `@astrojs/sitemap`
- `pagefind`
- one client-island framework for interactive views, preferably `react`
- optional `@astrojs/tailwind` if the starter does not already include a styling approach the agent likes

## Platform choice note

Cloudflare docs now nudge new Astro projects toward Workers, but Pages is still a good fit here because:

- the site is mostly static content
- preview deployments matter
- hosting stays very cheap
- you do not need server-heavy behavior for the initial version

If the agent later needs dynamic edge behavior, the site can migrate without rethinking the content model.

## Minimum expected project stack

- Astro
- Cloudflare Pages
- MDX + content collections
- static search with Pagefind
- small React islands for graph/timeline/filter interactions
- generated `llms.txt`

## Template decision in one sentence

Start from the official Cloudflare Astro Pages scaffold and keep the base thin; spend the complexity budget on content structure and interaction, not on template surgery.
