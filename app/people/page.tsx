import Link from "next/link";
import { people, orgs } from "@/data/seed";

export const metadata = { title: "People — GraduationApproach.org" };

export default function PeoplePage() {
  return (
    <div className="container-wide py-12 lg:py-16">
      <div className="mb-10 max-w-3xl">
        <div className="text-xs tracking-[0.25em] uppercase text-clay-600 mb-3">
          People
        </div>
        <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">
          The humans behind the work
        </h1>
        <p className="mt-4 text-lg text-ink-700 leading-relaxed">
          Practitioners, researchers, government leaders and funders who have
          shaped the Graduation field. Listed only with consent or where
          publicly identified.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((p) => {
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
    </div>
  );
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
}
