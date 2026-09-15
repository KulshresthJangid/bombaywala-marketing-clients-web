import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/images/logo.jpg";
import { siteConfig, practiceAreas } from "../../lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="panel-navy crest-pattern">
      <div className="max-w pg-section-tight">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.2fr] gap-12">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={siteConfig.brandName}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
              />
              <div>
                <p className="font-serif text-lg text-cream">
                  {siteConfig.brandName}
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-gold-light/80">
                  {siteConfig.subtitle}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-cream/60 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="overline overline-light mb-4">Practice Areas</p>
            <ul className="space-y-2.5">
              {practiceAreas.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/practice-areas/${p.slug}`}
                    className="text-sm text-cream/65 hover:text-gold-light transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="overline overline-light mb-4">Get In Touch</p>
            <ul className="space-y-3.5 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              {siteConfig.contact.phones.map((phone, i) => (
                <li key={phone} className="flex items-center gap-2.5">
                  <Phone size={16} className="shrink-0 text-gold" />
                  <a
                    href={`tel:${siteConfig.contact.phonesRaw[i]}`}
                    className="hover:text-gold-light transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-gold" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/45">
          <p>
            &copy; {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <p>Enrolled with the {siteConfig.founder.membership}</p>
        </div>
      </div>
    </footer>
  );
}
