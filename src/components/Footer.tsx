import React from 'react';
import { MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/70 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand & Location Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1">
              <span>ReTech</span>
              <span className="text-orange-600">Hub</span>
            </a>
            
            <p className="text-sm text-slate-700 font-medium">
              Buy Smart. Sell Smart.
            </p>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Bengaluru’s destination for certified pre-owned smartphones, tested enterprise laptops, premium fast-charging accessories, and transparent electronics repair diagnostics.
            </p>

            {/* Location Tag */}
            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-slate-600">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Column 2: Smartphones */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Smartphones
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#smartphones" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Samsung Galaxy Series
                </a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  OnePlus Flagship & Nord
                </a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Xiaomi & Redmi Note
                </a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  vivo X, V & T Series
                </a>
              </li>
              <li>
                <a href="#smartphones" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Apple iPhone Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Repair Lab */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Repair Lab
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#repairs" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Screen & OLED Replacement
                </a>
              </li>
              <li>
                <a href="#repairs" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Battery Health Restoration
                </a>
              </li>
              <li>
                <a href="#repairs" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Motherboard Micro-Soldering
                </a>
              </li>
              <li>
                <a href="#repairs" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Thermal Overhaul & Repaste
                </a>
              </li>
              <li>
                <a href="#diagnostic-estimator" className="hover:text-slate-900 hover:underline underline-offset-4 text-orange-600 font-semibold transition-colors">
                  Instant Diagnostic Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards & Gear */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Quality & Gear
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#standards" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  40-Point Inspection Matrix
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Eco E-Waste Disposal
                </a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  GaN 65W/100W Fast Chargers
                </a>
              </li>
              <li>
                <a href="#accessories" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Braided Ballistic Cables
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors">
                  Trade-In Valuation Matrix
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Transparency Statement */}
        <div className="py-6 border-b border-slate-200 text-[11px] text-slate-500 leading-relaxed font-mono">
          <p>
            Transparency Notice: ReTech Hub operates in Bengaluru, India. All prices, specifications, and turnaround durations displayed on this website are indicative reference benchmarks for in-store consultation and stock availability. Physical multi-point testing is conducted on-site prior to device purchase or trade-in. Third-party brand names, logos, and registered marks (including Apple, Samsung, Google, OnePlus, Xiaomi, vivo, Lenovo, Dell) are the property of their respective trademark owners and are referenced solely for identification and compatibility purposes.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} ReTech Hub · Owned & operated by Stevee (Bengaluru, India). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-500">
              WCAG AA Accessibility Compliant
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
