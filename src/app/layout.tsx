import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SiteSchema } from "@/components/schema/SiteSchema";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Self-hosted variable fonts (SIL Open Font License — see src/fonts).
const heading = localFont({
  src: "../fonts/BricolageGrotesque-latin-wght.woff2",
  variable: "--font-heading",
  weight: "200 800",
  display: "swap",
});

const body = localFont({
  src: "../fonts/Geist-latin-wght.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    // Freelance & hiring keywords
    "freelance web developer",
    "hire a freelance web developer",
    "freelance website developer",
    "freelance web developer in India",
    "hire web developer in India",
    "freelance full stack developer",
    "website developer for small business",
    "affordable website development services",
    // Local SEO keywords — Surat
    "freelance web developer Surat",
    "website developer in Surat",
    "web development services Surat",
    "freelance website designer Surat",
    "React developer Surat",
    "MERN stack developer Surat",
    "website development for small businesses in Surat",
    "website developer near Varachha",
    "website developer near Sarthana",
    "website developer Surat Gujarat",
    // Technology keywords
    "MERN stack development services",
    "React.js developer for hire",
    "Node.js backend developer",
    "full stack web development",
    "custom web application development",
    "REST API development services",
    "MongoDB web application developer",
    "React website development services",
    "full stack developer Surat",
    // Business website keywords
    "business website development",
    "small business website designer",
    "professional portfolio website development",
    "event management website development",
    "photography studio website development",
    "ecommerce website developer",
    "website redesign services",
    "landing page development services",
    "landing page developer India",
    // Digital marketing keywords
    "freelance digital marketing services",
    "Google Ads specialist Surat",
    "Google Ads management services",
    "SEO freelancer Surat",
    "local SEO services for small businesses",
    "website SEO optimization services",
    "Google Business Profile optimization",
    "digital marketing for photography studios",
    "digital marketing Surat",
    "Meta Ads Facebook Instagram ads Surat",
    "Google Ads freelancer India",
    "local SEO Google Business Profile Surat",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  verification: {
    google: "JIu2MpvRxAiRdu1E1krA7hfVBSFJRRr6pPt4G5mwwVc",
  },
  icons: {
    // Next.js auto-serves src/app/icon.svg as the browser favicon.
    // src/app/apple-icon.tsx is auto-registered as apple-touch-icon (180×180 PNG).
    // The shortcut entry below covers older browsers that look for /favicon.svg.
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable} antialiased`}>
      <head>
        {/* Preconnect to Cloudinary CDN so screenshot images start loading faster. */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className="flex min-h-screen flex-col bg-ivory text-ink">
        <SiteSchema />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
