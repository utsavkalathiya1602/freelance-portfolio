import { MapPin, Search, Store } from "lucide-react";
import type { AdsClientProject } from "@/types/project";

type ClientVisualProps = {
  client: AdsClientProject;
  size?: "card" | "hero";
};

/**
 * Visual for a real Google Ads client: the journey from a local search to the store.
 * Deliberately shows no metrics or account screenshots — figures are only published with approval.
 */
export function ClientVisual({ client, size = "card" }: ClientVisualProps) {
  const hero = size === "hero";

  return (
    <div className={`bg-lavender ${hero ? "p-6 sm:p-10" : "p-5 sm:p-8"}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime" />
          Real client · {client.status}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">{client.campaignType}</span>
      </div>

      <ol className="mt-5 grid gap-3" aria-label="How customers reach the store">
        <li className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone">
            <Search aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">1 · Local search</span>
            <span className="block truncate text-sm text-ink">Someone nearby searches for telecom services</span>
          </span>
        </li>
        <li className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime">
            <MapPin aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">2 · Search ad</span>
            <span className="block truncate text-sm text-ink">Accurate store details in {client.location.city}</span>
          </span>
        </li>
        <li className="flex items-center gap-3 rounded-2xl bg-ink p-4 text-white">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender text-ink">
            <Store aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">3 · Store visit</span>
            <span className="block truncate text-sm">{client.clientName}</span>
          </span>
        </li>
      </ol>
    </div>
  );
}
