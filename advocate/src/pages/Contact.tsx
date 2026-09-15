import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SEO from "../components/shared/SEO";
import PageHero from "../components/shared/PageHero";
import FadeInUp from "../components/shared/FadeInUp";
import { practiceAreas, siteConfig } from "../lib/config";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const matter = form.get("matter");
    const message = form.get("message");

    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nMatter Type: ${matter}\n\n${message}`
    );
    const subject = encodeURIComponent(
      `New Enquiry from ${name} — ${matter}`
    );

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact SAS Law Associates in Fort, Mumbai — call, WhatsApp or send an enquiry to schedule a consultation with Advocate Sourabh A. Saxena."
        path="/contact"
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Speak Directly With Your Advocate"
        description="Every enquiry reaches the advocate directly. Reach out by phone, WhatsApp, or the form below — consultations are available by phone, video, or in person."
      />

      <section className="pg-section bg-white">
        <div className="max-w grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <FadeInUp>
            <div className="space-y-8">
              <div>
                <p className="overline">Office</p>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin size={18} className="text-gold-dark mt-1 shrink-0" />
                  <p className="text-muted leading-relaxed">
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.line2}
                    <br />
                    {siteConfig.contact.address.line3}
                  </p>
                </div>
              </div>

              <div>
                <p className="overline">Phone & WhatsApp</p>
                <div className="mt-4 space-y-2.5">
                  {siteConfig.contact.phones.map((phone, i) => (
                    <div key={phone} className="flex items-center gap-3">
                      <Phone size={18} className="text-gold-dark shrink-0" />
                      <a
                        href={`tel:${siteConfig.contact.phonesRaw[i]}`}
                        className="text-navy font-medium hover:text-gold-dark transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="overline">Email</p>
                <div className="mt-4 flex items-center gap-3">
                  <Mail size={18} className="text-gold-dark shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-navy font-medium hover:text-gold-dark transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div>
                <p className="overline">Working Hours</p>
                <div className="mt-4 flex items-center gap-3">
                  <Clock size={18} className="text-gold-dark shrink-0" />
                  <p className="text-muted">{siteConfig.contact.hours}</p>
                </div>
              </div>

              <div className="rounded-sm overflow-hidden border border-border h-64">
                <iframe
                  title="Office location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    siteConfig.contact.address.mapsQuery
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="panel gold-border-top p-8 sm:p-10">
              <h2 className="text-2xl text-navy">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-muted">
                Paid consultations only &middot; Emergency consultation
                available on request.
              </p>

              {sent && (
                <div className="mt-6 p-4 bg-navy/5 border border-navy/10 text-sm text-navy">
                  Your email client should now be open with your enquiry
                  ready to send. If it didn't open, please email us directly
                  at {siteConfig.contact.email}.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="form-field mt-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Phone Number
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="form-field mt-2"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-navy">
                    Matter Type
                  </label>
                  <select name="matter" className="form-field mt-2" required>
                    <option value="">Select a practice area</option>
                    {practiceAreas.map((p) => (
                      <option key={p.slug} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-navy">
                    Briefly Describe Your Matter
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="form-field mt-2"
                    placeholder="Share the key details — kept confidential."
                  />
                </div>

                <button type="submit" className="btn btn-gold w-full">
                  Send Enquiry
                </button>
              </form>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
