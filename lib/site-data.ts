export const SITE = {
  name: "Dr. Bibaswan Maity",
  shortName: "Urosolution",
  tagline: "Expert Urological & Andrological Care",
  titles:
    "Consultant Urologist, Andrologist & Renal Transplant Surgeon",
  phone: "+919239528475",
  phoneDisplay: "+91 92395 28475",
  phoneLocal: "9239528475",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Urosolution,+Rabindranagar,+Opp+Midnapore+Dutta+Nursing+Home,+Midnapore,+West+Bengal&hl=en&z=16&output=embed",
  mapsUrl:
    "https://maps.app.goo.gl/KzcK3cCr9ysCyApx7?g_st=ac",
  address: {
    clinic: "Urosolution",
    line1: "Rabindranagar, (Opp. Midnapore (Dutta) Nursing Home)",
    city: "Midnapore, West Bengal",
    pin: "721101",
    full: "Urosolution, Rabindranagar, (Opp. Midnapore (Dutta) Nursing Home), Midnapore, West Bengal",
  },
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM | Sunday: By appointment",
  qualifications: [
    {
      degree: "MBBS",
      detail: "Foundational medical training in clinical sciences and patient care.",
    },
    {
      degree: "MS (General Surgery)",
      detail: "Advanced surgical training with expertise in operative and perioperative management.",
    },
    {
      degree: "DrNB (Urology)",
      detail: "National Board super-specialty qualification in urology and allied disciplines.",
    },
  ],
  experience: [
    "Formerly attached to SSKM Hospital, Kolkata",
    "Formerly attached to Kokilaben Dhirubhai Ambani Hospital, Mumbai",
  ],
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "urology",
    title: "Urology",
    icon: "Stethoscope" as const,
    description:
      "Comprehensive care for kidney stones, prostate conditions, urinary tract infections, and minimally invasive endourological procedures.",
    highlights: [
      "Kidney stone treatment (URSL, PCNL, RIRS)",
      "Prostate & bladder care",
      "Reconstructive urology",
    ],
  },
  {
    id: "andrology",
    title: "Andrology",
    icon: "HeartPulse" as const,
    description:
      "Specialized evaluation and treatment for male reproductive health, erectile dysfunction, infertility, and related conditions.",
    highlights: [
      "Male infertility assessment",
      "Erectile dysfunction management",
      "Hormonal & sexual health care",
    ],
  },
  {
    id: "transplant",
    title: "Renal Transplant Surgery",
    icon: "Activity" as const,
    description:
      "Expert surgical management for end-stage renal disease with focus on safe transplantation and long-term follow-up.",
    highlights: [
      "Living & deceased donor evaluation",
      "Transplant surgical expertise",
      "Post-transplant monitoring",
    ],
  },
] as const;
