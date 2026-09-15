import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";
import SEO from "../components/shared/SEO";
import PageHero from "../components/shared/PageHero";
import FadeInUp from "../components/shared/FadeInUp";
import logo from "../assets/images/logo.jpg";
import { siteConfig, trustSignals, usps } from "../lib/config";

export default function About() {
  const f = siteConfig.founder;

  return (
    <>
      <SEO
        title="About the Firm"
        description="Advocate Sourabh A. Saxena — 11 years of litigation experience and 9 years of corporate law experience, enrolled with the Bar Council of Maharashtra."
        path="/about"
      />

      <PageHero
        eyebrow="About the Firm"
        title={`Advocate ${f.name}`}
        description="Twenty years across litigation and corporate practice, condensed into direct, no-nonsense representation for every client who walks in."
      />

      <section className="pg-section bg-white">
        <div className="max-w grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <FadeInUp>
            <div className="panel gold-border-top p-8 sm:p-10 sticky top-28">
              <img
                src={logo}
                alt={siteConfig.brandName}
                className="w-24 h-24 rounded-full object-cover ring-1 ring-gold/30 mx-auto"
              />
              <p className="mt-6 text-center font-serif text-xl text-navy">
                {f.displayName}
              </p>
              <p className="text-center text-sm text-muted mt-1">
                Founder, {siteConfig.brandName}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="border border-border p-4">
                  <p className="font-serif text-2xl text-navy">
                    {f.litigationYears}
                  </p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wide">
                    Yrs Litigation
                  </p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-serif text-2xl text-navy">
                    {f.corporateYears}
                  </p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wide">
                    Yrs Corporate
                  </p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-serif text-2xl text-navy">
                    {f.casesHandled}
                  </p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wide">
                    Matters
                  </p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-serif text-2xl text-navy">
                    {f.successRatio}
                  </p>
                  <p className="text-xs text-muted mt-1 uppercase tracking-wide">
                    Success Ratio
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <ul className="space-y-3">
                  {trustSignals.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <BadgeCheck
                        size={16}
                        className="text-gold-dark mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-muted leading-snug">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInUp>

          <div className="space-y-10">
            <FadeInUp>
              <span className="overline">The Advocate</span>
              <h2 className="mt-4 text-3xl text-navy">
                Legal Counsel Built on Preparation, Not Promises
              </h2>
              <div className="mt-5 space-y-4 text-muted leading-relaxed">
                <p>
                  {f.displayName} brings together 11 years of litigation
                  experience and 9 years of corporate law experience — a
                  combination that lets {siteConfig.brandName} advise clients
                  on both the courtroom risk and the commercial reality behind
                  every dispute.
                </p>
                <p>
                  Enrolled with the {f.membership}, the practice has handled
                  approximately {f.casesHandled} matters across civil,
                  criminal, arbitration, banking and corporate law, sustaining
                  a success ratio above {f.successRatio}.
                </p>
                <p>
                  Clients work directly with the advocate — not through
                  layers of associates — from the first consultation through
                  final resolution. That direct line is deliberate: it is
                  faster, more accountable, and it means nothing about your
                  matter gets lost in translation.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <span className="overline">The Approach</span>
              <h3 className="mt-4 text-2xl text-navy">
                Why Clients Choose {siteConfig.brandName}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                A clear demonstration of a unique approach to reducing your
                risk, cost, and stress — through specialization, transparent
                pricing, and practical solutions over billable complexity.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {usps.slice(0, 4).map((u) => (
                  <div key={u.title} className="border-l-2 border-gold pl-5">
                    <p className="font-medium text-navy">{u.title}</p>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">
                      {u.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="panel-navy p-8 sm:p-10">
                <p className="font-serif text-xl sm:text-2xl text-cream leading-snug">
                  "Result orientation, turnaround time, relevant advice, and a
                  positive approach — that is what a client should expect
                  from their advocate, every time."
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn btn-gold">
                    Schedule a Consultation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
