import React from 'react';
import { ArrowDown, MessageCircle, Star, Compass, ShieldCheck } from 'lucide-react';

export default function Hero({ onSelectLocality, activeLocality }) {
  const localities = [
    { id: 'all', label: 'All Surat' },
    { id: 'adajan', label: 'Adajan' },
    { id: 'honey-park', label: 'Honey Park Road' },
    { id: 'pal', label: 'Pal & Gaurav Path' },
    { id: 'vesu', label: 'Vesu' },
  ];

  return (
    <section className="hero-section" aria-label="Introduction and hero showcase">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Guidance */}
          <div className="hero-content">
            <div className="hero-editorial-meta">
              <span className="label-editorial">A Place to Begin · Surat, Gujarat</span>
              
              <div className="hero-rating-pill" title="175 Google Reviews, 4.8 out of 5 stars">
                <span className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#E29F1D" color="#E29F1D" />
                  ))}
                </span>
                <span><strong>4.8</strong> (175+ Google Reviews)</span>
              </div>
            </div>

            <h1 className="headline-hero">
              Let's find a place that <em>feels like yours.</em>
            </h1>

            <p className="body-lead">
              Thoughtful property guidance for your next move in Surat. We represent hand-picked residential apartments, sunlit family flats, and prime workspaces across Adajan, Pal, and Honey Park—grounded in honest advice, verified pricing, and personal care.
            </p>

            <div className="hero-actions">
              <a href="#homes" className="btn btn-primary">
                <span>Explore Verified Homes</span>
                <ArrowDown size={16} />
              </a>

              <a 
                href="https://wa.me/919714229432?text=Hello%20Pooja%20Real%20Estate,%20I%20am%20looking%20for%20a%20home%20in%20Surat.%20Could%20you%20guide%20me?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Locality Exploration Bar */}
            <div className="hero-locality-strip">
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Key Localities:
              </span>
              {localities.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  className={`locality-chip ${activeLocality === loc.id ? 'active' : ''}`}
                  onClick={() => onSelectLocality(loc.id)}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="hero-composition">
            {/* Main Architectural Hero Photograph */}
            <div className="hero-main-card">
              <img 
                src="/assets/surat_home_hero.jpg" 
                alt="Sunlit contemporary Surat home living room opening to a lush garden balcony" 
                className="hero-main-img"
                width="720"
                height="480"
                loading="eager"
              />
            </div>

            {/* Overlapping Authentic Editorial Portrait */}
            <div className="hero-portrait-card">
              <img 
                src="/assets/pooja_portrait.jpg" 
                alt="Pooja — Co-Founder and Property Advisor at Pooja Real Estate Surat" 
                className="hero-portrait-img"
                width="200"
                height="220"
                loading="eager"
              />
              <div className="hero-portrait-caption">
                <p className="hero-portrait-name">Pooja</p>
                <p className="hero-portrait-role">Property Guidance & Client Advisory</p>
              </div>
            </div>

            {/* Floating Editorial Badge */}
            <div className="hero-floating-badge">
              <div className="hero-floating-stat">6+ Yrs</div>
              <p className="hero-floating-sub">
                Guiding Surat families to their <em>Sapno Ka Ghar</em> in Adajan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
