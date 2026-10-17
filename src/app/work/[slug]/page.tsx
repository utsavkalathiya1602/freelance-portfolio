import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { allWork, getRelatedWork, getWorkItem } from "@/data/work";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { WebsiteCaseStudy } from "@/components/projects/WebsiteCaseStudy";
import { AdsClientCaseStudy } from "@/components/projects/AdsClientCaseStudy";
import { ContactCTA } from "@/components/home/ContactCTA";
import { whatsappMessageFor } from "@/lib/whatsapp";
import { CaseStudySchema } from "@/components/schema/CaseStudySchema";

export function generateStaticParams() {
  return allWork.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return {};

  const title =
    item.kind === "website"
      ? `${item.title} — ${item.industry} Website`
      : `${item.title} — Google Ads Case Study`;

  const description =
    item.kind === "website"
      ? `${item.summary} Designed and built by Utsav Kalathiya, freelance web developer based in Surat, Gujarat, India.`
      : `${item.summary} Google Ads managed by Utsav Kalathiya, freelance digital marketer in Surat, India.`;

  return pageMetadata({ title, description, path: `/work/${item.slug}` });
}

export default async function WorkItemPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) notFound();

  const related = getRelatedWork(item, 2);

  return (
    <>
      <CaseStudySchema item={item} />
      {item.kind === "website" ? <WebsiteCaseStudy project={item} /> : <AdsClientCaseStudy client={item} />}

      {related.length > 0 ? (
        <Section tone="stone" labelledBy="related-heading">
          <h2 id="related-heading" className="mb-10 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
            Related work
          </h2>
          <ProjectGrid items={related} />
        </Section>
      ) : null}

      <ContactCTA
        whatsappMessage={whatsappMessageFor(`/work/${item.slug}`)}
        heading={item.kind === "website" ? "Want a website like this?" : "Want more local customers from Google?"}
        text={
          item.kind === "website"
            ? "Tell me about your business and what your website needs to do. I'll suggest a structure and a realistic scope."
            : "Tell me about your business, market and budget. I'll tell you honestly whether search ads are a sensible next step."
        }
      />
    </>
  );
}

