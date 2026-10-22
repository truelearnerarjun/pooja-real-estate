import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';

export default function Contact({ prefilledProperty }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: 'buy',
    locality: 'adajan',
    bhk: '3bhk',
    budget: '',
    message: prefilledProperty ? `I am interested in ${prefilledProperty.title} (${prefilledProperty.priceDisplay}) in ${prefilledProperty.locality}. Please provide complete details.` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number so we can reach you.');
      return;
    }

    // Format WhatsApp Message
    const reqType = formData.requirement === 'buy' ? 'Buying a Property' : formData.requirement === 'rent' ? 'Renting a Home' : 'Commercial Space';
    const msg = `*New Property Enquiry — Pooja Real Estate Surat*
---------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Requirement:* ${reqType}
*Preferred Locality:* ${formData.locality}
*Configuration:* ${formData.bhk}
*Budget Range:* ${formData.budget || 'Flexible / To be discussed'}
*Message / Interest:* ${formData.message || 'Looking for suitable verified properties in Surat.'}
---------------------------------------
_Sent via poojarealestate.in_`;

    const encoded = encodeURI(msg);
    const url = `https://wa.me/919714229432?text=${encoded}`;
    setWhatsappUrl(url);

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('pooja_enquiries') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('pooja_enquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage error:', err);
    }

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(url, '_blank');
  };

  return (
    <section className="section contact-section" id="contact" aria-label="Contact and property enquiry">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Contact & Location */}
          <div className="contact-info-col">
            <div>
              <span className="label-editorial">A Place to Begin · Connect</span>
              <h2 className="headline-section" style={{ marginTop: '0.5rem' }}>
                Tell us what you're <em>looking for.</em>
              </h2>
              <p className="body-lead" style={{ marginTop: '1rem' }}>
                Whether you need a sunlit 3 BHK near Mahalaxmi Mandir, an affordable flat on Honey Park Road, or commercial premises in Vesu, Mr. Jay Rupani and Pooja are here to help you navigate with honest counsel.
              </p>
            </div>

            <div className="contact-card-box">
              {/* Address */}
              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-detail-title">Office Address</span>
                  <p className="contact-detail-value">
                    Shop no -H/20, Jashlaxmi Appartment, Honey Park Rd, Opposite Sai Square Complex, Honey Park Area, Adajan, Surat, Gujarat 395009
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Shop+no+-H/20,+jashlaxmi+appartment,+Honey+Park+Rd,+Adajan,+Surat,+Gujarat+395009" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-terracotta)', marginTop: '0.4rem' }}
                  >
                    <Navigation size={12} /> Get Directions on Google Maps
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact-detail-title">Direct Calling & WhatsApp</span>
                  <p className="contact-detail-value">
                    <a href="tel:+919714229432" style={{ textDecoration: 'underline' }}>
                      +91 97142 29432 (097142 29432)
                    </a>
                  </p>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                    Mr. Jay Rupani · Principal Property Consultant
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="contact-detail-title">Consultation Hours</span>
                  <p className="contact-detail-value">
                    Monday to Sunday: 9:30 AM – 9:00 PM
                  </p>
                  <span style={{ fontSize: '0.78rem', color: '#2E7D32', fontWeight: 600 }}>
                    ● Open Today · Walk-ins & Site Visits Welcome
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="contact-form-card">
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 600, color: 'var(--color-forest)' }}>
              Send an Enquiry
            </h3>
            <p className="body-muted" style={{ fontSize: '0.88rem' }}>
              Fill in your preferences below. Submitting will instantly connect you with Jay Rupani on WhatsApp with your formatted requirements.
            </p>

            {submitted ? (
              <div className="form-submit-alert" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.96rem' }}>
                  <CheckCircle2 size={18} color="#2E7D32" />
                  <span>Enquiry Dispatched Successfully!</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#1B5E20' }}>
                  Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, click the button below to connect with Jay sir right away:
                </p>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ marginTop: '0.25rem' }}
                >
                  <MessageCircle size={15} /> Continue to WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{ fontSize: '0.8rem', textDecoration: 'underline', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Name & Phone */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 98250 12345"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Requirement & Configuration */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="requirement">Looking To</label>
                    <select
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="buy">Buy a Residential Flat</option>
                      <option value="rent">Rent an Apartment</option>
                      <option value="commercial-rent">Rent a Commercial Office</option>
                      <option value="commercial-buy">Buy a Commercial Space</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="bhk">Preferred Configuration</label>
                    <select
                      id="bhk"
                      name="bhk"
                      value={formData.bhk}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="3bhk">3 BHK Family Flat</option>
                      <option value="2bhk">2 BHK Apartment</option>
                      <option value="4bhk">4 BHK / Penthouse</option>
                      <option value="office">Commercial Office Floor</option>
                    </select>
                  </div>
                </div>

                {/* Locality & Budget */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="locality">Target Locality</label>
                    <select
                      id="locality"
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="adajan">Adajan & Honey Park</option>
                      <option value="pal">Pal & Gaurav Path</option>
                      <option value="vesu">Vesu VIP Road</option>
                      <option value="jahangirpura">Jahangirpura / Rander</option>
                      <option value="other">Other Surat Area</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">Budget Range (Approx)</label>
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      placeholder="e.g. ₹50L - ₹80L or ₹25K rent"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Note / Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Specific Preferences / Questions</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="e.g. Looking for east-west wind direction facing, near good schools, ready to move by next month."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>Send Enquiry via WhatsApp (+91 97142 29432)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
