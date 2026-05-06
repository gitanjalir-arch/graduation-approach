import Link from "next/link";
import { orgs } from "@/data/seed";

export const metadata = { title: "Organisations — GraduationApproach.org" };

const types = ["NGO", "Govt", "Funder", "Research", "TA"] as const;

export default function OrgsPage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="mb-10 max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          Organisations
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          The institutions behind the work
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          Implementers, governments, funders, researchers and technical-assistance
          partners — every organisation contributing to the Graduation field.
        </p>
      </div>

      {types.map((type) => {
        const inType = orgs.filter((o) => o.type === type);
        if (!inType.length) return null;
        return (
          <section key={type} className="mb-12">
            <h2 className="font-display text-2xl text-forest-900 mb-5">{typeLabel(type)}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inType.map((o) => (
                <Link
                  key={o.slug}
                  href={`/orgs/${o.slug}`}
                  className="block border border-ink-900/10 rounded-lg p-5 bg-cream-50 hover:border-clay-400/50 no-underline"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-forest-700 text-cream-50 font-display flex items-center justify-center">
                      {o.name[0]}
                    </div>
                    <div>
                      <div className="font-display text-base text-forest-900 leading-tight">
                        {o.shortName || o.name}
                      </div>
                      <div className="text-xs text-ink-500">{o.hq}</div>
                    </div>
                  </div>
                  <p className="text-sm text-ink-700 leading-relaxed line-clamp-2">{o.blurb}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function typeLabel(t: string) {
  return ({
    NGO: "Implementers",
    Govt: "Governments & state missions",
    Funder: "Funders",
    Research: "Researchers",
    TA: "Technical assistance",
  } as const)[t as "NGO"] || t;
}
