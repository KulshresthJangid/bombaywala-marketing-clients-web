import { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SEO from '../components/shared/SEO';
import FadeInUp from '../components/shared/FadeInUp';
import TricolorRule from '../components/shared/TricolorRule';
import { contact, categories } from '../lib/config';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Ramkishan Agri Innovate Pvt Ltd for dealer enquiries, bulk orders, and product support." />

      <section className="pt-[76px] bg-forest-dark">
        <div className="max-w-site py-16 sm:py-20 text-center">
          <span className="overline text-orange-light">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white mt-4">Contact Us</h1>
          <p className="text-cream/70 mt-4 max-w-xl mx-auto">
            Reach out for dealer enquiries, bulk orders, or support with any of our implements.
          </p>
          <TricolorRule center className="mt-6" />
        </div>
      </section>

      <section className="section bg-cream">
        <div className="max-w-site grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10">
          {/* Contact info */}
          <FadeInUp className="space-y-5">
            <div className="card p-6 flex gap-4 items-start">
              <div className="bg-orange/10 text-orange rounded-full p-3 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-display uppercase text-sm tracking-wide text-forest-dark mb-1.5">Phone</h3>
                {contact.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-ink/70 hover:text-orange transition-colors">
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-6 flex gap-4 items-start">
              <div className="bg-orange/10 text-orange rounded-full p-3 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-display uppercase text-sm tracking-wide text-forest-dark mb-1.5">Email</h3>
                <a href={`mailto:${contact.email}`} className="text-ink/70 hover:text-orange transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="card p-6 flex gap-4 items-start">
              <div className="bg-orange/10 text-orange rounded-full p-3 shrink-0">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="font-display uppercase text-sm tracking-wide text-forest-dark mb-1.5">Website</h3>
                <span className="text-ink/70">{contact.website}</span>
              </div>
            </div>

            <div className="card p-6 flex gap-4 items-start">
              <div className="bg-orange/10 text-orange rounded-full p-3 shrink-0">
                <MapPin size={20} />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-display uppercase text-sm tracking-wide text-forest-dark mb-1">
                    {contact.registeredOffice.label}
                  </h3>
                  <p className="text-ink/70 text-sm">{contact.registeredOffice.address}</p>
                </div>
                <div>
                  <h3 className="font-display uppercase text-sm tracking-wide text-forest-dark mb-1">
                    {contact.factory.label}
                  </h3>
                  <p className="text-ink/70 text-sm">{contact.factory.address}</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Form */}
          <FadeInUp delay={0.1}>
            <div className="card p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-14">
                  <CheckCircle2 size={48} className="text-forest mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-forest-dark mb-2">Thank You!</h3>
                  <p className="text-ink/60">
                    Your enquiry has been received. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl text-forest-dark mb-1">Send Us An Enquiry</h2>
                  <p className="text-ink/50 text-sm mb-6">Fill in your details and we'll respond within 24 hours.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-forest-dark mb-1.5">Full Name</label>
                      <input required type="text" className="w-full border border-forest/20 rounded-sm px-4 py-2.5 outline-none focus:border-orange transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-forest-dark mb-1.5">Phone Number</label>
                      <input required type="tel" className="w-full border border-forest/20 rounded-sm px-4 py-2.5 outline-none focus:border-orange transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-dark mb-1.5">Email Address</label>
                    <input required type="email" className="w-full border border-forest/20 rounded-sm px-4 py-2.5 outline-none focus:border-orange transition-colors" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-dark mb-1.5">Product Interested In</label>
                    <select className="w-full border border-forest/20 rounded-sm px-4 py-2.5 outline-none focus:border-orange transition-colors bg-white">
                      <option value="">Select a category</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-dark mb-1.5">Message</label>
                    <textarea rows={4} className="w-full border border-forest/20 rounded-sm px-4 py-2.5 outline-none focus:border-orange transition-colors resize-none" />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Enquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
