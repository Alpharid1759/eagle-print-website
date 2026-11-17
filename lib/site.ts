export const site = {
  name: "Eaglez Prints Abuja",
  shortName: "Eaglez Prints",
  tagline: "Print everything & on everything",
  phoneDisplay: "0703 592 8665",
  phoneTel: "+2347035928665",
  whatsapp: "2347035928665",
  address: "Murg Plaza, Area 10, opposite UTC, Garki, Abuja 900247, FCT, Nigeria",
  addressShort: "Murg Plaza, Area 10, Garki — opposite UTC",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=EAGLEZ+PRINTS+ABUJA%2C+Area+10%2C+MURG+PLAZA+OPPOSITE+UTC%2C+Garki%2C+Abuja+900247",
  mapsEmbed:
    "https://maps.google.com/maps?q=EAGLEZ%20PRINTS%20ABUJA%2C%20Murg%20Plaza%2C%20Area%2010%2C%20Garki%2C%20Abuja&z=16&output=embed",
  rating: 4.8,
  reviewCount: 31,
};

export type DayHours = { day: string; open: string; close: string; openMin: number; closeMin: number };

export const hours: DayHours[] = [
  { day: "Sunday", open: "10:00 AM", close: "6:00 PM", openMin: 600, closeMin: 1080 },
  { day: "Monday", open: "7:00 AM", close: "10:00 PM", openMin: 420, closeMin: 1320 },
  { day: "Tuesday", open: "7:00 AM", close: "10:00 PM", openMin: 420, closeMin: 1320 },
  { day: "Wednesday", open: "7:00 AM", close: "10:00 PM", openMin: 420, closeMin: 1320 },
  { day: "Thursday", open: "7:00 AM", close: "10:00 PM", openMin: 420, closeMin: 1320 },
  { day: "Friday", open: "7:00 AM", close: "10:00 PM", openMin: 420, closeMin: 1320 },
  { day: "Saturday", open: "7:00 AM", close: "10:00 PM", openMin: 420, closeMin: 1320 },
];

export const services = [
  {
    title: "Flex & Large Format",
    desc: "Banners, backdrops, roll-ups and billboards printed big, bold and weather-ready.",
    tag: "Large format",
    color: "cyan",
  },
  {
    title: "Business Stationery",
    desc: "Business cards, letterheads, envelopes, ID cards and receipt booklets with crisp finishing.",
    tag: "Stationery",
    color: "magenta",
  },
  {
    title: "Flyers & Brochures",
    desc: "Handbills, brochures, programmes and posters for launches, churches, events and campaigns.",
    tag: "Marketing",
    color: "yellow",
  },
  {
    title: "Branded Apparel",
    desc: "T-shirts, polos, caps and uniforms branded for teams, staff, events and campaigns.",
    tag: "Apparel",
    color: "cyan",
  },
  {
    title: "Souvenirs & Gifts",
    desc: "Mugs, jotters, pens, plaques, keyholders and gift items for weddings, conferences and corporate gifting.",
    tag: "Souvenirs",
    color: "magenta",
  },
  {
    title: "Corporate Branding",
    desc: "Signage, office branding, stickers, labels and packaging that make your brand impossible to miss.",
    tag: "Branding",
    color: "yellow",
  },
] as const;

export const audiences = [
  { title: "Individuals", desc: "Birthdays, weddings, burials and personal projects — no job too small." },
  { title: "Businesses", desc: "From start-up identity kits to full brand rollouts for growing companies." },
  { title: "Government", desc: "Reliable bulk printing for ministries, departments and agencies." },
  { title: "NGOs", desc: "Campaign materials, reports and event branding delivered on schedule." },
];

export const highlights = [
  {
    title: "Print quality",
    desc: "Customers consistently point to sharp, clean output and quality materials.",
  },
  {
    title: "Fast turnaround",
    desc: "Reviewers mention prompt execution — including last-minute flex printing delivered on time.",
  },
  {
    title: "Ideation to implementation",
    desc: "Customers describe an easy process, from shaping the idea to the finished job.",
  },
  {
    title: "Great customer relations",
    desc: "Friendly, reliable service is one of the most-praised parts of the experience.",
  },
];

export const process = [
  { step: "01", title: "Share your idea", desc: "Call, WhatsApp or walk in to Murg Plaza with your brief, sketch or file." },
  { step: "02", title: "Design & proof", desc: "We refine the design and send a proof so you see it before it prints." },
  { step: "03", title: "Print & finish", desc: "Your job goes to press with careful finishing — cut, laminated, bound or mounted." },
  { step: "04", title: "Collect your job", desc: "Pick up your finished order from our shop in Murg Plaza, Area 10." },
];
