import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import SEO from '../components/shared/SEO';
import FadeInUp from '../components/shared/FadeInUp';
import TricolorRule from '../components/shared/TricolorRule';
import { siteConfig, whyChooseUs, stats, products, categories, contact } from '../lib/config';

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      <SEO title="Home" />

      {/* Hero */}
      <section className="relative pt-[76px] overflow-hidden bg-forest-dark">
        <div className="absolute inset-0">
          <img src="/images/hero-sunset.jpg" alt="" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/85 to-forest-dark/40" />
        </div>

        <div className="relative max-w-site py-20 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="overline text-orange-light">{siteConfig.legacyYears}+ Years of Legacy</span>
            <h1 className="text-4xl sm:text-6xl font-display font-semibold text-white mt-4 leading-[1.05]">
              {siteConfig.tagline}
            </h1>
            <p className="text-cream/80 text-base sm:text-lg mt-6 leading-relaxed max-w-xl">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <Link to="/products" className="btn-primary">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Get In Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-2xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-orange pl-4">
                <div className="text-3xl sm:text-4xl font-display font-semibold text-white">{s.value}</div>
                <div className="text-xs sm:text-sm text-cream/60 uppercase tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-cream">
        <div className="max-w-site">
          <FadeInUp className="text-center max-w-2xl mx-auto mb-14">
            <span className="overline">Why Ramkishan Agri</span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-ink mt-3">
              Built For Indian Farms, Backed By 65 Years of Trust
            </h2>
            <TricolorRule center className="mt-5" />
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item, i) => (
              <FadeInUp key={item} delay={i * 0.06}>
                <div className="card p-6 h-full flex flex-col gap-3">
                  <CheckCircle2 className="text-orange" size={26} />
                  <p className="font-display text-sm uppercase tracking-wide text-forest-dark leading-snug">
                    {item}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section bg-white">
        <div className="max-w-site">
          <FadeInUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <span className="overline">Our Range</span>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-ink mt-3">
                Tractor Implements Built To Last
              </h2>
            </div>
            <Link to="/products" className="btn-outline shrink-0">
              View All 19 Products <ArrowRight size={16} />
            </Link>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <FadeInUp key={p.slug} delay={i * 0.05}>
                <Link
                  to={`/products/${p.slug}`}
                  className="card group block overflow-hidden h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-orange font-display font-semibold">
                      {p.category}
                    </span>
                    <h3 className="font-display text-lg text-forest-dark mt-1.5 group-hover:text-orange transition-colors">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Categories band */}
      <section className="section bg-forest">
        <div className="max-w-site">
          <FadeInUp className="text-center max-w-xl mx-auto mb-12">
            <span className="overline text-lime">Shop By Category</span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mt-3">
              Every Implement For Every Stage
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((c, i) => (
              <FadeInUp key={c} delay={i * 0.05}>
                <Link
                  to={`/products?category=${encodeURIComponent(c)}`}
                  className="block text-center bg-white/5 hover:bg-orange border border-white/15 hover:border-orange rounded-md px-4 py-8 transition-colors duration-200"
                >
                  <span className="font-display uppercase text-sm tracking-wide text-white">{c}</span>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream">
        <div className="max-w-site">
          <FadeInUp className="card bg-white p-10 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 border-t-4 border-t-orange">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink">
                Talk To Our Team About Your Farm's Needs
              </h2>
              <p className="text-ink/60 mt-2">Dealer enquiries and bulk orders welcome across India.</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} className="btn-primary">
                <Phone size={16} /> {contact.phones[0]}
              </a>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
