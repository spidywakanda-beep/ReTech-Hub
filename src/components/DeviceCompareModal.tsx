import React from 'react';
import { X } from 'lucide-react';
import { DeviceItem } from '../types';

interface DeviceCompareModalProps {
  devices: DeviceItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onClose: () => void;
}

export const DeviceCompareModal: React.FC<DeviceCompareModalProps> = ({
  devices,
  onRemove,
  onClear,
  onClose,
}) => {
  if (devices.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 my-8 text-slate-900 max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 id="compare-modal-title" className="text-xl font-bold text-slate-900">
              Laptop Comparison ({devices.length}/2)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Side-by-side hardware specification and condition evaluation
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
          {devices.map((dev) => (
            <div key={dev.id} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4 relative">
              <button
                onClick={() => onRemove(dev.id)}
                className="absolute top-4 right-4 text-xs text-slate-400 hover:text-red-500 font-mono"
              >
                Remove
              </button>

              <div>
                <span className="text-[10px] font-mono text-orange-600 uppercase font-semibold">{dev.brand} · {dev.category}</span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">{dev.name}</h3>
                <div className="text-sm font-bold text-slate-900 font-mono mt-1">
                  ₹{dev.indicativePriceInr.toLocaleString('en-IN')} <span className="text-xs text-slate-500 font-normal font-sans">(Indicative)</span>
                </div>
              </div>

              <div className="space-y-2 text-xs divide-y divide-slate-200/80">
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Condition Grade</span>
                  <span className="font-semibold text-slate-900 uppercase">{dev.conditionGrade}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Battery Health</span>
                  <span className="font-mono text-emerald-600 font-bold">{dev.batteryHealthPercent}%</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Storage / RAM</span>
                  <span className="font-mono text-slate-900">{dev.storage} · {dev.ram}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Processor</span>
                  <span className="text-slate-800 text-right max-w-[200px] truncate">{dev.processor}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">Display</span>
                  <span className="text-slate-800 text-right max-w-[200px] truncate">{dev.display}</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-500">IMEI / Verification</span>
                  <span className="text-emerald-600 font-semibold">{dev.imeiStatus}</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-white border border-slate-200 text-[11px] text-slate-600">
                <span className="font-semibold text-slate-900">Inspection Note: </span>
                {dev.conditionDescription}
              </div>
            </div>
          ))}

          {devices.length === 1 && (
            <div className="p-8 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-2 text-slate-400">
              <span className="text-xs">Add a 2nd device to compare specifications side-by-side.</span>
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
