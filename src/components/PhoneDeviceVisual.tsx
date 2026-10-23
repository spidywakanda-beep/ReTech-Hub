import React, { useState } from 'react';
import { SmartphoneModel } from '../data/smartphoneCatalog';

interface PhoneDeviceVisualProps {
  phone: SmartphoneModel;
  mode?: 'card' | 'modal' | 'compact';
  view?: 'dual' | 'rear' | 'front';
  className?: string;
}

export const PhoneDeviceVisual: React.FC<PhoneDeviceVisualProps> = ({
  phone,
  mode = 'card',
  view = 'dual',
  className = ''
}) => {
  // Determine model characteristics
  const id = phone.id;
  const isIPhone = phone.os === 'ios';

  // Colors & finishes
  let chassisBg = 'bg-slate-900';
  let chassisBorder = 'border-slate-300';
  let frameColor = '#334155';
  let accentName = 'Phantom Black';

  if (id.includes('15-pro')) {
    chassisBg = 'bg-[#43423f]'; // Natural Titanium
    chassisBorder = 'border-[#8f8c85]';
    frameColor = '#5e5c57';
    accentName = 'Natural Titanium';
  } else if (id.includes('14-pro')) {
    chassisBg = 'bg-[#2f2e33]'; // Space Black
    chassisBorder = 'border-[#55535c]';
    frameColor = '#2f2e33';
    accentName = 'Space Black';
  } else if (id.includes('13-pro')) {
    chassisBg = 'bg-[#89a1b5]'; // Sierra Blue
    chassisBorder = 'border-[#b5cad8]';
    frameColor = '#6c869c';
    accentName = 'Sierra Blue';
  } else if (id.includes('s24-ultra')) {
    chassisBg = 'bg-[#3b3a38]'; // Titanium Gray
    chassisBorder = 'border-[#75736f]';
    frameColor = '#4a4946';
    accentName = 'Titanium Gray';
  } else if (id.includes('s23-ultra')) {
    chassisBg = 'bg-[#2b3530]'; // Green
    chassisBorder = 'border-[#56685f]';
    frameColor = '#394640';
    accentName = 'Botanical Green';
  } else if (id.includes('oneplus-12')) {
    chassisBg = 'bg-[#1b332b]'; // Emerald Green
    chassisBorder = 'border-[#3f6556]';
    frameColor = '#2b4d40';
    accentName = 'Emerald Green';
  } else if (id.includes('xiaomi-14')) {
    chassisBg = 'bg-[#181a1b]'; // Leica Black
    chassisBorder = 'border-slate-500';
    frameColor = '#242729';
    accentName = 'Leica Matte Black';
  } else if (id.includes('x100')) {
    chassisBg = 'bg-[#1a2332]'; // Asteroid Black / Starlight
    chassisBorder = 'border-[#485d7e]';
    frameColor = '#253449';
    accentName = 'Asteroid Blue';
  }

  // Camera module layout
  const renderRearCamera = () => {
    // 1. iPhone Pro (3 giant triangle lenses + LiDAR)
    if (id.includes('pro-max') || id.includes('15-pro') || id.includes('14-pro') || id.includes('13-pro')) {
      return (
        <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-1.5 shadow-sm">
          {/* Top Left Lens */}
          <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-950/80 border border-cyan-400/50" />
          </div>
          {/* Bottom Left Lens */}
          <div className="absolute bottom-1.5 left-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-950/80 border border-cyan-400/50" />
          </div>
          {/* Right Center Lens */}
          <div className="absolute top-4 right-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-950/80 border border-cyan-400/50" />
          </div>
          {/* LiDAR Dot */}
          <div className="absolute bottom-2 right-2.5 w-2 h-2 rounded-full bg-slate-900 border border-slate-700" />
          {/* Flash */}
          <div className="absolute top-1.5 right-2.5 w-2.5 h-2.5 rounded-full bg-amber-100 border border-amber-300 shadow-xs" />
        </div>
      );
    }

    // 2. iPhone Diagonal Dual (iPhone 15, 14, 13)
    if (id.includes('iphone-15') || id.includes('iphone-14') || id.includes('iphone-13')) {
      return (
        <div className="relative w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 p-1 shadow-sm">
          <div className="absolute top-1.5 left-1.5 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-300 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-950" />
          </div>
          <div className="absolute bottom-1.5 right-1.5 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-300 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-950" />
          </div>
          <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-100" />
        </div>
      );
    }

    // 3. iPhone SE (Single lens)
    if (id.includes('se-3rd')) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-950" />
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-amber-100" />
        </div>
      );
    }

    // 4. Samsung S24 Ultra & S23 Ultra (Floating 4 rings P-layout)
    if (id.includes('s24-ultra') || id.includes('s23-ultra')) {
      return (
        <div className="flex gap-2">
          {/* Left Column: 3 main cameras */}
          <div className="space-y-1.5">
            <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-cyan-400/60" />
            </div>
            <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
            </div>
            <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-sm">
              <div className="w-2 h-2 rounded-sm bg-slate-800 border border-slate-600" />
            </div>
          </div>
          {/* Right Column: Laser AF, Flash, 3x Tele */}
          <div className="space-y-2 pt-0.5">
            <div className="w-3 h-3 rounded-full bg-red-950 border border-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-100 border border-amber-300" />
            <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            </div>
          </div>
        </div>
      );
    }

    // 5. Samsung S-Series & A-Series (3 vertical floating lenses)
    if (phone.brandKey === 'samsung') {
      return (
        <div className="space-y-1.5">
          <div className="w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-sm">
            <div className="w-2 h-2 rounded-full bg-slate-800" />
          </div>
          <div className="w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-sm">
            <div className="w-2 h-2 rounded-full bg-slate-800" />
          </div>
          <div className="w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-sm">
            <div className="w-2 h-2 rounded-full bg-slate-800" />
          </div>
        </div>
      );
    }

    // 6. OnePlus Flagship (Circular Hasselblad dial)
    if (phone.brandKey === 'oneplus' && (id.includes('oneplus-12') || id.includes('oneplus-11') || id.includes('oneplus-10'))) {
      return (
        <div className="relative w-15 h-15 rounded-full bg-slate-950 border-2 border-slate-500 shadow-md p-1.5 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-1.5 w-full h-full p-0.5">
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-400" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-400" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-400" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-100/90 border border-amber-300" />
          </div>
          <span className="absolute text-[6px] font-mono text-slate-300 font-bold tracking-tighter">H</span>
        </div>
      );
    }

    // 7. Xiaomi Flagship (Square Leica Island)
    if (phone.brandKey === 'xiaomi' && (id.includes('xiaomi-14') || id.includes('xiaomi-13'))) {
      return (
        <div className="relative w-14 h-14 rounded-2xl bg-slate-950 border-2 border-slate-600 p-1.5 shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="text-[6px] font-mono font-bold text-red-500 bg-black/60 px-1 rounded">LEICA</span>
            <div className="w-2 h-2 rounded-full bg-amber-100" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-400" />
            <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-400" />
            <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-400 col-span-2 mx-auto" />
          </div>
        </div>
      );
    }

    // 8. vivo X-Series (Large ZEISS circular disc)
    if (phone.brandKey === 'vivo' && (id.includes('x100') || id.includes('x90'))) {
      return (
        <div className="relative w-15 h-15 rounded-full bg-slate-950 border-2 border-blue-400/80 shadow-md p-1.5 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-1.5 mb-1">
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-400" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-900 border border-slate-400" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[5px] font-mono font-bold text-blue-400">ZEISS</span>
            <span className="text-[5px] font-mono font-bold text-red-500">T*</span>
          </div>
        </div>
      );
    }

    // Default neat camera module
    return (
      <div className="p-1 rounded-xl bg-black/40 border border-white/20 space-y-1">
        <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-400" />
        <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-400" />
      </div>
    );
  };

  // Screen cutout render
  const renderCutout = () => {
    // Dynamic Island
    if (id.includes('15-pro') || id.includes('iphone-15') || id.includes('14-pro')) {
      return (
        <div className="w-11 h-2.5 bg-black rounded-full mx-auto flex items-center justify-between px-1.5 mt-0.5">
          <div className="w-1 h-1 rounded-full bg-cyan-400/80" />
          <div className="w-0.5 h-0.5 rounded-full bg-slate-800" />
        </div>
      );
    }

    // Classic Apple Notch
    if (isIPhone && !id.includes('se-3rd')) {
      return (
        <div className="w-9 h-2 bg-black rounded-b-md mx-auto flex items-center justify-center gap-1">
          <div className="w-1 h-1 rounded-full bg-slate-800" />
          <div className="w-1 h-1 rounded-full bg-blue-900/60" />
        </div>
      );
    }

    // iPhone SE
    if (id.includes('se-3rd')) {
      return (
        <div className="w-5 h-1 bg-slate-800 rounded-full mx-auto mt-1" />
      );
    }

    // Centered Android Punch-Hole
    return (
      <div className="w-1.5 h-1.5 rounded-full bg-black border border-slate-700 mx-auto mt-0.5 flex items-center justify-center">
        <div className="w-0.5 h-0.5 rounded-full bg-cyan-400/70" />
      </div>
    );
  };

  // Dimensions
  const isLarge = mode === 'modal';
  const frontWidth = isLarge ? 'w-34 sm:w-40' : 'w-24';
  const frontHeight = isLarge ? 'h-64 sm:h-74' : 'h-44';
  const rearWidth = isLarge ? 'w-34 sm:w-40' : 'w-24';
  const rearHeight = isLarge ? 'h-64 sm:h-74' : 'h-44';

  return (
    <div className={`relative flex items-center justify-center gap-3 sm:gap-6 ${className}`}>
      
      {/* 1. FRONT DISPLAY VIEW */}
      {(view === 'dual' || view === 'front') && (
        <div className={`relative ${frontWidth} ${frontHeight} ${chassisBg} rounded-[28px] p-1.5 border-2 ${chassisBorder} shadow-md flex flex-col justify-between shrink-0 group/phone transition-transform hover:-translate-y-0.5`}>
          
          {/* Inner Display Glass */}
          <div className="w-full h-full bg-[#08090d] rounded-[22px] p-1.5 flex flex-col justify-between relative overflow-hidden border border-slate-800/80">
            
            {/* Top Cutout */}
            {renderCutout()}

            {/* Screen Wallpaper / UI Graphic */}
            <div className="my-auto text-center space-y-1 py-1">
              <div className="text-[8px] font-mono tracking-wider font-semibold text-white/90 uppercase truncate px-1">
                {phone.name.replace('Samsung Galaxy ', '').replace('Apple ', '').replace('OnePlus ', '')}
              </div>
              <div className="inline-block px-1.5 py-0.5 rounded bg-white/10 text-[7px] font-mono text-orange-400">
                {phone.specs.display.split(',')[0]}
              </div>
            </div>

            {/* Bottom Bar or Home Touch ID */}
            {id.includes('se-3rd') ? (
              <div className="w-4 h-4 rounded-full border border-slate-600 mx-auto mb-0.5" />
            ) : (
              <div className="w-8 h-0.5 bg-slate-500 rounded-full mx-auto mb-0.5" />
            )}

          </div>

          {/* Side Buttons Indicator */}
          <div className="absolute -left-1 top-8 w-0.5 h-4 bg-slate-400 rounded-l" />
          <div className="absolute -left-1 top-14 w-0.5 h-4 bg-slate-400 rounded-l" />
          <div className="absolute -right-1 top-10 w-0.5 h-7 bg-slate-400 rounded-r" />

          {/* Label under device if in modal */}
          {mode === 'modal' && (
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono text-slate-400">
              Front Display
            </div>
          )}
        </div>
      )}

      {/* 2. REAR CHASSIS & CAMERA MODULE VIEW */}
      {(view === 'dual' || view === 'rear') && (
        <div className={`relative ${rearWidth} ${rearHeight} ${chassisBg} rounded-[28px] p-2 border-2 ${chassisBorder} shadow-md flex flex-col justify-between shrink-0 transition-transform hover:-translate-y-0.5`}>
          
          {/* Top Camera Placement */}
          <div className="flex justify-start items-start">
            {renderRearCamera()}
          </div>

          {/* Subtle Brand Logo / Mark in Center/Lower */}
          <div className="text-center my-auto">
            <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest font-bold">
              {phone.brand}
            </span>
          </div>

          {/* Bottom regulatory clean mark */}
          <div className="text-center pb-1">
            <span className="text-[6px] font-mono text-white/20 uppercase tracking-wider">
              {phone.releaseYear} · Verified
            </span>
          </div>

          {/* Label under device if in modal */}
          {mode === 'modal' && (
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono text-slate-400">
              Rear Module ({accentName})
            </div>
          )}
        </div>
      )}

    </div>
  );
};
