import Link from "next/link";

export const metadata = { title: "Get Started — GraduationApproach.org" };

export default function GetStartedPage() {
  return (
    <>
      <div className="container-wide py-12 lg:py-16 max-w-4xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          Get Started
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          Whoever you are, the next step is short
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          The hardest part of working on the Graduation Approach is finding the
          right person to talk to. Below: three paths in, depending on what
          brought you here.
        </p>
      </div>

      <Path
        id="implementers"
        tag="For implementers and governments"
        title="Run your first Graduation programme"
        text="You're an NGO, a state mission, or a government department thinking about adopting Graduation. Here's the shortest path from interest to implementation."
        steps={[
          "Read the CGAP / World Bank Technical Guide (the canonical implementation reference, 2018, 2nd ed.).",
          "Browse our Atlas to find 3–5 programmes most similar to your context — same geography, same population, same scale.",
          "Use our People directory to identify the programme manager or director of those programmes. Most are open to a 30-minute call.",
          "If you want technical assistance: BRAC UPGI advises governments specifically. Trickle Up, Pradan, and Fundación Capital advise NGOs.",
          "Start with a 100–300 household pilot. Almost no successful Graduation programme started bigger.",
        ]}
        cta="See programmes like yours"
        href="/atlas"
      />

      <Path
        id="funders"
        tag="For funders and philanthropists"
        title="Decide whether to fund Graduation"
        text="You're considering funding a Graduation programme. The model has unusually strong evidence — but unit costs and geography matter enormously. Here's how to decide."
        steps={[
          "Read the headline evidence: the 2015 Banerjee et al. Science paper (six-country RCT) and BRAC's 7-year follow-up.",
          "Identify your geography. Look at our Atlas filtered by country to see who's already working there.",
          "Compare cost per HH. Classic Graduation runs $300–$1,200 per HH. Government-embedded models run $50–$300. Decide your appetite.",
          "Talk to one funder who has done this before — Ford Foundation, Co-Impact, or Mastercard Foundation each have leads who'll share what they've learned.",
          "Decide between funding implementation directly vs. funding the technical-assistance layer. Both are valuable; the latter is rarer and higher leverage.",
        ]}
        cta="Browse evidence"
        href="/evidence"
      />

      <Path
        id="researchers"
        tag="For researchers and evaluators"
        title="Find a programme to study"
        text="You're an academic or evaluator looking for a programme to research. Here's how to find one."
        steps={[
          "Filter our Atlas by methodology — see which programmes have already been RCT'd (no need to duplicate) and which haven't.",
          "The most under-evaluated areas right now: government-embedded programmes at scale, refugee/fragile contexts, climate-resilience adaptations.",
          "J-PAL and IPA both have established networks of Graduation researchers — start there for collaboration.",
          "Reach out directly to programme managers via our People directory. Most welcome research partnerships.",
        ]}
        cta="See evaluations done so far"
        href="/evidence"
      />

      <section className="bg-cream-100/40 border-y border-ink-900/10">
        <div className="container-wide py-16 max-w-3xl text-center">
          <h2 className="font-display text-3xl text-forest-900">
            Want a knowledge exchange?
          </h2>
          <p className="mt-3 text-ink-700">
            Tell us what you're working on and we'll connect you with 2–3 people
            in the field who can help. No charge, no catch.
          </p>
          <Link
            href="/community"
            className="inline-block mt-6 bg-clay-500 hover:bg-clay-600 text-cream-50 px-6 py-3 rounded-full font-medium no-underline"
          >
            Request an introduction →
          </Link>
        </div>
      </section>
    </>
  );
}

function Path({
  id,
  tag,
  title,
  text,
  steps,
  cta,
  href,
}: {
  id: string;
  tag: string;
  title: string;
  text: string;
  steps: string[];
  cta: string;
  href: string;
}) {
  return (
    <section id={id} className="border-t border-ink-900/10">
      <div className="container-wide py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="text-xs tracking-widest uppercase text-clay-600 mb-3">{tag}</div>
          <h2 className="font-display text-3xl text-forest-900 leading-tight">{title}</h2>
          <p className="mt-4 text-ink-700 leading-relaxed">{text}</p>
          <Link
            href={href}
            className="inline-block mt-6 text-sm font-medium"
          >
            {cta} →
          </Link>
        </div>
        <ol className="lg:col-span-8 space-y-3">
          {steps.map((s, i) => (
            <li
              key={i}
              className="flex gap-4 border border-ink-900/10 rounded-lg p-5 bg-cream-50"
            >
              <span className="font-display text-2xl text-clay-500 leading-none flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ink-700 leading-relaxed">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
