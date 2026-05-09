import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join } from "path";

interface Chunk {
  id: string;
  source: string;
  section: string;
  text: string;
}

const STOP_WORDS = new Set([
  "the", "and", "for", "are", "but", "not", "you", "all", "can", "had",
  "her", "was", "one", "our", "out", "get", "has", "him", "his", "how",
  "its", "may", "now", "she", "too", "use", "way", "who", "did", "let",
  "put", "say", "that", "this", "with", "from", "have", "been", "more",
  "also", "into", "than", "they", "what", "when", "will", "your", "about",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));
}

function scoreChunk(chunk: Chunk, queryTokens: string[]): number {
  const chunkText = `${chunk.source} ${chunk.section} ${chunk.text}`.toLowerCase();
  const chunkTokens = tokenize(chunkText);
  const k1 = 1.5;
  const b = 0.75;
  const avgDocLength = 200;

  let score = 0;
  for (const term of queryTokens) {
    const tf = chunkTokens.filter((t) => t === term).length;
    if (tf === 0) continue;
    const tfNorm =
      (tf * (k1 + 1)) /
      (tf + k1 * (1 - b + b * (chunkTokens.length / avgDocLength)));
    score += tfNorm;
  }
  return score;
}

function findRelevantChunks(chunks: Chunk[], query: string, topK = 6): Chunk[] {
  const queryTokens = tokenize(query);
  return chunks
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, queryTokens) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((s) => s.chunk);
}

const SYSTEM_PROMPT = `You are the knowledge assistant for GraduationApproach.org — a community-curated platform about the Graduation Approach to ending ultra-poverty.

Answer questions ONLY using the provided context documents. Do not use your general training knowledge about the Graduation Approach — only what is in the retrieved context below.

When you answer:
- Write in clear, flowing prose — do NOT add inline citations or bracketed references in the body of your answer
- Be specific and precise — quote numbers, percentages, cost ranges, and timeframes from the source documents
- If the context does not contain enough information to answer, say: "I don't have enough information in my sources to answer that fully."
- Keep answers concise (2-4 paragraphs for most questions) but substantive
- Use a warm, practitioner-friendly tone — you're speaking to someone who runs or is considering running a Graduation programme
- When relevant, note where sources disagree or where evidence is limited
- Never attribute claims to documents that aren't in the context`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { question } = body;

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return NextResponse.json({ error: "Invalid question" }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const chunksPath = join(process.cwd(), "data", "knowledge", "chunks.json");
    let chunks: Chunk[];
    try {
      chunks = JSON.parse(readFileSync(chunksPath, "utf-8"));
    } catch {
      return NextResponse.json(
        { error: "Knowledge base unavailable" },
        { status: 500 }
      );
    }

    const relevantChunks = findRelevantChunks(chunks, question.trim(), 6);

    const contextStr =
      relevantChunks.length > 0
        ? relevantChunks
            .map(
              (c, i) =>
                `[${i + 1}] Source: ${c.source}, ${c.section}\n${c.text}`
            )
            .join("\n\n---\n\n")
        : "No relevant documents found in the knowledge base for this query.";

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const message = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Context documents:\n\n${contextStr}\n\n---\n\nQuestion: ${question.trim()}`,
        },
      ],
    });

    const answer =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({
      answer,
      sources: relevantChunks.map((c) => ({
        source: c.source,
        section: c.section,
      })),
    });
  } catch (err) {
    console.error("Ask API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
