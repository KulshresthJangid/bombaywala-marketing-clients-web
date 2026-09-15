import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import SEO from "../components/shared/SEO";
import PageHero from "../components/shared/PageHero";
import FadeInUp from "../components/shared/FadeInUp";
import PracticeIcon from "../components/shared/PracticeIcon";
import { practiceAreas, siteConfig } from "../lib/config";

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = practiceAreas.find((p) => p.slug === slug);

  if (!area) return <Navigate to="/practice-areas" replace />;

  const related = practiceAreas
    .filter((p) => p.category === area.category && p.slug !== area.slug)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={area.name}
        description={area.summary}
        path={`/practice-areas/${area.slug}`}
      />

      <PageHero eyebrow={area.category} title={area.name}>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
            <PracticeIcon slug={area.slug} size={22} className="text-gold-light" />
          </div>
        </div>
      </PageHero>

      <section className="pg-section bg-white">
        <div className="max-w grid lg:grid-cols-[1.3fr_0.7fr] gap-14">
          <FadeInUp>
            <p className="text-lg text-muted leading-relaxed">
              {area.description}
            </p>

            <h3 className="mt-10 text-xl text-navy">What This Covers</h3>
            <ul className="mt-5 space-y-3.5">
              {area.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-gold-dark mt-0.5 shrink-0"
                  />
                  <span className="text-muted">{h}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="panel-navy p-8 gold-border-top sticky top-28">
              <p className="overline overline-light">Discuss This Matter</p>
              <p className="mt-4 text-cream/70 text-sm leading-relaxed">
                Speak directly with {siteConfig.founder.displayName} about
                your {area.name.toLowerCase()} matter.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.contact.phonesRaw[0]}`}
                  className="btn btn-gold justify-center"
                >
                  <Phone size={16} />
                  {siteConfig.contact.phones[0]}
                </a>
                <Link
                  to="/contact"
                  className="btn btn-outline justify-center"
                >
                  Send an Enquiry
                  <ArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-6 pt-6 border-t border-gold/15 text-xs text-cream/50">
                {siteConfig.contact.hours} &middot; Emergency consultation
                available
              </p>
            </div>
          </FadeInUp>
        </div>

        {related.length > 0 && (
          <div className="max-w mt-20">
            <FadeInUp>
              <p className="overline">Related Practice Areas</p>
              <div className="cards-grid mt-8">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/practice-areas/${r.slug}`}
                    className="group block panel p-6 hover:border-gold/50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <PracticeIcon slug={r.slug} size={18} className="text-navy" />
                    </div>
                    <h4 className="mt-4 text-lg text-navy">{r.name}</h4>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {r.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </FadeInUp>
          </div>
        )}
      </section>
    </>
  );
}
