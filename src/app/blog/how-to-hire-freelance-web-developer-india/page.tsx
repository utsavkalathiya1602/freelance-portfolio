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

const slug = "how-to-hire-freelance-web-developer-india";
const post = getBlogPost(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "how to hire freelance web developer India",
    "hire web developer Surat",
    "freelance web developer red flags India",
    "web developer checklist India",
    "website developer contract India",
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

              <h2>Why hiring the wrong developer is an expensive mistake</h2>
              <p>
                A website built poorly costs you twice — once to build it, and again to fix or rebuild it. Businesses often contact me after paying someone else for a website that did not work, took twice as long as promised, or was abandoned mid-project. With the right checklist, most of these situations are avoidable.
              </p>

              <h2>Start by writing down what you need</h2>
              <p>
                Before contacting any developer, write a brief description of your project. Include:
              </p>
              <ul>
                <li>What your business does and who your customers are</li>
                <li>What you want the website to do (inform, generate enquiries, sell products, book appointments)</li>
                <li>How many pages you think you need and what each page should contain</li>
                <li>Any specific features (contact form, booking system, product catalogue, payment integration)</li>
                <li>Your approximate budget range</li>
                <li>When you need the website to be live</li>
              </ul>
              <p>
                You do not need to have all the answers — but the more clearly you can describe what you need, the more accurate the quotes you receive will be. Vague briefs lead to vague quotes.
              </p>

              <h2>Where to find freelance web developers in India</h2>
              <ul>
                <li><strong>Personal referrals:</strong> The most reliable source. Ask other business owners in your network who they used and whether they were happy with the result.</li>
                <li><strong>LinkedIn:</strong> Search for web developers in your city. Check their profile for a portfolio link and relevant experience.</li>
                <li><strong>Freelance platforms:</strong> Upwork, Freelancer, and Fiverr list thousands of developers. Reviews and completed projects are visible, which helps. Be cautious of very low prices — they usually reflect very low quality.</li>
                <li><strong>Local search:</strong> Search &ldquo;web developer [your city]&rdquo; on Google. Developers who appear in local search results often have a track record of work in your area.</li>
              </ul>

              <h2>What to check before hiring</h2>

              <h3>Their portfolio</h3>
              <p>
                Ask for links to at least 3 websites they have built for real clients. Open each one and check:
              </p>
              <ul>
                <li>Does it load quickly on your phone?</li>
                <li>Does it look professional and work correctly?</li>
                <li>Is the design quality consistent with what you want?</li>
              </ul>
              <p>
                If a developer cannot provide a portfolio, or if the examples they show are templates with client names swapped in, treat this as a warning sign.
              </p>

              <h3>References</h3>
              <p>
                Ask if you can speak briefly with a previous client. Most professional developers are happy to provide a reference. If a developer hesitates or cannot provide one, ask why.
              </p>

              <h3>A written proposal</h3>
              <p>
                Any developer you are seriously considering should provide a written proposal that clearly specifies:
              </p>
              <ul>
                <li>Exactly what is included (number of pages, specific features)</li>
                <li>What is not included (hosting, domain, content writing, logo design)</li>
                <li>The total price and payment schedule</li>
                <li>The timeline with key milestones</li>
                <li>The revision process (how many rounds of changes are included)</li>
                <li>What happens after launch (support, maintenance, who owns the code)</li>
              </ul>
              <p>
                A verbal agreement or a WhatsApp message saying &ldquo;I will build your site for ₹15,000&rdquo; is not a proposal. Do not start work without a written document you can refer back to.
              </p>

              <h2>Red flags to watch for</h2>
              <ul>
                <li><strong>No portfolio or portfolio with only templates:</strong> Experience matters. A developer without real client projects is learning on your project.</li>
                <li><strong>Asking for 100% payment upfront:</strong> A professional payment structure is typically 50% to start and 50% on completion — or split across milestones for larger projects.</li>
                <li><strong>Promises that sound too good:</strong> &ldquo;I will build your e-commerce site with 500 products in 3 days for ₹5,000.&rdquo; This is not realistic.</li>
                <li><strong>Refusing to sign a basic agreement:</strong> Even a simple written agreement via email protects both parties. A developer who refuses is a risk.</li>
                <li><strong>No clear communication about who owns the website:</strong> You should own the website files, the domain, and the hosting account. If a developer &ldquo;builds your site&rdquo; on their own hosting account, you are dependent on them to keep it online.</li>
                <li><strong>Vague about timeline and milestones:</strong> &ldquo;It will be ready in a few weeks&rdquo; is not a timeline.</li>
              </ul>

              <h2>Questions to ask before signing anything</h2>
              <ul>
                <li>Can I see 3 websites you have built recently and speak to those clients?</li>
                <li>What exactly is included in this price, and what is not?</li>
                <li>Who will own the domain, hosting, and website files after launch?</li>
                <li>Will I be able to make small updates to the website myself after launch?</li>
                <li>What is your process if I am not happy with the design direction?</li>
                <li>How many revisions are included before additional charges apply?</li>
                <li>What happens if the project goes over the agreed timeline?</li>
              </ul>

              <h2>A note on very low prices</h2>
              <p>
                In India, you will find developers offering business websites for ₹2,000 – ₹5,000. These are almost always template-based websites with minimal customisation, often built on free or nulled (pirated) WordPress themes with no original design. They may look acceptable initially but often have security vulnerabilities, poor mobile performance, and no support once delivered.
              </p>
              <p>
                A professional website built by an experienced developer costs more because it involves real design work, proper code, testing across devices, and the ability to support you after launch. See the{" "}
                <Link href="/blog/business-website-cost-surat">
                  business website cost guide
                </Link>{" "}
                for a realistic breakdown of what different budget levels get you.
              </p>

              <h2>My own proposal process</h2>
              <p>
                Every project I take on starts with a conversation about your business and your goals. After that, I send a written proposal with a fixed price, a clear scope, and a realistic timeline — before any work starts. You can see examples of what I have built on the{" "}
                <Link href="/work">
                  Work page
                </Link>
                .
              </p>

            </ArticleBody>
          </Container>
        </div>
      </article>

      <ContactCTA
        heading="Looking for a reliable freelance web developer?"
        text="I work with small businesses across India. Send me a message describing your project and I will send a written proposal with a fixed price and clear scope — no obligation."
      />
    </>
  );
}
