import type { Flashcard } from "@/types";

export const FLASHCARDS: Flashcard[] = [
  // ─── Rechnungswesen ───────────────────────────────────────────────────────
  {
    id: "fc-rw-001", category: "rechnungswesen", tags: ["kalkulation", "industrie"],
    front: "Zuschlagskalkulation\nWelche Schritte führen vom Fertigungsmaterial zum Listenverkaufspreis?",
    back: "FM + MGK = Materialkosten\n+ FL + FGK = Herstellkosten I\n+ SFE = Herstellkosten II\n+ VwGK + VtGK = Selbstkosten\n+ Gewinn = Barverkaufspreis\n+ Kundenskonto = Zielverkaufspreis\n+ Kundenrabatt = Listenverkaufspreis (LVKP)",
    formula: "MGK% = (MGK / MEK) × 100",
  },
  {
    id: "fc-rw-002", category: "rechnungswesen", tags: ["break-even"],
    front: "Break-Even-Punkt\nWie berechnet man die Break-Even-Menge?",
    back: "Break-Even-Menge = Fixkosten ÷ Deckungsbeitrag je Stück\n\nAm Break-Even gilt:\nUmsatz = Gesamtkosten\nd. h. Gewinn = 0",
    formula: "xBE = Kf ÷ (p – kv)",
  },
  {
    id: "fc-rw-003", category: "rechnungswesen", tags: ["rentabilitaet"],
    front: "Rentabilitätskennzahlen\nWie lauten die Formeln für EK-, GK- und Umsatzrentabilität?",
    back: "EK-Rendite = Gewinn ÷ Eigenkapital × 100\n\nGK-Rendite = (Gewinn + FK-Zinsen) ÷ Gesamtkapital × 100\n\nUmsatzrentabilität = Gewinn ÷ Umsatz × 100",
    formula: "GK-R = (G + ZFK) / GK × 100",
  },
  {
    id: "fc-rw-004", category: "rechnungswesen", tags: ["deckungsbeitrag"],
    front: "Deckungsbeitragsrechnung\nWas ist der Unterschied zwischen db (klein) und DB (groß)?",
    back: "db (klein) = Deckungsbeitrag je Stück\ndb = Verkaufspreis – variable Stückkosten\n\nDB (groß) = Gesamtdeckungsbeitrag\nDB = db × Absatzmenge\n\nGewinn = DB – Fixkosten",
  },
  {
    id: "fc-rw-005", category: "rechnungswesen", tags: ["bab"],
    front: "Betriebsabrechnungsbogen (BAB)\nWofür wird der BAB verwendet?",
    back: "Der BAB dient zur:\n1. Verteilung der Gemeinkosten auf Kostenstellen\n2. Berechnung der Ist-Gemeinkostenzuschläge\n3. Grundlage für die Nachkalkulation\n\nKostenstellen: Material, Fertigung, Verwaltung, Vertrieb\nMethode: Stufenverfahren oder Anbauverfahren",
  },
  {
    id: "fc-rw-006", category: "rechnungswesen", tags: ["geschaeftsfaelle"],
    front: "Geschäftsvorfälle\nWas sind Aktivtausch, Passivtausch, Aktivmehrung und Passivmehrung?",
    back: "Aktivtausch: Aktiv ↑ und Aktiv ↓ (Bilanzsumme gleich)\nPassivtausch: Passiv ↑ und Passiv ↓ (Bilanzsumme gleich)\nAktivmehrung + Passivmehrung: Aktiv ↑ und Passiv ↑ (Bilanzsumme steigt)\nAktivminderung + Passivminderung: Aktiv ↓ und Passiv ↓ (Bilanzsumme sinkt)",
  },

  // ─── Recht ────────────────────────────────────────────────────────────────
  {
    id: "fc-re-001", category: "recht", tags: ["vertragsrecht", "kaufvertrag"],
    front: "Sachmangel\nWann liegt ein Sachmangel nach § 434 BGB vor?",
    back: "Sachmangel liegt vor, wenn die Sache:\n• nicht die vereinbarte Beschaffenheit hat\n• nicht für die vertraglich vorausgesetzte Verwendung geeignet ist\n• nicht für die gewöhnliche Verwendung geeignet ist\n• nicht die übliche Beschaffenheit aufweist, die der Käufer erwarten kann",
  },
  {
    id: "fc-re-002", category: "recht", tags: ["vertragsrecht"],
    front: "Wirksamkeit eines Vertrags\nWelche Voraussetzungen braucht ein wirksamer Vertrag?",
    back: "1. Zwei übereinstimmende Willenserklärungen (Angebot + Annahme)\n2. Geschäftsfähigkeit beider Parteien\n3. Keine Nichtigkeit (§ 134, § 138 BGB)\n4. Einhaltung der Formvorschriften (falls vorgeschrieben)\n5. Keine erfolgreiche Anfechtung",
  },
  {
    id: "fc-re-003", category: "recht", tags: ["arbeitsrecht"],
    front: "Ordentliche Kündigung\nWas sind die Voraussetzungen nach dem KSchG?",
    back: "KSchG gilt ab: 10+ Arbeitnehmer, 6+ Monate Betriebszugehörigkeit\n\nKündigungsgründe (§ 1 KSchG):\n• Personenbedingt (z. B. Krankheit)\n• Verhaltensbedingt (Abmahnung erforderlich)\n• Betriebsbedingt (wirtschaftliche Gründe)\n\nForm: schriftlich (§ 623 BGB)\nAnhörung des Betriebsrats erforderlich",
  },
  {
    id: "fc-re-004", category: "recht", tags: ["hgb"],
    front: "Prokura\nWas darf ein Prokurist und was nicht?",
    back: "Prokurist darf (§ 49 HGB):\n✓ Alle gewöhnlichen und außergewöhnlichen Handelsgeschäfte\n✓ Grundstücke belasten/verkaufen NUR mit ausdrücklicher Ermächtigung\n\nProkürist darf NICHT:\n✗ Das Unternehmen veräußern\n✗ Prokura erteilen/widerrufen\n✗ Firmenänderung vornehmen\n\nErteilung: nur durch Inhaber, ins Handelsregister",
  },
  {
    id: "fc-re-005", category: "recht", tags: ["steuern", "umsatzsteuer"],
    front: "Umsatzsteuer\nWas ist der Unterschied zwischen Umsatzsteuerschuld und Vorsteuer?",
    back: "Umsatzsteuer (USt): Steuer auf eigene Ausgangsleistungen (Verkäufe)\n→ Unternehmen schuldet diese dem Finanzamt\n\nVorsteuer: USt auf eigene Eingangsleistungen (Einkäufe)\n→ Unternehmen kann diese vom FA zurückfordern\n\nUSt-Zahllast = USt-Schuld – Vorsteuer",
    formula: "Zahllast = USt aus Verkäufen − VSt aus Einkäufen",
  },
  {
    id: "fc-re-006", category: "recht", tags: ["inso"],
    front: "Insolvenzverfahren\nWann wird ein Insolvenzantrag gestellt und welche Ziele hat das Verfahren?",
    back: "Insolvenzgründe (§§ 17-19 InsO):\n• Zahlungsunfähigkeit (§ 17) – Hauptgrund\n• Drohende Zahlungsunfähigkeit (§ 18)\n• Überschuldung (§ 19) – nur juristische Personen\n\nZiele: Gläubigerbefriedigung, ggf. Sanierung\nAntragspflicht: Geschäftsführer bei GmbH innerhalb 3 Wochen",
  },

  // ─── Unternehmensführung / BWL ────────────────────────────────────────────
  {
    id: "fc-uf-001", category: "personal", tags: ["fuehrung", "organisation"],
    front: "Divisionalorganisation vs. Matrixorganisation\nWas sind die wesentlichen Unterschiede?",
    back: "Divisionalorganisation:\n+ Spartenautonomie, klare Verantwortung\n– Doppelarbeit, Koordinationsaufwand\nStruktur: nach Produkten, Regionen oder Kunden\n\nMatrixorganisation:\n+ Optimale Ressourcennutzung, Flexibilität\n– Kompetenzstreitigkeiten, zwei Vorgesetzte\nStruktur: funktional + projektorientiert",
  },
  {
    id: "fc-uf-002", category: "personal", tags: ["fuehrung"],
    front: "Autoritärer vs. kooperativer Führungsstil\nWas sind die Hauptunterschiede?",
    back: "Autoritär:\n• Entscheidungen beim Vorgesetzten\n• Klare Anweisungen, wenig Mitsprache\n• Vorteil: schnell, klare Verantwortung\n• Nachteil: demotivierend, hohe Fluktuation\n\nKooperativ:\n• Mitarbeiter werden einbezogen\n• Delegation, Zielvereinbarung\n• Vorteil: Motivation, Kreativität\n• Nachteil: zeitaufwendig, erfordert reife MA",
  },
  {
    id: "fc-uf-003", category: "bwl", tags: ["swot"],
    front: "SWOT-Analyse\nWas bedeutet SWOT und wie werden die Felder verknüpft?",
    back: "S = Strengths (Stärken) – intern\nW = Weaknesses (Schwächen) – intern\nO = Opportunities (Chancen) – extern\nT = Threats (Risiken) – extern\n\nStrategien:\n• SO: Stärken nutzen, Chancen ergreifen\n• ST: Stärken nutzen, Risiken abwehren\n• WO: Schwächen abbauen, Chancen nutzen\n• WT: Schwächen minimieren, Risiken vermeiden",
  },
  {
    id: "fc-uf-004", category: "bwl", tags: ["vwl", "konjunktur"],
    front: "Konjunkturphasen\nWelche vier Phasen hat der Konjunkturzyklus?",
    back: "1. Aufschwung (Expansion):\n   ↑ BIP, ↓ Arbeitslosigkeit, ↑ Investitionen\n\n2. Boom (Hochkonjunktur):\n   Vollbeschäftigung, steigende Preise\n\n3. Abschwung (Rezession):\n   ↓ BIP (2 Quartale), ↑ Arbeitslosigkeit\n\n4. Depression (Tiefpunkt):\n   niedrige Produktion, hohe Arbeitslosigkeit",
  },
  {
    id: "fc-uf-005", category: "bwl", tags: ["rechtsformen"],
    front: "Rechtsformen: KG\nWer haftet wie in einer Kommanditgesellschaft?",
    back: "Komplementär:\n• Haftet unbeschränkt, persönlich, gesamtschuldnerisch\n• Geschäftsführungs- und Vertretungsbefugnis\n\nKommanditist:\n• Haftet nur bis zur Haftsumme (Einlage)\n• Keine Geschäftsführung (nur Kontrollrechte)\n• Nach vollständiger Einzahlung: keine weitere Haftung\n\nMindestkapital: keins vorgeschrieben",
  },
  {
    id: "fc-uf-006", category: "marketing", tags: ["distribution"],
    front: "Direkter vs. indirekter Absatzweg\nWas sind die Vor- und Nachteile?",
    back: "Direkt (Hersteller → Endkunde):\n+ Höhere Marge, direkter Kundenkontakt, volle Kontrolle\n– Hoher Aufwand, Kapitalbedarf, eigener Vertrieb nötig\n\nIndirekt (über Handel/Zwischenstufen):\n+ Größere Reichweite, geringerer Aufwand\n– Gewinnabgabe, Abhängigkeit vom Handel",
  },

  // ─── HSQ spezifisch ───────────────────────────────────────────────────────
  {
    id: "fc-hsq-001", category: "marketing", tags: ["hsq", "projekt"],
    front: "Projektphasen\nWelche Phasen hat ein Projekt und was passiert jeweils?",
    back: "1. Initiierung: Projektidee, Machbarkeitsprüfung, Projektauftrag\n2. Planung: Ziele, Meilensteine, Ressourcen, Risikoanalyse\n3. Durchführung: Umsetzung, Steuerung, Dokumentation\n4. Abschluss: Abnahme, Dokumentation, Lessons Learned\n\nMagisches Dreieck: Zeit ↔ Kosten ↔ Qualität",
  },
  {
    id: "fc-hsq-002", category: "personal", tags: ["hsq", "konflikt"],
    front: "4-Seiten-Modell (Schulz von Thun)\nWelche vier Ebenen hat jede Nachricht?",
    back: "Jede Nachricht hat vier Ebenen:\n1. Sachinhalt: Was wird mitgeteilt? (Fakten)\n2. Selbstoffenbarung: Was verrät der Sender über sich?\n3. Beziehungsseite: Wie steht Sender zum Empfänger?\n4. Appell: Was soll der Empfänger tun/denken?\n\n'Empfänger hat 4 Ohren' – Missverständnisse entstehen durch unterschiedliche Empfangsebene",
  },

  // ─── Neue Karten: Geldpolitik & VWL ──────────────────────────────────────
  {
    id: "fc-vwl-001", category: "bwl", tags: ["geldpolitik", "ezb"],
    front: "EZB-Geldpolitik\nWelche Instrumente hat die EZB und was bewirken sie?",
    back: "1. Leitzins (Hauptrefinanzierungssatz):\n   ↓ Zins → günstige Kredite → mehr Investitionen → Inflation ↑\n   ↑ Zins → teure Kredite → weniger Konsum → Inflation ↓\n\n2. Mindestreservesatz: Pflichtanteil, den Banken bei EZB parken\n\n3. Offenmarktpolitik: An-/Verkauf von Staatsanleihen\n   Kauf = Geld fließt in Wirtschaft (QE)\n\nZiel: Inflation ≈ 2 %",
    formula: "Leitzins ↓ → Kredite günstiger → Inflation ↑",
  },
  {
    id: "fc-vwl-002", category: "bwl", tags: ["elastizitaet", "vwl"],
    front: "Preiselastizität der Nachfrage\nFormel und Interpretation",
    back: "e = (ΔNachfrage% / ΔPreis%)\n\n|e| > 1: elastisch\n→ Nachfrage reagiert stark (Luxusgüter, leicht substituierbar)\n→ Preiserhöhung → Umsatz sinkt\n\n|e| < 1: unelastisch\n→ Nachfrage reagiert kaum (Brot, Benzin, Zigaretten)\n→ Preiserhöhung → Umsatz steigt\n\n|e| = 1: proportional",
    formula: "e = %ΔMenge / %ΔPreis",
  },
  {
    id: "fc-vwl-003", category: "bwl", tags: ["rechtsformen", "vergleich"],
    front: "Rechtsformen-Schnellvergleich\nGbR / KG / GmbH / AG",
    back: "GbR: kein Kapital, keine HR, alle haften unbeschr.\n\nKG: Komplementär unbeschr., Kommanditist bis Einlage\nkein Mindestkapital\n\nGmbH: 25.000 € MK, beschränkte Haftung\nGeschäftsführer + Gesellschafterversammlung\n\nAG: 50.000 € MK, Vorstand + Aufsichtsrat + HV\nAktien frei handelbar (bei Börsennotierung)",
  },
  {
    id: "fc-vwl-004", category: "bwl", tags: ["existenzgruendung"],
    front: "Businessplan\nWelche 6 Kernbestandteile muss er enthalten?",
    back: "1. Executive Summary (1 Seite)\n2. Geschäftsidee + Produkt/Dienstleistung\n3. Marktanalyse (Zielgruppe, Wettbewerb, SWOT)\n4. Marketing- und Vertriebsstrategie\n5. Rechtsform + Organisationsstruktur\n6. Finanzplan:\n   • Kapitalbedarfsplan\n   • Rentabilitätsvorschau (3 Jahre)\n   • Liquiditätsplanung (12 Monate)",
  },

  // ─── Neue Karten: Buchführung & Bilanz ───────────────────────────────────
  {
    id: "fc-buch-001", category: "rechnungswesen", tags: ["buchfuehrung", "bilanz"],
    front: "Bilanzstruktur\nWas steht auf Aktiv- und Passivseite?",
    back: "AKTIVA (Mittelverwendung):\n• Anlagevermögen: Sachanlagen, immaterielle AV, Finanzanlagen\n• Umlaufvermögen: Vorräte, Ford. aLuL, Kasse/Bank\n• RAP (Aktiver Rechnungsabgrenzungsposten)\n\nPASSIVA (Mittelherkunft):\n• Eigenkapital: Stammkapital + Rücklagen + Jahresüberschuss\n• Rückstellungen\n• Verbindlichkeiten: LFK, KFK\n• RAP (Passiver)\n\nBilanzsumme Aktiva = Passiva",
  },
  {
    id: "fc-buch-002", category: "rechnungswesen", tags: ["buchfuehrung", "buchungssatz"],
    front: "Buchungssätze – die 4 Grundfälle",
    back: "1. Aktivtausch: Aktiv ↑ / Aktiv ↓\n   (Bank / Kasse: Geld zur Bank gebracht)\n\n2. Passivtausch: Passiv ↑ / Passiv ↓\n   (Verbindl. → Darlehen umgeschuldet)\n\n3. Aktivmehrung + Passivmehrung: Aktiv ↑ / Passiv ↑\n   (Maschine / Darlehen: Kauf auf Kredit)\n\n4. Aktivminderung + Passivminderung: Aktiv ↓ / Passiv ↓\n   (Verbindl. / Bank: Rechnung bezahlt)\n\nBilanzsumme bleibt bei 1 + 2 gleich, ändert sich bei 3 + 4",
  },
  {
    id: "fc-buch-003", category: "rechnungswesen", tags: ["guv", "jahresabschluss"],
    front: "GuV – Aufbau nach dem Gesamtkostenverfahren",
    back: "Umsatzerlöse\n± Bestandsveränderungen\n+ Andere aktivierte Eigenleistungen\n= Gesamtleistung\n– Materialaufwand\n– Personalaufwand\n– Abschreibungen\n– sonstige betriebliche Aufwendungen\n= EBIT (Betriebsergebnis)\n± Finanzergebnis (Zinsen)\n= EBT\n– Steuern\n= Jahresüberschuss/Jahresfehlbetrag",
    formula: "EBIT = Umsatz – operative Kosten",
  },

  // ─── Neue Karten: Investition & Finanzierung ─────────────────────────────
  {
    id: "fc-inv-001", category: "rechnungswesen", tags: ["investition", "kapitalwert"],
    front: "Kapitalwertmethode (NPV)\nFormel und Entscheidungsregel",
    back: "KW = Σ [ CFt / (1 + i)^t ] – I₀\n\nCFt = Cashflow in Periode t\ni = Kalkulationszinssatz\nI₀ = Anfangsinvestition\n\nEntscheidung:\nKW > 0 → Investition lohnt sich\nKW < 0 → nicht investieren\nKW = 0 → genau rentabel\n\nBei mehreren Alternativen: höchster KW bevorzugen",
    formula: "KW = Σ(CFt/(1+i)^t) – I₀",
  },
  {
    id: "fc-inv-002", category: "rechnungswesen", tags: ["finanzierung", "leasing"],
    front: "Finanzierungsformen im Überblick",
    back: "Innenfinanzierung:\n• Selbstfinanzierung (Gewinnthesaurierung)\n• Abschreibungsfinanzierung\n• Rückstellungsfinanzierung\n\nAußenfinanzierung:\n• Eigenfinanzierung: Einlagen, Kapitalerhöhung, Börsengang\n• Fremdfinanzierung: Bankkredit, Anleihe, Schuldscheindarlehen\n• Mezzanine: Nachrangdarlehen, stille Beteiligung\n\nSonderformen: Leasing (off-balance), Factoring (Forderungsverkauf)",
  },

  // ─── Neue Karten: Lean, BSC, TQM ─────────────────────────────────────────
  {
    id: "fc-lean-001", category: "bwl", tags: ["lean", "kvp"],
    front: "Lean Management – die 7 Verschwendungsarten (Muda)",
    back: "Eselsbrücke: T-W-O-Ü-B-B-F\n\n1. Transport (unnötige Transporte)\n2. Wartezeiten\n3. Überproduktion (schlimmste Verschwendung)\n4. Überbearbeitung (mehr als nötig)\n5. Bestände (gebundenes Kapital)\n6. Bewegung (unnötige Wege der MA)\n7. Fehler/Ausschuss (Nacharbeit)\n\n5S-Methode: Sortieren, Setzen, Säubern, Standardisieren, Selbstdisziplin",
  },
  {
    id: "fc-bsc-001", category: "bwl", tags: ["bsc", "controlling"],
    front: "Balanced Scorecard\n4 Perspektiven + typische Kennzahlen",
    back: "1. FINANZPERSPEKTIVE\n   KPIs: ROE, EVA, Umsatzwachstum, Cashflow\n\n2. KUNDENPERSPEKTIVE\n   KPIs: Kundenzufriedenheit, Marktanteil, Wiederkaufrate\n\n3. INTERNE PROZESSPERSPEKTIVE\n   KPIs: Durchlaufzeit, Fehlerquote, Innovationsrate\n\n4. LERN- & ENTWICKLUNGSPERSPEKTIVE\n   KPIs: MA-Zufriedenheit, Schulungsstunden, Fluktuationsrate\n\nStrategie wird in messbare Ziele pro Perspektive übersetzt",
  },

  // ─── Neue Karten: Logistik ────────────────────────────────────────────────
  {
    id: "fc-log-001", category: "bwl", tags: ["logistik", "abc"],
    front: "ABC-Analyse\nKlassifizierung und Konsequenzen",
    back: "A-ARTIKEL (~20 % der Teile = ~80 % des Wertes):\n→ intensive Bestandssteuerung, häufige Bestellungen\n→ exakte Bedarfsermittlung (deterministisch)\n\nB-ARTIKEL (~30 % = ~15 % Wert):\n→ mittlerer Aufwand, stochastische Methoden ok\n\nC-ARTIKEL (~50 % = ~5 % Wert):\n→ einfache Verwaltung, Sammelbestellungen\n→ höhere Sicherheitsbestände tolerierbar\n\nXYZ ergänzt: X = konstant, Y = schwankend, Z = unregelmäßig",
    formula: "A-Artikel: 20% Teile → 80% Wert",
  },
  {
    id: "fc-log-002", category: "bwl", tags: ["logistik", "lagerkennzahlen"],
    front: "Lagerkennzahlen\nFormeln und Interpretation",
    back: "Lagerumschlagshäufigkeit:\nLU = Jahresverbrauch / Ø-Lagerbestand\n→ Hoch = effizient, aber Fehlmengenrisiko\n\nLagerreichweite:\nLR = 360 / LU (in Tagen)\n→ Wie lange reicht der Bestand?\n\nLagerkostensatz:\nLKS = Lagerkosten / Ø-Lagerbestand × 100 (%)\n→ Typisch: 20–30 % p.a.\n\nOptimaler Bestellpunkt:\nMeldebestand = Tagesverbrauch × Lieferzeit + Sicherheitsbestand",
    formula: "LU = Jahresverbrauch / Ø-Lagerbestand",
  },

  // ─── Neue Karten: Führung & Zusammenarbeit ───────────────────────────────
  {
    id: "fc-fz-001", category: "personal", tags: ["fuehrung", "situativ"],
    front: "Situativer Führungsstil (Hersey/Blanchard)\n4 Stile nach Reifegrad",
    back: "Reifegrad = Können + Wollen des Mitarbeiters\n\nR1 (niedrig): kann nicht + will nicht/unsicher\n→ S1 ANWEISEN (hohe Aufgaben-, geringe Beziehungsorient.)\n\nR2: kann nicht + will (motiviert)\n→ S2 ÜBERZEUGEN (hoch/hoch)\n\nR3: kann + will nicht (demotiviert)\n→ S3 PARTIZIPIEREN (gering/hoch)\n\nR4 (hoch): kann + will\n→ S4 DELEGIEREN (gering/gering)\n\nKein Führungsstil ist immer richtig!",
  },
  {
    id: "fc-fz-002", category: "personal", tags: ["aevo", "ausbildung"],
    front: "4-Stufen-Methode der Unterweisung\nWie unterweist man korrekt?",
    back: "Stufe 1: VORBEREITEN\n→ Lernziel erklären, Interesse wecken, Vorkenntnisse abfragen\n\nStufe 2: VORMACHEN + ERKLÄREN\n→ Ausbilder zeigt langsam, erklärt jeden Schritt\n\nStufe 3: NACHMACHEN LASSEN + KORRIGIEREN\n→ Auszubildender führt aus, Ausbilder beobachtet + korrigiert\n\nStufe 4: ÜBEN LASSEN + ERFOLGSKONTROLLE\n→ Selbstständige Ausführung, Feedback geben\n\nGrundsatz: Vom Einfachen zum Schwierigen",
  },
  {
    id: "fc-fz-003", category: "personal", tags: ["praesentation"],
    front: "Präsentation in der IHK-Prüfung\nStruktur und Zeitplan (10+20 Min)",
    back: "EINLEITUNG (ca. 1,5 Min):\n• Begrüßung, Thema, Gliederung nennen\n• Aufmerksamkeit wecken (Frage/Zitat)\n\nHAUPTTEIL (ca. 7 Min):\n• 3 Kernpunkte strukturiert\n• Visualisierung (Flipchart/Folie)\n• Übergänge ankündigen\n\nSCHLUSS (ca. 1,5 Min):\n• Zusammenfassung, Fazit\n• Einleitung in Fachgespräch\n\nFACHGESPRÄCH (20 Min):\n• Rückfragen zur Präsentation\n• Transferfragen aus Praxis",
  },
  {
    id: "fc-fz-004", category: "personal", tags: ["moderation"],
    front: "Moderationsmethoden\nWelche Techniken aktivieren Gruppen?",
    back: "KARTENABFRAGE:\n→ jeder schreibt anonym auf Karte → clustern an Pinnwand\n→ Vorteil: alle beteiligen sich gleichzeitig\n\nBRAINSTORMING:\n→ freies Sammeln, keine Kritik, Quantität vor Qualität\n\nKLEINGRUPPENARBEIT:\n→ 3-5 Personen, dann Präsentation im Plenum\n\nPUNKTABFRAGE:\n→ Priorisierung durch Klebepunkte auf Lösungen\n\nFISHBONE-DIAGRAMM:\n→ Ursache-Wirkungs-Analyse (Ishikawa)",
  },

  // ─── Neue Karten: Recht ───────────────────────────────────────────────────
  {
    id: "fc-re-007", category: "recht", tags: ["handelsrecht", "hgb"],
    front: "Kaufmannsarten nach HGB\nIstkaufmann, Kannkaufmann, Formkaufmann",
    back: "ISTKAUFMANN (§ 1 HGB):\n→ Betreibt Handelsgewerbe (kaufmännisch eingerichteter Betrieb)\n→ Pflicht: HR-Eintragung\n\nKANNKAUFMANN (§ 2 HGB):\n→ Kleingewerbe, freiwillige HR-Eintragung\n→ Erst nach Eintragung: alle Kaufmannspflichten\n\nFORMKAUFMANN (§ 6 HGB):\n→ Kraft Rechtsform: GmbH, AG, OHG, KG\n→ Immer Vollkaufmann, unabhängig von Tätigkeit\n\nPflichten: Buchführung (§ 238 HGB), Jahresabschluss, Handelsbriefaufbewahrung",
  },
  {
    id: "fc-re-008", category: "recht", tags: ["tarifrecht", "arbeitsrecht"],
    front: "Tarifvertrag\nArten und Günstigkeitsprinzip",
    back: "TARIFVERTRAGSARTEN:\n• Manteltarifvertrag: allg. Arbeitsbedingungen (Urlaub, Kündigung)\n• Entgelttarifvertrag: Lohn/Gehalt\n• Rahmentarifvertrag: Eingruppierung\n\nBINDUNG: gilt für Mitglieder beider Parteien\nAllgemeinverbindlichkeit: Bundesministerium dehnt TV aus\n\nGÜNSTIGKEITSPRINZIP:\n→ Abweichungen zu GUNSTEN des AN immer möglich\n→ Abweichungen zum NACHTEIL des AN nur per Öffnungsklausel\n\nHIEARCHIE: Gesetz > Tarifvertrag > Betriebsvereinbarung > Arbeitsvertrag",
  },

  // ─── Neue Karten: Steuern ─────────────────────────────────────────────────
  {
    id: "fc-st-001", category: "steuern", tags: ["einkommensteuer", "lohnsteuer"],
    front: "Einkommensteuer – 7 Einkunftsarten",
    back: "§ 2 EStG:\n1. Einkünfte aus Land- und Forstwirtschaft\n2. Gewerbebetrieb\n3. Selbstständiger Arbeit (Freiberufler)\n4. Nichtselbstständiger Arbeit (Lohn/Gehalt)\n5. Kapitalvermögen (Dividenden, Zinsen → KESt 25 %)\n6. Vermietung und Verpachtung\n7. Sonstige Einkünfte (Renten, Spekulationsgewinne)\n\nLohnsteuer = Vorauszahlung auf ESt\nJahresausgleich via Steuererklärung",
  },
  {
    id: "fc-st-002", category: "steuern", tags: ["sozialversicherung"],
    front: "Sozialversicherung\n5 Zweige + aktuelle Beitragssätze",
    back: "1. Krankenversicherung (KV): ~14,6 % + Zusatzbeitrag → je ½ AG/AN\n2. Rentenversicherung (RV): 18,6 % → je ½\n3. Arbeitslosenversicherung (AV): 2,6 % → je ½\n4. Pflegeversicherung (PV): ~3,4 % → je ½ (Kinderlose +0,6 %)\n5. Unfallversicherung (UV): nur AG → je nach Berufsgenossenschaft\n\nBeitragsbemessungsgrenze (BBG):\nKV/PV: ~66.600 €/Jahr\nRV/AV: ~90.600 € (West)\n\nMinijobbende: pauschal 30 % AG-Abgaben",
    formula: "AG + AN jeweils ~ca. 20 % vom Brutto",
  },
];

export function getFlashcardsByCategory(category: string): Flashcard[] {
  if (category === "all") return FLASHCARDS;
  return FLASHCARDS.filter((f) => f.category === category);
}

export function getRandomFlashcards(count: number, category = "all"): Flashcard[] {
  const pool = getFlashcardsByCategory(category);
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}
