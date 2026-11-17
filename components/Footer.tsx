import EagleLogo from "./EagleLogo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <p className="font-display text-[clamp(3rem,12vw,10rem)] font-extrabold leading-none tracking-tighter text-white/[0.05]">
          EAGLEZ PRINTS
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <EagleLogo className="h-11 w-11" />
              <span className="font-display text-xl font-extrabold">{site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-white/55">
              Digital branding & printing for individuals, businesses, government organisations and NGOs.{" "}
              {site.tagline}.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Contact</h4>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>
                <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>{site.addressShort}</li>
              <li>Abuja 900247, FCT</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Hours</h4>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>Mon – Sat: 7:00 AM – 10:00 PM</li>
              <li>Sunday: 10:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <i className="h-2 w-2 rounded-full bg-cyan" />
            <i className="h-2 w-2 rounded-full bg-magenta" />
            <i className="h-2 w-2 rounded-full bg-yellow" />
            <i className="h-2 w-2 rounded-full bg-white" />
            <span className="ml-1">Printed with pride in Abuja</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
