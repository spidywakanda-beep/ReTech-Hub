import React, { useState } from 'react';
import { ShoppingBag, ArrowRightLeft, Wrench, Calculator, Info } from 'lucide-react';
import { TRADE_IN_OPTIONS } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell' | 'repair'>('buy');
  
  // State for Trade-in / Sell Value Calculator
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState<number>(0);
  const [selectedCondition, setSelectedCondition] = useState<'pristine' | 'excellent' | 'good' | 'fairNeedsRepair'>('excellent');

  const activeTradeDevice = TRADE_IN_OPTIONS[selectedDeviceIndex] || TRADE_IN_OPTIONS[0];
  const calculatedValuation = Math.round(
    activeTradeDevice.baseValuationInr * activeTradeDevice.conditionMultipliers[selectedCondition]
  );

  return (
    <section id="how-it-works" className="py-16 lg:py-20 border-b border-slate-200/90 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1.5 font-semibold">
            <span>Section 06</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Customer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            How It Works at ReTech Hub
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            A straightforward, transparent process designed to eliminate guesswork whether you are exploring phones, selling an old device, or seeking repair diagnostics.
          </p>
        </div>

        {/* Journey Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-xl border border-slate-200 mb-10 w-fit shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('buy')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'buy'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>01. Buying Tech</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('sell')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'sell'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4" />
            <span>02. Selling & Trade-In</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('repair')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'repair'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>03. Repair & Service</span>
          </button>
        </div>

        {/* Tab 1: Buying Process */}
        {activeTab === 'buy' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="text-xs font-mono text-orange-600 font-bold">Step 01</div>
              <h3 className="text-lg font-bold text-slate-900">Explore Catalog</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review available smartphones and laptops along with real hardware specs, battery capacity percentages, and condition grades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="text-xs font-mono text-slate-700 font-bold">Step 02</div>
              <h3 className="text-lg font-bold text-slate-900">Hands-On Walk-in Test</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our Bengaluru facility. Handle the physical unit, test camera lenses, run multi-touch gestures, and verify speakers before committing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="text-xs font-mono text-emerald-600 font-bold">Step 03</div>
              <h3 className="text-lg font-bold text-slate-900">Documented Handover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive clean IMEI transfer documentation and your 40-point verification certificate with our testing window.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Selling / Trade-In */}
        {activeTab === 'sell' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <div className="text-xs font-mono text-orange-600 font-bold">Step 01</div>
                <h3 className="text-lg font-bold text-slate-900">Estimate Indicative Value</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Use our transparent calculator below to see the realistic price bracket for your device based on cosmetic and hardware status.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <div className="text-xs font-mono text-slate-700 font-bold">Step 02</div>
                <h3 className="text-lg font-bold text-slate-900">Physical Diagnostic Check</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bring the phone or laptop to our Bengaluru hub. Our technician tests screen responsiveness, battery cycles, and motherboard integrity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
                <div className="text-xs font-mono text-emerald-600 font-bold">Step 03</div>
                <h3 className="text-lg font-bold text-slate-900">Instant Direct Payout</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon verification of identity and device clearance, receive an immediate bank transfer or trade-in credit toward an upgrade.
                </p>
              </div>
            </div>

            {/* Interactive Trade-in Calculator */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-orange-600">
                    <Calculator className="w-4 h-4 text-orange-600" />
                    <span className="font-bold uppercase">Indicative Valuation Calculator</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mt-1">
                    Check Device Trade-In / Sale Benchmark
                  </h4>
                </div>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  No Personal Data Collected
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Selectors */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase mb-2">
                      1. Select Your Device
                    </label>
                    <select
                      value={selectedDeviceIndex}
                      onChange={(e) => setSelectedDeviceIndex(Number(e.target.value))}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-orange-500 font-medium"
                    >
                      {TRADE_IN_OPTIONS.map((opt, i) => (
                        <option key={opt.model} value={i}>
                          {opt.brand} - {opt.model} ({opt.deviceType.toUpperCase()})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase mb-2">
                      2. Select Cosmetic & Functional Condition
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedCondition('pristine')}
                        className={`p-3 text-left rounded-xl border text-xs transition-colors ${
                          selectedCondition === 'pristine'
                            ? 'bg-orange-50 border-orange-500 text-slate-900 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <div className="font-bold">Pristine</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Zero scratches, 90%+ battery</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedCondition('excellent')}
                        className={`p-3 text-left rounded-xl border text-xs transition-colors ${
                          selectedCondition === 'excellent'
                            ? 'bg-orange-50 border-orange-500 text-slate-900 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <div className="font-bold">Excellent</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Minor faint scuffs, 85%+ battery</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedCondition('good')}
                        className={`p-3 text-left rounded-xl border text-xs transition-colors ${
                          selectedCondition === 'good'
                            ? 'bg-orange-50 border-orange-500 text-slate-900 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <div className="font-bold">Good</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Visible wear, fully functional</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedCondition('fairNeedsRepair')}
                        className={`p-3 text-left rounded-xl border text-xs transition-colors ${
                          selectedCondition === 'fairNeedsRepair'
                            ? 'bg-orange-50 border-orange-500 text-slate-900 shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <div className="font-bold">Needs Repair</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Cracked glass or degraded cell</div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Output Valuation Card */}
                <div className="lg:col-span-5">
                  <div className="h-full rounded-xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Indicative Valuation</span>
                      <h5 className="text-sm font-bold text-slate-900 mt-1">
                        {activeTradeDevice.model}
                      </h5>
                      <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums mt-3">
                        ₹{calculatedValuation.toLocaleString('en-IN')}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Estimated in-hand payout range (± ₹1,000 depending on original accessories)
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 space-y-1 font-mono">
                      <div>· Requires physical IMEI & functionality test</div>
                      <div>· Must be backed up and factory reset</div>
                      <div>· Payout issued via direct IMPS/NEFT</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Repair Process */}
        {activeTab === 'repair' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="text-xs font-mono text-orange-600 font-bold">Step 01</div>
              <h3 className="text-lg font-bold text-slate-900">Walk-in Triage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bring your smartphone or laptop to our Bengaluru hub. Our technician tests current draw, display touch matrices, and power rails.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="text-xs font-mono text-slate-700 font-bold">Step 02</div>
              <h3 className="text-lg font-bold text-slate-900">Upfront Itemized Quote</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You receive a clear breakdown of replacement parts and labor costs. We never proceed with work without your verbal or written approval.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="text-xs font-mono text-emerald-600 font-bold">Step 03</div>
              <h3 className="text-lg font-bold text-slate-900">Post-Repair Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thermal cameras, touch grids, and charging testers verify the fix. You inspect the completed repair in your hands before payment.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
