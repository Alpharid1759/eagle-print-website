import { audiences, highlights, site } from "@/lib/site";

const tints = ["bg-cyan", "bg-magenta", "bg-yellow", "bg-paper"];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-paper py-24 text-ink lg:py-32">
      <div className="halftone-dark absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-magenta">Why Eaglez</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              Abuja trusts us with its best ideas.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ink/65">
              Our customers rate us {site.rating} out of 5 across {site.reviewCount} Google reviews — and
              we&apos;re listed among the top printing services in Abuja. Here&apos;s what keeps them coming
              back.
            </p>

            <div className="mt-10 rounded-3xl bg-ink p-8 text-paper shadow-2xl shadow-ink/20">
              <div className="flex items-end gap-4">
                <span className="font-display text-7xl font-extrabold leading-none">{site.rating}</span>
                <div className="pb-2">
                  <div className="flex gap-1 text-yellow">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-white/60">{site.reviewCount} Google reviews</p>
                </div>
              </div>
              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-cyan via-magenta to-yellow" />
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="relative rounded-3xl border-2 border-ink bg-white p-7 shadow-[6px_6px_0_0_#0a0d16] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#0a0d16]"
              >
                <span className={`inline-block h-3 w-12 rounded-full ${tints[i]} ring-2 ring-ink`} />
                <h3 className="mt-5 font-display text-2xl font-bold">{h.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <p className="text-center text-sm font-bold uppercase tracking-[0.3em] text-ink/50">Who we print for</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.title} className="bg-paper p-8 transition hover:bg-yellow">
                <h3 className="font-display text-3xl font-extrabold">{a.title}</h3>
                <p className="mt-3 text-ink/65">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
