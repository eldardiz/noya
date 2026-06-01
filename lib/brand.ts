// NOYA — single source of truth for all restaurant data.
// Items marked PENDING are placeholders awaiting client confirmation.

export const brand = {
  name: "NOYA",
  tagline: "Mediterrane Küche",
  city: "Wien 20",
  district: "Brigittenau",
  venue: "Millennium City",
  address: {
    line1: "Handelskai 94—96",
    line2: "1200 Wien",
    country: "AT",
  },
  phone: "+43 1 240 80 24", // PENDING confirm
  phoneHref: "+431240802400",
  email: "hallo@noya.at", // PENDING confirm
  domain: "noya.at",
  social: {
    tiktok: "@noya.at",
    tiktokUrl: "https://www.tiktok.com/@noya.at",
    instagram: "@noya.at",
    instagramUrl: "https://www.instagram.com/noya.at",
    followers: "47.4k",
  },
  hours: {
    weekday: "08:00 — 23:00",
    weekend: "09:00 — 24:00",
    heroLine: "Täglich 08:00 — 23:00",
  },
  reserveUrl: "#reservieren", // PENDING booking system
} as const;

export const nav = [
  { label: "Über", href: "#ueber" },
  { label: "Speisen", href: "#speisen" },
  { label: "Frühstück", href: "#fruhstuck" },
  { label: "Galerie", href: "#ambiente" },
  { label: "Kontakt", href: "#anfahrt" },
];
