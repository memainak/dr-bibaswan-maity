import Image from "next/image";
import { SITE } from "@/lib/site-data";

export default function ClinicGallery() {
  return (
    <section className="bg-primary-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-primary-200/80">
            <Image
              src={SITE.clinicImage}
              alt="Urosolution clinic care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Clinic Information
            </p>
            <h2 className="section-heading mt-2">
              {SITE.shortName} — Excellence in Urology
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Patient-centred urological, andrological, laparoscopic and renal
              transplant care at our chamber in Midnapore. Modern diagnostics and
              minimally invasive treatment options under one roof.
            </p>
            <p className="mt-3 font-medium text-primary-700">{SITE.address.full}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {SITE.galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md ring-1 ring-primary-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
