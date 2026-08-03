import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig, contact } from '../../lib/config';
import { cn } from '../../lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-cream/95 backdrop-blur shadow-[0_2px_16px_rgba(23,31,23,0.08)]' : 'bg-transparent'
      )}
    >
      <div className="max-w-site flex items-center justify-between h-[76px]">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt={siteConfig.name} className="h-11 w-11 object-contain bg-white rounded p-0.5" />
          <div className="leading-tight">
            <div className={cn('font-display font-semibold text-sm sm:text-base tracking-wide transition-colors', scrolled ? 'text-forest-dark' : 'text-white')}>
              RAMKISHAN AGRI
            </div>
            <div className="text-[10px] sm:text-[11px] tracking-[0.15em] text-orange-light font-semibold uppercase">
              Innovate Pvt Ltd
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                cn(
                  'font-display uppercase text-sm tracking-wide transition-colors',
                  isActive ? 'text-orange' : scrolled ? 'text-ink hover:text-orange' : 'text-white hover:text-orange-light'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, '')}`}
            className={cn('flex items-center gap-2 text-sm font-semibold transition-colors', scrolled ? 'text-forest-dark' : 'text-white')}
          >
            <Phone size={16} className="text-orange-light" />
            {contact.phones[0]}
          </a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 !text-xs">
            Get a Quote
          </Link>
        </div>

        <button
          className={cn('md:hidden transition-colors', scrolled ? 'text-forest-dark' : 'text-white')}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-forest/10 shadow-lg">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'font-display uppercase text-base py-2.5 border-b border-forest/5 tracking-wide',
                    isActive ? 'text-orange' : 'text-ink'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${contact.phones[0].replace(/\s/g, '')}`}
              className="flex items-center gap-2 py-3 text-sm font-semibold text-forest-dark"
            >
              <Phone size={16} className="text-orange" />
              {contact.phones[0]}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
