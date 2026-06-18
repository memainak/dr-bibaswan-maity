import CallButton from "@/components/CallButton";
import FacebookIcon from "@/components/icons/FacebookIcon";
import WhatsAppButton from "@/components/WhatsAppButton";
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
            <div className="mt-5">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#166fe5]"
              >
                <FacebookIcon className="h-5 w-5" />
                Follow on Facebook
              </a>
            </div>
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
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                  aria-hidden
                />
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
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4ade80] transition hover:text-[#86efac]"
                >
                  WhatsApp: {SITE.phoneLocal}
                </a>
                <a>Call(Emergency Only)- 9475891326</a>
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
              <li>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 transition hover:text-primary-300"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Urosolution on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
          <div className="space-y-1">
            <p>
              © {year} {SITE.name} — {SITE.shortName}. All rights reserved.
            </p>
            <p className="text-xs text-slate-400">
              <Link href="/privacy" className="underline hover:text-white transition">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CallButton label="Call" className="!px-4 !py-2 text-xs" />
            <WhatsAppButton label="WhatsApp" className="!px-4 !py-2 text-xs" />
          </div>
        </div>

        <p className="mt-6 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          Developed by{" "}
          <a
            href={SITE.developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-400 transition hover:text-primary-300"
          >
            {SITE.developer.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
