import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <aside className="mobile-floating-bar" aria-label="Mobile quick actions">
      <div className="floating-bar-inner">
        <a
          href="tel:+919714229432"
          className="btn btn-outline btn-sm"
          style={{ flex: 1, justifyContent: 'center' }}
          title="Call Pooja Real Estate"
        >
          <Phone size={15} color="var(--color-forest)" />
          <span>Call Jay Sir</span>
        </a>

        <a
          href="https://wa.me/919714229432?text=Hello%20Pooja%20Real%20Estate,%20I%20am%20looking%20for%20a%20home%20in%20Surat."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm"
          style={{ flex: 1.3, justifyContent: 'center' }}
          title="Chat with Pooja Real Estate on WhatsApp"
        >
          <MessageCircle size={15} />
          <span>WhatsApp Now</span>
        </a>
      </div>
    </aside>
  );
}
