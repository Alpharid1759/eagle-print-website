import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eaglez Prints Abuja | Printing & Branding in Area 10, Garki",
  description:
    "Eaglez Prints Abuja — digital branding and printing for individuals, businesses, government and NGOs. Flex banners, business cards, flyers, apparel, souvenirs and more. Murg Plaza, Area 10, opposite UTC, Garki.",
  keywords: [
    "printing Abuja",
    "print shop Garki",
    "Area 10 printing",
    "flex banner Abuja",
    "branding Abuja",
    "Eaglez Prints",
    "UTC Area 10",
  ],
  openGraph: {
    title: "Eaglez Prints Abuja — Print everything & on everything",
    description:
      "Rated 4.8 on Google. Fast, quality printing and branding at Murg Plaza, Area 10, Garki, Abuja.",
    type: "website",
    locale: "en_NG",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0a0d16",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  telephone: site.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Murg Plaza, Area 10, opposite UTC",
    addressLocality: "Garki, Abuja",
    postalCode: "900247",
    addressRegion: "Federal Capital Territory",
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
