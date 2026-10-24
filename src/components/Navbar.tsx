import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-orange-500 rounded"
        >
          <span>ReTech</span>
          <span className="text-orange-600">Hub</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a 
            href="#device-selector" 
            className="hover:text-slate-900 hover:underline underline-offset-4 decoration-orange-500 transition-colors whitespace-nowrap shrink-0"
          >
            Trade-In & Valuation
          </a>
          <a 
            href="#repairs" 
            className="hover:text-slate-900 hover:underline underline-offset-4 decoration-orange-500 transition-colors whitespace-nowrap shrink-0"
          >
            Repairs
          </a>
          <a 
            href="#display-catalog" 
            className="hover:text-slate-900 hover:underline underline-offset-4 decoration-orange-500 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            <span>Display & Glass Catalog</span>
            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-orange-100 text-orange-700">New</span>
          </a>
          <a 
            href="#accessories" 
            className="hover:text-slate-900 hover:underline underline-offset-4 decoration-orange-500 transition-colors whitespace-nowrap shrink-0"
          >
            Accessories
          </a>
          <a 
            href="#standards" 
            className="hover:text-slate-900 hover:underline underline-offset-4 decoration-orange-500 transition-colors whitespace-nowrap shrink-0"
          >
            Quality Standards
          </a>
          <a 
            href="#how-it-works" 
            className="hover:text-slate-900 hover:underline underline-offset-4 decoration-orange-500 transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#diagnostic-estimator"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-500 active:scale-98 transition-all whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-orange-400"
          >
            <span>Repair Estimator</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-2 focus-visible:outline-orange-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <a
            href="#device-selector"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
          >
            Trade-In & Valuation
          </a>
          <a
            href="#repairs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
          >
            Mobile & Laptop Repairs
          </a>
          <a
            href="#display-catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-between"
          >
            <span>Display & Glass Catalog</span>
            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-orange-100 text-orange-700">New</span>
          </a>
          <a
            href="#accessories"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
          >
            Tech Accessories
          </a>
          <a
            href="#standards"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
          >
            Quality Standards (40-Point)
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
          >
            Customer Journey & Trade-In
          </a>
          <div className="pt-2">
            <a
              href="#diagnostic-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-500 transition-colors"
            >
              <span>Instant Repair Cost Estimator</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
