import React, { useState, useEffect } from 'react';
import { X, MapPin, Play, MessageCircle, Phone, CheckCircle2, Compass, ShieldCheck } from 'lucide-react';

export default function PropertyDrawer({ property, onClose, onPlayVideo }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!property) return null;

  const currentImg = property.gallery && property.gallery.length > 0 
    ? property.gallery[activeMediaIndex] || property.thumbnail
    : property.thumbnail;

  const whatsappMessage = encodeURI(`Hello Jay sir & Pooja, I am interested in *${property.title}* (${property.priceDisplay}) located in *${property.landmark}*. Could you please share more details and schedule a walkthrough visit?`);
  const whatsappUrl = `https://wa.me/919714229432?text=${whatsappMessage}`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={property.title}>
      <div className="modal-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close property details"
        >
          <X size={20} />
        </button>

        <div className="modal-content-inner">
          {/* Main Media & Gallery Strip */}
          <div className="modal-media-gallery">
            <img
              src={currentImg}
              alt={property.title}
              className="modal-primary-media"
            />
            
            {/* Badges */}
            <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: '0.5rem', zIndex: 2 }}>
              <span className={`card-badge-status ${property.listingType}`}>
                {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
              </span>
              {property.tag && (
                <span className="card-badge-tag">
                  {property.tag}
                </span>
              )}
            </div>

            {/* Play Video CTA if available */}
            {property.video && (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                style={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  backgroundColor: 'rgba(22, 38, 34, 0.9)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF'
                }}
                onClick={() => onPlayVideo(property)}
              >
                <Play size={14} fill="#FFFFFF" />
                <span>Watch Reel Video Tour</span>
              </button>
            )}
          </div>

          {/* Thumbnails Gallery Strip */}
          {property.gallery && property.gallery.length > 1 && (
            <div className="modal-thumbnails-strip">
              {property.gallery.map((imgSrc, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`thumb-preview-btn ${activeMediaIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveMediaIndex(idx)}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img src={imgSrc} alt={`${property.title} angle ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}

          {/* Headings */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-terracotta)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              <MapPin size={14} />
              <span>{property.locality} · {property.landmark}</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 600, color: 'var(--color-forest)', marginTop: '0.35rem', lineHeight: '1.2' }}>
              {property.title}
            </h2>

            <p className="body-muted" style={{ fontSize: '0.96rem', marginTop: '0.5rem' }}>
              {property.subtitle}
            </p>
          </div>

          {/* Price Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
            <div>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)' }}>
                Verified Quote
              </span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-forest)' }}>
                {property.priceDisplay}
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="badge-tag" style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>
                <ShieldCheck size={12} /> Paper Verified
              </span>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
                Clear Title · Adajan Branch
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-forest)', marginBottom: '0.75rem' }}>
              Property Specifications
            </h4>
            <table className="modal-specs-table">
              <tbody>
                <tr>
                  <td className="spec-td-label">Configuration</td>
                  <td className="spec-td-value">{property.bhk > 0 ? `${property.bhk} BHK` : 'Commercial Space'}</td>
                </tr>
                <tr>
                  <td className="spec-td-label">Super Built-up Area</td>
                  <td className="spec-td-value">{property.sqft} Sq.Ft.</td>
                </tr>
                <tr>
                  <td className="spec-td-label">Bathrooms</td>
                  <td className="spec-td-value">{property.bathrooms} Ensuite Baths</td>
                </tr>
                <tr>
                  <td className="spec-td-label">Locality & Landmark</td>
                  <td className="spec-td-value">{property.landmark}</td>
                </tr>
                <tr>
                  <td className="spec-td-label">Property Category</td>
                  <td className="spec-td-value" style={{ textTransform: 'capitalize' }}>{property.category} ({property.listingType === 'sale' ? 'Outright Sale' : 'Lease / Rental'})</td>
                </tr>
                <tr>
                  <td className="spec-td-label">Natural Features</td>
                  <td className="spec-td-value">{property.tag || 'Natural Cross Ventilation'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Highlights */}
          {property.highlights && property.highlights.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-forest)', marginBottom: '0.75rem' }}>
                Key Highlights & Livability
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {property.highlights.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-forest)' }}>
                    <CheckCircle2 size={16} color="var(--color-terracotta)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-forest)', marginBottom: '0.75rem' }}>
              Editorial Assessment
            </h4>
            <p className="body-muted" style={{ lineHeight: '1.7' }}>
              {property.description}
            </p>
          </div>

          {/* Direct Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              <span>Enquire for This Property on WhatsApp</span>
            </a>

            <a
              href="tel:+919714229432"
              className="btn btn-outline"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={17} />
              <span>Call Jay Rupani: 097142 29432</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
