import OpenStatus from "./OpenStatus";
import EagleLogo from "./EagleLogo";
import { site } from "@/lib/site";

function Stars() {
  return (
    <span className="flex gap-0.5 text-yellow" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

function RegMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 2v36M2 20h36" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="grain relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="halftone absolute inset-0 -z-10" />
      <div className="absolute -left-40 top-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan/25 blur-[120px]" />
      <div className="absolute right-[-10rem] top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-magenta/25 blur-[130px]" />
      <div className="absolute bottom-[-12rem] left-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-yellow/15 blur-[120px]" />

      <RegMark className="absolute left-6 top-28 h-8 w-8 text-white/20 animate-spin-slow" />
      <RegMark className="absolute right-8 bottom-10 h-10 w-10 text-white/15 animate-spin-slow" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <OpenStatus />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85">
              <Stars />
              {site.rating} on Google · {site.reviewCount} reviews
            </span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.9rem,7.4vw,6.4rem)] font-extrabold leading-[0.92] tracking-tight">
            Print <span className="text-cmyk">everything.</span>
            <br />
            On <span className="misregister">everything.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
            Digital branding and printing for individuals, businesses, government organisations and
            NGOs — crafted with care at Murg Plaza, Area 10, right opposite UTC in Garki, Abuja.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-4 font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgba(255,214,10,0.7)]"
            >
              Request a quote
              <svg viewBox="0 0 20 20" className="h-5 w-5 transition group-hover:translate-x-1" fill="currentColor">
                <path d="M11.3 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L14.6 11H3a1 1 0 110-2h11.6l-3.3-3.3a1 1 0 010-1.4z" />
              </svg>
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
              </svg>
              Call {site.phoneDisplay}
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/45">Google rating</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold">{site.rating}/5</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/45">Open</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold">7 days</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/45">Open till</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold">10PM</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto h-[480px] w-full max-w-[520px] sm:h-[540px]">
          <div
            className="absolute left-[6%] top-[4%] w-[62%] animate-float rounded-3xl bg-paper p-6 text-ink shadow-2xl shadow-black/50"
            style={{ ["--r" as string]: "-7deg" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/50">Flyer · A5</span>
              <span className="flex gap-1">
                <i className="h-3 w-3 rounded-full bg-cyan" />
                <i className="h-3 w-3 rounded-full bg-magenta" />
                <i className="h-3 w-3 rounded-full bg-yellow" />
                <i className="h-3 w-3 rounded-full bg-ink" />
              </span>
            </div>
            <div className="mt-5 h-32 rounded-2xl bg-gradient-to-br from-cyan via-magenta to-yellow" />
            <p className="mt-5 font-display text-2xl font-extrabold leading-tight">Grand Opening Sale</p>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-4/5 rounded bg-ink/10" />
              <div className="h-2 w-3/5 rounded bg-ink/10" />
            </div>
          </div>

          <div
            className="absolute right-[2%] top-[22%] w-[54%] animate-float-slow rounded-2xl bg-ink-3 p-5 shadow-2xl shadow-black/60 ring-1 ring-white/10"
            style={{ ["--r" as string]: "8deg", animationDelay: "-2s" }}
          >
            <div className="flex items-center gap-3">
              <EagleLogo className="h-9 w-9" />
              <div>
                <p className="font-display text-sm font-bold">Your Brand Ltd.</p>
                <p className="text-[10px] uppercase tracking-widest text-white/45">Business card</p>
              </div>
            </div>
            <div className="mt-6 h-px bg-gradient-to-r from-cyan via-magenta to-yellow" />
            <p className="mt-3 text-[11px] text-white/55">+234 · hello@yourbrand.ng</p>
          </div>

          <div
            className="absolute bottom-[6%] left-[14%] w-[58%] animate-float rounded-[28px] bg-magenta p-6 shadow-2xl shadow-magenta/30"
            style={{ ["--r" as string]: "4deg", animationDelay: "-4s" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">Flex banner</p>
            <p className="mt-2 font-display text-3xl font-extrabold leading-none">BIG. BOLD. FAST.</p>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-white/80">
              <span>Large format</span>
              <span>Any size</span>
            </div>
          </div>

          <div className="absolute bottom-[26%] right-[6%] grid h-28 w-28 animate-float-slow place-items-center rounded-full bg-yellow text-center text-ink shadow-xl shadow-yellow/20">
            <div>
              <p className="font-display text-3xl font-extrabold leading-none">{site.rating}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider">Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
