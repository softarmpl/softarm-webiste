// Obrazki podglądu linku (Open Graph, 1200x630) generowane przy buildzie:
// /og/pl/home.png, /og/en/home.png oraz /og/<lang>/<slug>.png dla każdego tekstu.
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import satori from "satori";
import sharp from "sharp";
import { dicts, type Lang } from "../../i18n";

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFile(require.resolve(`@fontsource/${pkg}/files/${file}`));

// Satori nie czyta woff2; podzbiory latin + latin-ext pokrywają polskie znaki.
const fonts = Promise.all([
  font("nata-sans", "nata-sans-latin-800-normal.woff"),
  font("nata-sans", "nata-sans-latin-ext-800-normal.woff"),
  font("albert-sans", "albert-sans-latin-400-normal.woff"),
  font("albert-sans", "albert-sans-latin-ext-400-normal.woff"),
]).then(([d1, d2, t1, t2]) => [
  { name: "Display", data: d1, weight: 800 as const, style: "normal" as const },
  { name: "DisplayExt", data: d2, weight: 800 as const, style: "normal" as const },
  { name: "Text", data: t1, weight: 400 as const, style: "normal" as const },
  { name: "TextExt", data: t2, weight: 400 as const, style: "normal" as const },
]);

// Kolory z global.css (motyw ciemny).
const C = { ground: "#0a0a0a", ink: "#f4f3ef", muted: "#a3a29d", signal: "#d9f55b" };

interface Card { eyebrow: string; title: string }

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("writing");
  const home = (["pl", "en"] as Lang[]).map((lang) => ({
    params: { slug: `${lang}/home` },
    props: { eyebrow: dicts[lang].meta.jobTitle, title: dicts[lang].hero.name } satisfies Card,
  }));
  const articles = posts.map((p) => ({
    params: { slug: `${p.data.lang}/${p.data.slug}` },
    props: { eyebrow: dicts[p.data.lang].writing.title, title: p.data.title } satisfies Card,
  }));
  return [...home, ...articles];
};

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { eyebrow, title } = props as Card;
  const size = title.length > 60 ? 64 : 76;
  // Satori dolicza padding do wysokości, więc treść ma stały rozmiar (1040x486) i jest wyśrodkowana w karcie 1200x630.
  const content = h(
    "div",
    { width: 1040, height: 486, display: "flex", flexDirection: "column", justifyContent: "space-between" },
    [
      h("div", { display: "flex", alignItems: "center", gap: 20 }, [
        h("div", { width: 20, height: 20, background: C.signal }),
        h("div", { color: C.signal, fontSize: 28, letterSpacing: 2, textTransform: "uppercase" }, eyebrow),
      ]),
      h("div", { width: 1040, color: C.ink, fontFamily: "Display, DisplayExt", fontWeight: 800, fontSize: size, lineHeight: 1.08, letterSpacing: -1, display: "flex", flexWrap: "wrap" }, title),
      h("div", { display: "flex", width: 1040, justifyContent: "space-between", color: C.muted, fontSize: 30 }, [
        h("div", { color: C.ink }, "Kamil Wałdoch"),
        h("div", {}, "softarm.pl"),
      ]),
    ],
  );
  const tree = h(
    "div",
    { width: 1200, height: 630, display: "flex", alignItems: "center", justifyContent: "center", background: C.ground, fontFamily: "Text, TextExt" },
    [content],
  );
  const svg = await satori(tree as Parameters<typeof satori>[0], { width: 1200, height: 630, fonts: await fonts });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
