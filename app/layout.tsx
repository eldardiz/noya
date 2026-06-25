import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import AnimationInit from "@/components/providers/AnimationInit";
import { brand } from "@/lib/brand";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://noya.at";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "NOYA — Mediterrane Küche · Wien 20",
  description:
    "Mediterrane Fusionsküche in der Millennium City, Wien 20. Frühstück, Mittagessen und Dinner, von 08:00 bis spät. Italienische Handwerkskunst, levantinische Aromen, nordafrikanische Wärme.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NOYA — Mediterrane Küche · Wien 20",
    description:
      "Mediterrane Fusionsküche in der Millennium City, Wien 20. Vom ersten Espresso am Morgen bis zum letzten Glas Moscato am Abend.",
    locale: "de_AT",
    type: "website",
    url: SITE_URL,
    siteName: brand.name,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${jost.variable} ${pinyon.variable}`}>
      <body>
        <LenisProvider>
          <AnimationInit />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
