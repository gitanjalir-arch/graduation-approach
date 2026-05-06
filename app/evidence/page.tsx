import Link from "next/link";
import { evidence, orgs, getProgram } from "@/data/seed";

export const metadata = { title: "Evidence — GraduationApproach.org" };

export default function EvidencePage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="mb-10 max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          Evidence
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          The studies that built the field
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          The Graduation Approach is among the most rigorously evaluated
          anti-poverty interventions in modern development. Below is a curated
          set of the most cited and methodologically robust evaluations.
        </p>
      </div>

      <div className="grid gap-4">
        {evidence.map((e) => {
          const program = getProgram(e.programSlug);
          const evaluator = orgs.find((o) => o.slug === e.evaluatorOrg);
          return (
            <article
              key={e.slug}
              className="border border-ink-900/10 rounded-lg p-6 bg-cream-50 hover:border-clay-400/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3 text-xs flex-wrap">
                <span className="pill-clay">{e.methodology}</span>
                <span className="pill-ink">{e.year}</span>
                <span className="pill-forest">{e.finding}</span>
              </div>
              <h2 className="font-display text-xl text-forest-900 leading-tight">
                {e.title}
              </h2>
              <p className="mt-3 text-ink-700 leading-relaxed max-w-3xl">{e.headline}</p>
              <div className="mt-4 pt-4 border-t border-ink-900/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                {program && (
                  <div>
                    <span className="text-xs uppercase tracking-wider text-ink-500">Programme</span>{" "}
                    <Link href={`/programs/${program.slug}`} className="font-medium">
                      {program.name}
                    </Link>
                  </div>
                )}
                {evaluator && (
                  <div>
                    <span className="text-xs uppercase tracking-wider text-ink-500">Evaluator</span>{" "}
                    <Link href={`/orgs/${evaluator.slug}`} className="font-medium">
                      {evaluator.shortName || evaluator.name}
                    </Link>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 text-center text-sm text-ink-500">
        More than 60 evaluations have been published. We're adding the rest week by week.
      </div>
    </div>
  );
}
