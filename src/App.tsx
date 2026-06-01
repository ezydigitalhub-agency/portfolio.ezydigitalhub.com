import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ModelWorkflow from './components/ModelWorkflow';
import Brands from './components/Brands';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  // References for cross-interactions and scrolling
  const ctaTriggers = useRef<{ triggerWhatsApp: () => void; triggerBookCall: () => void } | null>(null);

  const handleContactAction = () => {
    window.open('https://wa.me/+8801935623213', '_blank');
  };

  const handleBookAction = () => {
    if (ctaTriggers.current) {
      ctaTriggers.current.triggerBookCall();

      // Scroll smoothly to CTA section
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-orange selection:text-white">
      {/* Navigation header */}
      <Navbar 
        onContactClick={handleContactAction} 
        onBookClick={handleBookAction} 
      />

      {/* Main landing views */}
      <main className="flex-grow">
        
        {/* Hero Showcase grid */}
        <Hero 
          onExploreWork={handleContactAction} 
          onExploreMainWebsite={handleBookAction} 
        />

        {/* Sales Bridge Connection System */}
        <Philosophy />

        {/* Comprehensive Monthly Deliverables Timeline */}
        <ModelWorkflow />

        {/* Customer Success Case Metrics */}
        <Brands />

        {/* Large Conversion Call to Action */}
        <CTASection 
          onRef={(triggers) => {
            ctaTriggers.current = triggers;
          }} 
        />

      </main>

      {/* Multi-channel branding footer */}
      <Footer />
    </div>
  );
}
