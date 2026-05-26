import { Activity, HeartPulse, Stethoscope } from "lucide-react";
import { SERVICES } from "@/lib/site-data";

const iconMap = {
  Stethoscope,
  HeartPulse,
  Activity,
} as const;

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Specialties
          </p>
          <h2 className="section-heading mx-auto mt-2">
            Comprehensive Urological Services
          </h2>
          <p className="section-subheading mx-auto">
            Expert care across urology, andrology, and renal transplantation —
            tailored to your needs with a patient-centered approach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article key={service.id} className="card flex flex-col">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-md shadow-primary-600/25">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
