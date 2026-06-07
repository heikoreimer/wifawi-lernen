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
];

export function getFlashcardsByCategory(category: string): Flashcard[] {
  if (category === "all") return FLASHCARDS;
  return FLASHCARDS.filter((f) => f.category === category);
}

export function getRandomFlashcards(count: number, category = "all"): Flashcard[] {
  const pool = getFlashcardsByCategory(category);
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}
