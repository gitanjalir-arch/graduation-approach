import Link from "next/link";
import { notFound } from "next/navigation";
import { people, orgs, programs, getPerson } from "@/data/seed";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getPerson(params.slug);
  if (!p) return {};
  return { title: `${p.name} — GraduationApproach.org`, description: p.bio };
}

export default function PersonPage({ params }: { params: { slug: string } }) {
  const p = getPerson(params.slug);
  if (!p) return notFound();

  const org = orgs.find((o) => o.slug === p.affiliation);
  const associated = programs.filter(
    (pr) =>
      pr.primaryImplementer === p.affiliation ||
      pr.govtImplementer === p.affiliation ||
      pr.taPartners.includes(p.affiliation),
  );

  return (
    <article className="container-wide py-12 lg:py-16">
      <Link href="/people" className="text-xs tracking-widest uppercase text-clay-600 no-underline">
        ← All people
      </Link>

      <div className="grid lg:grid-cols-12 gap-12 mt-8">
        <div className="lg:col-span-4">
          <div className="w-32 h-32 rounded-full bg-clay-500 text-cream-50 font-display flex items-center justify-center text-5xl">
            {p.name.split(" ").slice(0, 2).map((n) => n[0]).join("")}
          </div>
          <h1 className="font-display text-3xl text-forest-900 leading-tight mt-6">{p.name}</h1>
          <div className="text-sm text-ink-700 mt-1">{p.currentRole}</div>
          {org && (
            <Link href={`/orgs/${org.slug}`} className="text-sm font-medium block mt-1">
              {org.name}
            </Link>
          )}

          <div className="mt-6 space-y-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-ink-500 mb-2">Expertise</div>
              <div className="flex flex-wrap gap-1.5">
                {p.expertise.map((tag) => (
                  <span key={tag} className="pill-ink">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-ink-500 mb-2">Contact</div>
              {p.contactPref === "public_email" ? (
                <span className="text-sm">Email available on request</span>
              ) : p.contactPref === "contact_form" ? (
                <button className="text-sm font-medium text-clay-600">Send a message →</button>
              ) : (
                <span className="text-sm text-ink-500">Not accepting messages</span>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <section>
            <h2 className="font-display text-2xl text-forest-900 mb-3">Bio</h2>
            <p className="text-ink-700 leading-relaxed text-lg">{p.bio}</p>
          </section>

          {associated.length > 0 && (
            <section>
              <h2 className="font-display text-2xl text-forest-900 mb-5 pb-2 border-b border-ink-900/10">
                Associated programmes
              </h2>
              <div className="space-y-2">
                {associated.map((pr) => (
                  <Link
                    key={pr.slug}
                    href={`/programs/${pr.slug}`}
                    className="block border border-ink-900/10 rounded-md px-4 py-3 bg-cream-50 hover:border-clay-400/50 no-underline"
                  >
                    <div className="font-display text-base text-forest-900">{pr.name}</div>
                    <div className="text-xs text-ink-500 mt-0.5">{pr.oneLiner}</div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
