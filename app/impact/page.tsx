import Link from "next/link";

export const metadata = {
  title: "Impact Assessment — GraduationApproach.org",
  description:
    "How we know the Graduation Approach works — landmark RCTs, DiDs, and evaluations from 88 countries.",
};

const methods = [
  {
    name: "Pre-Post (single-arm)",
    strength: "Low",
    color: "bg-ochre-400/20 text-forest-800",
    measures: "Change in outcomes before and after",
    limitation: "No counterfactual — can't separate programme effect from other changes",
  },
  {
    name: "Regression Discontinuity",
    strength: "Medium",
    color: "bg-clay-500/10 text-clay-700",
    measures: "Causal effect at a targeting threshold",
    limitation: "Only informative near the eligibility cutoff",
  },
  {
    name: "Difference-in-Differences",
    strength: "Medium–High",
    color: "bg-clay-400/15 text-forest-800",
    measures: "Change vs. a non-programme control group over time",
    limitation: "Requires 'parallel trends' assumption to hold",
  },
  {
    name: "Propensity Score Matching",
    strength: "Medium",
    color: "bg-clay-500/10 text-clay-700",
    measures: "Causal effect using statistically matched controls",
    limitation: "Cannot control for unobservable differences",
  },
  {
    name: "Randomised Controlled Trial",
    strength: "High",
    color: "bg-forest-700/10 text-forest-700",
    measures: "True causal effect via random assignment",
    limitation: "Cost, ethical constraints, external validity questions",
  },
];

const studies = [
  {
    slug: "banerjee-2015",
    title: "A Multi-faceted Programme Causes Lasting Progress for the Very Poor",
    year: 2015,
    journal: "Science",
    method: "RCT",
    evaluator: "J-PAL / MIT",
    countries: ["Ethiopia", "Ghana", "Honduras", "India", "Pakistan", "Peru"],
    finding:
      "Positive impacts on consumption, food security, productive assets, and mental health one year after programme end — across all 6 countries.",
    stat: "6 countries · 1 year follow-up · All positive",
    badge: "Field-defining",
  },
  {
    slug: "bandiera-2017",
    title: "Labor Markets and Poverty in Village Economies — Bangladesh 7-year follow-up",
    year: 2017,
    journal: "Quarterly Journal of Economics",
    method: "RCT",
    evaluator: "LSE / J-PAL",
    countries: ["Bangladesh"],
    finding:
      "37% increase in earnings, 9× savings, 2× assets and land — sustained for 93% of participants a decade after programme entry.",
    stat: "37% earnings · 7-year follow-up · 93% sustained",
    badge: "Longest study",
  },
  {
    slug: "bossuroy-2022",
    title: "Tackling Psychosocial and Capital Constraints — Sahel Adaptive Social Protection",
    year: 2022,
    journal: "Nature",
    method: "RCT",
    evaluator: "World Bank / PEI",
    countries: ["Burkina Faso", "Mali", "Niger", "Senegal"],
    finding:
      "15% consumption increase and 107% increase in women's business revenues (Niger). Cost-benefit ratio of 127% just 18 months after implementation.",
    stat: "127% cost-benefit · Government-led · 4 countries",
    badge: "Government scale",
  },
  {
    slug: "botea-2023",
    title: "Supporting Women's Livelihoods at Scale — Zambia",
    year: 2023,
    journal: "NBER Working Paper",
    method: "RCT",
    evaluator: "World Bank",
    countries: ["Zambia"],
    finding:
      "19% increase in consumption and 45% increase in business profits. Programme breaks even within 12 months. 36% projected ROI under sustained-impact assumptions.",
    stat: "45% profit growth · Break-even in 12 months",
    badge: "Best ROI",
  },
  {
    slug: "bedoya-2023",
    title: "Economic Inclusion in Fragile Contexts — Afghanistan",
    year: 2023,
    journal: "World Bank Working Paper",
    method: "RCT",
    evaluator: "World Bank",
    countries: ["Afghanistan"],
    finding:
      "16% consumption increase and 32% income increase — effective even in extreme fragility and conflict-affected context.",
    stat: "32% income · Works in fragility/conflict",
    badge: "Fragile contexts",
  },
  {
    slug: "village-enterprise-2022",
    title: "Universal Basic Income vs Graduation — Multi-arm RCT",
    year: 2022,
    journal: "Science Advances",
    method: "RCT",
    evaluator: "IPA",
    countries: ["Uganda"],
    finding:
      "Graduation showed greater asset accumulation and business formation than large lump-sum cash transfers. Both interventions improved consumption.",
    stat: "Graduation > cash for assets · Uganda",
    badge: "vs. cash transfers",
  },
  {
    slug: "ifpri-ethiopia-2023",
    title: "Do graduation programmes build resilience against droughts? — Ethiopia PSNP",
    year: 2023,
    journal: "World Development",
    method: "DiD",
    evaluator: "IFPRI",
    countries: ["Ethiopia"],
    finding:
      "Graduation households showed greater resilience to drought shocks than non-Graduation PSNP recipients, particularly through diversified livelihoods.",
    stat: "Better drought resilience · PSNP layer evaluated",
    badge: "Climate resilience",
  },
  {
    slug: "jpal-meta-2023",
    title: "Building Stable Livelihoods for Low-Income Households — Meta-analysis",
    year: 2023,
    journal: "J-PAL Policy Insight",
    method: "MixedMethods",
    evaluator: "J-PAL",
    countries: ["Afghanistan", "Bangladesh", "DRC", "Ghana", "Nepal", "Niger"],
    finding:
      "Cost-benefit ratios between 121% and 379%, with internal rates of return ranging from 16% to 66% — establishing Graduation as one of the most cost-effective interventions evaluated.",
    stat: "121–379% cost-benefit · 6 countries",
    badge: "Meta-evidence",
  },
];

const regionEvidence = [
  {
    region: "Sub-Saharan Africa",
    programmes: 230,
    participants: "74% of global total",
    highlight: "Ethiopia AGP2 (2.5M), Tanzania TASAF (716K), Rwanda LODA (447K), BOMA REAP Kenya",
    keyFinding: "Government-led programmes dominate. Strong evidence from Sahel ASP (Bossuroy 2022) on cost-effectiveness of layering on cash transfers.",
  },
  {
    region: "South Asia",
    programmes: 47,
    participants: "Incl. BRAC's 2.3M cumulative",
    highlight: "BRAC Bangladesh (2.3M), JEEViKA Bihar (155K), The/Nudge India (500K+)",
    keyFinding: "Home of the original Graduation model. Longest evidence trail. SHG-based delivery is the dominant model in India.",
  },
  {
    region: "Latin America & Caribbean",
    programmes: 70,
    participants: "incl. 477K VenEsperanza",
    highlight: "Haku Wiñay Peru (353K), VenEsperanza Colombia (477K), Fonkoze CLM Haiti",
    keyFinding: "Strong government integration (Peru, Brazil). Displacement context adaptation in Colombia. Haiti remains the richest NGO-model laboratory.",
  },
  {
    region: "MENA / Fragile Contexts",
    programmes: 28,
    participants: "Growing rapidly post-2020",
    highlight: "Afghanistan (Bedoya 2023), Iraq, Jordan, Egypt",
    keyFinding: "Graduation works in fragility — the Afghanistan RCT is definitive. Documentation and legal status are the biggest targeting challenges.",
  },
];

const methodBadge: Record<string, string> = {
  RCT: "bg-forest-700/10 border-forest-700/20 text-forest-700",
  DiD: "bg-clay-500/10 border-clay-500/30 text-clay-600",
  MixedMethods: "bg-ochre-400/20 border-ochre-400/30 text-forest-800",
};

export default function ImpactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              Impact Assessment
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-forest-900 leading-tight">
              Measuring impact — how we know it works
            </h1>
            <p className="mt-6 text-lg text-ink-700 leading-relaxed">
              From Nobel-Prize-winning RCTs to government evaluations in 88
              countries — a guide to how the evidence was built and what it
              shows.
            </p>
          </div>
        </div>
      </section>

      {/* WHY MEASUREMENT MATTERS */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16 max-w-4xl">
          <h2 className="font-display text-3xl text-forest-900 mb-6">
            Why rigorous measurement is hard
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-ink-700 leading-relaxed">
            <div className="bg-cream-100 rounded-xl p-5">
              <div className="font-display text-lg text-forest-900 mb-2">Attribution</div>
              <p>
                Did outcomes improve because of the programme, or because of
                rainfall, markets, or other programmes running simultaneously?
                Untangling cause from correlation requires a control group.
              </p>
            </div>
            <div className="bg-cream-100 rounded-xl p-5">
              <div className="font-display text-lg text-forest-900 mb-2">Selection bias</div>
              <p>
                Ultra-poor programmes attract motivated participants. If we just
                compare graduates to non-participants, we're comparing
                different people — not measuring programme effect.
              </p>
            </div>
            <div className="bg-cream-100 rounded-xl p-5">
              <div className="font-display text-lg text-forest-900 mb-2">Time horizon</div>
              <p>
                Short-term gains can fade. The BRAC Bangladesh study ran for 7
                years to show durability. Most evaluations stop at 12–18 months
                — potentially missing the full story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHODS HIERARCHY */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16">
          <h2 className="font-display text-3xl text-forest-900 mb-3">
            The evidence hierarchy
          </h2>
          <p className="text-ink-700 mb-10 max-w-2xl">
            Not all evidence is equal. Here&apos;s how the main methods compare
            — from weakest (pre-post) to strongest (RCT).
          </p>
          <div className="space-y-3">
            {methods.map((m, i) => (
              <div
                key={m.name}
                className="bg-white rounded-xl border border-slate-100 p-5 grid md:grid-cols-12 gap-4 items-start"
              >
                <div className="md:col-span-1 font-mono text-2xl text-clay-400 font-bold">
                  {i + 1}
                </div>
                <div className="md:col-span-4">
                  <div className="font-display text-lg text-forest-900">{m.name}</div>
                  <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-medium ${m.color}`}>
                    Rigour: {m.strength}
                  </span>
                </div>
                <div className="md:col-span-4 text-sm text-ink-700">
                  <span className="text-xs uppercase tracking-wider text-ink-500 block mb-1">Measures</span>
                  {m.measures}
                </div>
                <div className="md:col-span-3 text-sm text-ink-500 italic">
                  <span className="text-xs uppercase tracking-wider text-ink-400 block mb-1 not-italic">Limitation</span>
                  {m.limitation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDMARK STUDIES */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="mb-10">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">Landmark studies</div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900">
              Eight studies that shaped the field
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {studies.map((s) => (
              <article
                key={s.slug}
                className="border-l-4 border-clay-500 bg-cream-100 rounded-r-xl p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${methodBadge[s.method] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}>
                    {s.method}
                  </span>
                  <span className="text-xs text-ink-500">{s.year}</span>
                  <span className="text-xs font-medium text-ink-500 italic">{s.journal}</span>
                  <span className="ml-auto bg-forest-700 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-display text-xl text-forest-900 leading-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-700 leading-relaxed mb-3">{s.finding}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-500">
                    {s.countries.slice(0, 3).join(" · ")}
                    {s.countries.length > 3 && ` +${s.countries.length - 3} more`}
                  </span>
                  <span className="font-mono text-clay-600">{s.stat}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE BY REGION */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="mb-10">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">Regional breakdown</div>
            <h2 className="font-display text-3xl lg:text-4xl text-forest-900">
              Evidence from around the world
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {regionEvidence.map((r) => (
              <div key={r.region} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-xl text-forest-900">{r.region}</h3>
                  <div className="text-right">
                    <div className="font-mono text-2xl text-forest-700 leading-none">{r.programmes}</div>
                    <div className="text-xs text-ink-500">programmes</div>
                  </div>
                </div>
                <p className="text-xs text-ink-500 mb-2">Key programmes</p>
                <p className="text-sm text-ink-700 mb-4">{r.highlight}</p>
                <div className="bg-cream-100 rounded-lg p-3 text-sm text-ink-700 leading-relaxed italic">
                  {r.keyFinding}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAPS */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16 max-w-4xl">
          <h2 className="font-display text-3xl text-forest-900 mb-6">
            What we still don&apos;t know
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { gap: "Long-term durability (10yr+)", detail: "The 7-year BRAC study is the longest. We lack evidence on 10–15 year trajectories, especially in climate-vulnerable contexts." },
              { gap: "Scale-up fidelity", detail: "Small pilots deliver high-quality coaching. Does quality hold when a government programme has 500,000 households?" },
              { gap: "Urban contexts", detail: "84% of programmes are rural. Urban graduation is growing but the evidence base for cities — especially informal settlements — is thin." },
              { gap: "Male participants", detail: "90% of programmes target women. We know less about how the approach works for men and boys, especially youth." },
              { gap: "Digital coaching impact", detail: "App-based coaching is rapidly scaling but rigorous evaluations of digital-only vs hybrid coaching are still rare." },
              { gap: "Intergenerational effects", detail: "Children of programme participants likely benefit from nutrition, education, and reduced stress — but this is rarely measured." },
            ].map((g) => (
              <div key={g.gap} className="flex gap-3 bg-cream-100 rounded-xl p-4">
                <div className="w-1 h-full min-h-[20px] bg-clay-400 rounded-full flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm text-forest-900">{g.gap}</div>
                  <p className="text-sm text-ink-500 mt-1 leading-relaxed">{g.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 text-white">
        <div className="container-wide py-16 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl text-white">Browse all evaluations</h2>
            <p className="mt-2 text-cream-100/80">
              The full Evidence library — all programmes, all methods, linked to their studies.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/evidence" className="bg-white text-forest-900 hover:bg-cream-100 px-6 py-3 rounded-full font-semibold no-underline transition-all">
              Evidence library →
            </Link>
            <Link href="/elements" className="border-2 border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold no-underline transition-all">
              Programme elements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
