import React, { useState } from 'react';
import { ACCESSORIES_CATALOG } from '../data/mockData';
import { DeviceArt } from './DeviceArt';
import { Check, Info } from 'lucide-react';

export const AccessoriesShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'charging' | 'cables' | 'protection' | 'ergonomics'>('all');

  const filteredAccessories = ACCESSORIES_CATALOG.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const getArtType = (id: string): any => {
    if (id.includes('gan')) return 'gan-charger';
    if (id.includes('cable')) return 'cable';
    if (id.includes('tempered')) return 'screen-protector';
    if (id.includes('case')) return 'case';
    if (id.includes('stand')) return 'laptop-stand';
    return 'gan-charger';
  };

  return (
    <section id="accessories" className="py-16 lg:py-20 border-b border-slate-200/90 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1.5 font-semibold">
              <span>Section 04</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Hardware Companions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Engineered Tech Accessories
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              GaN fast-charging silicon, reinforced braided cables, 9H tempered aluminosilicate glass, and aerospace aluminum ergonomics tested for heat dissipation.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilter('charging')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'charging'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              GaN Chargers
            </button>
            <button
              onClick={() => setFilter('cables')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'cables'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cables
            </button>
            <button
              onClick={() => setFilter('protection')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'protection'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Protection
            </button>
            <button
              onClick={() => setFilter('ergonomics')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'ergonomics'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ergonomics
            </button>
          </div>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccessories.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-xs group"
            >
              {/* Visual preview */}
              <div className="h-44 w-full bg-slate-50 border-b border-slate-100 relative">
                <DeviceArt type={getArtType(item.id)} />
                {item.badge && (
                  <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-700 font-semibold px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-slate-200 uppercase">
                    {item.badge}
                  </div>
                )}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-slate-200 uppercase">
                  Target: {item.targetDevice}
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Materials: {item.materials}
                  </div>

                  {/* Key specs */}
                  <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                    {item.keySpecs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and walk-in note */}
                <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400">Indicative Price:</span>
                    <div className="text-xl font-extrabold text-slate-900 font-mono tabular-nums">
                      ₹{item.indicativePriceInr.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-slate-500">
                      Bengaluru In-Store Stock
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Walk-in notice */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3 font-mono shadow-2xs">
          <Info className="w-4 h-4 text-orange-600 shrink-0" />
          <span>
            Tempered glass precision alignment and phone case fitting are provided on-site at ReTech Hub Bengaluru with every walk-in accessory purchase.
          </span>
        </div>

      </div>
    </section>
  );
};
