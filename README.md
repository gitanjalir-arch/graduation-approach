# GraduationApproach.org

A community-curated atlas, library and directory of poverty graduation programmes worldwide.

This repo is the launch scaffold — Next.js 14 (App Router) + TypeScript + Tailwind CSS. All content currently comes from a static seed file at `data/seed.ts`. A real database (Supabase) and editor permissions layer come in Phase 2.

## What's in this scaffold

- **Homepage** — hero, model explainer, featured programmes, evidence highlights, audience pathways
- **Atlas** — interactive SVG world map with status filters and click-to-detail
- **Programmes** — index + detail pages for 12 seed programmes (BRAC TUP, Fonkoze CLM, JEEViKA-SJY, The/Nudge Economic Inclusion, BOMA REAP, etc.)
- **Organisations** — index + detail for 23 implementers, governments, funders, researchers, TA partners
- **People** — index + detail for 8 figures in the field
- **Evidence** — 5 seed evaluation studies
- **Models** — six-variant comparator (Classic, Cash-Plus, Coaching-Only, Whole-of-Village, Refugee, Govt-Embedded)
- **Resources** — curated library
- **Get Started** — three audience pathways (implementers, funders, researchers)
- **About** — mission, contribution guidance, accuracy notes
- **Community** — illustrative join form, Q&A, office hours

## Deployment (≈ 30 minutes)

### 1. Push to GitHub
```bash
cd graduation-approach
git init
git add -A
git commit -m "initial scaffold"
gh repo create graduation-approach --public --source=. --push
# or create the repo manually on github.com and push to it
```

### 2. Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repo
3. Vercel auto-detects Next.js — accept all defaults, no env vars needed
4. Click **Deploy**. First deploy takes 2–3 minutes.
5. You'll get a `graduation-approach-<hash>.vercel.app` URL.

### 3. Custom domain
1. Buy `graduationapproach.org` (Namecheap, Cloudflare, Google Domains — ~$15/yr).
2. In your Vercel project: **Settings → Domains → Add**.
3. Vercel shows the DNS records to add at your registrar (an A record + CNAME).
4. SSL certificate is auto-issued. Live in ~10 minutes.

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## How to add real data

All seed data lives in `data/seed.ts`. The file is well-typed — TypeScript will tell you what each field expects. To add a programme:

1. Open `data/seed.ts`
2. Add an entry to the `programs` array following the existing pattern
3. If the implementing org isn't already in `orgs`, add it
4. Save — the page is automatically generated

For people who haven't given consent to be listed publicly, leave `contactPref: "none"` and write a brief, factual bio from public sources.

## Phase 2 (when you're ready)

The PRD outlines a full Phase 2 with Supabase auth, email-verified editor permissions, edit queues, and automated newsletter. The clean separation of `data/seed.ts` means you can swap to a database without rewriting any pages.

## Tech stack

- **Framework**: Next.js 14 (App Router), static-generated
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom warm earth-tone palette
- **Fonts**: Fraunces (display) + Instrument Sans (body) + JetBrains Mono (stats), all from Google Fonts via `<link>` (auto-optimised on Vercel)
- **Hosting**: Vercel (free tier handles this comfortably)
- **No database** in the scaffold — all data is statically embedded.

## Honest caveats

- This is a **launch dataset**. Programme records have been compiled from public sources and have *not* been verified by the implementing organisations. The persistent "DRAFT" banner at the top of every page makes this clear.
- The world map is intentionally rough — the continent silhouettes are hand-drawn approximations. For a production-grade map, swap `app/atlas/world-geo.ts` for a Natural Earth simplified GeoJSON.
- Person bios and photos are missing. The avatar circles use initials. Real photos require explicit consent from each person.
- The newsletter form, "request to join" form, and "ask a question" buttons are illustrative — they don't submit anywhere yet. Wire them to a Google Form or Formspree as a quick interim step before Phase 2.

## Licence

Code: MIT. Curated data: CC BY-SA 4.0 (same approach as Wikipedia and Our World in Data).
