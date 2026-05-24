import React, { useState } from 'react';
import { Gem, Megaphone, TrendingUp, CheckCircle, Crosshair, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PILLAR_DETAILS = {
  branding: {
    id: 'branding',
    title: 'Branding Pillar',
    icon: Gem,
    themeColor: 'from-[#07162c] to-[#12253f]',
    accentColor: 'text-sky-400',
    tagline: 'Identity & Resonance',
    description: 'A good brand is more than a logo—it is the mental real estate you own in your customer’s mind. We establish deep emotional connections, premium design systems, and sharp market positioning that instantly communicates value.',
    deliverables: ['Brand Audits & Competitor Positioning', 'Interactive Digital Styleguides', 'High-Fidelity Logo Design Systems', 'C-Suite Narrative & Tone of Voice'],
    metrics: ['Brand Recall', 'Direct/Organic Traffic Increases', 'Premium Pricing Elasticity']
  },
  marketing: {
    id: 'marketing',
    title: 'Marketing Pillar',
    icon: Megaphone,
    themeColor: 'from-[#ff5c2b] to-[#e04a1b]',
    accentColor: 'text-amber-100',
    tagline: 'Attention & Distribution',
    description: 'Without a clear marketing pipeline, great brands stay invisible. We craft surgical hyper-targeted campaigns, magnetic social strategies, and persuasive high-converting funnel content that channels attention into active pipelines.',
    deliverables: ['High-Performance Ad Campaigns', 'Content Marketing Calendars', 'Funnel Design & Conversion Rate Optimization', 'Audience Building & Social Authority'],
    metrics: ['Customer Acquisition Cost (CAC)', 'Inbound Lead Velocity', 'Click-Through & Hook Rates']
  },
  sales: {
    id: 'sales',
    title: 'Sales Pillar',
    icon: TrendingUp,
    themeColor: 'from-[#172d47] to-[#254266]',
    accentColor: 'text-emerald-400',
    tagline: 'Conversion & Capture',
    description: 'Attention without conversion is a vanity metric. We optimize your backend sales workflows, capture leads instantly, set up multi-channel email automation sequences, and arm close teams with structural strategies.',
    deliverables: ['Lead Nurturing Automations', 'CRM Pipeline Structuring', 'Interactive Landing Page Engineering', 'High-converting Retention Workflows'],
    metrics: ['Customer Lifetime Value (LTV)', 'Pipeline Conversion Speed', 'Monthly Recurring Revenue Growth']
  }
};

export default function Philosophy() {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<typeof PILLAR_DETAILS['branding'] | null>(null);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text Block */}
        <div className="text-left max-w-2xl mb-14 space-y-4">
          <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block font-display">
            Our Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy font-display leading-tight">
            Most businesses focus on design. <br className="hidden sm:inline" />
            Some focus on marketing.
          </h2>
          
          {/* Handwritten Annotation Quote */}
          <div className="py-2 select-none">
            <p className="text-3xl sm:text-4xl font-handwriting italic text-brand-navy relative inline-block">
              But growth happens when <span className="text-brand-orange font-bold relative">
                everything connects
                {/* SVG Curve Line Underneath connect */}
                <svg className="absolute left-0 bottom-[-10px] w-full h-[12px] text-brand-orange" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>.
            </p>
          </div>

          <p className="text-sm text-gray-500 max-w-md pt-2">
            Branding, Marketing & Sales — these three pillars build the bridge to sustainable growth.
          </p>
        </div>

        {/* BRIDGE DECORATIVE ILLUSTRATION & PILLARS SECTION */}
        <div className="relative py-8 bg-gradient-to-b from-gray-50 rounded-3xl border border-gray-100/70 p-6 md:p-12 mb-12">
          
          {/* Bridge Heading Arch Label */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
            <span className="text-[10px] md:text-xs font-mono font-extrabold tracking-[0.3em] text-gray-400 bg-white border border-gray-200/60 px-4 py-1.5 rounded-full shadow-sm uppercase">
              Sales Bridge
            </span>
          </div>

          {/* SVG Arch Construction */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 md:opacity-100">
            <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer arch curves linking pillars */}
              <path 
                d="M 180 200 Q 500 100 820 200" 
                stroke="#cbd5e1" 
                strokeWidth="4" 
                strokeDasharray="8 6" 
                className="animate-[dash_30s_linear_infinite]"
              />
              <path 
                d="M 180 200 Q 500 110 820 200" 
                stroke="#94a3b8" 
                strokeWidth="1.5" 
              />
              {/* Internal bridge support structure elements */}
              <line x1="280" y1="165" x2="280" y2="200" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="380" y1="140" x2="380" y2="200" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="480" y1="130" x2="480" y2="200" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="520" y1="130" x2="520" y2="200" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="620" y1="140" x2="620" y2="200" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="720" y1="165" x2="720" y2="200" stroke="#e2e8f0" strokeWidth="2" />

              {/* Cross support beams for physics detail */}
              <line x1="180" y1="200" x2="280" y2="165" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="280" y1="165" x2="380" y2="140" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="380" y1="140" x2="500" y2="120" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="500" y1="120" x2="620" y2="140" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="620" y1="140" x2="720" y2="165" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="720" y1="165" x2="820" y2="200" stroke="#f1f5f9" strokeWidth="1" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 pt-16 pb-8 max-w-4xl mx-auto">
            
            {/* BRANDING PILLAR CARD */}
            <div 
              onMouseEnter={() => setHoveredPillar('branding')}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={() => setSelectedPillar(PILLAR_DETAILS.branding)}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Visual Pillar Pillar Structure with Diamond Icon */}
              <div className="w-32 bg-gradient-to-b from-[#07162c] to-[#12253f] hover:from-[#12253f] hover:to-[#07162c] rounded-2xl p-4 flex flex-col items-center justify-between text-white shadow-xl min-h-[170px] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 border border-white/10 ring-4 ring-slate-100 group-hover:ring-sky-100">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/20">
                  <Gem className="w-5 h-5 text-sky-300" />
                </div>
                <div className="text-center w-full mt-4">
                  <div className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase">Pillar 1</div>
                  <div className="font-display font-black text-sm tracking-wider uppercase mt-1">
                    Branding
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-brand-navy mt-4 group-hover:text-brand-orange transition-colors flex items-center gap-1">
                <span>Configure identity</span>
                <ChevronRight className="w-3 h-3" />
              </p>
            </div>

            {/* MARKETING PILLAR CARD (ORANGE ACTIVE) */}
            <div 
              onMouseEnter={() => setHoveredPillar('marketing')}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={() => setSelectedPillar(PILLAR_DETAILS.marketing)}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Visual Orange Pillar */}
              <div className="w-32 bg-gradient-to-b from-[#ff5c2b] to-[#e04a1b] hover:from-[#e04a1b] hover:to-[#ff5c2b] rounded-2xl p-4 flex flex-col items-center justify-between text-white shadow-xl min-h-[170px] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 border border-white/10 ring-4 ring-orange-50 group-hover:ring-orange-100">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/20">
                  <Megaphone className="w-5 h-5 text-amber-200" />
                </div>
                <div className="text-center w-full mt-4">
                  <div className="text-[10px] tracking-[0.2em] font-bold text-orange-200 uppercase">Pillar 2</div>
                  <div className="font-display font-black text-sm tracking-wider uppercase mt-1">
                    Marketing
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-brand-navy mt-4 group-hover:text-brand-orange transition-colors flex items-center gap-1">
                <span>Optimize Campaigns</span>
                <ChevronRight className="w-3 h-3" />
              </p>
            </div>

            {/* SALES PILLAR CARD */}
            <div 
              onMouseEnter={() => setHoveredPillar('sales')}
              onMouseLeave={() => setHoveredPillar(null)}
              onClick={() => setSelectedPillar(PILLAR_DETAILS.sales)}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Visual Sales Pillar */}
              <div className="w-32 bg-gradient-to-b from-[#172d47] to-[#254266] hover:from-[#254266] hover:to-[#172d47] rounded-2xl p-4 flex flex-col items-center justify-between text-white shadow-xl min-h-[170px] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 border border-white/10 ring-4 ring-slate-100 group-hover:ring-emerald-50">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/20">
                  <TrendingUp className="w-5 h-5 text-emerald-300" />
                </div>
                <div className="text-center w-full mt-4">
                  <div className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase">Pillar 3</div>
                  <div className="font-display font-black text-sm tracking-wider uppercase mt-1">
                    Sales
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-brand-navy mt-4 group-hover:text-brand-orange transition-colors flex items-center gap-1">
                <span>Capture Revenue</span>
                <ChevronRight className="w-3 h-3" />
              </p>
            </div>

          </div>

          {/* Core instructions dynamic prompt */}
          <div className="text-center mt-4">
            <span className="text-[11px] text-gray-500 font-medium">
              💡 Click on any of the three pillars above to explore strategy deliverables and growth KPIs.
            </span>
          </div>

        </div>

        {/* BOTTOM ALERT SYSTEM BAR */}
        <div className="bg-[#051121] rounded-2xl px-6 py-5 border border-white/5 shadow-md flex flex-col md:flex-row gap-4 items-center justify-between text-left">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 shrink-0 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange border border-brand-orange/15 animate-pulse">
              <Crosshair className="w-5.5 h-5.5" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm sm:text-base">
                We build systems, not just creatives.
              </p>
              <p className="text-gray-400 text-xs mt-0.5">
                We <span className="text-brand-orange font-semibold">connect the dots</span> that drive real, measurable, and sustainable business growth.
              </p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedPillar(PILLAR_DETAILS.marketing)}
            className="text-xs font-bold text-white hover:text-brand-orange transition-colors bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 mt-2 md:mt-0 cursor-pointer"
          >
            How it connects
          </button>
        </div>

      </div>

      {/* PILLAR STRATEGY DETAIL OVERLAY (Fidelity Interactive popup) */}
      <AnimatePresence>
        {selectedPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPillar(null)}
              className="absolute inset-0 bg-brand-navy/65 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-100 flex flex-col text-left"
            >
              <div className={`p-6 text-white bg-gradient-to-r ${selectedPillar.themeColor} flex justify-between items-start`}>
                <div>
                  <div className="inline-flex items-center gap-1 bg-white/15 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                    <span>{selectedPillar.tagline}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl tracking-tight">
                    {selectedPillar.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedPillar(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Description */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">Mission Outcome</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedPillar.description}
                  </p>
                </div>

                {/* Core Deliverables list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">Monthly Deliverables</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedPillar.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-navy font-medium">
                        <CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Growth KPIs */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100/70 space-y-3">
                   <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-orange font-mono">Measurable Growth Targets</h4>
                   <div className="flex flex-wrap gap-2">
                     {selectedPillar.metrics.map((metric, idx) => (
                       <span key={idx} className="bg-white border border-gray-200 text-brand-navy font-bold text-xs px-3 py-1.5 rounded-xl shadow-xs">
                         🏆 {metric}
                       </span>
                     ))}
                   </div>
                </div>
              </div>

              {/* Close CTAs */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-2.5">
                <button 
                  onClick={() => setSelectedPillar(null)}
                  className="text-xs font-bold text-gray-600 hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-xl transition-all"
                >
                  Close Details
                </button>
                <a 
                  href="#contact-section"
                  onClick={() => setSelectedPillar(null)}
                  className="text-xs font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-4 py-2 rounded-xl transition-all shadow-sm"
                >
                  Partner Monthly
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
