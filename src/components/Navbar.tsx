import React from 'react';
import EzyLogo from './EzyLogo';
import { MessageSquareCode, Phone } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onBookClick: () => void;
}

export default function Navbar({ onContactClick, onBookClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo link */}
          <div className="cursor-pointer hover:opacity-90 transition-opacity">
            <EzyLogo className="h-9 sm:h-11" />
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-navy hover:text-brand-orange px-4 py-2 rounded-full transition-colors border border-gray-200 hover:border-brand-orange/20"
            >
              <Phone className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
            
            <button
              onClick={onContactClick}
              id="lets-talk-btn"
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-navy hover:text-brand-orange font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Let's Talk</span>
              {/* Custom WhatsApp style green dot indicator with SVG icon */}
              <span className="flex items-center justify-center bg-[#25D366] text-white p-1 rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.519.99c-5.44 0-9.866 4.372-9.87 9.802 0 1.772.486 3.502 1.407 5.027L2.093 21.8l6.11-1.595h.057l.001.002z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
