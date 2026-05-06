import Link from "next/link";

export const metadata = { title: "About — GraduationApproach.org" };

export default function AboutPage() {
  return (
    <div className="container-wide py-12 lg:py-20 max-w-3xl">
      <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
        About
      </div>
      <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
        Why this exists
      </h1>

      <div className="prose-content space-y-5 mt-8 text-ink-700 leading-relaxed text-lg">
        <p>
          The Graduation Approach is one of the most successful anti-poverty
          interventions in modern development. It has reached 70+ million
          people, been adapted in 50+ countries, and produced more rigorous
          evidence than almost any other programme model in the field.
        </p>
        <p>
          And yet — if you are a programme manager in Bihar, a state mission
          official in Odisha, a funder considering a $5M grant, or a researcher
          looking for a comparison study — there is no single place you can
          turn to find every programme, every implementer, every evaluation,
          and every person doing this work.
        </p>
        <p>
          The World Bank's Partnership for Economic Inclusion (PEI) maintains
          an authoritative dataset and is the institutional home of the field.
          We are deliberately complementary: faster-moving, more curated, more
          opinionated, and built by the community rather than for it.
        </p>
        <p>
          GraduationApproach.org is a small project with large ambition. If it
          works, it will become the place a Minister, a programme manager, a
          researcher, or a funder turns to first.
        </p>
      </div>

      <hr id="contribute" className="my-12 border-ink-900/10" />

      <h2 className="font-display text-3xl text-forest-900 leading-tight">
        How to contribute
      </h2>
      <div className="space-y-4 mt-5 text-ink-700 leading-relaxed">
        <p>
          We're building this in the open. Three ways to help.
        </p>
        <ol className="space-y-3 list-decimal list-inside marker:text-clay-500 marker:font-display">
          <li><strong>Add or correct your organisation's data.</strong> Sign in with your work email — if your org's domain is registered, you'll get editor access automatically.</li>
          <li><strong>Add a programme.</strong> If you run, fund, or evaluate a Graduation programme that isn't listed, fill out our short submission form.</li>
          <li><strong>Tell us what's missing.</strong> The most useful contribution at this stage is feedback on what's wrong, what's missing, and what we should prioritise.</li>
        </ol>
      </div>

      <div className="mt-10 border border-ink-900/10 rounded-lg p-6 bg-cream-50">
        <h3 className="font-display text-xl text-forest-900">Get in touch</h3>
        <p className="mt-2 text-ink-700">
          Email <a href="mailto:hello@graduationapproach.org">hello@graduationapproach.org</a> or join the community to be notified when editor access opens.
        </p>
        <Link
          href="/community"
          className="inline-block mt-4 bg-forest-800 hover:bg-forest-900 text-cream-50 px-5 py-2.5 rounded-full text-sm font-medium no-underline"
        >
          Join the community
        </Link>
      </div>

      <hr className="my-12 border-ink-900/10" />

      <h2 className="font-display text-3xl text-forest-900 leading-tight">A note on accuracy</h2>
      <div className="space-y-4 mt-5 text-ink-700 leading-relaxed">
        <p>
          This is a launch dataset. Most programme records have been compiled
          from public sources — published evaluations, organisational websites,
          PEI's data portal, and BRAC UPGI's materials. None has yet been
          formally verified by the implementing organisation.
        </p>
        <p>
          If you spot an error, please tell us. If you work at one of the
          listed organisations, please claim editorship and correct your data.
          Until verified, every record carries a "draft" notice.
        </p>
      </div>
    </div>
  );
}
