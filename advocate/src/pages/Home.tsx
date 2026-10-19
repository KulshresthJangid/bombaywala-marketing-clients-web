import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  BadgeCheck,
  Clock,
  Video,
  Building,
} from "lucide-react";
import SEO from "../components/shared/SEO";
import FadeInUp from "../components/shared/FadeInUp";
import PracticeIcon from "../components/shared/PracticeIcon";
import logo from "../assets/images/logo.jpg";
import {
  siteConfig,
  stats,
  usps,
  featuredPracticeAreas,
  process,
  trustSignals,
  consultationOptions,
} from "../lib/config";

const consultationIcons = [Phone, Video, Building];

export default function Home() {
  return (
    <>
      <SEO
        title="Advocates & Legal Consultants in Fort, Mumbai"
        path="/"
      />

      {/* Hero */}
      <section className="relative panel-navy crest-pattern overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="overline overline-light"
            >
              {siteConfig.subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-cream"
            >
              {siteConfig.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-cream/70 leading-relaxed"
            >
              {siteConfig.brandName} is a Fort, Mumbai based litigation and
              corporate law practice led by{" "}
              <span className="text-gold-light">
                {siteConfig.founder.displayName}
              </span>
              , handling civil, criminal, arbitration, banking and corporate
              matters with a {siteConfig.founder.successRatio} success ratio
              across {siteConfig.founder.casesHandled} matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href={`tel:${siteConfig.contact.phonesRaw[0]}`}
                className="btn btn-gold"
              >
                <Phone size={16} />
                Call Now
              </a>
              <Link to="/contact" className="btn btn-outline">
                Book a Consultation
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
            >
              {trustSignals.slice(0, 3).map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-gold shrink-0" />
                  <span className="text-xs sm:text-sm text-cream/65">
                    {t}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl scale-110" />
              <img
                src={logo}
                alt={siteConfig.brandName}
                className="relative w-80 h-80 object-contain rounded-full ring-1 ring-gold/30 p-6 bg-cream/[0.03]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="max-w">
          <div className="stats-grid">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white py-10 px-6 text-center flex flex-col items-center gap-2"
              >
                <p className="font-serif text-3xl sm:text-4xl text-navy">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-muted uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice areas preview */}
      <section className="pg-section bg-cream">
        <div className="max-w">
          <FadeInUp className="max-w-2xl">
            <span className="overline">What We Handle</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-navy">
              Practice Areas
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Focused representation across the matters that matter most to
              individuals and businesses — from High Court litigation to
              corporate advisory.
            </p>
          </FadeInUp>

          <div className="cards-grid mt-12">
            {featuredPracticeAreas.map((area, i) => (
              <FadeInUp key={area.slug} delay={i * 0.06}>
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="group block panel p-7 h-full hover:border-gold/50 transition-colors"
                >
                  <div className="h-12 w-12 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <PracticeIcon slug={area.slug} size={22} className="text-navy" />
                  </div>
                  <h3 className="mt-5 text-xl text-navy">{area.name}</h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">
                    {area.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark group-hover:gap-2.5 transition-all">
                    Learn more
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp className="mt-12 flex justify-center">
            <Link to="/practice-areas" className="btn btn-outline-dark">
              View All Practice Areas
              <ArrowRight size={16} />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Why choose us */}
      <section className="pg-section panel-navy crest-pattern">
        <div className="max-w">
          <FadeInUp className="max-w-2xl">
            <span className="overline overline-light">Why Choose Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-cream">
              Clear demonstration of a unique approach —
              <br className="hidden sm:block" /> lower risk, lower cost, less
              stress.
            </h2>
          </FadeInUp>

          <div className="cards-grid mt-12">
            {usps.map((u, i) => (
              <FadeInUp key={u.title} delay={i * 0.06}>
                <div className="border border-gold/15 p-7 h-full hover:border-gold/40 transition-colors">
                  <div className="gold-rule" />
                  <h3 className="mt-5 text-lg text-cream">{u.title}</h3>
                  <p className="mt-3 text-sm text-cream/60 leading-relaxed">
                    {u.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pg-section bg-white">
        <div className="max-w">
          <FadeInUp className="max-w-2xl">
            <span className="overline">How It Works</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-navy">
              From First Call to Resolution
            </h2>
          </FadeInUp>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <FadeInUp key={p.step} delay={i * 0.08}>
                <p className="font-serif text-4xl text-gold/40">{p.step}</p>
                <h3 className="mt-3 text-lg text-navy">{p.title}</h3>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  {p.description}
                </p>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.2} className="mt-16">
            <div className="panel p-8 sm:p-10 gold-border-top">
              <p className="overline">Consultation Options</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-8">
                {consultationOptions.map((c, i) => {
                  const Icon = consultationIcons[i];
                  return (
                    <div key={c.title} className="flex items-start gap-3.5">
                      <Icon size={20} className="text-gold-dark mt-0.5" />
                      <div>
                        <p className="text-navy font-medium">{c.title}</p>
                        <p className="mt-1 text-sm text-muted leading-relaxed">
                          {c.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-7 pt-6 border-t border-border flex items-center gap-2.5 text-sm text-muted">
                <Clock size={16} className="text-gold-dark" />
                {siteConfig.contact.hours} &middot; Emergency consultation
                available
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
      <section className="pg-section-tight bg-cream">
        <div className="max-w">
          <FadeInUp>
            <div className="panel-navy p-10 sm:p-14 text-center rounded-sm relative overflow-hidden">
              <div className="crest-pattern absolute inset-0" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl text-cream">
                  Discuss Your Matter, Directly.
                </h2>
                <p className="mt-4 max-w-lg mx-auto text-cream/65">
                  No junior associates, no delays — speak with{" "}
                  {siteConfig.founder.displayName} to understand your options.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phonesRaw[0]}`}
                    className="btn btn-gold"
                  >
                    <Phone size={16} />
                    {siteConfig.contact.phones[0]}
                  </a>
                  <Link to="/contact" className="btn btn-outline">
                    Send an Enquiry
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
