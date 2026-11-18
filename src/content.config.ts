import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Teksty: src/content/writing/{pl,en}/<slug>.md
// `translation` to slug wersji w drugim języku (do przełącznika i hreflang).
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    /** Opis do wyszukiwarek i podglądu linku (ok. 150-160 znaków). Bez niego używany jest `lead`. */
    description: z.string().optional(),
    date: z.coerce.date(),
    lang: z.enum(["pl", "en"]),
    slug: z.string(),
    translation: z.string().optional(),
  }),
});

export const collections = { writing };
