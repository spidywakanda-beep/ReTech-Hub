import React from 'react';
import { Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/90 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Layout */}
        <div className="max-w-3xl space-y-6">
          
          {/* Location & Brand Trust Marker (Clean unboxed text, no pills) */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
            <span className="text-orange-600 font-semibold">Bengaluru, India</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>ReTech Hub · Owned by Sanfi</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.12]">
            Buy Smart. <span className="text-orange-600">Sell Smart.</span>
          </h1>

          {/* Concise Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Bengaluru’s dedicated center for exploring pre-owned Android and Apple smartphones, certified laptops, premium fast-charging accessories, and transparent walk-in hardware repair diagnostics.
          </p>

          {/* Core Operational Guarantees (Clean unboxed metadata) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>40-point hardware bench verification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Hands-on in-person testing in Bengaluru</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Transparent quotes with zero diagnostic fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Eco-responsible battery & screen recycling</span>
            </div>
          </div>

          {/* Primary Action Buttons (Zero contact info required!) */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#device-selector"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-98 rounded-xl shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-slate-900"
            >
              <span>Select Device & Instant Quote</span>
              <ChevronRight className="ml-2 w-4 h-4 text-slate-300" />
            </a>

            <a
              href="#diagnostic-estimator"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 active:scale-98 rounded-xl transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-orange-500"
            >
              <Wrench className="mr-2 w-4 h-4 text-orange-600" />
              <span>Repair Cost Estimator</span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              <span>Trade-In Rubric</span>
            </a>
          </div>
        </div>

        {/* 4-Item Proof Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">40<span className="text-orange-600">+</span></div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Inspection Checkpoints</div>
            <div className="text-xs text-slate-500 mt-0.5">Every unit bench tested</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">4+1</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Core Smartphone Brands</div>
            <div className="text-xs text-slate-500 mt-0.5">Samsung, OnePlus, Xiaomi, vivo, Apple</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">45<span className="text-orange-600">m</span></div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Average Mobile Triage</div>
            <div className="text-xs text-slate-500 mt-0.5">Fast walk-in turnaround</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">100<span className="text-emerald-600">%</span></div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Hands-On Testing</div>
            <div className="text-xs text-slate-500 mt-0.5">Verified before purchase</div>
          </div>
        </div>

      </div>
    </section>
  );
};
