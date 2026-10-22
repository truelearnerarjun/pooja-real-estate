import React from 'react';
import { localities } from '../data/localities';
import { MapPin, Compass, ArrowRight } from 'lucide-react';

export default function Localities({ onSelectLocality }) {
  return (
    <section className="section localities-section" id="localities" aria-label="Surat localities and neighborhood guides">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-head-text">
            <span className="label-editorial">Local Identity · Surat, Gujarat</span>
            <h2 className="headline-section">
              More than an <em>address.</em>
            </h2>
            <p className="body-muted">
              A home is only as joyful as the street it rests on. We don't push generic city inventory—we specialize in verified enclaves where Surat families thrive, children walk safely to school, and daily living is effortless.
            </p>
          </div>
        </div>

        {/* Localities Grid */}
        <div className="localities-grid">
          {localities.map((loc) => (
            <div key={loc.id} className="locality-card">
              <div className="locality-head">
                <div>
                  <span className="locality-badge">{loc.badge}</span>
                  <h3 className="locality-name" style={{ marginTop: '0.5rem' }}>
                    {loc.name}
                  </h3>
                </div>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => {
                    onSelectLocality(loc.id);
                    const el = document.getElementById('homes');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  title={`View properties in ${loc.name}`}
                >
                  <span>Explore Listings</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              <p className="body-muted">
                {loc.description}
              </p>

              {/* Stats Grid */}
              <div className="locality-stats-table">
                <div>
                  <div className="stat-cell-label">Neighborhood Vibe</div>
                  <div className="stat-cell-value">{loc.stats.vibe}</div>
                </div>
                <div>
                  <div className="stat-cell-label">Active Inventory</div>
                  <div className="stat-cell-value">{loc.stats.propertiesCount}</div>
                </div>
                <div>
                  <div className="stat-cell-label">Typical Range</div>
                  <div className="stat-cell-value">{loc.stats.avgPriceRange}</div>
                </div>
                <div>
                  <div className="stat-cell-label">Best Suited For</div>
                  <div className="stat-cell-value">{loc.stats.popularFor}</div>
                </div>
              </div>

              {/* Key Landmarks */}
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                  Key Landmarks:
                </span>
                <div className="locality-landmarks-list" style={{ marginTop: '0.4rem' }}>
                  {loc.landmarks.map((lm, idx) => (
                    <span key={idx} className="landmark-pill">
                      {lm}
                    </span>
                  ))}
                </div>
              </div>

              {/* Editorial Note */}
              <div className="locality-editorial-note">
                "{loc.editorialNote}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
