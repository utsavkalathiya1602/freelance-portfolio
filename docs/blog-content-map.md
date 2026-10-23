# Blog content map — global expansion audit

Prepared 23 October 2026 on branch `blog-global-expansion`. Covers all 33 published articles (source: `src/data/blog.ts` + `src/app/blog/<slug>/page.tsx`).

## Evidence and limitations

| Source | Status | What it gave |
|---|---|---|
| Google autocomplete (gl = in, us, gb, ca, au) | Used, 23 Oct 2026 | Evidence that a phrase is searched. **No volume.** The country parameter barely changed results for most phrases (requests originate from India), so it does **not** reliably compare markets. |
| YouTube autocomplete | Used (previous round) | Confirms how-to demand for tracking, maintenance, AI builders |
| Google Search Central / Google Ads Help | Used | Facts for AI features, Core Web Vitals, indexing, conversion tracking |
| Google Search Console | **Not accessible** (needs your login) | No queries, clicks, impressions, positions or country data |
| Google Keyword Planner | **Not accessible** | No search-volume estimates |
| Google Trends | **Blocked** (HTTP 429 to automated requests) | None |
| Ahrefs / Semrush | **Not accessible** (paid accounts) | No difficulty or volume data |
| Reddit | **Blocked** (403) | None |
| X / LinkedIn | Login required | None |

**No search volume, keyword difficulty, ranking or traffic number in this document is real data — none was available.** "Demand evidence" below means "appears in autocomplete".

Notable autocomplete findings:
- Cost queries are explicitly country-modified: "how much does a website cost uk / in canada / in australia / in usa / in india", "website maintenance cost per month uk / in india". → Cost intent is market-specific; India cost guides should stay India-specific.
- Problem/how-to queries are not country-modified: "why is my website slow on mobile", "website traffic but no leads", "how to get more leads from your website", "google ads vs meta ads which is better", "how to get your business recommended by chatgpt", "generative engine optimization". → These articles should be written for a global audience.
- Both "enquiries" (UK/India English) and "leads" (US English) phrasings appear for the same intent.
- Industry + country queries exist: "websites for tradies australia", "google ads for roofing companies", "google ads for hvac contractors".

## Content map

Legend — Category: **A** keep India-specific · **B** already global, minor improvement · **C** global rewrite · **D** keep, consider separate international guide.
Action taken on this branch: ✅ done · — no change · 🔎 needs data before deciding.

| # | Existing title | URL (/blog/…) | Cat. | Primary intent | Primary keyword (now) | India restriction found | Action | Proposed / new title | Target market |
|---|---|---|---|---|---|---|---|---|---|
| 1 | How Much Does a Business Website Cost in Surat? | business-website-cost-surat | A/D | Price research (local) | website cost Surat | Correct — INR, Surat | — Keep | — | India (Surat) |
| 2 | Do Photography Studios Need a Website? | photography-studio-website | C (light) | Should I get a website | photography studio website | Surat/India examples, India keywords | ✅ Globalized examples & keywords | — | Global |
| 3 | React vs WordPress for a Small Business Website | react-vs-wordpress-small-business | B | Comparison | React vs WordPress website | Keywords only | ✅ Keywords | — | Global |
| 4 | How Can a Small Business Get More Website Enquiries? | get-more-website-enquiries | C | How-to (conversion) | how to get more leads from your website | India mobile/WhatsApp claims | ✅ Rewritten passages, title | How to Get More Leads and Enquiries from Your Website | Global |
| 5 | How to Set Up Google Business Profile … in India | google-business-profile-guide-india | A/D | Setup how-to | Google Business Profile India | Correct (India verification context) | — Keep | Future: global GBP guide only if data shows demand | India |
| 6 | How to Use WhatsApp Business to Get More Customer Enquiries | whatsapp-business-for-small-business | C | Setup how-to | WhatsApp Business for small business | Unsourced "500 million India users" claim; Surat/Mumbai framing | ✅ Rewritten intro with country caveat; description | — | Global (WhatsApp markets) |
| 7 | Why Your Business Website Is Slow and How to Fix It | website-speed-small-business-india | C | Troubleshooting | why is my website slow | India hosting advice; outdated "53%" statistic; overclaimed SEO effect | ✅ Full rewrite (Core Web Vitals table, FAQs, sourced SEO claims) | Why Is My Website Slow? Causes and Fixes for Small Business Websites | Global |
| 8 | Local SEO Guide for Small Businesses in Surat and India | local-seo-guide-surat-india | A | Local SEO how-to | local SEO small business Surat | Correct | — Keep; 🔎 overlaps #27 | — | India (Surat) |
| 9 | Should Your Small Business Start Selling Online in India? | should-small-business-sell-online-india | A | Decision | sell online India | Correct (Flipkart, Razorpay, INR) | — Keep; fee figures need periodic re-checks | — | India |
| 10 | How to Hire a Freelance Web Developer in India | how-to-hire-freelance-web-developer-india | A/D | Hiring | hire freelance web developer India | Correct | — Keep | Future D: hiring a remote developer internationally | India |
| 11 | Google Ads vs Meta Ads: Which Is Right for Your Local Business? | google-ads-vs-meta-ads-local-business | B | Comparison | Google Ads vs Meta Ads | One India line | ✅ Line + keywords | — | Global |
| 12 | How Much Should a Small Business Spend on Google Ads in India? | google-ads-budget-small-business-india | A | Budget | Google Ads budget India | Correct | — Keep; 🔎 overlaps #25 | — | India |
| 13 | Meta Ads for Local Businesses: A Beginner's Guide | meta-ads-guide-local-business | B | How-to | Meta Ads for small business | India-only GST line | ✅ Country-dependent tax note | — | Global |
| 14 | Landing Page vs Website: What Does Your Business Actually Need? | landing-page-vs-website | B | Comparison | landing page vs website | None | — 🔎 overlaps #28 | — | Global |
| 15 | What to Include on a Business Website Homepage | business-website-homepage-checklist | B | Checklist | business website homepage checklist | Surat/Gujarat example; mobile claim | ✅ Multi-country examples | — | Global |
| 16 | How to Track Enquiries from Your Website and Ads | track-website-and-ad-enquiries | B | How-to | track website enquiries | One India line | ✅ Line | — | Global · 🔎 overlaps #22 |
| 17 | How to Make Your Business Visible on ChatGPT, Gemini and Google AI Search | ai-search-optimization-small-business | C | How-to (AEO) | how to get your business recommended by ChatGPT | Surat/Gujarat examples; India directories; "Indian businesses" checklist | ✅ Global examples & directories | — | Global · 🔎 overlaps #23 |
| 18 | Why Your Website Gets Traffic but No Leads | website-traffic-no-leads | C | Troubleshooting | website traffic but no leads | India mobile/WhatsApp claims; "doubles or triples" promise; unsourced 1–5% benchmark | ✅ Claims corrected, global examples | — | Global |
| 19 | Google Ads Cost Per Lead in India | google-ads-cost-per-lead-india | A | Price research | Google Ads cost per lead India | Correct | — Keep | Future D: cost per lead across markets (needs data) | India |
| 20 | Website Redesign vs New Website | website-redesign-vs-new-website | B | Decision | website redesign vs new website | INR in cost section (labelled) | — Keep | — | Global |
| 21 | How to Get More Local Customers from Google Maps | get-more-customers-google-maps | A | Local how-to | get more customers from Google Maps | Indian directories list | — Keep; 🔎 overlaps #27 | — | India |
| 22 | How to Track Every Lead from Google Ads, Your Website and WhatsApp | track-leads-google-ads-website-whatsapp | B | How-to | how to track leads from Google Ads | Two India lines | ✅ Lines + keywords | — | Global |
| 23 | How to Get Your Business Recommended by AI Search in 2026 | ai-search-visibility-2026 | C | How-to (AEO/GEO) | generative engine optimization | "For Indian business owners" description; India directories; outdated monitoring advice | ✅ Global; monitoring corrected to Google docs; schema myth corrected | — | Global |
| 24 | Website Development Cost in India (2026) | website-development-cost-india-2026 | A/D | Price research | website development cost India | Correct | — Keep | Future D: global small business website cost guide | India |
| 25 | Google Ads Budget in India (2026) | google-ads-budget-india-2026 | A | Budget | Google Ads cost India 2026 | Correct | — Keep | — | India |
| 26 | Why Is Your Website Not Getting Customers? | why-website-not-getting-customers | C | Self-audit | website not getting leads | Same India claims as #18 | ✅ Corrected and globalized | — | Global · 🔎 **near-duplicate text of #18** |
| 27 | Local SEO for Small Businesses in India | local-seo-small-business-india-2026 | A/D | Local SEO how-to | local SEO India | Correct | — Keep | Future D: global local SEO guide | India |
| 28 | Landing Page vs Full Website for Generating Leads | landing-page-vs-full-website-lead-generation | C (light) | Comparison | landing page vs website for lead generation | INR cost row; Surat headline; unsourced 3–8% rate | ✅ INR labelled as India example; claims removed; global examples | — | Global |
| 29 | Website Maintenance Cost in India | website-maintenance-cost-india | A/D | Price research | website maintenance cost India | Correct | — Keep | Future D: "website maintenance cost per month UK" seen in autocomplete | India |
| 30 | Getting Fake or Spam Leads from Google Ads? | google-ads-spam-leads | B | Troubleshooting | fake leads from Google Ads | India phone/WhatsApp lines | ✅ Multi-country lines | — | Global |
| 31 | Google Ads Conversion Tracking Not Working? | google-ads-conversion-tracking-not-working | B | Troubleshooting | Google Ads conversion tracking not working | None | — | — | Global |
| 32 | AI Website Builder vs Custom Website | ai-website-builder-vs-custom-website | B | Comparison | AI website builder vs custom website | None | — | — | Global |
| 33 | Why Google Isn’t Indexing Your Website Pages | website-pages-not-indexed-google | B | Troubleshooting | crawled currently not indexed | None | — | — | Global |

## Grouped results

- **Keep India-specific (A):** #1, #5, #8, #9, #10, #12, #19, #21, #24, #25, #27, #29
- **Minor improvements (B):** #3, #11, #13, #15, #16, #22, #30 (done) · #14, #20, #31, #32, #33 (no change needed)
- **Substantial global rewriting (C):** #7 (full rewrite), #4, #6, #17, #18, #23, #26, #28, #2 (passage-level rewrites)
- **Candidates for separate international guides (D):** global website cost (#1/#24), global maintenance cost (#29), global local SEO (#27/#5), hiring a remote developer (#10), cost per lead by market (#19)
- **Overlapping intent — decide with Search Console data:** #18 ↔ #26 (near-duplicate text — highest priority), #4 ↔ #18 ↔ #26, #12 ↔ #25, #14 ↔ #28, #16 ↔ #22, #17 ↔ #23, #8 ↔ #27 ↔ #21 ↔ #5, #1 ↔ #24
- **Need research before a decision:** all overlap pairs above (which URL already earns impressions should be kept as the canonical version)

## Recommended new articles (for your approval — not created)

| Topic | Market | Evidence | Overlap check | Why it fits your services |
|---|---|---|---|---|
| How much does a small business website cost? (US / UK / Canada / Australia guide) | Global, country sections | Autocomplete shows country-modified cost queries in all five markets | Distinct from India cost guides (#1, #24) | Web development lead source abroad. Needs sourced local price data — no conversions from INR. |
| Website accessibility checklist for small businesses | Global (WCAG; ADA in US, Equality Act in UK, AODA in Ontario) | "website accessibility checklist / checker / uk" | Not covered | Web development; legal context differs by country |
| Core Web Vitals: how to fix a failed assessment | Global | "core web vitals assessment failed" (India), "core web vitals checker" | Partly covered by #7 — make it a deeper technical companion only if #7 earns impressions | Web development |
| Google Ads for roofing / HVAC companies | US, Canada, Australia | "google ads for roofing companies", "google ads for hvac contractors" | Not covered | Google Ads — needs honest framing without fabricated case studies |
| Website design for tradespeople (UK tradesmen / Australian tradies) | UK, AU | "websites for tradies australia", "website design for tradesmen" | Not covered | Web development + local SEO |
| Landing page A/B testing for small budgets | Global | "landing page a b testing tool" | Partly in #28 | Landing pages / Google Ads |
| Website security checklist | Global | "website security checklist" | Not covered | Web development / maintenance |
| International SEO basics (hreflang, ccTLD vs subfolder) | Global | "international seo checklist" | Not covered | SEO — only if you want to serve multi-country clients |

Not recommended now: "GA4 setup for small business", "website form to CRM" (no autocomplete evidence; partly covered by #16/#22), "measure AI search visibility" (covered in #23).

## Monitoring plan (Search Console + analytics)

Do not expect a particular ranking, traffic increase or timeline. After deployment:

1. **Week 0:** Resubmit `/sitemap.xml`. Request indexing once for the 9 updated URLs (`updatedAt` 2026-10-23).
2. **Weekly for 8 weeks** — Search Console → Performance, filtered to `/blog/`:
   - Clicks, impressions, CTR and average position per page (compare against the 28 days before 23 Oct).
   - **Countries** tab: impressions from US, UK, CA, AU vs India for the globalized articles.
   - **Queries** per page: are new non-India queries appearing? Do two pages share the same queries (cannibalization)?
3. **Page indexing report:** confirm all 33 articles are indexed; investigate any "Crawled – currently not indexed".
4. **Overlap decisions (week 6–8):** for each overlap pair, keep the page with more impressions/clicks as the main version; consider redirecting the other only if it earns little and duplicates intent.
5. **Leads:** in GA4, track WhatsApp clicks, form submissions and phone clicks with the landing page dimension, so enquiries can be attributed to blog articles. Note the visitor's country in your lead register.
