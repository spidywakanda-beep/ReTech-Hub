import React, { useState } from 'react';
import { Wrench, Clock, ChevronRight, AlertCircle } from 'lucide-react';
import { REPAIR_SERVICES, DIAGNOSTIC_OPTIONS } from '../data/mockData';

export const RepairEstimator: React.FC = () => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'laptop'>('mobile');
  const [selectedBrandIdx, setSelectedBrandIdx] = useState<number>(0);
  const [selectedIssueKey, setSelectedIssueKey] = useState<string>('screen-crack');

  const currentOptions = DIAGNOSTIC_OPTIONS.filter(o => o.deviceType === deviceType);
  const currentBrand = currentOptions[selectedBrandIdx] || currentOptions[0];
  const activeIssue = currentBrand?.commonIssues.find(i => i.issueKey === selectedIssueKey) || currentBrand?.commonIssues[0];

  return (
    <section id="repairs" className="py-16 lg:py-20 border-b border-slate-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1.5 font-semibold">
            <span>Section 03</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Hardware Diagnostics & Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Mobile & Laptop Repair Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            From precision micro-soldering and ultrasonic liquid decontamination to OEM display panel swaps and thermal overhauls. We diagnose before we quote.
          </p>
        </div>

        {/* 6 Key Repair Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {REPAIR_SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors shadow-2xs hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span className="text-orange-600 font-semibold uppercase">{service.category === 'mobile' ? 'Smartphone Lab' : 'Laptop Lab'}</span>
                  <span>{service.standardTurnaround}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {service.serviceName}
                </h3>
                
                <div className="mt-3 space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Common Symptoms Treated:</div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {service.commonSymptoms.slice(0, 3).map((sym, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-orange-600 font-bold shrink-0">·</span>
                        <span className="leading-tight">{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-baseline justify-between text-xs font-mono">
                  <span className="text-slate-500">Indicative Cost:</span>
                  <span className="font-bold text-slate-900">{service.indicativeCostRange}</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Parts Quality: <span className="text-slate-700 font-medium">{service.partsGrade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Self-Contained Diagnostic & Cost Estimator */}
        <div id="diagnostic-estimator" className="scroll-mt-24 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          
          <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-orange-600 mb-1">
                <Wrench className="w-4 h-4 text-orange-600" />
                <span className="font-bold uppercase">Self-Contained Diagnostic Tool</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-500">Zero Contact Info Required</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
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
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
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
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
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
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                  Step 1: Select Brand / Architecture
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {currentOptions.map((opt, idx) => (
                    <button
                      key={opt.brand}
                      type="button"
                      onClick={() => {
                        setSelectedBrandIdx(idx);
                        setSelectedIssueKey(opt.commonIssues[0]?.issueKey || '');
                      }}
                      className={`p-3 text-left rounded-xl border transition-all text-xs ${
                        selectedBrandIdx === idx
                          ? 'bg-white border-orange-500 text-slate-900 font-semibold shadow-xs'
                          : 'bg-white/80 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-bold text-slate-900">{opt.brand}</div>
                      <div className="text-[10px] text-slate-500 mt-1 truncate">
                        {opt.models.join(', ')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Symptom / Issue Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
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
                          ? 'bg-white border-orange-500 shadow-xs'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2">
                        <div className={`font-semibold ${selectedIssueKey === issue.issueKey ? 'text-slate-900' : 'text-slate-700'}`}>
                          {issue.label}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {issue.symptomDesc}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 ${selectedIssueKey === issue.issueKey ? 'text-orange-600' : 'text-slate-400'}`} />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Step 3: Diagnostic Output & Transparent Breakdown */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-6 shadow-2xs">
                
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-mono text-slate-500 uppercase">Diagnostic Result</span>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                      Standard Triage
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs font-mono text-orange-600 font-semibold uppercase">{currentBrand?.brand}</span>
                    <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                      {activeIssue?.label}
                    </h4>
                  </div>

                  {/* Benchmark Pricing & Turnaround Strip */}
                  <div className="grid grid-cols-2 gap-3 my-5">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Estimated Parts & Labor</div>
                      <div className="text-lg font-extrabold text-slate-900 font-mono mt-1">
                        {activeIssue?.estimatedCostRangeInr}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Transparent benchmark</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 uppercase">
                        <Clock className="w-3 h-3 text-orange-600" />
                        <span>Turnaround</span>
                      </div>
                      <div className="text-base font-bold text-slate-900 font-mono mt-1">
                        {activeIssue?.turnaround}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Bengaluru walk-in lab</div>
                    </div>
                  </div>

                  {/* Protocol Details */}
                  <div className="space-y-2 text-xs">
                    <div className="text-slate-500 font-mono uppercase text-[10px]">
                      Bench Test & Verification Protocol:
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 leading-relaxed">
                      {activeIssue?.inspectionProtocol}
                    </div>
                  </div>
                </div>

                {/* Walk-in instructions */}
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2 font-mono">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>
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
