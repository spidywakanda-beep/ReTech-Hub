import React, { useState } from 'react';
import {
  Wrench,
  Clock,
  ChevronRight,
  AlertCircle,
  Smartphone,
  Laptop,
  Zap,
  ShieldCheck,
  Cpu,
  Battery,
  Monitor,
  Wind,
  Keyboard,
} from 'lucide-react';
import { REPAIR_SERVICES, DIAGNOSTIC_OPTIONS } from '../data/mockData';

type FilterCategory = 'all' | 'mobile' | 'laptop' | 'express';

interface ServiceMeta {
  icon: React.ElementType;
  crispTitle: string;
  shortDesc: string;
  quickTags: string[];
  express: boolean;
  issueKey: string;
}

const SERVICE_META_MAP: Record<string, ServiceMeta> = {
  'repair-screen-mobile': {
    icon: Smartphone,
    crispTitle: 'Screen & OLED Panel Replacement',
    shortDesc: 'Original-spec display swap with digitizer touch calibration and perimeter water seal.',
    quickTags: ['Cracked Glass', 'Touch Ghosting', 'OLED Lines'],
    express: true,
    issueKey: 'screen-crack',
  },
  'repair-battery-health': {
    icon: Battery,
    crispTitle: 'Battery Renewal & Health Boost',
    shortDesc: 'Certified cell replacement with power management IC protection and 100% capacity health.',
    quickTags: ['Rapid Drain', 'Swollen Cell', 'Random Shutdown'],
    express: true,
    issueKey: 'battery-drain',
  },
  'repair-logic-board': {
    icon: Cpu,
    crispTitle: 'Motherboard & Micro-Soldering',
    shortDesc: '40x optical microscope circuit diagnostic, short-circuit trace repair, and IC replacement.',
    quickTags: ['Dead / No Power', 'Boot Loop', 'Audio IC Glitch'],
    express: false,
    issueKey: 'water-damage',
  },
  'repair-laptop-screen': {
    icon: Monitor,
    crispTitle: 'Laptop Display & Hinge Reconstruction',
    shortDesc: 'Factory calibrated IPS display panel swap with torque-tested reinforced hinge assembly.',
    quickTags: ['Broken Panel', 'Hinge Crack', 'Screen Flicker'],
    express: false,
    issueKey: 'screen-flicker',
  },
  'repair-laptop-thermal': {
    icon: Wind,
    crispTitle: 'Thermal Overhaul & Fan De-Dusting',
    shortDesc: 'Ultrasonic heatsink dust clearance with Arctic MX-6 / PTM7950 phase-change repasting.',
    quickTags: ['High Fan Noise', 'Chassis Heat', 'FPS Throttling'],
    express: true,
    issueKey: 'overheating',
  },
  'repair-laptop-keyboard': {
    icon: Keyboard,
    crispTitle: 'Keyboard, Trackpad & Port Replacement',
    shortDesc: 'Full keyboard module replacement, multi-touch trackpad rebuild, and reinforced USB-C ports.',
    quickTags: ['Sticky Keys', 'Trackpad Drift', 'Loose Type-C'],
    express: false,
    issueKey: 'keyboard-trackpad',
  },
};

const FILTER_TABS = [
  { id: 'all' as FilterCategory, label: 'All Services', count: 6 },
  { id: 'mobile' as FilterCategory, label: 'Smartphones & Tablets', icon: Smartphone, count: 3 },
  { id: 'laptop' as FilterCategory, label: 'Laptops & MacBooks', icon: Laptop, count: 3 },
  { id: 'express' as FilterCategory, label: 'Express Fixes (30–60m)', icon: Zap, count: 3 },
];

export const RepairEstimator: React.FC = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'laptop'>('mobile');
  const [selectedBrandIdx, setSelectedBrandIdx] = useState<number>(0);
  const [selectedIssueKey, setSelectedIssueKey] = useState<string>('screen-crack');
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');

  const currentOptions = DIAGNOSTIC_OPTIONS.filter((o) => o.deviceType === deviceType);
  const currentBrand = currentOptions[selectedBrandIdx] || currentOptions[0];
  const activeIssue =
    currentBrand?.commonIssues.find((i) => i.issueKey === selectedIssueKey) ||
    currentBrand?.commonIssues[0];

  const filteredServices = REPAIR_SERVICES.filter((service) => {
    const meta = SERVICE_META_MAP[service.id];
    if (activeTab === 'all') return true;
    if (activeTab === 'mobile') return service.category === 'mobile';
    if (activeTab === 'laptop') return service.category === 'laptop';
    if (activeTab === 'express') return meta?.express ?? false;
    return true;
  });

  const handleSelectServiceForEstimate = (
    category: 'mobile' | 'laptop',
    issueKey?: string
  ) => {
    setDeviceType(category);
    setSelectedBrandIdx(0);
    if (issueKey) {
      setSelectedIssueKey(issueKey);
    }
    const estimatorEl = document.getElementById('diagnostic-estimator');
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="repairs" className="py-16 lg:py-20 border-b border-slate-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-semibold text-orange-700 mb-3">
              <Wrench className="w-3.5 h-3.5 text-orange-600" />
              <span>Certified Repair Lab & Diagnostics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              What We Repair
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Crisp laboratory solutions, transparent component pricing, and rapid walk-in turnaround with a 90-day warranty.
            </p>
          </div>

          {/* Quick Confidence Badges */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-700 font-medium">
            <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 90-Day Lab Warranty
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
              <Zap className="w-4 h-4 text-orange-600" /> 30-Min Fast-Track Available
            </span>
          </div>
        </div>

        {/* Crispy Category Toggle Bar */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 w-fit">
          {FILTER_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-orange-400' : 'text-slate-500'}`} />}
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md font-bold ${
                    isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Short & Crispy Repair Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {filteredServices.map((service) => {
            const meta = SERVICE_META_MAP[service.id];
            const ServiceIcon = meta?.icon || Wrench;
            const title = meta?.crispTitle || service.serviceName;
            const description = meta?.shortDesc || service.commonSymptoms[0];
            const tags = meta?.quickTags || service.commonSymptoms.slice(0, 3);

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Top row with icon, category badge & turnaround */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600 group-hover:scale-105 group-hover:bg-orange-100/70 transition-all">
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          {service.category === 'mobile' ? 'Smartphone Lab' : 'Laptop & Mac'}
                        </span>
                        {meta?.express && (
                          <span className="ml-2 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60">
                            <Zap className="w-2.5 h-2.5 text-amber-600" /> Express
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-orange-600" />
                      {service.standardTurnaround}
                    </span>
                  </div>

                  {/* Title & Short Crispy Description */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Crispy Symptom Badges */}
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Common Fixes:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing, Warranty & Direct Estimator CTA */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-medium text-slate-500">Benchmark Cost:</span>
                    <span className="text-sm font-bold text-slate-900 tracking-tight">
                      {service.indicativeCostRange}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-slate-600 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{service.partsGrade}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleSelectServiceForEstimate(
                        service.category as 'mobile' | 'laptop',
                        meta?.issueKey
                      )
                    }
                    className="w-full mt-2 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-orange-500 hover:text-white transition-all shadow-2xs group-hover:bg-slate-900 group-hover:text-white"
                  >
                    <span>Instant Price Check</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Self-Contained Diagnostic & Cost Estimator */}
        <div id="diagnostic-estimator" className="scroll-mt-24 rounded-2xl bg-slate-50/70 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          
          <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-orange-600 mb-1.5">
                <Wrench className="w-4 h-4 text-orange-600" />
                <span className="font-semibold text-orange-700">Self-Service Diagnostic Tool</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-500">Zero Contact Info Required</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Instant Repair Cost & Turnaround Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Select your device platform and symptom to calculate realistic repair benchmarks and laboratory procedures.
              </p>
            </div>

            {/* Platform Selector */}
            <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-200 shrink-0 shadow-2xs">
              <button
                type="button"
                onClick={() => {
                  setDeviceType('mobile');
                  setSelectedBrandIdx(0);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  deviceType === 'mobile'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Smartphone Diagnostic
              </button>
              <button
                type="button"
                onClick={() => {
                  setDeviceType('laptop');
                  setSelectedBrandIdx(0);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  deviceType === 'laptop'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Laptop Diagnostic
              </button>
            </div>
          </div>

          {/* Interactive Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Step 1 & 2: Brand & Symptom Selector */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Brand Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2.5">
                  Step 1: Select Brand / Architecture
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {currentOptions.map((opt, idx) => (
                    <button
                      key={opt.brand}
                      type="button"
                      onClick={() => {
                        setSelectedBrandIdx(idx);
                        setSelectedIssueKey(opt.commonIssues[0]?.issueKey || '');
                      }}
                      className={`p-3.5 text-left rounded-xl border transition-all text-xs ${
                        selectedBrandIdx === idx
                          ? 'bg-white border-orange-500 text-slate-900 font-semibold shadow-xs ring-1 ring-orange-500/20'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm">{opt.brand}</div>
                      <div className="text-xs text-slate-500 mt-1 truncate">
                        {opt.models.join(', ')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Symptom / Issue Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2.5">
                  Step 2: Select Hardware Symptom
                </label>
                <div className="space-y-2">
                  {currentBrand?.commonIssues.map((issue) => (
                    <button
                      key={issue.issueKey}
                      type="button"
                      onClick={() => setSelectedIssueKey(issue.issueKey)}
                      className={`w-full p-3.5 text-left rounded-xl border transition-all text-xs flex items-center justify-between ${
                        selectedIssueKey === issue.issueKey
                          ? 'bg-white border-orange-500 shadow-xs ring-1 ring-orange-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className={`font-bold ${selectedIssueKey === issue.issueKey ? 'text-slate-900' : 'text-slate-700'}`}>
                          {issue.label}
                        </div>
                        <div className="text-xs text-slate-500">
                          {issue.symptomDesc}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${selectedIssueKey === issue.issueKey ? 'text-orange-600 translate-x-0.5' : 'text-slate-400'}`} />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Step 3: Diagnostic Output & Transparent Breakdown */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-6 shadow-2xs">
                
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-500">Diagnostic Result</span>
                    <span className="text-xs font-medium text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80">
                      Standard Triage Ready
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs font-bold text-orange-600 tracking-wide">{currentBrand?.brand}</span>
                    <h4 className="text-xl font-extrabold text-slate-900 mt-0.5 tracking-tight">
                      {activeIssue?.label}
                    </h4>
                  </div>

                  {/* Benchmark Pricing & Turnaround Strip */}
                  <div className="grid grid-cols-2 gap-3.5 my-5">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-xs font-medium text-slate-500">Estimated Parts & Labor</div>
                      <div className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                        {activeIssue?.estimatedCostRangeInr}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">Transparent benchmark</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-orange-600" />
                        <span>Turnaround</span>
                      </div>
                      <div className="text-lg font-bold text-slate-900 tracking-tight mt-1">
                        {activeIssue?.turnaround}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">Bengaluru walk-in lab</div>
                    </div>
                  </div>

                  {/* Protocol Details */}
                  <div className="space-y-2 text-xs">
                    <div className="text-slate-600 font-semibold text-xs">
                      Bench Test & Verification Protocol:
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 leading-relaxed font-normal text-xs">
                      {activeIssue?.inspectionProtocol}
                    </div>
                  </div>
                </div>

                {/* Walk-in instructions */}
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Walk into ReTech Hub Bengaluru with your device. Our technician will verify the exact component issue under a microscope and present a formal quote prior to commencing service.
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
