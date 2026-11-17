import { process } from "@/lib/site";

const colors = ["text-cyan", "text-magenta", "text-yellow", "text-paper"];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow">How it works</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            From idea to ink in four easy steps.
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-cyan via-magenta to-yellow opacity-50 md:block" />
          {process.map((p, i) => (
            <li key={p.step} className="relative">
              <span className="relative grid h-20 w-20 place-items-center rounded-full border border-white/15 bg-ink-2">
                <span className={`font-display text-2xl font-extrabold ${colors[i]}`}>{p.step}</span>
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-white/60">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
