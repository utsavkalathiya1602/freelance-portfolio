import { siteConfig } from "@/config/site";
import { personRef, websiteRef } from "@/lib/schema-ids";
import type { BlogPost } from "@/data/blog";

type ArticleSchemaProps = {
  post: BlogPost;
  url: string;
};

/**
 * JSON-LD Article + BreadcrumbList schema for individual blog posts.
 *
 * Uses the "Article" type (rather than BlogPosting) because these are
 * informational guides, not diary-style blog posts.
 * The breadcrumb mirrors the visible Home › Blog › Article trail.
 * Only includes verifiable, accurate information.
 */
export function ArticleSchema({ post, url }: ArticleSchemaProps) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}/#article`,
      url,
      headline: post.title,
      description: post.description,
      image: `${siteConfig.url}/opengraph-image`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      articleSection: post.tag,
      inLanguage: "en-IN",
      author: personRef,
      publisher: personRef,
      isPartOf: websiteRef,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
