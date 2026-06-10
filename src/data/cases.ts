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
  {
    id: "case-005",
    subject: "Investition & Finanzierung",
    subjectColor: "#5E5CE6",
    difficulty: 3,
    title: "Kapitalwertmethode – Maschinenentscheidung",
    examHint: "Prüfungsrelevanz: ★★★★★ – HSQ Investition, fast immer geprüft",
    scenario: `Die Druckerei Schmidt GmbH prüft die Anschaffung einer neuen Druckmaschine (Anschaffungskosten: 120.000 €, Nutzungsdauer 4 Jahre, kein Restwert). Die erwarteten jährlichen Cashflows: Jahr 1: 35.000 €, Jahr 2: 40.000 €, Jahr 3: 42.000 €, Jahr 4: 38.000 €. Der Kalkulationszinssatz beträgt 8 %. Abzinsungsfaktoren (8 %): Jahr 1: 0,926 / Jahr 2: 0,857 / Jahr 3: 0,794 / Jahr 4: 0,735.`,
    tasks: [
      {
        id: "t1",
        points: 12,
        question: "Berechnen Sie den Kapitalwert der Investition. Ist die Investition vorteilhaft?",
        sampleAnswer: `Barwerte der Cashflows:
Jahr 1: 35.000 × 0,926 =  32.410 €
Jahr 2: 40.000 × 0,857 =  34.280 €
Jahr 3: 42.000 × 0,794 =  33.348 €
Jahr 4: 38.000 × 0,735 =  27.930 €
                         ─────────
Summe Barwerte:          127.968 €
– Anschaffungsauszahlung: 120.000 €
= Kapitalwert (KW):         7.968 €

Entscheidung: KW > 0 → Investition ist vorteilhaft.
Die Maschine erwirtschaftet mehr als die geforderte Mindestverzinsung von 8 %.`,
        keyPoints: [
          "Abzinsung jedes Cashflows mit dem jeweiligen Faktor",
          "Summe der Barwerte berechnen",
          "Kapitalwert = Barwertsumme – Anschaffungsauszahlung",
          "KW > 0 → Investition lohnt sich",
        ],
      },
      {
        id: "t2",
        points: 8,
        question: "Erläutern Sie den Unterschied zwischen Kapitalwertmethode, internem Zinsfuß und Amortisationsrechnung.",
        sampleAnswer: `Kapitalwertmethode: Diskontiert alle Cashflows mit vorgegebenem Kalkulationszinssatz auf t=0. KW > 0 = vorteilhaft. Absoluter Wert in Euro.

Interner Zinsfuß (IRR): Der Zinssatz, bei dem KW = 0. Zeigt die tatsächliche Verzinsung der Investition. Entscheidungsregel: IRR > Kalkulationszinssatz → vorteilhaft. Vergleich mehrerer Investitionen möglich.

Amortisationsrechnung: Zeitraum bis zur Rückgewinnung der Anschaffungsauszahlung. Einfach, aber ignoriert Cashflows nach Amortisation und Zeitwert des Geldes (statisch).`,
        keyPoints: [
          "KW-Methode: absoluter €-Wert, dynamisch",
          "IRR: relativer Zinssatz, dynamisch",
          "Amortisation: Zeitraum, statisch (kein Zeitwert)",
          "Für Entscheidungen: KW-Methode theoretisch überlegen",
        ],
      },
    ],
  },
  {
    id: "case-006",
    subject: "Logistik",
    subjectColor: "#30D158",
    difficulty: 2,
    title: "ABC-Analyse & Optimale Bestellmenge",
    examHint: "Prüfungsrelevanz: ★★★★★ – HSQ Logistik, Standardaufgabe",
    scenario: `Die Handels GmbH verkauft 5 Artikel mit folgenden Jahresdaten:

Artikel A: Jahresverbrauch 100 Stück, Einstandspreis 500 €
Artikel B: Jahresverbrauch 2.000 Stück, Einstandspreis 10 €
Artikel C: Jahresverbrauch 50 Stück, Einstandspreis 800 €
Artikel D: Jahresverbrauch 5.000 Stück, Einstandspreis 2 €
Artikel E: Jahresverbrauch 200 Stück, Einstandspreis 50 €

Für Artikel A gilt: Bestellkosten je Bestellung: 80 €, Lagerkostensatz: 20 % p.a.`,
    tasks: [
      {
        id: "t1",
        points: 10,
        question: "Führen Sie eine ABC-Analyse durch. Ordnen Sie die Artikel nach Jahreswert und klassifizieren Sie in A, B, C.",
        sampleAnswer: `Jahreswerte:
A: 100 × 500 =   50.000 €  → 31,3 %
C:  50 × 800 =   40.000 €  → 25,0 %
E: 200 ×  50 =   10.000 €  →  6,3 %
B: 2.000 × 10 =  20.000 €  → 12,5 %
D: 5.000 ×  2 =  10.000 €  →  6,3 %
Gesamtwert:     160.000 €

Sortiert nach Wert:
A (50.000 € / 31,3 %) → A-Artikel
C (40.000 € / 25,0 %) → A-Artikel (kumuliert 56,3 %)
B (20.000 € / 12,5 %) → B-Artikel (kumuliert 68,8 %)
E (10.000 € /  6,3 %) → B-Artikel (kumuliert 75,1 %)
D (10.000 € /  6,3 %) → C-Artikel

A-Artikel: A + C (2 Artikel = 40 % der Typen, 56 % des Wertes)
B-Artikel: B + E (40 % der Typen, 19 % des Wertes)
C-Artikel: D     (20 % der Typen, 6 % des Wertes)`,
        keyPoints: [
          "Jahreswert = Menge × Einstandspreis",
          "Absteigende Sortierung nach Wert",
          "Kumulierte Anteile berechnen",
          "A ≈ oberste 70-80 % des Wertes",
        ],
      },
      {
        id: "t2",
        points: 8,
        question: "Berechnen Sie die optimale Bestellmenge für Artikel A (Andler-Formel).",
        sampleAnswer: `Andler-Formel: q_opt = √(2 × M × Kf / (p × i))

q_opt = √(2 × 100 × 80 / (500 × 0,20))
q_opt = √(16.000 / 100)
q_opt = √160
q_opt ≈ 12,6 → aufgerundet 13 Stück je Bestellung

Optimale Bestellhäufigkeit: 100 / 13 ≈ 8 Bestellungen pro Jahr`,
        keyPoints: [
          "M = Jahresbedarf (100), Kf = Bestellkosten (80)",
          "p = Einstandspreis (500), i = Lagerkostensatz (0,20)",
          "Formel korrekt einsetzen",
          "Ergebnis aufrunden, Bestellhäufigkeit berechnen",
        ],
      },
    ],
  },
  {
    id: "case-007",
    subject: "Führung & Zusammenarbeit",
    subjectColor: "#FF453A",
    difficulty: 2,
    title: "Mitarbeitergespräch & Konfliktsituation",
    examHint: "Prüfungsrelevanz: ★★★★★ – Schwerpunkt mündliche HSQ-Prüfung",
    scenario: `Sarah Müller ist Teamleiterin bei der Software AG und hat ein Problem mit Mitarbeiter Thomas Koch (38, seit 5 Jahren im Unternehmen). Thomas war früher sehr motiviert und leistungsstark. Seit 3 Monaten ist seine Qualität deutlich schlechter, er ist häufiger krank (4 Fehltage/Monat), zieht sich aus dem Team zurück und wirkt demotiviert. Kollegen beschweren sich über seine Unzuverlässigkeit. Sarahs Vorgesetzter drängt auf Lösung.`,
    tasks: [
      {
        id: "t1",
        points: 8,
        question: "Analysieren Sie die Situation mit dem situativen Führungsmodell nach Hersey/Blanchard. Welchen Reifegrad hat Thomas aktuell und welchen Führungsstil sollte Sarah anwenden?",
        sampleAnswer: `Reifegradanalyse Thomas Koch:
• Können: Vorhanden (5 Jahre Erfahrung, war früher leistungsstark) → Können = hoch
• Wollen/Motivation: Stark gesunken (Rückzug, Qualitätsprobleme) → Wollen = niedrig

Reifegrad: R3 (kann, aber will nicht / demotiviert)

Empfohlener Führungsstil: S3 – PARTIZIPIEREN
• Hohe Beziehungsorientierung: Offenes Gespräch, Thomas' Perspektive verstehen
• Geringe Aufgabenorientierung: nicht anweisen, sondern gemeinsam Lösung erarbeiten
• Ziel: Ursache der Demotivation herausfinden, Unterstützung anbieten`,
        keyPoints: [
          "Reifegrad R3: kann + will nicht",
          "Führungsstil S3: Partizipieren",
          "Beziehungsorientierung betonen",
          "Ursachenforschung vor Sanktionen",
        ],
      },
      {
        id: "t2",
        points: 10,
        question: "Bereiten Sie das Mitarbeitergespräch mit Thomas vor. Nennen Sie Ziel, Struktur und konkrete Gesprächstechniken.",
        sampleAnswer: `ZIEL: Ursache der Verhaltensänderung herausfinden, gemeinsam Lösungsweg erarbeiten, Arbeitsverhältnis stabilisieren.

STRUKTUR:
1. Einstieg (5 Min): offene, wertschätzende Atmosphäre schaffen
   „Thomas, ich schätze unsere Zusammenarbeit sehr. Mir macht ich mir Sorgen um Sie – darf ich offen mit Ihnen sprechen?"

2. Problemdarstellung (10 Min): konkrete Fakten nennen (kein Vorwurf)
   „Mir ist aufgefallen, dass Sie in den letzten 3 Monaten häufiger krank waren und sich aus dem Team zurückgezogen haben."

3. Ursachenforschung (15 Min): aktives Zuhören, offene Fragen
   „Was hat sich bei Ihnen verändert?" / „Wie erleben Sie die Situation?"

4. Lösungsentwicklung (10 Min): gemeinsam, nicht verordnen
   Möglichkeiten: Aufgabenwechsel, Unterstützung, EAP-Programm, Gespräch mit Betriebsarzt

5. Vereinbarung (5 Min): konkrete, messbare Ziele schriftlich festhalten
   Nächster Gesprächstermin in 4 Wochen.

GESPRÄCHSTECHNIKEN: Aktives Zuhören, Ich-Botschaften, offene W-Fragen, Zusammenfassen`,
        keyPoints: [
          "5-Phasen-Struktur",
          "Fakten ohne Vorwürfe (Sachebene)",
          "Offene Fragen zur Ursachenfindung",
          "Gemeinsame Lösungserarbeitung",
          "Schriftliche Vereinbarung + Folgetermin",
        ],
      },
    ],
  },
  {
    id: "case-008",
    subject: "Rechnungswesen",
    subjectColor: "#007AFF",
    difficulty: 3,
    title: "Bilanzanalyse & Kennzahlen",
    examHint: "Prüfungsrelevanz: ★★★★★ – HSQ Controlling, regelmäßig geprüft",
    scenario: `Die Produkt AG weist folgende Bilanzdaten aus (in T€):

AKTIVA:                          PASSIVA:
Anlagevermögen:    800          Eigenkapital:          400
Vorräte:           200          Langfr. Verbindl.:     500
Forderungen aLuL:  150          Kurzfr. Verbindl.:     300
Kasse/Bank:         50          Rückstellungen:          0
─────────────────────          ──────────────────────────
Bilanzsumme:     1.200          Bilanzsumme:          1.200

Jahresüberschuss: 60 T€  |  Umsatz: 2.400 T€  |  FK-Zinsen: 30 T€`,
    tasks: [
      {
        id: "t1",
        points: 12,
        question: "Berechnen Sie folgende Kennzahlen: Eigenkapitalquote, Liquidität 1. Grades, Liquidität 2. Grades, Gesamtkapitalrendite (ROI).",
        sampleAnswer: `1. Eigenkapitalquote:
EK / Bilanzsumme × 100 = 400 / 1.200 × 100 = 33,3 %
(Richtwert: > 30 % = solide)

2. Liquidität 1. Grades (Cash Ratio):
Kasse/Bank / kurzfr. Verbindl. × 100 = 50 / 300 × 100 = 16,7 %
(Richtwert: 20 %; knapp unter Richtwert)

3. Liquidität 2. Grades (Quick Ratio):
(Kasse + Ford. aLuL) / kurzfr. Verbindl. × 100
= (50 + 150) / 300 × 100 = 66,7 %
(Richtwert: 100 %; deutlich darunter – Liquiditätsproblem!)

4. Gesamtkapitalrendite (ROI):
(JÜ + FK-Zinsen) / Bilanzsumme × 100
= (60 + 30) / 1.200 × 100 = 7,5 %`,
        keyPoints: [
          "EK-Quote: EK/BS × 100",
          "Liq. 1: nur flüssige Mittel / kfr. Verb.",
          "Liq. 2: flüssige Mittel + Ford. / kfr. Verb.",
          "ROI: (JÜ + Zinsen) / BS × 100",
        ],
      },
      {
        id: "t2",
        points: 8,
        question: "Beurteilen Sie die Finanzierungsstruktur anhand der Goldenen Bilanzregel und geben Sie eine Empfehlung.",
        sampleAnswer: `Goldene Bilanzregel: AV ≤ EK + lfr. FK

EK + lfr. FK = 400 + 500 = 900 T€
Anlagevermögen = 800 T€

800 ≤ 900 ✓ → Goldene Bilanzregel ist eingehalten.
Das AV ist durch langfristiges Kapital gedeckt.

ABER: Liquidität 2. Grades von 66,7 % (Richtwert 100 %) zeigt kurzfristige Engpässe.
Kurzfristige Verbindlichkeiten (300) übersteigen liquide Mittel + Forderungen (200) deutlich.

EMPFEHLUNG:
• Kurzfristige Verbindlichkeiten in langfristige umschulden
• Zahlungsziele mit Kunden verkürzen (Forderungsmanagement)
• Factoring als Option prüfen
• Lagerbestände reduzieren (ABC-Analyse)`,
        keyPoints: [
          "Formel: AV ≤ EK + lfr. FK prüfen",
          "Ergebnis: Regel eingehalten",
          "Aber: Liq. 2 problematisch",
          "Konkrete Handlungsempfehlungen",
        ],
      },
    ],
  },
  {
    id: "case-009",
    subject: "Marketing & Vertrieb",
    subjectColor: "#FF9F0A",
    difficulty: 2,
    title: "Internationales Marketing – Markteintritt",
    examHint: "Prüfungsrelevanz: ★★★★☆ – HSQ Marketing, international",
    scenario: `Die Bayern Brot GmbH (Umsatz 8 Mio. €, 60 MA) produziert hochwertige Bio-Backwaren. Der Geschäftsführer möchte den österreichischen Markt erschließen. Er überlegt zwischen drei Optionen:
A) Export über einen österreichischen Importeur
B) Gründung einer eigenen Vertriebsniederlassung in Wien
C) Franchising an bestehende österreichische Bäckereien`,
    tasks: [
      {
        id: "t1",
        points: 12,
        question: "Vergleichen Sie die drei Markteintrittsoptionen anhand der Kriterien Kapitalbedarf, Risiko, Kontrollmöglichkeit und Wachstumspotenzial.",
        sampleAnswer: `                  A: Importeur      B: Niederlassung    C: Franchising
Kapitalbedarf:    gering            sehr hoch           mittel
Risiko:           gering            hoch                gering
Kontrolle:        gering            hoch                mittel
Wachstumsp.:      begrenzt          sehr hoch           hoch
Marktkenntn.:     gering            hoch                mittel (Lokale Partner)

EMPFEHLUNG für Bayern Brot GmbH:
Option A als Einstieg: Geringes Risiko bei beschränkten Ressourcen; testen ob Markt reagiert.
Mittelfristig Option C (Franchising): skalierbar, Lokalkompetenz der Partner, geringerer Kapitalaufwand als eigene Niederlassung.

Begründung: Unternehmen ist mittelständisch → kein großes Risikokapital verfügbar. Stufenweiser Markteintritt reduziert Risiko.`,
        keyPoints: [
          "Alle 3 Optionen mit allen 4 Kriterien vergleichen",
          "Tabellarische Übersicht empfohlen",
          "Empfehlung mit konkreter Begründung",
          "Bezug auf Unternehmensgröße",
        ],
      },
      {
        id: "t2",
        points: 8,
        question: "Welche rechtlichen und kulturellen Besonderheiten müssen beim Markteintritt in Österreich beachtet werden?",
        sampleAnswer: `RECHTLICHES:
• Österreich ist EU-Mitglied → keine Zölle, freier Warenverkehr
• Österreichisches Lebensmittelrecht (Kennzeichnungspflichten auf Deutsch/Österreichisch)
• MwSt: 20 % Normalsatz (wie D), 10 % für Lebensmittel (wie D mit 7 %)
• Arbeitsrecht: ähnlich zu Deutschland, aber eigene KV-Tarife
• Gewerbeanmeldung: österreichisches Gewerberecht

KULTURELL:
• Sprache: Deutsch, aber eigene Ausdrücke (Erdäpfel, Semmel, Jänner)
• Kaufverhalten: Hohe Affinität zu regionalen Bio-Produkten → Positionierung als „bayrisch-natürlich" könnte gut passen
• Geschäftskultur: formeller als in Norddeutschland, persönliche Beziehungen wichtig

MARKETING: Bezeichnungen anpassen (Brötchen → Semmel), lokale Vertriebspartner als Türöffner`,
        keyPoints: [
          "EU-Raum: keine Zollprobleme",
          "Lebensmittelrecht beachten",
          "Kulturelle Unterschiede trotz gleicher Sprache",
          "Lokale Anpassung der Kommunikation",
        ],
      },
    ],
  },
];
