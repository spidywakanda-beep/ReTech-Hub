import React, { useState, useMemo } from 'react';
import { Search, ShieldCheck, Scale, ExternalLink, Cpu, HardDrive, Battery, CheckCircle2, Info, ChevronDown, ChevronUp, SlidersHorizontal, Check } from 'lucide-react';
import { LAPTOP_CATALOG, LAPTOP_DISCOVERY_NOTICE, LaptopModel } from '../data/laptopCatalog';
import { LaptopDeviceVisual } from './LaptopDeviceVisual';
import { LaptopDetailModal } from './LaptopDetailModal';
import { LaptopCompareModal } from './LaptopCompareModal';

export const DeviceShowcase: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'in_stock'>('in_stock');
  const [selectedPurpose, setSelectedPurpose] = useState<string>('all');
  const [priceRangeMax, setPriceRangeMax] = useState<number>(120000);
  const [sortBy, setSortBy] = useState<'featured' | 'price_low' | 'price_high' | 'discount'>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLaptop, setActiveLaptop] = useState<LaptopModel | null>(null);
  const [compareList, setCompareList] = useState<LaptopModel[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Accordion state for sidebar
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  // Toggle brand checkbox
  const toggleBrand = (brandKey: string) => {
    if (selectedBrands.includes(brandKey)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brandKey));
    } else {
      setSelectedBrands([...selectedBrands, brandKey]);
    }
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedSeries('all');
    setSelectedPurpose('all');
    setPriceRangeMax(120000);
    setSearchQuery('');
    setSortBy('featured');
  };

  // Filtered & Sorted laptops
  const filteredLaptops = useMemo(() => {
    let result = LAPTOP_CATALOG.filter((laptop) => {
      // Brand filter (if brands selected)
      if (selectedBrands.length > 0 && !selectedBrands.includes(laptop.brandKey)) {
        return false;
      }
      // Series filter
      if (selectedSeries !== 'all' && laptop.series.toLowerCase() !== selectedSeries.toLowerCase()) {
        return false;
      }
      // Price range filter
      if (laptop.indicativePriceInr > priceRangeMax) {
        return false;
      }
      // Purpose filter
      if (selectedPurpose !== 'all') {
        const matchesTag = laptop.purposeTags.some((tag) =>
          tag.toLowerCase().includes(selectedPurpose.toLowerCase())
        );
        if (!matchesTag) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = laptop.name.toLowerCase().includes(q);
        const matchesProc = laptop.specs.processor.toLowerCase().includes(q);
        const matchesBrand = laptop.brand.toLowerCase().includes(q);
        const matchesSeries = laptop.series.toLowerCase().includes(q);
        if (!matchesName && !matchesProc && !matchesBrand && !matchesSeries) {
          return false;
        }
      }
      return true;
    });

    // Sorting
    if (sortBy === 'price_low') {
      result = [...result].sort((a, b) => a.indicativePriceInr - b.indicativePriceInr);
    } else if (sortBy === 'price_high') {
      result = [...result].sort((a, b) => b.indicativePriceInr - a.indicativePriceInr);
    } else if (sortBy === 'discount') {
      result = [...result].sort((a, b) => b.discountPercent - a.discountPercent);
    }

    return result;
  }, [selectedBrands, selectedSeries, priceRangeMax, selectedPurpose, searchQuery, sortBy]);

  // Compute dynamic brand counts
  const brandList = useMemo(() => {
    const counts: Record<string, number> = {
      dell: 0,
      apple: 0,
      lenovo: 0,
      hp: 0,
      asus: 0
    };
    LAPTOP_CATALOG.forEach((l) => {
      if (counts[l.brandKey] !== undefined) {
        counts[l.brandKey]++;
      }
    });

    return [
      { key: 'dell', name: 'Dell (Inspiron, XPS, Latitude)', count: counts.dell },
      { key: 'apple', name: 'Apple MacBook (Air & Pro)', count: counts.apple },
      { key: 'lenovo', name: 'Lenovo (ThinkPad, IdeaPad, Yoga)', count: counts.lenovo },
      { key: 'hp', name: 'HP (EliteBook, Pavilion, Envy)', count: counts.hp },
      { key: 'asus', name: 'ASUS (VivoBook & Zenbook)', count: counts.asus },
    ];
  }, []);

  // Compute available series based on selected brand
  const availableSeriesList = useMemo(() => {
    let pool = LAPTOP_CATALOG;
    if (selectedBrands.length > 0) {
      pool = pool.filter((l) => selectedBrands.includes(l.brandKey));
    }
    const seriesSet = Array.from(new Set(pool.map((l) => l.series)));
    return ['all', ...seriesSet];
  }, [selectedBrands]);

  const toggleCompare = (laptop: LaptopModel) => {
    if (compareList.some((l) => l.id === laptop.id)) {
      setCompareList(compareList.filter((l) => l.id !== laptop.id));
    } else {
      if (compareList.length >= 2) {
        setCompareList([compareList[0], laptop]);
      } else {
        setCompareList([...compareList, laptop]);
      }
    }
  };

  // Active brand display name for breadcrumbs
  const breadcrumbBrandLabel =
    selectedBrands.length === 1
      ? LAPTOP_CATALOG.find((l) => l.brandKey === selectedBrands[0])?.brand || 'All'
      : selectedBrands.length === 0
      ? 'All Brands'
      : `${selectedBrands.length} Brands Selected`;

  return (
    <section id="laptops" className="py-16 lg:py-20 border-b border-slate-200/90 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1.5 font-semibold">
              <span>Section 02</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Refurbished Workstations & MacBooks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Buy Refurbished Laptops
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Explore authentic Dell (Inspiron, XPS, Latitude), Apple (MacBook Air, MacBook Pro), Lenovo (ThinkPad, IdeaPad, Yoga), HP (Pavilion, Envy, EliteBook), and ASUS (VivoBook, Zenbook) models. Tested on 40 laboratory inspection checkpoints at our Bengaluru facility.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 max-w-xs shrink-0 shadow-2xs">
            <span className="font-semibold text-slate-900">Owner Sanfi Standard:</span> Every laptop includes SSD SMART health verification, Cinebench thermal profiling, and physical key actuation testing.
          </div>
        </div>

        {/* ReTech Hub Refurbished Layout: Left Sidebar + Right Product Feed */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mt-6">
          
          {/* ========================================================= */}
          {/* LEFT SIDEBAR: FILTERS */}
          {/* ========================================================= */}
          <aside className="w-full lg:w-72 shrink-0 bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs space-y-6">
            
            {/* Sidebar Header with Clear Filters */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-orange-600" />
                <span>Filters</span>
              </h3>
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs font-semibold text-teal-600 hover:text-teal-700 hover:underline"
              >
                Clear Filters
              </button>
            </div>

            {/* 1. Product Type */}
            <div className="border-b border-slate-100 pb-4">
              <button
                type="button"
                onClick={() => setIsTypeOpen(!isTypeOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-900 uppercase tracking-wider py-1"
              >
                <span>Product Type</span>
                {isTypeOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {isTypeOpen && (
                <div className="mt-3 space-y-2">
                  <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={true}
                      readOnly
                      className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300"
                    />
                    <span className="font-medium">Laptop ({LAPTOP_CATALOG.length})</span>
                  </label>
                </div>
              )}
            </div>

            {/* 2. Availability */}
            <div className="border-b border-slate-100 pb-4">
              <button
                type="button"
                onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-900 uppercase tracking-wider py-1"
              >
                <span>Availability</span>
                {isAvailabilityOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {isAvailabilityOpen && (
                <div className="mt-3 space-y-2.5 text-xs text-slate-700">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={availabilityFilter === 'in_stock' || availabilityFilter === 'all'}
                      onChange={() => setAvailabilityFilter('in_stock')}
                      className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300"
                    />
                    <span className="font-medium">In Stock (Bengaluru Hub)</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={availabilityFilter === 'all'}
                      onChange={() => setAvailabilityFilter(availabilityFilter === 'all' ? 'in_stock' : 'all')}
                      className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300"
                    />
                    <span className="text-slate-500">Out Of Stock Models</span>
                  </label>
                </div>
              )}
            </div>

            {/* 3. Brand Filter */}
            <div className="border-b border-slate-100 pb-4">
              <div className="flex items-center justify-between py-1">
                <button
                  type="button"
                  onClick={() => setIsBrandOpen(!isBrandOpen)}
                  className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider"
                >
                  <span>Brand</span>
                  {isBrandOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {selectedBrands.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedBrands([])}
                    className="text-[11px] text-teal-600 hover:underline font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {isBrandOpen && (
                <div className="mt-3 space-y-2.5 text-xs text-slate-700">
                  {brandList.map((b) => (
                    <label key={b.key} className="flex items-center justify-between cursor-pointer select-none">
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(b.key)}
                          onChange={() => toggleBrand(b.key)}
                          className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500 border-slate-300"
                        />
                        <span className={selectedBrands.includes(b.key) ? 'font-bold text-slate-900' : 'text-slate-700'}>
                          {b.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">({b.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Price Range */}
            <div>
              <button
                type="button"
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-slate-900 uppercase tracking-wider py-1"
              >
                <span>Price Range</span>
                {isPriceOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>

              {isPriceOpen && (
                <div className="mt-3 space-y-3">
                  <input
                    type="range"
                    min={25000}
                    max={150000}
                    step={2500}
                    value={priceRangeMax}
                    onChange={(e) => setPriceRangeMax(Number(e.target.value))}
                    className="w-full accent-teal-600 cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                    <span>Min: ₹25,000</span>
                    <span className="font-bold text-slate-900">Max: ₹{priceRangeMax.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}
            </div>

          </aside>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: BREADCRUMBS, SORT & HORIZONTAL LAPTOP CARDS */}
          {/* ========================================================= */}
          <div className="flex-1 w-full space-y-5">
            
            {/* Top Bar: Breadcrumb Navigation & Sort Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="text-xs text-slate-500 font-medium">
                <ol className="flex items-center gap-1.5 flex-wrap">
                  <li>
                    <a href="#hero" className="hover:text-slate-900">Home</a>
                  </li>
                  <li aria-hidden="true" className="text-slate-300">/</li>
                  <li>
                    <span className="hover:text-slate-900">Buy Refurbished Laptop</span>
                  </li>
                  <li aria-hidden="true" className="text-slate-300">/</li>
                  <li className="font-bold text-slate-900">
                    Buy Refurbished {breadcrumbBrandLabel}
                  </li>
                </ol>
              </nav>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 shrink-0">
                <label htmlFor="laptop-sort" className="text-xs font-bold text-slate-700 tracking-wider font-mono">
                  SORT BY:
                </label>
                <select
                  id="laptop-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:border-orange-500"
                >
                  <option value="featured">Featured Benchmarks</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="discount">Highest Discount %</option>
                </select>
              </div>

            </div>

            {/* Series Filter Quick Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
                Series:
              </span>
              {availableSeriesList.map((series) => {
                const isSelected = selectedSeries.toLowerCase() === series.toLowerCase();
                return (
                  <button
                    key={series}
                    type="button"
                    onClick={() => setSelectedSeries(series)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'bg-orange-600 text-white font-semibold shadow-2xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {series === 'all' ? 'All Series' : series}
                  </button>
                );
              })}
            </div>

            {/* Results Count & Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-500 font-mono">
                Showing <span className="font-bold text-slate-900">{filteredLaptops.length}</span> verified certified laptop models
              </div>

              {/* Fast Keyword Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter series, i5, M1..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-7 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-700"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Laptops Horizontal Cards Feed (Exact Reference from Screenshot 2026-10-23 154941.png) */}
            {filteredLaptops.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 space-y-3">
                <p className="text-sm font-semibold text-slate-800">No refurbished laptop models matched your active filters.</p>
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-teal-600 hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {filteredLaptops.map((laptop) => {
                  const isCompared = compareList.some((l) => l.id === laptop.id);
                  const savingsInr = laptop.originalEstimatedMrpInr - laptop.indicativePriceInr;
                  const monthlyBenchmark = Math.round(laptop.indicativePriceInr / 20);

                  return (
                    <div
                      key={laptop.id}
                      className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all overflow-hidden shadow-2xs hover:shadow-xs group flex flex-col md:flex-row"
                    >
                      {/* Left Column: Authentic Open Laptop Photo */}
                      <div className="w-full md:w-72 lg:w-80 bg-white border-b md:border-b-0 md:border-r border-slate-100 p-5 relative flex items-center justify-center shrink-0">
                        
                        {/* Top Left: RETECH ASSURED Seal */}
                        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-teal-800 text-[10px] font-mono font-bold z-10 shadow-2xs">
                          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                          <span>RETECH ASSURED</span>
                        </div>

                        {/* Top Right: Savings Tag */}
                        <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-mono font-bold z-10 shadow-2xs">
                          ₹{savingsInr.toLocaleString('en-IN')} OFF
                        </div>

                        {/* Real Handset/Laptop Image */}
                        <div className="pt-6 w-full flex items-center justify-center">
                          <LaptopDeviceVisual laptop={laptop} size="card" />
                        </div>
                      </div>

                      {/* Right Column: Model Specs, Badges, Price & Purpose Chips */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        
                        <div>
                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                            {laptop.name} - Refurbished
                          </h3>

                          {/* Badges: Lowest Price & Rating */}
                          <div className="flex items-center gap-2 mt-2">
                            <span className="px-2.5 py-0.5 rounded bg-[#1e2e5c] text-white text-[10px] font-bold tracking-wide uppercase">
                              Lowest Price
                            </span>
                            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              <span>4.6</span>
                              <span className="text-amber-500">★</span>
                            </div>
                            <span className="text-xs text-slate-400 font-mono">
                              · {laptop.specs.weight}
                            </span>
                          </div>

                          {/* Price Row */}
                          <div className="mt-3 flex items-baseline gap-2">
                            <span className="text-sm font-bold text-red-600 font-mono">
                              -{laptop.discountPercent}%
                            </span>
                            <span className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                              ₹{laptop.indicativePriceInr.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs text-slate-400 line-through font-mono">
                              ₹{laptop.originalEstimatedMrpInr.toLocaleString('en-IN')}
                            </span>
                          </div>

                          {/* Indicative Benchmark / EMI note */}
                          <div className="text-xs text-slate-500 font-mono mt-0.5">
                            ₹{monthlyBenchmark.toLocaleString('en-IN')}/month Indicative Benchmark · No Cost Verification
                          </div>

                          {/* Purpose Chips (Gray rounded pills with icons) */}
                          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-100">
                            {laptop.purposeTags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-md bg-slate-100/90 text-slate-700 text-xs font-medium border border-slate-200/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Hardware Summary */}
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-2">
                              <Cpu className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                              <span className="font-medium truncate">{laptop.specs.processor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <HardDrive className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                              <span className="truncate">{laptop.specs.ram} RAM · {laptop.specs.storage}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Battery className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="font-mono text-emerald-700">{laptop.specs.batteryHealthPercent}% Health Retention</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                              <span className="truncate">Grade {laptop.conditionGrade} Condition</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-2 flex flex-wrap items-center justify-end gap-2.5 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => toggleCompare(laptop)}
                            className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                              isCompared
                                ? 'bg-orange-50 text-orange-700 border-orange-200'
                                : 'text-slate-600 bg-white hover:bg-slate-50 border-slate-200'
                            }`}
                          >
                            <Scale className="w-3.5 h-3.5" />
                            <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setActiveLaptop(laptop)}
                            className="inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs focus-visible:outline-2 focus-visible:outline-orange-500"
                          >
                            <span>Inspection Sheet</span>
                            <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Informational Benchmark Disclosure Notice */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono shadow-2xs">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <p>{LAPTOP_DISCOVERY_NOTICE}</p>
              </div>
              <span className="text-orange-600 font-semibold whitespace-nowrap shrink-0">
                Bengaluru Walk-in Facility
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Compare Bar for Laptops */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40 bg-white border border-slate-300 shadow-xl rounded-xl px-4 py-3 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-orange-600" />
            <span className="font-semibold text-slate-900">
              {compareList.length} laptop{compareList.length > 1 ? 's' : ''} in comparison
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

      {/* Laptop Detail Modal */}
      <LaptopDetailModal
        laptop={activeLaptop}
        onClose={() => setActiveLaptop(null)}
      />

      {/* Side-by-side Laptop Compare Modal */}
      {isCompareOpen && (
        <LaptopCompareModal
          laptops={compareList}
          onRemove={(id) => setCompareList(compareList.filter((l) => l.id !== id))}
          onClear={() => setCompareList([])}
          onClose={() => setIsCompareOpen(false)}
        />
      )}

    </section>
  );
};
