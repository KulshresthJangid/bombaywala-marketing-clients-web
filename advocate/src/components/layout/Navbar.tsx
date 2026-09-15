import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/images/logo.jpg";
import { siteConfig } from "../../lib/config";
import { cn } from "../../lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-dark/95 backdrop-blur border-b border-gold/20 py-2"
          : "bg-navy-dark/80 backdrop-blur-sm py-3"
      )}
    >
      <div className="max-w flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt={siteConfig.brandName}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40"
          />
          <div className="leading-tight">
            <p className="font-serif text-cream text-base sm:text-lg tracking-wide">
              {siteConfig.brandName}
            </p>
            <p className="hidden sm:block text-[0.65rem] uppercase tracking-[0.18em] text-gold-light/80">
              {siteConfig.subtitle}
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  isActive
                    ? "text-gold-light"
                    : "text-cream/80 hover:text-gold-light"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phonesRaw[0]}`}
            className="btn btn-gold text-sm"
          >
            <Phone size={15} />
            Call Now
          </a>
        </div>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mobile-menu bg-navy-dark border-t border-gold/15 mt-3">
          <div className="max-w py-5 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium",
                    isActive ? "text-gold-light" : "text-cream/85"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={`tel:${siteConfig.contact.phonesRaw[0]}`}
              onClick={() => setOpen(false)}
              className="btn btn-gold text-sm w-fit mt-1"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
