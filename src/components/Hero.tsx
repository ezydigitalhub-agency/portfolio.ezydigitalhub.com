import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onExploreMainWebsite: () => void;
}

// Props are kept on the interface for the parent, but not consumed here yet.
export default function Hero({}: HeroProps) {
  // Shared card container styling (the `group` class powers the group-hover:* children)
  const cardClass =
    'group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300';

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
            <div className={cardClass}>
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
              <a
                href="https://www.behance.net/ezydigitalhubltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0057ff] hover:gap-2.5 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pinterest Card */}
            <div className={cardClass}>
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#bd081c]/10 text-[#bd081c] flex items-center justify-center select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C24.007 5.367 18.641.001 12.017.001z"/>
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
              <a
                href="https://www.pinterest.com/ezydigitalhub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#bd081c] hover:gap-2.5 transition-all"
              >
                <span>Explore Boards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Dribbble Card */}
            <div className={cardClass}>
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#ea4c89]/10 text-[#ea4c89] flex items-center justify-center select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
              <a
                href="https://dribbble.com/ezydigitalhub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ea4c89] hover:gap-2.5 transition-all"
              >
                <span>See Designs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* YouTube Card */}
            <div className={cardClass}>
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
              <a
                href="https://www.youtube.com/@ezydigitalhub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff0000] hover:gap-2.5 transition-all"
              >
                <span>Watch Videos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Main Website Card - spans both columns with the laptop mockup beside it */}
            <div className="group sm:col-span-2 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center">
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

                <a
                  href="https://ezydigitalhub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:gap-2.5 transition-all pt-2"
                >
                  <span>Visit Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
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
    </section>
  );
}
