"use client";

import { useEffect, useState } from "react";
import EagleLogo from "./EagleLogo";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Eaglez" },
  { href: "#process", label: "Process" },
  { href: "#visit", label: "Visit" },
  { href: "#quote", label: "Get a quote" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-ink/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <EagleLogo className="h-10 w-10" />
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-tight">EAGLEZ PRINTS</span>
            <span className="block text-[11px] uppercase tracking-[0.3em] text-white/50">Abuja</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.slice(0, 4).map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-white/70 transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/40"
          >
            {site.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="rounded-full bg-yellow px-5 py-2 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(255,214,10,0.6)]"
          >
            Get a quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative grid h-11 w-11 place-items-center rounded-full border border-white/15 md:hidden"
        >
          <span
            className={`absolute h-0.5 w-5 bg-white transition ${open ? "rotate-45" : "-translate-y-1.5"}`}
          />
          <span className={`absolute h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`absolute h-0.5 w-5 bg-white transition ${open ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-5 pb-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-display text-lg font-semibold text-white/85 hover:bg-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-2 block rounded-xl bg-yellow px-4 py-3 text-center font-bold text-ink"
            >
              Call {site.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
