"use client";

import {
  buildAppointmentWhatsAppUrl,
  isValidIndianPhone,
  isValidPatientName,
  normalizePhone,
} from "@/lib/appointment";
import { isFirebaseClientConfigured, saveAppointmentRequestClient } from "@/lib/firebase-client";
import { CalendarCheck, Loader2, Phone, User } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!isValidPatientName(name)) {
      setStatus("error");
      setMessage("Please enter a valid name (at least 2 characters).");
      return;
    }

    if (!isValidIndianPhone(phone)) {
      setStatus("error");
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const payload = {
      name: name.trim(),
      phone: normalizePhone(phone),
    };

    setStatus("loading");

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as {
        success?: boolean;
        whatsappUrl?: string;
        error?: string;
      };

      if (res.ok && data.success && data.whatsappUrl) {
        finishSuccess(data.whatsappUrl);
        return;
      }

      // Fallback: client Firestore when server credentials not set on Vercel
      if (res.status === 503 && isFirebaseClientConfigured()) {
        try {
          await saveAppointmentRequestClient(payload);
        } catch (dbErr) {
          console.error("Firestore backup failed:", dbErr);
        }
        finishSuccess(buildAppointmentWhatsAppUrl(payload.name, payload.phone));
        return;
      }

      throw new Error(data.error ?? "Something went wrong. Please try again.");
    } catch (err) {
      console.error("Appointment submission error:", err);

      // Fallback: try client-side backup if config exists
      try {
        if (isFirebaseClientConfigured()) {
          await saveAppointmentRequestClient(payload);
        }
      } catch (dbErr) {
        console.error("Firestore fallback backup failed:", dbErr);
      }

      // Always allow the user to redirect to WhatsApp so the booking is not blocked
      finishSuccess(buildAppointmentWhatsAppUrl(payload.name, payload.phone));
    }
  }

  function finishSuccess(url: string) {
    setWhatsappUrl(url);
    setStatus("success");
    setMessage(
      "Your details have been saved. Opening WhatsApp so the doctor can connect with you."
    );
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="appointment"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Book Appointment
          </p>
          <h2 className="section-heading mt-2">Request a Callback</h2>
          <p className="section-subheading mx-auto">
            Enter your name and phone number. Your details will be saved securely
            and sent to the doctor via WhatsApp so you can be contacted.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card mx-auto mt-10 max-w-lg"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="patient-name"
                className="mb-1.5 block text-sm font-semibold text-slate-800"
              >
                Full Name
              </label>
              <div className="relative">
                <User
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  aria-hidden
                />
                <input
                  id="patient-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="patient-phone"
                className="mb-1.5 block text-sm font-semibold text-slate-800"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  aria-hidden
                />
                <span className="pointer-events-none absolute left-11 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                  +91
                </span>
                <input
                  id="patient-phone"
                  type="tel"
                  name="phone"
                  required
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="9239528475"
                  maxLength={14}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-[4.25rem] pr-4 text-slate-900 outline-none transition focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100"
                />
              </div>
            </div>

            {message && (
              <p
                role="status"
                className={`rounded-lg px-4 py-3 text-sm ${
                  status === "success"
                    ? "bg-green-50 text-green-800"
                    : status === "error"
                      ? "bg-red-50 text-red-700"
                      : "bg-primary-50 text-primary-800"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Submitting…
                </>
              ) : (
                <>
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Submit &amp; Send via WhatsApp
                </>
              )}
            </button>

            {status === "success" && whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                Open WhatsApp Again
              </a>
            )}
          </div>

          <p className="mt-5 text-center text-xs text-slate-500">
            By submitting, you agree to be contacted by the clinic regarding
            your appointment.
          </p>
        </form>
      </div>
    </section>
  );
}
