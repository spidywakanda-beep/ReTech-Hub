import React, { useState } from 'react';
import { LaptopModel } from '../data/laptopCatalog';

interface LaptopDeviceVisualProps {
  laptop: LaptopModel;
  className?: string;
  size?: 'card' | 'modal';
}

export const LaptopDeviceVisual: React.FC<LaptopDeviceVisualProps> = ({
  laptop,
  className = '',
  size = 'card'
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const brand = laptop.brandKey;
  const id = laptop.id;

  // Authentic Nature/Landscape wallpapers for fallback
  const getScreenWallpaper = () => {
    if (id.includes('dell-latitude-3410')) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-600 to-sky-700 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/40 via-orange-500/30 to-slate-900/80" />
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-slate-950/90 via-sky-900/60 to-transparent flex items-end justify-center">
            <svg viewBox="0 0 100 40" className="w-full h-full object-cover opacity-85">
              <path d="M0,40 L15,18 L30,28 L45,12 L60,25 L75,10 L90,24 L100,40 Z" fill="#1e293b" />
              <path d="M10,40 L25,22 L40,32 L55,16 L70,30 L85,14 L100,40 Z" fill="#0f172a" opacity="0.7" />
              <circle cx="35" cy="18" r="8" fill="#f59e0b" opacity="0.9" />
              <circle cx="65" cy="16" r="10" fill="#ea580c" opacity="0.9" />
            </svg>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-1/4 bg-sky-950/80 border-t border-amber-400/30" />
        </div>
      );
    }

    if (id.includes('dell-latitude-5310')) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-800 via-teal-700 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-200/30 via-sky-600/20 to-slate-950" />
          <svg viewBox="0 0 100 50" className="absolute bottom-0 inset-x-0 w-full h-3/4 opacity-90">
            <path d="M0,50 L20,10 L40,30 L50,15 L65,35 L85,8 L100,50 Z" fill="#334155" />
            <path d="M48,15 L52,15 L54,50 L46,50 Z" fill="#e0f2fe" opacity="0.9" />
            <path d="M49,15 L51,15 L52,50 L48,50 Z" fill="#ffffff" />
            <ellipse cx="50" cy="46" rx="20" ry="6" fill="#bae6fd" opacity="0.5" />
          </svg>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-cyan-400/30 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-amber-400/30 blur-2xl" />
      </div>
    );
  };

  const isSilver =
    brand === 'apple' ||
    id.includes('dell-latitude-5310') ||
    id.includes('hp-elitebook') ||
    id.includes('dell-xps');

  const lidBorder = isSilver ? 'border-slate-300 bg-slate-200' : 'border-slate-700 bg-slate-900';
  const bottomBezelColor = isSilver ? 'text-slate-600' : 'text-slate-400';
  const deckBaseBg = isSilver
    ? 'bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border-slate-300'
    : 'bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-slate-700';
  const keyboardWellBg = brand === 'apple' ? 'bg-[#18181b]' : isSilver ? 'bg-slate-300/80' : 'bg-slate-950';

  const containerHeight = size === 'modal' ? 'h-52 sm:h-60' : 'h-40 sm:h-44';

  return (
    <div className={`relative flex items-center justify-center select-none w-full ${containerHeight} ${className}`}>
      
      {/* 1. AUTHENTIC PHOTOGRAPHIC OPEN LAPTOP CUTOUT (ReTech Hub Certified Reference) */}
      {!imageFailed && laptop.imageUrl ? (
        <div className="relative w-full h-full flex items-center justify-center p-2">
          <img
            src={laptop.imageUrl}
            alt={laptop.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        /* 2. PHOTOREALISTIC FALLBACK (Guarantees zero broken images) */
        <div className="relative flex flex-col items-center justify-center">
          <div
            className={`relative w-48 sm:w-56 h-28 sm:h-32 rounded-t-lg p-1 sm:p-1.5 border-2 ${lidBorder} shadow-md flex flex-col justify-between shrink-0`}
          >
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
              <div className="w-1 h-1 rounded-full bg-slate-950 border border-slate-600" />
            </div>

            <div className="w-full h-full rounded-sm relative overflow-hidden bg-black border border-black/80 flex flex-col justify-between">
              {getScreenWallpaper()}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
              <div className="relative z-10 mt-auto p-1 bg-black/40 backdrop-blur-xs flex items-center justify-between text-[7px] font-mono text-white/90">
                <span className="truncate font-semibold px-1">
                  {laptop.name.split('(')[0].trim()}
                </span>
                <span className="text-orange-300 px-1 shrink-0 font-medium">
                  {laptop.specs.display.split(')')[0].replace('"', '″')}
                </span>
              </div>
            </div>

            <div className="h-2.5 sm:h-3 flex items-center justify-center relative">
              {brand === 'dell' && (
                <span className={`text-[7px] font-bold tracking-widest uppercase font-mono ${bottomBezelColor}`}>
                  DELL
                </span>
              )}
              {brand === 'apple' && (
                <span className={`text-[6px] font-semibold tracking-wider font-sans ${bottomBezelColor}`}>
                  MacBook
                </span>
              )}
              {brand === 'lenovo' && (
                <span className="text-[6px] font-bold tracking-wider font-mono text-red-500">
                  ThinkPad
                </span>
              )}
              {brand === 'hp' && (
                <span className={`text-[6px] font-black italic tracking-tighter ${bottomBezelColor}`}>
                  ///
                </span>
              )}
            </div>
          </div>

          <div className={`w-28 sm:w-32 h-1 ${isSilver ? 'bg-slate-400' : 'bg-slate-800'} rounded-xs -mt-0.5 z-10`} />

          <div
            className={`w-52 sm:w-62 h-8 sm:h-9 rounded-b-md border-x-2 border-b-2 ${deckBaseBg} p-1 relative shadow-lg flex flex-col justify-between`}
          >
            <div className={`w-full h-4 sm:h-5 rounded-xs ${keyboardWellBg} p-0.5 flex flex-col justify-around overflow-hidden border border-black/30`}>
              <div className="flex justify-between gap-0.5 h-1 opacity-70">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-slate-700/60 rounded-xs" />
                ))}
              </div>
              <div className="flex justify-between gap-0.5 h-1 opacity-70 relative">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-slate-700/60 rounded-xs" />
                ))}
                {id.includes('thinkpad') && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-600 shadow-xs z-20" />
                )}
              </div>
            </div>
            <div className="flex items-center justify-center relative mt-0.5">
              <div className={`w-10 sm:w-12 h-2 rounded-xs border ${isSilver ? 'border-slate-400/80 bg-slate-200/90' : 'border-slate-700 bg-slate-900'} shadow-inner`} />
            </div>
          </div>

          <div className="w-48 sm:w-56 h-2 bg-slate-950/20 blur-md rounded-full mt-1" />
        </div>
      )}

    </div>
  );
};
