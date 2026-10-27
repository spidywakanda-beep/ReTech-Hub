import React from 'react';
import { Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/90 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Layout */}
        <div className="max-w-3xl space-y-6">
          
          {/* Location, Owner & Campaign Trust Marker */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
            <span className="text-orange-600 font-semibold">Bengaluru, India</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>ReTech Hub · Owned by Stevee</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-700 font-medium tracking-normal normal-case">Upgrade Your Phone, Upgrade Your Life</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.12]">
              Buy Smart. <span className="text-orange-600">Sell Smart.</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
              Used · Open-Box · Global Units — Best-Price Phones for Every Budget.
            </p>
          </div>

          {/* Concise Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Bengaluru’s dedicated destination to explore verified pre-owned smartphones, open-box showroom models, and network-tested global units. From reliable daily essentials to flagship performance, discover transparent deals tailored for every need.
          </p>

          {/* 3 Sourcing Tiers Clarification (Used, Open-Box, Global Units) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span>Pre-Owned / Used</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                40-point bench-tested phones and laptops with verified battery health and cosmetic grades. Maximum savings.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Open-Box Units</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Unsealed showcase or customer return models in mint cosmetic condition with near-zero runtime and full specs.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Global Units</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Genuine international variants individually verified for local Indian 4G/5G network bands (Airtel & Jio).
              </p>
            </div>
          </div>

          {/* Core Operational Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-600">
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

          {/* Primary Action Buttons (Action-Oriented CTAs) */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="#device-selector"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-98 rounded-xl shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-slate-900"
            >
              <span>Explore Phones</span>
              <ChevronRight className="ml-2 w-4 h-4 text-slate-300" />
            </a>

            <a
              href="#repairs"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 active:scale-98 rounded-xl transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-orange-500"
            >
              <Wrench className="mr-2 w-4 h-4 text-orange-600" />
              <span>Explore Repair Services</span>
            </a>

            <a
              href="#display-catalog"
              className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 rounded-xl transition-colors"
            >
              <span>Display & Glass Catalog</span>
            </a>
          </div>
        </div>

        {/* 4-Item Proof Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">3 Tiers</div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Used · Open-Box · Global</div>
            <div className="text-xs text-slate-500 mt-0.5">Budget to flagship choices</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">40<span className="text-orange-600">+</span></div>
            <div className="text-xs font-semibold text-slate-800 mt-1">Inspection Checkpoints</div>
            <div className="text-xs text-slate-500 mt-0.5">Every unit bench tested</div>
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

