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
| Website projects (concept brands, mockup colours, pages, features) | `src/data/projects.ts` |
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

## Work section — honesty rules built in

- Website entries with `status: "concept"` show "Concept project — fictional brand, not a client" on cards and pages.
  Their visuals are code-rendered mockups (`ConceptMockup`), not screenshots.
- Campaign entries with `dataStatus: "illustrative"` show "Illustrative sample data — not actual campaign results"
  on cards, the dashboard and the page footer. Only spend, impressions, clicks and conversions are stored;
  CTR, CPC, conversion rate and cost per conversion are calculated.
- To add real work later, use `status: "client"` / `dataStatus: "actual"` with verified information.

## Contact form

The enquiry form has no backend. On submit it opens the visitor's email app (or WhatsApp, if configured)
with the enquiry pre-filled; nothing is sent until the visitor presses send. To receive submissions directly,
connect a form provider (e.g. Formspree, Web3Forms) or a Next.js Server Action with an email service, keeping
any API keys in server-side environment variables.
