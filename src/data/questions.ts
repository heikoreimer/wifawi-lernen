import type { QuizQuestion } from "@/types";

export const QUESTIONS: QuizQuestion[] = [
  // ─── Rechnungswesen ───────────────────────────────────────────────────────
  {
    id: "rw-001",
    category: "rechnungswesen",
    difficulty: 1,
    question: "Was ist der Unterschied zwischen der Finanzbuchhaltung (FiBu) und der Kosten- und Leistungsrechnung (KoLei)?",
    options: [
      "FiBu ist für externe Adressaten (Finanzamt, Gläubiger), KoLei für interne Entscheidungen (Kalkulation, Kontrolle)",
      "FiBu erfasst nur Einnahmen, KoLei nur Ausgaben",
      "Beide sind identisch, nur unterschiedliche Bezeichnungen",
      "FiBu ist freiwillig, KoLei gesetzlich vorgeschrieben",
    ],
    correctIndex: 0,
    explanation: "Die FiBu dient der externen Rechenschaftspflicht (Jahresabschluss für Finanzamt, Banken). Die KoLei ist ein internes Steuerungsinstrument für Kalkulation, Kostenkontrolle und Entscheidungen der Unternehmensführung.",
  },
  {
    id: "rw-002",
    category: "rechnungswesen",
    difficulty: 2,
    question: "Ein Unternehmen produziert drei Produkte mit Äquivalenzziffern 1 : 2 : 3. Die Gesamtkosten betragen 60.000 €, Produktionsmengen je 1.000 Stück. Wie hoch sind die Kosten pro Stück für Produkt 2?",
    options: [
      "10 €", "20 €", "30 €", "15 €",
    ],
    correctIndex: 1,
    explanation: "Gesamtäquivalenzeinheiten: 1×1.000 + 2×1.000 + 3×1.000 = 6.000. Kosten je Einheit: 60.000 € ÷ 6.000 = 10 €. Produkt 2 (Ziffer 2): 2 × 10 € = 20 € pro Stück.",
  },
  {
    id: "rw-003",
    category: "rechnungswesen",
    difficulty: 2,
    question: "Welche Aussage zur Zuschlagskalkulation ist korrekt?",
    options: [
      "Die Verwaltungsgemeinkosten werden auf die Fertigungslöhne zugeschlagen",
      "Der Gemeinkostenzuschlag wird auf die Einzelkosten des jeweiligen Bereichs bezogen",
      "Materialgemeinkosten werden auf die Fertigungseinzelkosten bezogen",
      "Der Gewinnzuschlag gehört zu den Herstellkosten",
    ],
    correctIndex: 1,
    explanation: "Bei der Zuschlagskalkulation bezieht sich jeder Gemeinkostenzuschlag auf die Einzelkosten des jeweiligen Bereichs: Materialgemeinkosten auf Materialeinzelkosten, Fertigungsgemeinkosten auf Fertigungslöhne usw.",
  },
  {
    id: "rw-004",
    category: "rechnungswesen",
    difficulty: 2,
    question: "Der Break-Even-Punkt liegt bei einer Produktionsmenge von 500 Stück. Fixkosten: 10.000 €, Verkaufspreis: 50 €. Wie hoch sind die variablen Stückkosten?",
    options: ["30 €", "20 €", "25 €", "40 €"],
    correctIndex: 0,
    explanation: "Am Break-Even gilt: Umsatz = Gesamtkosten. 500 × 50 € = 10.000 + 500 × kv → 25.000 = 10.000 + 500 kv → kv = 30 €.",
  },
  {
    id: "rw-005",
    category: "rechnungswesen",
    difficulty: 1,
    question: "Was versteht man unter dem Deckungsbeitrag?",
    options: [
      "Umsatz minus Gesamtkosten",
      "Verkaufspreis minus variable Stückkosten",
      "Gewinn nach Steuern",
      "Fixkosten minus Materialkosten",
    ],
    correctIndex: 1,
    explanation: "Der Deckungsbeitrag (db) je Stück = Verkaufspreis – variable Stückkosten. Er zeigt, wie viel ein Produkt zur Deckung der Fixkosten und zum Gewinn beiträgt.",
  },
  {
    id: "rw-006",
    category: "rechnungswesen",
    difficulty: 2,
    question: "Welche Kennzahl beschreibt die Gesamtkapitalrendite?",
    options: [
      "(Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100",
      "Gewinn ÷ Eigenkapital × 100",
      "Umsatz ÷ Gesamtkapital × 100",
      "Gewinn ÷ Umsatz × 100",
    ],
    correctIndex: 0,
    explanation: "GK-Rendite = (Jahresgewinn + FK-Zinsen) ÷ Gesamtkapital × 100. Die Fremdkapitalzinsen werden addiert, weil sie Vergütung für eingesetztes Kapital darstellen, unabhängig von der Herkunft.",
  },

  // ─── Recht ────────────────────────────────────────────────────────────────
  {
    id: "re-001",
    category: "recht",
    difficulty: 1,
    question: "Was sind die Pflichten des Verkäufers im Kaufvertrag?",
    options: [
      "Lieferung der Ware und Übereignung des Eigentums",
      "Nur die Rechnungsstellung",
      "Zahlung des Kaufpreises und Abnahme der Ware",
      "Ausstellung einer Garantie",
    ],
    correctIndex: 0,
    explanation: "Der Verkäufer schuldet (§ 433 BGB): 1. Übergabe der mangelfreien Sache und 2. Übereignung (Eigentumsübertragung). Der Käufer schuldet Zahlung des Kaufpreises und Abnahme.",
  },
  {
    id: "re-002",
    category: "recht",
    difficulty: 2,
    question: "Ein Käufer entdeckt einen Sachmangel. In welcher Reihenfolge kann er seine Rechte geltend machen?",
    options: [
      "Sofort Schadensersatz fordern",
      "Zuerst Nacherfüllung verlangen, dann (bei Fehlschlag) Rücktritt, Minderung oder Schadensersatz",
      "Direkt Rücktritt vom Vertrag erklären",
      "Nur Minderung des Kaufpreises möglich",
    ],
    correctIndex: 1,
    explanation: "Das Mängelrecht folgt einer Stufenfolge: Primär hat der Verkäufer das Recht zur Nacherfüllung (Nachbesserung oder Neulieferung). Erst nach erfolglosem Ablauf der Nacherfüllungsfrist stehen dem Käufer Rücktritt, Minderung oder Schadensersatz zu.",
  },
  {
    id: "re-003",
    category: "recht",
    difficulty: 1,
    question: "Was unterscheidet Eigentum von Besitz?",
    options: [
      "Eigentum ist das rechtliche Vollrecht (§ 903 BGB), Besitz die tatsächliche Sachherrschaft (§ 854 BGB)",
      "Besitz ist das stärkere Recht, Eigentum nur vorläufig",
      "Beide Begriffe sind im BGB identisch",
      "Eigentum entsteht automatisch durch Kauf, Besitz erst durch Übergabe",
    ],
    correctIndex: 0,
    explanation: "Eigentümer ist, wer das dingliche Vollrecht an einer Sache hat. Besitzer ist, wer die tatsächliche Sachherrschaft ausübt. Beispiel: Mieter = Besitzer, Vermieter = Eigentümer.",
  },
  {
    id: "re-004",
    category: "recht",
    difficulty: 2,
    question: "Wann liegt Schuldnerverzug vor?",
    options: [
      "Wenn der Schuldner trotz Fälligkeit und Mahnung nicht leistet (und kein Leistungshindernis besteht)",
      "Wenn der Gläubiger die Leistung verweigert",
      "Bereits bei Abschluss des Vertrags",
      "Wenn der Schuldner zahlungsunfähig ist",
    ],
    correctIndex: 0,
    explanation: "Schuldnerverzug (§ 286 BGB) erfordert: Fälligkeit der Leistung + Mahnung des Gläubigers + Nichtleistung trotz Mahnung + kein Vertretenmüssen des Schuldners. Ausnahmen: Kalendertermin oder Interessewegfall machen die Mahnung entbehrlich.",
  },
  {
    id: "re-005",
    category: "recht",
    difficulty: 1,
    question: "Was ist eine selbstschuldnerische Bürgschaft?",
    options: [
      "Der Bürge verzichtet auf die Einrede der Vorausklage – Gläubiger kann sofort beim Bürgen vollstrecken",
      "Der Bürge haftet nur nach dem Hauptschuldner",
      "Die Bürgschaft ist formfrei möglich",
      "Der Bürge wird erst nach Insolvenz des Schuldners in Anspruch genommen",
    ],
    correctIndex: 0,
    explanation: "Bei der selbstschuldnerischen Bürgschaft (§ 773 BGB) verzichtet der Bürge auf die Einrede der Vorausklage. Der Gläubiger kann direkt beim Bürgen vollstrecken, ohne zuerst gegen den Hauptschuldner vorzugehen.",
  },

  // ─── BWL ──────────────────────────────────────────────────────────────────
  {
    id: "bwl-001",
    category: "bwl",
    difficulty: 1,
    question: "Was versteht man unter dem Magischen Viereck der Wirtschaftspolitik?",
    options: [
      "Preisstabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht und angemessenes Wirtschaftswachstum",
      "Inflation, Deflation, Stagflation und Rezession",
      "EZB, Bundesbank, Finanzministerium und Bundesregierung",
      "Angebot, Nachfrage, Preis und Menge",
    ],
    correctIndex: 0,
    explanation: "Das Magische Viereck (§ 1 StWG) umfasst die vier wirtschaftspolitischen Hauptziele: Preisstabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht und stetiges/angemessenes Wirtschaftswachstum. 'Magisch', weil sie sich oft widersprechen.",
  },
  {
    id: "bwl-002",
    category: "bwl",
    difficulty: 2,
    question: "Welche Aussage zur GmbH ist korrekt?",
    options: [
      "Gesellschafter haften persönlich und unbeschränkt",
      "Mindestkapital 25.000 €, Haftung beschränkt auf Gesellschaftsvermögen",
      "Mindestkapital 50.000 €, Pflicht zur Börsennotierung",
      "GmbH ist eine Personengesellschaft",
    ],
    correctIndex: 1,
    explanation: "Die GmbH (§ 5 GmbHG) erfordert ein Mindeststammkapital von 25.000 €. Die Gesellschafter haften nur mit ihrer Einlage – nicht mit ihrem Privatvermögen. Die GmbH ist eine Kapitalgesellschaft und juristische Person.",
  },
  {
    id: "bwl-003",
    category: "bwl",
    difficulty: 2,
    question: "Was beschreibt die Ansoff-Matrix?",
    options: [
      "Wachstumsstrategien durch Kombination von Märkten (alt/neu) und Produkten (alt/neu)",
      "Portfolio-Analyse mit Marktanteil und Marktwachstum",
      "SWOT-Analyse für strategische Planung",
      "Preisstrategien bei der Markteinführung",
    ],
    correctIndex: 0,
    explanation: "Die Ansoff-Matrix zeigt vier Wachstumsstrategien: Marktdurchdringung (alt/alt), Marktentwicklung (alt/neu), Produktentwicklung (neu/alt) und Diversifikation (neu/neu). Sie hilft bei strategischen Wachstumsentscheidungen.",
  },
  {
    id: "bwl-004",
    category: "bwl",
    difficulty: 1,
    question: "Was unterscheidet Konjunktur- von Saisonschwankungen?",
    options: [
      "Konjunkturschwankungen sind zyklisch über mehrere Jahre, Saisonschwankungen wiederholen sich regelmäßig innerhalb eines Jahres",
      "Saisonschwankungen dauern länger als Konjunkturschwankungen",
      "Beide Begriffe sind synonym",
      "Konjunkturschwankungen sind staatlich steuerbar, Saisonschwankungen nicht",
    ],
    correctIndex: 0,
    explanation: "Konjunkturschwankungen sind gesamtwirtschaftliche Auf- und Abschwünge über mehrere Jahre (Boom → Rezession → Depression → Aufschwung). Saisonschwankungen sind vorhersehbare, jährlich wiederkehrende Schwankungen (z. B. Weihnachtsgeschäft, Sommerflaute).",
  },

  // ─── Personal ─────────────────────────────────────────────────────────────
  {
    id: "pe-001",
    category: "personal",
    difficulty: 1,
    question: "Was ist der Unterschied zwischen Brutto- und Netto-Personalbedarf?",
    options: [
      "Bruttobedarf = zukünftiger Gesamtbedarf; Nettobedarf = Bruttobedarf minus vorhandenes Personal",
      "Bruttobedarf betrifft Vollzeitkräfte, Nettobedarf Teilzeitkräfte",
      "Nettobedarf ist immer höher als der Bruttobedarf",
      "Bruttobedarf berücksichtigt nur feste Stellen, Nettobedarf auch Aushilfen",
    ],
    correctIndex: 0,
    explanation: "Bruttopersonalbedarf = der insgesamt benötigte Personalbestand für die Planperiode. Nettopersonalbedarf = Bruttobedarf – fortgeschriebener Personalbestand (verfügbares Personal nach Abgängen und Zugängen). Der Nettobedarf zeigt den tatsächlichen Beschaffungs- oder Abbaubedarf.",
  },
  {
    id: "pe-002",
    category: "personal",
    difficulty: 2,
    question: "Was beschreibt 'Management by Objectives' (MbO)?",
    options: [
      "Führung durch Zielvereinbarung: Vorgesetzter und Mitarbeiter vereinbaren gemeinsam messbare Ziele",
      "Führung durch ständige Kontrolle aller Arbeitsschritte",
      "Führung durch Delegation ohne Kontrolle",
      "Autoritärer Führungsstil mit klaren Anweisungen",
    ],
    correctIndex: 0,
    explanation: "MbO (Führung durch Zielvereinbarung) ist ein kooperativer Führungsstil: Vorgesetzter und Mitarbeiter legen gemeinsam SMART-Ziele fest. Vorteile: Motivation, Eigenverantwortung, klare Erfolgsmessung. Nachteil: hoher Abstimmungsaufwand.",
  },
  {
    id: "pe-003",
    category: "personal",
    difficulty: 1,
    question: "Wofür steht die SMART-Formel bei der Zielformulierung?",
    options: [
      "Spezifisch, Messbar, Attraktiv/Anspruchsvoll, Realistisch, Terminiert",
      "Schnell, Messbar, Akzeptiert, Relevant, Transparent",
      "Spezifisch, Motivierend, Abgestimmt, Realisierbar, Terminiert",
      "Strukturiert, Messbar, Akzeptiert, Realistisch, Terminiert",
    ],
    correctIndex: 0,
    explanation: "SMART steht für: Spezifisch (konkret formuliert), Messbar (quantifizierbar), Attraktiv/Anspruchsvoll (motivierend), Realistisch (erreichbar), Terminiert (mit klarem Enddatum). Manchmal auch als SMARTI mit I = Individuell.",
  },
  {
    id: "pe-004",
    category: "personal",
    difficulty: 2,
    question: "Was sind Vorteile der internen Personalrekrutierung?",
    options: [
      "Geringere Kosten, Mitarbeiter kennt das Unternehmen, Motivation durch Aufstiegschancen",
      "Größere Auswahl an Kandidaten, frische Ideen von außen",
      "Kein Einarbeitungsaufwand bei externen Experten",
      "Vermeidung von Betriebsblindheit",
    ],
    correctIndex: 0,
    explanation: "Interne Rekrutierung bietet: niedrigere Such-/Einarbeitungskosten, der Kandidat kennt Unternehmenskultur und Prozesse, und es entsteht ein Motivationsanreiz für bestehende Mitarbeiter. Nachteil: kleineres Kandidatenfeld, Gefahr von Betriebsblindheit.",
  },

  // ─── Marketing ────────────────────────────────────────────────────────────
  {
    id: "ma-001",
    category: "marketing",
    difficulty: 1,
    question: "Was sind die vier klassischen Instrumente des Marketing-Mix (4P)?",
    options: [
      "Product, Price, Place, Promotion",
      "Planning, Pricing, Positioning, Promotion",
      "Product, Profit, Place, People",
      "Production, Price, Place, Publicity",
    ],
    correctIndex: 0,
    explanation: "Der klassische Marketing-Mix umfasst: Product (Produktpolitik), Price (Preispolitik), Place (Distributionspolitik) und Promotion (Kommunikationspolitik). Zusammen bilden sie das operative Marketinginstrumentarium.",
  },
  {
    id: "ma-002",
    category: "marketing",
    difficulty: 2,
    question: "In der BCG-Matrix: Was charakterisiert einen 'Star'?",
    options: [
      "Hoher Marktanteil, hohes Marktwachstum – Investitionen erforderlich",
      "Hoher Marktanteil, niedriges Marktwachstum – Cash-Cow",
      "Niedriger Marktanteil, hohes Marktwachstum – Question Mark",
      "Niedriger Marktanteil, niedriges Marktwachstum – Poor Dog",
    ],
    correctIndex: 0,
    explanation: "Stars haben hohen relativen Marktanteil bei hohem Marktwachstum. Sie sind zukünftige Cash-Cows, erfordern aber noch hohe Investitionen zur Marktpositionsverteidigung. Ziel: Investitionsstrategie.",
  },
  {
    id: "ma-003",
    category: "marketing",
    difficulty: 2,
    question: "Was ist der Unterschied zwischen Handelsvertreter und Reisenden?",
    options: [
      "Handelsvertreter ist selbstständig (§ 84 HGB), Reisender ist angestellter Außendienstmitarbeiter",
      "Reisender ist selbstständig, Handelsvertreter fest angestellt",
      "Beide sind gleich, nur unterschiedliche Bezeichnungen",
      "Handelsvertreter hat kein Provisionsrecht",
    ],
    correctIndex: 0,
    explanation: "Handelsvertreter (§ 84 HGB) ist selbstständiger Gewerbetreibender, der auf Provisionsbasis für ein Unternehmen tätig ist. Der Reisende ist Arbeitnehmer (Angestellter) im Außendienst mit festem Gehalt + ggf. Provision.",
  },

  // ─── Steuern ──────────────────────────────────────────────────────────────
  {
    id: "st-001",
    category: "steuern",
    difficulty: 1,
    question: "Was ist der Unterschied zwischen direkten und indirekten Steuern?",
    options: [
      "Direkte Steuern: Steuerschuldner = Steuerträger (z. B. Einkommensteuer). Indirekte Steuern: Abwälzung auf Dritte möglich (z. B. Umsatzsteuer)",
      "Direkte Steuern sind niedriger als indirekte Steuern",
      "Direkte Steuern werden monatlich, indirekte jährlich gezahlt",
      "Indirekte Steuern zahlt nur die Industrie",
    ],
    correctIndex: 0,
    explanation: "Bei direkten Steuern (ESt, KSt, GewSt) fallen Steuerschuldner und Steuerträger zusammen. Bei indirekten Steuern (USt, Energiesteuer) überwälzt der Steuerschuldner die Last auf den Verbraucher.",
  },
  {
    id: "st-002",
    category: "steuern",
    difficulty: 2,
    question: "Wann greift die Kleinunternehmerregelung nach § 19 UStG?",
    options: [
      "Vorjahresumsatz ≤ 22.000 € und voraussichtlicher Jahresumsatz ≤ 50.000 €",
      "Jahresumsatz unter 100.000 €",
      "Immer bei Einzelunternehmen",
      "Vorjahresumsatz unter 10.000 €",
    ],
    correctIndex: 0,
    explanation: "Die Kleinunternehmerregelung (§ 19 UStG) gilt, wenn der Umsatz im Vorjahr ≤ 22.000 € betrug und im laufenden Jahr voraussichtlich ≤ 50.000 € sein wird. Vorteil: keine USt-Abführung. Nachteil: kein Vorsteuerabzug. (Ab 2024: neue EU-Schwellenwerte beachten.)",
  },
  {
    id: "st-003",
    category: "steuern",
    difficulty: 2,
    question: "Wie wird die Gewerbesteuer berechnet?",
    options: [
      "Gewerbeertrag × Steuermesszahl × Hebesatz der Gemeinde",
      "Jahresgewinn × fester Steuersatz von 15 %",
      "Umsatz × Hebesatz der Gemeinde",
      "Gewinn minus Freibetrag × Körperschaftsteuersatz",
    ],
    correctIndex: 0,
    explanation: "Schema Gewerbesteuer: 1. Gewinn aus Gewerbebetrieb → 2. ± Hinzurechnungen/Kürzungen = Gewerbeertrag → 3. × Steuermesszahl (3,5 %) = Steuermessbetrag → 4. × Hebesatz der Gemeinde (mind. 200 %) = Gewerbesteuerschuld.",
  },
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  if (category === "all") return QUESTIONS;
  return QUESTIONS.filter((q) => q.category === category);
}

export function getRandomQuestions(count: number, category = "all"): QuizQuestion[] {
  const pool = getQuestionsByCategory(category);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
