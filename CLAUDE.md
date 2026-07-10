# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static single-page marketing/portfolio site built with Astro. Content is in Polish. It sells a "MVP in 5 weeks, fixed price" offer and showcases past projects. No backend, no database - `astro build` outputs static files to `dist/` for hosting on Netlify/Vercel/Cloudflare Pages.

Note: the repo is migrating away from a former Next.js + TinaCMS stack (visible as deletions in git). Ignore any leftover `pnpm-lock.yaml`; the active package manager is **npm** (`package-lock.json`). Requires Node >= 22.12.

## Commands

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # serve the built ./dist locally
```

There are no tests, linters, or formatters configured.

## Architecture

Single page composed from section components - one file = one section:

- `src/pages/index.astro` - the only route; imports and orders every section component (Nav, Hero, How, Projects, Why, Contact).
- `src/layouts/Base.astro` - HTML shell: `<head>`, meta/SEO defaults (overridable via `title`/`description` props), Google Fonts (Fraunces / Inter / IBM Plex Mono), and `<slot />`.
- `src/components/*.astro` - one section each. Each owns its markup + a scoped `<style>` block. Section-specific content data lives in a plain array declared in the component's frontmatter (top of file) - e.g. the `projects` array in `Projects.astro`. Edit content by editing that array, not the markup.
- `src/styles/global.css` - the design system, imported once by `Base.astro`. Holds all design tokens in `:root` (colors `--ink`/`--paper`/`--accent`, font stacks `--display`/`--body`/`--mono`, a fluid `clamp()` type scale `--step--1`…`--step-4`, `--maxw`, `--gutter`) plus shared classes used across sections: `.wrap` (centered max-width container), `section` padding, `.eyebrow` (mono section label), `.btn`/`.btn-primary`, `.rule` (hairline divider).

### Conventions
- Global tokens and shared/reusable classes go in `global.css`; anything used by only one section stays in that component's scoped `<style>`. Reference tokens via `var(--…)` rather than hardcoding colors/sizes.
- The type scale is fluid (`clamp`), so prefer `--step-*` variables over fixed font sizes.
- Copy is Polish. Unfilled placeholders are marked with square brackets `[ ]` (e.g. `[Twoje imię]`, `[twój@email.pl]`, `[link do Calendly]`, `[link do LinkedIn]`, price ranges `[X–Y] zł`) - search for these to find what still needs real values. See README.md for the full checklist and which files each appears in.
```
