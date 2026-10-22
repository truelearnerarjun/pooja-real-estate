import React from 'react';
import { MapPin, Phone, MessageCircle, Star, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Identity */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img
                src="/assets/logo.jpg"
                alt="Pooja Real Estate Logo"
                className="footer-logo-img"
                width="44"
                height="44"
              />
              <div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: '#FFFFFF', display: 'block', lineHeight: 1.1 }}>
                  Pooja Real Estate
                </span>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)' }}>
                  Surat, Gujarat
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6', fontStyle: 'italic' }}>
              “Your dream home is our responsibility.”
            </p>

            <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.6' }}>
              Grounded residential and commercial property advisory. Guiding Surat families to their <em>Sapno Ka Ghar</em> across Adajan, Pal, and Honey Park with honest counsel and clear paper titles.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.8rem', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-xs)', fontSize: '0.8rem', color: '#FFFFFF' }}>
              <Star size={13} fill="#E29F1D" color="#E29F1D" />
              <span><strong>4.8</strong> Rating on Google · 175+ Reviews</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#top">Home</a></li>
              <li><a href="#homes">Homes For Sale & Rent</a></li>
              <li><a href="#video-tours">Reel Video Walkthroughs</a></li>
              <li><a href="#about">Meet Pooja & Jay</a></li>
              <li><a href="#localities">Surat Localities</a></li>
              <li><a href="#reviews">Verified Client Reviews</a></li>
              <li><a href="#contact">Consultation & Enquiry</a></li>
            </ul>
          </div>

          {/* Column 3: Core Neighborhoods */}
          <div>
            <h4 className="footer-title">Neighborhoods</h4>
            <ul className="footer-links-list">
              <li><a href="#localities">Honey Park Road, Adajan</a></li>
              <li><a href="#localities">Mahalaxmi Mandir Area</a></li>
              <li><a href="#localities">Pal & Gaurav Path</a></li>
              <li><a href="#localities">Vesu VIP Road Business Hub</a></li>
              <li><a href="#localities">Jahangirpura Riverside</a></li>
              <li><a href="#localities">Sai Square Complex Belt</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="footer-title">Visit Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.86rem', color: 'rgba(255,255,255,0.78)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>Shop no -H/20, Jashlaxmi Appartment, Honey Park Rd, Opposite Sai Square Complex, Adajan, Surat 395009</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--color-terracotta)" style={{ flexShrink: 0 }} />
                <a href="tel:+919714229432" style={{ color: '#FFFFFF' }}>097142 29432 (+91 97142 29432)</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-terracotta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <a 
                  href="https://www.instagram.com/poojarealestate_surat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#FFFFFF' }}
                >
                  @poojarealestate_surat
                </a>
              </div>

              <div style={{ marginTop: '0.5rem', padding: '0.65rem', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-xs)', fontSize: '0.78rem' }}>
                <strong>Hours:</strong> Open Mon – Sun: 9:30 AM – 9:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Pooja Real Estate · All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span>Verified Property Consultant · Surat, Gujarat</span>
            <span>RERA Compliant Assistance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
