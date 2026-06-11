import {
  Baby,
  Gem,
  HeartPulse,
  Microscope,
  Scan,
  Shield,
  UserRound,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { SERVICE_CATEGORIES } from "@/lib/site-data";

const iconMap = {
  Gem,
  Shield,
  Wrench,
  Microscope,
  HeartPulse,
  UserRound,
  Baby,
  Scan,
} as const;

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Specialities
          </p>
          <h2 className="section-heading mx-auto mt-2">
            Comprehensive Urology &amp; Laparoscopy Services
          </h2>
          <p className="section-subheading mx-auto">
            We offer a full range of urology &amp; laparoscopy services to address
            all your urology, reproductive &amp; surgical health needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICE_CATEGORIES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.id}
                className="card overflow-hidden p-0"
              >
                <div className="relative h-36 w-full bg-primary-50">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/80 via-primary-700/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-sm font-bold text-white shadow-md">
                      {service.letter}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {service.title}
                      </h3>
                      {"subtitle" in service && service.subtitle && (
                        <p className="text-xs text-primary-100">
                          {service.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-primary-600 shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
