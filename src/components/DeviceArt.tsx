import React from 'react';

interface DeviceArtProps {
  type: 
    | 'iphone-pro'
    | 'iphone-standard'
    | 'iphone-se'
    | 'samsung-ultra'
    | 'samsung-s'
    | 'samsung-a'
    | 'oneplus-flagship'
    | 'oneplus-nord'
    | 'xiaomi-leica'
    | 'xiaomi-redmi'
    | 'vivo-zeiss'
    | 'vivo-v'
    | 'macbook'
    | 'thinkpad'
    | 'dell'
    | 'gan-charger'
    | 'cable'
    | 'screen-protector'
    | 'case'
    | 'laptop-stand'
    | 'pcb-repair'
    | 'battery-repair'
    | 'thermal-repair'
    | string;
  className?: string;
  accentColor?: string;
}

export const DeviceArt: React.FC<DeviceArtProps> = ({ type, className = '', accentColor = '#ea580c' }) => {
  // Common clean container
  const containerClass = `relative w-full h-full flex items-center justify-center p-4 bg-slate-50/80 transition-colors ${className}`;

  switch (type) {
    case 'iphone-pro':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-900 rounded-[32px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-950 rounded-[26px] p-2 flex flex-col justify-between relative overflow-hidden border border-slate-800">
              {/* Dynamic Island */}
              <div className="w-14 h-3 bg-black rounded-full mx-auto flex items-center justify-between px-1.5">
                <div className="w-1 h-1 rounded-full bg-cyan-400" />
                <div className="w-1 h-1 rounded-full bg-slate-700" />
              </div>
              {/* Screen graphic */}
              <div className="text-center space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-300">Super Retina XDR</div>
                <div className="text-[8px] font-mono text-orange-400">120Hz ProMotion</div>
              </div>
              {/* Home bar */}
              <div className="w-10 h-0.5 bg-slate-600 rounded-full mx-auto mb-0.5" />
            </div>
            {/* Action button indicator */}
            <div className="absolute -left-1 top-10 w-0.5 h-4 bg-slate-400 rounded-l" />
          </div>
        </div>
      );

    case 'iphone-standard':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-800 rounded-[30px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-900 rounded-[24px] p-2 flex flex-col justify-between relative overflow-hidden">
              <div className="w-12 h-3 bg-black rounded-full mx-auto" />
              <div className="text-center space-y-1">
                <div className="text-[9px] font-mono text-slate-300">OLED Display</div>
                <div className="text-[8px] font-mono text-slate-400">Ceramic Shield</div>
              </div>
              <div className="w-10 h-0.5 bg-slate-500 rounded-full mx-auto mb-0.5" />
            </div>
          </div>
        </div>
      );

    case 'iphone-se':
      return (
        <div className={containerClass}>
          <div className="relative w-26 h-46 bg-slate-800 rounded-[22px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-900 rounded-[16px] p-2 flex flex-col justify-between relative">
              <div className="w-6 h-1 bg-slate-700 rounded-full mx-auto mt-1" />
              <div className="text-center">
                <div className="text-[9px] font-mono text-slate-300">Retina HD</div>
                <div className="text-[8px] font-mono text-slate-400">4.7" Compact</div>
              </div>
              {/* Touch ID Circle */}
              <div className="w-5 h-5 rounded-full border border-slate-600 mx-auto flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full border border-slate-700" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'samsung-ultra':
      return (
        <div className={containerClass}>
          <div className="relative w-30 h-50 bg-slate-900 rounded-[14px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-950 rounded-[10px] p-2 flex flex-col justify-between relative border border-slate-800">
              {/* Punch-hole camera */}
              <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5" />
              <div className="text-center space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-200">200MP Quad Cam</div>
                <div className="text-[8px] font-mono text-cyan-400">Dynamic AMOLED 2X</div>
              </div>
              <div className="flex justify-between items-center text-[7px] font-mono text-slate-500 px-1">
                <span>S-Pen</span>
                <span>120Hz</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'samsung-s':
    case 'samsung-a':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-900 rounded-[24px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-950 rounded-[18px] p-2 flex flex-col justify-between relative border border-slate-800">
              <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5" />
              <div className="text-center space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-200">Super AMOLED</div>
                <div className="text-[8px] font-mono text-orange-400">50MP OIS Camera</div>
              </div>
              <div className="w-8 h-0.5 bg-slate-600 rounded-full mx-auto mb-0.5" />
            </div>
          </div>
        </div>
      );

    case 'oneplus-flagship':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-900 rounded-[26px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-950 rounded-[20px] p-2 flex flex-col justify-between relative border border-slate-800">
              {/* Top notch/hole */}
              <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5" />
              {/* Circular Camera Dial graphic */}
              <div className="text-center space-y-1.5">
                <div className="w-12 h-12 rounded-full border border-slate-600 mx-auto flex items-center justify-center bg-slate-900">
                  <span className="text-[8px] font-mono text-slate-300 font-bold">HASSELBLAD</span>
                </div>
                <div className="text-[8px] font-mono text-orange-400">100W SuperVOOC</div>
              </div>
              <div className="w-8 h-0.5 bg-slate-600 rounded-full mx-auto mb-0.5" />
            </div>
            {/* Alert slider */}
            <div className="absolute -left-1 top-8 w-0.5 h-5 bg-orange-400 rounded-l" />
          </div>
        </div>
      );

    case 'oneplus-nord':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-800 rounded-[24px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-900 rounded-[18px] p-2 flex flex-col justify-between relative">
              <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5" />
              <div className="text-center space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-200">Nord Series</div>
                <div className="text-[8px] font-mono text-cyan-400">120Hz Fluid Display</div>
              </div>
              <div className="w-8 h-0.5 bg-slate-600 rounded-full mx-auto mb-0.5" />
            </div>
          </div>
        </div>
      );

    case 'xiaomi-leica':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-900 rounded-[26px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-950 rounded-[20px] p-2 flex flex-col justify-between relative border border-slate-800">
              <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5" />
              <div className="text-center space-y-1.5">
                <div className="w-10 h-10 rounded-lg border border-red-500/60 mx-auto flex items-center justify-center bg-slate-900">
                  <span className="text-[7px] font-mono text-red-400 font-bold">LEICA</span>
                </div>
                <div className="text-[8px] font-mono text-slate-300">1-inch / Summilux</div>
              </div>
              <div className="w-8 h-0.5 bg-slate-600 rounded-full mx-auto mb-0.5" />
            </div>
          </div>
        </div>
      );

    case 'xiaomi-redmi':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-800 rounded-[22px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-900 rounded-[16px] p-2 flex flex-col justify-between relative">
              <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5" />
              <div className="text-center space-y-1">
                <div className="text-[9px] font-mono font-bold text-slate-200">Redmi Note</div>
                <div className="text-[8px] font-mono text-orange-400">200MP OIS · 120W</div>
              </div>
              <div className="w-8 h-0.5 bg-slate-600 rounded-full mx-auto mb-0.5" />
            </div>
          </div>
        </div>
      );

    case 'vivo-zeiss':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-900 rounded-[26px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-950 rounded-[20px] p-2 flex flex-col justify-between relative border border-slate-800">
              <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5" />
              <div className="text-center space-y-1.5">
                <div className="w-11 h-11 rounded-full border border-blue-400/60 mx-auto flex items-center justify-center bg-slate-900">
                  <span className="text-[7px] font-mono text-blue-400 font-bold">ZEISS T*</span>
                </div>
                <div className="text-[8px] font-mono text-slate-300">APO Telephoto</div>
              </div>
              <div className="w-8 h-0.5 bg-slate-600 rounded-full mx-auto mb-0.5" />
            </div>
          </div>
        </div>
      );

    case 'vivo-v':
      return (
        <div className={containerClass}>
          <div className="relative w-28 h-48 bg-slate-900 rounded-[26px] p-1.5 border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full bg-slate-950 rounded-[20px] p-2 flex flex-col justify-between relative border border-slate-800">
              <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5" />
              <div className="text-center space-y-1.5">
                <div className="w-8 h-8 rounded-full border border-orange-400/70 mx-auto flex items-center justify-center bg-slate-900">
                  <div className="w-4 h-4 rounded-full border border-dashed border-orange-300" />
                </div>
                <div className="text-[8px] font-mono text-orange-400">Smart Aura Light</div>
              </div>
              <div className="w-8 h-0.5 bg-slate-600 rounded-full mx-auto mb-0.5" />
            </div>
          </div>
        </div>
      );

    case 'macbook':
      return (
        <div className={containerClass}>
          <div className="relative flex flex-col items-center">
            <div className="w-48 h-30 bg-slate-900 rounded-t-lg p-1.5 border border-slate-400 shadow-sm flex flex-col justify-between">
              <div className="w-full h-full bg-slate-950 rounded-t p-2 flex flex-col justify-between relative">
                <div className="w-8 h-1.5 bg-slate-800 rounded-b mx-auto" />
                <div className="text-center">
                  <div className="text-[9px] font-mono text-slate-200 font-bold">Liquid Retina XDR</div>
                  <div className="text-[8px] font-mono text-orange-400">Apple Silicon Pro</div>
                </div>
                <div className="w-8 h-0.5 bg-slate-700 rounded-full mx-auto" />
              </div>
            </div>
            <div className="w-56 h-3 bg-slate-300 rounded-b border-t border-slate-400 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-400 rounded-full" />
            </div>
          </div>
        </div>
      );

    case 'thinkpad':
      return (
        <div className={containerClass}>
          <div className="relative flex flex-col items-center">
            <div className="w-48 h-30 bg-slate-900 rounded-t-sm p-1.5 border border-slate-400 shadow-sm flex flex-col justify-between">
              <div className="w-full h-full bg-slate-950 p-2 flex flex-col justify-between relative">
                <div className="w-1 h-1 bg-slate-600 rounded-full mx-auto" />
                <div className="text-center">
                  <div className="text-[9px] font-mono text-slate-200 font-bold">ThinkPad T14</div>
                  <div className="text-[8px] font-mono text-slate-400">MIL-STD 810H</div>
                </div>
                <div className="w-8 h-0.5 bg-slate-700 rounded-full mx-auto" />
              </div>
            </div>
            <div className="w-56 h-3 bg-slate-800 rounded-b border-t border-slate-600 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
            </div>
          </div>
        </div>
      );

    case 'dell':
      return (
        <div className={containerClass}>
          <div className="relative flex flex-col items-center">
            <div className="w-48 h-30 bg-slate-900 rounded-t-md p-1 border border-slate-400 shadow-sm flex flex-col justify-between">
              <div className="w-full h-full bg-slate-950 p-2 flex flex-col justify-between relative">
                <div className="text-center mt-3">
                  <div className="text-[9px] font-mono text-slate-200 font-bold">XPS 13 InfinityEdge</div>
                  <div className="text-[8px] font-mono text-cyan-400">Carbon Fiber Deck</div>
                </div>
                <div className="w-8 h-0.5 bg-slate-700 rounded-full mx-auto" />
              </div>
            </div>
            <div className="w-56 h-3 bg-slate-300 rounded-b border-t border-slate-400 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-400 rounded-full" />
            </div>
          </div>
        </div>
      );

    case 'gan-charger':
      return (
        <div className={containerClass}>
          <div className="w-24 h-24 bg-white rounded-2xl border border-slate-300 p-2.5 shadow-sm flex flex-col justify-between">
            <span className="text-[9px] font-mono font-bold text-orange-600">GaN III</span>
            <div className="space-y-1">
              <div className="w-6 h-1.5 bg-slate-200 rounded mx-auto" />
              <div className="w-6 h-1.5 bg-slate-200 rounded mx-auto" />
            </div>
            <span className="text-[8px] font-mono text-slate-500 text-center">Fast PD</span>
          </div>
        </div>
      );

    case 'cable':
      return (
        <div className={containerClass}>
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
            <div className="text-center">
              <span className="text-[9px] font-mono font-bold text-slate-800">100W PD</span>
              <div className="text-[7px] font-mono text-slate-500">Braided</div>
            </div>
          </div>
        </div>
      );

    case 'screen-protector':
      return (
        <div className={containerClass}>
          <div className="w-20 h-32 rounded-xl border-2 border-cyan-400/80 bg-white/70 shadow-sm flex flex-col justify-between p-2">
            <span className="text-[8px] font-mono font-bold text-cyan-700 text-center">9H Glass</span>
            <span className="text-[7px] font-mono text-slate-500 text-center">Oleophobic</span>
          </div>
        </div>
      );

    case 'case':
      return (
        <div className={containerClass}>
          <div className="w-22 h-34 rounded-2xl border-2 border-slate-400 bg-slate-100 flex flex-col justify-between p-2 shadow-sm">
            <span className="text-[7px] font-mono text-orange-600 font-bold">10ft Drop</span>
            <div className="w-8 h-8 rounded-full border border-slate-300 mx-auto" />
            <span className="text-[7px] font-mono text-slate-500 text-center">Airbag Corners</span>
          </div>
        </div>
      );

    case 'laptop-stand':
      return (
        <div className={containerClass}>
          <div className="w-28 h-18 border-b-2 border-l-2 border-r-2 border-slate-400 rounded bg-slate-100 flex items-center justify-center shadow-sm">
            <span className="text-[8px] font-mono font-bold text-slate-700">AeroLift 6-Level</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={containerClass}>
          <div className="w-24 h-40 bg-slate-900 rounded-2xl p-2 border border-slate-300 flex items-center justify-center">
            <span className="text-[9px] font-mono text-slate-400">ReTech Hardware</span>
          </div>
        </div>
      );
  }
};
