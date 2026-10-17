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

const slug = "photography-studio-website";
const post = getBlogPost(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "photography studio website India",
    "photographer website Surat",
    "do photographers need a website",
    "photography website vs Instagram",
    "photography studio website developer Surat",
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

              <h2>Instagram is great for discovery. A website is for conversion.</h2>
              <p>
                Most photography studios in India already use Instagram — and rightly so. It is an excellent tool for reaching new people and showing your work in a visual format. But Instagram was designed for browsing, not for making business decisions.
              </p>
              <p>
                When a potential client finds your photos and wants to know more — your packages, your prices, how to book a session — they often look for a website. If there is no website, or just a link in bio pointing to a poorly organised page, many of them will move on to the next photographer who does have one.
              </p>

              <h2>What a photography website does that Instagram cannot</h2>

              <h3>Explains your packages clearly</h3>
              <p>
                A website can display your photography packages — what is included, how long a session takes, what the deliverables are, and how pricing works. A DM thread or a highlight reel is not a substitute for a clear, organised page that a potential client can read at their own pace and share with a partner or family member before deciding.
              </p>

              <h3>Lets clients enquire or book</h3>
              <p>
                A contact form, a WhatsApp button, or a booking calendar on a website lets clients take action immediately when they are ready. Instagram DMs require more friction — the client has to navigate away from your content, open a conversation, and wait for you to see it.
              </p>

              <h3>Helps you get found on Google</h3>
              <p>
                When someone searches &ldquo;maternity photographer in Surat&rdquo; or &ldquo;wedding photographer near me&rdquo;, Google shows websites — not Instagram profiles (or very rarely). A website with clear content about the type of photography you offer and where you are based gives you the best chance of appearing in those searches.
              </p>

              <h3>You own it entirely</h3>
              <p>
                Instagram can change its algorithm, restrict reach, or suspend accounts without warning. Your website is yours — no platform can take it away, change how it looks without your approval, or decide which visitors see it.
              </p>

              <h2>What a photography studio website should include</h2>
              <ul>
                <li>A portfolio section organised by type (weddings, portraits, commercial, etc.)</li>
                <li>Your packages with clear descriptions (not necessarily prices, if you prefer to quote per project)</li>
                <li>A clear way to enquire — contact form, WhatsApp, or email</li>
                <li>Your location and the areas you serve</li>
                <li>A short &ldquo;about&rdquo; section that explains your approach and builds trust</li>
                <li>Your Instagram linked (not replaced — let the two tools work together)</li>
              </ul>

              <h2>Do you need a website before you have many clients?</h2>
              <p>
                A simple, well-made website helps from day one. You do not need hundreds of portfolio pieces or years of experience to have a professional online presence. A focused one-page site with your best five to ten photos, your packages, and a contact option can make a significant difference in how seriously potential clients take your business.
              </p>
              <p>
                As your work grows, the website can grow with it — adding case studies, testimonials, and more detailed portfolio sections over time.
              </p>

              <h2>Next steps</h2>
              <p>
                If you run a photography studio in Surat and are considering a website, the{" "}
                <Link href="/services/web-development">
                  Website Development service page
                </Link>{" "}
                explains what I include in a website project. You can also{" "}
                <Link href="/contact">
                  get in touch directly
                </Link>{" "}
                to discuss your requirements — no obligation.
              </p>

            </ArticleBody>
          </Container>
        </div>
      </article>

      <ContactCTA
        heading="Want a website for your photography studio?"
        text="Tell me about the type of photography you do, who your clients are, and what you need the website to do. I'll suggest a structure and scope that fits."
      />
    </>
  );
}
