import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost, formatDate } from "@/data/blog";
import { siteConfig } from "@/config/site";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";

const slug = "local-seo-guide-surat-india";
const post = getBlogPost(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "local SEO small business Surat",
    "local SEO guide India",
    "how to rank on Google local search India",
    "SEO for small business India",
    "local search optimisation Surat",
  ],
});

export default function Article() {
  return (
    <>
      <ArticleSchema post={post} url={url} />

      <article aria-labelledby="article-heading">
        <header className="border-b border-line bg-ivory py-14 sm:py-20">
          <Container size="narrow">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
                <li><Link href="/" className="hover:text-ink">Home</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li><Link href="/blog" className="hover:text-ink">Blog</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li aria-current="page" className="font-medium text-ink line-clamp-1">{post.title}</li>
              </ol>
            </nav>
            <p className="mb-5 inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
              {post.tag}
            </p>
            <h1
              id="article-heading"
              className="font-display text-[2.2rem] font-bold leading-[1.05] tracking-[-0.04em] text-ink text-balance sm:text-5xl"
            >
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span>
                By{" "}
                <Link href="/about" className="font-semibold text-ink underline underline-offset-4">
                  {siteConfig.name}
                </Link>
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
          </Container>
        </header>

        <div className="py-14 sm:py-20">
          <Container size="narrow">
            <ArticleBody>

              <h2>What is Local SEO?</h2>
              <p>
                Local SEO is the process of making your business appear in Google search results when people nearby search for your service. When someone in Surat types &ldquo;chartered accountant Surat,&rdquo; &ldquo;cake shop near me,&rdquo; or &ldquo;web developer Gujarat,&rdquo; the businesses that appear are there because of Local SEO — not because they paid for that specific position.
              </p>
              <p>
                Unlike Google Ads, which stop showing the moment you stop paying, good Local SEO continues delivering visitors to your website for months and years after the initial work is done.
              </p>

              <h2>The two places Local SEO puts your business</h2>
              <p>
                When someone searches for a local service, Google shows two types of local results:
              </p>
              <ul>
                <li>
                  <strong>The Local Pack (Map results):</strong> The panel with a map and 3 business listings near the top of the page. Appearing here requires a verified Google Business Profile and good local signals.
                </li>
                <li>
                  <strong>Organic search results:</strong> The regular blue links below the map. Appearing here requires a well-built website with relevant content.
                </li>
              </ul>
              <p>
                A complete Local SEO strategy targets both.
              </p>

              <h2>Step 1: Google Business Profile (the highest-priority action)</h2>
              <p>
                If you have not already set up and verified your Google Business Profile, do this first. It is the single most impactful thing a local business can do to appear in Google Maps and local search results. A detailed guide to setting this up is in the{" "}
                <Link href="/blog/google-business-profile-guide-india">
                  Google Business Profile guide
                </Link>
                .
              </p>

              <h2>Step 2: Make your website tell Google where you are</h2>
              <p>
                Google reads your website to understand what your business does and where it operates. If your website does not clearly mention your location, Google cannot confidently show your site to local searchers.
              </p>
              <p>
                Add your city and area to:
              </p>
              <ul>
                <li>Your homepage headline or subheading (example: &ldquo;Chartered Accountant in Surat, Gujarat&rdquo;)</li>
                <li>Your page title tags and meta descriptions</li>
                <li>Your About or Contact page</li>
                <li>Your service pages (example: &ldquo;We provide interior design services across Surat, Adajan, and Vesu&rdquo;)</li>
              </ul>
              <p>
                You do not need to repeat your city name on every line — that looks unnatural and can actually harm your ranking. Mention it naturally in places where it genuinely belongs.
              </p>

              <h2>Step 3: Create a separate page for each service</h2>
              <p>
                If you offer multiple services, give each one its own dedicated page. A single page listing ten services is less effective than ten pages, each focused on a single service.
              </p>
              <p>
                For example, if you are an event photographer in Surat:
              </p>
              <ul>
                <li>Wedding Photography in Surat</li>
                <li>Corporate Event Photography Surat</li>
                <li>Pre-Wedding Photo Shoots Surat</li>
                <li>Birthday Photography Surat</li>
              </ul>
              <p>
                Each page can rank for its own specific search terms and captures visitors who are searching for exactly that service — not a general photography service.
              </p>

              <h2>Step 4: Get listed on Indian business directories</h2>
              <p>
                Google uses mentions of your business name, address, and phone number (called &ldquo;citations&rdquo;) across the web to verify that your business is legitimate and to confirm your location. The more consistent citations you have, the more Google trusts your business.
              </p>
              <p>
                Key directories to list your business on (all free):
              </p>
              <ul>
                <li>JustDial</li>
                <li>IndiaMART (especially for B2B businesses)</li>
                <li>Sulekha</li>
                <li>TradeIndia</li>
                <li>Yellow Pages India</li>
                <li>Bing Places for Business</li>
              </ul>
              <p>
                Important: Use exactly the same business name, address, and phone number across all listings. Inconsistencies (different spellings, different phone numbers) confuse Google and reduce your local ranking.
              </p>

              <h2>Step 5: Build reviews consistently</h2>
              <p>
                Reviews on your Google Business Profile are one of the strongest local ranking signals. Businesses with more recent, genuine reviews tend to rank higher in the local pack.
              </p>
              <p>
                After every completed project or service, send your client the direct review link from your Google Business Profile dashboard. A simple message works:
              </p>
              <p>
                &ldquo;Thank you for working with me. If you are happy with the result, I would really appreciate it if you could leave a Google review — it helps other businesses find me. Here is the link: [review link]&rdquo;
              </p>
              <p>
                Aim for at least 10 reviews before your Local SEO efforts will start showing significant results.
              </p>

              <h2>Step 6: Write content that answers local questions</h2>
              <p>
                Blog articles and FAQ pages that answer questions your customers actually search for bring additional organic traffic to your website. For a local business in Surat, useful topics include:
              </p>
              <ul>
                <li>Guides relevant to your industry in Surat or Gujarat</li>
                <li>Comparisons of services or options in your field</li>
                <li>Answers to questions you get asked frequently by local clients</li>
              </ul>
              <p>
                This is exactly the kind of content this blog is designed to provide. Publishing one well-written, genuinely useful article per month is a sustainable pace for most small businesses.
              </p>

              <h2>How long does Local SEO take?</h2>
              <p>
                Expect to see meaningful improvement in local search visibility 2 to 4 months after completing the steps above — depending on how competitive your industry is in your area. In less competitive niches and smaller cities, results can come faster.
              </p>
              <p>
                SEO is not a one-time task. It requires ongoing attention — updating your Google Business Profile, adding reviews, publishing occasional content, and ensuring your website remains technically sound.
              </p>
              <p>
                If you would like help setting this up, see the{" "}
                <Link href="/services/digital-marketing">
                  Digital Marketing service page
                </Link>
                .
              </p>

            </ArticleBody>
          </Container>
        </div>
      </article>

      <ContactCTA
        heading="Want to appear higher in local Google results?"
        text="Tell me your business name, location, and what your customers search for. I will tell you what your biggest opportunities are and what it would take to act on them."
      />
    </>
  );
}
