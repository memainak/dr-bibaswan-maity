export const SITE = {
  name: "Dr. Bibaswan Maity",
  brandTitle: "Urosolution – Excellence in Urology",
  shortName: "Urosolution",
  tagline: "Expert Urology, Andrology & Laparoscopy Care in Midnapore",
  titles:
    "Consultant Urologist, Andrologist, Uro-oncologist, Laparoscopic & Renal Transplant Surgeon",
  profileImage: "/images/dr-bibaswan-maity.jpg",
  heroImage: "/images/hero-clinic.jpg",
  clinicImage: "/images/clinic-care.jpg",
  phone: "+919239528475",
  phoneDisplay: "+91 92395 28475",
  phoneLocal: "9239528475",
  whatsappMessage:
    "Hello Dr. Bibaswan Maity, I would like to book an appointment at Urosolution.",
  whatsappUrl: `https://wa.me/919239528475?text=${encodeURIComponent(
    "Hello Dr. Bibaswan Maity, I would like to book an appointment at Urosolution."
  )}`,
  facebookUrl: "https://www.facebook.com/profile.php?id=61576066049122",
  youtubeChannelUrl: "https://youtube.com/@dr.bibaswanmaity?si=bfRrJues-RkH5wVW",
  developer: {
    name: "Ad Venture Advertising",
    url: "https://www.ad-venture.in",
  },
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
  hours: "Monday – Friday: 8:00 AM – 1:30 PM | 4:30 PM – 8:00 PM | Saturday & Sunday: By appointment",
  qualifications: [
    {
      degree: "MBBS",
      detail: "Midnapore Medical College & Hospital, West Bengal",
    },
    {
      degree: "MS (General Surgery)",
      detail: "IPGMER & SSKM Hospital Kolkata, West Bengal",
    },
    {
      degree: "DrNB (Urology)",
      detail: "National Board of Examinations, New Delhi",
    },
  ],
  currentAttachment: "Visiting Consultant at Shyama Prasad Mukherjee Super Speciality Hospital, IIT, Kharagpur, West Bengal",
  experience: [
    "Formerly attached to SSKM Hospital (PG Hospital), Kolkata",
    "Formerly attached to Kokilaben Dhirubhai Ambani Hospital, Mumbai",
  ],
  memberships: [
    "Urological Society Of India",
    "East Zone - USI",
    "Bengal Urological Society",
  ],
  galleryImages: [
    { src: "/images/gallery-urology.jpg", alt: "Advanced urology care at Urosolution" },
    { src: "/images/gallery-laparoscopy.jpg", alt: "Laparoscopic surgical services" },
    { src: "/images/gallery-clinic.jpg", alt: "Urosolution clinic Midnapore" },
  ],
} as const;

export const YOUTUBE_VIDEOS = [
  {
    id: "video-1",
    title: "Know about kidney stone: Dr. Bibaswan Maity",
    youtubeId: "JWhklonVORc",
  },
  {
    id: "video-2",
    title: "Patient Education & Health Tips",
    youtubeId: "",
  },
  {
    id: "video-3",
    title: "Treatments & Clinic Services",
    youtubeId: "",
  },
] as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#videos", label: "Videos" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#appointment", label: "Book" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICE_CATEGORIES = [
  {
    id: "kidney-stone",
    letter: "A",
    title: "Kidney Stone Treatment",
    subtitle: "Laser Stone Surgery",
    image: "/images/service-kidney.jpg",
    icon: "Gem" as const,
    description:
      "Advanced treatments of kidney & ureteric stones with minimal discomfort.",
    highlights: [
      "PCNL & Mini-PCNL",
      "Laser Lithotripsy (Laser URS/RIRS)",
      "Pneumatic Lithotripsy",
      "Preventive Strategies",
    ],
  },
  {
    id: "prostate",
    letter: "B",
    title: "Prostate Care",
    image: "/images/service-prostate.jpg",
    icon: "Shield" as const,
    description:
      "Comprehensive management of prostate conditions with modern surgical and medical options.",
    highlights: [
      "TURP (Trans-Urethral Resection of Prostate)",
      "TUIP (Trans-Urethral Incision of Prostate)",
      "Laser Prostatectomy (HOLEP / ThuLEP)",
      "Prostate Biopsy (TRUS Biopsy)",
      "Medical Treatment",
    ],
  },
  {
    id: "reconstructive",
    letter: "C",
    title: "Reconstructive Urology",
    image: "/images/service-reconstructive.jpg",
    icon: "Wrench" as const,
    description:
      "Thorough evaluation & treatment for urethral strictures, meatal stenosis, ureteric strictures,hypospadias etc.",
    highlights: [
      "Circumcision & Meatoplasty",
      "Hypospadias Repair",
      "Ureteric Re-implantation / Uretero-Neo-Cystostomy",
      "Urethroplasty",
      "Laser/Optical urethrotomy (OIU)",
      "Hydrocele Surgery",
      "Laproscopic Pyeloplasty",
    ],
  },
  {
    id: "oncology",
    letter: "D",
    title: "Urologic Oncology",
    image: "/images/service-oncology.jpg",
    icon: "Microscope" as const,
    description:
      "Comprehensive care for diagnosis & treatment of kidney, ureter,urinary bladder,penis and testis cancers.",
    highlights: [
      "TURBT (Trans-Urethral Resection of Bladder Tumor)",
      "Laparoscopic Nephrectomy / Nephro-Ureterectomy",
      "Radical Prostatectomy",
      "Penectomy",
      "Orchidectomy",
    ],
  },
  {
    id: "andrology",
    letter: "E",
    title: "Andrology",
    image: "/images/service-andrology.jpg",
    icon: "HeartPulse" as const,
    description:
      "Evaluation & treatment for sexual health problems(male & female) and male partner infertility.",
    highlights: [
      "Erectile Dysfunction",
      "Premature Ejaculation",
      "TURED (Trans-Urethral Resection of Ejaculatory Duct)",
      "Penile Prosthesis Implantation",
      "Peyronie's Disease",
    ],
  },
  {
    id: "female",
    letter: "F",
    title: "Female Urology",
    image: "/images/service-female.jpg",
    icon: "UserRound" as const,
    description: "Specialised care for women's urological and pelvic floor conditions.",
    highlights: [
      "Urinary Incontinence",
      "Urodynamic Study",
      "Sling Procedures",
      "Urogenital Fistula Repair",
      "Overactive Bladder",
      "Urinary Tract Infection (UTI)",
      "Pelvic Organ Prolapse",
    ],
  },
  {
    id: "pediatric",
    letter: "G",
    title: "Pediatric Urology",
    image: "/images/service-pediatric.jpg",
    icon: "Baby" as const,
    description: "Expert care for children with congenital and developmental urological conditions.",
    highlights: [
      "Circumcision & Hypospadias Repair",
      "Posterior Urethral Valve (PUV)",
      "Bed Wetting Treatment",
      "Undescended Testis",
      "Posterior Urethral Valve",
      "PUJ Obstruction",
      "Pediatric Stone Disease",
    ],
  },
  {
    id: "laparoscopy",
    letter: "H",
    title: "Laparoscopy Services",
    image: "/images/service-laparoscopy.jpg",
    icon: "Scan" as const,
    description:
      "General surgical laparoscopy alongside advanced urological laparoscopic procedures.",
    highlights: [
      "Laparoscopic Gall Bladder Surgery",
      "Laparoscopic Appendix Surgery",
      "Hernia Surgery",
      "Laparoscopic Pyeloplasty",
    ],
  },
] as const;

export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=eb7e31ac54169e18&rlz=1C5BAPC_enIN1168IN1169&sxsrf=APpeQnuRsNYR5vSuqKr1C5LAIWPZYozNAA:1782370106446&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_wtG13xjF4-CU8zv1d7AoyyQEg4TVaNzVwYAIixsoByxw6fozItTC6DVNlsGy7R55u4W0zfhzL65YD2ez9zwkvTDm5VWwzoX3jpH8iHjoj5x0fwukQ%3D%3D&q=Dr.+Bibaswan+Maity+Reviews&sa=X&ved=2ahUKEwiI4LWI5qGVAxXLa2wGHW74EWMQ0bkNegQIJxAF&biw=1374&bih=756&dpr=2";

export const TESTIMONIALS = [
  {
    author: "Atanu Kaila",
    info: "1 review",
    time: "a month ago",
    rating: 5,
    text: "I am deeply grateful to Dr. Bibaswan Maity for successfully treating my right-side 8.6 mm kidney stone through RIRS with DJ stenting. His exceptional skill, professionalism, and compassionate care made the entire journey smooth and stress-free. He is highly knowledgeable, very friendly, and truly understanding, always taking time to listen and explain everything clearly. The hospital staff were also very helpful. Now I am feeling much better. Overall, my experience was outstanding. Highly recommended!",
  },
  {
    author: "Bibek Mahapatra",
    info: "1 review · 1 photo",
    time: "2 weeks ago",
    rating: 5,
    text: "My mom suffered from some problems. We consult with doctor bibaswan Maity sir an advice us what we can do and explain everything . And we glad my mom was stable now . He was very good surgeon. Thanks Dr. bibaswan sir.",
  },
  {
    author: "Sultana Bibi",
    info: "1 review",
    time: "4 months ago",
    rating: 5,
    text: "My wife suffering from pain for kidney stone we visited many doctors but we are not satisfied. Then we visited dr. Bibaswan maity and satisfied by his behaviour and done stone surgery \"RIRS\" Laser surgery from him . He explained us everything and surgery done very well.",
  },
] as const;

