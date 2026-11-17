"use client";

import { hours, site } from "@/lib/site";
import { useOpenStatus } from "./OpenStatus";

const order = [1, 2, 3, 4, 5, 6, 0];

export default function Visit() {
  const status = useOpenStatus();

  return (
    <section id="visit" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-magenta">Visit the shop</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Find us in the heart of Area 10.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            We&apos;re in Murg Plaza, right opposite UTC — Abuja&apos;s busiest printing district.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-ink-2 p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">Opening hours</h3>
                {status && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      status.open ? "bg-emerald-400/15 text-emerald-300" : "bg-rose-400/15 text-rose-300"
                    }`}
                  >
                    {status.open ? "Open now" : "Closed"}
                  </span>
                )}
              </div>
              <ul className="mt-6 divide-y divide-white/5">
                {order.map((idx) => {
                  const h = hours[idx];
                  const today = status?.dayIndex === idx;
                  return (
                    <li
                      key={h.day}
                      className={`flex items-center justify-between py-3 text-[15px] ${
                        today ? "font-bold text-yellow" : "text-white/70"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {today && <i className="h-1.5 w-1.5 rounded-full bg-yellow" />}
                        {h.day}
                      </span>
                      <span className="tabular-nums">
                        {h.open} – {h.close}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-cyan via-magenta to-yellow p-[1.5px]">
              <div className="rounded-[calc(1.5rem-1.5px)] bg-ink-2 p-8">
                <h3 className="font-display text-2xl font-bold">Address</h3>
                <p className="mt-3 text-white/70">{site.address}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={site.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-paper px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5"
                  >
                    Get directions
                  </a>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white/50"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Eaglez Prints Abuja on Google Maps"
              src={site.mapsEmbed}
              className="absolute inset-0 h-full w-full grayscale-[0.4] invert-[0.9] hue-rotate-180 contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-5 top-5 rounded-2xl bg-ink/90 px-4 py-3 backdrop-blur">
              <p className="font-display font-bold">Eaglez Prints Abuja</p>
              <p className="text-xs text-white/60">Murg Plaza · opposite UTC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
