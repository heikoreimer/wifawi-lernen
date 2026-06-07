export interface ParetoTopic {
  rank: number;
  topic: string;
  cumulativeShare: number; // % of total exam points covered up to this rank
  totalPoints: number;
  exampleContent: string;
}

export interface ParetoSubject {
  id: string;
  label: string;
  shortLabel: string;
  color: string;         // CSS color for badge
  exam: "WBQ" | "HSQ";
  examPart?: string;     // e.g. "Situation 1" / "Situation 2"
  topics: ParetoTopic[];
}

// ─── WBQ: Rechnungswesen ──────────────────────────────────────────────────────
const rechnungswesen: ParetoSubject = {
  id: "rechnungswesen",
  label: "Rechnungswesen",
  shortLabel: "ReWe",
  color: "#007AFF",
  exam: "WBQ",
  topics: [
    { rank: 1,  topic: "Allgemeines (FiBu, Bilanz, GuV, Konten)",      cumulativeShare: 21, totalPoints: 399, exampleContent: "FiBu vs. KoLei, Bestandskonten/Erfolgskonten, Abschluss, Bewertungsprinzipien" },
    { rank: 2,  topic: "Äquivalenzzifferrechnung",                      cumulativeShare: 41, totalPoints: 384, exampleContent: "Äquivalenzziffer, Kostenverteilung auf Produktarten" },
    { rank: 3,  topic: "Kalkulation Industrie / Handel",                cumulativeShare: 57, totalPoints: 296, exampleContent: "Zuschlagskalkulation FM → LVKP, Ermittlung von Zuschlagssätzen, Handelsspanne" },
    { rank: 4,  topic: "Break-Even mit Betriebsergebnis",               cumulativeShare: 69, totalPoints: 237, exampleContent: "Break-Even-Menge, Break-Even-Punkt, Gesamtkosten- und Umsatzfunktion" },
    { rank: 5,  topic: "Deckungsbeitragsrechnung",                      cumulativeShare: 77, totalPoints: 152, exampleContent: "DB je Produkt, Deckungsbeitragsspanne, Ergebnis je Warengruppe" },
    { rank: 6,  topic: "Rentabilitäten",                                cumulativeShare: 85, totalPoints: 139, exampleContent: "EK-Rendite, GK-Rendite, Umsatzrentabilität, Jahresabschlussanalyse" },
    { rank: 7,  topic: "Betriebsabrechnungsbogen (BAB)",                cumulativeShare: 90, totalPoints: 106, exampleContent: "BAB Stufenverfahren, Ist-Zuschläge, Betriebsergebnis" },
    { rank: 8,  topic: "Geschäftsfälle",                                cumulativeShare: 95, totalPoints:  98, exampleContent: "Aktivtausch, Passivtausch, Aktivmehrung, Aktivminderung, Passivmehrung" },
    { rank: 9,  topic: "Differenzquotienverfahren",                     cumulativeShare: 100, totalPoints: 89, exampleContent: "Break-Even-Menge mit Differenzquotientenverfahren, Stückkosten" },
  ],
};

// ─── WBQ: Recht und Steuer ───────────────────────────────────────────────────
const rechtSteuer: ParetoSubject = {
  id: "recht-steuer",
  label: "Recht & Steuer",
  shortLabel: "Recht",
  color: "#FF453A",
  exam: "WBQ",
  topics: [
    { rank: 1,  topic: "Allgemeines Vertragsrecht",                     cumulativeShare: 12, totalPoints: 221, exampleContent: "Pflichten in KV, DV, WV; Unterschiede Miet- und Pachtvertrag" },
    { rank: 2,  topic: "Sachmangel & Nacherfüllung / Werkvertrag",      cumulativeShare: 23, totalPoints: 218, exampleContent: "Mängel, Rechte des Käufers, Verjährung, Schadensersatzansprüche" },
    { rank: 3,  topic: "Bürgschaft, Pfand und Sicherung",               cumulativeShare: 32, totalPoints: 173, exampleContent: "Bürgschaftserklärung, Unterschiede Sicherung vs. Pfand, Formvorschriften" },
    { rank: 4,  topic: "Arbeitsrecht",                                  cumulativeShare: 41, totalPoints: 159, exampleContent: "Kündigung, KSchG, ordentliche Kündigung, befristeter AV, Arbeitszeugnis" },
    { rank: 5,  topic: "Angaben auf Rechnungen",                        cumulativeShare: 48, totalPoints: 141, exampleContent: "Pflichtangaben auf Rechnungen nach UStG" },
    { rank: 6,  topic: "AGB – Allgemeine Geschäftsbedingungen",         cumulativeShare: 54, totalPoints: 116, exampleContent: "AGB: Voraussetzungen, Wirksamkeit, Einbeziehung in den Vertrag" },
    { rank: 7,  topic: "Eigentum und Besitz",                           cumulativeShare: 60, totalPoints: 115, exampleContent: "Eigentumsübertragung, gutgläubiger Erwerb, Herausgabeanspruch" },
    { rank: 8,  topic: "HGB",                                           cumulativeShare: 66, totalPoints: 105, exampleContent: "Kaufmann nach HGB, Prokura, OHG, Firma, Handlungsgehilfe" },
    { rank: 9,  topic: "Insolvenzordnung (InsO)",                       cumulativeShare: 70, totalPoints:  90, exampleContent: "Insolvenzverfahren, Voraussetzungen, Gläubiger" },
    { rank: 10, topic: "Abgabenordnung",                                cumulativeShare: 75, totalPoints:  87, exampleContent: "Wirksamkeit von Verwaltungsakten, Fristen, Körperschaftsteuerbescheid" },
    { rank: 11, topic: "Steuerarten",                                   cumulativeShare: 79, totalPoints:  77, exampleContent: "USt, Lohnsteuer, Gewerbesteuer, Grundsteuer, GmbH-Besteuerung" },
    { rank: 12, topic: "Wirksamer Vertrag",                             cumulativeShare: 83, totalPoints:  77, exampleContent: "Wirksamkeit KV, Gefahrenübergang, Ding der Unmöglichkeit, Schadensersatz" },
  ],
};

// ─── WBQ: Unternehmensführung ────────────────────────────────────────────────
const unternehmensfuehrung: ParetoSubject = {
  id: "unternehmensfuehrung",
  label: "Unternehmensführung",
  shortLabel: "UF",
  color: "#30D158",
  exam: "WBQ",
  topics: [
    { rank: 1,  topic: "Personalbeschaffung & Personalplanung",         cumulativeShare: 19, totalPoints: 359, exampleContent: "Brutto-/Nettopersonalbedarf, interne/externe Beschaffung, Stellenausschreibung, Auswahlgespräch" },
    { rank: 2,  topic: "Führungsstile und -methoden",                   cumulativeShare: 34, totalPoints: 285, exampleContent: "Autoritär vs. kooperativ, Management by Objectives, MbD, situatives Führen, SMARTI" },
    { rank: 3,  topic: "Personalentwicklung",                           cumulativeShare: 46, totalPoints: 239, exampleContent: "Ziele aus UN- und MA-Sicht, Job Enrichment/Enlargement, Potenzialanalyse, Fachkräftemangel" },
    { rank: 4,  topic: "Organisation",                                  cumulativeShare: 59, totalPoints: 235, exampleContent: "Linien-, Stab-, Matrix-, Divisionalorganisation; Aufbau- vs. Ablauforganisation" },
    { rank: 5,  topic: "Instrumente (SWOT, BCG, Produktlebenszyklus)",  cumulativeShare: 69, totalPoints: 185, exampleContent: "SWOT-Analyse, BCG-Matrix, Portfoliomatrix, Benchmark, Produktlebenszyklus" },
    { rank: 6,  topic: "Planung (strategisch, taktisch, operativ)",     cumulativeShare: 76, totalPoints: 137, exampleContent: "Strategische vs. operative Planung, Budgetplanung Top-Down/Bottom-Up" },
    { rank: 7,  topic: "Gruppen und Gruppenarbeit",                     cumulativeShare: 82, totalPoints: 126, exampleContent: "Gruppenarbeit vs. Einzelarbeit, formelle/informelle Gruppen, Phasen der Gruppenbildung" },
    { rank: 8,  topic: "Erfassungsmethoden",                            cumulativeShare: 87, totalPoints:  83, exampleContent: "Offene vs. geschlossene Fragen, Skalenfrage, Kundenbefragung" },
    { rank: 9,  topic: "Integriertes Managementsystem (IMS)",           cumulativeShare: 91, totalPoints:  76, exampleContent: "IMS: Aufgaben, Vorteile, KVP-Einführung" },
    { rank: 10, topic: "CI, Leitbild, Begriffe",                        cumulativeShare: 95, totalPoints:  76, exampleContent: "Unternehmensleitbild: Mission, Vision, Interessensgruppen, Corporate Identity" },
  ],
};

// ─── WBQ: VWL / BWL ──────────────────────────────────────────────────────────
const vwlBwl: ParetoSubject = {
  id: "vwl-bwl",
  label: "VWL / BWL",
  shortLabel: "VWL",
  color: "#FF9F0A",
  exam: "WBQ",
  topics: [
    { rank: 1,  topic: "Rechtsformen & Existenzgründung",               cumulativeShare: 16, totalPoints: 295, exampleContent: "KG, GmbH, UG, AG; Businessplan, Formalitäten, Vergleich der Rechtsformen" },
    { rank: 2,  topic: "Preis-Mengen-Diagramme & Markt",                cumulativeShare: 31, totalPoints: 292, exampleContent: "Vollkommener Markt, Preisbildung, Marktformen, staatliche Eingriffe, Preis-Mengen-Diagramm" },
    { rank: 3,  topic: "BWL (Controlling, Marketing-Mix)",              cumulativeShare: 44, totalPoints: 256, exampleContent: "Aufgaben Controlling, Marketing-Mix, Instrumente, Unternehmensziele" },
    { rank: 4,  topic: "Volkswirtschaftliche Gesamtrechnung (VGR)",     cumulativeShare: 57, totalPoints: 246, exampleContent: "Quantitatives Wirtschaftswachstum, fiskalpolitische Maßnahmen" },
    { rank: 5,  topic: "Betriebliche Zusammenarbeit",                   cumulativeShare: 70, totalPoints: 245, exampleContent: "Kartell, Konzern, Joint Venture, ARGE, Kooperation vs. Konzentration" },
    { rank: 6,  topic: "Konjunktur",                                    cumulativeShare: 79, totalPoints: 166, exampleContent: "Konjunkturzyklus, Inflation, Staatsverschuldung, magisches Viereck, Konjunktur- vs. Saisonschwankungen" },
    { rank: 7,  topic: "EZB & Inflation",                               cumulativeShare: 88, totalPoints: 165, exampleContent: "EZB-Instrumente, Leitzins, Deflation, Geldstabilität" },
    { rank: 8,  topic: "Investition & Finanzierung",                    cumulativeShare: 92, totalPoints:  92, exampleContent: "Gründe für Investitionen, EK/FK, Innenfinanzierung, Kapitalbeschaffung AG" },
  ],
};

// ─── HSQ Situation 1 ─────────────────────────────────────────────────────────
const hsqSit1: ParetoSubject = {
  id: "hsq-sit1",
  label: "HSQ Situation 1",
  shortLabel: "HSQ 1",
  color: "#5E5CE6",
  exam: "HSQ",
  examPart: "Situation 1",
  topics: [
    { rank: 1,  topic: "Marketing (Ansoff, Mix, Wettbewerb, Absatz)",   cumulativeShare: 26, totalPoints: 487, exampleContent: "Ansoff-Matrix, Marketing-Mix, Wettbewerbsstrategie, Neukundengewinnung, Kommunikationsinstrumente" },
    { rank: 2,  topic: "Personal (Führung, Entwicklung, Gespräche)",    cumulativeShare: 47, totalPoints: 399, exampleContent: "Führungsstile, Mitarbeitergespräch, Personalentwicklung, Bewerbungsunterlagen, Laufbahnplanung" },
    { rank: 3,  topic: "Strategie (SWOT, Analyse, Ziele)",              cumulativeShare: 60, totalPoints: 260, exampleContent: "SWOT-Analyse, Strategiebestimmung, Zieldefinition SMARTI, Gegenstromverfahren" },
    { rank: 4,  topic: "Ausbildung",                                    cumulativeShare: 68, totalPoints: 153, exampleContent: "Leittextmethode, Regelkreis, Ausbildungsbeauftragter, Rechtsgrundlagen Ausbildung" },
    { rank: 5,  topic: "Projekte (Phasen, Organisation, Risiken)",      cumulativeShare: 74, totalPoints: 107, exampleContent: "Projektphasen, Projektorganisationsformen, magisches Dreieck, Risiken in Projekten" },
    { rank: 6,  topic: "FMEA & Dokumentation",                          cumulativeShare: 79, totalPoints: 103, exampleContent: "Wissensdatenbank, Dokumentensystem, FMEA-Anwendung und -Ziele" },
    { rank: 7,  topic: "Konflikte & Kommunikation",                     cumulativeShare: 84, totalPoints:  90, exampleContent: "4-Seiten-Modell, Konfliktarten, Generation Y vs. X, Eskalationsvermeidung" },
    { rank: 8,  topic: "Organisation",                                  cumulativeShare: 89, totalPoints:  85, exampleContent: "Organisationsentwicklung nach Kurt Lewin, Prozessverbesserung" },
    { rank: 9,  topic: "Nutzwertanalyse",                               cumulativeShare: 92, totalPoints:  61, exampleContent: "Nutzwertanalyse, Gewichtungsfaktoren, Auswahl und Begründung" },
    { rank: 10, topic: "Moderation",                                    cumulativeShare: 94, totalPoints:  49, exampleContent: "Moderationsphasen, Arbeitsmethoden je Phase, Widerstände auflösen" },
  ],
};

// ─── HSQ Situation 2 ─────────────────────────────────────────────────────────
const hsqSit2: ParetoSubject = {
  id: "hsq-sit2",
  label: "HSQ Situation 2",
  shortLabel: "HSQ 2",
  color: "#BF5AF2",
  exam: "HSQ",
  examPart: "Situation 2",
  topics: [
    { rank: 1,  topic: "Logistik (Distribution, Beschaffung, Trends)",  cumulativeShare: 17, totalPoints: 320, exampleContent: "Distributionslogistik, Logistikziele, Trends, Beschaffungslogistik, Lageroptimierung" },
    { rank: 2,  topic: "Organisation & Co. (Ablauf, Prozesse)",         cumulativeShare: 31, totalPoints: 271, exampleContent: "Ablauforganisation, Prozessoptimierung, Qualitätsmanagement, KVP" },
    { rank: 3,  topic: "Plankostenrechnung",                            cumulativeShare: 42, totalPoints: 213, exampleContent: "Verbrauchsabweichung, Plankostenrechnung flexible/starre, Abweichungsanalyse" },
    { rank: 4,  topic: "Kapitalwertmethode",                            cumulativeShare: 53, totalPoints: 170, exampleContent: "Kapitalwert, interner Zinsfuß, Investitionsrechnung, Annuitätenmethode" },  // approximation
    { rank: 5,  topic: "Controlling (strategisch & operativ)",          cumulativeShare: 65, totalPoints: 153, exampleContent: "SWOT und Normstrategie im Controlling, Balanced Scorecard, Kennzahlen" },
    { rank: 6,  topic: "Finanzierung & Kreditsicherung",                cumulativeShare: 75, totalPoints: 130, exampleContent: "Kreditsicherung mit Bilanzpositionen, Kreditanforderungen, EK/FK" },
    { rank: 7,  topic: "Kostenrechnung & Kalkulation",                  cumulativeShare: 85, totalPoints: 100, exampleContent: "Deckungsbeitragsrechnung, Zuschlagskalkulation, Break-Even, BAB" },
    { rank: 8,  topic: "Investitionsrechnung (statisch/dynamisch)",     cumulativeShare: 92, totalPoints:  80, exampleContent: "Kostenvergleich, Gewinnvergleich, Amortisation, Kapitalwert" },
  ],
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const PARETO_SUBJECTS: ParetoSubject[] = [
  rechnungswesen,
  rechtSteuer,
  unternehmensfuehrung,
  vwlBwl,
  hsqSit1,
  hsqSit2,
];

export const WBQ_SUBJECTS = PARETO_SUBJECTS.filter((s) => s.exam === "WBQ");
export const HSQ_SUBJECTS = PARETO_SUBJECTS.filter((s) => s.exam === "HSQ");

/** Topics with cumulativeShare ≤ 80% — the true Pareto core */
export function getCoreTopics(subject: ParetoSubject): ParetoTopic[] {
  return subject.topics.filter((t) => t.cumulativeShare <= 80);
}
