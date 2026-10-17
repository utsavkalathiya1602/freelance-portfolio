import { allWork } from "@/data/work";

/**
 * Default WhatsApp message for each page, so the chat starts with useful context.
 * Edit the wording here.
 */
export const whatsappMessages = {
  default: "Hi Utsav, I found your website and I'd like to discuss a project.",
  webDevelopment: "Hi Utsav, I'm interested in a website for my business.",
  digitalMarketing: "Hi Utsav, I'm interested in digital marketing (Google Ads / Meta Ads / SEO) for my business.",
  contact: "Hi Utsav, I'd like to discuss a project.",
} as const;

export function whatsappMessageFor(pathname: string): string {
  if (pathname.startsWith("/services/web-development")) return whatsappMessages.webDevelopment;
  if (pathname.startsWith("/services/digital-marketing")) return whatsappMessages.digitalMarketing;
  if (pathname.startsWith("/contact")) return whatsappMessages.contact;

  const workMatch = pathname.match(/^\/work\/([^/]+)/);
  if (workMatch) {
    const item = allWork.find((work) => work.slug === workMatch[1]);
    if (item?.kind === "website") {
      return `Hi Utsav, I saw your ${item.title} project and I'd like a similar website for my business.`;
    }
    if (item?.kind === "ads-client") return whatsappMessages.digitalMarketing;
  }

  return whatsappMessages.default;
}
