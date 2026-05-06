import Link from "next/link";
import { people, orgs, type PersonCategory } from "@/data/seed";

export const metadata = { title: "People — GraduationApproach.org" };

const categoryOrder: { key: PersonCategory; title: string; blurb: string }[] = [
  {
    key: "Practitioner",
    title: "Practitioners",
    blurb:
      "The people running programmes day-to-day, from BRAC's TUP to Fonkoze's CLM to BOMA's REAP. Most are open to a 30-minute call.",
  },
  {
    key: "Researcher",
    title: "Researchers & evaluators",
    blurb:
      "The economists and evaluators who built the evidence base — from the 2015 six-country Banerjee–Duflo RCT to the 2022 Sahel ASP study in Nature.",
  },
  {
    key: "FieldBuilder",
    title: "Field builders",
    blurb:
      "Senior staff at PEI, BRAC UPGI, and elsewhere who shape how the field talks to itself — through technical guides, landscape surveys, and government TA.",
  },
  {
    key: "Government",
    title: "Government leaders",
    blurb:
      "Mission directors and senior officials running state-led economic inclusion programmes — Bihar's JEEViKA, Odisha's OLM, and others.",
  },
  {
    key: "Funder",
    title: "Funders",
    blurb:
      "The philanthropists and institutions financing the work, from Ford Foundation's role anchoring the original CGAP-Ford pilots to Co-Impact backing today's scale-up.",
  },
];

export default function PeoplePage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          People
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          The humans behind the work
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          Practitioners, researchers, government leaders and funders who have
          shaped the Graduation field. Listed only with consent or where
          publicly identified. Categorised so you can find the right person
          for the right conversation.
        </p>
      </div>

      {categoryOrder.map(({ key, title, blurb }) => {
        const inCategory = people.filter((p) => p.category === key);
        if (!inCategory.length) return null;
        return (
          <section key={key} className="mb-14">
            <div className="mb-6 max-w-3xl">
              <h2 className="font-display text-2xl text-forest-900">{title}</h2>
              <p className="mt-1.5 text-sm text-ink-700 leading-relaxed">{blurb}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inCategory.map((p) => {
                const org = orgs.find((o) => o.slug === p.affiliation);
                return (
                  <Link
                    key={p.slug}
                    href={`/people/${p.slug}`}
                    className="block border border-ink-900/10 rounded-lg p-5 bg-cream-50 hover:border-clay-400/50 no-underline"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-clay-500 text-cream-50 font-display flex items-center justify-center text-lg flex-shrink-0">
                        {initials(p.name)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-display text-base text-forest-900 leading-tight">{p.name}</div>
                        <div className="text-xs text-ink-500 mt-1">{p.currentRole}</div>
                        <div className="text-xs text-ink-500 mt-0.5">{org?.name}</div>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {p.expertise.slice(0, 2).map((tag) => (
                            <span key={tag} className="pill-ink">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function initials(name: string) {
  // Strip placeholder modifiers like "(placeholder)" before initialising
  const clean = name.replace(/\([^)]*\)/g, "").trim();
  return clean.split(" ").slice(0, 2).map((n) => n[0]).join("");
}
