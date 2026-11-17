"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/site";

type Status = { open: boolean; label: string; dayIndex: number };

function lagosNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Monday";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const dayIndex = hours.findIndex((h) => h.day === weekday);
  return { dayIndex: dayIndex < 0 ? 1 : dayIndex, mins: hour * 60 + minute };
}

export function getStatus(): Status {
  const { dayIndex, mins } = lagosNow();
  const today = hours[dayIndex];
  if (mins >= today.openMin && mins < today.closeMin) {
    return { open: true, label: `Open now · until ${today.close}`, dayIndex };
  }
  if (mins < today.openMin) {
    return { open: false, label: `Closed · opens ${today.open} today`, dayIndex };
  }
  const next = hours[(dayIndex + 1) % 7];
  return { open: false, label: `Closed · opens ${next.open} ${next.day}`, dayIndex };
}

export function useOpenStatus() {
  const [status, setStatus] = useState<Status | null>(null);
  useEffect(() => {
    const tick = () => setStatus(getStatus());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}

export default function OpenStatus({ className = "" }: { className?: string }) {
  const status = useOpenStatus();
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        {status?.open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            status ? (status.open ? "bg-emerald-400" : "bg-rose-400") : "bg-white/40"
          }`}
        />
      </span>
      {status ? status.label : "Mon–Sat 7AM–10PM · Sun 10AM–6PM"}
    </span>
  );
}
