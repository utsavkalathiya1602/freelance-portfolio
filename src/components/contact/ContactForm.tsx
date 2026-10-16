"use client";

import type { FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { mailtoHref, whatsappHref } from "@/config/site";

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
 * Enquiry form without a backend.
 * On submit it composes the enquiry and opens the visitor's email app (or WhatsApp, if configured)
 * with everything pre-filled. Nothing is sent until the visitor presses send in that app.
 */
export function ContactForm() {
  const whatsappAvailable = whatsappHref() !== null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "whatsapp" ? "whatsapp" : "email";
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      `Name: ${get("name")}`,
      get("business") ? `Business: ${get("business")}` : null,
      `Project type: ${get("projectType")}`,
      get("budget") ? `Budget: ${get("budget")}` : null,
      get("timeline") ? `Timeline: ${get("timeline")}` : null,
      "",
      get("message"),
    ].filter((line): line is string => line !== null);

    const body = lines.join("\n");

    if (channel === "whatsapp") {
      const href = whatsappHref(body);
      if (href) window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = mailtoHref(`Project enquiry: ${get("projectType")}`, body);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="form-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-muted">(required)</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
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

      <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
        <button
          type="submit"
          name="channel"
          value="email"
          className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-ink/10 bg-lime px-6 text-[0.95rem] font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-lime"
        >
          <Mail aria-hidden="true" className="h-4 w-4" />
          Continue in email app
        </button>
        {whatsappAvailable ? (
          <button
            type="submit"
            name="channel"
            value="whatsapp"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-ink/25 px-6 text-[0.95rem] font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-white"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Send via WhatsApp
          </button>
        ) : null}
      </div>
      <p id="form-note" className="text-sm leading-relaxed text-muted">
        This form doesn&apos;t store or send anything by itself. It opens your email app
        {whatsappAvailable ? " or WhatsApp" : ""} with your enquiry filled in, so you can review it and press send.
      </p>
    </form>
  );
}
