import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/data/blog";

type ArticleSchemaProps = {
  post: BlogPost;
  url: string;
};

/**
 * JSON-LD Article schema for individual blog posts.
 *
 * Uses the "Article" type (rather than BlogPosting) because these are
 * informational guides, not diary-style blog posts.
 * Only includes verifiable, accurate information.
 */
export function ArticleSchema({ post, url }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    url,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: "Freelance Web Developer & Digital Marketer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    isPartOf: {
      "@type": "WebSite",
      url: siteConfig.url,
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
