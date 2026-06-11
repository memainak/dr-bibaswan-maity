import Link from "next/link";
import { SITE } from "@/lib/site-data";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm max-w-none">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Last Updated: June 11, 2026
          </p>

          <section className="mt-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              At <strong>{SITE.name} ({SITE.shortName})</strong>, accessible from{" "}
              <Link href="/" className="text-primary-600 underline font-medium">
                drbibaswanmaity.in
              </Link>
              , one of our main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected and recorded
              by our website and how we use it.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 border-b pb-2">
              Information We Collect
            </h2>
            <p>
              When you visit our website, fill out an appointment form, or contact us
              directly via phone or WhatsApp, we may collect the following information:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
              <li>Personal identifiers (such as Name, Phone Number, Email Address)</li>
              <li>Appointment preferences and general query details</li>
              <li>Technical usage data (such as IP address, browser type, and page interactions via analytics)</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 border-b pb-2">
              How We Use Your Information (Marketing & Communications)
            </h2>
            <p>
              We use the collected information in the following ways:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
              <li>To schedule, manage, and confirm your clinical appointments.</li>
              <li>To respond to your inquiries and offer patient support.</li>
              <li>
                <strong>Marketing Purposes:</strong> With your consent, we may use your
                contact details to send you educational newsletters, healthcare updates,
                promotional material about our services, and reminders.
              </li>
              <li>To understand and analyze how you use our website to optimize layout and performance.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 border-b pb-2">
              Data Protection & Security
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety of your
              personal information. We do not sell, trade, or otherwise transfer your
              personally identifiable information to outside marketing firms.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 border-b pb-2">
              Cookies and Web Beacons
            </h2>
            <p>
              Like any other website, {SITE.shortName} uses &quot;cookies&quot;. These
              cookies are used to store information including visitors&apos; preferences, and
              the pages on the website that the visitor accessed or visited. The information
              is used to optimize the users&apos; experience by customizing our web page content.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 border-b pb-2">
              Consent
            </h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to
              its terms.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
