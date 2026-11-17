import { services } from "@/lib/site";

const accent = {
  cyan: { bar: "bg-cyan", text: "text-cyan", glow: "group-hover:shadow-cyan/20" },
  magenta: { bar: "bg-magenta", text: "text-magenta", glow: "group-hover:shadow-magenta/20" },
  yellow: { bar: "bg-yellow", text: "text-yellow", glow: "group-hover:shadow-yellow/20" },
} as const;

const icons = [
  <path key="0" d="M3 5h18v10H3zM7 15v4M17 15v4M5 19h14" />,
  <path key="1" d="M3 7h18v10H3zM7 11h6M7 14h4M16 11h1" />,
  <path key="2" d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5" />,
  <path key="3" d="M8 3l-5 4 3 3 2-1v12h8V9l2 1 3-3-5-4c-1 2-2.5 3-4 3S9 5 8 3z" />,
  <path key="4" d="M4 8h12v9a4 4 0 01-4 4H8a4 4 0 01-4-4zM16 10h2a2 2 0 010 4h-2M8 3v2M12 3v2" />,
  <path key="5" d="M4 21V5l8-3 8 3v16M9 21v-5h6v5M8 9h2M14 9h2M8 13h2M14 13h2" />,
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan">What we print</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              If it holds ink, <br className="hidden sm:block" />
              <span className="text-cmyk">we can brand it.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-white/60">
            One shop for routine jobs and big branding projects alike — from a single business card to a
            full campaign rollout.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const a = accent[s.color];
            return (
              <article
                key={s.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-8 shadow-2xl shadow-transparent transition duration-300 hover:-translate-y-1.5 hover:border-white/25 ${a.glow}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition duration-500 group-hover:scale-x-100 ${a.bar}`} />
                <div className="flex items-start justify-between">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 ${a.text}`}>
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {icons[i]}
                    </svg>
                  </span>
                  <span className="font-display text-5xl font-extrabold text-white/[0.06]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className={`mt-8 text-xs font-bold uppercase tracking-[0.25em] ${a.text}`}>{s.tag}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
