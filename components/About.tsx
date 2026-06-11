import DoctorProfileImage from "@/components/DoctorProfileImage";
import { Award, Building2, GraduationCap, Users } from "lucide-react";
import { SITE } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          <DoctorProfileImage variant="about" className="mx-auto lg:mx-0" />
          <div className="max-w-3xl text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Meet {SITE.name}
            </p>
            <h2 className="section-heading mt-2">
              Dedicated to Excellence in Urology
            </h2>
            <p className="section-subheading mt-3 lg:mx-0">
              {SITE.name} provides advanced Urology, Andrology, Uro-oncology,
              laparoscopic and renal transplant care at {SITE.shortName} in
              Midnapore — combining expertise from leading hospitals with
              compassionate, patient-centred treatment.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              <article className="rounded-xl border border-primary-100 bg-primary-50/40 p-4 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary-600">5+ Years</span>
                <span className="block text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Experience in Urology</span>
              </article>
              <article className="rounded-xl border border-primary-100 bg-primary-50/40 p-4 text-center lg:text-left">
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary-600">1000+</span>
                <span className="block text-[10px] sm:text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Patients Operated</span>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Education</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {SITE.qualifications.map((item) => (
              <article key={item.degree} className="card p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="text-base font-bold text-slate-900">{item.degree}</h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-3 lg:divide-x lg:divide-primary-100">
            {/* Currently Attached To */}
            <div className="flex gap-4 sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white shadow-md shadow-primary-500/30">
                <Award className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Currently Attached To
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-slate-700 font-medium">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                    {SITE.currentAttachment}
                  </li>
                </ul>
              </div>
            </div>

            {/* Previously Attached To */}
            <div className="flex gap-4 sm:items-start lg:pl-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white shadow-md shadow-primary-500/30">
                <Building2 className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Previously Attached To
                </h3>
                <ul className="mt-4 space-y-3">
                  {SITE.experience.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Memberships */}
            <div className="flex gap-4 sm:items-start lg:pl-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white shadow-md shadow-primary-500/30">
                <Users className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Memberships
                </h3>
                <ul className="mt-4 space-y-3">
                  {SITE.memberships.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
