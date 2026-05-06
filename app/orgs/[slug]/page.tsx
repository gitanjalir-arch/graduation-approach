import Link from "next/link";
import { notFound } from "next/navigation";
import { orgs, programs, people, getOrg, programsByOrg } from "@/data/seed";

export function generateStaticParams() {
  return orgs.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const o = getOrg(params.slug);
  if (!o) return {};
  return { title: `${o.name} — GraduationApproach.org`, description: o.blurb };
}

export default function OrgPage({ params }: { params: { slug: string } }) {
  const o = getOrg(params.slug);
  if (!o) return notFound();

  const orgPrograms = programsByOrg(o.slug);
  const orgPeople = people.filter((p) => p.affiliation === o.slug);

  const asPrimary = programs.filter((p) => p.primaryImplementer === o.slug || p.govtImplementer === o.slug);
  const asTA = programs.filter((p) => p.taPartners.includes(o.slug));
  const asFunder = programs.filter((p) => p.funders.includes(o.slug));

  return (
    <article>
      <header className="paper border-b border-ink-900/10">
        <div className="container-wide py-12 lg:py-16">
          <Link href="/orgs" className="text-xs tracking-widest uppercase text-clay-600 no-underline">
            ← All organisations
          </Link>
          <div className="flex items-center gap-5 mt-6">
            <div className="w-20 h-20 rounded-full bg-forest-700 text-cream-50 font-display text-3xl flex items-center justify-center">
              {o.name[0]}
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase text-clay-600 mb-1">{typeLabel(o.type)}</div>
              <h1 className="font-display text-4xl lg:text-5xl text-forest-900 leading-tight">{o.name}</h1>
              <div className="text-sm text-ink-500 mt-1">{o.hq}</div>
            </div>
          </div>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed max-w-3xl">{o.blurb}</p>
          {o.website && (
            <a href={o.website} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-medium">
              {o.website.replace(/^https?:\/\//, "")} ↗
            </a>
          )}
        </div>
      </header>

      <div className="container-wide py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {asPrimary.length > 0 && (
            <Section title="Programmes implemented" count={asPrimary.length}>
              <ProgramList items={asPrimary} />
            </Section>
          )}
          {asTA.length > 0 && (
            <Section title="Programmes supported (TA)" count={asTA.length}>
              <ProgramList items={asTA} />
            </Section>
          )}
          {asFunder.length > 0 && (
            <Section title="Programmes funded" count={asFunder.length}>
              <ProgramList items={asFunder} />
            </Section>
          )}
          {orgPeople.length > 0 && (
            <Section title="People" count={orgPeople.length}>
              <div className="grid sm:grid-cols-2 gap-3">
                {orgPeople.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/people/${p.slug}`}
                    className="border border-ink-900/10 rounded-lg p-4 bg-cream-50 no-underline hover:border-clay-400/50"
                  >
                    <div className="font-display text-base text-forest-900">{p.name}</div>
                    <div className="text-xs text-ink-500 mt-1">{p.currentRole}</div>
                  </Link>
                ))}
              </div>
            </Section>
          )}
        </div>
        <aside className="lg:col-span-4 space-y-6">
          <div className="border border-ink-900/10 rounded-lg p-5 bg-cream-50">
            <h3 className="font-display text-lg text-forest-900 mb-3">Quick stats</h3>
            <dl className="space-y-3 text-sm">
              <Row k="Programmes (all roles)" v={orgPrograms.length.toString()} />
              <Row k="People listed" v={orgPeople.length.toString()} />
              <Row k="Type" v={typeLabel(o.type)} />
            </dl>
          </div>
          <div className="border border-ink-900/10 rounded-lg p-5 bg-cream-50">
            <h3 className="font-display text-lg text-forest-900 mb-3">Work here?</h3>
            <p className="text-sm text-ink-700 leading-relaxed">
              Sign in with your work email to claim editorship of this page and the programmes it links to.
            </p>
            <Link href="/community" className="inline-block mt-3 text-sm font-medium">
              Get verified →
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}

function Section({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-5 pb-2 border-b border-ink-900/10">
        <h2 className="font-display text-2xl text-forest-900">{title}</h2>
        <span className="text-sm text-ink-500 font-mono">{count}</span>
      </div>
      {children}
    </section>
  );
}

function ProgramList({ items }: { items: typeof programs }) {
  return (
    <div className="space-y-2">
      {items.map((p) => (
        <Link
          key={p.slug}
          href={`/programs/${p.slug}`}
          className="block border border-ink-900/10 rounded-md px-4 py-3 bg-cream-50 hover:border-clay-400/50 no-underline group"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-display text-base text-forest-900 group-hover:text-clay-700">{p.name}</div>
              <div className="text-xs text-ink-500 mt-0.5">{p.oneLiner}</div>
            </div>
            <div className="flex items-center gap-2 text-xs flex-shrink-0">
              <span className="pill-forest">{p.model}</span>
              <span className="text-ink-500">{p.startYear}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-ink-500">{k}</dt>
      <dd className="font-medium text-ink-900">{v}</dd>
    </div>
  );
}

function typeLabel(t: string) {
  return ({ NGO: "Implementer", Govt: "Government", Funder: "Funder", Research: "Research", TA: "Technical Assistance" } as const)[t as "NGO"] || t;
}
