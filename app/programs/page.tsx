import Link from "next/link";
import { programs, orgs, countryNames } from "@/data/seed";

export const metadata = {
  title: "Programmes — GraduationApproach.org",
};

export default function ProgramsPage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="mb-10 max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          Programmes
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          Every programme we know about, in one place
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          {programs.length} programmes catalogued so far. We're adding 10–20
          more every week as the directory grows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map((p) => {
          const impl = orgs.find((o) => o.slug === p.primaryImplementer);
          return (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="block border border-ink-900/10 rounded-lg p-6 bg-cream-50 hover:border-clay-400/50 hover:shadow-sm transition-all no-underline group"
            >
              <div className="flex items-center gap-2 mb-3 text-xs">
                <span className="pill-forest">{p.model}</span>
                <span className="pill-ink">{p.status}</span>
              </div>
              <h3 className="font-display text-xl text-forest-900 leading-tight group-hover:text-clay-700">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed line-clamp-2">
                {p.oneLiner}
              </p>
              <div className="mt-5 pt-4 border-t border-ink-900/5 flex items-center justify-between text-xs text-ink-500">
                <span>{impl?.name}</span>
                <span className="font-mono">
                  {p.countries.map((c) => countryNames[c] || c).slice(0, 2).join(" · ")}
                  {p.countries.length > 2 && ` +${p.countries.length - 2}`}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
