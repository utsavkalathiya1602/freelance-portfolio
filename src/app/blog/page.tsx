import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { blogTopics, sortedBlogPosts } from "@/data/blog";
import { BlogHeroAside } from "@/components/blog/BlogHeroAside";
import { BlogList } from "@/components/blog/BlogList";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";

const title = "Blog — Website & Marketing Guides";
const description =
  "Practical guides to website development, SEO, Google Ads, AI search and lead generation for small businesses — in India and around the world.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/blog",
  keywords: [
    "small business website guides",
    "website development blog",
    "Google Ads guides for small business",
    "SEO and AI search guides",
    "lead generation for small business",
    "website cost India",
    "local SEO India",
  ],
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Guides for small businesses."
        description="Practical guides to website development, SEO, Google Ads, AI search and digital growth for businesses around the world — plus India-specific pricing and local guides where the advice depends on the market."
        aside={<BlogHeroAside startHereSlug="why-website-not-getting-customers" />}
      />

      <section aria-label="Articles" className="py-14 sm:py-20">
        <Container>
          <BlogList posts={sortedBlogPosts()} topics={blogTopics()} />
        </Container>
      </section>

      <ContactCTA
        heading="Have a question not answered here?"
        text="Send me a message describing your business and what you're trying to figure out. I'll reply with an honest answer."
      />
    </>
  );
}
