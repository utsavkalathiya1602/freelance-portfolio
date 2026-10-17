import type { FAQ } from "@/data/faqs";

/**
 * FAQPage JSON-LD structured data.
 *
 * Usage: Pass the FAQs that are actually visible on the page.
 * This component must only be rendered when the FAQ list is shown to users.
 * Do not use this for hidden or dynamically loaded FAQs.
 *
 * Per Google's guidelines, FAQPage rich results are primarily shown for
 * authoritative government and health websites, not general service pages.
 * This schema still improves machine understanding of the page content.
 */
export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  if (faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
