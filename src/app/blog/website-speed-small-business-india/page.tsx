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

const slug = "website-speed-small-business-india";
const post = getBlogPost(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "why is my website slow India",
    "fix slow website small business India",
    "website speed optimisation India",
    "mobile website speed India",
    "improve website loading time",
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

              <h2>How much does speed actually matter?</h2>
              <p>
                Research from Google shows that 53% of mobile visitors abandon a page that takes longer than 3 seconds to load. In India, where a significant portion of website traffic comes through mobile connections that vary between 4G and slower speeds, this number can be even higher.
              </p>
              <p>
                A slow website does not just lose visitors — it also ranks lower in Google search results. Google uses page speed as a ranking signal, meaning a faster website is more likely to appear higher in search results than a slow one with similar content.
              </p>

              <h2>How to check your website speed</h2>
              <p>
                Go to{" "}
                <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">
                  PageSpeed Insights
                </a>{" "}
                and enter your website URL. The tool gives you separate scores for Mobile and Desktop, along with specific issues to fix. Focus on the Mobile score — that is the one that matters most for most Indian business websites.
              </p>
              <p>
                A score above 70 on mobile is a reasonable target for a small business website. Scores below 50 indicate serious issues that are likely costing you visitors.
              </p>

              <h2>Cause 1: Images that are too large</h2>
              <p>
                This is the most common cause of slow websites, and it is fixable without any technical skill. Most modern smartphone cameras produce photos between 3 MB and 10 MB in size. Uploading these directly to a website means visitors have to download a 5 MB photo just to see your business logo or a product image — which takes several seconds on a mobile connection.
              </p>
              <p>
                <strong>The fix:</strong> Compress all images before uploading them. A free tool like{" "}
                <a href="https://squoosh.app" target="_blank" rel="noopener noreferrer">
                  Squoosh
                </a>{" "}
                or{" "}
                <a href="https://tinypng.com" target="_blank" rel="noopener noreferrer">
                  TinyPNG
                </a>{" "}
                can reduce a 4 MB photo to under 200 KB with no visible quality loss. Every image on your website should ideally be under 200 KB.
              </p>
              <p>
                Also use modern image formats. WebP files are typically 25–35% smaller than JPEG or PNG at the same quality level. Most website platforms and browsers now support WebP.
              </p>

              <h2>Cause 2: Too many plugins (WordPress sites)</h2>
              <p>
                WordPress makes it easy to install plugins — and it is easy to end up with 20 or 30 plugins, each loading its own scripts and styles on every page. Even if each plugin is individually small, together they add significant load time.
              </p>
              <p>
                <strong>The fix:</strong> Audit your plugins. For each one, ask whether you still need it and whether there is a simpler alternative. Common plugins to remove or replace:
              </p>
              <ul>
                <li>Page builder plugins that load heavy JavaScript on every page even for pages that do not use them</li>
                <li>Social sharing plugins — a few share links can be added manually without a plugin</li>
                <li>Slider/carousel plugins — these are often very heavy; a simple image grid loads much faster</li>
                <li>Outdated plugins that no longer receive updates — these are also security risks</li>
              </ul>

              <h2>Cause 3: No caching</h2>
              <p>
                When a visitor loads your website, their browser has to download all the files — HTML, CSS, JavaScript, images. Without caching, this happens every time, for every visitor, on every page visit.
              </p>
              <p>
                Caching stores a copy of the files so repeat visitors (or the same visitor loading a different page) do not have to download everything again. For WordPress sites, plugins like WP Super Cache or W3 Total Cache handle this. For custom-built sites, caching should be built into the setup by the developer.
              </p>

              <h2>Cause 4: Cheap or distant hosting</h2>
              <p>
                If your website is hosted on a shared hosting plan based in the US or Europe, every request from an Indian visitor has to travel thousands of kilometres before it reaches the server — and the response has to travel back. This physical distance (called latency) adds seconds to every page load.
              </p>
              <p>
                <strong>The fix:</strong> Use hosting with servers in India, or use a Content Delivery Network (CDN) like Cloudflare, which has servers in Mumbai and other Indian cities. Cloudflare has a free plan that works with most hosting providers.
              </p>

              <h2>Cause 5: Render-blocking scripts</h2>
              <p>
                Some scripts — Google Analytics, chat widgets, font loaders — load before the main content of your page, blocking the browser from displaying anything until they finish. This means visitors see a blank or partial page for longer than necessary.
              </p>
              <p>
                This is a more technical issue that requires a developer to fix. The solution is to load non-critical scripts asynchronously (in the background, after the main content has loaded). If your website was built by a developer, ask them to check for render-blocking resources in PageSpeed Insights and fix them.
              </p>

              <h2>Cause 6: No image lazy loading</h2>
              <p>
                By default, browsers try to load all images on a page at once — including images far below the fold that the visitor may never scroll to. Lazy loading tells the browser to only load images when they are about to appear on screen.
              </p>
              <p>
                Adding <code>loading=&quot;lazy&quot;</code> to image tags in HTML is a simple change that can meaningfully reduce initial load time on long pages. Most modern website platforms support this automatically, but older builds may not have it enabled.
              </p>

              <h2>A faster website is also better for SEO</h2>
              <p>
                Every improvement you make to speed also improves your Google search ranking. A website that scores well on{" "}
                <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">
                  PageSpeed Insights
                </a>{" "}
                and Google&rsquo;s Core Web Vitals is given preference in search results over a slow website with similar content.
              </p>
              <p>
                If you need a website built with speed as a priority from the start, see the{" "}
                <Link href="/services/web-development">
                  Website Development service page
                </Link>
                . Websites I build are optimised for fast loading on mobile connections by default.
              </p>

            </ArticleBody>
          </Container>
        </div>
      </article>

      <ContactCTA
        heading="Is your website slow?"
        text="Share your website URL and I will check it on PageSpeed Insights and give you an honest assessment of what is slowing it down and what can be fixed."
      />
    </>
  );
}
