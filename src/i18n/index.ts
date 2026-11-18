import { pl } from "./pl";
import { en } from "./en";

export type Lang = "pl" | "en";
export const dicts = { pl, en };

export const SITE = {
  /** Alias kontakt@ (przekierowanie w OVH na skrzynkę Kamila). Trzymany w częściach:
   *  pełny adres składa skrypt w Contact.astro, więc nie ma go w HTML dla prostych botów. */
  emailParts: ["kontakt", "softarm.pl"] as const,
  linkedin: "https://linkedin.com/in/kamil-waldoch",
};

/** Home page path for a language. */
export const homePath = (lang: Lang) => (lang === "pl" ? "/" : "/en/");

/** Path of a single post for a language. */
export const postPath = (lang: Lang, slug: string) =>
  lang === "pl" ? `/teksty/${slug}/` : `/en/writing/${slug}/`;

/** Path of the writing index page for a language. */
export const writingPath = (lang: Lang) => (lang === "pl" ? "/teksty/" : "/en/writing/");

export const otherLang = (lang: Lang): Lang => (lang === "pl" ? "en" : "pl");
