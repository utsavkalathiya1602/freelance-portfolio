import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SiteSchema } from "@/components/schema/SiteSchema";
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
    "freelance web developer Surat",
    "website developer Surat Gujarat",
    "business website development Surat",
    "React.js developer Surat",
    "Google Ads management Surat",
    "landing page developer India",
    "website redesign Surat",
    "Google Ads freelancer India",
    "digital marketing Surat",
    "Meta Ads Facebook Instagram ads Surat",
    "local SEO Google Business Profile Surat",
    "web developer for small businesses",
    "full stack developer Surat",
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
      </body>
    </html>
  );
}
