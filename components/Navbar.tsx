"use client";

import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="group flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-sm font-bold text-white shadow-md shadow-primary-500/30 transition group-hover:bg-primary-600">
            BM
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-slate-900 sm:text-base">
              {SITE.shortName}
            </p>
            <p className="hidden text-xs text-primary-600 sm:block">
              Excellence in Urology
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-primary-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <CallButton
            label="Call"
            variant="secondary"
            className="!px-4 !py-2.5"
          />
          <WhatsAppButton label="WhatsApp" className="!px-4 !py-2.5" />
          <CallButton label="Book Appointment" />
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-slate-700 transition hover:bg-primary-50 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <CallButton
              label="Call for Appointment"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            />
            <WhatsAppButton
              label="WhatsApp Us"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
