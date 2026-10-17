import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost, formatDate } from "@/data/blog";
import { siteConfig } from "@/config/site";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";

const slug = "get-more-website-enquiries";
const post = getBlogPost(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "get more website enquiries small business India",
    "increase website conversions",
    "how to get more leads from website India",
    "website conversion tips small business",
    "website contact form best practices",
  ],
});

export default function Article() {
  return (
    <>
      <ArticleSchema post={post} url={url} />

      <article aria-labelledby="article-heading">
        <header className="border-b border-line bg-ivory py-14 sm:py-20">
          <Container size="narrow">
            <p className="mb-5 inline-block rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-ink">
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

              <h2>Most enquiry problems are not traffic problems</h2>
              <p>
                When a small business gets few website enquiries, the instinct is often to run ads or invest in SEO to bring in more visitors. Sometimes that is the right move. But often, the real issue is that visitors arrive, look around, and leave without contacting you — because the website made it difficult or unconvincing to do so.
              </p>
              <p>
                Before spending more on traffic, it is worth checking whether the existing traffic is being given a clear reason and a simple way to get in touch.
              </p>

              <h2>Make the contact action obvious and immediate</h2>
              <p>
                The most common problem is that the contact option is buried. A visitor who is interested in your service should not have to scroll to the bottom of the page, look for a navigation link, or hunt for a phone number.
              </p>
              <p>
                Practical changes that help:
              </p>
              <ul>
                <li>Put a phone number, WhatsApp button, or contact link in the header — visible on every page.</li>
                <li>Place a contact form or CTA (call to action) on every major service page, not only on the Contact page.</li>
                <li>On mobile, make the phone number a tappable link so visitors can call in one tap.</li>
                <li>Add a floating WhatsApp button if your customers are comfortable using WhatsApp — many local businesses in India find this the fastest way to get enquiries.</li>
              </ul>

              <h2>Be specific about what you offer and who it is for</h2>
              <p>
                Vague websites get fewer enquiries. If a visitor cannot quickly understand what you offer, where you are based, and who your service is for, they are unlikely to contact you.
              </p>
              <p>
                For each service or product, your website should clearly answer:
              </p>
              <ul>
                <li>What exactly do you provide?</li>
                <li>Who is it for (type of business, situation, location)?</li>
                <li>What does the process look like?</li>
                <li>What does a customer need to do to get started?</li>
              </ul>
              <p>
                You do not have to publish prices if you prefer to quote per project — but you should explain how pricing works so visitors know what to expect.
              </p>

              <h2>Reduce friction in your contact form</h2>
              <p>
                Long contact forms with many required fields reduce completions. Most small businesses only need a name, a phone number or email address, and a short description of what the person needs.
              </p>
              <p>
                Avoid requiring information you do not genuinely need to respond. Every extra field is a reason for a visitor to close the form.
              </p>

              <h2>Show that you are real and trustworthy</h2>
              <p>
                Enquiries increase when visitors trust that the business is legitimate and that contacting you will lead to a real response. Elements that build trust:
              </p>
              <ul>
                <li>A photo of you or your team — even a single genuine photo helps.</li>
                <li>Your physical location (city and area, even if you do not have a public-facing office).</li>
                <li>Real examples of your work — photos, case studies, or named clients if they have given permission.</li>
                <li>Reviews or testimonials from real clients (only genuine ones — visitors can tell when they are fabricated).</li>
                <li>A clear response time — &ldquo;I reply within one business day&rdquo; sets expectations and reassures visitors.</li>
              </ul>

              <h2>Check that your website loads quickly on mobile</h2>
              <p>
                A large proportion of small business website visitors in India arrive on mobile devices with varying connection speeds. If your website takes more than three to four seconds to load on a mobile connection, a significant number of visitors will leave before they see your content.
              </p>
              <p>
                Common causes of slow mobile loading: uncompressed images, too many plugins (if using WordPress), and third-party scripts (chat widgets, analytics, etc.) that block the main content from rendering.
              </p>
              <p>
                You can check your mobile speed for free at{" "}
                <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">
                  PageSpeed Insights
                </a>
                . A score above 70 on mobile is a reasonable target for a small business site.
              </p>

              <h2>If you want to increase traffic as well</h2>
              <p>
                Once your website is well-structured and easy to use, investing in traffic makes more sense. Options to consider:
              </p>
              <ul>
                <li>
                  <strong>Google Business Profile:</strong> Essential for local businesses. A complete, accurate profile helps you appear in Google Maps and local search results — often for searches like &ldquo;[your service] near me.&rdquo;
                </li>
                <li>
                  <strong>Google Ads:</strong> Puts your business in front of people who are actively searching for your service. Most effective when your website is already set up to convert visitors into enquiries.
                </li>
                <li>
                  <strong>SEO:</strong> Improving how your website appears in organic search results takes time — usually weeks to months — but builds long-term, sustainable visibility.
                </li>
              </ul>
              <p>
                See the{" "}
                <Link href="/services/digital-marketing">
                  Digital Marketing service page
                </Link>{" "}
                for more on what I offer in each of these areas.
              </p>

            </ArticleBody>
          </Container>
        </div>
      </article>

      <ContactCTA
        heading="Want more enquiries from your website?"
        text="Tell me about your business and what your current website does or doesn't do. I'll suggest practical improvements based on what I see."
      />
    </>
  );
}
