import type { FAQ } from "@/data/faqs";
import { FAQSchema } from "@/components/schema/FAQSchema";

/**
 * Visible FAQ section for an article, with matching FAQPage JSON-LD.
 * The schema is generated from the same list that is rendered, so the two never drift apart.
 */
export function ArticleFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <>
      <h2 id="faq">Frequently asked questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
      <FAQSchema faqs={faqs} />
    </>
  );
}
