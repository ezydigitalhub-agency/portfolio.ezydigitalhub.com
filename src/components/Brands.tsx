import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';

const BRAND_STUDIES = [
  {
    name: 'MIVO CAFE',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-26@4x-100.jpg',
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
    name: 'VERIN LUXURY',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-27@4x-100.jpg',
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
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-30@4x-100.jpg',
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
  },
  {
    name: 'APEX ATHLETICS',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-31@4x-100.jpg',
    subtitle: 'Social Conversion Overhaul',
    tagline: 'High-Performance Activewear',
    stats: '+220% Revenue growth',
    bgColor: 'bg-blue-50/50',
    borderColor: 'border-blue-100',
    case: {
      challenge: 'Struggling to translate social media video views into solid direct-to-consumer store purchases.',
      strategy: 'Built targeted conversion campaigns, optimized mobile layout and cart flows, and established real-time analytics monitoring.',
      outcome: 'Boosted order conversion by 2.2x and secured an overall sustainable growth in monthly recurring revenue.'
    }
  },
  {
    name: 'LUMINA DESIGN',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-32@4x-100.jpg',
    subtitle: 'Organic Visibility Scaling',
    tagline: 'Fine Interior & Decor Agency',
    stats: '+140% Organic Inquiries',
    bgColor: 'bg-amber-50/50',
    borderColor: 'border-amber-100',
    case: {
      challenge: 'Excluding offline referrers, the brand had zero search presence among local high-intent decor buyers.',
      strategy: 'Implemented structured content funnels centering on spatial styling tips, paired with localized organic search optimizations.',
      outcome: 'Achieved a massive 140% growth in premium inbound project inquiries in less than 3 months.'
    }
  },
  {
    name: 'NOVA MEDIA',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-25@4x-100.jpg',
    subtitle: 'Social Media Escalation',
    tagline: 'Digital Entertainment & Creative Studio',
    stats: '+310% Video Reach',
    bgColor: 'bg-violet-50/50',
    borderColor: 'border-violet-100',
    case: {
      challenge: 'A creative company failing to break out of single-network niche algorithms into mass audiences.',
      strategy: 'Established dynamic short-form content flows and targeted storytelling styles paired with highly interactive viewer engagement maps.',
      outcome: 'Secured an explosive +310% video reach expander, transforming the studio into a globally recognized benchmark.'
    }
  },
  {
    name: 'SOLARI ENERGY',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-24@4x-100.jpg',
    subtitle: 'Inbound Growth Structure',
    tagline: 'Innovative Sustainable Energy Provider',
    stats: '+95% Inbound Leads',
    bgColor: 'bg-emerald-50/50',
    borderColor: 'border-emerald-100',
    case: {
      challenge: 'B2B leads were highly expensive via raw advertising campaigns with low conversion rates.',
      strategy: 'Engineered specialized interactive calculators comparing long term green ROI, combined with dynamic localized content hub.',
      outcome: 'Optimized acquisition channel efficacy, accelerating inbound organic leads by 95% in high-intent regions.'
    }
  },
  {
    name: 'PULSE FITNESS',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-23@4x-100.jpg',
    subtitle: 'App Signup Optimization',
    tagline: 'Interactive Smart Fitness Platform',
    stats: '+150% App Signups',
    bgColor: 'bg-yellow-50/50',
    borderColor: 'border-yellow-100',
    case: {
      challenge: 'Low download-to-active member conversion caused high customer acquisition costs.',
      strategy: 'Restructured initial onboarding flows and gamified target completion streaks inside the mobile app experience.',
      outcome: 'Drove user retention rates upwards, leading to a massive 150% increase in active premium subscription signups.'
    }
  },
  {
    name: 'NEXTGEN SAAS',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-22@4x-100.jpg',
    subtitle: 'SaaS Acquisition Scaling',
    tagline: 'Enterprise Automated Integration Suite',
    stats: '+240% Demo Bookings',
    bgColor: 'bg-indigo-50/50',
    borderColor: 'border-indigo-100',
    case: {
      challenge: 'Struggling to articulate multi-system integration value to non-technical enterprise decision makers.',
      strategy: 'Produced personalized demo landing paths illustrating automated workflow timesavers visually and instantly.',
      outcome: 'Boosted conversion rates from organic discovery, increasing booked corporate demos by 240%.'
    }
  },
  {
    name: 'VANTAGE CO',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-1@4x-100.jpg',
    subtitle: 'Cost Reduction Strategy',
    tagline: 'Premium Property Investment Advisory',
    stats: '40% Lower CAC',
    bgColor: 'bg-teal-50/50',
    borderColor: 'border-teal-100',
    case: {
      challenge: 'Extremely high competitive advertising bids making key investor client acquisition unprofitable.',
      strategy: 'Pivoted to value-heavy investor reports and automated masterclass funnels centered around safe property wealth.',
      outcome: 'Reduced customer acquisition cost by a verified 40% while raising general inquiries quality average.'
    }
  },
  {
    name: 'OMNI LOGISTICS',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-2@4x-100.jpg',
    subtitle: 'Operational Efficiency Boost',
    tagline: 'Global Smart Supply Chain Network',
    stats: '2.5x Operational Efficacy',
    bgColor: 'bg-cyan-50/50',
    borderColor: 'border-cyan-100',
    case: {
      challenge: 'Manual order tracking communication and delays causing major account attrition risks.',
      strategy: 'Integrated interactive client dashboard portals with automated transit notifications and responsive chatbot assistance.',
      outcome: 'Lowered client service query loads by 60% and raised account satisfaction to historic 2.5x improvement levels.'
    }
  },
  {
    name: 'ZENITH FASHION',
    logoUrl: 'https://ezydigitalhub.com/wp-content/uploads/2026/06/Asset-3@4x-100.jpg',
    subtitle: 'Omnichannel Growth Scale',
    tagline: 'Premium Sustainable Fashion Brand',
    stats: '+210% Retail Scaling',
    bgColor: 'bg-fuchsia-50/50',
    borderColor: 'border-fuchsia-100',
    case: {
      challenge: 'Fragmented online-to-offline customer databases created disjointed store campaigns.',
      strategy: 'Designed unified mobile-first retail experiences offering real-time stock scanning and digital local loyalty tickets.',
      outcome: 'Fostered high-repeat store footfall, driving cross-channel conversion rates up by +210% within months.'
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

        {/* Infinitely sliding Brands Ticker */}
        <div id="brands-ticker" className="relative w-full overflow-hidden py-8 bg-gray-50/40 rounded-3xl border border-gray-100 mb-10 select-none">
          {/* Fading left/right masks for high-fidelity look */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-gray-50 via-gray-50/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-gray-50 via-gray-50/40 to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max gap-8 sm:gap-10 animate-marquee hover:[animation-play-state:paused]">
            
            {/* Duplicated list inside row container for perfect seamless looping */}
            {[...BRAND_STUDIES, ...BRAND_STUDIES, ...BRAND_STUDIES].map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                onClick={() => setActiveBrand(brand)}
                className="flex flex-col items-center justify-center p-6 w-56 sm:w-72 h-36 shrink-0 rounded-2xl bg-white border border-gray-100 hover:border-brand-orange/30 shadow-xs hover:shadow-md cursor-pointer transition-all duration-300 group hover:-translate-y-0.5"
              >
                {/* Brand Logo Image with full colors and correct scale */}
                <div className="flex items-center justify-center h-24 w-full px-4">
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    referrerPolicy="no-referrer"
                    className="max-h-20 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}

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
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-24 bg-white/90 backdrop-blur-md rounded-lg p-1.5 border border-gray-100/50 flex items-center justify-center">
                      <img
                        src={activeBrand.logoUrl}
                        alt={activeBrand.name}
                        referrerPolicy="no-referrer"
                        className="max-h-8 max-w-full object-contain"
                      />
                    </div>
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
                  className="w-8 h-8 rounded-full bg-white border border-gray-100 hover:bg-gray-100 text-gray-500 font-bold transition-all flex items-center justify-center cursor-pointer shrink-0"
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
