"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

interface Source {
  source: string;
  section: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
  error?: boolean;
}

const STARTER_QUESTIONS = [
  "What is the Graduation Approach and how does it work?",
  "What does a typical Graduation programme cost per household?",
  "What's the evidence that Graduation works long-term?",
  "How is Graduation different from cash transfers?",
  "What coach-to-household ratio is recommended?",
  "Can Graduation work in refugee contexts?",
];

function CitationBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-forest-600/10 border border-forest-600/25 text-forest-700 mx-0.5 whitespace-nowrap">
      {text}
    </span>
  );
}

function renderAnswerText(text: string) {
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map((para, pi) => {
    const parts = para.split(/(\[Source:[^\]]+\])/g);
    const rendered = parts.map((part, i) => {
      if (part.startsWith("[Source:")) {
        return <CitationBadge key={i} text={part.slice(1, -1)} />;
      }
      return <span key={i}>{part}</span>;
    });
    return (
      <p key={pi} className={pi > 0 ? "mt-3" : ""}>
        {rendered}
      </p>
    );
  });
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 py-1 px-1">
      {[0, 150, 300].map((delay) => (
        <div
          key={delay}
          className="w-2 h-2 bg-forest-600/40 rounded-full animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}

function UserBubble({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[78%] bg-forest-700 text-white rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed shadow-sm">
        {content}
      </div>
    </div>
  );
}

function AssistantBubble({
  content,
  sources,
  error,
  loading,
}: {
  content?: string;
  sources?: Source[];
  error?: boolean;
  loading?: boolean;
}) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[85%] bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed shadow-sm">
        {loading ? (
          <TypingIndicator />
        ) : (
          <>
            <div
              className={`text-ink-700 ${error ? "text-clay-700" : ""}`}
            >
              {content ? renderAnswerText(content) : null}
            </div>
            {sources && sources.length > 0 && (
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="text-[10px] uppercase tracking-wider text-ink-500 mb-1.5">
                  Sources consulted
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {sources.map((s, i) => (
                    <span key={i} className="pill-forest text-[11px]">
                      {s.source}
                      {s.section ? ` · ${s.section}` : ""}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function submitQuestion(question: string) {
    if (!question.trim() || loading) return;

    const userMessage: Message = { role: "user", content: question.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.error || "Something went wrong. Please try again.",
            error: true,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.answer,
            sources: data.sources,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Network error. Please check your connection and try again.",
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    submitQuestion(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitQuestion(input);
    }
  }

  const showStarters = messages.length === 0 && !loading;

  return (
    <div className="flex flex-col min-h-[calc(100vh-140px)]">
      {/* Page header */}
      <div className="bg-forest-900 text-white">
        <div className="container-wide py-10">
          <div className="max-w-2xl">
            <div className="pill bg-forest-700 border-forest-600 text-cream-100 mb-4">
              Knowledge Assistant
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-white leading-tight">
              Ask about the Graduation Approach
            </h1>
            <p className="mt-3 text-cream-100/75 text-sm md:text-base leading-relaxed max-w-xl">
              Get answers grounded in published research, evaluations, and
              practitioner guides. All responses cite their sources so you can
              dig deeper.
            </p>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 bg-cream-100">
        <div className="container-prose py-8 flex flex-col gap-0 min-h-[400px]">
          {/* Conversation */}
          {messages.length > 0 && (
            <div className="flex flex-col gap-4 mb-6">
              {messages.map((msg, i) =>
                msg.role === "user" ? (
                  <UserBubble key={i} content={msg.content} />
                ) : (
                  <AssistantBubble
                    key={i}
                    content={msg.content}
                    sources={msg.sources}
                    error={msg.error}
                  />
                )
              )}
              {loading && <AssistantBubble loading />}
              <div ref={bottomRef} />
            </div>
          )}

          {/* Starter questions */}
          {showStarters && (
            <div className="flex-1 flex flex-col justify-center py-4">
              <p className="text-xs uppercase tracking-widest text-ink-500 mb-4">
                Try asking
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {STARTER_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => submitQuestion(q)}
                    className="text-left px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-forest-600/40 hover:bg-forest-600/5 transition-colors text-sm text-ink-700 hover:text-forest-800 shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-ink-500 leading-relaxed">
                Answers are drawn from research papers, evaluation reports, and
                practitioner guides in the knowledge base. The assistant will
                tell you when it doesn&apos;t have enough information.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Input bar — sticky at bottom */}
      <div className="sticky bottom-0 bg-white border-t border-slate-200 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
        <div className="container-prose py-4">
          <form onSubmit={handleSubmit} className="flex items-end gap-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about the Graduation Approach…"
              rows={1}
              disabled={loading}
              className="flex-1 resize-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-forest-600/30 focus:border-forest-600/50 transition-all disabled:opacity-50 leading-relaxed"
              style={{ minHeight: "48px", maxHeight: "160px" }}
              onInput={(e) => {
                const el = e.currentTarget;
                el.style.height = "auto";
                el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="flex-shrink-0 w-11 h-11 rounded-xl bg-forest-700 text-white hover:bg-forest-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              aria-label="Send question"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
          <p className="mt-2 text-[11px] text-ink-500 text-center">
            Answers are based on knowledge base documents only ·{" "}
            <span className="text-clay-600">Press Enter to send</span>
          </p>
        </div>
      </div>
    </div>
  );
}
