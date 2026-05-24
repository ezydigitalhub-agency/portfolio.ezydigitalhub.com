import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';

const BRAND_STUDIES = [
  {
    name: 'MIVO CAFE',
    logoText: 'MIVO',
    logoSub: '— CAFE —',
    style: 'text-rose-500 font-black tracking-widest',
    subtitle: 'Scale & Foot Traffic Boost',
    tagline: 'Gourmet Specialty Coffee Chain',
    stats: '+180% Foot Traffic',
    bgColor: 'bg-rose-50/50',
    borderColor: 'border-rose-100',
    case: {
      challenge: 'Unprecedented local competition was stalling corporate foot traffic and direct mobile catering orders.',
      strategy: 'Engineered a warm, visual brand identity coupled with structural hyper-localized map search campaigns and custom physical menu asset styles.',
      outcome: 'A remarkable 180% hike in organic table bookings, scaling new customer metrics & franchise inquiries.'
    }
  },
  {
    name: 'Verin',
    logoText: 'Verin',
    logoSub: '',
    style: 'text-[#1E293B] font-display font-medium tracking-tight italic',
    subtitle: 'Luxury E-Commerce Rebrand',
    tagline: 'High-end Sustainable Apparel Brand',
    stats: '35% Higher LTV',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200/60',
    case: {
      challenge: 'High cart abandonment rates due to inconsistent positioning across mobile channels & outdated site visuals.',
      strategy: 'Unified customer touchpoints with premium minimalist styleguides. Redesigned high-converting cart workflows & high-end packaging designs.',
      outcome: 'Reduced cart abandon rates and secured an immediate 35% improvement in long-term customer lifetime value.'
    }
  },
  {
    name: 'DAILY DOSE',
    logoText: 'DAILY DOSE',
    logoSub: '',
    style: 'text-neutral-900 font-extrabold tracking-tighter uppercase',
    subtitle: 'Funnel Authority Launch',
    tagline: 'Daily Wellbeing & Hydration Labs',
    stats: '12.5% Hook Conversion',
    bgColor: 'bg-zinc-50',
    borderColor: 'border-zinc-200/60',
    case: {
      challenge: 'Target audience was under-engaging with daily health content, resulting in slow product repeat purchase rates.',
      strategy: 'Designed highly compelling wellness educational social carousels and constructed automated email loyalty funnels with custom hooks.',
      outcome: 'Achieved an elite 12.5% hook conversions from content to checkouts, stabilizing sustainable monthly recurring sales.'
    }
  }
];

export default function Brands() {
  const [activeBrand, setActiveBrand] = useState<typeof BRAND_STUDIES[0] | null>(null);

  return (
    <section className="py-16 bg-white border-b border-gray-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Header */}
        <div className="text-center max-w-lg mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block font-display">
            Brands We've Worked With
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
            Proud to partner with amazing businesses.
          </h2>
          <p className="text-xs text-gray-400">
            Click on any brand logo below to read our short, high-impact growth case study.
          </p>
        </div>

        {/* Brand Logos Row Flex */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100 mb-10">
          
          {BRAND_STUDIES.map((brand, idx) => (
            <div
              key={brand.name}
              onClick={() => setActiveBrand(brand)}
              className="flex flex-col items-center justify-center p-4 w-full h-24 rounded-2xl bg-white border border-gray-100 hover:border-brand-orange/20 shadow-xs hover:shadow-md cursor-pointer transition-all duration-300 group select-none hover:-translate-y-0.5"
            >
              {/* Custom Logo Typography to resemble standard layout */}
              <div className="flex flex-col items-center justify-center">
                <span className={`text-xl sm:text-2xl tracking-wide group-hover:scale-105 transition-transform ${brand.style}`}>
                  {brand.logoText}
                </span>
                {brand.logoSub && (
                  <span className="text-[7px] text-gray-400 tracking-widest font-bold leading-none mt-1">
                    {brand.logoSub}
                  </span>
                )}
              </div>
              <span className="text-[9px] font-mono font-bold text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                View Impact Case ➔
              </span>
            </div>
          ))}

          {/* More Brands Placeholder */}
          <div className="flex flex-col items-center justify-center p-4 w-full h-24 rounded-2xl bg-white/40 border border-dashed border-gray-200 select-none">
            <span className="text-sm font-display font-semibold text-gray-400 italic">
              More Brands...
            </span>
            <span className="text-[8px] font-mono text-gray-400 mt-1">
              Your logo here?
            </span>
          </div>

        </div>

      </div>

      {/* POPUP PANEL FOR CASE STUDY METRICS (High fidelity) */}
      <AnimatePresence>
        {activeBrand && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBrand(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-100 text-left flex flex-col"
            >
              <div className={`p-6 border-b border-gray-50 flex justify-between items-start ${activeBrand.bgColor}`}>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-lg font-black tracking-wide text-brand-navy border-b-2 border-brand-orange">
                      {activeBrand.name}
                    </span>
                    <span className="text-[9px] font-bold text-brand-orange bg-brand-orange/5 px-2 py-0.5 rounded-full uppercase">
                      Case Study
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-gray-500">
                    {activeBrand.tagline}
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveBrand(null)}
                  className="w-8 h-8 rounded-full bg-white border border-gray-100 hover:bg-gray-100 text-gray-500 font-bold transition-all flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Stats Highlight Banner */}
              <div className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-orange" />
                  <span className="text-xs font-bold text-gray-300">Measured Outcome Target:</span>
                </div>
                <span className="text-lg font-black text-brand-orange font-display">
                  {activeBrand.stats}
                </span>
              </div>

              {/* Case Body information */}
              <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto">
                {/* Challenge */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold text-rose-500 tracking-wider">The Challenge:</span>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {activeBrand.case.challenge}
                  </p>
                </div>

                {/* Strategy */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold text-blue-500 tracking-wider">Strategic Response:</span>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {activeBrand.case.strategy}
                  </p>
                </div>

                {/* Outcome */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold text-green-500 tracking-wider">Result of Partnership:</span>
                  <p className="text-xs text-brand-navy font-semibold leading-relaxed">
                    🎉 {activeBrand.case.outcome}
                  </p>
                </div>
              </div>

              {/* Close controls */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-2 text-xs">
                <button 
                  onClick={() => setActiveBrand(null)}
                  className="text-xs font-bold text-gray-600 hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-xl transition-all"
                >
                  Close Case
                </button>
                <a 
                  href="#contact-section"
                  onClick={() => {
                    setActiveBrand(null);
                    const el = document.getElementById('contact-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-4 py-2 rounded-xl transition-all"
                >
                  Get Same Results
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
