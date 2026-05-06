import Link from "next/link";
import { notFound } from "next/navigation";
import {
  programs,
  orgs,
  evidence,
  people,
  countryNames,
  getProgram,
} from "@/data/seed";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProgram(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — GraduationApproach.org`,
    description: p.oneLiner,
  };
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const p = getProgram(params.slug);
  if (!p) return notFound();

  const impl = orgs.find((o) => o.slug === p.primaryImplementer);
  const govt = p.govtImplementer ? orgs.find((o) => o.slug === p.govtImplementer) : null;
  const taOrgs = p.taPartners.map((s) => orgs.find((o) => o.slug === s)).filter(Boolean);
  const funderOrgs = p.funders.map((s) => orgs.find((o) => o.slug === s)).filter(Boolean);
  const programEvidence = evidence.filter((e) => e.programSlug === p.slug);
  const programPeople = people.filter(
    (per) =>
      per.affiliation === p.primaryImplementer ||
      per.affiliation === p.govtImplementer ||
      p.taPartners.includes(per.affiliation),
  );

  return (
    <article>
      {/* HERO */}
      <header className="paper border-b border-ink-900/10">
        <div className="container-wide py-12 lg:py-16">
          <Link
            href="/programs"
            className="text-xs tracking-widest uppercase text-clay-600 no-underline"
          >
            ← All programmes
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="pill-forest">{p.model}</span>
            <span className="pill-ink">{p.status}</span>
            <span className="text-ink-500">since {p.startYear}{p.endYear && ` — ${p.endYear}`}</span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl text-forest-900 leading-tight mt-3 max-w-4xl">
            {p.name}
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-ink-700 leading-relaxed max-w-3xl">
            {p.oneLiner}
          </p>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 max-w-4xl">
            <HeroStat
              num={p.hhEnrolled ? formatHH(p.hhEnrolled) : "—"}
              label="Households enrolled"
            />
            <HeroStat
              num={p.hhGraduated ? formatHH(p.hhGraduated) : "—"}
              label="Graduated"
            />
            <HeroStat
              num={p.durationMonths ? `${p.durationMonths} mo` : "—"}
              label="Per-HH duration"
            />
            <HeroStat
              num={p.countries.length.toString()}
              label={p.countries.length === 1 ? "Country" : "Countries"}
            />
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container-wide py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <Section title="Overview">
            <p className="text-ink-700 leading-relaxed text-lg">{p.description}</p>
          </Section>

          <Section title="Implementation owners">
            <div className="space-y-4">
              <OwnerRow
                tier="Primary implementer"
                org={impl}
                accent="forest"
              />
              {govt && <OwnerRow tier="Government partner" org={govt} accent="ochre" />}
              {taOrgs.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-ink-500 mb-2">
                    Technical assistance
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {taOrgs.map(
                      (o) =>
                        o && (
                          <Link
                            key={o.slug}
                            href={`/orgs/${o.slug}`}
                            className="pill-clay no-underline"
                          >
                            {o.shortName || o.name}
                          </Link>
                        ),
                    )}
                  </div>
                </div>
              )}
              {funderOrgs.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-ink-500 mb-2">
                    Funders
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {funderOrgs.map(
                      (o) =>
                        o && (
                          <Link
                            key={o.slug}
                            href={`/orgs/${o.slug}`}
                            className="pill-ochre no-underline"
                          >
                            {o.shortName || o.name}
                          </Link>
                        ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </Section>

          <Section title="Geography">
            <div className="grid sm:grid-cols-2 gap-3">
              {p.countries.map((c) => (
                <div
                  key={c}
                  className="border border-ink-900/10 rounded-lg p-4 bg-cream-50"
                >
                  <div className="text-2xl">🌍</div>
                  <div className="mt-2 font-display text-base text-forest-900">
                    {countryNames[c] || c}
                  </div>
                  {p.region && p.countries.length === 1 && (
                    <div className="text-xs text-ink-500 mt-0.5">{p.region}</div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {p.livelihoodsBasket && (
            <Section title="Livelihoods basket">
              <LivelihoodsBar basket={p.livelihoodsBasket} />
            </Section>
          )}

          {programEvidence.length > 0 && (
            <Section title="Evidence">
              <div className="space-y-3">
                {programEvidence.map((e) => (
                  <article
                    key={e.slug}
                    className="border border-ink-900/10 rounded-lg p-5 bg-cream-50"
                  >
                    <div className="flex items-center gap-2 mb-2 text-xs">
                      <span className="pill-clay">{e.methodology}</span>
                      <span className="text-ink-500">{e.year}</span>
                    </div>
                    <h3 className="font-display text-lg text-forest-900">{e.title}</h3>
                    <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                      {e.headline}
                    </p>
                  </article>
                ))}
              </div>
            </Section>
          )}

          {programPeople.length > 0 && (
            <Section title="People">
              <div className="grid sm:grid-cols-2 gap-3">
                {programPeople.slice(0, 4).map((per) => (
                  <Link
                    key={per.slug}
                    href={`/people/${per.slug}`}
                    className="border border-ink-900/10 rounded-lg p-4 bg-cream-50 no-underline hover:border-clay-400/50"
                  >
                    <div className="font-display text-base text-forest-900">
                      {per.name}
                    </div>
                    <div className="text-xs text-ink-500 mt-1">
                      {per.currentRole}
                    </div>
                  </Link>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-6">
          <SideCard title="Model">
            <dl className="space-y-3 text-sm">
              <Row k="Variant" v={p.model} />
              <Row k="Duration" v={`${p.durationMonths} months`} />
              {p.costPerHhUsd && <Row k="Cost / HH" v={`$${p.costPerHhUsd}`} />}
              {p.graduationRate && (
                <Row k="Graduation rate" v={`${(p.graduationRate * 100).toFixed(0)}%`} />
              )}
            </dl>
          </SideCard>

          <SideCard title="Edit this page">
            <p className="text-sm text-ink-700 leading-relaxed">
              Work at one of the linked organisations? Sign in with your work
              email to claim editorship of this page.
            </p>
            <Link
              href="/community"
              className="mt-3 inline-block text-sm font-medium"
            >
              Join to edit →
            </Link>
          </SideCard>

          <SideCard title="Last verified">
            <p className="text-xs text-ink-500">
              This page is part of our launch dataset. Information has not yet
              been verified by the implementing organisation. If you spot an
              error, let us know.
            </p>
          </SideCard>
        </aside>
      </div>
    </article>
  );
}

// ============ Helpers ============
function formatHH(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return n.toString();
}

function HeroStat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl lg:text-4xl text-forest-900 leading-none">
        {num}
      </div>
      <div className="mt-1.5 text-xs uppercase tracking-widest text-ink-500">
        {label}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-forest-900 mb-5 pb-2 border-b border-ink-900/10">
        {title}
      </h2>
      {children}
    </section>
  );
}

function OwnerRow({
  tier,
  org,
  accent,
}: {
  tier: string;
  org: ReturnType<typeof orgs.find>;
  accent: "forest" | "ochre";
}) {
  if (!org) return null;
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-ink-500 mb-2">
        {tier}
      </div>
      <Link
        href={`/orgs/${org.slug}`}
        className={`flex items-center gap-3 border rounded-lg p-3 bg-cream-50 hover:border-clay-400/50 no-underline ${
          accent === "forest" ? "border-forest-600/30" : "border-ochre-400/40"
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-cream-50 font-display ${
            accent === "forest" ? "bg-forest-700" : "bg-ochre-500"
          }`}
        >
          {org.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display text-base text-forest-900">{org.name}</div>
          <div className="text-xs text-ink-500 truncate">{org.blurb}</div>
        </div>
      </Link>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-ink-500">{k}</dt>
      <dd className="font-medium text-ink-900 text-right">{v}</dd>
    </div>
  );
}

function SideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-ink-900/10 rounded-lg p-5 bg-cream-50">
      <h3 className="font-display text-lg text-forest-900 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function LivelihoodsBar({
  basket,
}: {
  basket: { farm: number; nonFarm: number; mixed: number };
}) {
  return (
    <div>
      <div className="flex w-full h-12 rounded-md overflow-hidden border border-ink-900/10">
        <div
          className="bg-forest-700 text-cream-50 flex items-center justify-center text-xs font-medium"
          style={{ width: `${basket.farm * 100}%` }}
        >
          Farm {Math.round(basket.farm * 100)}%
        </div>
        <div
          className="bg-clay-500 text-cream-50 flex items-center justify-center text-xs font-medium"
          style={{ width: `${basket.nonFarm * 100}%` }}
        >
          Non-farm {Math.round(basket.nonFarm * 100)}%
        </div>
        <div
          className="bg-ochre-500 text-cream-50 flex items-center justify-center text-xs font-medium"
          style={{ width: `${basket.mixed * 100}%` }}
        >
          Mixed {Math.round(basket.mixed * 100)}%
        </div>
      </div>
    </div>
  );
}
