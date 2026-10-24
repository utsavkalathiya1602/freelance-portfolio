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
      ? `${item.title} — ${item.team ? "Product" : "Website"} Case Study`
      : item.campaignType.toLowerCase().includes("meta") ||
          item.campaignType.toLowerCase().includes("facebook") ||
          item.campaignType.toLowerCase().includes("instagram")
        ? `${item.title} — Meta Ads Case Study`
        : `${item.title} — Google Ads Case Study`;

  const description = item.summary;

  // Build page-specific keywords from item data
  const locationStr = item.location.city
    ? `${item.location.city}, ${item.location.country}`
    : item.location.country;

  const isMetaCampaign =
    item.kind === "ads-client" &&
    (item.campaignType.toLowerCase().includes("meta") ||
      item.campaignType.toLowerCase().includes("facebook") ||
      item.campaignType.toLowerCase().includes("instagram"));

  const keywords =
    item.kind === "website"
      ? [
          `${item.industry.split("·")[0].trim().toLowerCase()} website developer India`,
          `${item.industry.split("·")[0].trim().toLowerCase()} website design`,
          `freelance web developer portfolio ${locationStr}`,
          `React.js website ${item.location.city ?? "India"}`,
          `MERN stack website example`,
          `business website developer Surat`,
          `freelance web developer case study India`,
        ]
      : isMetaCampaign
        ? [
            `Meta Ads management India`,
            `Facebook Ads for events India`,
            `Instagram Ads event planner India`,
            `Meta Ads case study event management`,
            `Facebook Instagram advertising freelancer India`,
            `social media ads for wedding planners India`,
            `Meta Ads specialist freelancer Surat`,
            `event marketing Facebook Instagram India`,
          ]
        : [
            `Google Ads case study ${locationStr}`,
            `Google Ads management Surat`,
            `freelance digital marketer Surat`,
            `local Google Ads specialist India`,
            `small business Google Ads India`,
          ];

  return pageMetadata({ title, description, path: `/work/${item.slug}`, keywords });
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
        heading={
          item.kind === "website"
            ? "Want a website like this?"
            : item.campaignType?.toLowerCase().includes("meta") ||
                item.campaignType?.toLowerCase().includes("facebook") ||
                item.campaignType?.toLowerCase().includes("instagram")
              ? "Want more enquiries from Facebook & Instagram?"
              : "Want more local customers from Google?"
        }
        text={
          item.kind === "website"
            ? "Tell me about your business and what your website needs to do. I'll suggest a structure and a realistic scope."
            : item.campaignType?.toLowerCase().includes("meta") ||
                item.campaignType?.toLowerCase().includes("facebook") ||
                item.campaignType?.toLowerCase().includes("instagram")
              ? "Tell me about your business, your audience and your goal. I'll tell you honestly whether Meta Ads can drive real enquiries for you."
              : "Tell me about your business, market and budget. I'll tell you honestly whether search ads are a sensible next step."
        }
      />
    </>
  );
}

