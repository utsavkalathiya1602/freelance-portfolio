"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageCircle, Send } from "lucide-react";
import { mailtoHref, siteConfig, whatsappHref } from "@/config/site";

const projectTypes = [
  "Business website",
  "Landing page",
  "Web application",
  "Website redesign",
  "Google Ads campaign",
  "Website + Google Ads",
  "Something else",
];

const budgets = ["Not sure yet", "Under ₹15,000", "₹15,000 – ₹40,000", "₹40,000 – ₹1,00,000", "Above ₹1,00,000"];
const timelines = ["Flexible", "Within 2 weeks", "Within a month", "1–3 months"];

const fieldClass =
  "mt-2 block w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors duration-150 hover:border-ink/40 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const labelClass = "block text-sm font-semibold text-ink";

/**
 * Web3Forms access key. It is designed to be public: it can only deliver submissions to the
 * email address registered with Web3Forms. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local
 * and on your host. Without it, the form falls back to opening the visitor's email app.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string };

type Enquiry = Record<"name" | "email" | "phone" | "business" | "projectType" | "budget" | "timeline" | "message", string>;

function readForm(form: HTMLFormElement): Enquiry {
  const data = new FormData(form);
  const get = (key: string) => String(data.get(key) ?? "").trim();
  return {
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    business: get("business"),
    projectType: get("projectType"),
    budget: get("budget"),
    timeline: get("timeline"),
    message: get("message"),
  };
}

function enquiryText(enquiry: Enquiry): string {
  return [
    `Name: ${enquiry.name}`,
    enquiry.email ? `Email: ${enquiry.email}` : null,
    enquiry.phone ? `Phone: ${enquiry.phone}` : null,
    enquiry.business ? `Business: ${enquiry.business}` : null,
    `Project type: ${enquiry.projectType}`,
    enquiry.budget ? `Budget: ${enquiry.budget}` : null,
    enquiry.timeline ? `Timeline: ${enquiry.timeline}` : null,
    "",
    enquiry.message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const whatsappAvailable = whatsappHref() !== null;
  const directSend = WEB3FORMS_KEY.length > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const enquiry = readForm(form);

    if (submitter?.value === "whatsapp") {
      const href = whatsappHref(enquiryText(enquiry));
      if (href) window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    if (!directSend) {
      window.location.href = mailtoHref(`Project enquiry: ${enquiry.projectType}`, enquiryText(enquiry));
      return;
    }

    // Hidden honeypot field: real visitors never fill it in.
    if (new FormData(form).get("botcheck")) return;

    setStatus({ state: "sending" });
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New project enquiry: ${enquiry.projectType} — ${enquiry.name}`,
          from_name: `${siteConfig.name} website`,
          replyto: enquiry.email,
          name: enquiry.name,
          email: enquiry.email,
          phone: enquiry.phone || "—",
          business: enquiry.business || "—",
          project_type: enquiry.projectType,
          budget: enquiry.budget || "Prefer not to say",
          timeline: enquiry.timeline || "No preference",
          message: enquiry.message,
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || `The message could not be sent (error ${response.status}).`);
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "The message could not be sent.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] border border-ink/10 bg-white p-6 sm:p-8">
        <CheckCircle2 aria-hidden="true" className="h-8 w-8 text-ink" />
        <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-ink">Thanks — your enquiry has been sent.</h3>
        <p className="mt-3 leading-relaxed text-muted">
          It&apos;s now in my inbox. I&apos;ll reply to the email address you provided. If it&apos;s urgent, you can also
          email me directly at{" "}
          <a href={mailtoHref("Project enquiry")} className="font-semibold text-ink underline underline-offset-4">
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 inline-flex h-11 items-center rounded-full border border-ink/25 px-5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-ivory"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const sending = status.state === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="form-note">
      {/* Honeypot for spam bots — hidden from people and assistive technology. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-muted">(required)</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-muted">{directSend ? "(required)" : "(optional)"}</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required={directSend}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            Business name <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="business" name="business" type="text" autoComplete="organization" className={fieldClass} />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>
          What do you need? <span className="text-muted">(required)</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {projectTypes.map((type, index) => (
            <label key={type} className="cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value={type}
                required
                defaultChecked={index === 0}
                className="peer sr-only"
              />
              <span className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink/40 peer-checked:border-ink peer-checked:bg-lime peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell me about the project <span className="text-muted">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          placeholder="What does your business do, what would you like built, and what should it achieve?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget range <span className="font-normal text-muted">(optional)</span>
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="">Prefer not to say</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Preferred timeline <span className="font-normal text-muted">(optional)</span>
          </label>
          <select id="timeline" name="timeline" defaultValue="" className={fieldClass}>
            <option value="">No preference</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      {status.state === "error" ? (
        <div role="alert" className="rounded-xl border-2 border-ink bg-peach p-4 text-sm leading-relaxed text-ink">
          <p className="font-semibold">Sorry — your enquiry wasn&apos;t sent.</p>
          <p className="mt-1">
            {status.message} Please try again, or email me directly at{" "}
            <a href={mailtoHref("Project enquiry")} className="font-semibold underline underline-offset-4">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
        <button
          type="submit"
          name="channel"
          value="email"
          disabled={sending}
          className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-ink/10 bg-lime px-6 text-[0.95rem] font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-lime disabled:cursor-wait disabled:opacity-70 disabled:hover:bg-lime disabled:hover:text-ink"
        >
          {directSend ? <Send aria-hidden="true" className="h-4 w-4" /> : <Mail aria-hidden="true" className="h-4 w-4" />}
          {directSend ? (sending ? "Sending…" : "Send enquiry") : "Continue in email app"}
        </button>
        {whatsappAvailable ? (
          <button
            type="submit"
            name="channel"
            value="whatsapp"
            disabled={sending}
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-ink/25 px-6 text-[0.95rem] font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-white disabled:opacity-70"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Send via WhatsApp
          </button>
        ) : null}
      </div>
      <p id="form-note" className="text-sm leading-relaxed text-muted">
        {directSend
          ? "Your enquiry is sent straight to my inbox through Web3Forms. Your details are only used to reply to you."
          : `This form opens your email app${whatsappAvailable ? " or WhatsApp" : ""} with your enquiry filled in, so you can review it and press send.`}
      </p>
    </form>
  );
}
