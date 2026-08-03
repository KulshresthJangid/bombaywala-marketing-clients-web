import { CheckCircle2, Target, Compass } from 'lucide-react';
import SEO from '../components/shared/SEO';
import FadeInUp from '../components/shared/FadeInUp';
import TricolorRule from '../components/shared/TricolorRule';
import { siteConfig, founder, vision, mission, whyChooseUs, legacyPoints } from '../lib/config';

export default function About() {
  return (
    <>
      <SEO title="About Us" description="65 years of legacy in agricultural machinery manufacturing — the story of Ramkishan Agri Innovate Pvt Ltd and founder Sanket Jindal." />

      <section className="pt-[76px] bg-forest-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/tractor-spraying.jpg" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/85 to-forest-dark" />
        </div>
        <div className="relative max-w-site py-24 sm:py-32 text-center">
          <span className="overline text-orange-light">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white mt-4">
            {siteConfig.legacyYears} Years Of Legacy
          </h1>
          <TricolorRule center className="mt-6" />
        </div>
      </section>

      {/* Company profile */}
      <section className="section bg-cream">
        <div className="max-w-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInUp>
            <img src="/images/tractor-spraying.jpg" alt="Tractor at work" className="rounded-md w-full object-cover aspect-[4/3]" />
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <span className="overline">Company Profile</span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-ink mt-3 mb-5">
              A New-Age Manufacturer, Rooted In Six Decades Of Craft
            </h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              <strong className="text-forest-dark">Ramkishan Agri Innovate Pvt. Ltd.</strong> is a new-age agricultural
              machinery manufacturing company founded in {siteConfig.founded}, rooted in a <strong className="text-forest-dark">65-year-old family legacy</strong> of
              excellence in agri-equipment production.
            </p>
            <p className="text-ink/70 leading-relaxed mb-4">
              Established in memory of <strong className="text-forest-dark">Shri Ram Kishan Agarwal Ji</strong>, the legendary
              founder of Hans Engineering Works, the company is committed to building world-class implements for the
              Indian farmer.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Backed by nearly two decades of personal experience of its founder Mr. Sanket Jindal, and a family deeply
              involved in agricultural innovation, the company stands for trust, strength and advancement in Indian
              agriculture.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-white">
        <div className="max-w-site grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeInUp className="card p-8 sm:p-10 border-t-4 border-t-orange">
            <Compass className="text-orange mb-4" size={32} />
            <h3 className="font-display text-2xl text-forest-dark mb-3">Vision</h3>
            <p className="text-ink/70 leading-relaxed">{vision}</p>
          </FadeInUp>
          <FadeInUp delay={0.1} className="card p-8 sm:p-10 border-t-4 border-t-forest">
            <Target className="text-forest mb-4" size={32} />
            <h3 className="font-display text-2xl text-forest-dark mb-3">Mission</h3>
            <ul className="space-y-3">
              {mission.map((m) => (
                <li key={m} className="flex gap-2.5 text-ink/70 leading-relaxed">
                  <CheckCircle2 size={18} className="text-forest shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-forest">
        <div className="max-w-site grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">
          <FadeInUp className="lg:sticky lg:top-28">
            <div className="rounded-md overflow-hidden border-4 border-white/10">
              <img src={founder.photo} alt={founder.name} className="w-full object-cover" />
            </div>
            <h3 className="font-display text-2xl text-white mt-5">{founder.name}</h3>
            <p className="text-lime text-sm uppercase tracking-wide mt-1">{founder.title}</p>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <span className="overline text-lime">Meet Our Founder</span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mt-3 mb-6">
              Sanket Jindal
            </h2>
            <div className="space-y-4">
              {founder.bio.map((para, i) => (
                <p key={i} className="text-cream/75 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Legacy + Why choose us */}
      <section className="section bg-cream">
        <div className="max-w-site grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInUp>
            <span className="overline">Our Legacy</span>
            <h2 className="text-3xl font-display font-semibold text-ink mt-3 mb-6">
              {siteConfig.legacyYears} Years Of Strength, Soil &amp; Service
            </h2>
            <div className="space-y-4">
              {legacyPoints.map((p, i) => (
                <p key={i} className="text-ink/70 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <span className="overline">Why Choose Us</span>
            <h2 className="text-3xl font-display font-semibold text-ink mt-3 mb-6">
              What Sets Us Apart
            </h2>
            <ul className="space-y-3">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-center gap-3 card px-5 py-4">
                  <CheckCircle2 size={20} className="text-orange shrink-0" />
                  <span className="font-display uppercase text-sm tracking-wide text-forest-dark">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
