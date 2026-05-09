import Link from "next/link";

export const metadata = {
  title: "Coaching Intensity — GraduationApproach.org",
  description:
    "The spectrum from light-touch group coaching to high-touch weekly home visits — and what the evidence says about intensity.",
};

const spectrum = [
  {
    position: 1,
    label: "Monthly group",
    frequency: "1× / month",
    format: "Group session, digital OK",
    cost: "~$50 / yr",
    examples: ["Senegal Sahel ASP", "Zambia Nationwide"],
    colour: "bg-ochre-400/30 border-ochre-400",
  },
  {
    position: 2,
    label: "Bi-monthly",
    frequency: "2× / month",
    format: "Mixed group + individual",
    cost: "~$80 / yr",
    examples: ["Tanzania TASAF", "Rwanda LODA"],
    colour: "bg-clay-400/20 border-clay-400",
  },
  {
    position: 3,
    label: "Bi-weekly",
    frequency: "2× / month home visit",
    format: "Home visit",
    cost: "~$120 / yr",
    examples: ["BOMA REAP Kenya", "Village Enterprise Uganda"],
    colour: "bg-clay-500/20 border-clay-500",
  },
  {
    position: 4,
    label: "Weekly",
    frequency: "1× / week",
    format: "Dedicated field worker",
    cost: "~$200 / yr",
    examples: ["BRAC Classic Bangladesh", "Fonkoze CLM Haiti"],
    colour: "bg-forest-600/15 border-forest-600",
  },
  {
    position: 5,
    label: "Very high",
    frequency: "2× / week",
    format: "Dedicated caseworker",
    cost: "~$300 / yr",
    examples: ["Early CGAP-Ford pilots", "Bandhan West Bengal"],
    colour: "bg-forest-700/20 border-forest-700",
  },
];

const coachModels = [
  {
    org: "BRAC Bangladesh",
    model: "Dual-track",
    detail: "Community health workers handle health referrals; dedicated graduation facilitators manage asset, coaching, and savings group visits. Two different cadres, same household.",
    intensity: "High",
    ratio: "1 facilitator : 18 households",
  },
  {
    org: "Fonkoze CLM, Haiti",
    model: "Case manager",
    detail: "Trained case managers with social-work background. Each manages 25 households. Weekly visits mandatory in months 1-6; bi-weekly in months 7-18. Explicit crisis response protocol.",
    intensity: "High",
    ratio: "1 case manager : 25 households",
  },
  {
    org: "JEEViKA Bihar, India",
    model: "Community resource person",
    detail: "Graduated SHG members become paid community resource persons (CRPs) — coaching their neighbours. Lower cost, high trust. Monthly home visits supplemented by SHG meeting integration.",
    intensity: "Medium",
    ratio: "1 CRP : 30–40 households",
  },
  {
    org: "BOMA REAP, Kenya",
    model: "Business mentor + savings agent",
    detail: "Two distinct roles: business mentor (bi-weekly home visit) and savings group facilitator (runs weekly group meeting). Gradually shifts to peer-only model in year 2.",
    intensity: "Medium–High",
    ratio: "1 mentor : 20 households",
  },
  {
    org: "Senegal Sahel ASP",
    model: "Group facilitator",
    detail: "Government social worker facilitates monthly group sessions of 15-20 beneficiaries. Individual home visits only on request or crisis trigger. Lowest cost in the field.",
    intensity: "Light",
    ratio: "1 facilitator : 100+ households",
  },
];

const digitalExamples = [
  {
    name: "JEEViKA Bihar — IVR coaching",
    detail: "Interactive voice response in Hindi and Bhojpuri. Weekly calls with quizzes on financial literacy and health. Supplements in-person visits.",
    coverage: "155,000 HH",
    outcome: "No rigorous evaluation yet",
  },
  {
    name: "BOMA Kenya — App-based tracking",
    detail: "Field agents use the BOMA app to log visit notes and flag at-risk households. Dashboard for supervisors. Not digital-only — app supports in-person coaching.",
    coverage: "42,000 HH",
    outcome: "Improved supervisor response time 3×",
  },
  {
    name: "IPA Digital Graduation Pilot — India",
    detail: "Randomised comparison of digital-only, hybrid, and in-person coaching in rural Karnataka. Results expected 2025.",
    coverage: "4,000 HH (RCT)",
    outcome: "Results pending",
  },
  {
    name: "VenEsperanza Colombia — WhatsApp coaching",
    detail: "WhatsApp-based group coaching during COVID-19 lockdown. Retained 82% of households who would otherwise have dropped out.",
    coverage: "60,000 current HH",
    outcome: "Maintained 82% retention during pandemic",
  },
];

export default function CoachingPage() {
  const barWidth = 100 / spectrum.length;

  return (
    <>
      {/* HERO */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
              Coaching Intensity
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-forest-900 leading-tight">
              Light touch to high touch
            </h1>
            <p className="mt-6 text-lg text-ink-700 leading-relaxed">
              Coaching is the most distinctive element of Graduation — and the
              one with the steepest cost-vs-impact tradeoffs. This page maps
              the full spectrum and what the evidence says about intensity.
            </p>
          </div>
        </div>
      </section>

      {/* THE METER */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="mb-10">
            <h2 className="font-display text-3xl text-forest-900 mb-2">The coaching spectrum</h2>
            <p className="text-ink-700 max-w-2xl">
              Five positions on the intensity scale, from monthly group sessions
              to twice-weekly home visits. Cost figures are coaching-only, per
              household per year.
            </p>
          </div>

          {/* Gradient bar */}
          <div className="relative mb-2">
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "linear-gradient(to right, #99F6E4, #0D9488, #134E4A)" }} />
            <div className="absolute -bottom-1 flex w-full justify-between px-0">
              {spectrum.map((s) => (
                <div key={s.position} className="flex flex-col items-center" style={{ width: `${barWidth}%` }}>
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-forest-700 -mt-1.5" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-ink-500 mb-10">
            <span>Light touch</span>
            <span>High touch</span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {spectrum.map((s) => (
              <div key={s.position} className={`rounded-xl border-2 p-4 ${s.colour}`}>
                <div className="font-display text-lg text-forest-900 mb-1">{s.label}</div>
                <div className="text-xs font-mono text-clay-600 mb-2">{s.frequency}</div>
                <div className="text-xs text-ink-700 mb-3">{s.format}</div>
                <div className="text-xs font-semibold text-forest-700 mb-2">{s.cost}</div>
                <div className="text-xs text-ink-500 uppercase tracking-wider mb-1">Examples</div>
                {s.examples.map((e) => (
                  <div key={e} className="text-xs text-ink-700">{e}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT FREQUENCY MEANS */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-forest-900 mb-6">What the evidence says</h2>
            <div className="space-y-5 text-ink-700 leading-relaxed">
              <p>
                A J-PAL review found that coaching frequency above bi-weekly
                showed <strong className="text-forest-900">diminishing marginal returns</strong> in most
                contexts. Going from bi-weekly to weekly adds cost but not
                proportional impact.
              </p>
              <p>
                The exception: households experiencing <strong className="text-forest-900">acute shocks</strong> (illness,
                divorce, flood) benefit from higher-touch response. This has
                led to adaptive coaching protocols — reduce frequency as the
                household stabilises.
              </p>
              <p>
                Continuity of coach matters more than credentials — coach
                turnover is the biggest quality risk identified across
                programmes. Fonkoze Haiti tracks this explicitly; BRAC measures
                it in annual quality audits.
              </p>
            </div>
            <blockquote className="border-l-4 border-clay-500 pl-6 mt-8">
              <p className="font-display text-2xl text-forest-700 leading-snug">
                &ldquo;Coach turnover is the biggest quality risk — not coach
                frequency.&rdquo;
              </p>
            </blockquote>
          </div>
          <div>
            <h2 className="font-display text-3xl text-forest-900 mb-6">What makes a great coach</h2>
            <div className="space-y-4">
              {[
                { q: "Community member or external professional?", a: "Community members have trust and contextual knowledge. Professionals bring skills. Most effective programmes use community members trained to a professional standard — not outsiders deployed cold." },
                { q: "How to select coaches?", a: "Peer nomination + basic literacy + willingness to share information on time. The BRAC and Fonkoze models both show strong predictive validity of peer selection over formal interviews." },
                { q: "How to retain coaches?", a: "Competitive pay, career pathway, peer support groups, and strong supervisory feedback. BRAC's graduation facilitators have among the lowest turnover of any NGO field cadre globally." },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-xl p-5 border border-slate-100">
                  <div className="font-semibold text-forest-900 text-sm mb-2">{item.q}</div>
                  <p className="text-sm text-ink-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COACH MODELS */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-wide py-16">
          <h2 className="font-display text-3xl text-forest-900 mb-8">
            Coaching models in practice
          </h2>
          <div className="space-y-4">
            {coachModels.map((c) => (
              <div key={c.org} className="border border-slate-100 rounded-xl p-6 grid md:grid-cols-12 gap-4 items-start hover:shadow-sm transition-all">
                <div className="md:col-span-3">
                  <div className="font-display text-lg text-forest-900">{c.org}</div>
                  <div className="text-xs uppercase tracking-wider text-clay-600 mt-1">{c.model}</div>
                </div>
                <div className="md:col-span-6 text-sm text-ink-700 leading-relaxed">{c.detail}</div>
                <div className="md:col-span-3 space-y-2 text-xs">
                  <div>
                    <span className="text-ink-500 uppercase tracking-wider">Intensity </span>
                    <span className={`font-semibold ${c.intensity === "High" ? "text-forest-700" : c.intensity === "Light" ? "text-ochre-500" : "text-clay-600"}`}>{c.intensity}</span>
                  </div>
                  <div>
                    <span className="text-ink-500 uppercase tracking-wider">Ratio </span>
                    <span className="font-mono text-ink-900">{c.ratio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL COACHING */}
      <section className="bg-cream-100 border-b border-slate-100">
        <div className="container-wide py-16">
          <div className="mb-8">
            <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">The frontier</div>
            <h2 className="font-display text-3xl text-forest-900 mb-2">Digital coaching</h2>
            <p className="text-ink-700 max-w-2xl leading-relaxed">
              Pre-COVID: fewer than 5% of programmes used any digital coaching. By 2024:
              over 30% have at least one digital component. The evidence on digital-only
              vs hybrid is emerging but promising.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {digitalExamples.map((d) => (
              <div key={d.name} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <div className="font-display text-lg text-forest-900 mb-1">{d.name}</div>
                <p className="text-sm text-ink-700 leading-relaxed mb-3">{d.detail}</p>
                <div className="flex gap-4 text-xs">
                  <div><span className="text-ink-500 uppercase tracking-wider">Coverage </span><span className="font-mono text-forest-700">{d.coverage}</span></div>
                  <div><span className="text-ink-500 uppercase tracking-wider">Finding </span><span className="text-ink-700 italic">{d.outcome}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-forest-700 text-white rounded-xl p-6 max-w-2xl">
            <div className="font-display text-xl mb-2">The 60-70% rule</div>
            <p className="text-cream-100/90 text-sm leading-relaxed">
              Digital-only coaching produces roughly 60–70% of the outcomes of in-person
              coaching at 20–30% of the cost — but only in contexts where smartphone
              penetration exceeds 50% and household members have basic digital literacy.
              In most of Sub-Saharan Africa and rural South Asia, hybrid remains the
              minimum viable model.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-900 text-white">
        <div className="container-wide py-16 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl text-white">See coaching in context</h2>
            <p className="mt-2 text-cream-100/80">
              Each programme model uses a different coaching intensity. Compare them side by side.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/models" className="bg-white text-forest-900 hover:bg-cream-100 px-6 py-3 rounded-full font-semibold no-underline transition-all">
              Compare models →
            </Link>
            <Link href="/elements" className="border-2 border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold no-underline transition-all">
              All programme elements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
