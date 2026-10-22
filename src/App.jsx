import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Properties from './components/Properties';
import VideoReels from './components/VideoReels';
import Localities from './components/Localities';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyDrawer from './components/PropertyDrawer';
import VideoModal from './components/VideoModal';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeLocality, setActiveLocality] = useState('all');

  const handleSelectLocality = (locId) => {
    setActiveLocality(locId);
    const el = document.getElementById('homes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      {/* Editorial Sticky Header */}
      <Header />

      <main>
        {/* Editorial Opening / Hero */}
        <Hero 
          onSelectLocality={handleSelectLocality}
          activeLocality={activeLocality}
        />

        {/* Meet Pooja & Jay / Personal Narrative */}
        <Story />

        {/* Curated Properties Catalog (Asymmetrical Grid) */}
        <Properties 
          onSelectProperty={setSelectedProperty}
          onPlayVideo={setActiveVideo}
          activeLocality={activeLocality}
        />

        {/* Authentic Walkthroughs / Video Reels */}
        <VideoReels 
          onPlayVideo={setActiveVideo}
        />

        {/* Surat Neighborhood Guides ("More than an Address") */}
        <Localities 
          onSelectLocality={handleSelectLocality}
        />

        {/* The Pooja Guiding Process */}
        <Process />

        {/* Client Testimonials & Google Reviews (4.8 ★ / 175 Reviews) */}
        <Reviews />

        {/* Start a Conversation / Enquiry Form & Map */}
        <Contact 
          prefilledProperty={selectedProperty}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Property Detail Slide-in Drawer */}
      {selectedProperty && (
        <PropertyDrawer 
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onPlayVideo={(prop) => {
            setSelectedProperty(null);
            setActiveVideo(prop);
          }}
        />
      )}

      {/* Video Reel Modal Player */}
      {activeVideo && (
        <VideoModal 
          videoData={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
