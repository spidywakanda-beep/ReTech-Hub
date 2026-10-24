import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  X,
  Layers,
  Wrench,
  Sparkles,
  Info,
  Clock,
  Shield,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Cpu,
  Flame,
  ArrowRight
} from 'lucide-react';
import {
  SMARTPHONE_DISPLAY_CATALOG,
  DISPLAY_SERVICE_CATEGORIES,
  BRAND_GROUPS,
  SCREEN_TYPE_OPTIONS,
  REPAIR_CATEGORY_OPTIONS
} from '../data/displayRepairCatalog';
import { DisplayDeviceModel, ScreenFormFactor, RepairCategory } from '../types/displayCatalog';

export const DisplayGlassCatalog: React.FC = () => {
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('All Brands');
  const [selectedScreenType, setSelectedScreenType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modal State
  const [selectedDevice, setSelectedDevice] = useState<DisplayDeviceModel | null>(null);

  // Feasibility Checker State
  const [showFeasibilityChecker, setShowFeasibilityChecker] = useState(false);
  const [triageAnswers, setTriageAnswers] = useState<{
    displayTurnsOn: boolean | null;
    touchResponsive: boolean | null;
    noInkBleedOrLines: boolean | null;
  }>({
    displayTurnsOn: null,
    touchResponsive: null,
    noInkBleedOrLines: null
  });

  // Category Reference Accordion State
  const [activeCategoryTab, setActiveCategoryTab] = useState<RepairCategory>('front-glass-flat');

  // Filtered devices
  const filteredDevices = useMemo(() => {
    return SMARTPHONE_DISPLAY_CATALOG.filter((device) => {
      // Brand Filter
      if (selectedBrand !== 'All Brands' && device.brand !== selectedBrand) {
        return false;
      }

      // Screen Type Filter
      if (selectedScreenType !== 'all' && device.screenType !== selectedScreenType) {
        return false;
      }

      // Service Category Filter
      if (selectedCategory !== 'all') {
        if (!device.applicableServices.includes(selectedCategory as RepairCategory)) {
          return false;
        }
      }

      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = device.modelName.toLowerCase().includes(query);
        const matchesBrand = device.brand.toLowerCase().includes(query);
        const matchesSeries = device.series.toLowerCase().includes(query);
        const matchesDisplay = device.displayTechnology.toLowerCase().includes(query);
        const matchesIdentifiers = device.modelNumberIdentifiers.some(id => 
          id.toLowerCase().includes(query)
        );
        return matchesName || matchesBrand || matchesSeries || matchesDisplay || matchesIdentifiers;
      }

      return true;
    });
  }, [searchQuery, selectedBrand, selectedScreenType, selectedCategory]);

  // Brand device counts
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Brands': SMARTPHONE_DISPLAY_CATALOG.length };
    SMARTPHONE_DISPLAY_CATALOG.forEach(d => {
      counts[d.brand] = (counts[d.brand] || 0) + 1;
    });
    return counts;
  }, []);

  // Feasibility determination
  const triageResult = useMemo(() => {
    if (
      triageAnswers.displayTurnsOn === null ||
      triageAnswers.touchResponsive === null ||
      triageAnswers.noInkBleedOrLines === null
    ) {
      return null;
    }

    const isGlassOnlyEligible = 
      triageAnswers.displayTurnsOn === true &&
      triageAnswers.touchResponsive === true &&
      triageAnswers.noInkBleedOrLines === true;

    return isGlassOnlyEligible ? 'glass-only' : 'display-assembly';
  }, [triageAnswers]);

  const resetTriage = () => {
    setTriageAnswers({
      displayTurnsOn: null,
      touchResponsive: null,
      noInkBleedOrLines: null
    });
  };

  return (
    <section id="display-catalog" className="py-20 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-xs font-semibold text-orange-800 uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-orange-600" />
            <span>Smartphone Glass & Display Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Glass Replacement & Display Repair Catalog
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Bengaluru’s verified reference catalog for Apple iPhone and Android display refurbishing. Compare 
            <span className="font-semibold text-slate-800"> Glass-Only OCA lamination</span> vs. 
            <span className="font-semibold text-slate-800"> Full Display Assembly replacement</span> across 
            curved-edge and flat-screen models.
          </p>
        </div>

        {/* Interactive Feasibility Triage Banner */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
          <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>30-Second Feasibility Triage</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mt-1 text-white">
                Can your phone be repaired with Glass-Only (OCA) replacement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Glass-only repair preserves your 100% factory original OLED/LCD display while saving up to 60%. Answer 3 quick technical checks to verify eligibility.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowFeasibilityChecker(!showFeasibilityChecker)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold bg-orange-500 hover:bg-orange-400 text-white rounded-xl transition-all shadow-sm active:scale-98 shrink-0"
            >
              <span>{showFeasibilityChecker ? 'Hide Triage Tool' : 'Start Feasibility Check'}</span>
              {showFeasibilityChecker ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Collapsible Triage Flow */}
          {showFeasibilityChecker && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Question 1 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">CHECK 01</span>
                    {triageAnswers.displayTurnsOn !== null && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${triageAnswers.displayTurnsOn ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                        {triageAnswers.displayTurnsOn ? 'Passed' : 'Failed'}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">
                    Does the screen light up fully with normal brightness?
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    The panel should display icons, wallpaper, and lock screen without staying black or blank.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setTriageAnswers(prev => ({ ...prev, displayTurnsOn: true }))}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        triageAnswers.displayTurnsOn === true
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      Yes, Lights Up
                    </button>
                    <button
                      type="button"
                      onClick={() => setTriageAnswers(prev => ({ ...prev, displayTurnsOn: false }))}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        triageAnswers.displayTurnsOn === false
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      No / Black Screen
                    </button>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">CHECK 02</span>
                    {triageAnswers.noInkBleedOrLines !== null && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${triageAnswers.noInkBleedOrLines ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                        {triageAnswers.noInkBleedOrLines ? 'Passed' : 'Failed'}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">
                    Is the display free of ink spots & colored lines?
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    No black circular "ink leak" blotches, green vertical lines, pink stripes, or white flashes.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setTriageAnswers(prev => ({ ...prev, noInkBleedOrLines: true }))}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        triageAnswers.noInkBleedOrLines === true
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      Clean / No Spots
                    </button>
                    <button
                      type="button"
                      onClick={() => setTriageAnswers(prev => ({ ...prev, noInkBleedOrLines: false }))}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        triageAnswers.noInkBleedOrLines === false
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      Has Spots / Lines
                    </button>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">CHECK 03</span>
                    {triageAnswers.touchResponsive !== null && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${triageAnswers.touchResponsive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                        {triageAnswers.touchResponsive ? 'Passed' : 'Failed'}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">
                    Does touch respond normally across the entire surface?
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Swiping, typing on keyboard, and dragging app icons work smoothly with no dead spots.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setTriageAnswers(prev => ({ ...prev, touchResponsive: true }))}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        triageAnswers.touchResponsive === true
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      Touch Works 100%
                    </button>
                    <button
                      type="button"
                      onClick={() => setTriageAnswers(prev => ({ ...prev, touchResponsive: false }))}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        triageAnswers.touchResponsive === false
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      Touch Glitches / Dead
                    </button>
                  </div>
                </div>

              </div>

              {/* Triage Decision Output */}
              {triageResult !== null && (
                <div className="mt-5 p-5 rounded-xl border transition-all bg-white shadow-xs">
                  {triageResult === 'glass-only' ? (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            <span>High Feasibility: Glass-Only Replacement Candidate</span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 mt-1">
                            Your device is eligible for Front Glass (OCA) Refurbishing
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                            Because your internal OLED/LCD panel and digitizer layer are completely intact, only the cracked exterior top glass needs replacement. This preserves your genuine factory display panel, true color calibration, and refresh rate while saving 50%–70% compared to full folder assembly.
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={resetTriage}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline underline-offset-2 shrink-0"
                      >
                        Reset Check
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                            <span>Technical Advisory: Complete Display Assembly Required</span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 mt-1">
                            Display damage has compromised the inner matrix or digitizer flex
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                            Because the underlying display shows ink bleeding, lines, black screen, or unresponsive touch, replacing only the glass is technically unsuitable. A Complete Display Assembly (Folder / Combo) with integrated digitizer and pre-bonded frame is required to restore complete factory performance.
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={resetTriage}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline underline-offset-2 shrink-0"
                      >
                        Reset Check
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Repair Process Knowledge Accordion Strip */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Engineering Disciplines</span>
              <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                Understand the 5 Distinct Smartphone Repair Categories
              </h3>
            </div>
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {DISPLAY_SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => setActiveCategoryTab(cat.category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategoryTab === cat.category
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.title.split('(')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Detail Card */}
          {(() => {
            const activeCat = DISPLAY_SERVICE_CATEGORIES.find(c => c.category === activeCategoryTab);
            if (!activeCat) return null;
            return (
              <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                      {activeCat.subtitle}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900">
                    {activeCat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeCat.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-800">Ideal Candidate: </span>
                    <span className="text-xs text-slate-600">{activeCat.idealCandidate}</span>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
                  <div>
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-600" />
                      Bench Requirements:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600">
                      {activeCat.keyRequirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-orange-600" />
                      Laboratory Equipment:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600">
                      {activeCat.equipmentUsed.map((eq, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Catalog Search & Filters Strip */}
        <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          
          {/* Top row: Search input + Screen type + Service category */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search model (e.g. S23 Ultra, iPhone 15 Pro, Nord 3, Pixel 8, Reno)..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Screen Type Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedScreenType}
                onChange={(e) => setSelectedScreenType(e.target.value)}
                className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              >
                {SCREEN_TYPE_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Repair Category Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              >
                {REPAIR_CATEGORY_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Brand Pills Bar */}
          <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-xs font-semibold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Brands:
            </span>
            {BRAND_GROUPS.map((brand) => {
              const count = brandCounts[brand] || 0;
              const isSelected = selectedBrand === brand;
              return (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{brand}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-orange-700 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter & Active Filters Summary */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-500 px-1 gap-2">
          <div>
            Showing <span className="font-bold text-slate-900">{filteredDevices.length}</span> verified smartphone models in repair catalog
          </div>
          {(selectedBrand !== 'All Brands' || selectedScreenType !== 'all' || selectedCategory !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedBrand('All Brands');
                setSelectedScreenType('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2 flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              Reset all active filters
            </button>
          )}
        </div>

        {/* Device Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDevices.map((device) => {
            const isCurved = device.screenType === 'curved';
            const isFoldable = device.screenType === 'foldable';

            return (
              <div
                key={device.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200/60 uppercase tracking-wide">
                      {device.brand}
                    </span>

                    {/* Screen Type Badge */}
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 ${
                      isCurved
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : isFoldable
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      <Smartphone className="w-3 h-3" />
                      <span>{isCurved ? '3D Curved Edge' : isFoldable ? 'Foldable Design' : 'Flat Screen'}</span>
                    </span>
                  </div>

                  {/* Model Name */}
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {device.modelName}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {device.series} • Released {device.releaseYear}
                  </div>

                  {/* Display & Glass Specifications Strip */}
                  <div className="mt-4 p-3 bg-slate-50/80 rounded-xl border border-slate-100 space-y-2 text-xs">
                    <div>
                      <div className="text-[11px] font-medium text-slate-400">Display Technology</div>
                      <div className="font-semibold text-slate-800 leading-snug mt-0.5">
                        {device.displayTechnology}
                      </div>
                    </div>
                    <div className="pt-1.5 border-t border-slate-200/60">
                      <div className="text-[11px] font-medium text-slate-400">Glass Protection Layer</div>
                      <div className="font-medium text-slate-700 leading-snug mt-0.5">
                        {device.glassProtection}
                      </div>
                    </div>
                  </div>

                  {/* Feasibility Assessment Pill */}
                  <div className="mt-3.5">
                    <div className="flex items-center gap-1.5 text-xs">
                      {device.glassOnlyFeasibility === 'eligible' ? (
                        <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200/80 w-full">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="font-semibold text-[11px]">Glass-Only OCA Refurbishing Eligible</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-200/80 w-full">
                          <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="font-semibold text-[11px]">Outer Screen Eligible | Inner Folder Swap</span>
                        </div>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {device.feasibilityTechnicalNotes}
                    </p>
                  </div>

                  {/* Applicable Service Badges */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                    {device.applicableServices.map(srv => {
                      const labelMap: Record<RepairCategory, string> = {
                        'front-glass-flat': 'Flat Glass OCA',
                        'front-glass-curved': '3D Curved Glass',
                        'display-assembly': 'Full Folder Combo',
                        'touch-diagnosis': 'Circuit Diagnostic',
                        'rear-glass': 'Back Glass Laser'
                      };
                      return (
                        <span key={srv} className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          {labelMap[srv]}
                        </span>
                      );
                    })}
                    {device.rearGlassAvailable && (
                      <span className="text-[10px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                        Back Glass Supported
                      </span>
                    )}
                  </div>

                </div>

                {/* Card Action */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>~{device.benchProtocol.turnaroundEstimate}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedDevice(device)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline underline-offset-4 transition-all"
                  >
                    <span>Inspect Bench Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredDevices.length === 0 && (
          <div className="mt-8 text-center py-16 bg-white border border-slate-200 rounded-2xl p-6">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching smartphone models found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find any devices matching "{searchQuery}" under the selected brand and screen filters. Try clearing your search term or adjusting filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedBrand('All Brands');
                setSelectedScreenType('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Model Detail Technical Inspection Modal */}
      {selectedDevice && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-start justify-between gap-4 shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wide">
                    {selectedDevice.brand} • {selectedDevice.series}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    selectedDevice.screenType === 'curved'
                      ? 'bg-purple-900/90 text-purple-200 border border-purple-700'
                      : selectedDevice.screenType === 'foldable'
                      ? 'bg-amber-900/90 text-amber-200 border border-amber-700'
                      : 'bg-emerald-900/90 text-emerald-200 border border-emerald-700'
                  }`}>
                    {selectedDevice.screenType === 'curved' ? '3D Curved Edge' : selectedDevice.screenType === 'foldable' ? 'Foldable Design' : 'Flat Screen'}
                  </span>
                </div>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {selectedDevice.modelName}
                </h3>
                <div className="text-xs text-slate-300 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span>Hardware Model IDs: <strong className="text-white font-mono">{selectedDevice.modelNumberIdentifiers.join(', ')}</strong></span>
                  <span>•</span>
                  <span>Bench Turnaround: <strong className="text-white">{selectedDevice.benchProtocol.turnaroundEstimate}</strong></span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDevice(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-800">
              
              {/* Device Identification Guide */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs flex items-start gap-2.5">
                <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">How to Verify Your Exact Model: </span>
                  <span className="text-slate-600">{selectedDevice.identificationGuide}</span>
                  <div className="mt-1 text-slate-500">
                    Avoid cross-compatibility assumptions: Displays from different generations or cellular sub-variants do not interlink.
                  </div>
                </div>
              </div>

              {/* Side-by-Side Comparison: Glass-Only vs Complete Assembly */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-orange-600" />
                  <span>Repair Technique Comparison for {selectedDevice.modelName}</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Glass-Only Card */}
                  <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        Option A: Glass-Only (OCA)
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Preserves OEM Panel
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-900">Recommended Part Grade:</span>
                        <div className="text-slate-700 mt-0.5">{selectedDevice.recommendedPartGrades.glassOnlyGrade}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Technical Prerequisites:</span>
                        <div className="text-slate-600 text-[11px] leading-relaxed mt-0.5">
                          {selectedDevice.feasibilityTechnicalNotes}
                        </div>
                      </div>
                      <div className="pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-800 font-medium">
                        ✓ Maintains genuine factory color matrix, TrueTone/PWM dimming, and native touch latency.
                      </div>
                    </div>
                  </div>

                  {/* Complete Assembly Card */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/80">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Option B: Complete Assembly
                      </span>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full">
                        Full Matrix Swap
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-900">Recommended Part Grade:</span>
                        <div className="text-slate-700 mt-0.5">{selectedDevice.recommendedPartGrades.fullAssemblyGrade}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">When Is It Required:</span>
                        <div className="text-slate-600 text-[11px] leading-relaxed mt-0.5">
                          Mandatory when inner OLED/LCD has purple/black ink bleeding, vertical green/pink lines, dead touch grid, or failure to light up.
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 font-medium">
                        ✓ Restores full functionality even if original display was completely crushed or liquid-damaged.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bench Refurbishing Protocol Breakdown */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5 mb-3">
                  <Wrench className="w-3.5 h-3.5 text-orange-600" />
                  <span>Certified Laboratory Bench Protocol</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-[11px] font-medium text-slate-400 block">Separation Technique</span>
                    <span className="font-bold text-slate-800 mt-1 block leading-snug">
                      {selectedDevice.benchProtocol.separationMethod}
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-[11px] font-medium text-slate-400 block">OCA Lamination Chamber</span>
                    <span className="font-bold text-slate-800 mt-1 block leading-snug">
                      {selectedDevice.benchProtocol.laminationPressure}
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-[11px] font-medium text-slate-400 block">Autoclave De-bubble Cycle</span>
                    <span className="font-bold text-slate-800 mt-1 block leading-snug">
                      {selectedDevice.benchProtocol.autoclaveProfile}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rear Glass Details (if applicable) */}
              {selectedDevice.rearGlassAvailable && (
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs">
                  <div className="flex items-center gap-2 text-blue-900 font-bold">
                    <Shield className="w-4 h-4 text-blue-700" />
                    <span>Rear Back Glass Restoration Available</span>
                  </div>
                  <p className="text-slate-600 text-[11px] mt-1 leading-relaxed">
                    Material: <strong className="text-slate-800">{selectedDevice.rearGlassMaterial}</strong>. 
                    Replaced utilizing automated high-frequency cold laser ablation to decouple rear adhesives without damaging wireless charging induction coils, NFC antennas, or battery cells.
                  </p>
                </div>
              )}

              {/* Physical Inspection Disclaimer */}
              <div className="p-3.5 bg-slate-100 rounded-xl text-[11px] text-slate-500 leading-relaxed border border-slate-200/80">
                <span className="font-semibold text-slate-700">*Bengaluru Laboratory Diagnostic Note: </span>
                Glass-only vs complete folder feasibility is strictly determined upon 40x microscopic bench inspection at our Bengaluru walk-in center. Quotes and part grading are finalized after confirming display IC flex continuity and touch digitizer impedance.
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500">
                ReTech Hub Bengaluru • Walk-in Diagnostic Bench
              </span>
              <button
                type="button"
                onClick={() => setSelectedDevice(null)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close Technical Sheet
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
