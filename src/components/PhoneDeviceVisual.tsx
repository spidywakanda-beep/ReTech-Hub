import React, { useState } from 'react';
import { SmartphoneModel } from '../data/smartphoneCatalog';

interface PhoneDeviceVisualProps {
  phone: SmartphoneModel;
  mode?: 'card' | 'modal' | 'compact';
  view?: 'dual' | 'rear' | 'front';
  className?: string;
}

// Authentic Cashify product photograph cutout map (Reference: https://www.cashify.in/sell-old-mobile-phone/sell-apple & brand catalogs)
const PHONE_IMAGE_MAP: Record<string, string> = {
  // Apple iPhones
  'apple-iphone-15-pro-max': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/e14bb4d9-988f.jpg',
  'apple-iphone-15-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/f43b6269-c954.jpg',
  'apple-iphone-15': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/e2c7dff8-23a0.jpg',
  'apple-iphone-14-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/726bfa22-cbfb.jpg',
  'apple-iphone-14': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/36ea82c3-6d6a.jpg',
  'apple-iphone-13-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/d2daf417-65fa.jpg',
  'apple-iphone-13': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/96a67b00-9389.jpg',
  'apple-iphone-12': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/bf8ed21e-96c9.jpg',
  'apple-iphone-11': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/d8394bf8-e922.jpg',
  'apple-iphone-se-3rd-gen': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/2d1db6af-f3e9.jpg',

  // Samsung Galaxy
  'samsung-s24-ultra': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/f7a9c306-84de.jpg',
  'samsung-s23-ultra': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/e422c4d3-a385.jpg',
  'samsung-s23': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/e422c4d3-a385.jpg',
  'samsung-s22': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/dacd2593-11b0.jpg',
  'samsung-s23-fe': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/dacd2593-11b0.jpg',
  'samsung-s21-fe': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/dacd2593-11b0.jpg',
  'samsung-a55': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/7fd6db6a-6c9e.jpg',
  'samsung-a54': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/cbe674ab-026f.jpg',
  'samsung-a35': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/ab43e1cd-9b73.jpg',

  // OnePlus
  'oneplus-12': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/3ba10c91-7df6.jpg',
  'oneplus-11': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/4873ecf6-c254.jpg',
  'oneplus-10-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/3be1a520-f18b.jpg',
  'oneplus-12r': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/93afecfc-3cd7.jpg',
  'oneplus-11r': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/fba1d5b0-18f3.jpg',
  'oneplus-nord-4': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/a58cb912-8bf4.jpg',
  'oneplus-nord-ce4': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/4ae1d8fb-7621.jpg',
  'oneplus-nord-3': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/e290757d-8ade.jpg',

  // Xiaomi & Redmi
  'xiaomi-14': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/4f9ec4d3-cb05.jpg',
  'xiaomi-13-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/a22c1e92-583f.jpg',
  'redmi-note-13-pro-plus': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/9d50cbc7-b921.jpg',
  'redmi-note-13-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/1071c199-276d.jpg',
  'redmi-note-12-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/1cbe2178-485a.jpg',

  // vivo
  'vivo-x100-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/csh-em3ouf6c-fvoe.png',
  'vivo-x90-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/csh-occhlr3b-qezs.png',
  'vivo-v30-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/csh-9ssl2gqv-n1zp.png',
  'vivo-v29': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/cf7fd450-f15a.jpg',
  'vivo-t3': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/55fcacab-13a8.jpg',
  'vivo-t2-pro': 'https://s3ng.cashify.in/cashify/product/img/xhdpi/csh-a02midi1-zkub.png'
};

export const PhoneDeviceVisual: React.FC<PhoneDeviceVisualProps> = ({
  phone,
  mode = 'card',
  view = 'front',
  className = ''
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const id = phone.id;
  const isIPhone = phone.os === 'ios';

  const imageUrl = PHONE_IMAGE_MAP[id] || PHONE_IMAGE_MAP['apple-iphone-15'];

  // Chassis colors for fallback & rear module
  let bezelColor = 'bg-slate-900 border-slate-700';
  let frameColor = 'border-slate-500';
  let accentName = 'Phantom Black';
  let cornerRadius = 'rounded-[28px]';

  if (id.includes('15-pro')) {
    bezelColor = 'bg-[#3b3a36] border-[#8a857b]';
    frameColor = 'border-[#59554d]';
    accentName = 'Natural Titanium';
  } else if (id.includes('14-pro')) {
    bezelColor = 'bg-[#25222e] border-[#5a4d6e]';
    frameColor = 'border-[#3f3550]';
    accentName = 'Deep Purple';
  } else if (id.includes('s24-ultra')) {
    bezelColor = 'bg-[#29292b] border-[#5e5c57]';
    frameColor = 'border-[#43423f]';
    accentName = 'Titanium Gray';
    cornerRadius = 'rounded-[14px]';
  } else if (id.includes('oneplus-12')) {
    bezelColor = 'bg-[#152a22] border-[#2d5244]';
    accentName = 'Flowy Emerald';
  }

  // Camera module layout for rear chassis
  const renderRearCamera = () => {
    if (id.includes('pro-max') || id.includes('15-pro') || id.includes('14-pro') || id.includes('13-pro') || id.includes('11-pro')) {
      return (
        <div className="relative w-13 h-13 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-1 shadow-sm">
          <div className="absolute top-1 left-1 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-950/80 border border-cyan-400/50" />
          </div>
          <div className="absolute bottom-1 left-1 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-950/80 border border-cyan-400/50" />
          </div>
          <div className="absolute top-3.5 right-1 w-4.5 h-4.5 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-950/80 border border-cyan-400/50" />
          </div>
          <div className="absolute bottom-1.5 right-2 w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700" />
          <div className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-amber-100 border border-amber-300" />
        </div>
      );
    }

    if (id.includes('s24-ultra') || id.includes('s23-ultra')) {
      return (
        <div className="flex gap-1.5">
          <div className="space-y-1">
            <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-xs">
              <div className="w-2 h-2 rounded-full bg-slate-800 border border-cyan-400/60" />
            </div>
            <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-xs">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
            </div>
            <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-400 flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-sm bg-slate-800" />
            </div>
          </div>
          <div className="space-y-1.5 pt-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-950 border border-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-100" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-slate-400" />
          </div>
        </div>
      );
    }

    return (
      <div className="p-1 rounded-xl bg-black/40 border border-white/20 space-y-1">
        <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-400" />
        <div className="w-4 h-4 rounded-full bg-slate-900 border border-slate-400" />
      </div>
    );
  };

  const isLarge = mode === 'modal';
  const widthClass = isLarge ? 'w-36 sm:w-40' : 'w-28 sm:w-30';
  const heightClass = isLarge ? 'h-68 sm:h-76' : 'h-52 sm:h-56';

  const showFront = view === 'front' || view === 'dual';
  const showRear = view === 'rear' || view === 'dual';

  return (
    <div className={`relative flex items-center justify-center gap-4 sm:gap-6 ${className}`}>
      
      {/* 1. AUTHENTIC ORIGINAL HANDSET PHOTOGRAPH (Cashify Reference) */}
      {showFront && (
        <div className="relative flex flex-col items-center justify-center select-none">
          {!imageFailed && imageUrl ? (
            <div className="relative flex items-center justify-center p-2">
              <img
                src={imageUrl}
                alt={phone.name}
                loading="lazy"
                crossOrigin="anonymous"
                onError={() => setImageFailed(true)}
                className={`${isLarge ? 'h-64 sm:h-72' : 'h-48 sm:h-52'} w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105`}
              />
            </div>
          ) : (
            /* Photorealistic SVG/CSS Fallback in case of offline/network block */
            <div
              className={`relative ${widthClass} ${heightClass} ${bezelColor} ${cornerRadius} p-1.5 border-2 ${frameColor} shadow-[0_16px_32px_-10px_rgba(0,0,0,0.35)] flex flex-col justify-between shrink-0`}
            >
              <div className={`w-full h-full bg-black ${cornerRadius} p-1 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950 via-slate-900 to-indigo-950" />
                <div className="w-12 h-3 bg-black rounded-full mx-auto mt-1 z-20" />
                <div className="mt-auto mb-2 text-center text-[7px] font-mono text-cyan-300 font-semibold uppercase">
                  {phone.brand}
                </div>
              </div>
            </div>
          )}

          {/* Soft Ground Shadow matching Cashify Reference */}
          <div className="w-24 sm:w-28 h-2 bg-slate-950/15 blur-md rounded-full -mt-1 pointer-events-none" />

          {mode === 'modal' && (
            <div className="mt-1 text-[9px] font-mono text-slate-400">
              Front Display
            </div>
          )}
        </div>
      )}

      {/* 2. REAR CHASSIS VIEW (When toggled in modal) */}
      {showRear && (
        <div className="relative flex flex-col items-center justify-center select-none">
          <div
            className={`relative ${widthClass} ${heightClass} ${bezelColor} ${cornerRadius} p-2 border-2 ${frameColor} shadow-[0_16px_32px_-10px_rgba(0,0,0,0.35)] flex flex-col justify-between shrink-0 group-hover:-translate-y-1 transition-transform duration-200`}
          >
            <div className="flex justify-start items-start">
              {renderRearCamera()}
            </div>
            <div className="text-center my-auto">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-bold">
                {phone.brand}
              </span>
            </div>
            <div className="text-center pb-1">
              <span className="text-[7px] font-mono text-white/30 uppercase tracking-wider">
                {phone.releaseYear} · Verified
              </span>
            </div>
          </div>
          <div className="w-24 sm:w-28 h-2 bg-slate-900/15 blur-md rounded-full mt-1 pointer-events-none" />
          {mode === 'modal' && (
            <div className="mt-1 text-[9px] font-mono text-slate-400">
              Rear Module ({accentName})
            </div>
          )}
        </div>
      )}

    </div>
  );
};
