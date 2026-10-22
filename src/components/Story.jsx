import React from 'react';
import { ShieldCheck, Compass, Users, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function Story() {
  return (
    <section className="section story-section" id="about" aria-label="About Pooja Real Estate and Jay Rupani">
      <div className="container">
        <div className="story-grid">
          {/* Left Column: Authentic Photographic Evidence */}
          <div className="story-visuals">
            <img 
              src="/assets/family_consultation.jpg" 
              alt="Jay Rupani and Pooja consulting with a Surat family over home floor plans and chai" 
              className="story-primary-img"
              width="600"
              height="520"
              loading="lazy"
            />
            <div className="story-stamp">
              <span className="story-stamp-year">4.8 ★</span>
              <p className="story-stamp-text">
                Rated across 175+ verified Google homeowner reviews.
              </p>
            </div>
          </div>

          {/* Right Column: First-Person Editorial Message */}
          <div className="story-content">
            <span className="label-editorial">A Place to Begin · The Philosophy</span>
            
            <h2 className="headline-section">
              "We believe finding a home should feel <em>reassuring</em>, not overwhelming."
            </h2>

            <p className="body-muted" style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>
              In a rapidly growing city like Surat, finding the right home often turns into exhausting property visits, vague quotes, and pushy brokers. We established <strong>Pooja Real Estate</strong> with a very different ethos: to serve as your patient, trusted neighbor.
            </p>

            <div className="story-quote-box">
              “Got my sapno ka ghar, all thanks to Pooja Real Estate and specially Jay sir. He is very attentive and dedicated towards his work... they treated us like family.”
              <div style={{ fontSize: '0.8rem', fontStyle: 'normal', fontWeight: 600, color: 'var(--color-terracotta)', marginTop: '0.4rem' }}>
                — Shubham Mishra & Priyanka Atodriya (Google Reviews)
              </div>
            </div>

            <p className="body-muted">
              Whether you are looking for an airy 3 BHK with sea wind direction in Adajan, an affordable family flat on Honey Park Road, or a commercial office in Vesu, Mr. Jay Rupani, Pooja, and our dedicated team (Aayush & Ashish) inspect each property in person before ever recommending it to you.
            </p>

            {/* Core Pillars */}
            <div className="story-credentials-grid">
              <div className="story-cred-item">
                <span className="story-cred-title">
                  <Compass size={17} color="var(--color-terracotta)" />
                  Wind & Vastu Verified
                </span>
                <span className="story-cred-desc">
                  We check natural cross-breeze corridors and Vastu alignment for every flat.
                </span>
              </div>

              <div className="story-cred-item">
                <span className="story-cred-title">
                  <ShieldCheck size={17} color="var(--color-terracotta)" />
                  Transparent Paperwork
                </span>
                <span className="story-cred-desc">
                  Thorough title checking, society clearance, and honest price negotiation.
                </span>
              </div>

              <div className="story-cred-item">
                <span className="story-cred-title">
                  <Users size={17} color="var(--color-terracotta)" />
                  Family-First Approach
                </span>
                <span className="story-cred-desc">
                  We prioritize schools, safety, community vibe, and daily livability.
                </span>
              </div>

              <div className="story-cred-item">
                <span className="story-cred-title">
                  <PhoneCall size={17} color="var(--color-terracotta)" />
                  Direct Founder Access
                </span>
                <span className="story-cred-desc">
                  Direct call or WhatsApp with Jay Rupani (97142 29432) at every step.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
