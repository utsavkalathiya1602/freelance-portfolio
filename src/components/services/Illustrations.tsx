import { Search } from "lucide-react";

/** Static wireframe of a website layout — an illustration, not a real project. */
export function WebsiteIllustration() {
  return (
    <figure className="relative">
      <div aria-hidden="true" className="rounded-[var(--radius-panel)] bg-lime p-5 sm:p-8">
        <div className="overflow-hidden rounded-2xl border border-ink/15 bg-white">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="font-display text-sm font-extrabold tracking-[-0.03em]">Your Brand</span>
            <span className="flex gap-2">
              <span className="h-2 w-8 rounded-full bg-stone" />
              <span className="h-2 w-8 rounded-full bg-stone" />
              <span className="h-2 w-8 rounded-full bg-stone" />
            </span>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-[1.3fr_1fr] sm:p-6">
            <div className="space-y-3">
              <span className="block h-3 w-3/4 rounded-full bg-ink" />
              <span className="block h-3 w-1/2 rounded-full bg-ink" />
              <span className="block h-2 w-full rounded-full bg-stone" />
              <span className="block h-2 w-5/6 rounded-full bg-stone" />
              <span className="mt-2 inline-block h-7 w-24 rounded-full bg-lime" />
            </div>
            <div className="aspect-[4/3] rounded-xl bg-peach" />
          </div>
          <div className="grid grid-cols-3 gap-3 border-t border-line p-5 sm:p-6">
            <span className="h-14 rounded-lg bg-ivory" />
            <span className="h-14 rounded-lg bg-lavender" />
            <span className="h-14 rounded-lg bg-ivory" />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">Illustration of a typical business website layout</figcaption>
    </figure>
  );
}

/** Static illustration of how a search ad appears — not real campaign data. */
export function SearchAdIllustration() {
  return (
    <figure>
      <div aria-hidden="true" className="rounded-[var(--radius-panel)] bg-lavender p-5 sm:p-8">
        <div className="rounded-2xl border border-ink/15 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-3 rounded-full border border-line px-4 py-3">
            <Search className="h-4 w-4 text-muted" />
            <span className="text-sm text-ink">your service near me</span>
          </div>
          <div className="mt-6 space-y-1.5">
            <p className="text-xs text-ink">
              <span className="font-semibold">Sponsored</span> · yourbusiness.com
            </p>
            <p className="font-display text-lg font-semibold leading-snug text-ink">
              Your Service in Your City — Clear Offer, Easy Contact
            </p>
            <p className="text-sm leading-relaxed text-muted">
              A short, relevant description of what you offer and why someone should contact you today.
            </p>
          </div>
          <div className="mt-6 space-y-2 border-t border-line pt-5">
            <span className="block h-2 w-1/3 rounded-full bg-stone" />
            <span className="block h-3 w-3/4 rounded-full bg-stone" />
            <span className="block h-2 w-full rounded-full bg-ivory" />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">Illustration of a Google search ad — not real campaign data</figcaption>
    </figure>
  );
}
