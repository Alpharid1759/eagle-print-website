const items = [
  "Flex Banners",
  "Business Cards",
  "Flyers",
  "Roll-up Stands",
  "T-Shirts",
  "Mugs",
  "Stickers",
  "Brochures",
  "Signage",
  "Souvenirs",
  "Letterheads",
  "Branding",
];

const dots = ["bg-cyan", "bg-magenta", "bg-yellow"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative -rotate-1 border-y border-ink bg-yellow py-5 text-ink">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
            {item}
            <i className={`h-3 w-3 rounded-full ring-2 ring-ink ${dots[i % 3]}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
