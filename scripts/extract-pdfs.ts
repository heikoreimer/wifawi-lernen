#!/usr/bin/env tsx
/**
 * PDF Extraction Script
 *
 * Usage:
 *   npx tsx scripts/extract-pdfs.ts
 *
 * Lege deine Unterrichts-PDFs in: public/pdfs/
 * Output wird in: src/data/ gespeichert
 */

import * as fs from "fs";
import * as path from "path";
// @ts-ignore – wird via `npm install pdf-parse` installiert
import pdfParse from "pdf-parse";

const PDF_DIR = path.join(process.cwd(), "public", "pdfs");
const OUTPUT_DIR = path.join(process.cwd(), "src", "data");

interface RawExtract {
  filename: string;
  text: string;
  pages: number;
}

async function extractPDF(filePath: string): Promise<RawExtract> {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return {
    filename: path.basename(filePath),
    text: data.text,
    pages: data.numpages,
  };
}

async function main() {
  if (!fs.existsSync(PDF_DIR)) {
    console.error(`PDF-Verzeichnis nicht gefunden: ${PDF_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(PDF_DIR).filter((f) => f.endsWith(".pdf"));
  if (files.length === 0) {
    console.log("Keine PDFs gefunden. Lege PDFs in public/pdfs/ ab.");
    return;
  }

  console.log(`\n📄 Gefundene PDFs: ${files.length}\n`);

  const extracts: RawExtract[] = [];

  for (const file of files) {
    console.log(`Verarbeite: ${file}`);
    const extract = await extractPDF(path.join(PDF_DIR, file));
    extracts.push(extract);
    console.log(`  ✓ ${extract.pages} Seiten, ${extract.text.length} Zeichen`);
  }

  // Save raw text for manual review / LLM processing
  const rawOutput = path.join(OUTPUT_DIR, "raw-extracts.json");
  fs.writeFileSync(rawOutput, JSON.stringify(extracts, null, 2), "utf-8");
  console.log(`\n✅ Rohtext gespeichert: ${rawOutput}`);

  // Save combined text for LLM prompt
  const combinedText = extracts
    .map((e) => `=== ${e.filename} ===\n\n${e.text}`)
    .join("\n\n");
  const textOutput = path.join(OUTPUT_DIR, "combined-content.txt");
  fs.writeFileSync(textOutput, combinedText, "utf-8");
  console.log(`✅ Kombinierter Text: ${textOutput}`);

  console.log(`
╔══════════════════════════════════════════════════════════════╗
║  NÄCHSTER SCHRITT: LLM-Verarbeitung                        ║
║                                                             ║
║  1. Öffne src/data/combined-content.txt                    ║
║  2. Gib dem Text an Claude mit dem Prompt:                  ║
║     "Erstelle aus diesem Text:                              ║
║      a) 50 Multiple-Choice-Fragen als JSON-Array            ║
║         (Felder: id, category, question, options[4],        ║
║          correctIndex, explanation, difficulty)              ║
║      b) 50 Karteikarten als JSON-Array                      ║
║         (Felder: id, category, front, back, formula?,        ║
║          tags[])"                                            ║
║  3. Speichere die Ergebnisse in:                            ║
║     - src/data/questions/questions.json                     ║
║     - src/data/flashcards/flashcards.json                   ║
╚══════════════════════════════════════════════════════════════╝
`);
}

main().catch(console.error);
