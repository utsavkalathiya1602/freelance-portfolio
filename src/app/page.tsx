import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { HomePageSchema } from "@/components/schema/HomePageSchema";

export const metadata: Metadata = pageMetadata({
  title: "Freelance Web Developer in Surat | Utsav Kalathiya",
  description:
    "Need a business website or Google Ads support in Surat? Utsav Kalathiya builds modern websites, landing pages, and web applications for small businesses and service providers in Surat, Gujarat.",
  path: "/",
  overrideTitle: "Freelance Web Developer in Surat | Utsav Kalathiya",
});

export default function HomePage() {
  return (
    <>
      <HomePageSchema />
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
