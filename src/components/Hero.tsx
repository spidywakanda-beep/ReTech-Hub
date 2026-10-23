import React from 'react';
import { ArrowDown, Wrench, CheckCircle2, ChevronRight, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/90 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Brand, Tagline, Introduction, Direct Actions */}
          <div className="lg:col-span-7 space-y-6">
            
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
                href="#smartphones"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-98 rounded-xl shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-slate-900"
              >
                <span>Explore Smartphone Catalog</span>
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

            <div className="pt-1 text-[11px] text-slate-400 font-mono">
              * Independent pre-owned tech discovery. No personal information or contact forms required.
            </div>
          </div>

          {/* Right Column: Minimalist Tech Lab Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                    Discovery Benchmark
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Bengaluru Hub
                </span>
              </div>

              {/* Minimalist preview entries */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Android Flagship</span>
                    <h4 className="text-xs font-bold text-slate-900">Samsung Galaxy S24 Ultra</h4>
                    <p className="text-[11px] text-slate-500">200MP Quad Cam · Snapdragon 8 Gen 3</p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Apple iOS Flagship</span>
                    <h4 className="text-xs font-bold text-slate-900">iPhone 15 Pro Max</h4>
                    <p className="text-[11px] text-slate-500">A17 Pro 3nm · 5x Tetraprism Telephoto</p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Performance Mid-Range</span>
                    <h4 className="text-xs font-bold text-slate-900">OnePlus 12R / Nord 4</h4>
                    <p className="text-[11px] text-slate-500">100W SuperVOOC · 5500 mAh</p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    Curated
                  </span>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Standardized 40-Pt Protocol</span>
                <span className="text-orange-600 font-semibold">In-Store Testing</span>
              </div>

            </div>
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
