/**
 * Seed the knowledge base from PDFs in data/pdfs/.
 *
 * Prerequisites:
 *   npm install pdf-parse @types/pdf-parse
 *
 * Usage:
 *   npx tsx scripts/seed-knowledge.ts
 *
 * Place PDF files in data/pdfs/ before running. Each PDF filename becomes
 * the source document name (without extension). Output is written to
 * data/knowledge/chunks.json, merging with any existing sample chunks that
 * don't have a matching source document in the PDFs.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, basename, extname } from "path";

interface Chunk {
  id: string;
  source: string;
  section: string;
  text: string;
}

const CHUNK_TARGET_CHARS = 2000; // ~500 tokens
const OVERLAP_CHARS = 200;       // ~50 tokens

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function chunkText(text: string, source: string): Chunk[] {
  // Split into rough sections by double newlines or page breaks
  const paragraphs = text
    .replace(/\f/g, "\n\n")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40);

  const chunks: Chunk[] = [];
  let buffer = "";
  let chunkIndex = 0;

  function flush() {
    const trimmed = buffer.trim();
    if (trimmed.length < 80) return;
    chunks.push({
      id: `${slugify(source)}-${String(chunkIndex).padStart(3, "0")}`,
      source,
      section: `Chunk ${chunkIndex + 1}`,
      text: trimmed,
    });
    chunkIndex++;
  }

  for (const para of paragraphs) {
    if (buffer.length + para.length > CHUNK_TARGET_CHARS) {
      flush();
      // Keep overlap from end of previous buffer
      buffer = buffer.slice(-OVERLAP_CHARS) + "\n\n" + para;
    } else {
      buffer = buffer ? buffer + "\n\n" + para : para;
    }
  }
  flush();

  return chunks;
}

async function extractPdf(pdfPath: string): Promise<string> {
  // Dynamically require pdf-parse so the script gives a clear error if missing
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  let pdfParse: (buf: Buffer) => Promise<{ text: string }>;
  try {
    pdfParse = require("pdf-parse");
  } catch {
    throw new Error(
      "pdf-parse is not installed. Run: npm install pdf-parse @types/pdf-parse"
    );
  }
  const buffer = readFileSync(pdfPath);
  const data = await pdfParse(buffer);
  return data.text;
}

async function main() {
  const pdfsDir = join(process.cwd(), "data", "pdfs");
  const knowledgeDir = join(process.cwd(), "data", "knowledge");
  const outputPath = join(knowledgeDir, "chunks.json");

  // Load existing chunks (the hand-crafted sample chunks)
  let existingChunks: Chunk[] = [];
  if (existsSync(outputPath)) {
    existingChunks = JSON.parse(readFileSync(outputPath, "utf-8"));
  }

  if (!existsSync(pdfsDir)) {
    console.log("No data/pdfs directory found. Nothing to process.");
    console.log("Create data/pdfs/ and add PDFs, then re-run this script.");
    process.exit(0);
  }

  const pdfFiles = readdirSync(pdfsDir).filter(
    (f) => extname(f).toLowerCase() === ".pdf"
  );

  if (pdfFiles.length === 0) {
    console.log("No PDFs found in data/pdfs/. Add PDFs and re-run.");
    process.exit(0);
  }

  const newChunks: Chunk[] = [];
  const processedSources = new Set<string>();

  for (const file of pdfFiles) {
    const source = basename(file, extname(file)).replace(/[-_]/g, " ");
    console.log(`Processing: ${file} → "${source}"`);

    try {
      const text = await extractPdf(join(pdfsDir, file));
      const chunks = chunkText(text, source);
      newChunks.push(...chunks);
      processedSources.add(source);
      console.log(`  → ${chunks.length} chunks extracted`);
    } catch (err) {
      console.error(`  ✗ Failed: ${(err as Error).message}`);
    }
  }

  // Keep existing sample chunks that don't overlap with newly processed sources
  const survivingExisting = existingChunks.filter(
    (c) => !processedSources.has(c.source)
  );

  const allChunks = [...survivingExisting, ...newChunks];
  writeFileSync(outputPath, JSON.stringify(allChunks, null, 2));
  console.log(
    `\nWrote ${allChunks.length} chunks to data/knowledge/chunks.json`
  );
  console.log(
    `  ${survivingExisting.length} existing sample chunks retained`
  );
  console.log(`  ${newChunks.length} new chunks from PDFs`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
