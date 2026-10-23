import React from 'react';
import { ShieldCheck, FileCheck, Recycle, MapPin, CheckCircle2, Cpu, BatteryCharging, Radio, Thermometer } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="standards" className="py-16 lg:py-20 border-b border-slate-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-600 mb-1.5 font-semibold">
            <span>Section 05</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Operating Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Why Choose ReTech Hub
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            We built ReTech Hub around radical hardware transparency: testing every circuit, providing itemized quotes before repair, and guaranteeing authentic pre-owned performance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {WHY_CHOOSE_US_POINTS.map((point, index) => {
            const icons = [ShieldCheck, FileCheck, Recycle, MapPin];
            const Icon = icons[index] || ShieldCheck;

            return (
              <div
                key={point.title}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-7 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {point.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Owner's Operational Commitment */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-600 uppercase tracking-wider font-semibold">
              <span>Owner's Operational Commitment</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700">Sanfi, Founder & Operator</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed italic">
              "At ReTech Hub, our philosophy is simple: test every circuit with integrity, never recommend unnecessary part replacements, and give every customer in Bengaluru the certainty of hands-on device testing before buying or leaving a repair."
            </p>
          </div>
          <div className="shrink-0 text-left sm:text-right font-mono text-xs">
            <div className="text-slate-900 font-bold text-sm">Sanfi</div>
            <div className="text-slate-500 text-[11px]">ReTech Hub · Bengaluru, India</div>
          </div>
        </div>

        {/* Detailed 40-Point Laboratory Protocol Matrix */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-2xs">
          <div className="border-b border-slate-200 pb-5 mb-6">
            <span className="text-xs font-mono text-orange-600 uppercase tracking-wider font-semibold">
              Diagnostic Standards Matrix
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              40-Point Device Health Verification
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every refurbished phone and laptop in our Bengaluru facility must pass all six test clusters prior to being listed in our catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Cluster 1: Display */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>01. Display & Touch Digitizer</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 pl-6 list-disc">
                <li>Subpixel RGB color uniformity inspection</li>
                <li>Dynamic refresh rate test (60Hz / 120Hz)</li>
                <li>100-point multi-touch gesture sweep</li>
                <li>TrueTone & ambient light sensor calibration</li>
              </ul>
            </div>

            {/* Cluster 2: Battery */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <BatteryCharging className="w-4 h-4 text-orange-600 shrink-0" />
                <span>02. Battery & Power Delivery</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 pl-6 list-disc">
                <li>Coulomb counter cycle and health check</li>
                <li>Continuous high-drain discharge stress test</li>
                <li>Fast charging PD/PPS negotiation at max wattage</li>
                <li>Physical pouch swelling & zero-leak check</li>
              </ul>
            </div>

            {/* Cluster 3: Silicon */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Thermometer className="w-4 h-4 text-orange-600 shrink-0" />
                <span>03. Thermals & Silicon Stability</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 pl-6 list-disc">
                <li>20-minute sustained Cinebench / AIDA stress test</li>
                <li>Infrared thermal inspection of power rails</li>
                <li>Fan bearing noise and RPM curve audit</li>
                <li>SMD capacitor & choke vibration test</li>
              </ul>
            </div>

            {/* Cluster 4: Biometrics */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>04. Biometrics & IMEI Integrity</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 pl-6 list-disc">
                <li>Apple FaceID / TouchID / Windows Hello sensor</li>
                <li>National lost/stolen blacklist IMEI verification</li>
                <li>MDM, iCloud, and enterprise lockout clearance</li>
                <li>dTPM 2.0 cryptographic chip functional test</li>
              </ul>
            </div>

            {/* Cluster 5: Wireless */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Radio className="w-4 h-4 text-orange-600 shrink-0" />
                <span>05. Cellular, Wi-Fi & Acoustics</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 pl-6 list-disc">
                <li>5G / 4G dual SIM reception on local Indian carriers</li>
                <li>Wi-Fi 6E 5GHz/6GHz sustained throughput</li>
                <li>Multi-mic noise cancellation echo suppression</li>
                <li>Stereo speaker diaphragm clarity at maximum gain</li>
              </ul>
            </div>

            {/* Cluster 6: Ports */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Cpu className="w-4 h-4 text-slate-700 shrink-0" />
                <span>06. Storage & Physical Ports</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1 pl-6 list-disc">
                <li>NVMe / UFS SSD SMART health & TBW check</li>
                <li>Thunderbolt 4 / USB-C 40Gbps loopback data test</li>
                <li>Hinge opening torque & keyboard scissor switches</li>
                <li>Microphone and headphone jack impedance test</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
