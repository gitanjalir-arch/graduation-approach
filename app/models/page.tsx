export const metadata = { title: "Models — GraduationApproach.org" };

const models = [
  {
    name: "Classic",
    tag: "The original",
    duration: "24 months",
    components: ["Targeting", "Consumption support", "Asset transfer", "Skills training", "Coaching", "Savings linkage"],
    examples: "BRAC TUP-Bangladesh · Fonkoze CLM-Haiti · Bandhan-India",
    cost: "$300–$1,200 per HH",
    evidence: "Strong (multiple RCTs)",
    note: "The model from which everything else descends. High touch, high cost, well-evidenced.",
  },
  {
    name: "Cash-Plus",
    tag: "Lighter touch",
    duration: "12–18 months",
    components: ["Targeting", "Cash transfer (lump-sum or staged)", "Light coaching", "Business training", "Savings"],
    examples: "Village Enterprise · GiveDirectly's recent multi-arm trial",
    cost: "$200–$600 per HH",
    evidence: "Strong (RCT-tested)",
    note: "Lower coaching intensity, larger cash component. Recent evidence shows strong outcomes at lower cost.",
  },
  {
    name: "Coaching-Only",
    tag: "Layered onto existing schemes",
    duration: "18–24 months",
    components: ["Targeting", "Coaching", "Skills training", "Savings linkage", "(Asset / consumption from existing scheme)"],
    examples: "Trickle Up India (with state livelihoods missions)",
    cost: "$80–$200 per HH (incremental)",
    evidence: "Moderate",
    note: "Where the asset and consumption layers come from a parallel government programme — Graduation provides the missing handhold.",
  },
  {
    name: "Whole-of-Village",
    tag: "Reaching everyone in a village",
    duration: "24–30 months",
    components: ["Targeting (village-level)", "Asset transfer", "Community institutions", "Coaching", "Climate resilience"],
    examples: "Raising The Village (RTV) · The/Nudge Economic Inclusion — Odisha (launching 2026)",
    cost: "$30 per HH (RTV claims)",
    evidence: "Emerging",
    note: "Targets the whole village rather than only the ultra-poor, with a heavy emphasis on community-level assets and convergence.",
  },
  {
    name: "Refugee / Fragile",
    tag: "Adapted for displaced populations",
    duration: "18–24 months",
    components: ["Targeting (registered refugees)", "Cash / vouchers", "Documentation support", "Market linkage", "Coaching"],
    examples: "UNHCR-Trickle Up across 6 countries · BRAC Liberia",
    cost: "$400–$900 per HH",
    evidence: "Emerging",
    note: "Adapted for highly mobile populations with uncertain legal status. Particular focus on host-community relations.",
  },
  {
    name: "Government-Embedded",
    tag: "The dominant scaling pathway",
    duration: "30–36 months",
    components: ["Embedded targeting", "Convergence with cash transfer / public works", "Government-led delivery", "NGO TA"],
    examples: "Bihar JEEViKA-SJY · Ethiopia PSNP-Plus · Peru Haku Wiñay · Philippines SLP",
    cost: "$50–$300 per HH (incremental)",
    evidence: "Mixed (early studies positive)",
    note: "Embeds Graduation in an existing government social-protection scheme. Lower cost, larger scale, more political. The future of the field.",
  },
];

export default function ModelsPage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          Models
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          One approach, six flavours
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          Two decades of adaptation has produced multiple variants of the
          Graduation Approach, each suited to different contexts. Here's how
          they compare.
        </p>
      </div>

      <div className="grid gap-6">
        {models.map((m) => (
          <article
            key={m.name}
            className="border border-ink-900/10 rounded-lg p-7 bg-cream-50 grid lg:grid-cols-12 gap-6"
          >
            <div className="lg:col-span-3">
              <div className="text-xs tracking-widest uppercase text-clay-600 mb-1">
                {m.tag}
              </div>
              <h2 className="font-display text-2xl text-forest-900 leading-tight">
                {m.name}
              </h2>
              <div className="mt-3 text-xs text-ink-500">
                <div>Duration · <span className="text-ink-900 font-medium">{m.duration}</span></div>
                <div className="mt-1">Cost · <span className="text-ink-900 font-medium">{m.cost}</span></div>
                <div className="mt-1">Evidence · <span className="text-ink-900 font-medium">{m.evidence}</span></div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-widest text-ink-500 mb-2">Components</div>
              <ul className="space-y-1 text-sm text-ink-700">
                {m.components.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-clay-500">·</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-widest text-ink-500 mb-2">Examples</div>
              <p className="text-sm text-ink-700 leading-relaxed">{m.examples}</p>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed italic">{m.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
