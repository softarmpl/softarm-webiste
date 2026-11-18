# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static personal site of Kamil Wałdoch (softarm.pl), built with Astro. It presents him as a Tech Lead & Solutions Architect: hero, about, selected work, experience, writing, a small "working with me through SoftArm" section, a testimonial and contact. Bilingual: Polish at `/`, English at `/en/`. No backend; the contact form posts to Web3Forms. `astro build` outputs static files to `dist/`, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

Source of truth for copy and facts lives in Kamil's Obsidian vault (`Kamil/MarkaOsobista/Strona softarm.pl - nowa wersja.md`, facts in `Kamil/Kariera/AGENTS.md`). Do not add claims that are not there. The job search is discreet: never add "open to work"-style wording.

## Commands

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to ./dist
npm run preview  # serve the built ./dist locally
```

There are no tests, linters, or formatters configured.

## Architecture

- `src/i18n/pl.ts` / `src/i18n/en.ts` - all page copy, one dictionary per language with an identical shape (`Dict` type is derived from `pl`). Edit content here, not in markup.
- `src/i18n/index.ts` - `dicts`, `SITE` (email, LinkedIn), path helpers `homePath`, `postPath`, `otherLang`.
- `src/components/Home.astro` - the home page for a given `lang`; orders sections (Nav, Hero, About, Projects, Experience, Writing, Services, Testimonial, Contact, Footer). `src/pages/index.astro` and `src/pages/en/index.astro` just render it.
- Each section component takes a `lang` prop and reads its texts from the dictionary; it owns its markup and a scoped `<style>`.
- Writing: content collection defined in `src/content.config.ts` (glob loader over `src/content/writing/{pl,en}/*.md`). Frontmatter: `title`, `lead`, `date`, `lang`, `slug`, `translation` (slug of the other-language version). Routes: `src/pages/teksty/[slug].astro` (PL) and `src/pages/en/writing/[slug].astro` (EN), both via `src/layouts/Post.astro`.
- `src/layouts/Base.astro` - HTML shell: `lang`, title/description, canonical, hreflang alternates, Open Graph, JSON-LD `Person`, fonts, analytics.
- `src/styles/global.css` - design tokens in `:root` and shared classes (`.wrap`, `.eyebrow`, `.btn`, `.rule`).

### Conventions
- Global tokens and shared classes go in `global.css`; section-only styles stay scoped in the component. Use `var(--…)` and the fluid `--step-*` scale.
- Any copy change must be made in both `pl.ts` and `en.ts`.
- Copy style: plain language, no em-dashes, no corporate filler, clients anonymised.
