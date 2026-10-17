import Link from "next/link";
import { Check } from "lucide-react";
import type { MarketingChannel } from "@/data/services";

const toneBg = { lime: "bg-lime", lavender: "bg-lavender", peach: "bg-peach" } as const;

/** Detailed cards for each digital marketing channel, with anchors (#google-ads, #meta-ads, #seo). */
export function MarketingChannels({ channels }: { channels: MarketingChannel[] }) {
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {channels.map((channel) => {
        const Icon = channel.icon;
        return (
          <li
            key={channel.id}
            id={channel.id}
            className="flex flex-col overflow-hidden rounded-[var(--radius-panel)] border border-ink/10 bg-white"
          >
            <div className={`p-6 sm:p-8 ${toneBg[channel.tone]}`}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-[1.7rem]">
                {channel.name}
              </h3>
              <p className="mt-1 font-medium text-ink/75">{channel.tagline}</p>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="leading-relaxed text-muted">{channel.description}</p>

              <ul className="mt-6 space-y-2.5" aria-label={`${channel.name} includes`}>
                {channel.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="rounded-2xl bg-ivory p-4 text-sm leading-relaxed text-ink">
                  <span className="font-semibold">Best for: </span>
                  {channel.bestFor}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** Compact channel list for the page hero, linking to the detailed cards. */
export function MarketingChannelsAside({
  channels,
  clientLink,
}: {
  channels: MarketingChannel[];
  clientLink?: { href: string; label: string };
}) {
  return (
    <div className="grid gap-4">
      <ul className="grid gap-3">
        {channels.map((channel, index) => {
          const Icon = channel.icon;
          return (
            <li key={channel.id}>
              <a
                href={`#${channel.id}`}
                className={`group flex items-center gap-4 rounded-[var(--radius-card)] border border-ink/10 p-5 transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(23,23,23,0.45)] ${toneBg[channel.tone]} ${
                  index === 1 ? "sm:ml-8" : index === 2 ? "sm:ml-16" : ""
                }`}
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-xl font-bold tracking-[-0.02em] text-ink">{channel.name}</span>
                  <span className="block text-sm text-ink/75">{channel.tagline}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      {clientLink ? (
        <Link
          href={clientLink.href}
          className="flex items-center justify-between gap-4 rounded-[var(--radius-card)] bg-ink px-5 py-4 text-sm text-white transition-colors duration-150 hover:bg-ink/90"
        >
          <span>
            <span className="mr-2 inline-flex items-center gap-1.5 rounded-full bg-lime px-2.5 py-0.5 text-xs font-semibold text-ink">
              Real client
            </span>
            {clientLink.label}
          </span>
          <span aria-hidden="true" className="text-lime">
            →
          </span>
        </Link>
      ) : null}
    </div>
  );
}
