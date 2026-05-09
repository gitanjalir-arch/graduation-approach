import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "GraduationApproach.org — The home of the Graduation Approach",
  description:
    "A community-curated atlas, library and directory of poverty graduation programmes worldwide. Built for practitioners, researchers, funders and governments.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "GraduationApproach.org",
    description: "A community-curated atlas of poverty graduation programmes worldwide.",
    url: "https://graduation-approach.vercel.app",
    siteName: "GraduationApproach.org",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GraduationApproach.org",
    description: "A community-curated atlas of poverty graduation programmes worldwide.",
    images: ["/og-image.png"],
  },
};

type NavItem = { href: string; label: string; sub?: string };
type NavGroupDef = { label: string; firstHref: string; items: NavItem[] };

const navGroups: NavGroupDef[] = [
  {
    label: "Explore",
    firstHref: "/atlas",
    items: [
      { href: "/atlas", label: "Atlas", sub: "Map of the field" },
      { href: "/programs", label: "Programmes", sub: "Field-level entries" },
      { href: "/orgs", label: "Organisations", sub: "Implementers & funders" },
      { href: "/people", label: "People", sub: "Researchers & practitioners" },
    ],
  },
  {
    label: "Learn",
    firstHref: "/elements",
    items: [
      { href: "/elements", label: "Elements", sub: "The building blocks" },
      { href: "/models", label: "Models", sub: "Variants of the approach" },
      { href: "/impact", label: "Impact", sub: "Measuring outcomes" },
      { href: "/coaching", label: "Coaching Intensity", sub: "Light to high touch" },
      { href: "/sustainability", label: "Sustainability", sub: "Long-term durability" },
      { href: "/evidence", label: "Evidence", sub: "Studies & evaluations" },
      { href: "/resources", label: "Resources", sub: "Tools & reading" },
    ],
  },
  {
    label: "Community",
    firstHref: "/get-started",
    items: [
      { href: "/get-started", label: "Get Started", sub: "Choose your path" },
      { href: "/community", label: "Community", sub: "Join the network" },
      { href: "/about", label: "About", sub: "Our mission" },
    ],
  },
];

const allNavItems: NavItem[] = navGroups.flatMap((g) => g.items);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DraftBanner />
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function DraftBanner() {
  return (
    <div className="bg-forest-900 text-cream-100 text-xs">
      <div className="container-wide py-1.5 flex items-center justify-between gap-4">
        <span>
          <span className="pill bg-clay-400 text-white border-transparent mr-2">
            DRAFT
          </span>
          This is an early preview. Data is being verified — please do not cite
          yet.
        </span>
        <Link
          href="/about#contribute"
          className="text-cream-100 underline decoration-cream-100/40 hover:decoration-cream-100"
        >
          Help build it →
        </Link>
      </div>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-ink-900/10 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="container-wide py-4 flex items-center justify-between gap-8">
        <Link href="/" className="no-underline group">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="font-display text-lg leading-none text-forest-900 group-hover:text-clay-600 transition-colors">
                GraduationApproach<span className="text-clay-500">.org</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-ink-500 mt-1">
                A community-curated atlas of poverty graduation
              </div>
            </div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {navGroups.slice(0, 2).map((group) => (
            <NavGroup key={group.label} label={group.label} items={group.items} />
          ))}
          <Link
            href="/ask"
            className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-forest-700 py-2 font-medium no-underline transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Ask
          </Link>
          {navGroups.slice(2).map((group) => (
            <NavGroup key={group.label} label={group.label} items={group.items} />
          ))}
        </nav>
        <Link
          href="/community"
          className="hidden md:inline-block text-sm bg-forest-700 text-white px-5 py-2 rounded-full no-underline hover:bg-forest-800 transition-colors font-medium"
        >
          Join
        </Link>
      </div>
      <nav className="lg:hidden border-t border-slate-100 overflow-x-auto">
        <div className="flex gap-6 px-6 py-3 text-xs whitespace-nowrap">
          {navGroups.slice(0, 2).map((group) => (
            <Link
              key={group.label}
              href={group.firstHref}
              className="text-slate-600 hover:text-forest-700 no-underline"
            >
              {group.label}
            </Link>
          ))}
          <Link href="/ask" className="text-slate-600 hover:text-forest-700 no-underline font-medium">
            Ask
          </Link>
          {navGroups.slice(2).map((group) => (
            <Link
              key={group.label}
              href={group.firstHref}
              className="text-slate-600 hover:text-forest-700 no-underline"
            >
              {group.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function NavGroup({
  label,
  items,
}: {
  label: string;
  items: NavItem[];
}) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-forest-700 py-2 font-medium">
        {label}
        <svg
          className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col px-4 py-2.5 hover:bg-forest-700/5 no-underline group/item"
            >
              <span className="text-sm font-medium text-ink-900 group-hover/item:text-forest-700">
                {item.label}
              </span>
              {item.sub && (
                <span className="text-xs text-ink-500">{item.sub}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="20" cy="20" r="18" fill="#0F766E" />
      <path
        d="M 7 28 Q 20 6 33 22"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="33" cy="22" r="3" fill="#2DD4BF" />
      <circle cx="7" cy="28" r="2" fill="#99F6E4" opacity="0.8" />
    </svg>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-forest-900 text-cream-100 mt-24 border-t-4 border-clay-500">
      <div className="container-wide py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-cream-50">
            GraduationApproach<span className="text-clay-400">.org</span>
          </div>
          <p className="mt-3 text-sm text-cream-100/80 max-w-md leading-relaxed">
            A community-curated home for the Graduation Approach to ending
            ultra-poverty. Built by and for practitioners, researchers, funders
            and governments around the world.
          </p>
          <form
            className="mt-6 flex gap-2 max-w-md"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <input
              type="email"
              placeholder="your@work.email"
              className="flex-1 bg-forest-800 border border-cream-100/20 px-3 py-2 rounded-md text-sm text-cream-50 placeholder:text-cream-100/40"
            />
            <button
              type="submit"
              className="bg-clay-500 hover:bg-clay-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-xs text-cream-100/50">
            Quarterly newsletter. No spam. Unsubscribe anytime.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-cream-100/50 mb-3">
            Explore
          </div>
          <ul className="space-y-2 text-sm">
            {allNavItems.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-100 no-underline hover:text-clay-400 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-cream-100/50 mb-3">
            Learn & contribute
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/get-started"
                className="text-cream-100 no-underline hover:text-clay-400 transition-colors"
              >
                Get Started
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="text-cream-100 no-underline hover:text-clay-400 transition-colors"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-cream-100 no-underline hover:text-clay-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/about#contribute"
                className="text-cream-100 no-underline hover:text-clay-400 transition-colors"
              >
                Contribute data
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-100/10">
        <div className="container-wide py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-cream-100/60">
          <span>
            © {new Date().getFullYear()} GraduationApproach.org · An independent community project
          </span>
          <span>
            Inspired by the work of BRAC, CGAP, the Partnership for Economic
            Inclusion, and every implementer in the field.
          </span>
        </div>
      </div>
    </footer>
  );
}
