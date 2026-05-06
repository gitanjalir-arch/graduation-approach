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

const nav = [
  { href: "/atlas", label: "Atlas" },
  { href: "/programs", label: "Programs" },
  { href: "/orgs", label: "Organisations" },
  { href: "/people", label: "People" },
  { href: "/evidence", label: "Evidence" },
  { href: "/models", label: "Models" },
  { href: "/resources", label: "Resources" },
  { href: "/get-started", label: "Get Started" },
];

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
    <div className="bg-forest-800 text-cream-100 text-xs">
      <div className="container-wide py-2 flex items-center justify-between gap-4">
        <span>
          <span className="pill bg-clay-400 text-cream-50 border-transparent mr-2">
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
    <header className="border-b border-ink-900/10 bg-cream-50/80 backdrop-blur sticky top-0 z-40">
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
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-700 hover:text-clay-600 no-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/community"
          className="hidden md:inline-block text-sm bg-forest-700 text-cream-50 px-4 py-2 rounded-full no-underline hover:bg-forest-800"
        >
          Join
        </Link>
      </div>
      <nav className="lg:hidden border-t border-ink-900/5 overflow-x-auto">
        <div className="flex gap-5 px-6 py-3 text-xs whitespace-nowrap">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-700 hover:text-clay-600 no-underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="18" cy="18" r="16" stroke="#3D5A40" strokeWidth="1.5" fill="#FDFAF4" />
      <path d="M 6 26 Q 18 4 30 26" stroke="#D97757" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="26" r="2.2" fill="#D97757" />
    </svg>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-forest-900 text-cream-100 mt-24">
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
          <form className="mt-6 flex gap-2 max-w-md" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <input
              type="email"
              placeholder="your@work.email"
              className="flex-1 bg-forest-800 border border-cream-100/20 px-3 py-2 rounded-md text-sm text-cream-50 placeholder:text-cream-100/40"
            />
            <button
              type="submit"
              className="bg-clay-500 hover:bg-clay-600 text-cream-50 px-4 py-2 rounded-md text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-xs text-cream-100/50">
            Quarterly newsletter. No spam. Unsubscribe anytime.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-cream-100/50 mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            {nav.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream-100 no-underline hover:text-clay-400">
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
            <li><Link href="/get-started" className="text-cream-100 no-underline hover:text-clay-400">Get Started</Link></li>
            <li><Link href="/community" className="text-cream-100 no-underline hover:text-clay-400">Community</Link></li>
            <li><Link href="/about" className="text-cream-100 no-underline hover:text-clay-400">About</Link></li>
            <li><Link href="/about#contribute" className="text-cream-100 no-underline hover:text-clay-400">Contribute data</Link></li>
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
