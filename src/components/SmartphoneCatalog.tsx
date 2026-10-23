import React, { useState, useMemo } from 'react';
import { Search, Filter, Smartphone, Cpu, Camera, Battery, Scale, ExternalLink, Info, Check } from 'lucide-react';
import { SMARTPHONE_CATALOG, SMARTPHONE_DISCOVERY_NOTICE, SmartphoneModel, OperatingSystem, SmartphoneBrand, SmartphoneTier } from '../data/smartphoneCatalog';
import { PhoneDeviceVisual } from './PhoneDeviceVisual';
import { SmartphoneDetailModal } from './SmartphoneDetailModal';
import { SmartphoneCompareModal } from './SmartphoneCompareModal';

export const SmartphoneCatalog: React.FC = () => {
  const [selectedOs, setSelectedOs] = useState<'all' | OperatingSystem>('all');
  const [selectedBrand, setSelectedBrand] = useState<SmartphoneBrand>('all');
  const [selectedTier, setSelectedTier] = useState<SmartphoneTier>('all');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalPhone, setActiveModalPhone] = useState<SmartphoneModel | null>(null);
  const [compareList, setCompareList] = useState<SmartphoneModel[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Available brands depending on OS selection
  const availableBrands: { key: SmartphoneBrand; label: string }[] = useMemo(() => {
    if (selectedOs === 'ios') {
      return [{ key: 'apple', label: 'Apple iPhone' }];
    }
    if (selectedOs === 'android') {
      return [
        { key: 'all', label: 'All Android' },
        { key: 'samsung', label: 'Samsung Galaxy' },
        { key: 'oneplus', label: 'OnePlus' },
        { key: 'xiaomi', label: 'Xiaomi / Redmi' },
        { key: 'vivo', label: 'vivo' }
      ];
    }
    return [
      { key: 'all', label: 'All Brands' },
      { key: 'apple', label: 'Apple' },
      { key: 'samsung', label: 'Samsung' },
      { key: 'oneplus', label: 'OnePlus' },
      { key: 'xiaomi', label: 'Xiaomi' },
      { key: 'vivo', label: 'vivo' }
    ];
  }, [selectedOs]);

  // Available series depending on selected brand or OS
  const availableSeries = useMemo(() => {
    let pool = SMARTPHONE_CATALOG;
    if (selectedOs !== 'all') {
      pool = pool.filter(p => p.os === selectedOs);
    }
    if (selectedBrand !== 'all') {
      pool = pool.filter(p => p.brandKey === selectedBrand);
    }
    const seriesSet = Array.from(new Set(pool.map(p => p.series)));
    return ['all', ...seriesSet];
  }, [selectedOs, selectedBrand]);

  // Filtered smartphones
  const filteredPhones = useMemo(() => {
    return SMARTPHONE_CATALOG.filter(phone => {
      // OS filter
      if (selectedOs !== 'all' && phone.os !== selectedOs) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'all' && phone.brandKey !== selectedBrand) {
        return false;
      }
      // Tier filter
      if (selectedTier !== 'all' && phone.tier !== selectedTier) {
        return false;
      }
      // Series filter
      if (selectedSeries !== 'all' && phone.series !== selectedSeries) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = phone.name.toLowerCase().includes(query);
        const matchesChipset = phone.specs.chipset.toLowerCase().includes(query);
        const matchesCameras = phone.specs.rearCameras.toLowerCase().includes(query);
        const matchesBrand = phone.brand.toLowerCase().includes(query);
        const matchesSeries = phone.series.toLowerCase().includes(query);
        if (!matchesName && !matchesChipset && !matchesCameras && !matchesBrand && !matchesSeries) {
          return false;
        }
      }
      return true;
    });
  }, [selectedOs, selectedBrand, selectedTier, selectedSeries, searchQuery]);

  const toggleCompare = (phone: SmartphoneModel) => {
    if (compareList.some(p => p.id === phone.id)) {
      setCompareList(compareList.filter(p => p.id !== phone.id));
    } else {
      if (compareList.length >= 2) {
        setCompareList([compareList[0], phone]);
      } else {
        setCompareList([...compareList, phone]);
      }
    }
  };

  return (
    <section id="smartphones" className="py-16 lg:py-20 border-b border-slate-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1.5 font-semibold">
              <span>Section 01</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Model Discovery Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Used Smartphone Discovery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Explore authentic technical specifications for popular pre-owned Android and Apple iPhone devices to make informed decisions before your Bengaluru store visit.
            </p>
          </div>

          {/* Discovery Label Banner */}
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm shrink-0">
            <span className="font-semibold text-slate-900">Physical Stock Notice:</span> Model specs are standardized reference benchmarks. Hand-held physical inspection is performed in-person in Bengaluru.
          </div>
        </div>

        {/* Catalog Control Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 mb-8 space-y-4">
          
          {/* Row 1: OS Segmented Switcher & Search Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* OS Tabs (Allowed functional button controls) */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-200 shrink-0 shadow-2xs">
              <button
                type="button"
                onClick={() => {
                  setSelectedOs('all');
                  setSelectedBrand('all');
                  setSelectedSeries('all');
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedOs === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Models ({SMARTPHONE_CATALOG.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedOs('android');
                  setSelectedBrand('all');
                  setSelectedSeries('all');
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedOs === 'android'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Android
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedOs('ios');
                  setSelectedBrand('apple');
                  setSelectedSeries('all');
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedOs === 'ios'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Apple iPhone
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search model, chipset (e.g. Snapdragon, A17 Pro), camera..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

          </div>

          {/* Row 2: Secondary Filter Pills & Dropdowns */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200/80 text-xs">
            
            {/* Brand Filter */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="catalog-brand" className="text-slate-500 font-mono text-[11px] uppercase">
                Brand:
              </label>
              <select
                id="catalog-brand"
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value as SmartphoneBrand);
                  setSelectedSeries('all');
                }}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500"
              >
                {availableBrands.map(b => (
                  <option key={b.key} value={b.key}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Series Filter */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="catalog-series" className="text-slate-500 font-mono text-[11px] uppercase">
                Series:
              </label>
              <select
                id="catalog-series"
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500"
              >
                <option value="all">All Series</option>
                {availableSeries.filter(s => s !== 'all').map(s => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Category / Tier Filter */}
            <div className="flex items-center gap-1.5">
              <label htmlFor="catalog-tier" className="text-slate-500 font-mono text-[11px] uppercase">
                Tier:
              </label>
              <select
                id="catalog-tier"
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value as SmartphoneTier)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500"
              >
                <option value="all">All Tiers</option>
                <option value="flagship">Flagship Models</option>
                <option value="mid-range">Mid-Range Performance</option>
                <option value="budget">Budget-Friendly</option>
              </select>
            </div>

            {/* Active Result Count */}
            <div className="ml-auto text-slate-500 text-[11px] font-mono">
              Showing <span className="font-bold text-slate-900">{filteredPhones.length}</span> verified models
            </div>

          </div>

        </div>

        {/* Catalog Grid */}
        {filteredPhones.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <p className="text-sm font-semibold text-slate-800">No smartphone models matched your filter selection.</p>
            <button
              onClick={() => {
                setSelectedOs('all');
                setSelectedBrand('all');
                setSelectedTier('all');
                setSelectedSeries('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-orange-600 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhones.map((phone) => {
              const isCompared = compareList.some(p => p.id === phone.id);

              return (
                <div
                  key={phone.id}
                  className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-xs group"
                >
                  {/* Card Header & Device Visual */}
                  <div className="h-56 w-full bg-gradient-to-b from-slate-50 to-slate-100/70 border-b border-slate-100 relative flex items-center justify-center p-3 overflow-hidden">
                    <PhoneDeviceVisual phone={phone} mode="card" view="dual" />
                    
                    {/* Brand & Series Header (Clean unboxed text) */}
                    <div className="absolute top-3 left-3 text-[11px] font-mono text-slate-600 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded border border-slate-200/90 shadow-2xs z-10">
                      <span className="font-semibold text-slate-900">{phone.brand}</span>
                      <span aria-hidden="true" className="mx-1 text-slate-300">·</span>
                      <span>{phone.series}</span>
                    </div>

                    {/* Tier Indicator */}
                    <div className="absolute top-3 right-3 text-[10px] font-mono font-semibold text-slate-700 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded border border-slate-200/90 shadow-2xs z-10">
                      {phone.tierLabel}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {phone.releaseYear} Release
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors mt-0.5">
                        {phone.name}
                      </h3>
                      
                      {/* Key specifications preview */}
                      <div className="mt-3 space-y-2 text-xs">
                        <div className="flex items-start gap-2 text-slate-600">
                          <Cpu className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium">{phone.specs.chipset}</span>
                        </div>

                        <div className="flex items-start gap-2 text-slate-600">
                          <Smartphone className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{phone.specs.display}</span>
                        </div>

                        <div className="flex items-start gap-2 text-slate-600">
                          <Camera className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{phone.specs.rearCameras}</span>
                        </div>

                        <div className="flex items-start gap-2 text-slate-600">
                          <Battery className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{phone.specs.batteryAndCharging}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pre-Owned Market Recommendation Tag */}
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-900">Testing Checklist: </span>
                      {phone.usedMarketGuide.recommendedInspection.slice(0, 2).join(' · ')}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setActiveModalPhone(phone)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
                      >
                        <span>Specifications</span>
                        <ExternalLink className="w-3 h-3 text-orange-600" />
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleCompare(phone)}
                        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                          isCompared
                            ? 'bg-orange-50 text-orange-700 border-orange-200'
                            : 'text-slate-600 bg-white hover:bg-slate-50 border-slate-200'
                        }`}
                      >
                        <Scale className="w-3 h-3" />
                        <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Discovery Disclosure Banner */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <p>
              {SMARTPHONE_DISCOVERY_NOTICE}
            </p>
          </div>
          <span className="text-orange-600 font-semibold whitespace-nowrap shrink-0">
            ReTech Hub · Bengaluru, India
          </span>
        </div>

      </div>

      {/* Floating Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white border border-slate-300 shadow-xl rounded-xl px-4 py-3 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-orange-600" />
            <span className="font-semibold text-slate-900">
              {compareList.length} smartphone{compareList.length > 1 ? 's' : ''} in comparison
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCompareOpen(true)}
              className="px-3.5 py-1.5 text-xs font-semibold bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors shadow-xs"
            >
              Compare Specs
            </button>
            <button
              onClick={() => setCompareList([])}
              className="text-slate-500 hover:text-slate-800 px-2 py-1"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Specification Detail Modal */}
      <SmartphoneDetailModal
        phone={activeModalPhone}
        onClose={() => setActiveModalPhone(null)}
      />

      {/* Side-by-side Compare Modal */}
      {isCompareOpen && (
        <SmartphoneCompareModal
          phones={compareList}
          onRemove={(id) => setCompareList(compareList.filter(p => p.id !== id))}
          onClear={() => setCompareList([])}
          onClose={() => setIsCompareOpen(false)}
        />
      )}

    </section>
  );
};
