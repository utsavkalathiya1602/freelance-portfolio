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
    "Utsav Kalathiya — freelance web developer in Surat, Gujarat, India. Builds modern business websites, landing pages and custom web applications using React.js and MERN stack. Also runs Google Ads, Meta Ads and SEO for small businesses in Surat and across India. Hire a reliable freelance web developer today.",
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
