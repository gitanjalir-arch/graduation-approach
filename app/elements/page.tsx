import Link from "next/link";

export const metadata = {
  title: "Programme Elements — GraduationApproach.org",
  description:
    "The building blocks of the Graduation Approach — what each element does, how it varies, and what the evidence says.",
};

type EvidenceStrength = "Strong evidence" | "Moderate evidence" | "Emerging";

function EvidencePill({ level }: { level: EvidenceStrength }) {
  const map: Record<EvidenceStrength, string> = {
    "Strong evidence": "bg-forest-700/10 text-forest-700 border-forest-700/20",
    "Moderate evidence": "bg-clay-500/10 text-clay-700 border-clay-500/30",
    Emerging: "bg-ochre-400/20 text-forest-800 border-ochre-400/40",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${map[level]}`}
    >
      {level}
    </span>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-clay-500 pl-6 my-8 max-w-2xl">
      <p className="font-display text-2xl lg:text-3xl text-forest-700 leading-snug">
        {children}
      </p>
    </blockquote>
  );
}

function ElementHeader({
  letter,
  title,
  evidence,
}: {
  letter: string;
  title: string;
  evidence: EvidenceStrength;
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest-700 text-white font-display text-xl flex items-center justify-center">
        {letter}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 flex-wrap mb-1">
          <EvidencePill level={evidence} />
        </div>
        <h2 className="font-display text-3xl lg:text-4xl text-forest-900 leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function ElementsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              Programme Elements
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-forest-900 leading-tight">
              The building blocks of Graduation
            </h1>
            <p className="mt-6 text-lg text-ink-700 leading-relaxed">
              Each element is backed by decades of field learning. This page
              breaks down what we know about each one — what works, what
              doesn&apos;t, and how implementers have adapted.
            </p>
          </div>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-white border-b border-slate-100 sticky top-[72px] z-30 lg:hidden">
        <div className="container-wide overflow-x-auto">
          <div className="flex gap-4 py-3 text-xs whitespace-nowrap">
            {[
              ["A", "Targeting", "targeting"],
              ["B", "Asset Transfer", "asset"],
              ["C", "Consumption Support", "consumption"],
              ["D", "Skills Training", "skills"],
              ["E", "Coaching", "coaching"],
              ["F", "Savings", "savings"],
              ["G", "Village vs Household", "village"],
              ["H", "Credit Linkage", "credit"],
            ].map(([letter, label, slug]) => (
              <a
                key={slug}
                href={`#${slug}`}
                className="text-ink-700 hover:text-forest-700 no-underline"
              >
                <span className="text-clay-600 font-mono">{letter}.</span>{" "}
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* A — TARGETING */}
      <section id="targeting" className="bg-white border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20 max-w-4xl">
          <ElementHeader letter="A" title="Targeting" evidence="Strong evidence" />
          <div className="prose-content space-y-4 text-ink-700 leading-relaxed">
            <p>
              Community-based targeting (CBT) is the most common method.
              Households are identified by community scorecards, then
              validated with Proxy Means Tests. Key insight: it works best
              when communities have clear criteria.
            </p>
            <p>
              <strong className="text-forest-900">Variants:</strong> (1)
              Ultra-poor only — strict PMT cutoff; (2) Broad-poor — inclusive
              approach that also catches near-poor; (3) Geographic / area
              targeting — whole villages or districts.
            </p>
            <p>
              Key tension: inclusion errors (missing eligible households) vs
              exclusion errors (including ineligible). BRAC Bangladesh
              achieved 99% inclusion accuracy after combining CBT + PMT.
              Fonkoze Haiti uses local community agents for targeting in
              remote areas.
            </p>
          </div>
          <PullQuote>
            &ldquo;99% inclusion accuracy after combining community scorecards
            with proxy means tests.&rdquo;
          </PullQuote>
        </div>
      </section>

      {/* B — ASSET TRANSFER */}
      <section id="asset" className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20 max-w-4xl">
          <ElementHeader
            letter="B"
            title="Productive Asset Transfer"
            evidence="Strong evidence"
          />
          <div className="space-y-4 text-ink-700 leading-relaxed">
            <p>
              The core intervention. Typically livestock (goats, cows,
              chickens) in agricultural contexts, or small enterprise capital
              in peri-urban. Asset selection is co-designed with the
              household — this is key to uptake.
            </p>
            <p>
              <strong className="text-forest-900">Variants:</strong> (1)
              Single asset (classic BRAC model); (2) Asset menu with
              household choice; (3) Cash for asset (household buys own); (4)
              Sequential assets (second asset given at midpoint).
            </p>
            <p>
              Cost range: <span className="font-mono">$100–$800</span> per
              household. The 2015 six-country RCT showed durable asset
              accumulation. Zambia 2023: 45% increase in business profits.
            </p>
          </div>
          <PullQuote>
            45% increase in business profits — Zambia nationwide RCT, 2023.
          </PullQuote>
        </div>
      </section>

      {/* C — CONSUMPTION SUPPORT */}
      <section
        id="consumption"
        className="bg-white border-b border-slate-100"
      >
        <div className="container-wide py-16 lg:py-20 max-w-4xl">
          <ElementHeader
            letter="C"
            title="Consumption Support"
            evidence="Strong evidence"
          />
          <div className="space-y-4 text-ink-700 leading-relaxed">
            <p>
              A short-term cash or food stipend to prevent the household from
              consuming the productive asset in the first weeks. Critical
              bridge: without it, asset disinvestment rates in early months
              can be 40%+. Duration typically 4–12 months.
            </p>
            <p>
              <strong className="text-forest-900">Variants:</strong> (1) In-kind
              food ration; (2) Cash transfer (increasingly preferred — more
              dignified, more flexibility); (3) Voucher system; (4) Layered
              onto existing government transfer (most cost-efficient).
            </p>
            <p>
              BOMA Kenya: consumption support is 2 bi-weekly cash grants of
              ~$50 over the first 6 months.
            </p>
          </div>
          <PullQuote>
            Without consumption support, 40%+ of asset transfers are sold off
            in the first weeks.
          </PullQuote>
        </div>
      </section>

      {/* D — SKILLS TRAINING */}
      <section id="skills" className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20 max-w-4xl">
          <ElementHeader
            letter="D"
            title="Skills Training"
            evidence="Strong evidence"
          />
          <div className="space-y-4 text-ink-700 leading-relaxed">
            <p>
              Two distinct layers: (1) Technical / vocational training specific
              to the chosen livelihood; (2) Life skills — financial literacy,
              health awareness, social confidence, goal-setting.
            </p>
            <p>
              Duration: typically 3–5 days intensive + follow-up refreshers.
              Digital delivery: increasingly via mobile apps and video.
            </p>
            <p>
              Key finding (J-PAL 2023): life skills training has larger effects
              on women&apos;s self-efficacy and mental health than technical
              training alone.
            </p>
          </div>
          <PullQuote>
            Life skills training drives larger gains in self-efficacy than
            technical training alone.
          </PullQuote>
        </div>
      </section>

      {/* E — COACHING */}
      <section id="coaching" className="bg-white border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20 max-w-4xl">
          <ElementHeader
            letter="E"
            title="Coaching"
            evidence="Strong evidence"
          />
          <div className="space-y-4 text-ink-700 leading-relaxed">
            <p>
              Coaching frequency ranges from weekly home visits (BRAC) to
              monthly group sessions (lighter-touch models). Evidence: intensity
              correlates with outcomes, but marginal returns diminish above 2×
              per month.
            </p>
            <p>
              Coaching is the most distinctive element of the Graduation
              Approach — and the one with the biggest cost-vs-impact tradeoffs.
            </p>
          </div>
          <Link
            href="/coaching"
            className="inline-block mt-6 text-sm font-medium"
          >
            See our full Coaching Intensity guide →
          </Link>
        </div>
      </section>

      {/* F — SAVINGS */}
      <section id="savings" className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20 max-w-4xl">
          <ElementHeader
            letter="F"
            title="Savings & Financial Inclusion"
            evidence="Strong evidence"
          />
          <div className="space-y-4 text-ink-700 leading-relaxed">
            <p>
              Savings groups (SHGs, VSLAs) provide the safety net that prevents
              re-entry to poverty after the programme ends. This is the
              &ldquo;graduation&rdquo; mechanism — the link to a durable
              financial system.
            </p>
            <p>
              <strong className="text-forest-900">Variants:</strong> (1)
              Self-Help Groups (SHG) — common in South Asia; (2) Village
              Savings and Loan Associations (VSLA) — common in Sub-Saharan
              Africa; (3) Formal bank account linkage; (4) Mobile money
              (M-Pesa, bKash etc.).
            </p>
            <p>
              Key data: households with active savings groups at endline have
              3× lower re-poverty rates (BRAC 7-year follow-up).
            </p>
          </div>
          <PullQuote>
            3× lower re-poverty rates for households with active savings groups
            at endline.
          </PullQuote>
        </div>
      </section>

      {/* G — VILLAGE vs HOUSEHOLD */}
      <section id="village" className="bg-white border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20 max-w-4xl">
          <ElementHeader
            letter="G"
            title="Village vs Household Targeting"
            evidence="Moderate evidence"
          />
          <div className="space-y-5 text-ink-700 leading-relaxed">
            <div>
              <h3 className="font-display text-lg text-forest-900 mb-1">
                Household-focused (74% of PEI 2024 programmes)
              </h3>
              <p>
                Deep support to the ultra-poor specifically. High impact per
                household, but geographic isolation of beneficiaries can
                create social tension.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-forest-900 mb-1">
                Whole-of-Village / Area-focused (26% of PEI 2024)
              </h3>
              <p>
                Improve economic opportunities for everyone in a village.
                Creates spillover effects, reduces stigma. Ethiopia AGP2 (2.5M
                participants) is the world&apos;s largest area-focused
                programme.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-forest-900 mb-1">
                Hybrid (emerging)
              </h3>
              <p>
                Ultra-poor get the full package; all villagers benefit from
                community asset investments (roads, irrigation, savings
                groups).
              </p>
            </div>
            <p>
              Studies in Uganda (Village Enterprise 2022) show that broader
              area approaches create positive spillovers to non-participants
              worth ~30% of the direct benefit.
            </p>
          </div>
          <PullQuote>
            ~30% spillover benefit to non-participants in area-focused
            programmes.
          </PullQuote>
        </div>
      </section>

      {/* H — LOAN / CREDIT LINKAGE */}
      <section id="credit" className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20 max-w-4xl">
          <ElementHeader
            letter="H"
            title="Loan / Credit Linkage Models"
            evidence="Emerging"
          />
          <div className="space-y-4 text-ink-700 leading-relaxed">
            <p>
              A newer element not in all models. Provides a small loan (not a
              grant) after month 6–12 once basic financial habits are
              established. Purpose: bridge between the grant economy and the
              credit economy.
            </p>
            <p>
              Evidence is mixed — works where basic financial inclusion
              infrastructure exists; counterproductive in contexts with high
              debt traps.
            </p>
            <p>
              Fonkoze Haiti: CLM explicitly does NOT include credit, focusing
              purely on grant-based asset + coaching. JEEViKA Bihar: SHG loans
              are the post-graduation mechanism.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 text-white">
        <div className="container-wide py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl text-white">
              See how the elements combine in different models
            </h2>
            <p className="mt-3 text-cream-100/80 leading-relaxed">
              Six (now seven) variants of the Graduation Approach, each
              combining these elements differently.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/models"
              className="bg-white text-forest-900 hover:bg-cream-100 px-6 py-3 rounded-full font-semibold no-underline transition-all"
            >
              Compare model variants →
            </Link>
            <Link
              href="/impact"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold no-underline transition-all"
            >
              Read the impact evidence
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
