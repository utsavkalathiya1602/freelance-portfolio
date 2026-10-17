import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import {
  marketingChannels,
  marketingDeliverables,
  marketingNotGuaranteed,
  marketingOfferings,
  marketingProcess,
} from "@/data/services";
import { marketingFaqs } from "@/data/faqs";
import { adsClients } from "@/data/clients";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { ServiceHero } from "@/components/services/ServiceHero";
import { OfferingGrid } from "@/components/services/OfferingGrid";
import { FAQSection } from "@/components/services/FAQSection";
import { MarketingChannels, MarketingChannelsAside } from "@/components/services/MarketingChannels";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { whatsappMessages } from "@/lib/whatsapp";

const title = "Google Ads, Meta Ads & SEO — Digital Marketing Surat";
const description =
  "Freelance digital marketing services in Surat, Gujarat — Google Ads management, Meta Ads (Facebook & Instagram) and local SEO / Google Business Profile optimisation for small businesses. Get found by the right customers in Surat and across India.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/services/digital-marketing",
  keywords: [
    "Google Ads specialist Surat",
    "Google Ads management services Surat",
    "Google Ads freelancer India",
    "Meta Ads Facebook Instagram ads Surat",
    "SEO freelancer Surat",
    "local SEO services for small businesses",
    "Google Business Profile optimization Surat",
    "freelance digital marketing services India",
    "digital marketing for photography studios",
    "digital marketing for small businesses Surat",
    "website SEO optimization services",
    "social media advertising Surat",
  ],
});


const factors = ["Your business", "Your area", "Your customers", "Your budget", "Your goals"];

export default function DigitalMarketingPage() {
  const client = adsClients[0];

  return (
    <>
      <ServiceSchema
        name="Digital Marketing"
        description="Google Ads, Meta Ads on Facebook and Instagram, and local SEO with Google Business Profile optimisation for small and local businesses in Surat and across India."
        url={`${siteConfig.url}/services/digital-marketing`}
        serviceType="Digital Marketing"
      />
      <ServiceHero
        eyebrow="Digital Marketing"
        breadcrumb="Digital Marketing"
        current="digital-marketing"
        title="Get found by the right customers — on Google, Facebook and Instagram."
        description="I help local businesses in Surat and across India reach the people who need them: Google Ads for people searching now, Meta Ads to reach your audience on Facebook and Instagram, and SEO so you show up on Google Search and Maps."
        primaryCta={{ label: "Discuss Your Marketing", href: "/contact" }}
        secondaryCta={{ label: "See the Channels", href: "#channels" }}
        aside={
          <MarketingChannelsAside
            channels={marketingChannels}
            clientLink={
              client ? { href: `/work/${client.slug}`, label: `${client.clientName} — ${client.campaignType} ads` } : undefined
            }
          />
        }
      />

      <Section id="channels" labelledBy="channels-heading">
        <SectionHeading
          eyebrow="Channels"
          id="channels-heading"
          title="Three ways to bring in customers."
          description="Each channel reaches people at a different moment. I'll recommend the one — or the mix — that fits how your customers find you."
        />
        <div className="mt-12">
          <MarketingChannels channels={marketingChannels} />
        </div>
      </Section>

      <Section tone="stone" labelledBy="offerings-heading">
        <SectionHeading
          eyebrow="What's included"
          id="offerings-heading"
          title="The same careful process, on every channel."
          description="Whichever platform we use, the work starts with a plan and ends with clear reporting."
        />
        <div className="mt-12">
          <OfferingGrid offerings={marketingOfferings} accent="lavender" />
        </div>
      </Section>

      <Section labelledBy="depends-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="It depends — honestly"
              id="depends-heading"
              title="The right plan depends on your situation."
              description="Two businesses with the same budget can see very different results. Before recommending anything, I look at:"
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {factors.map((factor) => (
                <li key={factor} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink">
                  {factor}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius-card)] border border-ink/10 bg-lavender p-6 sm:p-7">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">What I deliver</h3>
              <ul className="mt-5 space-y-3">
                {marketingDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-7">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">What no one can guarantee</h3>
              <ul className="mt-5 space-y-3">
                {marketingNotGuaranteed.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <Minus aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="process" tone="stone" labelledBy="process-heading">
        <SectionHeading
          eyebrow="Onboarding"
          id="process-heading"
          title="A clear onboarding process."
          description="You stay the owner of your ad accounts, billing and Business Profile at every step. Ad spend is paid directly to Google or Meta."
        />
        <div className="mt-12">
          <ProcessSteps steps={marketingProcess} />
        </div>
      </Section>

      {adsClients.length > 0 ? (
        <Section id="client-work" labelledBy="clients-heading">
          <SectionHeading
            eyebrow="Client work"
            id="clients-heading"
            title="Accounts I manage."
            description="Real businesses whose advertising I manage."
          />
          <div className="mt-12">
            <ProjectGrid items={adsClients} />
          </div>
        </Section>
      ) : null}

      <FAQSection faqs={marketingFaqs} />
      <ContactCTA
        whatsappMessage={whatsappMessages.digitalMarketing}
        heading="Want more local customers?"
        text="Tell me about your business, your area and what you'd like more of. I'll tell you honestly which channel — Google Ads, Meta Ads or SEO — makes sense to start with."
      />
    </>
  );
}
