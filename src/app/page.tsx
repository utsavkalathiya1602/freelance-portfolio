import type { Metadata } from "next";
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
    "Freelance web developer and digital marketer in Surat. Business websites, landing pages and web apps, plus Google Ads, Meta Ads and SEO for local businesses.",
  path: "/",
  overrideTitle: "Freelance Web Developer in Surat | Utsav Kalathiya",
  keywords: [
    "freelance web developer Surat",
    "hire freelance web developer Surat",
    "MERN stack developer for hire",
    "React.js developer Surat",
    "website development for small businesses",
    "web developer for small business India",
    "freelance web developer India",
    "business website developer Surat Gujarat",
  ],
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
