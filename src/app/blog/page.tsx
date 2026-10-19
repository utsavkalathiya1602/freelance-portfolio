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
  "Practical guides for small business owners in Surat and across India on websites, Google Ads, Meta Ads, local SEO and getting more enquiries.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/blog",
  keywords: [
    "freelance web developer blog Surat",
    "website cost Surat",
    "small business website guide India",
    "digital marketing tips small business",
    "Google Ads vs Meta Ads",
    "Google Ads budget India",
    "local SEO guide India",
  ],
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Guides for small businesses."
        description="Practical answers to the questions business owners ask me most often — on websites, Google Ads, Meta Ads, local SEO and getting more enquiries."
        aside={<BlogHeroAside startHereSlug="business-website-cost-surat" />}
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
