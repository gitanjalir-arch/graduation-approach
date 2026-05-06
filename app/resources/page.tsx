import Link from "next/link";

export const metadata = { title: "Resources — GraduationApproach.org" };

const resources = [
  {
    type: "Toolkit",
    title: "From Extreme Poverty to Sustainable Livelihoods: A Technical Guide",
    authors: "Aude de Montesquiou, Tony Sheldon, Syed M. Hashemi (CGAP / World Bank, 2018, 2nd ed.)",
    desc: "The canonical implementation guide. A roadmap for designing and running Graduation programmes, especially for governments at scale.",
    url: "https://www.peiglobal.org",
    audience: ["Implementer", "Government"],
  },
  {
    type: "Toolkit",
    title: "PROPEL Toolkit",
    authors: "BRAC",
    desc: "BRAC's flagship toolkit for adapting and operationalising Graduation in new contexts. Covers targeting, sequencing, asset selection, and field operations.",
    url: "https://bracupgi.org",
    audience: ["Implementer"],
  },
  {
    type: "Paper",
    title: "A Multi-faceted Programme Causes Lasting Progress for the Very Poor",
    authors: "Banerjee, Duflo, Goldberg, Karlan et al., Science 2015",
    desc: "The seminal six-country RCT that established the global evidence base. If you read one paper, read this.",
    url: "https://www.science.org",
    audience: ["Researcher", "Funder"],
  },
  {
    type: "Report",
    title: "State of Economic Inclusion Report 2024: Pathways to Scale",
    authors: "Partnership for Economic Inclusion (World Bank), 2024",
    desc: "PEI's biennial flagship report on the global state of economic inclusion programmes, including Graduation. Draws on the 2023 Landscape Survey of 125+ programmes.",
    url: "https://www.peiglobal.org",
    audience: ["Funder", "Government", "Researcher"],
  },
  {
    type: "Case Study",
    title: "Graduating the Poor: Completion Report of the CGAP-Ford Initiative",
    authors: "World Bank / CGAP, 2018",
    desc: "Reflections from a decade of pilots across 8 countries. Lessons on what worked, what didn't, and where the field went next.",
    url: "https://documents1.worldbank.org",
    audience: ["Implementer", "Funder", "Researcher"],
  },
  {
    type: "Brief",
    title: "Improving Nutrition with the Graduation Approach: A Technical Learning Brief",
    authors: "Mercy Corps & Catholic Relief Services, 2023",
    desc: "How to layer nutrition outcomes onto a Graduation programme. Practical, recent, action-oriented.",
    url: "#",
    audience: ["Implementer"],
  },
];

const types = ["Toolkit", "Paper", "Report", "Case Study", "Brief"];

export default function ResourcesPage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="mb-10 max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          Resources
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          A library, not a content farm
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          We don't publish — we curate. Below: the most useful toolkits,
          studies, and reports for anyone working on Graduation.
        </p>
      </div>

      {types.map((type) => {
        const items = resources.filter((r) => r.type === type);
        if (!items.length) return null;
        return (
          <section key={type} className="mb-12">
            <h2 className="font-display text-2xl text-forest-900 mb-5">{type}s</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {items.map((r) => (
                <a
                  key={r.title}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-ink-900/10 rounded-lg p-5 bg-cream-50 hover:border-clay-400/50 no-underline"
                >
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    {r.audience.map((a) => (
                      <span key={a} className="pill-ink">{a}</span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg text-forest-900 leading-tight">{r.title}</h3>
                  <div className="text-xs text-ink-500 mt-1 italic">{r.authors}</div>
                  <p className="mt-3 text-sm text-ink-700 leading-relaxed">{r.desc}</p>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
