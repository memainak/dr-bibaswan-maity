import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{SITE.name}</p>
            <p className="mt-2 text-sm text-slate-400">{SITE.titles}</p>
            <p className="mt-4 text-sm leading-relaxed">
              {SITE.shortName} — compassionate urological care in Midnapore,
              West Bengal.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden />
                <span>{SITE.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-primary-400" aria-hidden />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 transition hover:text-primary-300"
                >
                  View on Google Maps →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {year} {SITE.name} — {SITE.shortName}. All rights reserved.
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="font-medium text-primary-400 hover:text-primary-300"
          >
            Book: {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
