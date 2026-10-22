import React from 'react';
import { Play, MapPin, Video, Sparkles } from 'lucide-react';

export default function VideoReels({ onPlayVideo }) {
  const reels = [
    {
      id: 'reel-1',
      videoSrc: '/assets/video1.mp4',
      thumbnail: '/assets/stills/video1_thumb.jpg',
      title: '3 BHK Wind-Direction Home',
      locality: 'Adajan · Near Mahalaxmi Mandir',
      specs: '1650 Sq.Ft. · Cross-Ventilated',
      type: 'Residential Sale'
    },
    {
      id: 'reel-2',
      videoSrc: '/assets/video2.mp4',
      thumbnail: '/assets/stills/video2_thumb.jpg',
      title: 'Sample Flat Ready Walkthrough',
      locality: 'Adajan Sector',
      specs: '2200 Sq.Ft. · New Construction',
      type: 'Residential Sale'
    },
    {
      id: 'reel-3',
      videoSrc: '/assets/video3.mp4',
      thumbnail: '/assets/stills/video3_thumb.jpg',
      title: '3 BHK High-Floor Flat (₹56 Lakhs)',
      locality: 'Adajan · Honey Park Rd',
      specs: 'Sunlit Living · Natural Breeze',
      type: 'Residential Sale'
    },
    {
      id: 'reel-6',
      videoSrc: '/assets/video6.mp4',
      thumbnail: '/assets/stills/video6_thumb.jpg',
      title: 'Lavish Designer 3 BHK Furnished',
      locality: 'Pal · Near Gaurav Path',
      specs: '₹65,000/mo · Turn-Key Furnished',
      type: 'Residential Rent'
    },
    {
      id: 'reel-8',
      videoSrc: '/assets/video8.mp4',
      thumbnail: '/assets/stills/video8_thumb.jpg',
      title: 'Vastu Compliant 2 BHK Furnished',
      locality: 'Adajan · Honey Park Area',
      specs: '1250 Sq.Ft. · Rent: ₹27,000/mo',
      type: 'Residential Rent'
    },
    {
      id: 'reel-5',
      videoSrc: '/assets/video5.mp4',
      thumbnail: '/assets/stills/video5_thumb.jpg',
      title: 'Quiet Luxury Executive Suite',
      locality: 'Vesu · VIP Road Axis',
      specs: 'Turnkey Cabins & Workstations',
      type: 'Commercial Rent'
    },
    {
      id: 'reel-7',
      videoSrc: '/assets/video7.mp4',
      thumbnail: '/assets/stills/video7_thumb.jpg',
      title: '30+ Workstations Corporate Office',
      locality: 'Adajan · Road Touch',
      specs: 'Rent: ₹70,000/mo · Vastu Compliant',
      type: 'Commercial Rent'
    },
    {
      id: 'reel-4',
      videoSrc: '/assets/video4.mp4',
      thumbnail: '/assets/stills/video4_thumb.jpg',
      title: '2600 Sq.Ft. Corporate Floor',
      locality: 'Adajan · Commercial High Street',
      specs: 'MD Cabins & Boardroom',
      type: 'Commercial Lease'
    }
  ];

  return (
    <section className="section videos-section" id="video-tours" aria-label="Authentic video reels and property walkthroughs">
      <div className="container">
        {/* Section Header */}
        <div className="section-head">
          <div className="section-head-text">
            <span className="label-editorial" style={{ color: '#E29F1D' }}>
              On-Ground Reel Tours · Raw & Real
            </span>
            <h2 className="headline-section">
              Watch before you visit.
            </h2>
            <p className="body-lead">
              Authentic walkthroughs recorded directly inside Surat homes by Pooja and Jay Rupani. No artificial staging, no deceptive wide-angle distortion—just real sunlight, real room dimensions, and honest neighborhood acoustics.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
              8 Verified Tours Available
            </span>
            <a 
              href="https://www.instagram.com/poojarealestate_surat/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              <span>Follow @poojarealestate_surat</span>
            </a>
          </div>
        </div>

        {/* Video Reels Grid */}
        <div className="video-reels-carousel">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="video-reel-card"
              onClick={() => onPlayVideo(reel)}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onPlayVideo(reel); }}
              role="button"
              aria-label={`Play video walkthrough for ${reel.title}`}
            >
              <div className="reel-media-wrapper">
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title} 
                  className="reel-video-preview"
                  loading="lazy"
                  width="360"
                  height="640"
                />

                <div className="reel-play-overlay">
                  <div className="play-circle-btn">
                    <Play size={22} fill="currentColor" />
                  </div>
                </div>

                <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    color: '#FFFFFF',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-xs)',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {reel.type}
                  </span>
                </div>
              </div>

              <div className="reel-card-info">
                <div className="reel-card-locality">
                  <MapPin size={12} color="#E29F1D" />
                  <span>{reel.locality}</span>
                </div>
                <h3 className="reel-card-title">
                  {reel.title}
                </h3>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.15rem' }}>
                  {reel.specs}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
