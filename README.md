# Utsav Kalathiya — Freelance Portfolio

Personal freelance website for **Utsav Kalathiya**, Web Developer & Google Ads Specialist (Surat, India).

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide icons. Static, no backend, no animations.

## Commands

```bash
npm install        # install dependencies
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # TypeScript check
npm run verify:metrics  # checks campaign maths and ad copy character limits
npm run build      # production build
npm start          # serve the production build
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/services/web-development` | Website Development |
| `/services/google-ads` | Google Ads |
| `/work` | Portfolio |
| `/work/[slug]` | Project case studies |
| `/about` | About |
| `/contact` | Contact & enquiry form |
| `/sitemap.xml`, `/robots.txt` | SEO |

## Where to update content

| What | File |
|---|---|
| Name, title, email, phone, **WhatsApp**, LinkedIn, GitHub, site URL, nav | `src/config/site.ts` |
| Website projects (real live sites: text, sections, features, stack, screenshot IDs) | `src/data/projects.ts` |
| Screenshot sizes from Cloudinary (generated) | `src/data/cloudinary-manifest.json` |
| Google Ads campaign plans (4 sample inputs per campaign, keywords, ad copy) | `src/data/campaigns.ts` |
| Work categories, related-work logic | `src/data/work.ts` |
| Metric formulas and currency formatting | `src/lib/metrics.ts` |
| Services, process steps, Google Ads deliverables | `src/data/services.ts` |
| FAQs | `src/data/faqs.ts` |
| Skills, experience, education | `src/app/about/page.tsx` |
| Colours | `src/app/globals.css` (`:root`) |

### Enabling WhatsApp

Set `contact.whatsapp` in `src/config/site.ts` to your number in international format, digits only
(for example `"91XXXXXXXXXX"`). WhatsApp buttons then appear in the footer, CTA sections and contact form.

### Site URL

Set `NEXT_PUBLIC_SITE_URL` in your hosting environment (e.g. Vercel) to the final domain, or change the
fallback in `src/config/site.ts`. It is used for canonical URLs, Open Graph and the sitemap.

## Work section

- **Website Development** shows real, live websites. Screenshots are real captures of the live sites.
- **Google Ads** entries with `dataStatus: "illustrative"` show "Illustrative sample data — not actual campaign results"
  on cards, the dashboard and the page footer. Only spend, impressions, clicks and conversions are stored;
  CTR, CPC, conversion rate and cost per conversion are calculated. Use `dataStatus: "actual"` only for verified data.

## Images (Cloudinary)

Project screenshots are stored in Cloudinary and served through a custom `next/image` loader
(`src/lib/cloudinary-loader.ts`), so Cloudinary handles resizing, format and quality.

1. Copy `.env.example` to `.env.local` and fill in the Cloudinary values. The API key and secret are only used by the
   upload script on your machine — never in the browser, and never committed.
2. Capture screenshots of the live sites (uses Microsoft Edge or Chrome in headless mode):
   `npm run images:capture` → `public/images/projects/<slug>/*.jpg` (also used as a local fallback)
3. Upload them: `npm run images:upload` → Cloudinary `portfolio/projects/<slug>/<name>` and
   `src/data/cloudinary-manifest.json` (commit this file).
4. On your host (e.g. Vercel), set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`.

Images listed in the manifest are served from Cloudinary. Anything not uploaded yet (or if the cloud name
isn't set) falls back to the local copy in `public/images/projects`, so project cards are never empty.

The Cloudinary API key needs permission to upload (create) assets.

To add a new project: add it to `sites` in `scripts/capture-screenshots.mts`, run both image commands,
then add an entry to `src/data/projects.ts` using the uploaded public IDs.

## Contact form

The enquiry form has no backend. On submit it opens the visitor's email app (or WhatsApp, if configured)
with the enquiry pre-filled; nothing is sent until the visitor presses send. To receive submissions directly,
connect a form provider (e.g. Formspree, Web3Forms) or a Next.js Server Action with an email service, keeping
any API keys in server-side environment variables.
