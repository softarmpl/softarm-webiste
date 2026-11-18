import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { dicts, homePath, postPath, type Lang } from "../i18n";

/** Kanał RSS z tekstami w jednym języku, od najnowszego. */
export async function writingFeed(lang: Lang, site: URL) {
  const t = dicts[lang].writing;
  const posts = (await getCollection("writing", (p) => p.data.lang === lang)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: t.metaTitle,
    description: t.metaDescription,
    site: new URL(homePath(lang), site).href,
    customData: `<language>${lang}</language>`,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description ?? p.data.lead,
      pubDate: p.data.date,
      link: postPath(lang, p.data.slug),
    })),
  });
}
