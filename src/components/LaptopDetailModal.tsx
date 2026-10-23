import React from 'react';
import { X, CheckCircle2, ShieldCheck, Battery, Cpu, HardDrive, Monitor, Layers, Info } from 'lucide-react';
import { LaptopModel } from '../data/laptopCatalog';
import { LaptopDeviceVisual } from './LaptopDeviceVisual';

interface LaptopDetailModalProps {
  laptop: LaptopModel | null;
  onClose: () => void;
}

export const LaptopDetailModal: React.FC<LaptopDetailModalProps> = ({ laptop, onClose }) => {
  if (!laptop) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="laptop-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 my-8 text-slate-900 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
          aria-label="Close laptop detail sheet"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="border-b border-slate-100 pb-5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mb-2">
            <span className="text-orange-600 font-bold">RETECH ASSURED REFURBISHED</span>
            <span aria-hidden="true">·</span>
            <span>ID: {laptop.id}</span>
            <span aria-hidden="true">·</span>
            <span>Bengaluru Walk-in Facility</span>
          </div>

          <h2 id="laptop-modal-title" className="text-2xl font-extrabold text-slate-900">
            {laptop.name}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Condition Grade: <span className="font-semibold text-orange-600 uppercase">{laptop.conditionGrade}</span> · 40-Point Laboratory Stress Tested
          </p>
        </div>

        {/* Visual & Price Hero */}
        <div className="my-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/2 flex justify-center py-2">
            <LaptopDeviceVisual laptop={laptop} />
          </div>

          <div className="w-full md:w-1/2 space-y-3">
            <div className="inline-block px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-xs font-mono font-semibold text-emerald-700">
              ₹{(laptop.originalEstimatedMrpInr - laptop.indicativePriceInr).toLocaleString('en-IN')} Instant Savings
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                ₹{laptop.indicativePriceInr.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-slate-400 line-through font-mono">
                ₹{laptop.originalEstimatedMrpInr.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-bold text-orange-600 font-mono">
                -{laptop.discountPercent}%
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Indicative pre-owned benchmark for physical stock at Bengaluru hub. Hand-testing available prior to ownership transfer.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {laptop.purposeTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Specification Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Cpu className="w-4 h-4 text-orange-600" />
              <span>Processor</span>
            </div>
            <div className="text-xs font-bold text-slate-900 line-clamp-2 mt-1">
              {laptop.specs.processor}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Layers className="w-4 h-4 text-cyan-600" />
              <span>RAM</span>
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {laptop.specs.ram}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <HardDrive className="w-4 h-4 text-slate-600" />
              <span>Storage</span>
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1">
              {laptop.specs.storage}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Battery className="w-4 h-4 text-emerald-600" />
              <span>Battery Health</span>
            </div>
            <div className="text-xs font-bold text-emerald-600 mt-1 font-mono">
              {laptop.specs.batteryHealthPercent}% Retention
            </div>
          </div>
        </div>

        {/* Detailed Hardware Breakdown */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-2">
            <Monitor className="w-4 h-4 text-orange-600" />
            <span>Display & Port Architecture</span>
          </h3>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 divide-y divide-slate-100 text-xs">
            <div className="py-2 flex justify-between">
              <span className="text-slate-500 font-medium">Display Specification</span>
              <span className="font-semibold text-slate-900 text-right">{laptop.specs.display}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-500 font-medium">Graphics Subsystem</span>
              <span className="font-semibold text-slate-900 text-right">{laptop.specs.graphics}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-500 font-medium">I/O Ports & Connectivity</span>
              <span className="font-semibold text-slate-900 text-right max-w-sm">{laptop.specs.ports}</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="text-slate-500 font-medium">Chassis Weight</span>
              <span className="font-semibold text-slate-900 text-right">{laptop.specs.weight}</span>
            </div>
          </div>
        </div>

        {/* 40-Point Laboratory Inspection Log */}
        <div className="space-y-3 mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span>Verified Hardware Inspection Points</span>
          </h3>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            {laptop.inspectionHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-orange-50/70 border border-orange-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 space-y-1">
            <span className="font-bold text-slate-900">Physical Diagnostic Station: </span>
            <span>
              All laptops at ReTech Hub can be physically inspected at our Bengaluru facility. Customers are welcome to run Cinebench, check SSD SMART health with CrystalDiskInfo, test keys, and verify battery degradation logs in person.
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
          >
            Close Sheet
          </button>
        </div>

      </div>
    </div>
  );
};
