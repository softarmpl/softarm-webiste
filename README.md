# softarm.pl: strona osobista Kamila Wałdocha (Astro)

Strona "kim jestem": Tech Lead i architekt, projekty, doświadczenie, teksty, mała sekcja o współpracy przez SoftArm. PL pod `/`, EN pod `/en/`.

## Uruchomienie
```bash
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # produkcyjny build do ./dist
```

## Gdzie co zmienić
- `src/i18n/pl.ts`, `src/i18n/en.ts` - **cała treść strony** (oba pliki mają ten sam kształt)
- `src/i18n/index.ts`                 - e-mail, LinkedIn, ścieżki
- `src/content/writing/{pl,en}/*.md`  - teksty; `translation` = slug wersji w drugim języku
- `src/components/*.astro`            - sekcje (jeden plik = jedna sekcja), `Home.astro` ustawia kolejność
- `src/styles/global.css`             - kolory, fonty, skala (sekcja :root)

## Nowy tekst
Dodaj `src/content/writing/pl/<slug>.md` i `src/content/writing/en/<slug>.md` z frontmatterem `title`, `lead`, `date`, `lang`, `slug`, `translation`. Lista na stronie głównej i podstrony generują się same.

## Wdrożenie
Push do `main` uruchamia `.github/workflows/deploy.yml` (GitHub Pages, domena z `public/CNAME`).
