import React from 'react';
import EzyLogo from './EzyLogo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100/80 py-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Block: Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <EzyLogo className="h-7" />
            <span className="h-4 w-px bg-gray-200 hidden sm:inline" />
            <p className="text-xs text-gray-500 font-medium">
              © 2026 EZY Digital Hub. All rights reserved.
            </p>
          </div>

          {/* Right Block: Social profiles */}
          <div className="flex items-center gap-6">
            <span className="text-xs font-semibold text-gray-400 font-display">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow EZY on Facebook"
                className="w-8 h-8 rounded-full bg-brand-navy hover:bg-brand-orange text-white hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-xs cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow EZY on Instagram"
                className="w-8 h-8 rounded-full bg-brand-navy hover:bg-brand-orange text-white hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-xs cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow EZY on LinkedIn"
                className="w-8 h-8 rounded-full bg-brand-navy hover:bg-brand-orange text-white hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-xs cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
