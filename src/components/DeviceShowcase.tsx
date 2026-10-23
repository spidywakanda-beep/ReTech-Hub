import React, { useState } from 'react';
import { Battery, Cpu, HardDrive, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { SMARTPHONES_AND_LAPTOPS, DISCLAIMER_TEXT } from '../data/mockData';
import { DeviceItem } from '../types';
import { DeviceArt } from './DeviceArt';
import { DeviceInspectionModal } from './DeviceInspectionModal';
import { DeviceCompareModal } from './DeviceCompareModal';

export const DeviceShowcase: React.FC = () => {
  const [activeInspectionDevice, setActiveInspectionDevice] = useState<DeviceItem | null>(null);
  const [compareList, setCompareList] = useState<DeviceItem[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Focus on certified pre-owned laptops to complement the smartphone discovery catalog
  const laptopDevices = SMARTPHONES_AND_LAPTOPS.filter(d => d.category === 'laptops');

  const toggleCompare = (device: DeviceItem) => {
    if (compareList.some(d => d.id === device.id)) {
      setCompareList(compareList.filter(d => d.id !== device.id));
    } else {
      if (compareList.length >= 2) {
        setCompareList([compareList[0], device]);
      } else {
        setCompareList([...compareList, device]);
      }
    }
  };

  const getArtworkType = (device: DeviceItem): any => {
    if (device.id.includes('macbook')) return 'macbook';
    if (device.id.includes('thinkpad')) return 'thinkpad';
    if (device.id.includes('xps') || device.id.includes('dell')) return 'dell';
    return 'macbook';
  };

  return (
    <section id="laptops" className="py-16 lg:py-20 border-b border-slate-200/90 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1.5 font-semibold">
              <span>Section 02</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Enterprise & Creator Workstations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Certified Pre-Owned Laptops
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Every laptop undergoes stress-testing on SSD SMART endurance, Cinebench thermals, battery cycle degradation, and keyboard scissor switches.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 max-w-xs shrink-0 shadow-2xs">
            <span className="font-semibold text-slate-900">Bengaluru Walk-in Hub:</span> Physical testing stations available with battery diagnostic software.
          </div>
        </div>

        {/* Laptops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptopDevices.map((device) => {
            const isCompared = compareList.some(d => d.id === device.id);
            const savings = device.originalEstimatedMrpInr - device.indicativePriceInr;
            const savingsPercent = Math.round((savings / device.originalEstimatedMrpInr) * 100);

            return (
              <div
                key={device.id}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-xs group"
              >
                {/* Artwork Area */}
                <div className="h-44 w-full bg-slate-50 border-b border-slate-100 relative">
                  <DeviceArt type={getArtworkType(device)} />
                  
                  <div className="absolute top-3 right-3 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-slate-200 font-bold text-orange-600 uppercase">
                    {device.conditionGrade}
                  </div>

                  <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-500 tracking-wider px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-slate-200 uppercase">
                    {device.brand} · {device.modelYear}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {device.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {device.conditionDescription}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs py-3 mt-2 border-y border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Battery className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-mono">{device.batteryHealthPercent}% Health</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <HardDrive className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="font-mono truncate">{device.storage}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Cpu className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span className="font-mono truncate">{device.ram} RAM</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-mono truncate">40-Pt Passed</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing row */}
                  <div>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-xl font-extrabold text-slate-900 font-mono tabular-nums">
                          ₹{device.indicativePriceInr.toLocaleString('en-IN')}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          Est. New: <span className="line-through">₹{device.originalEstimatedMrpInr.toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-mono font-semibold text-emerald-600">
                          Save ~{savingsPercent}%
                        </span>
                        <div className="text-[10px] text-slate-400 font-mono">
                          Indicative Benchmark
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setActiveInspectionDevice(device)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-orange-500"
                    >
                      <span>Inspection Sheet</span>
                      <ExternalLink className="w-3 h-3 text-orange-600" />
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleCompare(device)}
                      className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                        isCompared
                          ? 'bg-orange-50 text-orange-700 border-orange-200'
                          : 'text-slate-600 bg-white hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      <Scale className="w-3 h-3" />
                      <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Notice */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
          <div>
            <span className="text-slate-800 font-semibold">Laptop Stock Disclosure: </span>
            {DISCLAIMER_TEXT}
          </div>
          <span className="text-orange-600 font-semibold whitespace-nowrap shrink-0">
            Bengaluru Walk-in Facility
          </span>
        </div>

      </div>

      {/* Modals */}
      <DeviceInspectionModal
        device={activeInspectionDevice}
        onClose={() => setActiveInspectionDevice(null)}
      />

      {isCompareOpen && (
        <DeviceCompareModal
          devices={compareList}
          onRemove={(id) => setCompareList(compareList.filter(d => d.id !== id))}
          onClear={() => setCompareList([])}
          onClose={() => setIsCompareOpen(false)}
        />
      )}
    </section>
  );
};
