import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  Shield,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Info,
  Check,
  RotateCcw,
  Smartphone,
  HelpCircle,
  ArrowRight,
  Send,
  MapPin,
  Calendar,
  X,
  Plus,
  Trash2
} from 'lucide-react';
import {
  REPAIR_BRANDS,
  BRAND_MODELS_MAP,
  REPAIR_TYPES_CATALOG,
  RepairBrand,
  RepairModel,
  RepairTypeItem,
  isPincodeServiceable
} from '../data/repairBookingData';

type PincodeState = 'idle' | 'loading' | 'serviceable' | 'not_serviceable' | 'invalid';
type FilterCategory = 'All' | 'Screen' | 'Battery' | 'Camera' | 'Audio' | 'Charging' | 'Body' | 'Others';
type SortOption = 'popular' | 'price-asc' | 'price-desc';

const CATEGORIES: FilterCategory[] = [
  'All',
  'Screen',
  'Battery',
  'Camera',
  'Audio',
  'Charging',
  'Body',
  'Others'
];

export const RepairDeviceGrid: React.FC = () => {
  // Brand selection & combobox state
  const [selectedBrand, setSelectedBrand] = useState<RepairBrand | null>(
    () => REPAIR_BRANDS.find(b => b.id === 'apple') || REPAIR_BRANDS[0]
  );
  const [brandSearch, setBrandSearch] = useState('');
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const brandComboboxRef = useRef<HTMLDivElement>(null);

  // Model selection state & skeleton loading
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<RepairModel | null>(
    () => BRAND_MODELS_MAP['apple']?.[0] || null
  );
  const [modelSearch, setModelSearch] = useState('');
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const modelComboboxRef = useRef<HTMLDivElement>(null);

  // Pincode checker state (Persisted in localStorage)
  const [pincode, setPincode] = useState<string>(() => {
    try {
      return localStorage.getItem('retech_repair_pincode') || '560001';
    } catch {
      return '560001';
    }
  });
  const [pincodeInput, setPincodeInput] = useState<string>(pincode);
  const [pincodeState, setPincodeState] = useState<PincodeState>(() => {
    return isPincodeServiceable(pincode) ? 'serviceable' : 'idle';
  });
  const [isPincodeEditing, setIsPincodeEditing] = useState<boolean>(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Repair Grid Filters & Sort
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const [sortOption, setSortOption] = useState<SortOption>('popular');

  // Selected repair items (Cart)
  const [selectedRepairIds, setSelectedRepairIds] = useState<string[]>(['broken-screen-glass']);
  const [customIssueText, setCustomIssueText] = useState('');

  // Modals
  const [activeDetailItem, setActiveDetailItem] = useState<RepairTypeItem | null>(null);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [showBookingSummaryModal, setShowBookingSummaryModal] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Close comboboxes when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (brandComboboxRef.current && !brandComboboxRef.current.contains(event.target as Node)) {
        setIsBrandDropdownOpen(false);
      }
      if (modelComboboxRef.current && !modelComboboxRef.current.contains(event.target as Node)) {
        setIsModelDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Brand Selection with Skeleton Loading Simulation
  const handleSelectBrand = (brand: RepairBrand) => {
    setSelectedBrand(brand);
    setIsBrandDropdownOpen(false);
    setBrandSearch('');
    setIsModelLoading(true);

    // Simulate skeleton loading for dependent models
    setTimeout(() => {
      const models = BRAND_MODELS_MAP[brand.id] || BRAND_MODELS_MAP['others'] || [];
      setSelectedModel(models[0] || null);
      setModelSearch('');
      setIsModelLoading(false);
    }, 400);
  };

  // Handle Model Selection
  const handleSelectModel = (model: RepairModel) => {
    setSelectedModel(model);
    setIsModelDropdownOpen(false);
    setModelSearch('');
  };

  // Filtered brands for combobox
  const filteredBrands = useMemo(() => {
    if (!brandSearch.trim()) return REPAIR_BRANDS;
    const q = brandSearch.toLowerCase();
    return REPAIR_BRANDS.filter(b => b.name.toLowerCase().includes(q));
  }, [brandSearch]);

  // Filtered models for combobox
  const availableModels = useMemo(() => {
    if (!selectedBrand) return [];
    return BRAND_MODELS_MAP[selectedBrand.id] || BRAND_MODELS_MAP['others'] || [];
  }, [selectedBrand]);

  const filteredModels = useMemo(() => {
    if (!modelSearch.trim()) return availableModels;
    const q = modelSearch.toLowerCase();
    return availableModels.filter(m => 
      m.name.toLowerCase().includes(q) || 
      m.series.toLowerCase().includes(q) ||
      m.displayTech.toLowerCase().includes(q)
    );
  }, [availableModels, modelSearch]);

  // Handle Pincode Check
  const handleCheckPincode = (codeToCheck?: string) => {
    const code = (codeToCheck !== undefined ? codeToCheck : pincodeInput).trim();
    if (!/^\d{6}$/.test(code)) {
      setPincodeState('invalid');
      return;
    }

    setPincodeState('loading');
    setTimeout(() => {
      const serviceable = isPincodeServiceable(code);
      if (serviceable) {
        setPincode(code);
        setPincodeState('serviceable');
        setIsPincodeEditing(false);
        try {
          localStorage.setItem('retech_repair_pincode', code);
        } catch {
          // ignore localStorage err
        }
      } else {
        setPincodeState('not_serviceable');
        setIsPincodeEditing(false);
      }
    }, 500);
  };

  // Filter and Sort Repair Catalog Items
  const displayedRepairs = useMemo(() => {
    let items = [...REPAIR_TYPES_CATALOG];

    if (activeCategory !== 'All') {
      items = items.filter(r => r.category === activeCategory);
    }

    if (sortOption === 'price-asc') {
      items.sort((a, b) => a.basePrice - b.basePrice);
    } else if (sortOption === 'price-desc') {
      items.sort((a, b) => b.basePrice - a.basePrice);
    } else {
      // popular
      items.sort((a, b) => a.popularityRank - b.popularityRank);
    }

    return items;
  }, [activeCategory, sortOption]);

  // Toggle repair item selection
  const handleToggleRepair = (id: string) => {
    setSelectedRepairIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Total estimate calculation
  const totalEstimate = useMemo(() => {
    let sum = 0;
    selectedRepairIds.forEach(id => {
      const item = REPAIR_TYPES_CATALOG.find(r => r.id === id);
      if (item) sum += item.basePrice;
    });
    return sum;
  }, [selectedRepairIds]);

  return (
    <div className="space-y-12">
      {/* =========================================================================
          SECTION 1: DEVICE SELECTOR ROW
          - Device Image Panel (Left)
          - Brand Combobox (Searchable, 22+ brands)
          - Model Combobox (Searchable, dependent, skeleton loading)
          - Pincode Checker (5 states, inline validation, local storage)
      ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= DEVICE IMAGE PANEL (LEFT) ================= */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-50 to-slate-100/90 rounded-2xl border border-slate-200 text-center">
            
            <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
              <span className="font-semibold text-orange-600">{selectedBrand?.name || 'Device'}</span>
              <span>{selectedModel?.screenType === 'curved' ? 'Curved Display' : 'Flat Display'}</span>
            </div>

            {/* Handset Illustration / Visual */}
            <div className="relative w-full max-w-[200px] h-[280px] my-2 flex items-center justify-center">
              {isModelLoading ? (
                <div className="w-44 h-72 rounded-[32px] bg-slate-200 animate-pulse border-4 border-slate-300 flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-slate-400 animate-bounce" />
                </div>
              ) : selectedModel ? (
                <div 
                  className="relative w-44 h-72 rounded-[34px] p-2.5 shadow-xl transition-all duration-300 flex flex-col justify-between"
                  style={{ 
                    backgroundColor: selectedModel.accentColor || '#1e293b',
                    boxShadow: '0 20px 30px -10px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Outer Bezel and Screen Matrix */}
                  <div className={`w-full h-full rounded-[26px] bg-gradient-to-b ${selectedModel.imageBg} p-2 flex flex-col justify-between text-white relative overflow-hidden border border-white/10`}>
                    
                    {/* Top Speaker / Dynamic Island or Notch */}
                    <div className="flex items-center justify-center pt-0.5">
                      {selectedBrand?.id === 'apple' ? (
                        <div className="w-14 h-3.5 bg-black rounded-full border border-white/20 shadow-inner flex items-center justify-end px-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></span>
                        </div>
                      ) : (
                        <div className="w-2.5 h-2.5 bg-black rounded-full border border-white/30 shadow-inner"></div>
                      )}
                    </div>

                    {/* Middle Graphic / Diagnostics Wallpaper */}
                    <div className="text-center my-auto space-y-1">
                      <div className="text-[10px] font-mono tracking-widest uppercase text-slate-300">
                        {selectedBrand?.name}
                      </div>
                      <div className="text-xs font-bold leading-tight line-clamp-2 px-1 text-white">
                        {selectedModel.name}
                      </div>
                      <div className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        <Check className="w-2.5 h-2.5" />
                        <span>Eligible for Repair</span>
                      </div>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="flex items-center justify-center pb-1">
                      <div className="w-12 h-1 bg-white/40 rounded-full"></div>
                    </div>

                  </div>
                </div>
              ) : (
                <div className="w-44 h-72 rounded-[32px] bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-slate-400">
                  <Smartphone className="w-10 h-10 mb-2" />
                  <span className="text-xs">Select a Model</span>
                </div>
              )}
            </div>

            {/* Model Name Caption */}
            <div className="mt-3 w-full border-t border-slate-200/80 pt-3">
              <div className="text-sm font-bold text-slate-900 tracking-tight">
                {isModelLoading ? (
                  <div className="h-4 w-32 bg-slate-200 rounded animate-pulse mx-auto"></div>
                ) : (
                  selectedModel?.name || 'Select Smartphone Model'
                )}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                {isModelLoading ? (
                  <div className="h-3 w-24 bg-slate-200 rounded animate-pulse mx-auto mt-1"></div>
                ) : (
                  selectedModel ? `${selectedModel.series} · ${selectedModel.releaseYear}` : 'Verified Repair Specs'
                )}
              </div>
            </div>

          </div>

          {/* ================= RIGHT CONTROLS: BRAND + MODEL + PINCODE ================= */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Row Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 font-semibold mb-1">
                <span>Step 1</span>
                <span className="text-slate-300">/</span>
                <span>Select Device & Pincode</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Identify Your Phone & Service Availability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Choose from 20+ top smartphone brands to view model-calibrated parts, transparent pricing, and instant doorstep turnaround.
              </p>
            </div>

            {/* Cascading Searchable Comboboxes (Brand + Model) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 1. BRAND SEARCHABLE COMBOBOX */}
              <div className="relative" ref={brandComboboxRef}>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  1. Brand ({REPAIR_BRANDS.length} Available)
                </label>

                <div 
                  onClick={() => setIsBrandDropdownOpen(prev => !prev)}
                  className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100/90 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 cursor-pointer transition-colors shadow-2xs focus-within:ring-2 focus-within:ring-orange-500"
                >
                  <span className="truncate">
                    {selectedBrand ? selectedBrand.name : 'Select Smartphone Brand...'}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isBrandDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Brand Search Popover Menu */}
                {isBrandDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-2 animate-in fade-in zoom-in-95 duration-100 max-h-72 overflow-hidden flex flex-col">
                    
                    {/* Inline Search Input */}
                    <div className="relative px-1 pt-1">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={brandSearch}
                        onChange={(e) => setBrandSearch(e.target.value)}
                        placeholder="Search brands (e.g. Apple, Samsung, Nothing)..."
                        autoFocus
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    {/* Brand Options List */}
                    <div className="overflow-y-auto max-h-56 divide-y divide-slate-100 pr-1">
                      {filteredBrands.length === 0 ? (
                        <div className="p-3 text-center text-xs text-slate-400">
                          No matching brands found
                        </div>
                      ) : (
                        filteredBrands.map((brand) => {
                          const isSelected = selectedBrand?.id === brand.id;
                          return (
                            <button
                              key={brand.id}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectBrand(brand);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg text-left transition-colors ${
                                isSelected
                                  ? 'bg-orange-50 text-orange-700'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                              }`}
                            >
                              <span>{brand.name}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-orange-600" />}
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* 2. MODEL SEARCHABLE COMBOBOX (Disabled until brand chosen, skeleton loading) */}
              <div className="relative" ref={modelComboboxRef}>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    2. Model ({availableModels.length} Models)
                  </label>
                  {selectedModel && (
                    <span className="text-[10px] font-mono text-slate-500">
                      {selectedModel.releaseYear}
                    </span>
                  )}
                </div>

                {isModelLoading ? (
                  /* Skeleton Loading State for Model Dropdown */
                  <div className="w-full flex items-center justify-between bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 animate-pulse">
                    <div className="h-4 w-40 bg-slate-300 rounded"></div>
                    <div className="w-4 h-4 bg-slate-300 rounded"></div>
                  </div>
                ) : (
                  <div 
                    onClick={() => {
                      if (!selectedBrand) return;
                      setIsModelDropdownOpen(prev => !prev);
                    }}
                    className={`w-full flex items-center justify-between border rounded-xl px-4 py-3 text-sm font-semibold transition-colors shadow-2xs ${
                      !selectedBrand 
                        ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                        : 'bg-slate-50 hover:bg-slate-100/90 border-slate-300 text-slate-900 cursor-pointer focus-within:ring-2 focus-within:ring-orange-500'
                    }`}
                  >
                    <span className="truncate">
                      {selectedModel ? selectedModel.name : 'Select Smartphone Model...'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isModelDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                )}

                {/* Model Search Popover Menu */}
                {isModelDropdownOpen && !isModelLoading && (
                  <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-2 animate-in fade-in zoom-in-95 duration-100 max-h-72 overflow-hidden flex flex-col">
                    
                    {/* Inline Search Input */}
                    <div className="relative px-1 pt-1">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={modelSearch}
                        onChange={(e) => setModelSearch(e.target.value)}
                        placeholder={`Search ${selectedBrand?.name} models...`}
                        autoFocus
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-800"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>

                    {/* Model Options List */}
                    <div className="overflow-y-auto max-h-56 divide-y divide-slate-100 pr-1">
                      {filteredModels.length === 0 ? (
                        <div className="p-3 text-center text-xs text-slate-400">
                          No matching models found
                        </div>
                      ) : (
                        filteredModels.map((model) => {
                          const isSelected = selectedModel?.id === model.id;
                          return (
                            <button
                              key={model.id}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectModel(model);
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg text-left transition-colors ${
                                isSelected
                                  ? 'bg-orange-50 text-orange-700'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                              }`}
                            >
                              <div className="truncate pr-2">
                                <span className="block truncate">{model.name}</span>
                                <span className="text-[10px] text-slate-400 font-normal font-mono block">
                                  {model.displayTech}
                                </span>
                              </div>
                              {isSelected && <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />}
                            </button>
                          );
                        })
                      )}
                    </div>

                  </div>
                )}
              </div>

            </div>

            {/* Quick Model Chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-400 font-mono text-[11px] mr-1">Popular Quick Picks:</span>
              {['iphone-15-pro-max', 'iphone-14-pro', 'samsung-s24-ultra', 'oneplus-12', 'pixel-8-pro'].map((id) => {
                let foundModel: RepairModel | undefined;
                let foundBrand: RepairBrand | undefined;

                for (const b of REPAIR_BRANDS) {
                  const m = BRAND_MODELS_MAP[b.id]?.find(item => item.id === id);
                  if (m) {
                    foundModel = m;
                    foundBrand = b;
                    break;
                  }
                }

                if (!foundModel || !foundBrand) return null;
                const isCurrent = selectedModel?.id === foundModel.id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      if (foundBrand) setSelectedBrand(foundBrand);
                      if (foundModel) setSelectedModel(foundModel);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors ${
                      isCurrent
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {foundModel.name}
                  </button>
                );
              })}
            </div>

            {/* ================= PINCODE CHECKER (5 STATES) ================= */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>Doorstep Pickup & Delivery Check</span>
                </div>
                {pincodeState === 'serviceable' && !isPincodeEditing && (
                  <button
                    type="button"
                    onClick={() => setIsPincodeEditing(true)}
                    className="text-xs text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
                  >
                    Change pincode
                  </button>
                )}
              </div>

              {/* State 1: Serviceable (Sage green badge + text) */}
              {pincodeState === 'serviceable' && !isPincodeEditing && (
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs">
                  <div className="flex items-center gap-2 text-emerald-900 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Pincode <span className="font-mono font-bold">{pincode}</span>:{' '}
                      <strong className="text-emerald-800">Free pickup & delivery available · Delivery in 48-72 hrs</strong>
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 bg-white/70 px-2 py-0.5 rounded border border-emerald-200">
                    Bengaluru Hub Serviceable
                  </span>
                </div>
              )}

              {/* Input Row for Idle / Editing / Invalid / Loading states */}
              {(pincodeState !== 'serviceable' || isPincodeEditing) && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 max-w-md">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        maxLength={6}
                        value={pincodeInput}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                          setPincodeInput(val);
                          if (pincodeState === 'invalid') setPincodeState('idle');
                        }}
                        placeholder="Enter 6-digit PIN code (e.g. 560001)"
                        className={`w-full px-3.5 py-2.5 text-xs font-mono rounded-xl border bg-white focus:outline-none transition-colors ${
                          pincodeState === 'invalid'
                            ? 'border-red-400 focus:ring-2 focus:ring-red-400 text-red-900'
                            : 'border-slate-300 focus:ring-2 focus:ring-orange-500 text-slate-900'
                        }`}
                      />
                    </div>
                    <button
                      type="button"
                      disabled={pincodeState === 'loading'}
                      onClick={() => handleCheckPincode()}
                      className="px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-xl shadow-xs transition-colors shrink-0"
                    >
                      {pincodeState === 'loading' ? 'Checking...' : 'Check'}
                    </button>
                    {isPincodeEditing && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsPincodeEditing(false);
                          setPincodeInput(pincode);
                          setPincodeState('serviceable');
                        }}
                        className="px-2 py-2.5 text-xs text-slate-500 hover:text-slate-800"
                      >
                        Cancel
                      </button>
                    )}
                  </div>

                  {/* Inline Error State: Invalid */}
                  {pincodeState === 'invalid' && (
                    <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium pt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Enter a valid 6-digit pincode</span>
                    </div>
                  )}

                  {/* State 4: Not Serviceable (Notify Me form) */}
                  {pincodeState === 'not_serviceable' && (
                    <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-amber-900">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-amber-800">Not available yet — notify me</strong>
                          <span className="text-amber-700">
                            Doorstep delivery has not expanded to pincode {pincodeInput} yet. Walk-in service at our Bengaluru lab is always available.
                          </span>
                        </div>
                      </div>

                      {emailSubmitted ? (
                        <div className="flex items-center gap-1.5 text-emerald-700 font-semibold pt-1">
                          <Check className="w-3.5 h-3.5" />
                          <span>Thank you! We will notify you when doorstep service launches in your area.</span>
                        </div>
                      ) : (
                        <form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (notifyEmail.includes('@')) {
                              setEmailSubmitted(true);
                            }
                          }}
                          className="flex items-center gap-2 pt-1 max-w-sm"
                        >
                          <input
                            type="email"
                            required
                            value={notifyEmail}
                            onChange={(e) => setNotifyEmail(e.target.value)}
                            placeholder="Enter your email for notification..."
                            className="flex-1 px-3 py-1.5 text-xs bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-slate-800"
                          />
                          <button
                            type="submit"
                            className="px-3 py-1.5 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-lg transition-colors shrink-0"
                          >
                            Notify Me
                          </button>
                        </form>
                      )}
                    </div>
                  )}

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          SECTION 2: REPAIR TYPE GRID (3 Col Desktop, 2 Col Tablet, 1 Col Mobile)
          - Filters above grid: All, Screen, Battery, Camera, Audio, Charging, Body, Others
          - Sort: Price low-high, Popular
          - Non-original vs Original Comparison Tooltip / Link
          - 16 Repair Types with Circular Icon Chip, Small-Caps Title, 2-line clamped desc,
            "Read more" modal, large ₹ price, time badge, warranty badge, "Add" -> "Added ✓" toggle.
      ========================================================================= */}
      <div className="space-y-6">
        
        {/* Filter and Sort Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Side: Sort & Comparison Tooltip Trigger */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Price Comparison Tooltip / Modal Trigger */}
            <button
              type="button"
              onClick={() => setShowComparisonModal(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100/70 border border-orange-200 px-3 py-1.5 rounded-xl transition-colors shadow-2xs"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Non-original vs Original — what's the difference?</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              <span className="text-slate-400 font-mono text-[11px]">Sort:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 font-semibold focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
              >
                <option value="popular">Popular First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

          </div>

        </div>

        {/* ================= 3-COLUMN / 2-COLUMN / 1-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedRepairs.map((repair) => {
            const isAdded = selectedRepairIds.includes(repair.id);
            const IconComponent = repair.icon;

            return (
              <div
                key={repair.id}
                className={`relative flex flex-col justify-between p-5 rounded-2xl bg-white border transition-all duration-200 shadow-2xs ${
                  isAdded
                    ? 'border-slate-900 ring-2 ring-slate-900/10 bg-slate-50/30'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                
                {/* Top Row: Category Label & Circular Icon Chip (Top-Right) */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                      {repair.category} Repair
                    </span>
                    {/* Title in Uppercase Small Caps */}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 leading-snug">
                      {repair.title}
                    </h4>
                  </div>

                  {/* Circular Icon Chip (top-right) */}
                  <div 
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isAdded
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* 2-Line Clamped Description with inline "Read more" */}
                <div className="mb-4">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {repair.shortDescription}{' '}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveDetailItem(repair)}
                    className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2 mt-1 transition-colors"
                  >
                    <span>Read more</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Specific Text Area for "Other (describe issue)" */}
                {repair.id === 'other-issue' && isAdded && (
                  <div className="mb-4 p-2.5 bg-white border border-slate-200 rounded-xl space-y-1.5 animate-in fade-in">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      Describe your device symptom:
                    </label>
                    <textarea
                      rows={2}
                      value={customIssueText}
                      onChange={(e) => setCustomIssueText(e.target.value)}
                      placeholder="e.g. Phone randomly restarts when plugging into 65W charger..."
                      className="w-full text-xs p-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-orange-500 text-slate-800"
                    />
                  </div>
                )}

                {/* Bottom Section: Badges, Price & Action Button */}
                <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                  
                  {/* Badges: Time + Warranty */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{repair.estimatedTime}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                      <Shield className="w-3 h-3 text-emerald-600" />
                      <span>{repair.warranty}</span>
                    </span>
                  </div>

                  {/* Price & Add/Added Button */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div>
                      {repair.isStartingAt && (
                        <span className="text-[10px] text-slate-400 font-medium block">
                          Starting at
                        </span>
                      )}
                      <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                        ₹{repair.basePrice.toLocaleString('en-IN')}
                      </div>
                    </div>

                    {/* "Add" button that toggles to "Added ✓" (charcoal filled) with remove option */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleToggleRepair(repair.id)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-98 shadow-xs ${
                          isAdded
                            ? 'bg-slate-900 text-white hover:bg-slate-800'
                            : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-300'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Added ✓</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-slate-500" />
                            <span>Add</span>
                          </>
                        )}
                      </button>

                      {isAdded && (
                        <button
                          type="button"
                          onClick={() => handleToggleRepair(repair.id)}
                          title="Remove repair"
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* =========================================================================
          STICKY BOTTOM / DOCKED SUMMARY BAR (When items are selected)
      ========================================================================= */}
      {selectedRepairIds.length > 0 && (
        <div className="sticky bottom-4 z-30 bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in slide-in-from-bottom-3 duration-200">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
              {selectedRepairIds.length}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>{selectedBrand?.name} · {selectedModel?.name}</span>
                <span>•</span>
                <span className="text-emerald-400">Free Doorstep Pickup</span>
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Total Estimated Repair:{' '}
                <span className="text-orange-400 font-extrabold text-lg">
                  ₹{totalEstimate.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] text-slate-400 font-normal ml-1.5">(Itemized Quote)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setSelectedRepairIds([])}
              className="px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={() => setShowBookingSummaryModal(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-xs transition-all active:scale-98"
            >
              <span>Review & Reserve Slot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

      {/* =========================================================================
          MODAL 1: "READ MORE" REPAIR DETAIL POPOVER/MODAL
          Shows What's Included, Parts Quality, Time Taken, Warranty
      ========================================================================= */}
      {activeDetailItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <activeDetailItem.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    {activeDetailItem.category} Technical Protocol
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {activeDetailItem.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveDetailItem(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Close detail modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeDetailItem.shortDescription}
            </p>

            {/* 4 Detail Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Parts Quality Grade
                </span>
                <span className="font-semibold text-slate-800 leading-snug block">
                  {activeDetailItem.details.partsQuality}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Time Taken & Bench Turnaround
                </span>
                <span className="font-semibold text-slate-800 leading-snug block">
                  {activeDetailItem.details.timeTaken}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Warranty Coverage
                </span>
                <span className="font-semibold text-slate-800 leading-snug block">
                  {activeDetailItem.details.warrantyDetails}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Recommended Scenario
                </span>
                <span className="font-semibold text-slate-800 leading-snug block">
                  {activeDetailItem.details.recommendedFor}
                </span>
              </div>
            </div>

            {/* What's Included Checklist */}
            <div className="space-y-2 text-xs">
              <div className="font-mono font-bold uppercase tracking-wider text-slate-700">
                What's Included in This Service:
              </div>
              <div className="space-y-1.5 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                {activeDetailItem.details.whatsIncluded.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">Service Price</span>
                <div className="text-2xl font-extrabold text-slate-900">
                  ₹{activeDetailItem.basePrice.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleToggleRepair(activeDetailItem.id);
                    setActiveDetailItem(null);
                  }}
                  className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all shadow-xs ${
                    selectedRepairIds.includes(activeDetailItem.id)
                      ? 'bg-slate-900 text-white'
                      : 'bg-orange-600 hover:bg-orange-500 text-white'
                  }`}
                >
                  {selectedRepairIds.includes(activeDetailItem.id)
                    ? 'Remove from Order'
                    : 'Add to Repair Order'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: "NON-ORIGINAL VS ORIGINAL" COMPARISON TABLE MODAL
      ========================================================================= */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Display Engineering Transparency
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Non-Original vs Original Screens: What's the Difference?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  We give you the facts upfront so you can make the smartest decision for your budget and device lifespan.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowComparisonModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="p-3">Specification</th>
                    <th className="p-3 bg-slate-100/70 text-slate-900 font-bold">Non-Original (Aftermarket A+)</th>
                    <th className="p-3 bg-orange-50 text-orange-900 font-bold">Original Factory OEM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Display Technology</td>
                    <td className="p-3 bg-slate-50/40">Incell LCD or Hard OLED (rigid substrate)</td>
                    <td className="p-3 bg-orange-50/20 font-medium text-slate-900">Original Flexible AMOLED / Super Retina XDR</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Color Gamut & Nits</td>
                    <td className="p-3 bg-slate-50/40">85% - 90% sRGB (~600-800 nits)</td>
                    <td className="p-3 bg-orange-50/20 font-medium text-slate-900">100% DCI-P3 Wide Color (1000 - 2600 nits peak)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Refresh Rate (Hz)</td>
                    <td className="p-3 bg-slate-50/40">Standard 60Hz or 90Hz</td>
                    <td className="p-3 bg-orange-50/20 font-medium text-slate-900">Native 120Hz LTPO ProMotion intact</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">TrueTone & Face ID</td>
                    <td className="p-3 bg-slate-50/40">Requires EEPROM programmer; possible alert</td>
                    <td className="p-3 bg-orange-50/20 font-medium text-slate-900">100% Compatible with TrueTone & biometrics</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Bezel Thickness</td>
                    <td className="p-3 bg-slate-50/40">Slightly thicker chin border (~0.4mm wider)</td>
                    <td className="p-3 bg-orange-50/20 font-medium text-slate-900">Zero tolerance OEM razor-thin bezels</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Cost & Pricing</td>
                    <td className="p-3 bg-slate-50/40 font-bold text-emerald-700">40% - 60% Lower Cost (From ₹1,999)</td>
                    <td className="p-3 bg-orange-50/20 font-bold text-slate-900">Premium Factory Cost (From ₹4,499)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Warranty</td>
                    <td className="p-3 bg-slate-50/40">90-Day Lab Warranty</td>
                    <td className="p-3 bg-orange-50/20 font-bold text-emerald-700">180-Day Comprehensive Warranty</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Recommendation Advice */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-900 block font-semibold">Which one should you choose?</strong>
              <p>
                Choose <strong>Non-Original</strong> if you want an economical fix for everyday tasks, navigation, and messaging without spending half your phone's value. Choose <strong>Original</strong> if you shoot 4K video, game at 120Hz, require outdoor sunlight brightness, or plan to keep your flagship for years.
              </p>
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowComparisonModal(false)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl"
              >
                Close Comparison
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: BOOKING SUMMARY MODAL
      ========================================================================= */}
      {showBookingSummaryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Bengaluru Hardware Service
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {bookingConfirmed ? 'Repair Request Confirmed!' : 'Repair Order Review'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowBookingSummaryModal(false);
                  setBookingConfirmed(false);
                }}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingConfirmed ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">
                    Pickup Slot Reserved Successfully
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Our Bengaluru technician will arrive at pincode <span className="font-mono font-bold">{pincode}</span> within the selected window. Zero diagnostic fees.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-mono text-slate-700">
                  Token ID: <span className="font-bold text-orange-600">RT-REP-{Math.floor(10000 + Math.random() * 90000)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowBookingSummaryModal(false);
                    setBookingConfirmed(false);
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                
                {/* Device & Pincode Strip */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">Device:</span>
                    <strong className="text-slate-900 text-xs">
                      {selectedBrand?.name} · {selectedModel?.name}
                    </strong>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Serviceable Pincode:</span>
                    <strong className="text-emerald-700 font-mono text-xs">{pincode}</strong>
                  </div>
                </div>

                {/* Selected Items List */}
                <div className="space-y-2">
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    Selected Services ({selectedRepairIds.length}):
                  </span>
                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl p-2 bg-white">
                    {selectedRepairIds.map((id) => {
                      const item = REPAIR_TYPES_CATALOG.find(r => r.id === id);
                      if (!item) return null;
                      return (
                        <div key={id} className="py-2 px-2 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="font-semibold text-slate-800">{item.title}</span>
                          </div>
                          <span className="font-mono font-bold text-slate-900 shrink-0">
                            ₹{item.basePrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Note if present */}
                {customIssueText.trim() && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600">
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                      Customer Symptom Note:
                    </span>
                    <p className="italic">"{customIssueText}"</p>
                  </div>
                )}

                {/* Total */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-800">Total Estimated Quote:</span>
                  <span className="text-xl font-extrabold text-orange-600">
                    ₹{totalEstimate.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Submit action */}
                <button
                  type="button"
                  onClick={() => setBookingConfirmed(true)}
                  className="w-full py-3 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl shadow-xs transition-all active:scale-98"
                >
                  Confirm Free Doorstep Pickup & Bench Inspection
                </button>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
