import { Clock, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

export default function Location() {
  return (
    <section
      id="location"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Visit Us
          </p>
          <h2 className="section-heading mt-2">Clinic Location & Contact</h2>
          <p className="section-subheading">
            Find {SITE.shortName} at our chamber in Midnapore. Call ahead to
            schedule your consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <MapPin className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Chamber Address</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-800">
                      {SITE.address.clinic}
                    </span>
                    <br />
                    {SITE.address.line1}
                    <br />
                    {SITE.address.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <Clock className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Clinic Hours</h3>
                  <p className="mt-2 text-slate-600">{SITE.hours}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Hours are subject to change — please call to confirm.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`tel:${SITE.phone}`}
              className="btn-primary w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call Now: {SITE.phoneLocal}
            </a>

            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:inline-flex sm:w-auto"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Open in Google Maps
            </a>
          </div>

          <div
            id="contact"
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <iframe
              title="Urosolution clinic location on Google Maps"
              src={SITE.mapsEmbedUrl}
              className="h-72 w-full grayscale-[20%] sm:h-96 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600">
              Map preview — tap{" "}
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary-600 hover:underline"
              >
                Get Directions
              </a>{" "}
              for navigation
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm text-slate-600 shadow-sm">
          <a
            href={`tel:${SITE.phone}`}
            className="btn-primary"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
