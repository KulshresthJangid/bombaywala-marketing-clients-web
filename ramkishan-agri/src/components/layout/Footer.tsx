import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { siteConfig, contact, categories } from '../../lib/config';
import TricolorRule from '../shared/TricolorRule';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/90">
      <div className="max-w-site py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/images/logo.png" alt={siteConfig.name} className="h-11 w-11 object-contain bg-white rounded p-0.5" />
            <div>
              <div className="font-display font-semibold text-white text-sm tracking-wide">RAMKISHAN AGRI</div>
              <div className="text-[10px] tracking-[0.15em] text-orange-light font-semibold uppercase">Innovate Pvt Ltd</div>
            </div>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed mb-4 max-w-xs">{siteConfig.description}</p>
          <TricolorRule />
        </div>

        <div>
          <h4 className="font-display text-white text-sm tracking-wide mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li><Link to="/" className="hover:text-orange-light transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-light transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-orange-light transition-colors">Products</Link></li>
            <li><Link to="/contact" className="hover:text-orange-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-sm tracking-wide mb-4">Categories</h4>
          <ul className="space-y-2.5 text-sm text-cream/70">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  to={`/products?category=${encodeURIComponent(c)}`}
                  className="hover:text-orange-light transition-colors"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-sm tracking-wide mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="text-orange-light mt-0.5 shrink-0" />
              <span>{contact.phones.join(', ')}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="text-orange-light mt-0.5 shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-orange-light transition-colors">{contact.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe size={16} className="text-orange-light mt-0.5 shrink-0" />
              <span>{contact.website}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-orange-light mt-0.5 shrink-0" />
              <span>{contact.factory.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-site py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="uppercase tracking-[0.15em] text-orange-light/80 font-display">{siteConfig.motto}</span>
        </div>
      </div>
    </footer>
  );
}
