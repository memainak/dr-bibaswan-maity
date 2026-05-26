import { Award, Building2, GraduationCap } from "lucide-react";
import { SITE } from "@/lib/site-data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            About the Doctor
          </p>
          <h2 className="section-heading mt-2">Dedicated to Excellence in Urology</h2>
          <p className="section-subheading">
            {SITE.name} brings advanced urological, andrological, and renal
            transplant expertise to Midnapore, with training and experience from
            leading institutions in Kolkata and Mumbai.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SITE.qualifications.map((item) => (
            <article key={item.degree} className="card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <GraduationCap className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.degree}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-md">
              <Building2 className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                <Award className="h-5 w-5 text-primary-600" aria-hidden />
                Prestigious Past Experience
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
              <p className="mt-4 text-sm text-slate-600">
                His background at premier tertiary-care hospitals reflects a
                commitment to evidence-based practice, surgical precision, and
                compassionate patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
