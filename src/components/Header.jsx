import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Homes', href: '#homes' },
    { label: 'Video Tours', href: '#video-tours' },
    { label: 'Our Story', href: '#about' },
    { label: 'Localities', href: '#localities' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header" id="top">
      <div className="container">
        <div className="site-header-inner">
          {/* Brand */}
          <a href="#top" className="header-brand" aria-label="Pooja Real Estate Home">
            <img 
              src="/assets/logo.jpg" 
              alt="Pooja Real Estate Logo" 
              className="header-logo-img"
              width="48"
              height="48"
            />
            <div className="header-brand-text">
              <span className="header-brand-name">
                Pooja <em>Real Estate</em>
              </span>
              <span className="header-brand-sub">
                Adajan · Surat, Gujarat
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={`header-nav ${mobileOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {mobileOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                <a 
                  href="tel:+919714229432" 
                  className="btn btn-outline btn-sm"
                  style={{ justifyContent: 'center' }}
                >
                  <Phone size={15} /> Call 097142 29432
                </a>
                <a 
                  href="https://wa.me/919714229432?text=Hi%20Pooja%20Real%20Estate,%20I%20am%20looking%20for%20property%20guidance%20in%20Surat." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ justifyContent: 'center' }}
                >
                  <MessageCircle size={15} /> Chat on WhatsApp
                </a>
              </div>
            )}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <a 
              href="tel:+919714229432" 
              className="header-phone-badge"
              title="Call Pooja Real Estate"
            >
              <Phone size={14} color="var(--color-terracotta)" />
              <span>097142 29432</span>
            </a>

            <a 
              href="https://wa.me/919714229432?text=Hello%20Pooja%20Real%20Estate,%20I%20would%20like%20to%20enquire%20about%20homes%20in%20Surat." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-terracotta btn-sm"
              style={{ display: 'none' }}
              id="headerEnquireBtn"
            >
              <MessageCircle size={15} />
              <span>Enquire</span>
            </a>

            <a 
              href="#contact" 
              className="btn btn-primary btn-sm"
            >
              <span>Enquire</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
