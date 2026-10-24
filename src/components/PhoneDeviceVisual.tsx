import React from 'react';
import { SmartphoneModel } from '../data/smartphoneCatalog';

interface PhoneDeviceVisualProps {
  phone: SmartphoneModel;
  mode?: 'card' | 'modal' | 'compact';
  view?: 'dual' | 'rear' | 'front';
  className?: string;
  large?: boolean;
}

// Model-specific authentic color palettes and chassis properties
interface PhoneChassisDesign {
  bodyColor: string;
  frameBorder: string;
  accentName: string;
  cornerRadius: string;
  isBoxy?: boolean;
  materialFinish: string;
  wallpaperGradient: string;
  islandType: 'dynamic-island' | 'punch-hole' | 'classic-notch' | 'top-bezel';
}

function getChassisDesign(phone: SmartphoneModel): PhoneChassisDesign {
  const id = phone.id.toLowerCase();
  const brand = phone.brandKey.toLowerCase();

  // Apple iPhones
  if (brand === 'apple') {
    if (id.includes('15-pro') || id.includes('15-pro-max')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#8f8a81] via-[#7d7971] to-[#6e6a62]',
        frameBorder: 'border-[#9c978e]',
        accentName: 'Natural Titanium',
        cornerRadius: 'rounded-[34px] sm:rounded-[38px]',
        materialFinish: 'frosted-titanium',
        wallpaperGradient: 'from-[#423d33] via-[#1c1a17] to-[#0a0a09]',
        islandType: 'dynamic-island'
      };
    }
    if (id.includes('14-pro')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#41394e] via-[#2f273b] to-[#20192a]',
        frameBorder: 'border-[#5b516c]',
        accentName: 'Deep Purple',
        cornerRadius: 'rounded-[34px] sm:rounded-[38px]',
        materialFinish: 'frosted-glass',
        wallpaperGradient: 'from-[#4b2f6b] via-[#1a0f2b] to-[#07030e]',
        islandType: 'dynamic-island'
      };
    }
    if (id.includes('13-pro') || id.includes('13-pro-max')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#9bb3c4] via-[#7e99ab] to-[#688496]',
        frameBorder: 'border-[#a8bed0]',
        accentName: 'Sierra Blue',
        cornerRadius: 'rounded-[32px] sm:rounded-[36px]',
        materialFinish: 'frosted-glass',
        wallpaperGradient: 'from-[#1e3a5f] via-[#0b1b30] to-[#040810]',
        islandType: 'classic-notch'
      };
    }
    if (id.includes('12-pro')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#314a5d] via-[#233543] to-[#182530]',
        frameBorder: 'border-[#43637b]',
        accentName: 'Pacific Blue',
        cornerRadius: 'rounded-[32px] sm:rounded-[36px]',
        materialFinish: 'matte-glass',
        wallpaperGradient: 'from-[#19324a] via-[#091523] to-[#020509]',
        islandType: 'classic-notch'
      };
    }
    if (id.includes('15')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#e3eaf0] via-[#cddbe5] to-[#bccdd8]',
        frameBorder: 'border-[#b5c7d5]',
        accentName: 'Pastel Blue',
        cornerRadius: 'rounded-[32px] sm:rounded-[36px]',
        materialFinish: 'color-infused-glass',
        wallpaperGradient: 'from-[#38bdf8] via-[#0369a1] to-[#082f49]',
        islandType: 'dynamic-island'
      };
    }
    if (id.includes('14') || id.includes('13')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#1f2937] via-[#111827] to-[#030712]',
        frameBorder: 'border-slate-600',
        accentName: 'Midnight',
        cornerRadius: 'rounded-[32px] sm:rounded-[36px]',
        materialFinish: 'glossy-glass',
        wallpaperGradient: 'from-[#e11d48] via-[#881337] to-[#0f172a]',
        islandType: 'classic-notch'
      };
    }
    // XR / 8 / SE
    return {
      bodyColor: 'bg-gradient-to-b from-[#27272a] via-[#18181b] to-[#09090b]',
      frameBorder: 'border-slate-500',
      accentName: 'Space Gray',
      cornerRadius: 'rounded-[28px] sm:rounded-[32px]',
      materialFinish: 'aluminum-glass',
      wallpaperGradient: 'from-[#f97316] via-[#9a3412] to-[#0f172a]',
      islandType: id.includes('xr') || id.includes('iphone-x') ? 'classic-notch' : 'top-bezel'
    };
  }

  // Samsung Galaxy
  if (brand === 'samsung') {
    if (id.includes('s24-ultra') || id.includes('s23-ultra') || id.includes('s22-ultra')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#42413e] via-[#333230] to-[#262524]',
        frameBorder: 'border-[#615f5a]',
        accentName: 'Titanium Gray',
        cornerRadius: 'rounded-[8px] sm:rounded-[10px]',
        isBoxy: true,
        materialFinish: 'satin-titanium',
        wallpaperGradient: 'from-[#ca8a04] via-[#713f12] to-[#09090b]',
        islandType: 'punch-hole'
      };
    }
    if (id.includes('s24') || id.includes('s23') || id.includes('s22')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#2a2c30] via-[#1c1d20] to-[#121315]',
        frameBorder: 'border-[#474a52]',
        accentName: 'Phantom Black',
        cornerRadius: 'rounded-[30px] sm:rounded-[34px]',
        materialFinish: 'satin-glass',
        wallpaperGradient: 'from-[#6366f1] via-[#312e81] to-[#020617]',
        islandType: 'punch-hole'
      };
    }
    // Galaxy A Series / FE
    return {
      bodyColor: 'bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#0f172a]',
      frameBorder: 'border-slate-500',
      accentName: 'Awesome Navy',
      cornerRadius: 'rounded-[28px] sm:rounded-[32px]',
      materialFinish: 'glastic',
      wallpaperGradient: 'from-[#06b6d4] via-[#0e7490] to-[#082f49]',
      islandType: 'punch-hole'
    };
  }

  // OnePlus
  if (brand === 'oneplus') {
    if (id.includes('13') || id.includes('12')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#183a2f] via-[#0f261f] to-[#071510]',
        frameBorder: 'border-[#2d6150]',
        accentName: 'Flowy Emerald',
        cornerRadius: 'rounded-[32px] sm:rounded-[36px]',
        materialFinish: 'marble-silk-glass',
        wallpaperGradient: 'from-[#10b981] via-[#047857] to-[#022c22]',
        islandType: 'punch-hole'
      };
    }
    return {
      bodyColor: 'bg-gradient-to-b from-[#1e2229] via-[#13161b] to-[#0a0c0e]',
      frameBorder: 'border-slate-600',
      accentName: 'Silky Black',
      cornerRadius: 'rounded-[30px] sm:rounded-[34px]',
      materialFinish: 'matte-frosted',
      wallpaperGradient: 'from-[#ef4444] via-[#991b1b] to-[#18181b]',
      islandType: 'punch-hole'
    };
  }

  // Xiaomi & Redmi
  if (brand === 'xiaomi') {
    if (id.includes('14') || id.includes('13-pro')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#26282b] via-[#18191c] to-[#0c0d0e]',
        frameBorder: 'border-[#4e5158]',
        accentName: 'Black Ceramic',
        cornerRadius: 'rounded-[30px] sm:rounded-[34px]',
        materialFinish: 'nano-tech-leather',
        wallpaperGradient: 'from-[#f59e0b] via-[#78350f] to-[#0c0a09]',
        islandType: 'punch-hole'
      };
    }
    return {
      bodyColor: 'bg-gradient-to-b from-[#2b3544] via-[#192231] to-[#0c121d]',
      frameBorder: 'border-slate-600',
      accentName: 'Midnight Ocean',
      cornerRadius: 'rounded-[28px] sm:rounded-[32px]',
      materialFinish: 'curved-glass',
      wallpaperGradient: 'from-[#3b82f6] via-[#1e40af] to-[#0f172a]',
      islandType: 'punch-hole'
    };
  }

  // vivo
  if (brand === 'vivo') {
    if (id.includes('x100') || id.includes('x90')) {
      return {
        bodyColor: 'bg-gradient-to-b from-[#282d36] via-[#181c22] to-[#0c0f13]',
        frameBorder: 'border-[#4c5565]',
        accentName: 'Asteroid Black',
        cornerRadius: 'rounded-[32px] sm:rounded-[36px]',
        materialFinish: 'fluorite-ag-glass',
        wallpaperGradient: 'from-[#0ea5e9] via-[#0369a1] to-[#082f49]',
        islandType: 'punch-hole'
      };
    }
    return {
      bodyColor: 'bg-gradient-to-b from-[#233544] via-[#16222d] to-[#0a1017]',
      frameBorder: 'border-slate-600',
      accentName: 'Andaman Blue',
      cornerRadius: 'rounded-[30px] sm:rounded-[34px]',
      materialFinish: 'peacock-glass',
      wallpaperGradient: 'from-[#14b8a6] via-[#0f766e] to-[#042f2e]',
      islandType: 'punch-hole'
    };
  }

  // Default
  return {
    bodyColor: 'bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950',
    frameBorder: 'border-slate-600',
    accentName: 'Standard Black',
    cornerRadius: 'rounded-[30px] sm:rounded-[34px]',
    materialFinish: 'matte',
    wallpaperGradient: 'from-orange-600 via-slate-900 to-black',
    islandType: 'punch-hole'
  };
}

// Authentic OEM Rear Camera Module Renderer
const AuthenticRearCameraModule: React.FC<{ phone: SmartphoneModel; isLarge: boolean }> = ({ phone, isLarge }) => {
  const id = phone.id.toLowerCase();
  const brand = phone.brandKey.toLowerCase();

  // 1. Apple iPhone Pro Series (15 Pro, 15 Pro Max, 14 Pro, 13 Pro, 12 Pro, 11 Pro)
  if (brand === 'apple' && (id.includes('pro') || id.includes('pro-max'))) {
    const islandSize = isLarge ? 'w-24 h-24 p-2' : 'w-20 h-20 p-1.5';
    const lensSize = isLarge ? 'w-8 h-8' : 'w-6.5 h-6.5';
    const pupilSize = isLarge ? 'w-4 h-4' : 'w-3 h-3';

    return (
      <div
        className={`relative ${islandSize} rounded-2xl bg-white/12 backdrop-blur-md border border-white/25 shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]`}
      >
        {/* Top-Left Lens (Main 48MP Wide) */}
        <div
          className={`absolute top-2 left-2 ${lensSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-800 to-black p-0.5 shadow-md flex items-center justify-center`}
        >
          <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative overflow-hidden">
            <div className={`${pupilSize} rounded-full bg-gradient-to-tr from-cyan-950 via-slate-950 to-blue-900 border border-cyan-500/40`} />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]" />
          </div>
        </div>

        {/* Bottom-Left Lens (Ultra Wide) */}
        <div
          className={`absolute bottom-2 left-2 ${lensSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-800 to-black p-0.5 shadow-md flex items-center justify-center`}
        >
          <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative overflow-hidden">
            <div className={`${pupilSize} rounded-full bg-gradient-to-tr from-blue-950 via-slate-950 to-indigo-900 border border-blue-500/40`} />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]" />
          </div>
        </div>

        {/* Center-Right Lens (5x / 3x Telephoto Tetraprism) */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-2 ${lensSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-800 to-black p-0.5 shadow-md flex items-center justify-center`}
        >
          <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative overflow-hidden">
            <div className={`${pupilSize} rounded-full bg-gradient-to-tr from-slate-900 via-blue-950 to-teal-900 border border-cyan-400/40`} />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]" />
          </div>
        </div>

        {/* True-Tone Dual LED Flash (Top Right) */}
        <div className="absolute top-2.5 right-3.5 w-3 h-3 rounded-full bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 border border-amber-400 shadow-xs flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
        </div>

        {/* LiDAR Scanner (Bottom Right) */}
        <div className="absolute bottom-2.5 right-3.5 w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700 shadow-inner" />

        {/* Rear Microphone pinhole */}
        <div className="absolute top-1/2 -translate-y-1/2 right-8 w-1 h-1 rounded-full bg-slate-950 border border-slate-800" />
      </div>
    );
  }

  // 2. Apple iPhone Standard Series (15, 14, 13 - Diagonal Dual Camera)
  if (brand === 'apple' && (id.includes('15') || id.includes('14') || id.includes('13'))) {
    const islandSize = isLarge ? 'w-22 h-22 p-2' : 'w-18 h-18 p-1.5';
    const lensSize = isLarge ? 'w-8 h-8' : 'w-6.5 h-6.5';
    const pupilSize = isLarge ? 'w-4 h-4' : 'w-3 h-3';

    return (
      <div
        className={`relative ${islandSize} rounded-2xl bg-white/12 backdrop-blur-md border border-white/25 shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]`}
      >
        {/* Top-Left Lens */}
        <div
          className={`absolute top-2 left-2 ${lensSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-800 to-black p-0.5 shadow-md flex items-center justify-center`}
        >
          <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative overflow-hidden">
            <div className={`${pupilSize} rounded-full bg-gradient-to-tr from-cyan-950 via-slate-950 to-blue-900 border border-cyan-500/40`} />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]" />
          </div>
        </div>

        {/* Bottom-Right Lens (Diagonal) */}
        <div
          className={`absolute bottom-2 right-2 ${lensSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-800 to-black p-0.5 shadow-md flex items-center justify-center`}
        >
          <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative overflow-hidden">
            <div className={`${pupilSize} rounded-full bg-gradient-to-tr from-blue-950 via-slate-950 to-indigo-900 border border-blue-500/40`} />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/60 blur-[0.5px]" />
          </div>
        </div>

        {/* True-Tone LED Flash (Top Right) */}
        <div className="absolute top-2.5 right-3 w-3 h-3 rounded-full bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 border border-amber-400 shadow-xs flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
        </div>

        {/* Microphone (Bottom Left) */}
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-700" />
      </div>
    );
  }

  // 3. Apple iPhone 12 / 11 / XR / 8 / SE (Vertical dual or single)
  if (brand === 'apple') {
    const isSingle = id.includes('xr') || id.includes('se') || id.includes('8') || id.includes('7');
    return (
      <div className="p-1.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 shadow-sm flex flex-col items-center gap-1.5">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-300 via-slate-700 to-black p-0.5 flex items-center justify-center shadow-xs">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative">
            <div className="w-3.5 h-3.5 rounded-full bg-blue-950 border border-cyan-400/50" />
            <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-white/60" />
          </div>
        </div>
        {!isSingle && (
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-300 via-slate-700 to-black p-0.5 flex items-center justify-center shadow-xs">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative">
              <div className="w-3.5 h-3.5 rounded-full bg-indigo-950 border border-blue-400/50" />
            </div>
          </div>
        )}
        <div className="w-2.5 h-2.5 rounded-full bg-amber-200 border border-amber-300 mt-0.5" />
      </div>
    );
  }

  // 4. Samsung Galaxy S24 Ultra / S23 Ultra / S22 Ultra (Floating 5-Ring Array)
  if (brand === 'samsung' && id.includes('ultra')) {
    const ringSize = isLarge ? 'w-7.5 h-7.5' : 'w-6 h-6';
    const subRingSize = isLarge ? 'w-5 h-5' : 'w-4 h-4';

    return (
      <div className="flex gap-2 p-1">
        {/* Left Column: 3 Major Floating Lenses (200MP Main, Ultra-Wide, Periscope) */}
        <div className="flex flex-col gap-2">
          {/* Main 200MP Wide */}
          <div className={`${ringSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-700 to-slate-950 p-0.5 shadow-md flex items-center justify-center`}>
            <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative">
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-cyan-950 via-slate-950 to-blue-900 border border-cyan-400/60" />
              <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-white/70" />
            </div>
          </div>

          {/* Ultra Wide */}
          <div className={`${ringSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-700 to-slate-950 p-0.5 shadow-md flex items-center justify-center`}>
            <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative">
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-950 via-slate-950 to-indigo-900 border border-blue-400/60" />
              <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-white/70" />
            </div>
          </div>

          {/* 5x/10x Periscope Telephoto with rectangular prism cutout inside */}
          <div className={`${ringSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-700 to-slate-950 p-0.5 shadow-md flex items-center justify-center`}>
            <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative">
              <div className="w-3 h-2 rounded-[2px] bg-slate-900 border border-amber-500/50" />
            </div>
          </div>
        </div>

        {/* Right Column: Laser AF + LED Flash + 3x Telephoto */}
        <div className="flex flex-col gap-2.5 pt-1">
          {/* Laser Auto-Focus Sensor (Red Dot) */}
          <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-700 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 border border-red-400" />
          </div>

          {/* True-Tone LED Flash */}
          <div className="w-3.5 h-3.5 rounded-full bg-amber-100 border border-amber-300 shadow-2xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          </div>

          {/* 3x Telephoto lens */}
          <div className={`${subRingSize} rounded-full bg-gradient-to-br from-slate-300 via-slate-700 to-slate-950 p-0.5 shadow-sm flex items-center justify-center mt-1`}>
            <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-800 border border-cyan-400/40" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. Samsung Galaxy S24 / S23 / S22 / S23 FE / A55 (Vertical Trio of Floating Lenses)
  if (brand === 'samsung') {
    const ringSize = isLarge ? 'w-7.5 h-7.5' : 'w-6.5 h-6.5';
    return (
      <div className="flex items-start gap-2 p-1">
        <div className="flex flex-col gap-2">
          {/* Top Lens */}
          <div className={`${ringSize} rounded-full bg-gradient-to-br from-slate-200 via-slate-600 to-black p-0.5 shadow-md flex items-center justify-center`}>
            <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative">
              <div className="w-3 h-3 rounded-full bg-blue-950 border border-cyan-400/50" />
              <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-white/70" />
            </div>
          </div>

          {/* Middle Lens */}
          <div className={`${ringSize} rounded-full bg-gradient-to-br from-slate-200 via-slate-600 to-black p-0.5 shadow-md flex items-center justify-center`}>
            <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative">
              <div className="w-3 h-3 rounded-full bg-blue-950 border border-cyan-400/50" />
              <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-white/70" />
            </div>
          </div>

          {/* Bottom Lens */}
          <div className={`${ringSize} rounded-full bg-gradient-to-br from-slate-200 via-slate-600 to-black p-0.5 shadow-md flex items-center justify-center`}>
            <div className="w-full h-full rounded-full bg-black border border-slate-600 flex items-center justify-center relative">
              <div className="w-3 h-3 rounded-full bg-indigo-950 border border-blue-400/50" />
            </div>
          </div>
        </div>

        {/* LED Flash nestled between Lens 1 & 2 */}
        <div className="w-3 h-3 rounded-full bg-amber-100 border border-amber-300 mt-4 shadow-xs" />
      </div>
    );
  }

  // 6. OnePlus 13, 12, 11 (Signature Giant Circular Camera Disc merging with frame)
  if (brand === 'oneplus' && (id.includes('13') || id.includes('12') || id.includes('11') || id.includes('10'))) {
    const circleSize = isLarge ? 'w-24 h-24' : 'w-20 h-20';
    return (
      <div
        className={`${circleSize} rounded-full bg-gradient-to-tr from-[#1b1e22] via-[#2c323b] to-[#1a1c20] p-1.5 border-2 border-slate-500 shadow-[0_8px_24px_rgba(0,0,0,0.5)] relative flex items-center justify-center`}
      >
        {/* Subtle metallic bezel rim */}
        <div className="absolute inset-0 rounded-full border border-white/20" />

        {/* 4 Rings in symmetric grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="w-5 h-5 rounded-full bg-black border border-slate-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-950 border border-cyan-400/60" />
          </div>
          <div className="w-5 h-5 rounded-full bg-black border border-slate-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-950 border border-cyan-400/60" />
          </div>
          <div className="w-5 h-5 rounded-full bg-black border border-slate-600 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-amber-400/50" />
          </div>
          <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
        </div>

        {/* Center subtle Hasselblad 'H' accent */}
        <div className="absolute text-[8px] font-serif font-black text-white/50 tracking-widest pointer-events-none">
          H
        </div>
      </div>
    );
  }

  // 7. Xiaomi 14 / 13 Pro (Large squircle camera plateau with Leica quadrant)
  if (brand === 'xiaomi') {
    const squircleSize = isLarge ? 'w-22 h-22 p-2' : 'w-18 h-18 p-1.5';
    return (
      <div
        className={`${squircleSize} rounded-2xl bg-[#141517] border-2 border-slate-600 shadow-[0_8px_24px_rgba(0,0,0,0.45)] grid grid-cols-2 gap-1.5 items-center justify-items-center relative`}
      >
        <div className="w-6 h-6 rounded-full bg-black border border-slate-700 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-950 border border-cyan-400/60" />
        </div>
        <div className="w-6 h-6 rounded-full bg-black border border-slate-700 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-indigo-950 border border-blue-400/60" />
        </div>
        <div className="w-6 h-6 rounded-full bg-black border border-slate-700 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-slate-900 border border-amber-400/50" />
        </div>
        <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        </div>
        {/* Leica wordmark banner */}
        <div className="absolute inset-x-0 bottom-0.5 text-center text-[6px] font-sans font-bold text-red-500 uppercase tracking-widest">
          LEICA
        </div>
      </div>
    );
  }

  // 8. vivo X100 Pro / X90 Pro (Grand Centered Zeiss Sun/Moon Halo)
  if (brand === 'vivo' && (id.includes('x100') || id.includes('x90') || id.includes('x80'))) {
    const haloSize = isLarge ? 'w-24 h-24' : 'w-20 h-20';
    return (
      <div
        className={`${haloSize} rounded-full bg-[#121417] border-2 border-amber-300/60 shadow-[0_8px_24px_rgba(0,0,0,0.5)] p-2 relative flex items-center justify-center`}
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="w-6 h-6 rounded-full bg-black border border-slate-600 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-blue-950 border border-cyan-400/60" />
          </div>
          <div className="w-6 h-6 rounded-full bg-black border border-slate-600 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-indigo-950 border border-blue-400/60" />
          </div>
          <div className="w-6 h-6 rounded-full bg-black border border-slate-600 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-slate-900 border border-cyan-400/50" />
          </div>
          <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          </div>
        </div>
        <div className="absolute top-1 text-[7px] font-bold text-blue-400">ZEISS</div>
      </div>
    );
  }

  // 9. vivo V Series (Aura Ring Light layout)
  if (brand === 'vivo') {
    return (
      <div className="p-2 rounded-2xl bg-black/60 border border-white/20 shadow-md space-y-2">
        <div className="flex gap-1.5">
          <div className="w-6 h-6 rounded-full bg-black border border-slate-600 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-blue-950 border border-cyan-400/50" />
          </div>
          <div className="w-6 h-6 rounded-full bg-black border border-slate-600 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-blue-950 border border-cyan-400/50" />
          </div>
        </div>
        {/* Aura Ring Light */}
        <div className="w-13 h-5 rounded-full border-2 border-white/90 bg-white/20 shadow-[0_0_12px_rgba(255,255,255,0.6)] flex items-center justify-center">
          <div className="w-8 h-2 rounded-full bg-amber-100/80" />
        </div>
      </div>
    );
  }

  // Default fallback module
  return (
    <div className="p-2 rounded-2xl bg-black/50 border border-white/20 space-y-1.5 shadow-md">
      <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-600" />
      <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-600" />
    </div>
  );
};

export const PhoneDeviceVisual: React.FC<PhoneDeviceVisualProps> = ({
  phone,
  mode = 'card',
  view = 'front',
  className = '',
  large = false
}) => {
  const brand = phone.brandKey.toLowerCase();
  const design = getChassisDesign(phone);

  const isModalOrLarge = mode === 'modal' || large;
  // Size classes for generous, crystal-clear viewport
  const widthClass = isModalOrLarge
    ? 'w-36 sm:w-44'
    : mode === 'compact'
    ? 'w-24 sm:w-26'
    : 'w-30 sm:w-34';

  const heightClass = isModalOrLarge
    ? 'h-72 sm:h-88'
    : mode === 'compact'
    ? 'h-48 sm:h-52'
    : 'h-60 sm:h-68';

  const showFront = view === 'front' || view === 'dual';
  const showRear = view === 'rear' || view === 'dual';

  return (
    <div className={`relative flex items-center justify-center gap-5 sm:gap-8 ${className}`}>
      
      {/* ============================================================== */}
      {/* 1. AUTHENTIC FRONT OLED DISPLAY (Pixel-perfect bezels & punch) */}
      {/* ============================================================== */}
      {showFront && (
        <div className="relative flex flex-col items-center justify-center select-none group">
          
          {/* Physical Phone Chassis Frame */}
          <div
            className={`relative ${widthClass} ${heightClass} ${design.cornerRadius} p-1.5 bg-slate-950 border-2 ${design.frameBorder} shadow-[0_20px_40px_-15px_rgba(0,0,0,0.45)] flex flex-col justify-between shrink-0 transition-transform duration-300 group-hover:scale-[1.02]`}
          >
            {/* Screen Inner Bezel */}
            <div className={`w-full h-full bg-black ${design.cornerRadius} relative overflow-hidden flex flex-col justify-between`}>
              
              {/* Vibrant OLED Screen Wallpaper */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${design.wallpaperGradient} opacity-95`}
              />

              {/* OLED ambient light specular diagonal gleam */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none transform -rotate-12 translate-x-2" />

              {/* Status Bar (Clock, 5G, Battery) */}
              <div className="relative z-20 flex items-center justify-between px-3 pt-2 text-[9px] font-mono text-white/90">
                <span className="font-bold tracking-tight">9:41</span>
                
                {/* Screen Cutout (Dynamic Island vs Punch Hole vs Classic Notch) */}
                {design.islandType === 'dynamic-island' ? (
                  <div className="w-14 sm:w-16 h-4 bg-black rounded-full flex items-center justify-between px-1.5 shadow-md">
                    <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                ) : design.islandType === 'punch-hole' ? (
                  <div className="w-2.5 h-2.5 rounded-full bg-black border border-slate-800 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-950" />
                  </div>
                ) : design.islandType === 'classic-notch' ? (
                  <div className="w-16 h-3 bg-black rounded-b-xl flex items-center justify-center">
                    <div className="w-6 h-0.5 bg-slate-800 rounded-full" />
                  </div>
                ) : (
                  <div className="w-2 h-2" />
                )}

                {/* Right Status Icons */}
                <div className="flex items-center gap-1 text-[8px] font-bold">
                  <span>5G</span>
                  <div className="w-3.5 h-2 rounded-[2px] border border-white/80 p-[1px] flex items-center">
                    <div className="h-full w-2.5 bg-emerald-400 rounded-[1px]" />
                  </div>
                </div>
              </div>

              {/* Center Lock Screen Clock & Model Info */}
              <div className="relative z-10 my-auto text-center px-2">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight drop-shadow-md">
                  ReTech
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-white/70 uppercase tracking-widest mt-0.5 font-semibold">
                  {phone.brand} · {phone.series}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[8px] sm:text-[9px] font-mono text-white">
                  <span>OLED 120Hz Verified</span>
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="relative z-20 pb-2 flex justify-center">
                <div className="w-16 sm:w-20 h-1 bg-white/70 rounded-full" />
              </div>

            </div>
          </div>

          {/* Ground Soft Contact Shadow */}
          <div className="w-28 sm:w-36 h-3 bg-slate-950/20 blur-md rounded-full mt-2 pointer-events-none" />

          {isModalOrLarge && (
            <div className="mt-1 text-[10px] font-mono text-slate-500 font-semibold tracking-wide">
              Original Front Display
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. AUTHENTIC ORIGINAL REAR CHASSIS (Matching actual device OEM) */}
      {/* ============================================================== */}
      {showRear && (
        <div className="relative flex flex-col items-center justify-center select-none group">
          
          {/* Authentic Rear Chassis Plate */}
          <div
            className={`relative ${widthClass} ${heightClass} ${design.cornerRadius} ${design.bodyColor} p-2 sm:p-2.5 border-2 ${design.frameBorder} shadow-[0_20px_40px_-15px_rgba(0,0,0,0.45)] flex flex-col justify-between shrink-0 transition-transform duration-300 group-hover:scale-[1.02]`}
          >
            {/* Satin/Frosted glass reflection highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-white/15 pointer-events-none rounded-[inherit]" />

            {/* Top Left: Authentic OEM Camera Module */}
            <div className="relative z-10 flex justify-start items-start">
              <AuthenticRearCameraModule phone={phone} isLarge={isModalOrLarge} />
            </div>

            {/* Center: Authentic OEM Brand Logo Silhouette */}
            <div className="relative z-10 my-auto text-center flex items-center justify-center">
              {brand === 'apple' ? (
                // Authentic Apple Logo Vector
                <svg
                  viewBox="0 0 170 170"
                  className={`${isModalOrLarge ? 'w-8 h-8' : 'w-6 h-6'} fill-white/50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]`}
                >
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.97-14.43-5.74-8.8-10.22-18.78-13.43-29.95-3.21-11.17-4.82-21.78-4.82-31.84 0-14.73 3.75-26.68 11.26-35.85 7.51-9.18 16.89-13.88 28.16-14.1 4.7 0 9.94 1.25 15.71 3.76 5.77 2.51 9.77 3.82 12 3.93 2.02-.11 6.13-1.48 12.33-4.11 6.2-2.63 11.75-3.83 16.65-3.6 12.44.66 22.39 5.25 29.84 13.78-10.88 6.63-16.19 15.76-15.93 27.38.27 9.17 3.82 16.89 10.65 23.16 6.83 6.26 14.88 9.87 24.15 10.82-2.14 6.44-4.8 13.06-7.98 19.86zM119.22 31.84c0-7.07 2.57-13.77 7.72-20.1 5.15-6.33 11.66-10.51 19.53-12.54.43 2.14.65 4.38.65 6.72 0 7.07-2.67 13.83-8.02 20.27-5.35 6.45-11.89 10.45-19.63 12.01-.11-2.13-.25-4.25-.25-6.36z" />
                </svg>
              ) : brand === 'samsung' ? (
                // Authentic Samsung Typography
                <span className="text-[9px] sm:text-[10px] font-sans font-black tracking-[0.25em] text-white/50 uppercase">
                  SAMSUNG
                </span>
              ) : brand === 'oneplus' ? (
                // Authentic OnePlus 1+ badge
                <div className="flex items-center justify-center gap-0.5 text-white/50 font-bold font-mono">
                  <span className="text-xs sm:text-sm border border-white/50 px-1 py-0.2 rounded-xs">1</span>
                  <span className="text-xs font-bold">+</span>
                </div>
              ) : brand === 'xiaomi' ? (
                <span className="text-[9px] sm:text-[10px] font-sans font-black tracking-[0.2em] text-white/50 uppercase">
                  XIAOMI
                </span>
              ) : brand === 'vivo' ? (
                <span className="text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.15em] text-white/50">
                  vivo
                </span>
              ) : (
                <span className="text-[8px] font-mono font-bold text-white/40 tracking-wider uppercase">
                  {phone.brand}
                </span>
              )}
            </div>

            {/* Bottom: Model Name & Colorway Finish Tag */}
            <div className="relative z-10 text-center pb-1">
              <div className="text-[8px] sm:text-[9px] font-mono text-white/60 font-semibold tracking-wide">
                {design.accentName}
              </div>
              <div className="text-[6px] sm:text-[7px] font-mono text-white/40 uppercase tracking-widest mt-0.5">
                40-Pt Bench Verified
              </div>
            </div>

          </div>

          {/* Ground Soft Contact Shadow */}
          <div className="w-28 sm:w-36 h-3 bg-slate-950/20 blur-md rounded-full mt-2 pointer-events-none" />

          {isModalOrLarge && (
            <div className="mt-1 text-[10px] font-mono text-slate-500 font-semibold tracking-wide">
              Original Rear Chassis ({design.accentName})
            </div>
          )}
        </div>
      )}

    </div>
  );
};
