import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, Phone, MapPin } from 'lucide-react';

export default function VideoModal({ videoData, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!videoData) return null;

  const videoSrc = videoData.video || videoData.videoSrc;
  const title = videoData.title;
  const locality = videoData.locality;

  const whatsappMsg = encodeURI(`Hello Jay sir, I watched the video tour for *${title}* in *${locality}*. I would like to know more and visit the property.`);
  const whatsappUrl = `https://wa.me/919714229432?text=${whatsappMsg}`;

  return (
    <div className="video-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Video tour for ${title}`}>
      <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div style={{
          padding: '0.85rem 1rem',
          backgroundColor: '#121E1B',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#E29F1D', fontWeight: 700 }}>
              Authentic Walkthrough
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>
              {title}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              color: '#FFFFFF',
              padding: '0.4rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)'
            }}
            aria-label="Close video player"
          >
            <X size={20} />
          </button>
        </div>

        {/* HTML5 Video Player */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="video-modal-player"
          controls
          autoPlay
          playsInline
          poster={videoData.thumbnail}
        >
          Your browser does not support the video tag.
        </video>

        {/* Footer Quick Action */}
        <div className="video-modal-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>
            <MapPin size={13} color="var(--color-terracotta)" />
            <span>{locality}</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={14} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
