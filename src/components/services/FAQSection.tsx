import { Plus } from "lucide-react";
import type { FAQ } from "@/data/faqs";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FAQSectionProps = {
  faqs: FAQ[];
  title?: string;
  description?: string;
};

/** Uses native <details> elements: keyboard and screen-reader accessible without JavaScript. */
export function FAQSection({
  faqs,
  title = "Frequently asked questions",
  description = "Straight answers to the questions clients ask most often.",
}: FAQSectionProps) {
  return (
    <Section tone="white" labelledBy="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading eyebrow="FAQ" id="faq-heading" title={title} description={description} />
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 font-display text-lg font-semibold text-ink sm:text-xl">
                {faq.question}
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-ivory transition-colors duration-150 group-open:bg-lime group-hover:border-ink">
                  <Plus aria-hidden="true" className="h-4 w-4 group-open:rotate-45" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
