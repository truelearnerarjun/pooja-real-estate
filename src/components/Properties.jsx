import React, { useState } from 'react';
import { properties } from '../data/properties';
import { MapPin, Maximize2, ArrowUpRight, Play, Check, Compass } from 'lucide-react';

export default function Properties({ onSelectProperty, onPlayVideo, activeLocality }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter properties by category/tab and locality
  const filteredProperties = properties.filter((prop) => {
    // Locality filter
    if (activeLocality && activeLocality !== 'all') {
      if (activeLocality === 'adajan' && prop.locality !== 'Adajan') return false;
      if (activeLocality === 'honey-park' && !prop.landmark.toLowerCase().includes('honey park') && prop.locality !== 'Adajan') return false;
      if (activeLocality === 'pal' && prop.locality !== 'Pal') return false;
      if (activeLocality === 'vesu' && prop.locality !== 'Vesu') return false;
    }

    // Category / Type filter
    if (activeFilter === 'sale') return prop.listingType === 'sale';
    if (activeFilter === 'rent') return prop.listingType === 'rent';
    if (activeFilter === '3bhk') return prop.bhk === 3;
    if (activeFilter === '2bhk') return prop.bhk === 2;
    if (activeFilter === 'commercial') return prop.category === 'commercial';
    return true;
  });

  return (
    <section className="section properties-section" id="homes" aria-label="Curated properties in Surat">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-head-text">
            <span className="label-editorial">Curated Catalog · Verified Listings</span>
            <h2 className="headline-section">
              Homes worth <em>exploring.</em>
            </h2>
            <p className="body-muted">
              Every home here represents verified inventory personally inspected by Jay Rupani and Pooja in Surat. No inflated prices, no phantom listings.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="property-filter-nav" role="tablist" aria-label="Filter properties by type">
            {[
              { id: 'all', label: 'All Properties' },
              { id: 'sale', label: 'For Sale' },
              { id: 'rent', label: 'For Rent' },
              { id: '3bhk', label: '3 BHK' },
              { id: '2bhk', label: '2 BHK' },
              { id: 'commercial', label: 'Commercial' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.id}
                className={`filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Property Showcase */}
        {filteredProperties.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--color-forest)' }}>
              No properties found matching this filter in this locality.
            </p>
            <button 
              type="button"
              className="btn btn-outline btn-sm"
              style={{ marginTop: '1rem' }}
              onClick={() => { setActiveFilter('all'); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="properties-asymmetric-grid">
            {filteredProperties.map((prop, index) => {
              // Asymmetric editorial assignment: index 0 is featured large card, index 1 is companion, rest standard
              let cardClass = 'property-card-standard';
              if (index === 0) cardClass = 'property-card-featured';
              else if (index === 1) cardClass = 'property-card-companion';

              return (
                <article 
                  key={prop.id} 
                  className={cardClass}
                  onClick={() => onSelectProperty(prop)}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') onSelectProperty(prop); }}
                  aria-label={`${prop.title} in ${prop.locality}`}
                >
                  {/* Media Wrapper */}
                  <div className="card-media">
                    <img 
                      src={prop.thumbnail} 
                      alt={prop.title} 
                      className="card-img"
                      loading="lazy"
                      width="600"
                      height="360"
                    />

                    {/* Floating Badges */}
                    <div className="card-floating-tags">
                      <span className={`card-badge-status ${prop.listingType}`}>
                        {prop.listingType === 'sale' ? 'For Sale' : 'For Rent'}
                      </span>
                      {prop.tag && (
                        <span className="card-badge-tag">
                          {prop.tag}
                        </span>
                      )}
                    </div>

                    {/* Video tour trigger */}
                    {prop.video && (
                      <button 
                        type="button"
                        className="card-video-pill"
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayVideo(prop);
                        }}
                        title="Watch full video walkthrough"
                      >
                        <Play size={12} fill="#FFFFFF" />
                        <span>Video Tour</span>
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="card-body">
                    <div className="card-location">
                      <MapPin size={13} color="var(--color-terracotta)" />
                      <span>{prop.locality} · {prop.landmark.split(',')[0]}</span>
                    </div>

                    <h3 className="card-title">
                      {prop.title}
                    </h3>

                    {/* Specs Row */}
                    <div className="card-specs-row">
                      {prop.bhk > 0 && (
                        <div className="spec-item">
                          <strong>{prop.bhk}</strong> BHK
                        </div>
                      )}
                      <div className="spec-item">
                        <strong>{prop.sqft}</strong> Sq.Ft.
                      </div>
                      {prop.bathrooms > 0 && (
                        <div className="spec-item">
                          <strong>{prop.bathrooms}</strong> Baths
                        </div>
                      )}
                      <div className="spec-item" style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'var(--color-terracotta)', fontWeight: 600 }}>
                        {prop.category === 'commercial' ? 'Commercial' : 'Residential'}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="card-footer">
                      <div className="card-price-wrap">
                        <span className="card-price-label">Price / Terms</span>
                        <span className="card-price-value">{prop.priceDisplay}</span>
                      </div>

                      <div className="card-view-btn">
                        <span>Details</span>
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
