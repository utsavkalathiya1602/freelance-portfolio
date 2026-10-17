import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  BarChart3,
  Code2,
  FileSearch,
  Layers,
  LayoutTemplate,
  MapPin,
  Megaphone,
  PenLine,
  Plug,
  RefreshCw,
  Search,
  Target,
  UserRound,
  Users,
} from "lucide-react";

export type ServiceSlug = "web-development" | "digital-marketing";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  includes: string[];
  cta: string;
  tone: "lime" | "lavender";
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Website Development",
    shortTitle: "Websites",
    href: "/services/web-development",
    description:
      "Professional business websites, landing pages, and custom web applications designed around your business needs.",
    includes: [
      "Business websites",
      "Landing pages",
      "Responsive web design",
      "Custom web applications",
      "Frontend and backend development, where appropriate",
    ],
    cta: "Explore Web Development",
    tone: "lime",
    icon: Code2,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    href: "/services/digital-marketing",
    description:
      "Google Ads, Meta Ads on Facebook and Instagram, and local SEO with Google Business Profile — focused on bringing the right customers to your business.",
    includes: [
      "Google Ads — Search campaigns",
      "Meta Ads — Facebook & Instagram",
      "SEO & Google Business Profile",
      "Conversion tracking setup",
      "Regular reviews and optimisation",
    ],
    cta: "Explore Digital Marketing",
    tone: "lavender",
    icon: Megaphone,
  },
];

export type Offering = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const webOfferings: Offering[] = [
  {
    title: "Business websites",
    description: "A clear, professional, mobile-friendly home for your business: who you are, what you offer and how to reach you.",
    icon: LayoutTemplate,
  },
  {
    title: "Landing pages",
    description: "Focused single pages for a product, service or campaign, built around one clear action.",
    icon: Target,
  },
  {
    title: "Portfolio websites",
    description: "A place to present your work, your experience and your services in a structured way.",
    icon: UserRound,
  },
  {
    title: "Web applications",
    description: "Custom tools with logins, dashboards and data — built with React, Node.js and a suitable database.",
    icon: AppWindow,
  },
  {
    title: "Website redesigns",
    description: "Refreshing an outdated site so it is easier to use, easier to update and works properly on phones.",
    icon: RefreshCw,
  },
  {
    title: "API integration",
    description: "Connecting your site to the services it needs, such as maps, payments, email or your own backend.",
    icon: Plug,
  },
];

export type MarketingChannel = {
  id: "google-ads" | "meta-ads" | "seo";
  name: string;
  tagline: string;
  description: string;
  /** When this channel is usually the right choice. */
  bestFor: string;
  includes: string[];
  icon: LucideIcon;
  tone: "lime" | "lavender" | "peach";
};

/** The digital marketing channels I offer. */
export const marketingChannels: MarketingChannel[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    tagline: "Be found when people search",
    description:
      "Search campaigns that show your business to people who are already looking for what you offer — on Google Search and, for local businesses, alongside your location.",
    bestFor: "Services people actively search for, like a store, clinic, repair or local service.",
    includes: [
      "Search campaign setup and structure",
      "Keyword research and negative keywords",
      "Ad copy written for your offer",
      "Local targeting for your area",
      "Conversion tracking and regular optimisation",
    ],
    icon: Search,
    tone: "lavender",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    tagline: "Reach people on Facebook & Instagram",
    description:
      "Ads on Facebook and Instagram that put your business in front of the right local audience — to build awareness, promote offers and bring in enquiries.",
    bestFor: "Visual products, offers and events, or reaching people who aren't searching yet.",
    includes: [
      "Campaign and audience setup",
      "Ad creative and copy for feed, stories and reels",
      "Location and interest targeting",
      "Enquiry options such as WhatsApp, calls or lead forms",
      "Pixel / tracking setup and regular optimisation",
    ],
    icon: Users,
    tone: "peach",
  },
  {
    id: "seo",
    name: "SEO & Google Business Profile",
    tagline: "Show up on Google Search and Maps",
    description:
      "Improving how your business appears in Google Search and Maps — a complete, accurate Business Profile and a website structured so search engines understand it.",
    bestFor: "Local businesses that want steady visibility without paying for every click.",
    includes: [
      "Google Business Profile setup and optimisation",
      "Accurate business details, categories and photos",
      "On-page SEO: titles, descriptions and page structure",
      "Local keyword targeting for your area",
      "Technical basics: speed, mobile, sitemap and Search Console",
    ],
    icon: MapPin,
    tone: "lime",
  },
];

/** What every marketing engagement includes, whichever channel is used. */
export const marketingOfferings: Offering[] = [
  {
    title: "Strategy & planning",
    description: "Agreeing on goals, locations, budget and what counts as a useful enquiry before anything goes live.",
    icon: Layers,
  },
  {
    title: "Audience & keyword research",
    description: "Finding the searches and audiences your potential customers fit, and the ones that waste budget.",
    icon: Target,
  },
  {
    title: "Ad copy & creative",
    description: "Clear, accurate ads that describe your business and your offer honestly.",
    icon: PenLine,
  },
  {
    title: "Conversion tracking",
    description: "Tracking calls, messages, form submissions or visits so you can see what the marketing leads to.",
    icon: FileSearch,
  },
  {
    title: "Local visibility",
    description: "Making sure people nearby can find your business, its location and how to contact you.",
    icon: MapPin,
  },
  {
    title: "Review & optimisation",
    description: "Regular reviews of costs, results and search terms, with changes based on what the data shows.",
    icon: BarChart3,
  },
];

export const webAudiences = [
  "Local shops, clinics, salons and service providers who need a reliable online presence",
  "Event management companies, interior designers and hospitality businesses wanting a professional site",
  "Startups that need a landing page or a first version of a web product",
  "Freelancers and professionals who want a portfolio website",
  "Businesses with an outdated website that needs a redesign",
  "Teams that need a custom tool, dashboard or booking flow",
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { title: "Discover", description: "Understand the business and its goals." },
  { title: "Plan", description: "Define the scope, deliverables, and timeline." },
  { title: "Build", description: "Develop and test the agreed solution." },
  { title: "Deliver", description: "Launch the project and explain the next steps." },
];

export const webProcess: ProcessStep[] = [
  {
    title: "Discover",
    description: "We talk about your business, your customers and what the website needs to achieve.",
  },
  {
    title: "Plan",
    description: "I propose pages, features, a timeline and a written quote based on the agreed scope.",
  },
  {
    title: "Build",
    description: "I design and develop the site, share progress and test it on different devices.",
  },
  {
    title: "Deliver",
    description: "The site goes live, and I walk you through how it works and what to do next.",
  },
];

export const marketingProcess: ProcessStep[] = [
  {
    title: "Understand",
    description: "Your business, area, customers, budget and what a good enquiry looks like for you.",
  },
  {
    title: "Choose channels",
    description: "A recommendation on Google Ads, Meta Ads, SEO or a mix — based on how your customers find you.",
  },
  {
    title: "Set up & launch",
    description: "Account access, tracking, targeting and ads, shared with you for review before going live.",
  },
  {
    title: "Review",
    description: "Regular checks on spend, results and what to improve, with clear notes on what changed and why.",
  },
];

/** What I can deliver vs. what depends on factors outside anyone's control. */
export const marketingDeliverables = [
  "A plan based on your services, area and budget",
  "Campaigns, audiences and keywords set up properly",
  "Clear, accurate ad copy for your offer",
  "Tracking for the actions you care about",
  "Regular reviews and plain-language updates",
];

export const marketingNotGuaranteed = [
  "A specific number of leads or sales",
  "A fixed cost per click or cost per lead",
  "A guaranteed top position on Google or Maps",
  "Results that do not depend on your market, budget or offer",
];
