import React, { useState } from 'react';
import { reviews, googleStats } from '../data/reviews';
import { Star, CheckCircle, Quote, ThumbsUp, ChevronDown, ExternalLink } from 'lucide-react';

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 5);

  return (
    <section className="section reviews-section" id="reviews" aria-label="Client testimonials and Google reviews">
      <div className="container">
        {/* Section Head */}
        <div className="section-head" style={{ marginBottom: '3rem' }}>
          <div className="section-head-text">
            <span className="label-editorial">Verified Social Proof · Google Profile</span>
            <h2 className="headline-section">
              Stories from our <em>Surat families.</em>
            </h2>
            <p className="body-muted">
              Every review below is verbatim from our verified Google Business Profile. These are real families living in homes across Adajan, Honey Park, and Surat today.
            </p>
          </div>
        </div>

        {/* Reviews Editorial Grid */}
        <div className="reviews-editorial-grid">
          {/* Left Sticky Summary Card */}
          <div className="reviews-summary-card">
            <span className="label-editorial">Google Rating Score</span>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
              <span className="review-big-stat">{googleStats.rating}</span>
              <span style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>/ 5.0</span>
            </div>

            <div className="stars-row" style={{ gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#E29F1D" color="#E29F1D" />
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <p style={{ fontWeight: 700, color: 'var(--color-forest)', fontSize: '1.05rem' }}>
                175+ Verified Client Reviews
              </p>
              <p className="body-muted" style={{ fontSize: '0.84rem', marginTop: '0.25rem' }}>
                Google Business Profile: <em>Pooja real Estate - Best property dealer in surat</em>
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '1.15rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.84rem', fontStyle: 'italic', color: 'var(--color-forest)' }}>
                "They kept us informed every step of the way, making us feel supported and confident. The personal touch they added truly made us feel valued."
              </p>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-terracotta)', marginTop: '0.5rem' }}>
                — Vraj Navswriwala, Surat
              </span>
            </div>

            <a 
              href="https://maps.google.com/?cid=poojarealestate_surat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ justifyContent: 'center' }}
            >
              <span>View On Google Maps</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Right Column: Stack of Authentic Reviews */}
          <div className="reviews-cards-stack">
            {displayedReviews.map((rev) => (
              <div key={rev.id} className="review-editorial-card">
                <div className="review-card-head">
                  <div>
                    <h3 className="review-author-name">{rev.author}</h3>
                    <div className="review-author-meta">
                      <span>{rev.date}</span> · <span>Locality: {rev.locality}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="stars-row">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#E29F1D" color="#E29F1D" />
                      ))}
                    </div>
                    <span className="badge-tag" style={{ backgroundColor: '#E8F5E9', color: '#2E7D32' }}>
                      <CheckCircle size={11} /> Verified
                    </span>
                  </div>
                </div>

                <p className="review-body-text">
                  "{rev.text}"
                </p>

                {rev.helpfulCount > 0 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                    <ThumbsUp size={12} />
                    <span>{rev.helpfulCount} people found this review helpful</span>
                  </div>
                )}
              </div>
            ))}

            {reviews.length > 5 && (
              <button
                type="button"
                className="btn btn-outline"
                style={{ alignSelf: 'center', marginTop: '1rem' }}
                onClick={() => setShowAll(!showAll)}
              >
                <span>{showAll ? 'Show Fewer Reviews' : `Read All ${reviews.length} Client Stories`}</span>
                <ChevronDown size={16} style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
