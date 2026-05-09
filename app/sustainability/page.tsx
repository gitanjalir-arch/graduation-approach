import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Long-term Sustainability — GraduationApproach.org",
  description:
    "What happens after the programme ends — durability, climate resilience, health, and the conditions that keep households graduated.",
};

const durabilityStats = [
  { stat: "93%", label: "of BRAC Bangladesh participants above poverty line 7 years after programme entry", source: "Bandiera et al. 2017" },
  { stat: "78%", label: "of BOMA REAP Kenya graduates maintain business operations at 5-year follow-up", source: "BOMA 5yr study" },
  { stat: "3×", label: "lower re-poverty rate for households with active savings group at endline", source: "BRAC 7yr follow-up" },
  { stat: "40%", label: "lower re-poverty rate when graduates are enrolled in a govt. cash transfer at programme end", source: "PEI 2024 synthesis" },
];

const climateComponents = [
  {
    title: "Climate-smart asset selection",
    detail: "Drought-resistant livestock breeds, flood-tolerant crop varieties, pond fish farming instead of exposed livestock in flood-prone areas.",
    examples: "BOMA Kenya (drought-proof breeds), BRAC Bangladesh post-2015 (pond aquaculture)",
  },
  {
    title: "Livelihood diversification",
    detail: "Ultra-poor households are especially vulnerable to single-income collapse. Graduation that produces 2+ income streams shows 40% better resilience to climate shocks.",
    examples: "BOMA REAP: livestock + non-farm income target; JEEViKA Bihar: SHG-linked enterprise mix",
  },
  {
    title: "Parametric insurance",
    detail: "Increasingly paired with Graduation programmes. Household receives automatic payout when a rainfall index falls below threshold — no claims process, fast liquidity.",
    examples: "Zambia (R4 Rural Resilience Initiative), Kenya (Index-based livestock insurance)",
  },
  {
    title: "Climate-smart agriculture extension",
    detail: "Agricultural extension including water harvesting, conservation farming, and early warning systems — layered into the skills training component.",
    examples: "Ethiopia AGP2, Bangladesh BRAC, CARE International Burkina Faso",
  },
];

const healthLinks = [
  {
    approach: "Referral linkage",
    detail: "The graduation coach identifies health needs and refers to public health services. Strong in BRAC model — coaches receive basic triage training. Works where health services exist and are accessible.",
    programmes: "BRAC Bangladesh, Fonkoze CLM Haiti",
  },
  {
    approach: "Health literacy in skills training",
    detail: "Basic health literacy — sanitation, maternal health, child nutrition, vaccination — is included in the skills training component. 80% of all programmes now include this. Low cost, broad reach.",
    programmes: "80% of PEI 2024 surveyed programmes",
  },
  {
    approach: "Co-deployed health workers",
    detail: "Graduation coaches and community health workers operate from the same household roster. The most integrated and highest-impact model — but requires government health system cooperation.",
    programmes: "JEEViKA Bihar, Rwanda LODA (integrated with CHW network)",
  },
];

const socialDimensions = [
  {
    area: "Mental health",
    headline: "Large effect sizes on anxiety, self-efficacy, and hope",
    detail: "Depression and anxiety are significantly higher among ultra-poor households before programme entry. The 6-country RCT found psychological wellbeing improvements with effect sizes comparable to or larger than income effects.",
  },
  {
    area: "Women's empowerment",
    headline: "90% of programmes target women as primary beneficiaries",
    detail: "Evidence shows significant increases in decision-making autonomy, mobility, and reductions in domestic violence. Fonkoze CLM Haiti: 34% reduction in domestic violence reported 12 months after entry. BRAC Bangladesh: 2× increase in women's say in household expenditure decisions.",
  },
  {
    area: "Social capital",
    headline: "Savings groups create community ties that persist after programme end",
    detail: "VSLA and SHG members continue meeting and lending to each other years after the graduation programme closes. This community network is the durability mechanism — it provides informal insurance against shocks.",
  },
  {
    area: "Child nutrition",
    headline: "22% reduction in child stunting",
    detail: "BRAC Bangladesh showed 22% improvement in child nutrition indicators (stunting) among programme households vs. control. Consumption support in the early months prevents the child malnutrition that often occurs when families are asset-building but before income increases.",
  },
];

const structuralFactors = [
  { factor: "Market access", risk: "High", detail: "Proximity to functioning markets is the single strongest predictor of sustained graduation. Remote rural households graduate at programme end but re-enter poverty significantly faster (3× higher at 5 years).", mitigation: "Area-focused programmes that improve local market systems alongside household support." },
  { factor: "Health system access", risk: "High", detail: "Households without nearby health services show 3× higher re-poverty rates at 5 years, driven by health shock-induced asset liquidation.", mitigation: "Referral linkages during programme; post-graduation health insurance or community health worker access." },
  { factor: "Social protection linkage", risk: "Medium", detail: "Graduates enrolled in a government cash transfer at programme end show 40% lower re-poverty rates — the transfer acts as insurance against small shocks.", mitigation: "Systematic enrolment in government schemes during the coaching phase." },
  { factor: "Savings group membership", risk: "Medium", detail: "Active VSLA or SHG membership at endline is associated with 60% lower re-poverty rate. The group provides informal credit, savings discipline, and social support.", mitigation: "Savings group graduation before household graduation — groups should be self-sustaining before the coach exits." },
  { factor: "Local economic conditions", risk: "Low–Medium", detail: "Area-wide shocks (drought years, commodity price collapse, conflict) can erase individual household gains regardless of programme quality.", mitigation: "Climate-resilient asset choices; livelihood diversification; parametric insurance." },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              Long-term Sustainability
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-forest-900 leading-tight">
              What happens after the programme ends?
            </h1>
            <p className="mt-6 text-lg text-ink-700 leading-relaxed">
              The test of any Graduation programme is not what happens during
              it, but 3, 5, and 10 years later. This page maps what we know
              about durability, climate resilience, health, and the structural
              conditions that determine whether households stay graduated.
            </p>
          </div>
        </div>
      </section>

      {/* DURABILITY STATS */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="mb-10">
            <h2 className="font-display text-3xl text-forest-900">Long-term outcomes</h2>
            <p className="mt-2 text-ink-700 max-w-2xl">What the evidence shows at 5, 7, and 10+ years.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100">
            {durabilityStats.map((d) => (
              <div key={d.stat} className="bg-white p-6">
                <div className="font-display text-4xl lg:text-5xl text-forest-700 leading-none">{d.stat}</div>
                <p className="mt-3 text-sm text-ink-700 leading-snug">{d.label}</p>
                <div className="mt-2 text-xs text-ink-500 italic">{d.source}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-cream-100 rounded-xl p-6 max-w-3xl">
            <p className="text-ink-700 leading-relaxed">
              <strong className="text-forest-900">Key finding:</strong> Graduation is a threshold event, not a permanent state.
              The 8% annual re-entry rate seen in Ethiopia in years 3–5 is driven primarily
              by health shocks. Ongoing linkage to savings groups and market systems — not the programme
              itself — is what keeps households above the line long-term.
            </p>
          </div>
        </div>
      </section>

      {/* CLIMATE */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
                Climate Resilience
              </div>
              <h2 className="font-display text-3xl text-forest-900 mb-4">
                The biggest threat to sustained graduation
              </h2>
              <p className="text-ink-700 leading-relaxed mb-6">
                Climate shocks — droughts, floods, erratic seasons — are the
                single largest cause of post-graduation poverty re-entry in
                agricultural contexts. Graduation programmes that don&apos;t address
                climate risk are building on sand.
              </p>
              <p className="text-ink-700 leading-relaxed mb-6">
                The PEI 2024 report found that 65% of surveyed programmes now
                include at least one climate-resilience component — up from 23%
                in 2021. Climate-Resilient Economic Inclusion (CREI) is a
                fast-growing category.
              </p>
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
                  alt="Drought-resistant farming in dryland Africa — climate resilience in graduation programmes"
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs">
                  65% of programmes now include climate-resilience components · PEI 2024
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {climateComponents.map((c) => (
                <div key={c.title} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                  <div className="font-display text-lg text-forest-900 mb-2">{c.title}</div>
                  <p className="text-sm text-ink-700 leading-relaxed mb-2">{c.detail}</p>
                  <div className="text-xs text-ink-500"><span className="font-medium text-ink-700">Examples:</span> {c.examples}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="mb-10">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">Health & Nutrition</div>
            <h2 className="font-display text-3xl text-forest-900">
              Health shocks are the #1 re-poverty trigger
            </h2>
            <p className="mt-3 text-ink-700 max-w-2xl leading-relaxed">
              Three ways Graduation programmes integrate with health systems — from
              simple referral to full co-deployment with community health workers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {healthLinks.map((h, i) => (
              <div key={h.approach} className="border-t-4 border-clay-500 bg-cream-100 rounded-b-xl p-5">
                <div className="text-xs font-mono text-clay-600 mb-2">0{i + 1}</div>
                <div className="font-display text-xl text-forest-900 mb-3">{h.approach}</div>
                <p className="text-sm text-ink-700 leading-relaxed mb-4">{h.detail}</p>
                <div className="text-xs text-ink-500"><span className="font-medium text-ink-700">In use: </span>{h.programmes}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL DIMENSIONS */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="mb-10">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">Social dimensions</div>
            <h2 className="font-display text-3xl text-forest-900">Beyond income — what else changes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {socialDimensions.map((s) => (
              <div key={s.area} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <div className="font-display text-xl text-forest-900 mb-1">{s.area}</div>
                <div className="text-sm font-semibold text-clay-600 mb-3">{s.headline}</div>
                <p className="text-sm text-ink-700 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURAL CONDITIONS */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="mb-10">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">Structural conditions</div>
            <h2 className="font-display text-3xl text-forest-900">What determines whether graduation sticks</h2>
            <p className="mt-3 text-ink-700 max-w-2xl">
              Programme design matters — but so do structural factors outside any programme&apos;s control.
            </p>
          </div>
          <div className="space-y-3">
            {structuralFactors.map((s) => (
              <div key={s.factor} className="border border-slate-100 rounded-xl p-5 grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-3">
                  <div className="font-display text-lg text-forest-900">{s.factor}</div>
                  <div className={`mt-1 text-xs font-semibold ${s.risk === "High" ? "text-clay-600" : "text-ochre-500"}`}>
                    Risk: {s.risk}
                  </div>
                </div>
                <div className="md:col-span-5 text-sm text-ink-700 leading-relaxed">{s.detail}</div>
                <div className="md:col-span-4 text-sm text-ink-500 bg-cream-100 rounded-lg p-3 leading-relaxed">
                  <span className="text-xs uppercase tracking-wider text-forest-700 block mb-1 font-medium">Mitigation</span>
                  {s.mitigation}
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
            <h2 className="font-display text-3xl text-white">Dig deeper into the evidence</h2>
            <p className="mt-2 text-cream-100/80">
              The landmark studies behind everything on this page — full citations, methods, and findings.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/impact" className="bg-white text-forest-900 hover:bg-cream-100 px-6 py-3 rounded-full font-semibold no-underline transition-all">
              Impact Assessment →
            </Link>
            <Link href="/elements#savings" className="border-2 border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold no-underline transition-all">
              Savings element
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
