import CallButton from "@/components/CallButton";
import DoctorProfileImage from "@/components/DoctorProfileImage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/site-data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 pt-28 pb-20 text-white sm:pt-32 sm:pb-28"
    >
      <div className="absolute inset-0 opacity-30">
        <Image
          src={SITE.heroImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary-700/85 to-primary-600/80"
        aria-hidden
      />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-primary-300/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-200">
            {SITE.brandTitle}
          </p>
          <div className="mb-5 mt-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Trusted Care in Midnapore
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.1rem]">
            {SITE.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-50 sm:text-xl">
            <span className="font-semibold text-white">{SITE.name}</span>
            <br />
            {SITE.titles}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton
              label="Call for Appointment"
              className="bg-white text-primary-700 shadow-white/20 hover:bg-primary-50 hover:text-primary-800"
            />
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20 hover:text-white"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Get Directions
            </a>
            <WhatsAppButton
              label="WhatsApp Us"
              className="border border-[#25D366]/40 bg-[#25D366] hover:bg-[#20bd5a]"
            />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="flex flex-col items-center rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <DoctorProfileImage variant="hero" />
            <h2 className="mt-6 text-center text-2xl font-bold">{SITE.name}</h2>
            <p className="mt-2 text-center text-sm text-primary-100">
              {SITE.titles}
            </p>
            <ul className="mt-6 w-full space-y-3 text-sm text-primary-50">
              <li className="flex gap-2">
                <span className="font-semibold text-white">Clinic:</span>
                {SITE.shortName}
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-white">Location:</span>
                Rabindranagar(Opposite Dutta Nursing Home), Midnapore, West Bengal
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-white">Phone:</span>
                {SITE.phoneDisplay}
              </li>
            </ul>
            <div className="mt-6 flex w-full flex-col gap-2 sm:flex-row">
              <CallButton
                label="Call Now"
                className="w-full flex-1 justify-center"
              />
              <WhatsAppButton
                label="WhatsApp"
                className="w-full flex-1 justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
