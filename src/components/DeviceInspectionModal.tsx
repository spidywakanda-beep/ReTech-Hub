import React from 'react';
import { X, CheckCircle2, ShieldCheck, Battery, Cpu, HardDrive, Info } from 'lucide-react';
import { DeviceItem } from '../types';

interface DeviceInspectionModalProps {
  device: DeviceItem | null;
  onClose: () => void;
}

export const DeviceInspectionModal: React.FC<DeviceInspectionModalProps> = ({ device, onClose }) => {
  if (!device) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-device-title"
    >
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 sm:p-8 my-8 text-slate-900 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
          aria-label="Close inspection sheet modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-100 pb-5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mb-2">
            <span className="text-orange-600 font-bold">RETECH BENCH VERIFIED</span>
            <span aria-hidden="true">·</span>
            <span>ID: {device.id}</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize">{device.physicalLocation}</span>
          </div>

          <h2 id="modal-device-title" className="text-2xl font-extrabold text-slate-900">
            {device.name} ({device.modelYear})
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Condition Grade: <span className="font-semibold text-orange-600 uppercase">{device.conditionGrade}</span> — {device.conditionDescription}
          </p>
        </div>

        {/* Verified Telemetry Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Battery className="w-4 h-4 text-emerald-600" />
              <span>Battery Health</span>
            </div>
            <div className="text-lg font-bold text-slate-900 font-mono mt-1">
              {device.batteryHealthPercent}%
            </div>
            <div className="text-[11px] text-slate-500">
              {device.cycleCount ? `${device.cycleCount} charge cycles` : 'Peak capacity verified'}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Cpu className="w-4 h-4 text-orange-600" />
              <span>Processor</span>
            </div>
            <div className="text-sm font-bold text-slate-900 truncate mt-1">
              {device.processor}
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              RAM: {device.ram}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <HardDrive className="w-4 h-4 text-slate-600" />
              <span>Storage</span>
            </div>
            <div className="text-lg font-bold text-slate-900 font-mono mt-1">
              {device.storage}
            </div>
            <div className="text-[11px] text-slate-500">
              SMART Health: 100%
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>IMEI / Serial</span>
            </div>
            <div className="text-sm font-bold text-emerald-600 mt-1">
              {device.imeiStatus}
            </div>
            <div className="text-[11px] text-slate-500">
              Zero cloud / MDM locks
            </div>
          </div>
        </div>

        {/* 40-Point Laboratory Test Protocol Breakdown */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span>Inspection Diagnostic Checklist</span>
          </h3>

          <div className="divide-y divide-slate-100 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
            {device.inspectionPoints.map((point, index) => (
              <div key={index} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="space-y-0.5">
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{point.component}</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Method: {point.testMethod}
                  </div>
                </div>

                <div className="text-slate-700 font-mono text-[11px] bg-white px-2 py-1 rounded border border-slate-200 shrink-0">
                  {point.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Transparency & Testing Policy */}
        <div className="mt-6 p-4 rounded-xl bg-orange-50/60 border border-orange-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 space-y-1">
            <div className="font-bold text-slate-900">Bengaluru In-Store Testing Protocol</div>
            <p>
              Indicative benchmark: <span className="font-mono font-bold text-slate-900">₹{device.indicativePriceInr.toLocaleString('en-IN')}</span> (Estimated Original MRP: ₹{device.originalEstimatedMrpInr.toLocaleString('en-IN')}).
              You are invited to verify touch response, camera sensors, battery diagnostics, and keyboard feel in person before any purchase.
            </p>
          </div>
        </div>

        {/* Action button */}
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
