import React from 'react';
import { X, Battery, Cpu, HardDrive, Monitor, CheckCircle2 } from 'lucide-react';
import { LaptopModel } from '../data/laptopCatalog';
import { LaptopDeviceVisual } from './LaptopDeviceVisual';

interface LaptopCompareModalProps {
  laptops: LaptopModel[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onClose: () => void;
}

export const LaptopCompareModal: React.FC<LaptopCompareModalProps> = ({
  laptops,
  onRemove,
  onClear,
  onClose,
}) => {
  if (laptops.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="laptop-compare-title"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 my-8 text-slate-900 max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 id="laptop-compare-title" className="text-xl font-bold text-slate-900">
              Laptop Comparison ({laptops.length}/2)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Side-by-side hardware specifications, benchmarks, and thermal ratings
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="text-xs text-slate-500 hover:text-slate-800 px-2.5 py-1.5 rounded bg-slate-100 border border-slate-200 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close compare window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4 relative">
              <button
                onClick={() => onRemove(laptop.id)}
                className="absolute top-4 right-4 text-xs text-slate-400 hover:text-red-500 font-mono"
              >
                Remove
              </button>

              <div className="pt-2 flex justify-center pb-2">
                <LaptopDeviceVisual laptop={laptop} className="scale-90" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-orange-600 uppercase font-semibold">
                  {laptop.brand} · {laptop.series}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">{laptop.name}</h3>
                <div className="text-sm font-bold text-slate-900 font-mono mt-1">
                  ₹{laptop.indicativePriceInr.toLocaleString('en-IN')}{' '}
                  <span className="text-xs text-slate-400 line-through">
                    ₹{laptop.originalEstimatedMrpInr.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-orange-600 font-bold ml-1.5">
                    (-{laptop.discountPercent}%)
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs divide-y divide-slate-200/80">
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Condition Grade</span>
                  <span className="font-semibold text-slate-900 uppercase">{laptop.conditionGrade}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Battery Health</span>
                  <span className="font-mono text-emerald-600 font-bold">{laptop.specs.batteryHealthPercent}% Retention</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Processor</span>
                  <span className="text-slate-800 text-right max-w-[200px] truncate">{laptop.specs.processor}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">RAM & Storage</span>
                  <span className="font-mono text-slate-900 text-right">{laptop.specs.ram} · {laptop.specs.storage}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Display</span>
                  <span className="text-slate-800 text-right max-w-[200px] truncate">{laptop.specs.display}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Chassis Weight</span>
                  <span className="font-mono text-slate-700">{laptop.specs.weight}</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <span className="font-semibold text-slate-900 block">Inspection Highlights:</span>
                {laptop.inspectionHighlights.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {laptops.length === 1 && (
            <div className="p-8 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-2 text-slate-400">
              <span className="text-xs">Add a 2nd laptop model to compare hardware benchmarks side-by-side.</span>
            </div>
          )}
        </div>

        <div className="border-t border-slate-100 pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Done Comparing
          </button>
        </div>

      </div>
    </div>
  );
};
