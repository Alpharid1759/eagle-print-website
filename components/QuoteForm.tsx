"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0].title as string,
    quantity: "",
    deadline: "",
    details: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello ${site.shortName}, I'd like a quote.`,
      "",
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.deadline && `Needed by: ${form.deadline}`,
      form.details && `Details: ${form.details}`,
    ].filter(Boolean);
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-2xl border border-white/10 bg-ink px-4 py-3.5 text-paper placeholder:text-white/30 outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/15";

  return (
    <section id="quote" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-magenta/20 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan">Get a quote</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Got a job? <br />
            <span className="text-cmyk">Let&apos;s print it.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/60">
            Tell us what you need and we&apos;ll get back with pricing and timelines. Short-notice job? Call us
            directly — we&apos;re open late.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-2 p-5 transition hover:border-white/30"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-yellow text-ink">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/45">Call us</span>
                <span className="font-display text-xl font-bold">{site.phoneDisplay}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-2 p-5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-magenta">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/45">Walk in</span>
                <span className="font-display text-lg font-bold">{site.addressShort}</span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[2rem] border border-white/10 bg-ink-2/80 p-7 shadow-2xl shadow-black/40 backdrop-blur sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/70">Your name</span>
              <input required value={form.name} onChange={update("name")} placeholder="e.g. Amaka Obi" className={field} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/70">Phone number</span>
              <input type="tel" value={form.phone} onChange={update("phone")} placeholder="080..." className={field} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/70">What do you need?</span>
              <select value={form.service} onChange={update("service")} className={field}>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Something else</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/70">Quantity</span>
              <input value={form.quantity} onChange={update("quantity")} placeholder="e.g. 500 pcs" className={field} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-white/70">Needed by</span>
              <input type="date" value={form.deadline} onChange={update("deadline")} className={`${field} [color-scheme:dark]`} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-white/70">Job details</span>
              <textarea
                rows={4}
                value={form.details}
                onChange={update("details")}
                placeholder="Size, material, colours, finishing — anything that helps us quote accurately."
                className={`${field} resize-none`}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-yellow px-7 py-4 font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgba(255,214,10,0.7)]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
            </svg>
            Send request on WhatsApp
          </button>
          <p className="mt-4 text-center text-xs text-white/40">
            Opens WhatsApp with your details pre-filled — just hit send.
          </p>
        </form>
      </div>
    </section>
  );
}
