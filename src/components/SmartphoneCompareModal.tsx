import React from 'react';
import { X } from 'lucide-react';
import { SmartphoneModel } from '../data/smartphoneCatalog';
import { PhoneDeviceVisual } from './PhoneDeviceVisual';

interface SmartphoneCompareModalProps {
  phones: SmartphoneModel[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onClose: () => void;
}

export const SmartphoneCompareModal: React.FC<SmartphoneCompareModalProps> = ({
  phones,
  onRemove,
  onClear,
  onClose
}) => {
  if (phones.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-phones-title"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 my-8 text-slate-900 max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 id="compare-phones-title" className="text-xl font-bold text-slate-900">
              Smartphone Architecture Comparison ({phones.length}/2)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Side-by-side verified technical specifications for pre-owned evaluation
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="text-xs text-slate-500 hover:text-slate-800 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 transition-colors"
            >
              Clear
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close comparison window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {phones.map((phone) => (
            <div key={phone.id} className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-4 relative">
              <button
                onClick={() => onRemove(phone.id)}
                className="absolute top-4 right-4 text-xs text-slate-400 hover:text-red-500 font-mono z-10"
              >
                Remove
              </button>

              {/* Visual device thumbnail in compare card */}
              <div className="h-44 w-full bg-white rounded-lg border border-slate-200/80 p-2 flex items-center justify-center overflow-hidden">
                <PhoneDeviceVisual phone={phone} mode="compact" view="dual" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-orange-600 uppercase font-semibold">
                  {phone.brand} · {phone.tierLabel}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  {phone.name}
                </h3>
                <span className="text-xs text-slate-500 font-mono">{phone.releaseYear} Generation</span>
              </div>

              <div className="space-y-2 text-xs divide-y divide-slate-200/80">
                <div className="pt-2">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Display</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{phone.specs.display}</div>
                </div>

                <div className="pt-2">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Chipset</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{phone.specs.chipset}</div>
                </div>

                <div className="pt-2">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Rear Cameras</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{phone.specs.rearCameras}</div>
                </div>

                <div className="pt-2">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Battery & Charging</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{phone.specs.batteryAndCharging}</div>
                </div>

                <div className="pt-2">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Build & Durability</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{phone.specs.buildAndDesign}</div>
                </div>

                <div className="pt-2">
                  <div className="text-slate-400 font-mono text-[10px] uppercase">Pre-Owned Advice</div>
                  <div className="text-slate-600 mt-0.5">{phone.usedMarketGuide.buyerAdvice}</div>
                </div>
              </div>
            </div>
          ))}

          {phones.length === 1 && (
            <div className="p-8 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-2 text-slate-400">
              <span className="text-xs font-mono">Select a 2nd phone model to compare hardware side-by-side.</span>
            </div>
          )}
        </div>

        <div className="border-t border-slate-100 pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
