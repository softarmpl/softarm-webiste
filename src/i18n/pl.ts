// Cała treść polskiej wersji strony. Komponenty biorą teksty stąd (patrz src/i18n/index.ts).
// Źródło copy: vault, MarkaOsobista/Strona softarm.pl - nowa wersja.md
export const pl = {
  lang: "pl",
  meta: {
    title: "Kamil Wałdoch: Tech Lead i architekt oprogramowania",
    description:
      "Prowadzę produkty od pierwszej rozmowy z klientem do produkcji: presales, architektura, zespoły. 16 lat w fintechu, cybersecurity i lotnictwie.",
    jobTitle: "Tech Lead i architekt oprogramowania",
  },
  nav: {
    about: "O mnie",
    work: "Projekty",
    writing: "Teksty",
    services: "Współpraca",
    contact: "Kontakt",
    menuLabel: "Otwórz menu",
    switchLabel: "EN",
    switchTitle: "English version",
  },
  hero: {
    eyebrow: "Tech Lead i architekt oprogramowania · Gdynia",
    name: "Kamil Wałdoch",
    lead: "Prowadzę produkty od pierwszej rozmowy z klientem do produkcji. Projektuję architekturę, prowadzę zespoły, które ją budują, i rozmawiam z biznesem o tym, co naprawdę trzeba zbudować.",
    thesis: ["AI potaniło pisanie kodu.", "Nie potaniło decyzji."],
    ctaPrimary: "Napisz do mnie",
    ctaSecondary: "LinkedIn",
    statsLabel: "Kluczowe liczby",
    stats: [
      { num: "16 lat", label: "w branży, od developera po prowadzenie produktów i zespołów" },
      { num: "8 produktów", label: "dowiezionych na produkcję w Profil Software" },
      { num: "2 zespoły", label: "prowadzone równolegle, po 5–9 osób" },
    ],
  },
  about: {
    eyebrow: "O mnie",
    title: "Między biznesem a zespołem",
    photoAlt: "Kamil Wałdoch",
    paragraphs: [
      "Od 16 lat buduję oprogramowanie, od 8 w Profil Software. Zaczynam zwykle przed pierwszą linijką kodu: na presalesie, warsztacie z klientem albo przy wycenie. Pracowałem z klientami z Polski, USA, Norwegii i Arabii Saudyjskiej, z founderami i z zarządami.",
      "Potem projektuję architekturę i prowadzę zespół, który ją buduje. Zwykle dwa zespoły równolegle, po 5–9 osób: frontend, backend, QA, UX. Prowadzę rozmowy techniczne, decyduję o zatrudnieniu, daję feedback, mam wpływ na oceny, awanse i podwyżki.",
      "Najbardziej cenię relacje z klientami. Prowadziłem współprace trwające do trzech lat, klienci wracali z kolejnymi projektami, a część przeszła za mną do Profil Software z firmy, w której zaczynałem jako backendowiec.",
    ],
    howTitle: "Jak pracuję",
    how: [
      { title: "Najpierw biznes.", body: "Zanim ktoś zacznie pisać kod, chcę wiedzieć, za co klient płaci i co musi zadziałać pierwsze." },
      { title: "Tnę zakres wcześnie.", body: "Wolę to niż szlifowanie funkcji, za które nikt nie zapłaci." },
      { title: "Developerzy mają ownership swoich modułów.", body: "Ja ustalam ramy, standardy i to, co musi przejść produkcję, security review i audyt." },
      { title: "AI w zespole to standardy, nie licencje.", body: "Wspólny kontekst dla agentów, zasady review kodu z AI, AI w review, testach i CI." },
    ],
  },
  work: {
    eyebrow: "Wybrane projekty",
    title: "Branże, w których błąd kosztuje naprawdę",
    labels: { problem: "Problem", did: "Co zrobiłem", result: "Efekt" },
    projects: [
      {
        tag: "Logistyka · audyt",
        title: "Audyt działu IT dla zarządu",
        metric: "18 osób",
        metricLabel: "dział IT w firmie na ok. 300 · audyt w miesiąc",
        problem: "Wszyscy korzystali z AI, a większe projekty i tak się opóźniały. Zarząd chciał wiedzieć dlaczego.",
        did: "Rozmowy z developmentem, DevOps, IT supportem i kierownictwem. Mapa tego, jak naprawdę płyną zadania, wydania i decyzje.",
        result: "Rekomendacje dla zarządu dotyczące odpowiedzialności za produkt, planowania i procesu wydań. Potem rozmowy techniczne z kandydatami na nowego Head of IT. Gdy został zatrudniony, przeszliśmy razem przez wyniki audytu.",
      },
      {
        tag: "Fintech · Arabia Saudyjska",
        title: "Platforma zarządzania majątkiem: LLM i SOC 2",
        metric: "SOC 2",
        metricLabel: "Type II · LLM na produkcji od 12.2025",
        problem: "Nowy produkt budowany od zera, w którym LLM jest rdzeniem, a nie dodatkiem. Żeby sprzedawać go kolejnym klientom, potrzebny był audyt bezpieczeństwa.",
        did: "Funkcje LLM: LangGraph, monitoring w Arize Phoenix, przetwarzanie dużych dokumentów (OCR, embeddingi, wyszukiwanie wektorowe), czat po dokumentach, analiza dealów, kontrola kosztu tokenów. Potem strona engineeringu w SOC 2 Type II, bezpośrednio z audytorem, w ok. pół roku: backupy, onboarding, logowanie dostępu do AWS, zbieranie dowodów.",
        result: "Produkt na produkcji i zgodność z SOC 2 Type II, a z nią wiarygodność, której klient potrzebował w sprzedaży.",
      },
      {
        tag: "Cybersecurity",
        title: "Platforma analizy ruchu sieciowego",
        metric: "~4000",
        metricLabel: "użytkowników · zero udanych włamań",
        problem: "System, który sam był celem ataków, przetwarzał setki gigabajtów danych z ruchu sieciowego.",
        did: "Architektura na AWS, observability na Loki/Grafana, migracja uwierzytelniania na OIDC (Keycloak), przeskalowanie infrastruktury.",
        result: "Zero udanych włamań przez cały czas działania. Koszty chmury niższe mniej więcej o połowę.",
      },
      {
        tag: "Lotnictwo",
        title: "Oprogramowanie dla lotnictwa",
        metric: "2",
        metricLabel: "produkty na produkcji",
        problem: "Optymalizacja serwisowania prywatnych odrzutowców oraz system zapewniający compliance i bezpieczeństwo lotów komercyjnych.",
        did: "Presales i warsztaty z klientem, prowadzenie projektu od strony technicznej, code review, DevOps.",
        result: "",
      },
    ],
  },
  experience: {
    eyebrow: "Doświadczenie",
    title: "16 lat, trzy miejsca",
    items: [
      {
        org: "Profil Software",
        role: "Tech Lead i architekt",
        period: "od 2018",
        body: "Presales, architektura i zespoły dla klientów z Polski, USA, Norwegii i Arabii Saudyjskiej. 8 produktów: fintech, cybersecurity, lotnictwo, symulacja gry na giełdzie, relacje z klientami.",
      },
      {
        org: "SoftArm",
        role: "własna firma",
        period: "od 2012",
        body: "Produkty dla klientów od pomysłu do produkcji i utrzymania, prowadzenie technologiczne startupów. Od 2018 forma współpracy z Profil Software.",
      },
      {
        org: "PIRO",
        role: "developer, konsultant, trener",
        period: "2010–2014",
        body: "Firma produktowa z branży turystycznej: CRM dla biur podróży i system rezerwacji dla touroperatorów. Wdrożenia u klientów i szkolenia, także na uczelni i targach.",
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
    title: "O czym myślę",
    read: "Czytaj",
    back: "← Wszystkie teksty",
    otherLang: "Read in English",
  },
  services: {
    eyebrow: "Współpraca",
    title: "Przez SoftArm",
    lead: "Czasem pracuję też bezpośrednio z firmami, przez moją firmę SoftArm. Najczęściej w trzech rolach:",
    items: [
      { title: "Partner technologiczny dla foundera bez zespołu technicznego.", body: "Pomagam zdecydować, co budować najpierw, dobieram ludzi i pilnuję, żeby produkt dotarł na produkcję." },
      { title: "Przegląd architektury i gotowości produkcyjnej.", body: "Zanim produkt trafi do klientów albo do audytu bezpieczeństwa: co się wysypie, co jest ryzykiem, co poprawić najpierw." },
      { title: "Prowadzenie techniczne projektu.", body: "Architektura, standardy i zespół, także przy kodzie pisanym z AI." },
    ],
    cta: "Napisz, czego potrzebujesz",
  },
  testimonial: {
    eyebrow: "Rekomendacja",
    ctx: "kwiecień 2024 · był klientem Kamila",
  },
  contact: {
    title: "Porozmawiajmy",
    lead: "Najszybciej przez e-mail albo LinkedIn. Odpisuję zwykle w ciągu dnia.",
    or: "albo napisz tutaj",
    form: {
      subject: "Nowa wiadomość ze strony softarm.pl",
      name: "Imię",
      email: "Twój e-mail",
      message: "W czym mogę pomóc?",
      submit: "Wyślij →",
      sending: "Wysyłam…",
      error: "Nie udało się wysłać. Napisz proszę na kamil@softarm.pl.",
      successTitle: "Dzięki! Wiadomość wysłana.",
      successSub: "Odezwę się na podany e-mail.",
    },
  },
};

export type Dict = typeof pl;
