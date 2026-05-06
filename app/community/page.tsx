import Link from "next/link";

export const metadata = { title: "Community — GraduationApproach.org" };

export default function CommunityPage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          Community
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          The field, in conversation
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          Not a chat forum. Not a Discord. Just a place where verified
          practitioners, researchers, funders, and government leaders can find
          each other.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        <div className="border border-ink-900/10 rounded-lg p-7 bg-cream-50">
          <h2 className="font-display text-2xl text-forest-900">Join</h2>
          <p className="mt-3 text-ink-700 leading-relaxed">
            We verify members through their work email and LinkedIn. This keeps
            the directory useful and the conversation high-signal. It usually
            takes 24–48 hours.
          </p>
          <form className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-cream-100/50 border border-ink-900/15 px-4 py-2.5 rounded-md text-sm"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full bg-cream-100/50 border border-ink-900/15 px-4 py-2.5 rounded-md text-sm"
            />
            <input
              type="url"
              placeholder="LinkedIn URL"
              className="w-full bg-cream-100/50 border border-ink-900/15 px-4 py-2.5 rounded-md text-sm"
            />
            <textarea
              placeholder="Briefly: what do you work on?"
              rows={3}
              className="w-full bg-cream-100/50 border border-ink-900/15 px-4 py-2.5 rounded-md text-sm"
            />
            <button
              type="button"
              className="bg-forest-800 hover:bg-forest-900 text-cream-50 px-5 py-2.5 rounded-full text-sm font-medium"
            >
              Request to join
            </button>
          </form>
          <p className="mt-3 text-xs text-ink-500">
            (This form is illustrative — accounts open in Phase 2.)
          </p>
        </div>

        <div className="border border-ink-900/10 rounded-lg p-7 bg-cream-50">
          <h2 className="font-display text-2xl text-forest-900">Ask the community</h2>
          <p className="mt-3 text-ink-700 leading-relaxed">
            Anonymous questions allowed. Answers come from verified members
            with field experience.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "How do you handle livestock mortality in arid contexts during the asset-transfer phase?",
              "What's the right cohort size for a first-time pilot — 100, 300, or 500 households?",
              "Has anyone tried embedding Graduation in MGNREGA without the asset transfer? What happened?",
            ].map((q, i) => (
              <article
                key={i}
                className="border border-ink-900/10 rounded-md p-4 bg-cream-100/40"
              >
                <p className="text-sm text-ink-900">{q}</p>
                <div className="mt-2 text-xs text-ink-500 flex items-center gap-3">
                  <span>3 answers</span>
                  <span>·</span>
                  <span>Anonymous</span>
                </div>
              </article>
            ))}
            <button
              className="text-sm font-medium text-clay-600"
            >
              Ask a question →
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-6">
        {[
          { title: "Office hours", text: "Senior practitioners offer 30-minute slots each month. Book one if you have a specific question about your programme." },
          { title: "Quarterly newsletter", text: "Curated round-up of programmes, evidence, funder activity, and people moves across the field." },
          { title: "Member directory", text: "Search by geography, expertise, or organisation. Open to verified members only." },
        ].map((b) => (
          <div key={b.title} className="border border-ink-900/10 rounded-lg p-6 bg-cream-50">
            <h3 className="font-display text-lg text-forest-900">{b.title}</h3>
            <p className="mt-2 text-sm text-ink-700 leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
