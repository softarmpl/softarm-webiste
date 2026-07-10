# Strona wizytówka - MVP w 5 tygodni (Astro)

Jasna, minimalistyczna strona-wizytówka. Jeden plik = jedna sekcja.

## Uruchomienie
```bash
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # produkcyjny build do ./dist
```

## Gdzie co zmienić
- `src/components/Hero.astro`     - nagłówek + liczby-wskaźniki
- `src/components/How.astro`      - "dla kogo" + proces 4 kroki
- `src/components/Projects.astro` - case studies (tablica `projects` na górze pliku)
- `src/components/Why.astro`      - "dlaczego ja" + biogram
- `src/components/Contact.astro`  - FAQ + kontakt + stopka
- `src/styles/global.css`         - kolory, fonty, skala (sekcja :root)

## DO UZUPEŁNIENIA (szukaj nawiasów [ ])
- [Twoje imię]        - Nav, Why, Contact, stopka
- [twój@email.pl]     - Contact (2×), stopka
- [link do Calendly]  - Contact (przycisk CTA)
- [link do LinkedIn]  - stopka
- [X–Y] zł            - Contact, FAQ (widełki cenowe)

## Wdrożenie
`npm run build` tworzy statyczne pliki w `dist/`.
Wrzuć na Netlify / Vercel / Cloudflare Pages (darmowe) albo dowolny hosting.
