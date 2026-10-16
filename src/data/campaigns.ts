import type { CampaignProject } from "../types/project";

/**
 * Google Ads campaign plans shown on /work.
 *
 * IMPORTANT: every figure below is ILLUSTRATIVE SAMPLE DATA invented for demonstration.
 * No campaign has been run for these fictional brands. Only the four raw inputs are stored;
 * CTR, average CPC, conversion rate and cost per conversion are calculated in
 * src/lib/metrics.ts. `adSpend` is advertising spend paid to Google — it excludes
 * management and website-development fees.
 *
 * When real campaign data is available, add a new entry with `dataStatus: "actual"`.
 */
export const campaignProjects: CampaignProject[] = [
  {
    kind: "campaign",
    dataStatus: "illustrative",
    slug: "ads-interior-design",
    title: "Interior Design Consultation",
    brandName: "Northline Interiors (fictional concept)",
    industry: "Interior design",
    location: { city: "Melbourne", country: "Australia" },
    currency: "AUD",
    projectType: "Hypothetical Google Search campaign",
    campaignType: "Google Search",
    summary:
      "A search campaign plan for a residential interior design studio, built around consultation enquiries from Melbourne homeowners.",
    services: ["Keyword research", "Campaign structure", "Ad copy", "Conversion tracking plan"],
    featured: true,
    objective: "Consultation enquiry submissions",
    audience:
      "Melbourne homeowners planning a renovation, new build or room refresh who are actively searching for a residential interior designer.",
    conversionDefinition: "A submitted consultation enquiry form on the landing page.",
    inputs: { adSpend: 1500, impressions: 12000, clicks: 600, conversions: 30 },
    setup: [
      { label: "Network", value: "Google Search only (Display and Search Partners off at launch)" },
      { label: "Location", value: "Melbourne metropolitan area, people in or regularly in the location" },
      { label: "Ad groups", value: "Interior designer · Residential design · Consultation" },
      { label: "Bidding", value: "Start with Maximise Clicks with a CPC cap, then review a conversion-based strategy once tracking has data" },
      { label: "Schedule", value: "All days, with a review of hour-of-day data after the first month" },
    ],
    keywordGroups: [
      { name: "Interior designer", keywords: ["interior designer Melbourne", "interior design studio Melbourne"] },
      { name: "Residential design", keywords: ["residential interior design", "home interior designer"] },
      { name: "Consultation", keywords: ["home interior design consultation", "interior design consultation Melbourne"] },
    ],
    negativeKeywords: ["jobs", "course", "degree", "salary", "free", "DIY", "software", "internship"],
    negativeStrategy:
      "Exclude job seekers, students and DIY searches from day one, then review the search-terms report weekly and add irrelevant queries as negatives.",
    headlines: ["Residential Interior Design", "Plan Your Home Interior", "Interior Design Services"],
    descriptions: [
      "Residential interior design services. Share your requirements to begin a consultation.",
    ],
    displayPath: "interiors/consultation",
    landingPage: [
      "Clear service proposition in the first screen",
      "Selected design concepts",
      "Short consultation form",
      "Relevant project imagery",
      "One clear next step",
    ],
    tracking: [
      "Google Ads conversion action for the consultation form submission (thank-you state or event)",
      "Google tag installed sitewide, with the conversion verified using Tag Assistant before launch",
      "Phone and email clicks tracked as secondary conversions, not counted in the primary goal",
      "UTM parameters on final URLs for reporting in the analytics tool",
    ],
    optimization: [
      "Week 1–2: review search terms daily and build the negative keyword list",
      "Week 3–4: pause keywords with spend but no relevant engagement",
      "Month 2: test new headlines against the best-performing ad",
      "Month 2+: consider conversion-based bidding once enough conversions are recorded",
      "Ongoing: review landing-page form completion and simplify fields if needed",
    ],
    accent: "lavender",
  },
  {
    kind: "campaign",
    dataStatus: "illustrative",
    slug: "ads-renovation",
    title: "Kitchen & Bathroom Renovations",
    brandName: "Oak & Stone Renovations (fictional concept)",
    industry: "Home renovation",
    location: { city: "London", country: "United Kingdom" },
    currency: "GBP",
    projectType: "Hypothetical Google Search campaign",
    campaignType: "Google Search",
    summary:
      "A search campaign plan for a renovation business, splitting kitchen and bathroom intent into separate ad groups that lead to a quote request.",
    services: ["Keyword research", "Campaign structure", "Ad copy", "Landing-page plan"],
    featured: true,
    objective: "Renovation quote enquiries",
    audience:
      "London homeowners researching kitchen or bathroom renovations who are ready to request an estimate.",
    conversionDefinition: "A submitted quote-request form.",
    inputs: { adSpend: 1200, impressions: 10000, clicks: 400, conversions: 20 },
    setup: [
      { label: "Network", value: "Google Search only" },
      { label: "Location", value: "Selected London boroughs within the service area" },
      { label: "Ad groups", value: "Kitchen renovation · Bathroom refurbishment · General renovation quote" },
      { label: "Bidding", value: "Manual CPC or Maximise Clicks with a cap at launch, reviewed after tracking data builds up" },
      { label: "Schedule", value: "Weekdays and Saturdays, adjusted after reviewing enquiry timing" },
    ],
    keywordGroups: [
      { name: "Kitchen", keywords: ["kitchen renovation London", "kitchen remodeling contractor"] },
      { name: "Bathroom", keywords: ["bathroom refurbishment London", "bathroom renovation quote"] },
      { name: "General", keywords: ["home renovation quote", "renovation company London"] },
    ],
    negativeKeywords: ["jobs", "apprenticeship", "DIY", "B&Q", "IKEA", "second hand", "cheap", "course"],
    negativeStrategy:
      "Separate kitchen and bathroom terms with cross-negatives so each search reaches the matching ad and page, and exclude DIY, retail and job searches.",
    headlines: ["Kitchen Renovation Services", "Plan Your Home Renovation", "Request a Project Estimate"],
    descriptions: [
      "Kitchen and bathroom renovations in London. Share your plans and request an estimate.",
    ],
    displayPath: "renovations/quote",
    landingPage: [
      "Separate kitchen and bathroom service sections",
      "Clear description of the enquiry process",
      "Project concept gallery",
      "Quote-request form",
      "FAQs",
    ],
    tracking: [
      "Primary conversion: quote-request form submission",
      "Secondary conversions: phone and email clicks",
      "Separate conversion reporting per ad group to compare kitchen and bathroom intent",
      "UTM parameters on final URLs",
    ],
    optimization: [
      "Compare cost per conversion between kitchen and bathroom ad groups and shift budget accordingly",
      "Weekly search-terms review and negative keyword updates",
      "Test service-specific headlines against generic ones",
      "Review form drop-off and shorten the form if completion is low",
    ],
    accent: "peach",
  },
  {
    kind: "campaign",
    dataStatus: "illustrative",
    slug: "ads-home-services",
    title: "Home Services Enquiries",
    brandName: "ClearFlow Home Services (fictional concept)",
    industry: "Local home services",
    location: { city: "Austin", country: "United States" },
    currency: "USD",
    projectType: "Hypothetical Google Search campaign",
    campaignType: "Google Search",
    summary:
      "A mobile-focused search campaign plan for a local home-maintenance business, designed to connect service searches with a short enquiry form.",
    services: ["Keyword research", "Local targeting", "Ad copy", "Conversion tracking plan"],
    featured: false,
    objective: "Service enquiry submissions",
    audience: "Austin homeowners on mobile looking for a local home-maintenance provider.",
    conversionDefinition: "A submitted service enquiry form.",
    inputs: { adSpend: 1000, impressions: 10000, clicks: 500, conversions: 25 },
    setup: [
      { label: "Network", value: "Google Search only" },
      { label: "Location", value: "Austin service area by ZIP code radius" },
      { label: "Ad groups", value: "Home maintenance · Repair services · Estimates" },
      { label: "Bidding", value: "Maximise Clicks with a CPC cap at launch, reviewed once conversions are recorded" },
      { label: "Devices", value: "All devices, with mobile performance reviewed separately" },
    ],
    keywordGroups: [
      { name: "Maintenance", keywords: ["home maintenance services Austin", "residential maintenance provider"] },
      { name: "Repairs", keywords: ["local home repair services", "home repair Austin"] },
      { name: "Estimates", keywords: ["home service estimate", "home maintenance estimate"] },
    ],
    negativeKeywords: ["jobs", "hiring", "DIY", "how to", "tools", "Home Depot", "training"],
    negativeStrategy:
      "Exclude informational 'how to' searches, tool shopping and job searches so spend stays focused on people looking for a provider.",
    headlines: ["Home Service Information", "Request a Service Estimate", "Explore Available Services"],
    descriptions: [
      "Home maintenance services in Austin. Choose a service and request an estimate online.",
    ],
    displayPath: "services/estimate",
    landingPage: [
      "Focused service offering",
      "Clear location relevance",
      "Mobile-friendly contact options",
      "Enquiry form",
      "Simple navigation",
    ],
    tracking: [
      "Primary conversion: service enquiry form submission",
      "Click-to-call tracked as a secondary conversion only when a real number is configured",
      "Device segmentation to compare mobile and desktop behaviour",
      "UTM parameters on final URLs",
    ],
    optimization: [
      "Review mobile conversion rate separately and adjust device bids if needed",
      "Refine the location radius based on where enquiries come from",
      "Weekly search-terms review and negative keyword updates",
      "Test estimate-focused headlines against service-focused headlines",
    ],
    accent: "lime",
  },
  {
    kind: "campaign",
    dataStatus: "illustrative",
    slug: "ads-landscaping",
    title: "Landscaping Consultation",
    brandName: "Evergreen Outdoor Living (fictional concept)",
    industry: "Landscaping & outdoor design",
    location: { city: "Brisbane", country: "Australia" },
    currency: "AUD",
    projectType: "Hypothetical Google Search campaign",
    campaignType: "Google Search",
    summary:
      "A search campaign plan for a landscaping business, pairing garden-design keywords with an image-led consultation landing page.",
    services: ["Keyword research", "Campaign structure", "Ad copy", "Landing-page plan"],
    featured: false,
    objective: "Landscaping consultation enquiries",
    audience: "Brisbane homeowners planning a new garden, landscaping work or an outdoor living area.",
    conversionDefinition: "A submitted consultation enquiry form.",
    inputs: { adSpend: 1800, impressions: 15000, clicks: 600, conversions: 24 },
    setup: [
      { label: "Network", value: "Google Search only" },
      { label: "Location", value: "Greater Brisbane service area" },
      { label: "Ad groups", value: "Landscaping services · Garden design · Outdoor living" },
      { label: "Bidding", value: "Maximise Clicks with a CPC cap at launch, reviewed after tracking data builds up" },
      { label: "Seasonality", value: "Budget reviewed ahead of spring and summer planning periods" },
    ],
    keywordGroups: [
      { name: "Landscaping", keywords: ["landscaping services Brisbane", "landscaper Brisbane"] },
      { name: "Garden design", keywords: ["garden design consultation", "landscape designer Brisbane"] },
      { name: "Outdoor living", keywords: ["outdoor living design", "outdoor entertaining area design"] },
    ],
    negativeKeywords: ["jobs", "course", "plants for sale", "nursery", "DIY", "mowing", "Bunnings"],
    negativeStrategy:
      "Exclude retail plant searches, routine lawn mowing and DIY queries, which have different intent from design and landscaping projects.",
    headlines: ["Explore Landscaping Services", "Plan Your Outdoor Space", "Request a Garden Consultation"],
    descriptions: [
      "Landscaping and garden design in Brisbane. Share your ideas to plan a consultation.",
    ],
    displayPath: "landscaping/consultation",
    landingPage: [
      "Strong landscape imagery",
      "Clear service information",
      "Project concept gallery",
      "Consultation form",
      "Mobile-friendly CTA",
    ],
    tracking: [
      "Primary conversion: consultation enquiry form submission",
      "Secondary conversions: phone and email clicks",
      "Ad-group level conversion reporting to compare service intent",
      "UTM parameters on final URLs",
    ],
    optimization: [
      "Compare garden-design and outdoor-living ad groups and rebalance budget",
      "Test imagery and headline order on the landing page",
      "Weekly search-terms review and negative keyword updates",
      "Adjust budget for seasonal demand after reviewing search volume trends",
    ],
    accent: "stone",
  },
];
