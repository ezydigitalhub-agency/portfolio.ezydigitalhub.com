import React, { useState } from 'react';
import { Award, FileText, BarChart2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    id: 'branding',
    icon: Award,
    iconColor: 'text-[#0057ff] bg-[#0057ff]/10',
    title: 'Branding',
    shortDesc: 'Build a strong brand identity that stands out & stays relevant.',
    deliverables: [
      'Visual style guides & vector assets',
      'Unified brand messaging & target personas',
      'Premium typography & color palettes',
      'Ongoing creative alignment checks'
    ]
  },
  {
    id: 'content',
    icon: FileText,
    iconColor: 'text-brand-orange bg-brand-orange/10',
    title: 'Content & Creative',
    shortDesc: 'High-quality content that connects your brand with audience.',
    deliverables: [
      'Conversion-centered ad creative assets',
      'Social media graphics & copy matrices',
      'Short-form vertical video briefs/scripts',
      'Dynamic newsletters & client portfolios'
    ]
  },
  {
    id: 'marketing',
    icon: BarChart2,
    iconColor: 'text-[#0057ff] bg-[#0057ff]/10',
    title: 'Marketing Strategy',
    shortDesc: 'Data-driven strategy to attract, engage & convert.',
    deliverables: [
      'Comprehensive multi-channel marketing plan',
      'Weekly performance audits & tracking',
      'High-converting landing page layouts',
      'Audience growth strategy design'
    ]
  },
  {
    id: 'execution',
    icon: Rocket,
    iconColor: 'text-brand-orange bg-brand-orange/10',
    title: 'Execution & Growth',
    shortDesc: 'Consistent execution that brings measurable results over time.',
    deliverables: [
      'Monthly business performance reviews',
      'Conversion Rate Optimization (CRO) setups',
      'Surgical scaling of winning channels',
      'Dedicated marketing coordinator access'
    ]
  }
];

export default function ModelWorkflow() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#fafbfc] border-y border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Row */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-start lg:items-center justify-between mb-16">
          <div className="space-y-3.5 max-w-lg text-left">
            <span className="text-xs font-bold text-brand-orange tracking-widest uppercase block font-display">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy font-display leading-[1.25]">
              Our Long-Term <br className="hidden sm:inline" />
              <span className="text-brand-orange">Monthly</span> Model
            </h2>
          </div>
          <div className="max-w-md text-left">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              We partner with businesses on a monthly basis to ensure consistency, strategy & compound growth. Think of us as your external CMO & internal creative powerhouse, unified in branding & production.
            </p>
          </div>
        </div>

        {/* Four Workflow Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedIdx === idx;
            
            return (
              <div 
                key={step.id}
                onClick={() => setSelectedIdx(isSelected ? null : idx)}
                className={`bg-white rounded-3xl p-6 border transition-all duration-300 transform cursor-pointer relative group flex flex-col justify-between ${
                  isSelected 
                    ? 'border-brand-orange ring-1 ring-brand-orange/10 -translate-y-1 shadow-lg' 
                    : 'border-gray-100 hover:border-gray-200 hover:-translate-y-1 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.06)]'
                }`}
              >
                <div>
                  {/* Step icon with color */}
                  <div className={`w-12 h-12 rounded-2xl ${step.iconColor} flex items-center justify-center transition-transform group-hover:scale-105 duration-300 mb-6`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-navy mb-2 group-hover:text-brand-orange transition-colors text-left">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 leading-relaxed text-left mb-6">
                    {step.shortDesc}
                  </p>
                </div>

                {/* Micro Expand deliverables section */}
                <div className="border-t border-gray-50 pt-4">
                  {!isSelected ? (
                    <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 group-hover:text-brand-orange transition-colors">
                      <span>View Monthly Focus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  ) : (
                    <div className="space-y-3.5 animate-fade-in text-left">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-orange">Deliverables:</span>
                      <ul className="space-y-1.5 font-sans">
                        {step.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex gap-2 items-start text-[11px] text-brand-navy font-medium leading-tight">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-[10px] text-gray-400 italic font-medium pt-1">
                        Click again to collapse list
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtle numbering layout */}
                <span className="absolute top-4 right-6 text-2xl font-black font-display text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity select-none">
                  0{idx + 1}
                </span>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
