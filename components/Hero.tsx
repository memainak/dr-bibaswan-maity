import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site-data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 pt-28 pb-20 text-white sm:pt-32 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-primary-400/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Trusted Urological Care in Midnapore
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {SITE.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-100 sm:text-xl">
            <span className="font-semibold text-white">{SITE.name}</span>
            <br />
            {SITE.titles}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`tel:${SITE.phone}`} className="btn-primary bg-white text-primary-700 shadow-white/20 hover:bg-primary-50 hover:text-primary-800">
              <Phone className="h-4 w-4" aria-hidden />
              Call for Appointment
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20 hover:text-white"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-primary-700 shadow-lg">
              BM
            </div>
            <h2 className="text-2xl font-bold">{SITE.name}</h2>
            <p className="mt-2 text-primary-100">{SITE.titles}</p>
            <ul className="mt-6 space-y-3 text-sm text-primary-50">
              <li className="flex gap-2">
                <span className="font-semibold text-white">Clinic:</span>
                {SITE.shortName}
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-white">Location:</span>
                Midnapore, West Bengal
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-white">Phone:</span>
                {SITE.phoneDisplay}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
