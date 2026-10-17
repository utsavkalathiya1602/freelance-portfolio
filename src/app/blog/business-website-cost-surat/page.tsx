import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost, formatDate } from "@/data/blog";
import { siteConfig } from "@/config/site";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";

const slug = "business-website-cost-surat";
const post = getBlogPost(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "website cost Surat",
    "how much does a business website cost India",
    "website price small business Surat",
    "affordable website development Surat",
    "website quote India",
  ],
});

export default function Article() {
  return (
    <>
      <ArticleSchema post={post} url={url} />

      <article aria-labelledby="article-heading">
        {/* Header */}
        <header className="border-b border-line bg-ivory py-14 sm:py-20">
          <Container className="max-w-3xl">
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

        {/* Body */}
        <div className="py-14 sm:py-20">
          <Container className="max-w-3xl">
            <ArticleBody>

              <h2>The short answer</h2>
              <p>
                A business website in Surat typically costs between <strong>₹8,000 and ₹60,000+</strong> depending on what it needs to do. A focused landing page with contact options sits at the lower end. A multi-page website with a booking system, product catalogue, or custom features sits at the higher end.
              </p>
              <p>
                Price is determined by scope — the number of pages, the features required, the complexity of the design, and whether content (text, photos) is ready before work begins. Any quote you receive without first understanding your scope is a guess.
              </p>

              <h2>What affects the cost most</h2>

              <h3>Number of pages and sections</h3>
              <p>
                A one-page site that explains your service, shows a few photos and has a contact form takes far less time to build than a five-page site with a services section, a gallery, a booking form, staff profiles, and an FAQ. More pages mean more content to design, write, and test.
              </p>

              <h3>Features and functionality</h3>
              <p>
                A static page that displays information costs less than a page where something happens when a visitor interacts with it. Common features that increase cost:
              </p>
              <ul>
                <li>Appointment booking or availability calendars</li>
                <li>Enquiry forms with email or WhatsApp delivery</li>
                <li>Product catalogues or filter systems</li>
                <li>Customer login areas</li>
                <li>Payment integration</li>
                <li>Maps and directions</li>
              </ul>

              <h3>Design complexity</h3>
              <p>
                A clean, professional design built on a well-structured layout costs less than a fully custom visual design with unique layouts on every page. For most small businesses, a well-structured standard layout works better anyway — it is faster to build, easier to maintain, and clearer for visitors.
              </p>

              <h3>Content readiness</h3>
              <p>
                If you can provide your business description, service list, photos, and any other content before the project starts, the work is faster. If content needs to be written or sourced during the project, that adds time — and therefore cost.
              </p>

              <h3>Maintenance and hosting</h3>
              <p>
                The build cost covers making the website. Hosting (keeping it online) is a separate, ongoing expense — typically ₹500 to ₹5,000 per year depending on the hosting provider and plan. Domain registration is usually ₹800 to ₹1,500 per year.
              </p>

              <h2>Rough ranges by website type</h2>
              <p>
                These are illustrative ranges based on typical scope — not a guaranteed price. Your project may cost more or less depending on your specific requirements.
              </p>
              <ul>
                <li><strong>Landing page (single page):</strong> ₹8,000 – ₹20,000</li>
                <li><strong>Small business website (3–5 pages, contact form):</strong> ₹20,000 – ₹40,000</li>
                <li><strong>Business website with booking or catalogue:</strong> ₹35,000 – ₹65,000</li>
                <li><strong>Custom web application (logins, dashboards, data):</strong> ₹60,000+</li>
              </ul>
              <p>
                The right question is not "how much does a website cost?" but "what does my business need the website to do?" Start from there and get a written quote based on the agreed scope.
              </p>

              <h2>What to ask before hiring a developer</h2>
              <ul>
                <li>Will I receive a fixed price in writing before work starts?</li>
                <li>What exactly is included in the price? (pages, features, revisions)</li>
                <li>What is not included? (hosting, domain, ongoing updates)</li>
                <li>How long will the project take?</li>
                <li>Who owns the website files and code when the project is finished?</li>
                <li>What happens if I need changes after launch?</li>
              </ul>

              <h2>Getting a quote from me</h2>
              <p>
                I work with small businesses in Surat and across India. After a short conversation about your business and what you need the website to do, I will send a written proposal with a fixed price, a clear scope, and a realistic timeline — before any work starts. There is no obligation.
              </p>
              <p>
                See some examples of websites I have built on the{" "}
                <Link href="/work">
                  Work page
                </Link>
                , or visit the{" "}
                <Link href="/services/web-development">
                  Website Development service page
                </Link>{" "}
                for more detail on what is included.
              </p>

            </ArticleBody>
          </Container>
        </div>
      </article>

      <ContactCTA
        heading="Ready to discuss your website?"
        text="Tell me what your business does and what you need the website to achieve. I'll send a written quote with a clear scope and a fixed price."
      />
    </>
  );
}
