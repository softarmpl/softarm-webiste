// Cała treść polskiej wersji strony. Komponenty biorą teksty stąd (patrz src/i18n/index.ts).
// Źródło copy: vault, MarkaOsobista/Strona softarm.pl - nowa wersja.md
// WARIANT B "Dla odwiedzającego": nagłówki mówią, co dostaje czytelnik; dowody wyżej; mniej sekcji.
export const pl = {
  lang: "pl",
  meta: {
    title: "Kamil Wałdoch: Tech Lead i architekt oprogramowania",
    description:
      "Prowadzę projekty od pierwszej rozmowy z klientem do wdrożenia: architektura, zespoły, rozmowy z biznesem. 16 lat w fintechu, cybersecurity i lotnictwie.",
    jobTitle: "Tech Lead i architekt oprogramowania",
  },
  nav: {
    about: "Jak pracuję",
    work: "Projekty",
    writing: "Teksty",
    services: "Współpraca",
    contact: "Kontakt",
    menuLabel: "Otwórz menu",
    switchLabel: "EN",
    switchTitle: "English version",
  },
  hero: {
    eyebrow: "Kamil Wałdoch · Tech Lead i architekt oprogramowania",
    name: "Od pierwszej rozmowy z klientem do działającego produktu",
    lead: "Projektuję architekturę, prowadzę zespół i pilnuję, żeby powstało to, za co Twoi klienci zapłacą. Od 16 lat, w fintechu, cybersecurity i lotnictwie.",
    thesis: ["Pisanie kodu staniało.", "Decyzje nie."],
    ctaPrimary: "Napisz do mnie",
    ctaSecondary: "Zobacz projekty",
    stats: [
      { n: "16 lat", l: "w branży" },
      { n: "8 produktów", l: "wdrożonych w Profil Software" },
      { n: "2 zespoły", l: "prowadzone równolegle" },
    ],
  },
  about: {
    eyebrow: "Jak pracuję",
    title: "Pisanie kodu staniało. Decyzje nie.",
    photoAlt: "Kamil Wałdoch",
    paragraphs: [
      "Dlatego zaczynam przed pierwszą linijką kodu: od rozmów z klientem, warsztatu albo wyceny. Potem projektuję architekturę i prowadzę zespoły, zwykle dwa naraz, po 5–9 osób.",
      "Pracowałem z founderami i zarządami firm z Polski, USA, Norwegii i Arabii Saudyjskiej. Klienci wracali z kolejnymi projektami, a część przeszła za mną z poprzedniej firmy.",
    ],
    howTitle: "Czego możesz się spodziewać",
    how: [
      { title: "Zaczynamy od biznesu.", body: "Zanim powstanie kod, ustalamy, za co płacą Twoi klienci i co musi zadziałać jako pierwsze." },
      { title: "Zakres tniemy wcześnie.", body: "Nie płacisz za dopieszczanie funkcji, których nikt nie kupi." },
      { title: "Zespół odpowiada za swoje moduły.", body: "Ja pilnuję ram, standardów i tego, żeby całość przeszła security review i audyt." },
      { title: "AI ma w zespole jasne zasady.", body: "Wspólny kontekst dla agentów, reguły review kodu pisanego z AI, AI w testach i CI." },
    ],
  },
  work: {
    eyebrow: "Wybrane projekty",
    title: "Tam, gdzie błędy są drogie",
    labels: { problem: "Kontekst", did: "Moja rola", result: "Efekt" },
    projects: [
      {
        tag: "Logistyka · audyt",
        title: "Zarząd dowiedział się, dlaczego projekty się opóźniają",
        metric: "",
        metricLabel: "Audyt działu IT w miesiąc · 18 osób w IT, firma na ok. 300",
        problem: "Wszyscy korzystali z AI, a większe projekty i tak się opóźniały. Zarząd chciał wiedzieć dlaczego.",
        did: "Rozmowy z programistami, DevOps, supportem IT i kierownictwem. Mapa tego, jak w praktyce przebiegają zadania, wydania i decyzje.",
        result: "Rekomendacje dla zarządu: kto odpowiada za produkt, jak planować i jak wydawać. Potem rozmowy techniczne z kandydatami na Head of IT i omówienie wyników audytu z zatrudnioną osobą.",
        stack: [] as string[],
      },
      {
        tag: "Fintech · Arabia Saudyjska",
        title: "Produkt oparty na LLM przeszedł SOC 2 Type II",
        metric: "",
        metricLabel: "Platforma do zarządzania majątkiem · audyt w ok. pół roku",
        problem: "Nowy produkt oparty na LLM, budowany od zera. Żeby sprzedawać go kolejnym klientom, musiał przejść audyt bezpieczeństwa.",
        did: "Architektura i wdrożenie funkcji LLM: przetwarzanie dużych dokumentów, czat z dokumentami, analiza transakcji, kontrola kosztów tokenów. Potem SOC 2 Type II od strony technicznej, bezpośrednio z audytorem.",
        result: "Na produkcji od grudnia 2025. Zgodność z SOC 2 Type II, której klient potrzebował w sprzedaży.",
        stack: ["LangGraph", "Arize Phoenix", "OCR", "embeddingi", "wyszukiwanie wektorowe", "AWS"],
      },
      {
        tag: "Cybersecurity",
        title: "Zero włamań, chmura tańsza o około połowę",
        metric: "",
        metricLabel: "Platforma analizy ruchu sieciowego · ok. 4000 użytkowników",
        problem: "System, który sam był celem ataków. Przetwarzał setki gigabajtów danych o ruchu sieciowym.",
        did: "Architektura na AWS, monitoring, migracja logowania na OIDC, zmniejszenie infrastruktury.",
        result: "Żadnego udanego włamania przez cały czas działania systemu.",
        stack: ["AWS", "Keycloak (OIDC)", "Loki", "Grafana"],
      },
      {
        tag: "Lotnictwo",
        title: "Dwa wdrożone produkty dla lotnictwa",
        metric: "",
        metricLabel: "Serwis odrzutowców i bezpieczeństwo lotów",
        problem: "Planowanie serwisu prywatnych odrzutowców oraz system wspierający zgodność z przepisami i bezpieczeństwo lotów komercyjnych.",
        did: "Rozmowy i warsztaty z klientem przed startem, prowadzenie projektu od strony technicznej, code review, DevOps.",
        result: "",
        stack: [] as string[],
      },
    ],
  },
  experience: {
    eyebrow: "Doświadczenie",
    title: "Skąd to wiem",
    items: [
      {
        org: "Profil Software",
        role: "Tech Lead i architekt",
        period: "od 2018",
        body: "Rozmowy z klientami przed projektem, architektura i prowadzenie zespołów. 8 produktów, m.in. w fintechu, cybersecurity i lotnictwie.",
      },
      {
        org: "SoftArm",
        role: "własna firma",
        period: "od 2012",
        body: "Produkty dla klientów od pomysłu po utrzymanie, wsparcie techniczne dla startupów. Od 2018 pracuję głównie z Profil Software.",
      },
      {
        org: "PIRO",
        role: "developer, konsultant, trener",
        period: "2010–2014",
        body: "Firma produktowa z branży turystycznej: CRM dla biur podróży i system rezerwacji dla touroperatorów. Wdrożenia u klientów i szkolenia.",
      },
    ],
    credentials: [
      "AWS Certified Solutions Architect – Associate",
      "mgr inż. informatyki",
      "studia podyplomowe z zarządzania projektami IT",
    ],
  },
  writing: {
    eyebrow: "Teksty",
    title: "Notatki z projektów",
    read: "Czytaj",
    back: "← Wszystkie teksty",
    otherLang: "Read in English",
  },
  services: {
    eyebrow: "Współpraca",
    title: "W czym mogę pomóc",
    lead: "Czasem pracuję też bezpośrednio z firmami, przez własną firmę SoftArm. Najczęściej w trzech sytuacjach:",
    items: [
      { title: "Masz pomysł, ale nie masz zespołu technicznego.", body: "Pomagam ustalić, co zbudować najpierw, dobieram ludzi i pilnuję, żeby produkt trafił do użytkowników." },
      { title: "Produkt zaraz trafi do klientów albo do audytu.", body: "Sprawdzam architekturę i gotowość do wdrożenia: co może się wysypać i co poprawić w pierwszej kolejności." },
      { title: "Projekt potrzebuje prowadzenia technicznego.", body: "Architektura, standardy i zespół, także gdy kod powstaje z AI." },
    ],
    cta: "Napisz, czego potrzebujesz",
  },
  testimonial: {
    eyebrow: "Rekomendacja",
    quote: "Kamil i jego zespół odegrali kluczową rolę w budowie naszego złożonego produktu SaaS. To lider inżynierii z najwyższej półki: ma ogromną, praktyczną wiedzę techniczną i świetnie zarządza ludźmi.",
    role: "VP, RevOps & Strategic Accounts",
    ctx: "klient · kwiecień 2024 · tłumaczenie z angielskiego",
  },
  contact: {
    title: "Porozmawiajmy",
    lead: "Najszybciej mailowo albo na LinkedInie. Zwykle odpisuję w ciągu doby.",
    or: "albo napisz tutaj",
    form: {
      subject: "Nowa wiadomość ze strony softarm.pl",
      name: "Imię",
      email: "E-mail",
      message: "Wiadomość",
      submit: "Wyślij →",
      sending: "Wysyłam…",
      error: "Nie udało się wysłać. Napisz proszę na kamil@softarm.pl.",
      successTitle: "Dzięki! Wiadomość wysłana.",
      successSub: "Odezwę się na podany e-mail.",
    },
  },
};

export type Dict = typeof pl;
