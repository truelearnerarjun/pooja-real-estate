import React from 'react';
import { Ear, ClipboardCheck, FileCheck2, HeartHandshake } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'We Listen to Your Life, Not Just Budget',
      desc: 'Before scrolling listings, we understand what your family actually needs: morning sunlight, quiet study areas for children, proximity to Mahalaxmi Mandir, or seamless office commutes.',
      icon: Ear
    },
    {
      num: '02',
      title: 'On-Ground Physical Vetting',
      desc: 'Jay Rupani personally checks wind direction corridors, society maintenance history, water supply reliability, and title papers before we show you a single room.',
      icon: ClipboardCheck
    },
    {
      num: '03',
      title: 'Pressure-Free Walkthroughs',
      desc: 'Take your time. Inspect the balcony breeze, open the taps, measure the bedrooms. We never push artificial deadlines or rush your decision.',
      icon: FileCheck2
    },
    {
      num: '04',
      title: 'Familial Handover & Registry',
      desc: 'From negotiation with owners to municipal registry and key handover, we stay beside you until you are comfortably unlocking your new front door.',
      icon: HeartHandshake
    }
  ];

  return (
    <section className="section process-section" aria-label="How Pooja Real Estate guides homebuyers">
      <div className="container">
        <div className="section-head" style={{ marginBottom: '3rem' }}>
          <div className="section-head-text">
            <span className="label-editorial">The Pooja Standard · Honest Practice</span>
            <h2 className="headline-section">
              Property guidance built on <em>quiet trust.</em>
            </h2>
            <p className="body-muted">
              Here is how we ensure your home-buying or rental journey in Surat remains transparent, peaceful, and fully protected from start to finish.
            </p>
          </div>
        </div>

        <div className="process-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="process-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="process-step-num">{step.num}</span>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-xs)',
                    backgroundColor: 'rgba(36, 59, 53, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-forest)'
                  }}>
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="process-title">
                  {step.title}
                </h3>

                <p className="body-muted">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
