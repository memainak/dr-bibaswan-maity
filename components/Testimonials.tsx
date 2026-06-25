import { Star, MessageSquare, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS, GOOGLE_REVIEWS_URL } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Reviews
          </p>
          <h2 className="section-heading mx-auto mt-2">
            Patient Testimonials
          </h2>
          <p className="section-subheading mx-auto">
            Read stories of recovery and care shared by patients who visited Urosolution.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className="card flex flex-col justify-between p-8 bg-white"
            >
              <div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-6 text-slate-700 italic leading-relaxed text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
              </div>
              
              <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {testimonial.info} &bull; {testimonial.time}
                  </p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                  <span className="text-xs font-bold text-slate-400">G</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            <MessageSquare className="h-4 w-4 text-primary-600" />
            <span>Read All Google Reviews</span>
            <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary-600 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
