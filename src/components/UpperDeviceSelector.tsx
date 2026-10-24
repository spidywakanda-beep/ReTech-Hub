import React, { useState, useMemo } from 'react';
import { 
  Smartphone, 
  Laptop, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  Search, 
  Info, 
  FileText, 
  Check, 
  X,
  MapPin,
  Clock,
  RotateCcw
} from 'lucide-react';
import { SMARTPHONE_CATALOG, SmartphoneModel } from '../data/smartphoneCatalog';
import { LAPTOP_CATALOG, LaptopModel } from '../data/laptopCatalog';
import { PhoneDeviceVisual } from './PhoneDeviceVisual';
import { LaptopDeviceVisual } from './LaptopDeviceVisual';
import { SmartphoneDetailModal } from './SmartphoneDetailModal';
import { LaptopDetailModal } from './LaptopDetailModal';

export type UpperSelectorMode = 'sell-phone' | 'sell-laptop' | 'buy-phone' | 'buy-laptop';

interface TradeInSlip {
  slipId: string;
  deviceTitle: string;
  storage: string;
  condition: string;
  estimatedPrice: number;
  mode: UpperSelectorMode;
  expiresInDays: number;
}

export const UpperDeviceSelector: React.FC = () => {
  // Upper toggle state: Sell Phone / Sell Laptop / Buy Phone / Buy Laptop
  const [activeMode, setActiveMode] = useState<UpperSelectorMode>('sell-phone');

  // Phone selection state
  const [selectedPhoneBrand, setSelectedPhoneBrand] = useState<string>('apple');
  const [selectedPhoneId, setSelectedPhoneId] = useState<string>('apple-iphone-15-pro-max');
  const [phoneStorage, setPhoneStorage] = useState<string>('256 GB');
  const [phoneCondition, setPhoneCondition] = useState<string>('flawless');

  // Laptop selection state
  const [selectedLaptopBrand, setSelectedLaptopBrand] = useState<string>('apple');
  const [selectedLaptopId, setSelectedLaptopId] = useState<string>('apple-macbook-air-m2');
  const [laptopSpecVariant, setLaptopSpecVariant] = useState<string>('16GB RAM / 512GB SSD');
  const [laptopCondition, setLaptopCondition] = useState<string>('pristine');

  // Quick filter search
  const [modelSearch, setModelSearch] = useState<string>('');

  // Modals
  const [activePhoneModal, setActivePhoneModal] = useState<SmartphoneModel | null>(null);
  const [activeLaptopModal, setActiveLaptopModal] = useState<LaptopModel | null>(null);
  const [activeSlip, setActiveSlip] = useState<TradeInSlip | null>(null);
  const [phoneVisualView, setPhoneVisualView] = useState<'dual' | 'front' | 'rear'>('dual');

  const isPhoneMode = activeMode === 'sell-phone' || activeMode === 'buy-phone';
  const isSellMode = activeMode === 'sell-phone' || activeMode === 'sell-laptop';

  // Available brands
  const phoneBrands = useMemo(() => [
    { key: 'apple', label: 'Apple (iPhone)' },
    { key: 'samsung', label: 'Samsung Galaxy' },
    { key: 'oneplus', label: 'OnePlus' },
    { key: 'xiaomi', label: 'Xiaomi / Redmi' },
    { key: 'vivo', label: 'vivo' }
  ], []);

  const laptopBrands = useMemo(() => [
    { key: 'apple', label: 'Apple (MacBook)' },
    { key: 'dell', label: 'Dell (Latitude / XPS / Inspiron)' },
    { key: 'hp', label: 'HP (EliteBook / Pavilion / Envy)' },
    { key: 'lenovo', label: 'Lenovo (ThinkPad / Yoga / IdeaPad)' },
    { key: 'asus', label: 'ASUS (VivoBook / Zenbook)' }
  ], []);

  // Filtered phone list for dropdown
  const filteredPhones = useMemo(() => {
    let list = SMARTPHONE_CATALOG.filter(p => p.brandKey === selectedPhoneBrand);
    if (modelSearch.trim()) {
      const q = modelSearch.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.series.toLowerCase().includes(q));
    }
    return list;
  }, [selectedPhoneBrand, modelSearch]);

  // Filtered laptop list for dropdown
  const filteredLaptops = useMemo(() => {
    let list = LAPTOP_CATALOG.filter(l => l.brandKey === selectedLaptopBrand);
    if (modelSearch.trim()) {
      const q = modelSearch.toLowerCase();
      list = list.filter(l => l.name.toLowerCase().includes(q) || l.series.toLowerCase().includes(q));
    }
    return list;
  }, [selectedLaptopBrand, modelSearch]);

  // Current selected entities
  const currentPhone = useMemo(() => {
    return SMARTPHONE_CATALOG.find(p => p.id === selectedPhoneId) || filteredPhones[0] || SMARTPHONE_CATALOG[0];
  }, [selectedPhoneId, filteredPhones]);

  const currentLaptop = useMemo(() => {
    return LAPTOP_CATALOG.find(l => l.id === selectedLaptopId) || filteredLaptops[0] || LAPTOP_CATALOG[0];
  }, [selectedLaptopId, filteredLaptops]);

  // Valuation algorithm for smartphones
  const phoneValuation = useMemo(() => {
    if (!currentPhone) return { finalPrice: 0, basePrice: 0, conditionBonus: 0, storageBonus: 0 };
    
    // Benchmark estimate based on year and tier
    let base = currentPhone.tier === 'flagship' ? 62000 : currentPhone.tier === 'mid-range' ? 24000 : 13000;
    if (currentPhone.releaseYear === 2024) base *= 1.25;
    else if (currentPhone.releaseYear === 2023) base *= 1.05;
    else if (currentPhone.releaseYear === 2022) base *= 0.82;
    else if (currentPhone.releaseYear <= 2020) base *= 0.55;

    // Storage tier multiplier
    let storageBonus = 0;
    if (phoneStorage.includes('1 TB')) storageBonus = 12000;
    else if (phoneStorage.includes('512 GB')) storageBonus = 7000;
    else if (phoneStorage.includes('256 GB')) storageBonus = 3500;

    // Condition multiplier
    let conditionMultiplier = 1.0;
    if (phoneCondition === 'flawless') conditionMultiplier = 1.08;
    else if (phoneCondition === 'good') conditionMultiplier = 0.94;
    else if (phoneCondition === 'fair') conditionMultiplier = 0.78;
    else if (phoneCondition === 'damaged') conditionMultiplier = 0.52;

    let calculated = Math.round((base + storageBonus) * conditionMultiplier);
    
    // Sell cash payout vs Buy refurbished price
    if (!isSellMode) {
      calculated = Math.round(calculated * 1.22); // Retail refurbished margin with warranty
    }

    return {
      finalPrice: Math.round(calculated / 100) * 100,
      basePrice: Math.round(base / 100) * 100,
      conditionBonus: Math.round(((conditionMultiplier - 1.0) * base) / 100) * 100,
      storageBonus
    };
  }, [currentPhone, phoneStorage, phoneCondition, isSellMode]);

  // Valuation algorithm for laptops
  const laptopValuation = useMemo(() => {
    if (!currentLaptop) return { finalPrice: 0 };
    let base = currentLaptop.indicativePriceInr;
    let multiplier = 1.0;
    if (laptopCondition === 'pristine') multiplier = 1.05;
    else if (laptopCondition === 'excellent') multiplier = 1.0;
    else if (laptopCondition === 'good') multiplier = 0.88;

    let calculated = Math.round(base * multiplier);
    if (isSellMode) {
      calculated = Math.round(calculated * 0.80); // Buy-back price from customer
    }

    return {
      finalPrice: Math.round(calculated / 100) * 100
    };
  }, [currentLaptop, laptopCondition, isSellMode]);

  // Handle generating trade-in slip
  const handleLockInQuote = () => {
    const randomId = 'RT-' + Math.floor(1000 + Math.random() * 9000);
    if (isPhoneMode && currentPhone) {
      setActiveSlip({
        slipId: randomId,
        deviceTitle: currentPhone.name,
        storage: phoneStorage,
        condition: phoneCondition.toUpperCase(),
        estimatedPrice: phoneValuation.finalPrice,
        mode: activeMode,
        expiresInDays: 7
      });
    } else if (currentLaptop) {
      setActiveSlip({
        slipId: randomId,
        deviceTitle: currentLaptop.name,
        storage: laptopSpecVariant,
        condition: laptopCondition.toUpperCase(),
        estimatedPrice: laptopValuation.finalPrice,
        mode: activeMode,
        expiresInDays: 7
      });
    }
  };

  // Quick preset loader
  const handleQuickSelect = (type: 'phone' | 'laptop', brand: string, modelId: string) => {
    if (type === 'phone') {
      setActiveMode('sell-phone');
      setSelectedPhoneBrand(brand);
      setSelectedPhoneId(modelId);
      setModelSearch('');
    } else {
      setActiveMode('sell-laptop');
      setSelectedLaptopBrand(brand);
      setSelectedLaptopId(modelId);
      setModelSearch('');
    }
  };

  return (
    <section id="device-selector" className="py-12 sm:py-16 bg-[#fafbfc] border-b border-slate-200 scroll-mt-16">
      {/* Compatibility anchors for any older navigation links */}
      <span id="smartphones" className="sr-only" />
      <span id="laptops" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Clean Startup Identity */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1.5 font-semibold">
            <span>ReTech Hub Startup Desk</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Instant Device Valuation & Trade-In</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Select Your Device for an Instant Quote
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Choose your device brand and model from the dropdown below to check live walk-in cash trade-in values or inspect verified hardware configurations without endless page clutter.
          </p>
        </div>

        {/* ================= UPPER TOGGLE BAR (The primary toggle) ================= */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-8">
          <div className="flex flex-wrap border-b border-slate-200 bg-slate-50/70 p-1.5 gap-1.5 sm:gap-2">
            
            <button
              type="button"
              onClick={() => { setActiveMode('sell-phone'); setModelSearch(''); }}
              className={`flex-1 min-w-[140px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeMode === 'sell-phone'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              <Smartphone className="w-4 h-4 text-orange-400" />
              <span>Sell Smartphone</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveMode('sell-laptop'); setModelSearch(''); }}
              className={`flex-1 min-w-[140px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeMode === 'sell-laptop'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              <Laptop className="w-4 h-4 text-orange-400" />
              <span>Sell Laptop</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveMode('buy-phone'); setModelSearch(''); }}
              className={`flex-1 min-w-[140px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeMode === 'buy-phone'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Buy Certified Phone</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveMode('buy-laptop'); setModelSearch(''); }}
              className={`flex-1 min-w-[140px] sm:min-w-0 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeMode === 'buy-laptop'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Buy Certified Laptop</span>
            </button>

            <a
              href="#repairs"
              className="hidden lg:inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-600 hover:text-orange-600 rounded-xl hover:bg-white transition-colors"
            >
              <Wrench className="w-4 h-4 text-orange-500" />
              <span>Repair Estimator</span>
            </a>

          </div>

          {/* ================= CASCADING DROPDOWNS BAR ================= */}
          <div className="p-6 sm:p-8 bg-white space-y-6">
            
            {/* Row of 4 Cascading Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Dropdown 1: Select Brand */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Select Brand
                </label>
                <div className="relative">
                  <select
                    value={isPhoneMode ? selectedPhoneBrand : selectedLaptopBrand}
                    onChange={(e) => {
                      const newBrand = e.target.value;
                      if (isPhoneMode) {
                        setSelectedPhoneBrand(newBrand);
                        const first = SMARTPHONE_CATALOG.find(p => p.brandKey === newBrand);
                        if (first) setSelectedPhoneId(first.id);
                      } else {
                        setSelectedLaptopBrand(newBrand);
                        const first = LAPTOP_CATALOG.find(l => l.brandKey === newBrand);
                        if (first) setSelectedLaptopId(first.id);
                      }
                      setModelSearch('');
                    }}
                    className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer transition-colors pr-10"
                  >
                    {isPhoneMode ? (
                      phoneBrands.map(b => (
                        <option key={b.key} value={b.key}>{b.label}</option>
                      ))
                    ) : (
                      laptopBrands.map(b => (
                        <option key={b.key} value={b.key}>{b.label}</option>
                      ))
                    )}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Dropdown 2: Select Model */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    2. Select Model ({isPhoneMode ? filteredPhones.length : filteredLaptops.length})
                  </label>
                </div>
                <div className="relative">
                  <select
                    value={isPhoneMode ? selectedPhoneId : selectedLaptopId}
                    onChange={(e) => {
                      if (isPhoneMode) {
                        setSelectedPhoneId(e.target.value);
                      } else {
                        setSelectedLaptopId(e.target.value);
                      }
                    }}
                    className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer transition-colors pr-10 truncate"
                  >
                    {isPhoneMode ? (
                      filteredPhones.map(phone => (
                        <option key={phone.id} value={phone.id}>
                          {phone.name} ({phone.releaseYear})
                        </option>
                      ))
                    ) : (
                      filteredLaptops.map(laptop => (
                        <option key={laptop.id} value={laptop.id}>
                          {laptop.name}
                        </option>
                      ))
                    )}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Dropdown 3: Storage / Spec Variant */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. {isPhoneMode ? 'Storage Variant' : 'Configuration'}
                </label>
                <div className="relative">
                  {isPhoneMode ? (
                    <select
                      value={phoneStorage}
                      onChange={(e) => setPhoneStorage(e.target.value)}
                      className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer transition-colors pr-10"
                    >
                      <option value="128 GB">128 GB Standard</option>
                      <option value="256 GB">256 GB Recommended</option>
                      <option value="512 GB">512 GB High Capacity</option>
                      <option value="1 TB">1 TB Ultra Storage</option>
                    </select>
                  ) : (
                    <select
                      value={laptopSpecVariant}
                      onChange={(e) => setLaptopSpecVariant(e.target.value)}
                      className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer transition-colors pr-10"
                    >
                      <option value="8GB RAM / 256GB SSD">8GB RAM / 256GB SSD</option>
                      <option value="16GB RAM / 512GB SSD">16GB RAM / 512GB SSD</option>
                      <option value="16GB RAM / 1TB SSD">16GB RAM / 1TB SSD</option>
                      <option value="32GB RAM / 1TB SSD">32GB RAM / 1TB SSD</option>
                    </select>
                  )}
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Dropdown 4: Working Condition */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  4. Hardware Condition
                </label>
                <div className="relative">
                  {isPhoneMode ? (
                    <select
                      value={phoneCondition}
                      onChange={(e) => setPhoneCondition(e.target.value)}
                      className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer transition-colors pr-10"
                    >
                      <option value="flawless">Flawless (Grade A+ · Like New)</option>
                      <option value="good">Good (Grade A · Minor Wear)</option>
                      <option value="fair">Fair (Grade B · Scuffs, Operational)</option>
                      <option value="damaged">Needs Repair (Screen / Battery)</option>
                    </select>
                  ) : (
                    <select
                      value={laptopCondition}
                      onChange={(e) => setLaptopCondition(e.target.value)}
                      className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer transition-colors pr-10"
                    >
                      <option value="pristine">Pristine (90%+ Battery, Zero Dents)</option>
                      <option value="excellent">Excellent (80-89% Battery, Clean)</option>
                      <option value="good">Good (75-80% Battery, Normal Wear)</option>
                    </select>
                  )}
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Quick Model Search input to quickly jump to any model */}
            <div className="flex items-center gap-3 pt-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={modelSearch}
                  onChange={(e) => setModelSearch(e.target.value)}
                  placeholder={`Search in ${isPhoneMode ? selectedPhoneBrand : selectedLaptopBrand} (e.g., S24, 15 Pro, XPS)...`}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              {/* Quick Preset Buttons */}
              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="text-[11px] text-slate-400 uppercase">Popular:</span>
                <button
                  type="button"
                  onClick={() => handleQuickSelect('phone', 'apple', 'apple-iphone-15-pro-max')}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  iPhone 15 Pro Max
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickSelect('phone', 'samsung', 'samsung-s24-ultra')}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Galaxy S24 Ultra
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickSelect('phone', 'oneplus', 'oneplus-12r')}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  OnePlus 12R
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickSelect('laptop', 'apple', 'apple-macbook-air-m2')}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  MacBook Air M2
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickSelect('laptop', 'dell', 'dell-latitude-3410')}
                  className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Dell Latitude
                </button>
              </div>
            </div>

          </div>

          {/* ================= SINGLE SELECTED DEVICE RESULT CARD (NO WALL OF IMAGES!) ================= */}
          <div className="border-t border-slate-200 bg-slate-50/60 p-6 sm:p-8">
            {isPhoneMode && currentPhone ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Visual representation of ONLY this selected device (Spacious, authentic, prominent) */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-5 bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-2xl border border-slate-200/80 shadow-2xs">
                    
                    {/* View Switcher: Dual | Front | Original Rear */}
                    <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl mb-4 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => setPhoneVisualView('dual')}
                        className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                          phoneVisualView === 'dual'
                            ? 'bg-slate-900 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        Dual View
                      </button>
                      <button
                        type="button"
                        onClick={() => setPhoneVisualView('front')}
                        className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                          phoneVisualView === 'front'
                            ? 'bg-slate-900 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        Front Display
                      </button>
                      <button
                        type="button"
                        onClick={() => setPhoneVisualView('rear')}
                        className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                          phoneVisualView === 'rear'
                            ? 'bg-slate-900 text-white shadow-2xs'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        Original Rear
                      </button>
                    </div>

                    {/* High-definition, authentic handset visualization */}
                    <div className="w-full flex items-center justify-center py-3 min-h-[300px]">
                      <PhoneDeviceVisual
                        phone={currentPhone}
                        mode="modal"
                        view={phoneVisualView}
                        large={true}
                      />
                    </div>

                    <div className="mt-3 text-xs text-slate-500 font-semibold text-center flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>ReTech Hub Certified · 40-Point Hardware Bench Verified</span>
                    </div>
                  </div>

                  {/* Right Column: Instant Valuation Details & Fast Actions */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Header line */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                          <span className="font-bold text-orange-600">{currentPhone.brand}</span>
                          <span>·</span>
                          <span>{currentPhone.series}</span>
                          <span>·</span>
                          <span>{currentPhone.releaseYear} Generation</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                          {currentPhone.name}
                        </h3>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-medium text-slate-500 block">
                          {isSellMode ? 'Instant Cash Trade-In Value' : 'Certified Pre-Owned Price'}
                        </span>
                        <div className="text-3xl sm:text-4xl font-extrabold text-orange-600 tracking-tight mt-0.5">
                          ₹{phoneValuation.finalPrice.toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>

                    {/* Breakdown & specs grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 block">Selected Variant</span>
                        <span className="font-bold text-slate-800 text-sm mt-0.5 block">{phoneStorage}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 block">Grade Condition</span>
                        <span className="font-bold text-slate-800 capitalize text-sm mt-0.5 block">{phoneCondition}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 block">Chipset</span>
                        <span className="font-bold text-slate-800 truncate block text-sm mt-0.5" title={currentPhone.specs.chipset}>
                          {currentPhone.specs.chipset.split('(')[0]}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 block">Camera Setup</span>
                        <span className="font-bold text-slate-800 truncate block text-sm mt-0.5" title={currentPhone.specs.rearCameras}>
                          {currentPhone.specs.rearCameras.split('+')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Quality Guarantees */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Zero diagnostic fee at Bengaluru Hub</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                        <span>Instant UPI / Spot Cash on bench test</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>7-day price guarantee locked</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleLockInQuote}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 active:scale-98 rounded-xl shadow-xs transition-all"
                      >
                        <FileText className="w-4 h-4" />
                        <span>{isSellMode ? 'Lock In Instant Cash Quote' : 'Reserve In Bengaluru Store'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActivePhoneModal(currentPhone)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 active:scale-98 rounded-xl transition-all shadow-2xs"
                      >
                        <Info className="w-4 h-4 text-slate-500" />
                        <span>View 40-Pt Hardware Specs</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPhoneBrand('apple');
                          setSelectedPhoneId('apple-iphone-15-pro-max');
                          setModelSearch('');
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono text-slate-400 hover:text-slate-700 transition-colors ml-auto"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            ) : currentLaptop ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Visual representation of selected laptop */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-5 bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <div className="w-full h-56 sm:h-64 flex items-center justify-center">
                      <LaptopDeviceVisual laptop={currentLaptop} size="modal" />
                    </div>
                    <div className="mt-3 text-[11px] font-mono text-slate-500 font-semibold text-center flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>ReTech Hub Certified · Grade {currentLaptop.conditionGrade} · 40-Pt Bench Verified</span>
                    </div>
                  </div>

                  {/* Right Column: Laptop Valuation & Actions */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                          <span className="font-semibold uppercase text-orange-600">{currentLaptop.brand}</span>
                          <span>·</span>
                          <span>{currentLaptop.series}</span>
                          <span>·</span>
                          <span>{currentLaptop.releaseYear} Model</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                          {currentLaptop.name}
                        </h3>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-medium text-slate-500 block">
                          {isSellMode ? 'Instant Cash Trade-In Value' : 'Certified Pre-Owned Price'}
                        </span>
                        <div className="text-3xl sm:text-4xl font-extrabold text-orange-600 tracking-tight mt-0.5">
                          ₹{laptopValuation.finalPrice.toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>

                    {/* Breakdown & specs */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 block">Processor</span>
                        <span className="font-bold text-slate-800 truncate block text-sm mt-0.5" title={currentLaptop.specs.processor}>
                          {currentLaptop.specs.processor}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 block">Memory & Storage</span>
                        <span className="font-bold text-slate-800 text-sm mt-0.5 block">{laptopSpecVariant}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 block">Display</span>
                        <span className="font-bold text-slate-800 truncate block text-sm mt-0.5" title={currentLaptop.specs.display}>
                          {currentLaptop.specs.display.split(',')[0]}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[11px] font-medium text-slate-400 block">Battery Cycle Health</span>
                        <span className="font-bold text-slate-800 text-sm mt-0.5 block">{currentLaptop.specs.batteryHealthPercent}% Verified</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Keyboard, hinges & thermal paste inspected</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                        <span>Genuine OEM charger included</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleLockInQuote}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 active:scale-98 rounded-xl shadow-xs transition-all"
                      >
                        <FileText className="w-4 h-4" />
                        <span>{isSellMode ? 'Lock In Laptop Cash Quote' : 'Reserve Laptop In Store'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveLaptopModal(currentLaptop)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 active:scale-98 rounded-xl transition-all shadow-2xs"
                      >
                        <Info className="w-4 h-4 text-slate-500" />
                        <span>Detailed Inspection Log</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLaptopBrand('apple');
                          setSelectedLaptopId('apple-macbook-air-m2');
                          setModelSearch('');
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono text-slate-400 hover:text-slate-700 transition-colors ml-auto"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            ) : null}
          </div>

        </div>

        {/* 3-Pillar Operational Summary below selector (No clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Zero Signup or Phone Required</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Check valuations and lock in your price slip anonymously. We never ask for phone numbers or send spam.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">40-Point Hardware Bench</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Display digitizer, battery thermals, logic board, and cameras verified live on bench in Bengaluru.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Instant Spot Payout</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Complete diagnostic bench test in 30 minutes, followed by instant UPI or cash payout on spot.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= TRADE-IN / RESERVATION SLIP MODAL ================= */}
      {activeSlip && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-5 text-slate-900">
            <button
              onClick={() => setActiveSlip(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg"
              aria-label="Close slip"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-orange-600 font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Valuation Slip Generated</span>
            </div>

            <div className="border border-dashed border-slate-300 rounded-xl p-5 bg-slate-50/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Slip Reference</span>
                  <div className="text-base font-extrabold font-mono text-slate-900">{activeSlip.slipId}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Locked Price</span>
                  <div className="text-xl font-extrabold font-mono text-orange-600">
                    ₹{activeSlip.estimatedPrice.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Device Model:</span>
                  <span className="font-bold">{activeSlip.deviceTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Variant:</span>
                  <span className="font-semibold">{activeSlip.storage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Condition Grade:</span>
                  <span className="font-semibold">{activeSlip.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Price Validity:</span>
                  <span className="font-semibold text-emerald-700">7 Days Guaranteed</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-start gap-2 text-[11px] text-slate-500">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>
                  Present this reference slip at <strong>ReTech Hub Bengaluru</strong> for instant walk-in testing and spot cash payment. No appointments required.
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-slate-400 font-mono">* No sign-up or phone number needed</span>
              <button
                type="button"
                onClick={() => setActiveSlip(null)}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                Close & Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hardware Specs Modal for Phones */}
      {activePhoneModal && (
        <SmartphoneDetailModal
          phone={activePhoneModal}
          onClose={() => setActivePhoneModal(null)}
        />
      )}

      {/* Hardware Specs Modal for Laptops */}
      {activeLaptopModal && (
        <LaptopDetailModal
          laptop={activeLaptopModal}
          onClose={() => setActiveLaptopModal(null)}
        />
      )}

    </section>
  );
};
