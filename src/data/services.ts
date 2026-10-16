import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  BarChart3,
  Code2,
  FileSearch,
  Layers,
  LayoutTemplate,
  Megaphone,
  MonitorSmartphone,
  PenLine,
  Plug,
  RefreshCw,
  Search,
  SlidersHorizontal,
  Target,
  UserRound,
} from "lucide-react";

export type ServiceSlug = "web-development" | "google-ads";

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
    slug: "google-ads",
    title: "Google Ads",
    shortTitle: "Google Ads",
    href: "/services/google-ads",
    description:
      "Search campaign setup, keyword research, and performance measurement aligned with your business goals.",
    includes: [
      "Google Search campaign setup",
      "Keyword research",
      "Ad copy and campaign structure",
      "Conversion tracking setup",
      "Campaign optimization",
    ],
    cta: "Explore Google Ads",
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
    description: "A clear, professional home for your business: who you are, what you offer and how to reach you.",
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
    title: "Responsive layouts",
    description: "Pages that read and work well on small phones, tablets, laptops and large monitors.",
    icon: MonitorSmartphone,
  },
  {
    title: "API integration",
    description: "Connecting your site to the services it needs, such as maps, payments, email or your own backend.",
    icon: Plug,
  },
];

export const adsOfferings: Offering[] = [
  {
    title: "Campaign planning",
    description: "Agreeing on goals, locations, budget and what counts as a useful enquiry before anything goes live.",
    icon: Layers,
  },
  {
    title: "Keyword research",
    description: "Finding the search terms your potential customers use, and the ones that waste budget.",
    icon: Search,
  },
  {
    title: "Campaign structure",
    description: "Organising campaigns and ad groups so that keywords, ads and landing pages stay closely matched.",
    icon: SlidersHorizontal,
  },
  {
    title: "Ad copy",
    description: "Writing clear, relevant search ads that describe your offer accurately.",
    icon: PenLine,
  },
  {
    title: "Conversion tracking",
    description: "Setting up tracking for calls, form submissions or other actions so you can see what the ads lead to.",
    icon: FileSearch,
  },
  {
    title: "Review and optimization",
    description: "Reviewing search terms, costs and conversions, and adjusting the campaign based on what the data shows.",
    icon: BarChart3,
  },
];

export const webAudiences = [
  "Local shops, clinics and service providers who need a reliable online presence",
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

export const adsProcess: ProcessStep[] = [
  {
    title: "Understand",
    description: "Your services, locations, budget, landing page and what a good lead looks like for you.",
  },
  {
    title: "Access & tracking",
    description: "Access to your Google Ads account, and conversion tracking set up before launch.",
  },
  {
    title: "Build & launch",
    description: "Keyword research, campaign structure and ad copy, shared with you for review before going live.",
  },
  {
    title: "Review",
    description: "Regular checks on search terms, spend and conversions, with clear notes on what changed and why.",
  },
];

/** What I can deliver vs. what depends on factors outside anyone's control. */
export const adsDeliverables = [
  "A campaign structure based on your services and locations",
  "Keyword research and negative keyword lists",
  "Search ad copy written for your offer",
  "Conversion tracking for the actions you care about",
  "Regular reviews and plain-language updates",
];

export const adsNotGuaranteed = [
  "A specific number of leads or sales",
  "A fixed cost per click or cost per lead",
  "Top ad positions for every search",
  "Results that do not depend on your market, budget or landing page",
];
