import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";
import { webAudiences, webOfferings, webProcess } from "@/data/services";
import { webFaqs } from "@/data/faqs";
import { websiteProjects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { ServiceHero } from "@/components/services/ServiceHero";
import { OfferingGrid } from "@/components/services/OfferingGrid";
import { FAQSection } from "@/components/services/FAQSection";
import { WebsiteIllustration } from "@/components/services/Illustrations";
import { ProjectShowcaseList } from "@/components/projects/ProjectShowcaseList";
import { ContactCTA } from "@/components/home/ContactCTA";
import { whatsappMessages } from "@/lib/whatsapp";
import { ServiceSchema } from "@/components/schema/ServiceSchema";

const title = "Website Development in Surat — React.js & MERN";
const description =
  "Business websites, landing pages and custom web apps built with React.js and Node.js by a freelance web developer in Surat. Fast, mobile-friendly, easy to use.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/services/web-development",
  keywords: [
    "website development services Surat",
    "MERN stack development services",
    "React.js developer for hire",
    "Node.js backend developer",
    "full stack web development Surat",
    "custom web application development",
    "REST API development services",
    "business website development",
    "small business website designer Surat",
    "event management website development",
    "photography studio website development",
    "landing page development services",
    "website redesign services",
    "ecommerce website developer Surat",
    "MongoDB web application developer",
  ],
});


export default function WebDevelopmentPage() {
  const projects = websiteProjects;

  return (
    <>
      <ServiceSchema
        name="Website Development"
        description="Custom business websites, landing pages, and web applications for small businesses and service providers. Built with React.js, Node.js and the MERN stack."
        url={`${siteConfig.url}/services/web-development`}
        serviceType="Web Development"
      />
      <ServiceHero
        eyebrow="Website Development"
        breadcrumb="Website Development"
        current="web-development"
        title="Websites built around your business goals."
        description="From a focused landing page to a custom web application, I build fast, responsive websites that explain what you do clearly and make it easy for customers to get in touch — for businesses in Surat, Gujarat and across India."
        primaryCta={{ label: "Request a Project Discussion", href: "/contact" }}
        secondaryCta={{ label: "See Related Work", href: "#projects" }}
        aside={<WebsiteIllustration />}
      />

      <Section labelledBy="offerings-heading">
        <SectionHeading
          eyebrow="What I can help with"
          id="offerings-heading"
          title="The right kind of website for the job."
          description="Not every business needs the same thing. We'll choose the simplest solution that does what you need."
        />
        <div className="mt-12">
          <OfferingGrid offerings={webOfferings} accent="lime" />
        </div>
      </Section>

      <Section tone="stone" labelledBy="fit-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Who it's for"
            id="fit-heading"
            title="A good fit for small teams with real goals."
            description="I work best with businesses that want a dependable website, honest advice and a direct line to the person building it."
          />
          <ul className="space-y-3">
            {webAudiences.map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime">
                  <Check aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="text-[0.95rem] leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="process-heading">
        <SectionHeading
          eyebrow="Process"
          id="process-heading"
          title="How a website project runs."
          description="Pricing and timelines depend on scope, so they are agreed in writing during planning — before development starts."
        />
        <div className="mt-12">
          <ProcessSteps steps={webProcess} />
        </div>
      </Section>

      {projects.length > 0 ? (
        <Section id="projects" tone="stone" labelledBy="projects-heading">
          <SectionHeading
            eyebrow="Related work"
            id="projects-heading"
            title="Websites I've built."
            description="Live websites for a dental clinic, a hotel and an event planning studio."
          />
          <div className="mt-12">
            <ProjectShowcaseList projects={projects} />
          </div>
        </Section>
      ) : null}

      <FAQSection faqs={webFaqs} />
      <ContactCTA heading="Ready to plan your website?" whatsappMessage={whatsappMessages.webDevelopment} />
    </>
  );
}
