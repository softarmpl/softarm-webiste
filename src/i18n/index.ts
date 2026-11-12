import { pl } from "./pl";
import { en } from "./en";

export type Lang = "pl" | "en";
export const dicts = { pl, en };

export const SITE = {
  email: "kamil@softarm.pl",
  linkedin: "https://linkedin.com/in/kamil-waldoch",
};

/** Home page path for a language. */
export const homePath = (lang: Lang) => (lang === "pl" ? "/" : "/en/");

/** Path of a single post for a language. */
export const postPath = (lang: Lang, slug: string) =>
  lang === "pl" ? `/teksty/${slug}/` : `/en/writing/${slug}/`;

export const otherLang = (lang: Lang): Lang => (lang === "pl" ? "en" : "pl");
