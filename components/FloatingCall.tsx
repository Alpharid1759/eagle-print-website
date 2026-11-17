import { site } from "@/lib/site";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      aria-label={`Call ${site.name}`}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-yellow text-ink shadow-[0_14px_40px_-8px_rgba(255,214,10,0.7)] transition hover:scale-110 md:hidden"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-yellow/40" />
      <svg viewBox="0 0 24 24" className="relative h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
      </svg>
    </a>
  );
}
