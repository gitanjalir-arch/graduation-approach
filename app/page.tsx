import Link from "next/link";
import { programs, orgs, evidence, countryNames } from "@/data/seed";

export default function HomePage() {
  const featured = programs.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="paper border-b border-ink-900/5">
        <div className="container-wide pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 font-medium mb-6">
              405 programmes · 88 countries · 70 million people
            </div>
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.05] text-forest-900">
              The world has a way out of{" "}
              <span className="squiggle">extreme poverty</span>.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-ink-700 leading-relaxed max-w-2xl">
              The Graduation Approach is a time-bound, multi-faceted programme
              that has helped over 15 million households build durable
              livelihoods. This is the place to find every programme, every
              evaluation, and every person doing this work.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/atlas"
                className="bg-forest-800 hover:bg-forest-900 text-cream-50 px-5 py-3 rounded-full text-sm font-medium no-underline"
              >
                Explore the Atlas →
              </Link>
              <Link
                href="/get-started"
                className="border border-forest-800/30 text-forest-800 hover:bg-forest-800/5 px-5 py-3 rounded-full text-sm font-medium no-underline"
              >
                I want to start a programme
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroDiagram />
          </div>
        </div>
      </section>

      {/* HEADLINE STATS */}
      <section className="border-b border-ink-900/5">
        <div className="container-wide py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat number="15M+" label="Households reached" sub="globally, per PEI Landscape Survey 2023" />
          <Stat number="88" label="Countries" sub="with active economic inclusion programmes" />
          <Stat number="121–379%" label="Cost-benefit ratio" sub="J-PAL meta-analysis across 6 countries" />
          <Stat number="37%" label="Earnings increase" sub="sustained 7 years on, BRAC Bangladesh" />
        </div>
      </section>

      {/* PEI 2024 SNAPSHOT */}
      <section className="border-b border-ink-900/5 bg-cream-100/50">
        <div className="container-wide py-16">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
            <div className="lg:col-span-7">
              <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
                Pathways to Scale · State of Economic Inclusion 2024
              </div>
              <h2 className="font-display text-3xl lg:text-4xl text-forest-900 leading-tight">
                Where the field is in 2024
              </h2>
              <p className="mt-4 text-ink-700 leading-relaxed max-w-2xl">
                The Partnership for Economic Inclusion's 2024 Landscape Survey
                covered 405 programmes — nearly double the 2021 count.
                Coverage grew 50% to over 70 million people. The shift to
                government-led delivery has accelerated.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Link
                href="/evidence"
                className="text-sm font-medium"
              >
                Read the full SEI 2024 study →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <FactCard num="74%" label="of participants are reached by government-led programmes" />
            <FactCard num="89%" label="of all programmes include personal coaching" />
            <FactCard num="65%" label="are now adapting for climate resilience" />
            <FactCard num="$384–$1,675" label="cost per household, depending on context and design" />
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="border-b border-ink-900/5">
        <div className="container-wide py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              The model in one minute
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900 leading-tight">
              Not a hand-out.<br />
              <em className="text-clay-600">A handhold.</em>
            </h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Pioneered by BRAC in Bangladesh in 2002, the Graduation Approach
              gives ultra-poor households a productive asset, short-term
              consumption support, training, and 18–36 months of personal
              coaching — sequenced so that each piece reinforces the next.
            </p>
            <Link
              href="/models"
              className="inline-block mt-6 text-sm font-medium"
            >
              Compare the six model variants →
            </Link>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            <Component
              icon="🎯"
              title="Targeting"
              text="Community-led identification of the ultra-poor, validated with proxy means tests."
            />
            <Component
              icon="🍚"
              title="Consumption support"
              text="A short-term cash or food stipend so the household isn't forced to sell the asset to survive."
            />
            <Component
              icon="🐐"
              title="Productive asset"
              text="Livestock, seeds, or small-enterprise capital — chosen with the household."
            />
            <Component
              icon="🎓"
              title="Skills training"
              text="Asset-specific technical training plus life skills."
            />
            <Component
              icon="🤝"
              title="Coaching"
              text="Frequent home visits by a trained field worker over 18–36 months."
            />
            <Component
              icon="💰"
              title="Savings & inclusion"
              text="SHG, VSLA, or formal account linkage for long-term resilience."
            />
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="border-b border-ink-900/5 bg-cream-100/40">
        <div className="container-wide py-20">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
                Programmes in the field
              </div>
              <h2 className="font-display text-3xl lg:text-4xl text-forest-900">
                Where this work is alive right now
              </h2>
            </div>
            <Link href="/programs" className="text-sm font-medium hidden md:inline-block">
              All programmes →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="border-b border-ink-900/5">
        <div className="container-wide py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              The evidence
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900 leading-tight">
              Among the most rigorously evaluated anti-poverty interventions ever designed.
            </h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Six-country randomised trials. Seven-year follow-ups. Published
              in <em>Science</em> by two future Nobel laureates. The Graduation
              Approach has held up to scrutiny that few development programmes
              have faced.
            </p>
            <Link
              href="/evidence"
              className="inline-block mt-6 text-sm font-medium"
            >
              Browse all studies →
            </Link>
          </div>
          <div className="lg:col-span-7 space-y-3">
            {evidence.slice(0, 3).map((e) => (
              <article key={e.slug} className="border border-ink-900/10 rounded-lg p-5 bg-cream-50 hover:border-clay-400/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="pill-clay">{e.methodology}</span>
                  <span className="text-xs text-ink-500">{e.year}</span>
                </div>
                <h3 className="font-display text-lg text-forest-900 leading-tight">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {e.headline}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="border-b border-ink-900/5 bg-cream-100/40">
        <div className="container-wide py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              Who is this for
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900">
              Whatever brought you here, there's a path
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <AudienceCard
              tag="Funders & philanthropists"
              title="Decide whether to fund Graduation"
              text="See what's been tried, by whom, with what results — and where the funding gaps are."
              href="/get-started#funders"
            />
            <AudienceCard
              tag="Implementers & governments"
              title="Run your first programme"
              text="A starter kit, sample budgets, and 30 implementers willing to share what they've learned."
              href="/get-started#implementers"
            />
            <AudienceCard
              tag="Researchers & evaluators"
              title="Find programmes to study"
              text="Filter the global atlas by methodology, geography, and sample size. Connect with PIs directly."
              href="/get-started#researchers"
            />
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="bg-clay-500 text-cream-50">
        <div className="container-wide py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-5xl leading-tight text-cream-50">
              The field is bigger than any one organisation.
            </h2>
            <p className="mt-4 text-cream-50/90 text-lg leading-relaxed max-w-xl">
              We're building a directory by the people doing the work. If you
              run a programme, fund one, evaluate one, or are thinking about
              starting one — come help us build the map.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/community"
              className="bg-cream-50 text-forest-900 hover:bg-cream-100 px-6 py-3 rounded-full font-medium no-underline"
            >
              Join the community
            </Link>
            <Link
              href="/about#contribute"
              className="border border-cream-50 text-cream-50 hover:bg-cream-50/10 px-6 py-3 rounded-full font-medium no-underline"
            >
              Add your programme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ============ Sub-components ============

function Stat({ number, label, sub }: { number: string; label: string; sub: string }) {
  return (
    <div>
      <div className="font-display text-4xl lg:text-5xl text-forest-900 leading-none">
        {number}
      </div>
      <div className="mt-2 text-sm font-medium text-ink-900">{label}</div>
      <div className="text-xs text-ink-500">{sub}</div>
    </div>
  );
}

function FactCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-cream-50 border border-ink-900/10 rounded-lg p-5">
      <div className="font-display text-3xl text-clay-600 leading-none">{num}</div>
      <div className="mt-2 text-sm text-ink-700 leading-snug">{label}</div>
    </div>
  );
}

function Component({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="border border-ink-900/10 rounded-lg p-5 bg-cream-50 hover:border-clay-400/40 transition-colors">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-display text-base text-forest-900">{title}</div>
      <p className="mt-1 text-sm text-ink-700 leading-relaxed">{text}</p>
    </div>
  );
}

function ProgramCard({
  program,
}: {
  program: (typeof programs)[number];
}) {
  const impl = orgs.find((o) => o.slug === program.primaryImplementer);
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="block border border-ink-900/10 rounded-lg overflow-hidden bg-cream-50 hover:border-clay-400/50 hover:shadow-md transition-all no-underline group"
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-xs">
          <span className="pill-forest">{program.model}</span>
          <span className="pill-ink">{program.status}</span>
        </div>
        <h3 className="font-display text-xl text-forest-900 leading-tight group-hover:text-clay-700 transition-colors">
          {program.name}
        </h3>
        <p className="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-2">
          {program.oneLiner}
        </p>
        <div className="mt-5 pt-4 border-t border-ink-900/5 flex items-center justify-between text-xs text-ink-500">
          <span>{impl?.name}</span>
          <span className="font-mono">
            {program.countries.map((c) => countryNames[c] || c).join(" · ")}
          </span>
        </div>
      </div>
    </Link>
  );
}

function AudienceCard({
  tag,
  title,
  text,
  href,
}: {
  tag: string;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block bg-cream-50 border border-ink-900/10 rounded-lg p-7 no-underline hover:border-clay-400/50 transition-all"
    >
      <div className="text-xs uppercase tracking-widest text-clay-600 mb-3">
        {tag}
      </div>
      <h3 className="font-display text-xl text-forest-900 leading-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm text-ink-700 leading-relaxed">{text}</p>
      <div className="mt-4 text-sm font-medium text-clay-600">Start here →</div>
    </Link>
  );
}

function HeroDiagram() {
  // A hand-drawn-feel illustration of the Graduation arc
  return (
    <svg
      viewBox="0 0 480 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="An upward arc showing households moving from poverty to sustainable livelihood"
    >
      {/* Ground */}
      <line
        x1="20"
        y1="320"
        x2="460"
        y2="320"
        stroke="#A8A099"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <text x="20" y="340" fontSize="11" fontFamily="serif" fill="#6B635D" fontStyle="italic">
        Extreme poverty line
      </text>

      {/* Arc */}
      <path
        d="M 40 320 Q 240 -20 440 200"
        stroke="#D97757"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Stations */}
      <Station x={70} y={310} num="1" label="Targeting" />
      <Station x={150} y={250} num="2" label="Consumption" />
      <Station x={230} y={180} num="3" label="Asset" />
      <Station x={300} y={150} num="4" label="Skills" />
      <Station x={370} y={170} num="5" label="Coaching" />
      <Station x={430} y={210} num="6" label="Savings" />

      {/* Endpoints */}
      <g>
        <circle cx="40" cy="320" r="6" fill="#7A3B22" />
        <text x="50" y="324" fontSize="11" fontFamily="serif" fill="#7A3B22">
          Day 1
        </text>
      </g>
      <g>
        <circle cx="440" cy="200" r="9" fill="#3D5A40" />
        <text x="380" y="195" fontSize="13" fontFamily="serif" fill="#3D5A40" fontStyle="italic">
          Graduation
        </text>
      </g>

      {/* Time axis */}
      <text x="230" y="365" fontSize="11" fontFamily="serif" fill="#6B635D" textAnchor="middle">
        18 to 36 months
      </text>
    </svg>
  );
}

function Station({ x, y, num, label }: { x: number; y: number; num: string; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="11" fill="#FDFAF4" stroke="#3D5A40" strokeWidth="1.5" />
      <text x={x} y={y + 4} fontSize="10" fontFamily="serif" fill="#3D5A40" textAnchor="middle">
        {num}
      </text>
      <text x={x} y={y - 16} fontSize="10" fontFamily="serif" fill="#3D5A40" textAnchor="middle">
        {label}
      </text>
    </g>
  );
}
