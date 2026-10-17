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

const slug = "react-vs-wordpress-small-business";
const post = getBlogPost(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "React vs WordPress small business India",
    "React.js or WordPress for business website",
    "should I use WordPress or React",
    "React website vs WordPress India",
    "custom website vs WordPress Surat",
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

              <h2>Start with what you need to do, not the technology</h2>
              <p>
                The React vs WordPress question comes up often, but it is the wrong starting point. The right question is: what does your website need to do, and who needs to manage it after it is built? The answer to those questions points to the right tool — not the other way around.
              </p>

              <h2>When WordPress makes sense</h2>
              <p>
                WordPress is the right choice when:
              </p>
              <ul>
                <li>
                  <strong>You need to update content yourself.</strong> WordPress has a familiar content editor. If you want to add a blog post, update your menu, or change your service descriptions without involving a developer, WordPress is designed for that.
                </li>
                <li>
                  <strong>Your website is mostly informational.</strong> Service pages, a blog, an about page, contact forms — WordPress handles these well with a wide range of free and paid themes and plugins.
                </li>
                <li>
                  <strong>You have a limited budget.</strong> A well-chosen WordPress theme with basic customisation can be set up faster and at lower cost than a custom-built site, as long as the theme genuinely fits your needs.
                </li>
                <li>
                  <strong>You need e-commerce with standard features.</strong> WooCommerce (WordPress&apos;s e-commerce plugin) is a mature, widely-supported option for online stores with standard requirements.
                </li>
              </ul>

              <h2>When React (or a React framework like Next.js) makes sense</h2>
              <p>
                React is the right choice when:
              </p>
              <ul>
                <li>
                  <strong>Performance matters significantly.</strong> React-based sites, particularly those built with Next.js, can be extremely fast — pages are pre-rendered and only the necessary code is loaded. For businesses where page speed affects conversions or ad quality scores, this is a genuine advantage.
                </li>
                <li>
                  <strong>Your website involves complex interactions.</strong> Booking systems, real-time availability, dashboards, filtered product catalogues, or any page where something happens dynamically based on user input — these are better suited to React.
                </li>
                <li>
                  <strong>You have specific design requirements.</strong> A React site is built from scratch, which gives precise control over the design. You are not constrained by a theme&apos;s structure or limitations.
                </li>
                <li>
                  <strong>The site is part of a larger product or system.</strong> If your website connects to a custom backend, an API, or a mobile app built in React Native, keeping the frontend in the same ecosystem can simplify development and maintenance.
                </li>
              </ul>

              <h2>The honest trade-offs</h2>

              <h3>Ongoing content updates</h3>
              <p>
                A React/Next.js site does not have a built-in content management interface the way WordPress does. If you want a non-technical person to update the site regularly, you either need a headless CMS (a separate service that manages content), or you rely on a developer for updates. For many small businesses that rarely change their website content, this is not a problem in practice.
              </p>

              <h3>Plugins and integrations</h3>
              <p>
                WordPress has thousands of plugins for common tasks (contact forms, SEO, analytics, bookings). A custom React site integrates these features from scratch or via APIs, which takes more development time but gives more control and avoids plugin conflicts and security risks.
              </p>

              <h3>Long-term maintenance</h3>
              <p>
                WordPress sites require regular plugin and theme updates to stay secure. A well-built React/Next.js site has fewer moving parts and is generally easier to maintain technically, though it requires a developer for any significant changes.
              </p>

              <h2>The honest recommendation for most small businesses</h2>
              <p>
                For a business that needs a professional online presence — a few pages explaining what you do, a way for customers to contact you, and a design that reflects your brand — either option can work. The choice depends on your specific situation:
              </p>
              <ul>
                <li>If you want to manage your content yourself: consider WordPress.</li>
                <li>If you want a fast, custom site and are happy to involve a developer for updates: React/Next.js is a strong option.</li>
                <li>If you need dynamic features or custom functionality: React/Next.js is the better starting point.</li>
              </ul>
              <p>
                I build with React and Next.js because it suits the type of websites I build for small businesses — fast, focused, and maintainable. If WordPress would genuinely serve your situation better, I will say so.
              </p>
              <p>
                See the{" "}
                <Link href="/services/web-development">
                  Website Development service page
                </Link>{" "}
                for more on how I approach a project, or{" "}
                <Link href="/contact">
                  get in touch
                </Link>{" "}
                if you want to talk through what fits your situation.
              </p>

            </ArticleBody>
          </Container>
        </div>
      </article>

      <ContactCTA
        heading="Not sure which approach fits your business?"
        text="Tell me what your website needs to do. I'll give you an honest recommendation — not a sales pitch."
      />
    </>
  );
}
