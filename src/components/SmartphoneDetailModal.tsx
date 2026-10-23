import React, { useState } from 'react';
import { X, CheckCircle2, Cpu, Camera, Battery, Smartphone, ShieldCheck, Info, Layers, Eye, SmartphoneCharging } from 'lucide-react';
import { SmartphoneModel } from '../data/smartphoneCatalog';
import { PhoneDeviceVisual } from './PhoneDeviceVisual';

interface SmartphoneDetailModalProps {
  phone: SmartphoneModel | null;
  onClose: () => void;
}

export const SmartphoneDetailModal: React.FC<SmartphoneDetailModalProps> = ({ phone, onClose }) => {
  const [activeVisualView, setActiveVisualView] = useState<'dual' | 'rear' | 'front'>('dual');

  if (!phone) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="phone-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 my-8 text-slate-900 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-orange-500 z-10"
          aria-label="Close specifications modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Metadata */}
        <div className="border-b border-slate-100 pb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mb-1.5">
            <span className="font-semibold text-orange-600 uppercase tracking-wider">{phone.brand}</span>
            <span aria-hidden="true">·</span>
            <span>{phone.series}</span>
            <span aria-hidden="true">·</span>
            <span>{phone.releaseYear} Generation</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h2 id="phone-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {phone.name}
            </h2>
            <div className="inline-block px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 w-fit">
              {phone.tierLabel}
            </div>
          </div>
        </div>

        {/* PROMINENT DEVICE VISUAL SHOWCASE ON SPECS */}
        <div className="my-6 p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200 flex flex-col items-center justify-center space-y-5">
          
          {/* View Perspective Switcher */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveVisualView('dual')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeVisualView === 'dual'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dual Front & Rear
            </button>
            <button
              type="button"
              onClick={() => setActiveVisualView('rear')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeVisualView === 'rear'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Rear Camera Module
            </button>
            <button
              type="button"
              onClick={() => setActiveVisualView('front')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeVisualView === 'front'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Front Display Bezel
            </button>
          </div>

          {/* Device Model Image Rendering */}
          <div className="py-2">
            <PhoneDeviceVisual
              phone={phone}
              mode="modal"
              view={activeVisualView}
            />
          </div>

          {/* Quick Hardware Highlights Under Visual */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-slate-200/80 text-[11px] font-mono text-slate-600">
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-semibold text-slate-800">
              {phone.specs.chipset.split('(')[0]}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-semibold text-slate-800">
              {phone.specs.display.split(',')[0]}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-semibold text-orange-600">
              {phone.specs.batteryAndCharging.split('(')[0]}
            </span>
          </div>
        </div>

        {/* Verified Specifications Grid */}
        <div className="my-6 space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
            Verified Hardware Specifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Smartphone className="w-4 h-4 text-orange-600" />
                <span>Display & Refresh Rate</span>
              </div>
              <p className="font-semibold text-slate-900">{phone.specs.display}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Cpu className="w-4 h-4 text-orange-600" />
                <span>Processor / Chipset</span>
              </div>
              <p className="font-semibold text-slate-900">{phone.specs.chipset}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Camera className="w-4 h-4 text-orange-600" />
                <span>Rear Camera Optics</span>
              </div>
              <p className="font-semibold text-slate-900">{phone.specs.rearCameras}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Camera className="w-4 h-4 text-orange-600" />
                <span>Front Camera</span>
              </div>
              <p className="font-semibold text-slate-900">{phone.specs.frontCamera}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Battery className="w-4 h-4 text-orange-600" />
                <span>Battery & Fast Charging</span>
              </div>
              <p className="font-semibold text-slate-900">{phone.specs.batteryAndCharging}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Layers className="w-4 h-4 text-orange-600" />
                <span>Build & Water Resistance</span>
              </div>
              <p className="font-semibold text-slate-900">{phone.specs.buildAndDesign}</p>
            </div>
          </div>
        </div>

        {/* Pre-Owned Market Inspection Guide */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Pre-Owned Physical Inspection Checklist (ReTech Bengaluru)
            </h4>
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-slate-600">
              <span className="font-semibold text-slate-900">Key Points Tested at Bench: </span>
              {phone.usedMarketGuide.recommendedInspection.join(' · ')}
            </div>

            <div className="text-slate-600">
              <span className="font-semibold text-slate-900">Typical Pre-Owned Variants: </span>
              {phone.usedMarketGuide.typicalUsedStorageVariants.join(', ')}
            </div>

            <div className="text-slate-600 pt-1 border-t border-slate-200">
              <span className="font-semibold text-slate-900">Buyer Advice: </span>
              {phone.usedMarketGuide.buyerAdvice}
            </div>
          </div>
        </div>

        {/* Catalog Verification Disclosure */}
        <div className="mt-5 p-3.5 rounded-lg bg-orange-50/60 border border-orange-200 text-xs text-slate-600 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <p>
            Technical Discovery Guide. To verify current in-stock physical units, cosmetic grades (Pristine/Excellent/Good), and exact battery telemetry for this model, visit ReTech Hub in Bengaluru.
          </p>
        </div>

        {/* Footer Action */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
          >
            Close Specification Guide
          </button>
        </div>

      </div>
    </div>
  );
};
