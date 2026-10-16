import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { mailtoHref, siteConfig, whatsappHref } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type ContactCTAProps = {
  heading?: string;
  text?: string;
};

export function ContactCTA({
  heading = "Have a project in mind?",
  text = "Tell me about your business, your goals, and what you'd like to build. Let's discuss the right next step.",
}: ContactCTAProps) {
  const whatsapp = whatsappHref("Hi Utsav, I'd like to discuss a project.");

  return (
    <section aria-labelledby="cta-heading" className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-panel)] bg-lime px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full border-[28px] border-ink/10" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h2
                id="cta-heading"
                className="font-display text-[2.4rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink text-balance sm:text-6xl"
              >
                {heading}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Button href="/contact" variant="dark" size="lg">
                Discuss Your Project
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button href={mailtoHref("Project enquiry")} variant="light" size="lg">
                <Mail aria-hidden="true" className="h-4 w-4" />
                Email Me
              </Button>
              {whatsapp ? (
                <Button href={whatsapp} variant="outline" size="lg" external>
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  WhatsApp
                </Button>
              ) : null}
            </div>
          </div>
          <p className="relative mt-10 border-t border-ink/15 pt-5 text-sm text-ink/70">
            Prefer email? Write to{" "}
            <a href={mailtoHref("Project enquiry")} className="font-semibold text-ink underline underline-offset-4">
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
