export interface CaseStudy {
  id: string;
  subject: string;
  subjectColor: string;
  title: string;
  scenario: string;
  tasks: CaseTask[];
  difficulty: 1 | 2 | 3;
  examHint: string;
}

export interface CaseTask {
  id: string;
  points: number;
  question: string;
  sampleAnswer: string;
  keyPoints: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-001",
    subject: "Rechnungswesen",
    subjectColor: "#007AFF",
    difficulty: 2,
    title: "Zuschlagskalkulation Maschinenbau GmbH",
    examHint: "Prüfungsrelevanz: ★★★★★ – in fast jeder Prüfung (Rang 3 Pareto)",
    scenario: `Die Maschinenbau GmbH stellt Sondermaschinen her. Für Auftrag A-42 liegen folgende Daten vor:

Fertigungsmaterial (FM):         8.000 €
Fertigungslöhne (FL):           12.000 €
Materialgemeinkosten:            20 % auf FM
Fertigungsgemeinkosten:          150 % auf FL
Verwaltungsgemeinkosten:         10 % auf HK
Vertriebsgemeinkosten:           8 % auf HK
Gewinnzuschlag:                  12 %
Kundenskonto:                    2 %
Kundenrabatt:                    5 %`,
    tasks: [
      {
        id: "t1",
        points: 14,
        question: "Berechnen Sie den Listenverkaufspreis (LVKP) für Auftrag A-42. Zeigen Sie den vollständigen Kalkulationsweg.",
        sampleAnswer: `FM:                  8.000 €
+ MGK (20%):         1.600 €
= Materialkosten:    9.600 €
+ FL:               12.000 €
+ FGK (150%):       18.000 €
= Herstellkosten:   39.600 €
+ VwGK (10%):        3.960 €
+ VtGK (8%):         3.168 €
= Selbstkosten:     46.728 €
+ Gewinn (12%):      5.607 €
= Barverkaufspreis: 52.335 €
÷ (1 – 0,02):       53.403 €  (Zielverkaufspreis)
÷ (1 – 0,05):       56.214 €  (Listenverkaufspreis)`,
        keyPoints: [
          "Materialkosten = FM + MGK",
          "HK = Materialkosten + FL + FGK",
          "Selbstkosten = HK + VwGK + VtGK",
          "Skonto und Rabatt werden durch Division (nicht Multiplikation) aufgeschlagen",
          "Reihenfolge: Skonto vor Rabatt",
        ],
      },
      {
        id: "t2",
        points: 6,
        question: "Erläutern Sie, warum Kundenskonto und Kundenrabatt beim Listenverkaufspreis durch Division (nicht Addition) eingerechnet werden.",
        sampleAnswer: `Skonto und Rabatt werden vom Listenverkaufspreis abgezogen. Um beim gewünschten Barverkaufspreis zu landen, müssen Skonto und Rabatt rückwärts aufgeschlagen werden – also durch Division mit (1 – Skonto-%) bzw. (1 – Rabatt-%).

Beispiel: LVKP × (1 – 5%) = ZVP → LVKP = ZVP ÷ 0,95

Würde man Skonto/Rabatt addieren, wäre der Selbstkostenpreis nach Abzug zu niedrig → Verlust.`,
        keyPoints: [
          "Skonto/Rabatt werden VOM Listenpreis gewährt",
          "Division stellt sicher, dass nach Abzug der gewünschte Preis bleibt",
          "Fehler: Aufmultiplizieren führt zu Kalkulationsverlust",
        ],
      },
    ],
  },
  {
    id: "case-002",
    subject: "Recht",
    subjectColor: "#FF453A",
    difficulty: 2,
    title: "Sachmangel und Nacherfüllung",
    examHint: "Prüfungsrelevanz: ★★★★★ – Rang 2 Pareto Recht",
    scenario: `Die Bäckerei Müller kauft bei der Backtechnik GmbH einen Industrieofen für 18.000 € (Kaufvertrag vom 01.03.). Der Ofen wird am 10.03. geliefert und in Betrieb genommen. Bereits nach drei Wochen stellt Müller fest, dass der Ofen die vereinbarte Temperatur von 280 °C nicht erreicht – maximal 240 °C. Müller reklamiert schriftlich am 03.04. Die Backtechnik GmbH bietet eine Reparatur an, die jedoch nach zwei Versuchen (15.04. und 02.05.) scheitert.`,
    tasks: [
      {
        id: "t1",
        points: 6,
        question: "Liegt ein Sachmangel nach § 434 BGB vor? Begründen Sie kurz.",
        sampleAnswer: `Ja, es liegt ein Sachmangel vor. Der Ofen weist nicht die vereinbarte Beschaffenheit auf (§ 434 Abs. 1 S. 1 BGB): Die Vertragsparteien haben 280 °C als Sollbeschaffenheit vereinbart. Der Ofen erreicht nur 240 °C und ist damit mangelhaft.`,
        keyPoints: [
          "§ 434 BGB nennen",
          "Vereinbarte Beschaffenheit (280 °C) vs. tatsächliche (240 °C)",
          "Mangel liegt beim Gefahrübergang (Lieferung) vor",
        ],
      },
      {
        id: "t2",
        points: 10,
        question: "Welche Rechte stehen Müller nach dem zweiten Fehlschlag der Nacherfüllung zu? Nennen und erläutern Sie alle Optionen.",
        sampleAnswer: `Nach zweimaligem Fehlschlag der Nacherfüllung (§ 440 BGB) stehen Müller folgende Rechte zu:

1. Rücktritt (§ 323 BGB): Müller kann den Kaufvertrag rückabwickeln → Rückgabe Ofen, Rückzahlung 18.000 €.

2. Minderung (§ 441 BGB): Kaufpreis wird verhältnismäßig herabgesetzt (Wert mangelhaft / Wert mangelfrei × Kaufpreis).

3. Schadensersatz statt der Leistung (§ 280, 281 BGB): Ersatz des Schadens, der durch die mangelhafte Lieferung entstanden ist (z. B. entgangener Gewinn, Produktionsausfall).

4. Aufwendungsersatz (§ 284 BGB): Ersatz vergeblicher Aufwendungen.

Rücktritt und Minderung schließen sich gegenseitig aus. Schadensersatz kann mit Rücktritt kombiniert werden.`,
        keyPoints: [
          "Nacherfüllung ist gescheitert → Stufe 2",
          "Alle 4 Optionen nennen",
          "Rücktritt und Minderung ausschließen sich",
          "Schadensersatz kombinierbar mit Rücktritt",
        ],
      },
      {
        id: "t3",
        points: 4,
        question: "Wann verjähren die Mängelansprüche von Müller?",
        sampleAnswer: `Die Verjährungsfrist für Sachmängelansprüche beim Kauf beweglicher Sachen beträgt 2 Jahre ab Ablieferung (§ 438 Abs. 1 Nr. 3 BGB). Geliefert wurde am 10.03., also Verjährung am 10.03. (übernächstes Jahr).`,
        keyPoints: [
          "§ 438 Abs. 1 Nr. 3 BGB: 2 Jahre",
          "Beginn: Ablieferung (10.03.)",
          "Ausnahme: arglistiges Verschweigen → 3 Jahre",
        ],
      },
    ],
  },
  {
    id: "case-003",
    subject: "Unternehmensführung",
    subjectColor: "#30D158",
    difficulty: 2,
    title: "Personalplanung & Personalbeschaffung",
    examHint: "Prüfungsrelevanz: ★★★★★ – Rang 1 Pareto UF",
    scenario: `Die Logistik AG plant für das nächste Jahr ihren Personalbedarf in der Abteilung Lager (aktuell 40 MA). Bekannte Abgänge: 3 Rentner, 2 Kündigungen. Bekannte Zugänge: 1 Rückkehr aus Elternzeit. Aufgrund eines neuen Großkunden wird mit 15 % mehr Arbeit gerechnet. Die HR-Leiterin soll zudem zwei offene Stellen für Lagerleiter besetzen.`,
    tasks: [
      {
        id: "t1",
        points: 8,
        question: "Berechnen Sie den Netto-Personalbedarf der Abteilung Lager. Zeigen Sie den Rechenweg.",
        sampleAnswer: `Brutto-Personalbedarf:
Aktueller Bestand:     40 MA
+ 15% Mehrbedarf:    +  6 MA
= Brutto-Bedarf:       46 MA

Fortgeschriebener Bestand:
Aktueller Bestand:     40 MA
– Abgänge:           –  5 MA (3 Rente + 2 Kündigung)
+ Zugänge:           +  1 MA (Elternzeit)
= Fortg. Bestand:      36 MA

Netto-Personalbedarf:
46 – 36 = 10 MA müssen neu eingestellt werden`,
        keyPoints: [
          "Bruttobedarf = aktueller Bedarf + Mehrbedarf",
          "Fortgeschriebener Bestand = Bestand – Abgänge + Zugänge",
          "Nettobedarf = Brutto – fortgeschriebener Bestand",
          "Ergebnis: 10 Neueinstellungen",
        ],
      },
      {
        id: "t2",
        points: 8,
        question: "Nennen und erläutern Sie je zwei Vor- und Nachteile der internen vs. externen Personalrekrutierung für die Lagerleiter-Stellen.",
        sampleAnswer: `Interne Rekrutierung:
+ Kandidat kennt Unternehmenskultur und Prozesse → kurze Einarbeitungszeit
+ Motivationswirkung: Karrierechancen für bestehende Mitarbeiter
– Geringere Auswahlmöglichkeiten (kleinerer Kandidatenpool)
– Gefahr der Betriebsblindheit / fehlende Außenperspektive

Externe Rekrutierung:
+ Größerer Kandidatenpool, breitere Qualifikationen
+ Frische Impulse, neue Ideen und Außenperspektive
– Höhere Kosten (Stellenanzeige, Headhunter) und längere Einarbeitungszeit
– Unsicherheit bezüglich Eignung und Kulturfit`,
        keyPoints: [
          "Je 2 Vor-/Nachteile pro Weg",
          "Bezug auf die konkrete Situation (Lagerleiter)",
          "Unterschied in Kosten und Risiko thematisieren",
        ],
      },
    ],
  },
  {
    id: "case-004",
    subject: "VWL / BWL",
    subjectColor: "#FF9F0A",
    difficulty: 1,
    title: "Rechtsformvergleich KG vs. GmbH",
    examHint: "Prüfungsrelevanz: ★★★★☆ – Rang 1 Pareto VWL/BWL",
    scenario: `Zwei Unternehmer – Max (Kapital: 50.000 €) und Eva (Kapital: 30.000 €) – wollen gemeinsam ein Logistikunternehmen gründen. Max möchte aktiv im Unternehmen mitarbeiten, Eva lediglich investieren und ihr Risiko begrenzen. Beide überlegen, ob eine KG oder eine GmbH besser geeignet ist.`,
    tasks: [
      {
        id: "t1",
        points: 12,
        question: "Vergleichen Sie KG und GmbH anhand der Kriterien Haftung, Geschäftsführung, Mindestkapital und Gründungsaufwand. Welche Rechtsform empfehlen Sie und warum?",
        sampleAnswer: `Vergleich:
                    KG                    GmbH
Haftung:            Komplementär unbeschr. Alle: beschränkt auf Einlage
                    Kommanditist: Einlage
Geschäftsführung:   Komplementär           Geschäftsführer (kann Gesellschafter sein)
Mindestkapital:     keines                 25.000 €
Gründungsaufwand:   Gesellschaftsvertrag   Notarielle Beurkundung, HR-Eintrag

Empfehlung: KG
– Max = Komplementär (Geschäftsführung, unbeschränkte Haftung)
– Eva = Kommanditistin (Einlage 30.000 €, Haftung begrenzt, keine GF)
Dies entspricht den Wünschen beider: Max leitet aktiv, Eva schützt ihr Privatvermögen.`,
        keyPoints: [
          "Alle 4 Kriterien vergleichen",
          "Klare Rollenverteilung Max/Eva → KG passt",
          "GmbH wäre auch möglich, aber höherer Aufwand ohne zusätzlichen Nutzen",
          "Empfehlung mit Begründung",
        ],
      },
    ],
  },
];
