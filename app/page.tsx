import Link from "next/link";
import Image from "next/image";
import { programs, orgs, evidence, countryNames } from "@/data/seed";

const timelineData = [
  { year: "2002", label: "BRAC Bangladesh — first cohort", programmes: 1, hh: "50 households" },
  { year: "2006", label: "CGAP-Ford 10-country pilots", programmes: 8, hh: "5,000 households" },
  { year: "2011", label: "Government scale-up begins", programmes: 25, hh: "1 million" },
  { year: "2015", label: "Banerjee et al. published in Science", programmes: 50, hh: "2 million" },
  { year: "2016", label: "JEEViKA Bihar launches at scale", programmes: 70, hh: "5 million" },
  { year: "2017", label: "PEI established at World Bank", programmes: 100, hh: "8 million" },
  { year: "2021", label: "SEI Report 2021 — 219 programmes", programmes: 219, hh: "9.8 million" },
  { year: "2022", label: "Rwanda national strategy adopted", programmes: 280, hh: "12 million" },
  { year: "2024", label: "SEI Report 2024 — 88 countries", programmes: 405, hh: "15 million+" },
];

const layeringStack = [
  {
    tier: "Foundation",
    title: "Government safety nets",
    detail: "Cash transfers, food rations, and PSNP-style programmes establish the income floor that prevents destitution while the household builds assets.",
    examples: "Ethiopia PSNP · India MGNREGA · Kenya HSNP",
    bg: "bg-forest-900",
    text: "text-white",
    sub: "text-teal-200/70",
    badge: "bg-white/10 text-white/70",
  },
  {
    tier: "Layer 2",
    title: "Universal entitlements",
    detail: "Health coverage, digital ID, school enrolment, and WASH — rights-based services that Graduation coaches actively link households into.",
    examples: "Ayushman Bharat · NHIF Kenya · NIDA Rwanda",
    bg: "bg-forest-700",
    text: "text-white",
    sub: "text-teal-200/70",
    badge: "bg-white/10 text-white/70",
  },
  {
    tier: "The Graduation Approach",
    title: "Asset + coaching + savings",
    detail: "The time-bound, multi-component programme — productive asset, consumption support, skills training, personal coaching, and savings group — that accelerates the transition.",
    examples: "BRAC · BOMA · JEEViKA · Fonkoze · Village Enterprise",
    bg: "bg-clay-500",
    text: "text-white",
    sub: "text-white/80",
    badge: "bg-white/20 text-white",
  },
  {
    tier: "Layer 4",
    title: "Financial inclusion",
    detail: "Bank accounts, mobile money, microfinance, and index insurance unlock the ability to save, borrow, and absorb shocks without selling productive assets.",
    examples: "M-Pesa · Jan Dhan · VSLA · MFI linkages",
    bg: "bg-cream-200",
    text: "text-forest-900",
    sub: "text-ink-600",
    badge: "bg-forest-700/10 text-forest-700",
  },
  {
    tier: "Layer 5",
    title: "Market systems & extension",
    detail: "Agricultural extension services, buyer linkages, and value chain integration allow graduates to grow beyond subsistence into commercially viable enterprise.",
    examples: "USAID FTF · SHG-linked market access · cooperatives",
    bg: "bg-cream-100",
    text: "text-forest-900",
    sub: "text-ink-600",
    badge: "bg-forest-700/10 text-forest-700",
  },
];

export default function HomePage() {
  const featured = programs.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      {/* HERO — full-bleed dark teal gradient */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #042F2E 0%, #115E59 45%, #0D9488 100%)",
        }}
      >
        {/* Decorative dot grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #5EEAD4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-20 fill-white"
          >
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>

        <div className="container-wide relative z-10 pt-20 pb-32 lg:pt-28 lg:pb-40 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-teal-200 font-medium mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
              405 programmes · 88 countries · 70 million people
            </div>
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.05] text-white">
              The world has a way out of{" "}
              <span className="text-teal-300 squiggle">extreme poverty</span>.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-teal-100 leading-relaxed max-w-2xl">
              The Graduation Approach is a time-bound, multi-faceted programme
              that has helped over 15 million households build durable
              livelihoods. This is the place to find every programme, every
              evaluation, and every person doing this work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/atlas"
                className="bg-white text-forest-900 hover:bg-teal-50 px-6 py-3.5 rounded-full text-sm font-semibold no-underline shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5"
              >
                Explore the Atlas →
              </Link>
              <Link
                href="/get-started"
                className="border-2 border-white/40 text-white hover:bg-white/10 px-6 py-3.5 rounded-full text-sm font-semibold no-underline backdrop-blur-sm transition-all"
              >
                Start a programme
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroDiagram />
          </div>
        </div>
      </section>

      {/* HEADLINE STATS */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
          <StatCell
            number="15M+"
            label="Households reached"
            sub="globally, per PEI Landscape Survey 2023"
          />
          <StatCell
            number="88"
            label="Countries"
            sub="with active economic inclusion programmes"
          />
          <StatCell
            number="121–379%"
            label="Cost-benefit ratio"
            sub="J-PAL meta-analysis across 6 countries"
          />
          <StatCell
            number="37%"
            label="Earnings increase"
            sub="sustained 7 years on, BRAC Bangladesh"
          />
        </div>
      </section>

      {/* FIELD ILLUSTRATION */}
      <section className="relative h-64 lg:h-[380px] overflow-hidden select-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 380"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Illustrated agricultural landscape with farmers working in the fields"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ph-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0FDFA" />
              <stop offset="60%" stopColor="#5EEAD4" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>
            <radialGradient id="ph-glow" cx="50%" cy="100%" r="55%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* Sky */}
          <rect width="1440" height="380" fill="url(#ph-sky)" />
          <rect width="1440" height="380" fill="url(#ph-glow)" />

          {/* Far hills */}
          <path
            d="M0,188 Q180,162 360,176 Q540,190 720,158 Q900,126 1080,150 Q1260,174 1440,155 L1440,380 L0,380Z"
            fill="#0D9488"
          />
          {/* Mid fields */}
          <path
            d="M0,228 Q240,210 480,221 Q720,232 960,214 Q1200,196 1440,212 L1440,380 L0,380Z"
            fill="#0F766E"
          />
          {/* Near field */}
          <path
            d="M0,280 Q360,263 720,273 Q1080,283 1440,267 L1440,380 L0,380Z"
            fill="#115E59"
          />
          {/* Foreground strip */}
          <rect x="0" y="332" width="1440" height="48" fill="#134E4A" />

          {/* Crop furrows */}
          {[337, 346, 355, 364, 373].map((y) => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="rgba(45,212,191,0.14)" strokeWidth="1.5" />
          ))}

          {/* Tree canopies — right cluster */}
          <ellipse cx="1098" cy="196" rx="20" ry="13" fill="#0D9488" />
          <ellipse cx="1128" cy="185" rx="26" ry="16" fill="#0C8880" />
          <ellipse cx="1162" cy="189" rx="23" ry="14" fill="#0D9488" />
          <ellipse cx="1200" cy="178" rx="31" ry="19" fill="#0B8278" />
          <ellipse cx="1242" cy="184" rx="22" ry="14" fill="#0D9488" />
          {/* Trunks */}
          <line x1="1098" y1="209" x2="1098" y2="228" stroke="#0F766E" strokeWidth="4" />
          <line x1="1128" y1="201" x2="1128" y2="226" stroke="#0F766E" strokeWidth="5" />
          <line x1="1162" y1="203" x2="1162" y2="228" stroke="#0F766E" strokeWidth="4" />
          <line x1="1200" y1="197" x2="1200" y2="228" stroke="#0F766E" strokeWidth="6" />
          <line x1="1242" y1="198" x2="1242" y2="228" stroke="#0F766E" strokeWidth="4" />

          {/* Worker A — bending to harvest, foreground */}
          <circle cx="318" cy="289" r="6" fill="#0F766E" />
          <path d="M321,294 Q331,303 342,300 Q347,299 352,304" stroke="#0F766E" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <line x1="318" y1="294" x2="316" y2="307" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
          <line x1="316" y1="307" x2="311" y2="318" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
          <line x1="316" y1="307" x2="320" y2="318" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />

          {/* Worker B — upright with hoe, mid */}
          <circle cx="576" cy="275" r="5.5" fill="#0F766E" />
          <line x1="576" y1="281" x2="576" y2="298" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
          <line x1="576" y1="287" x2="568" y2="294" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="576" y1="287" x2="585" y2="293" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="573" y1="298" x2="570" y2="311" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
          <line x1="578" y1="298" x2="580" y2="311" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
          <line x1="578" y1="283" x2="590" y2="272" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="590" y1="272" x2="594" y2="260" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" />

          {/* Worker C — bending, further */}
          <circle cx="848" cy="260" r="4.5" fill="#115E59" />
          <path d="M851,264 Q861,272 870,270" stroke="#115E59" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <line x1="848" y1="264" x2="847" y2="275" stroke="#115E59" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="847" y1="275" x2="843" y2="284" stroke="#115E59" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="847" y1="275" x2="851" y2="284" stroke="#115E59" strokeWidth="2.5" strokeLinecap="round" />

          {/* Worker D — small, far */}
          <circle cx="1018" cy="244" r="3.5" fill="#115E59" />
          <line x1="1018" y1="248" x2="1018" y2="260" stroke="#115E59" strokeWidth="2" strokeLinecap="round" />
          <line x1="1018" y1="253" x2="1013" y2="258" stroke="#115E59" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="1018" y1="253" x2="1023" y2="257" stroke="#115E59" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="1015" y1="260" x2="1013" y2="269" stroke="#115E59" strokeWidth="2" strokeLinecap="round" />
          <line x1="1020" y1="260" x2="1022" y2="269" stroke="#115E59" strokeWidth="2" strokeLinecap="round" />

          {/* Birds */}
          <g stroke="rgba(45,212,191,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <path d="M260,74 Q265,69 270,74" />
            <path d="M278,84 Q283,78 288,84" />
            <path d="M580,58 Q586,52 592,58" />
            <path d="M604,70 Q610,63 616,70" />
            <path d="M880,46 Q887,39 894,46" />
          </g>
        </svg>

        <div className="absolute bottom-4 right-8">
          <span className="text-[9px] tracking-[0.3em] uppercase text-teal-300/30 font-mono">
            Fields · Livelihoods · Futures
          </span>
        </div>
      </section>

      {/* GROWTH TIMELINE */}
      <section className="bg-forest-900 overflow-hidden">
        <div className="container-wide py-20">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-400 mb-3">
              Twenty years of growth
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-white">
              From 50 households to 15 million
            </h2>
            <p className="mt-4 text-teal-200/60 max-w-xl mx-auto text-sm leading-relaxed">
              Hover over any bar to see the milestone. Bars show active programme count.
            </p>
          </div>

          {/* Bar chart */}
          <div className="flex items-end gap-1 lg:gap-2 h-52 px-2">
            {timelineData.map((t) => {
              const barH = Math.max(6, Math.round((t.programmes / 405) * 192));
              return (
                <div
                  key={t.year}
                  className="group relative flex flex-col items-center flex-1"
                >
                  {/* Hover card */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white rounded-xl p-4 w-52 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 text-left">
                    <div className="text-xs font-mono text-clay-600 font-semibold mb-1">{t.year}</div>
                    <div className="font-display text-forest-900 text-sm leading-snug mb-2">{t.label}</div>
                    <div className="flex gap-3 text-xs">
                      <div>
                        <span className="text-ink-500 block">Programmes</span>
                        <span className="font-semibold text-forest-700">{t.programmes}</span>
                      </div>
                      <div>
                        <span className="text-ink-500 block">Households</span>
                        <span className="font-semibold text-forest-700">{t.hh}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bar */}
                  <div
                    className="w-full rounded-t-md opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{
                      height: `${barH}px`,
                      background: "linear-gradient(to top, #0F766E, #2DD4BF)",
                    }}
                  />

                  {/* Year */}
                  <div className="mt-2 text-[10px] font-mono text-white/30 group-hover:text-clay-400 transition-colors hidden lg:block">
                    {t.year}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Year labels for mobile */}
          <div className="flex justify-between px-2 mt-2 lg:hidden">
            <span className="text-[10px] font-mono text-white/40">2002</span>
            <span className="text-[10px] font-mono text-white/40">2024</span>
          </div>

          {/* Key milestones */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center">
            <div>
              <div className="font-display text-3xl text-clay-400">2002</div>
              <div className="text-xs text-white/50 mt-1">BRAC Bangladesh first pilot</div>
            </div>
            <div>
              <div className="font-display text-3xl text-clay-400">2015</div>
              <div className="text-xs text-white/50 mt-1">
                Published in <em>Science</em> · Nobel-winning team
              </div>
            </div>
            <div>
              <div className="font-display text-3xl text-clay-400">2024</div>
              <div className="text-xs text-white/50 mt-1">405 programmes · 88 countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* PEI 2024 SNAPSHOT */}
      <section className="border-b border-slate-100 bg-cream-100/60">
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
                The Partnership for Economic Inclusion&apos;s 2024 Landscape Survey
                covered 405 programmes — nearly double the 2021 count. Coverage
                grew 50% to over 70 million people. The shift to
                government-led delivery has accelerated.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Link href="/evidence" className="text-sm font-medium">
                Read the full SEI 2024 study →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <FactCard
              num="74%"
              label="of participants are reached by government-led programmes"
            />
            <FactCard
              num="89%"
              label="of all programmes include personal coaching"
            />
            <FactCard
              num="65%"
              label="are now adapting for climate resilience"
            />
            <FactCard
              num="$384–$1,675"
              label="cost per household, depending on context and design"
            />
          </div>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container-wide py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              The model in one minute
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900 leading-tight">
              Not a hand-out.
              <br />
              <em className="text-clay-600">A handhold.</em>
            </h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Pioneered by BRAC in Bangladesh in 2002, the Graduation Approach
              gives ultra-poor households a productive asset, short-term
              consumption support, training, and 18–36 months of personal
              coaching — sequenced so that each piece reinforces the next.
            </p>
            <Link href="/models" className="inline-block mt-6 text-sm font-medium">
              Compare the six model variants →
            </Link>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            <Component
              iconComponent={<IconTarget />}
              title="Targeting"
              text="Community-led identification of the ultra-poor, validated with proxy means tests."
            />
            <Component
              iconComponent={<IconGrain />}
              title="Consumption support"
              text="A short-term cash or food stipend so the household isn't forced to sell the asset to survive."
            />
            <Component
              iconComponent={<IconSeedling />}
              title="Productive asset"
              text="Livestock, seeds, or small-enterprise capital — chosen with the household."
            />
            <Component
              iconComponent={<IconBook />}
              title="Skills training"
              text="Asset-specific technical training plus life skills."
            />
            <Component
              iconComponent={<IconHandshake />}
              title="Coaching"
              text="Frequent home visits by a trained field worker over 18–36 months."
            />
            <Component
              iconComponent={<IconSavings />}
              title="Savings & inclusion"
              text="SHG, VSLA, or formal account linkage for long-term resilience."
            />
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="border-b border-slate-100 bg-cream-100/40">
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
            <Link
              href="/programs"
              className="text-sm font-medium hidden md:inline-block"
            >
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

      {/* FIELD PHOTO BANNER */}
      <section className="relative h-64 lg:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
          alt="Women participating in an economic inclusion programme"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 to-forest-900/40" />
        <div className="relative z-10 container-wide h-full flex items-center">
          <div className="max-w-xl text-white">
            <div className="text-xs tracking-[0.25em] uppercase text-teal-300 mb-3">
              From the field
            </div>
            <h2 className="font-display text-3xl lg:text-4xl leading-tight text-white">
              Real programmes. Real outcomes. Real data.
            </h2>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="border-b border-slate-100 bg-white">
        <div className="container-wide py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              The evidence
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900 leading-tight">
              Among the most rigorously evaluated anti-poverty interventions
              ever designed.
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
              <article
                key={e.slug}
                className="border-l-4 border-clay-500 bg-white rounded-r-xl p-5 shadow-sm hover:shadow-md transition-all"
              >
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
      <section className="border-b border-slate-100 bg-cream-100/40">
        <div className="container-wide py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              Who is this for
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900">
              Whatever brought you here, there&apos;s a path
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

      {/* LAYERING METHODS */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-20 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              How it fits together
            </div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900 leading-tight mb-5">
              Layering on what already exists
            </h2>
            <p className="text-ink-700 leading-relaxed mb-5">
              The Graduation Approach works best as a layer on top of existing
              government social protection systems — not a replacement for them.
              Graduates are systematically enrolled in health insurance, digital
              IDs, and government transfers before coaching ends.
            </p>
            <p className="text-ink-700 leading-relaxed mb-5">
              In Ethiopia, Rwanda, and Bihar, government Graduation programmes
              explicitly sequence social protection enrolment first, then asset
              transfer, then coaching, then market linkage — each layer
              reinforcing the next and the whole proving more durable than any
              single intervention.
            </p>
            <div className="bg-cream-100 rounded-xl p-5 border border-slate-100">
              <div className="text-xs uppercase tracking-wider text-clay-600 font-semibold mb-2">Key finding</div>
              <p className="text-sm text-ink-700 leading-relaxed">
                PEI 2024 found graduates enrolled in a government cash transfer
                at programme end show <strong className="text-forest-900">40% lower re-poverty rates</strong> at
                5-year follow-up. The transfer acts as insurance against small
                shocks while the enterprise matures.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {layeringStack.map((l) => (
              <div key={l.tier} className={`rounded-xl p-5 ${l.bg}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className={`text-[10px] uppercase tracking-widest font-semibold mb-1 ${l.sub}`}>
                      {l.tier}
                    </div>
                    <div className={`font-display text-lg leading-tight mb-1 ${l.text}`}>
                      {l.title}
                    </div>
                    <p className={`text-xs leading-relaxed mb-2 ${l.sub}`}>{l.detail}</p>
                    <div className={`text-[10px] font-mono ${l.sub}`}>{l.examples}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #115E59 0%, #0D9488 100%)",
        }}
      >
        <div className="container-wide py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-5xl leading-tight text-white">
              The field is bigger than any one organisation.
            </h2>
            <p className="mt-4 text-teal-100 text-lg leading-relaxed max-w-xl">
              We&apos;re building a directory by the people doing the work. If you
              run a programme, fund one, evaluate one, or are thinking about
              starting one — come help us build the map.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/community"
              className="bg-white text-forest-900 hover:bg-teal-50 px-6 py-3 rounded-full font-semibold no-underline transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
            >
              Join the community
            </Link>
            <Link
              href="/about#contribute"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold no-underline backdrop-blur-sm transition-all"
            >
              Add your programme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ============ Icon components ============

function IconTarget() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-forest-700"
    >
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}

function IconGrain() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-forest-700"
    >
      <path
        d="M24 8 C16 8 10 16 10 24 S16 40 24 40 S38 32 38 24 S32 8 24 8Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 8 Q28 20 24 32 Q20 20 24 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}

function IconSeedling() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-forest-700"
    >
      <path
        d="M24 40 L24 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 30 C24 22 14 16 12 12 C20 12 28 18 24 30Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M24 26 C24 18 34 14 36 10 C28 10 20 17 24 26Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-forest-700"
    >
      <path
        d="M10 36 L10 12 C10 10 12 8 14 8 L38 8 L38 36"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 36 C10 34 12 32 14 32 L38 32 L38 40 L14 40 C12 40 10 38 10 36Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 18 L30 18 M18 24 L26 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-forest-700"
    >
      <path
        d="M6 20 L16 20 L22 14 L28 14 L34 20 L42 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 20 L20 28 L24 24 L28 28 L32 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="34" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="34" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconSavings() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-forest-700"
    >
      <path
        d="M10 28 C10 20 14 14 24 14 C34 14 38 20 38 28 L38 32 C38 34 36 36 34 36 L14 36 C12 36 10 34 10 32Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M30 14 L32 8 L38 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 28 L30 28 M24 22 L24 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ============ Sub-components ============

function StatCell({
  number,
  label,
  sub,
}: {
  number: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="bg-white p-8">
      <div className="font-display text-4xl lg:text-5xl text-forest-700 leading-none">
        {number}
      </div>
      <div className="mt-2 text-sm font-semibold text-ink-900">{label}</div>
      <div className="text-xs text-ink-500 mt-1">{sub}</div>
    </div>
  );
}

function FactCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-clay-400/40 transition-colors">
      <div className="font-display text-4xl text-forest-700 leading-none">
        {num}
      </div>
      <div className="mt-3 text-sm text-ink-500 leading-snug">{label}</div>
    </div>
  );
}

function Component({
  iconComponent,
  title,
  text,
}: {
  iconComponent: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
      <div className="w-14 h-14 rounded-xl bg-forest-700/[0.08] flex items-center justify-center mb-4 group-hover:bg-forest-700/[0.12] transition-colors">
        {iconComponent}
      </div>
      <div className="font-display text-lg text-forest-900">{title}</div>
      <p className="mt-2 text-sm text-ink-500 leading-relaxed">{text}</p>
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
      className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 no-underline group border border-slate-100"
    >
      <div className="h-1.5 bg-gradient-to-r from-forest-600 to-clay-400" />
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
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-ink-500">
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
      className="block bg-white border border-slate-100 rounded-2xl p-7 no-underline hover:border-clay-400/50 hover:shadow-md transition-all"
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
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <text
        x="20"
        y="340"
        fontSize="11"
        fontFamily="serif"
        fill="rgba(255,255,255,0.7)"
        fontStyle="italic"
      >
        Extreme poverty line
      </text>

      {/* Arc */}
      <path
        d="M 40 320 Q 240 -20 440 200"
        stroke="#2DD4BF"
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
        <circle cx="40" cy="320" r="6" fill="rgba(255,255,255,0.9)" />
        <text x="50" y="324" fontSize="11" fontFamily="serif" fill="white">
          Day 1
        </text>
      </g>
      <g>
        <circle cx="440" cy="200" r="9" fill="#2DD4BF" />
        <text
          x="380"
          y="195"
          fontSize="13"
          fontFamily="serif"
          fill="white"
          fontStyle="italic"
        >
          Graduation
        </text>
      </g>

      {/* Time axis */}
      <text
        x="230"
        y="365"
        fontSize="11"
        fontFamily="serif"
        fill="rgba(255,255,255,0.7)"
        textAnchor="middle"
      >
        18 to 36 months
      </text>
    </svg>
  );
}

function Station({
  x,
  y,
  num,
  label,
}: {
  x: number;
  y: number;
  num: string;
  label: string;
}) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r="11"
        fill="rgba(255,255,255,0.15)"
        stroke="white"
        strokeWidth="1.5"
      />
      <text
        x={x}
        y={y + 4}
        fontSize="10"
        fontFamily="serif"
        fill="white"
        textAnchor="middle"
      >
        {num}
      </text>
      <text
        x={x}
        y={y - 16}
        fontSize="10"
        fontFamily="serif"
        fill="white"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}
