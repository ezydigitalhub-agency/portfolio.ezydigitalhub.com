import React, { useState } from 'react';
import { ArrowRight, Globe, Laptop, Play, Compass, ExternalLink, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Define interactive preview content for the modal showcase of each card
interface PortfolioShowcase {
  type: 'behance' | 'pinterest' | 'dribbble' | 'youtube' | 'website';
  title: string;
  themeColor: string;
  tabs: string[];
  items: Array<{
    title: string;
    category: string;
    image: string;
    stats?: string;
  }>;
}

const PREVIEWS: Record<string, PortfolioShowcase> = {
  behance: {
    type: 'behance',
    title: 'Featured Branding Projects on Behance',
    themeColor: 'bg-[#0057ff]',
    tabs: ['Visual Identity', 'Packaging', 'Creative Art direction'],
    items: [
      { title: 'Aura Organic Skincare', category: 'Brand Guidelines & Identity', image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=800' },
      { title: 'Vertex Cyber Security', category: 'Tech Positioning & Strategy', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800' },
      { title: 'Lumina Coffee Co.', category: 'Eco Package Design', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  pinterest: {
    type: 'pinterest',
    title: 'Visual Direction & Mood Boards',
    themeColor: 'bg-[#bd081c]',
    tabs: ['Color Palettes', 'Modern Typography', 'Design Inspo'],
    items: [
      { title: 'Brutalist Editorial Trends', category: 'Mood Board', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800' },
      { title: 'Warm Organic Minimalist', category: 'Theme Colors', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800' },
      { title: 'Urban Tech Typography', category: 'Display Type', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  dribbble: {
    type: 'dribbble',
    title: 'UI/UX Interactive Shots',
    themeColor: 'bg-[#ea4c89]',
    tabs: ['Mobile Apps', 'Web Interfaces', 'Micro-interactions'],
    items: [
      { title: 'Smart Finance Mobile App', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
      { title: 'SaaS Analytics Dashboard', category: 'Product Interface', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
      { title: 'Eco Energy Usage Tracker', category: 'Interaction Design', image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800' }
    ]
  },
  youtube: {
    type: 'youtube',
    title: 'Video Breakdowns & Marketing Metrics',
    themeColor: 'bg-[#ff0000]',
    tabs: ['Case Studies', 'Brand Strategy', 'Growth Marketing'],
    items: [
      { title: 'How we scaled Mivo Cafe by 180%', category: 'Performance Case Study', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800' },
      { title: '3 Branding Mistakes Killing Startups', category: 'Educational Video', image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800' },
      { title: 'The Ultimate Web Conversion Guide', category: 'Growth Strategy', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800' }
    ]
  }
};

interface HeroProps {
  onExploreWork: () => void;
  onExploreMainWebsite: () => void;
}

export default function Hero({ onExploreWork, onExploreMainWebsite }: HeroProps) {
  const [activeShowcase, setActiveShowcase] = useState<PortfolioShowcase | null>(null);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const openShowcase = (key: keyof typeof PREVIEWS) => {
    setActiveShowcase(PREVIEWS[key]);
    setActiveTabIdx(0);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-[#fafbfc] to-gray-50/50 pt-8 sm:pt-14 pb-20 overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-[20%] left-[-15%] w-[50vw] h-[50vw] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-10%] w-[40vw] h-[40vw] bg-brand-navy/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO INFORMATION */}
          <div className="lg:col-span-5 text-left space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-5 bg-brand-orange" />
              <span className="text-xs sm:text-xs font-bold text-brand-orange tracking-widest font-display uppercase">
                Welcome To
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-brand-navy font-display leading-[1.1]">
                EZY DIGITAL HUB
              </h1>
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 py-1">
                <span className="text-2xl sm:text-3xl font-handwriting italic font-semibold text-brand-navy/90 select-none">
                  Creative.
                </span>
                <span className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-brand-navy/85">
                  Strategic.
                </span>
                <span className="text-2xl sm:text-3xl font-handwriting italic font-bold text-brand-orange select-none">
                  Growth Focused.
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
              We are your long-term <span className="font-semibold text-brand-navy">Branding & Marketing Partner</span>.
              We don't just design — we build brands that grow consistently, connect & convert.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://ezydigitalhub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-navy font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
              >
                <Globe className="w-4 h-4 text-gray-500" />
                <span>Visit Main Website</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: HERO CARDS GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Behance Card */}
            <div 
              onClick={() => openShowcase('behance')}
              className="bg-white p-5 rounded-2xl border border-gray-100/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer hover:border-blue-100"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#0057ff]/10 text-[#0057ff] flex items-center justify-center font-bold text-lg select-none">
                  Bē
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                  Agency
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-1">
                Behance
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-5">
                Explore our complete branding projects, logo systems, and visual guidelines.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0057ff] group-hover:gap-2.5 transition-all">
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pinterest Card */}
            <div 
              onClick={() => openShowcase('pinterest')}
              className="bg-white p-5 rounded-2xl border border-gray-100/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer hover:border-red-100"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#bd081c]/10 text-[#bd081c] flex items-center justify-center select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.204 0 1.031.397 2.138.893 2.738.1.12.115.22.085.342-.093.388-.3.1.5-.429c0-.044-.148-.415-.178-.526-.299-1.072-1.123-2.587-1.123-4.162 0-3.391 2.463-6.505 7.108-6.505 3.731 0 6.631 2.659 6.631 6.213 0 3.707-2.336 6.691-5.584 6.691-1.09 0-2.114-.566-2.463-1.234 0 0-.538 2.046-.669 2.549-.243.935-.9 2.106-1.34 2.822 1.124.347 2.317.534 3.551.534 6.612 0 11.98-5.372 11.98-11.996C24.01 5.362 18.63 0 12.017 0z"/>
                  </svg>
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full group-hover:text-red-500 group-hover:bg-red-50 transition-colors">
                  Inspiration
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-1">
                Pinterest
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-5">
                Creative design inspiration, hand-crafted aesthetic mood boards & visual direction.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#bd081c] group-hover:gap-2.5 transition-all">
                <span>Explore Boards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Dribbble Card */}
            <div 
              onClick={() => openShowcase('dribbble')}
              className="bg-white p-5 rounded-2xl border border-gray-100/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer hover:border-pink-100"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#ea4c89]/10 text-[#ea4c89] flex items-center justify-center select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
                    <path d="M12 .024C5.385.024 0 5.41 0 12.024 0 18.64 5.385 24 12 24c6.615 0 12-5.36 12-11.976C24 5.41 18.615.024 12 .024zm8.47 5.176c1.378 1.666 2.051 3.69 2.015 5.854-.015.015-.494-.15-.973-.314-1.996-.69-4.015-1.045-6.074-1.045-.254 0-.523.015-.778.03 2.094-3.321 4.316-5.462 5.811-4.525zm-9.01.523c.314.15.598.314.867.493-2.184 3.32-4.511 5.372-7.016 6.13-.508-1.554-.69-3.23-.493-4.887 1.571-1.016 4.318-2.614 6.642-1.736zm-6.52 7.74c2.259-.69 4.346-2.525 6.327-5.514.135-.21.27-.403.404-.598A33.193 33.193 0 0 1 18.23 11a36.96 36.96 0 0 0-3.38 7.323c-.224-.135-.434-.284-.658-.433-2.155-1.465-4.586-2.227-7.234-2.227h-.793a10.05 10.05 0 0 1-.225-2.2zM12 21.976c-2.422 0-4.665-.96-6.326-2.525.134 0 .284.015.433.015 2.378 0 4.542.718 6.446 2.002-.134.18-.284.344-.433.508h-.12zm2.064-.956A35.08 35.08 0 0 1 17.3 14c1.196.478 2.302 1.076 3.288 1.778-1.405 2.51-3.957 4.414-6.945 4.885l-.578.358z"/>
                  </svg>
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full group-hover:text-pink-500 group-hover:bg-pink-50 transition-colors">
                  Portfolio
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-1">
                Dribbble
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-5">
                Modern UI/UX digital product interfaces, prototypes, & active micro-interactions.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#ea4c89] group-hover:gap-2.5 transition-all">
                <span>See Designs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* YouTube Card */}
            <div 
              onClick={() => openShowcase('youtube')}
              className="bg-white p-5 rounded-2xl border border-gray-100/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group cursor-pointer hover:border-red-100"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full group-hover:text-red-500 group-hover:bg-red-50 transition-colors">
                  Insights
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-1">
                YouTube
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-5">
                Strategic video breakdowns, deep-dive branding case studies & real metrics.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#ff0000] group-hover:gap-2.5 transition-all">
                <span>Watch Videos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Main Website Card - Col Spanning with Laptop Mockup beside it */}
            <div 
              onClick={onExploreMainWebsite}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 sm:col-span-2 flex flex-col md:flex-row gap-6 items-center group cursor-pointer hover:border-orange-100"
            >
              {/* Card info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-brand-orange">
                    Agency HQ
                  </span>
                </div>
                
                <h3 className="font-display font-extrabold text-xl text-brand-navy">
                  Our Main Website
                </h3>
                
                <p className="text-xs text-gray-500 leading-relaxed">
                  Learn more about our services, customer success maps, structured process diagrams, & custom client portals.
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-orange group-hover:gap-2.5 transition-all pt-2">
                  <span>Visit Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Laptop Graphic Mockup */}
              <div className="w-full md:w-56 shrink-0 relative bg-slate-50 border border-slate-100 p-2 rounded-xl group-hover:scale-[1.03] transition-transform duration-300 select-none">
                <div className="bg-brand-navy rounded-lg p-2.5 shadow-md flex flex-col justify-between aspect-[1.5/1]">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[8px] font-bold text-white tracking-widest leading-none">
                      EZY
                    </span>
                    <span className="text-[5px] text-gray-400 font-mono tracking-widest uppercase">
                      SECURE PORTAL
                    </span>
                  </div>
                  
                  <div className="my-auto text-left py-1">
                    <p className="text-[8px] text-gray-400 font-sans leading-tight">We Build Brands</p>
                    <p className="text-[10px] font-extrabold text-white font-display leading-tight">
                      That Actually <span className="text-brand-orange">Grow.</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-1">
                    <div className="flex gap-0.5">
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                    </div>
                    <span className="text-[5px] text-brand-orange font-bold uppercase tracking-wider">
                      VISIT LIVE ➔
                    </span>
                  </div>
                </div>
                {/* Laptop base line */}
                <div className="h-1 bg-slate-300 rounded-b-md mt-1 mx-2" />
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* PORTFOLIO SHOWCASE OVERLAY / MODAL (HIGH FIDELITY PREVIEWS) */}
      <AnimatePresence>
        {activeShowcase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveShowcase(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-100 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                <div className="flex items-center gap-2.5">
                  <span className={`w-3.5 h-3.5 rounded-full ${activeShowcase.themeColor}`} />
                  <h3 className="font-display font-bold text-lg text-brand-navy">
                    {activeShowcase.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveShowcase(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold transition-all flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Tabs list inside modal */}
              <div className="flex border-b border-gray-100 bg-white px-6 overflow-x-auto gap-4">
                {activeShowcase.tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTabIdx(idx)}
                    className={`py-3 text-xs font-bold tracking-wider uppercase border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                      activeTabIdx === idx 
                        ? 'border-brand-orange text-brand-orange' 
                        : 'border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Showcase items list */}
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto w-full">
                {activeShowcase.items.map((item, idx) => {
                  const targetUrl = 
                    activeShowcase.type === 'behance' ? 'https://www.behance.net/ezydigitalhubltd' :
                    activeShowcase.type === 'pinterest' ? 'https://www.pinterest.com/ezydigitalhub/' :
                    activeShowcase.type === 'dribbble' ? 'https://dribbble.com/ezydigitalhub' : 'https://www.youtube.com/@ezydigitalhub';
                  
                  return (
                    <a 
                      key={idx}
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col sm:flex-row gap-4 items-center p-3 rounded-2xl hover:bg-gray-50/70 border border-transparent hover:border-gray-100 transition-all duration-300 group text-left w-full cursor-pointer"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full sm:w-28 h-20 object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0"
                      />
                      <div className="flex-1 text-center sm:text-left">
                        <span className="text-[10px] font-bold uppercase text-brand-orange font-mono bg-brand-orange/5 px-2 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        <h4 className="font-display font-bold text-base text-brand-navy mt-1.5 mb-1 group-hover:text-brand-orange transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 flex items-center justify-center sm:justify-start gap-1">
                          <span>Click to see original showcase on {activeShowcase.type}...</span>
                          <ExternalLink className="w-3 h-3 text-gray-300 inline" />
                        </p>
                      </div>
                      <span className="shrink-0 bg-brand-navy text-white text-xs px-4 py-2 rounded-full group-hover:bg-brand-orange transition-colors font-semibold">
                        Visit Profile
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Mini disclaimer footer inside Modal */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-[10px] text-gray-400">
                <span>Direct integration of platform feeds. Connected to user branding catalogs.</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
