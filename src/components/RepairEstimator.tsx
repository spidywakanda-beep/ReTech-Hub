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
  CheckCircle2
} from 'lucide-react';
import { RepairDeviceGrid } from './RepairDeviceGrid';
import { DIAGNOSTIC_OPTIONS } from '../data/mockData';

export const RepairEstimator: React.FC = () => {
  const [devicePlatform, setDevicePlatform] = useState<'smartphone' | 'laptop'>('smartphone');
  const [selectedLaptopIdx, setSelectedLaptopIdx] = useState<number>(0);
  const [selectedLaptopIssueKey, setSelectedLaptopIssueKey] = useState<string>('screen-flicker');

  const laptopOptions = DIAGNOSTIC_OPTIONS.filter((o) => o.deviceType === 'laptop');
  const currentLaptopBrand = laptopOptions[selectedLaptopIdx] || laptopOptions[0];
  const activeLaptopIssue =
    currentLaptopBrand?.commonIssues.find((i) => i.issueKey === selectedLaptopIssueKey) ||
    currentLaptopBrand?.commonIssues[0];

  return (
    <section id="repairs" className="py-16 lg:py-20 border-b border-slate-200/90 bg-white scroll-mt-16">
      {/* Compatibility Anchor for older links */}
      <span id="diagnostic-estimator" className="sr-only" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-xs font-semibold text-orange-700 mb-3">
              <Wrench className="w-3.5 h-3.5 text-orange-600" />
              <span>Certified Repair Lab & Diagnostics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Smartphone & Laptop Repairs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Identify your device, check doorstep pickup eligibility across Bengaluru, and explore transparent component pricing across all repair categories.
            </p>
          </div>

          {/* Quick Confidence Badges */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-700 font-medium">
            <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Up to 180-Day Warranty
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
              <Zap className="w-4 h-4 text-orange-600" /> Free Doorstep Pickup (48-72h)
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ₹0 Diagnostic Bench Fee
            </span>
          </div>
        </div>

        {/* Primary Platform Toggle: Smartphone Repairs (Full 16 Types + Device Selector) vs Laptop Lab */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDevicePlatform('smartphone')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                devicePlatform === 'smartphone'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <Smartphone className="w-4 h-4 text-orange-400" />
              <span>Smartphone Repair Lab (16 Categories)</span>
            </button>

            <button
              type="button"
              onClick={() => setDevicePlatform('laptop')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                devicePlatform === 'laptop'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <Laptop className="w-4 h-4 text-orange-400" />
              <span>Laptop Bench Diagnostics</span>
            </button>
          </div>

          <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
            Bengaluru Walk-in & Doorstep Service
          </span>
        </div>

        {/* Platform 1: Smartphone Device Selector Row & Repair Type Grid */}
        {devicePlatform === 'smartphone' && (
          <div className="animate-in fade-in duration-200">
            <RepairDeviceGrid />
          </div>
        )}

        {/* Platform 2: Dedicated Laptop Bench Diagnostics */}
        {devicePlatform === 'laptop' && (
          <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs animate-in fade-in duration-200 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-orange-600 mb-1.5">
                <Laptop className="w-4 h-4 text-orange-600" />
                <span className="font-semibold text-orange-700">Laptop Hardware Engineering</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-500">MacBook, ThinkPad, Dell, HP, ASUS</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Laptop Motherboard, Display & Battery Overhaul
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Select your laptop model architecture and symptom to inspect bench turnaround and component level pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Brand & Issue Selection */}
              <div className="lg:col-span-6 space-y-6">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2.5">
                    Select Laptop Architecture:
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {laptopOptions.map((opt, idx) => (
                      <button
                        key={opt.brand}
                        type="button"
                        onClick={() => setSelectedLaptopIdx(idx)}
                        className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold ${
                          selectedLaptopIdx === idx
                            ? 'bg-white border-orange-500 text-orange-900 ring-2 ring-orange-500/10 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-sm text-slate-900">{opt.brand}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 truncate">{opt.deviceType === 'laptop' ? 'MacBook / Windows' : 'Mobile'}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2.5">
                    Select Fault Symptom:
                  </label>
                  <div className="space-y-2">
                    {currentLaptopBrand?.commonIssues.map((issue) => {
                      const isSelected = selectedLaptopIssueKey === issue.issueKey;
                      return (
                        <div
                          key={issue.issueKey}
                          onClick={() => setSelectedLaptopIssueKey(issue.issueKey)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-white border-slate-900 ring-2 ring-slate-900/10 shadow-xs'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-900">{issue.label}</span>
                            <span className="font-mono font-bold text-orange-600">{issue.estimatedCostRangeInr}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                            {issue.symptomDesc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Right Column: Diagnostic Procedure & Quote */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                        Estimated Service Quote
                      </span>
                      <div className="text-2xl font-extrabold text-orange-600 mt-0.5">
                        {activeLaptopIssue?.estimatedCostRangeInr}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                        Lab Turnaround
                      </span>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">
                        {activeLaptopIssue?.turnaround}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <span className="font-bold text-slate-800 block">Verification Protocol:</span>
                    <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 leading-relaxed">
                      {activeLaptopIssue?.inspectionProtocol}
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Includes 90-day parts warranty & thermal paste Arctic MX-6 upgrade.</span>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#device-selector"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                    >
                      <span>Check Laptop Trade-In Value Instead</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
