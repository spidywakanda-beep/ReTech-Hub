import {
  Smartphone,
  Battery,
  Zap,
  Camera,
  Volume2,
  Mic,
  Shield,
  Layers,
  Sparkles,
  Droplets,
  Cpu,
  HelpCircle,
  ScanFace,
  VolumeX,
  Radio,
  Sliders,
  Eye,
  Wrench
} from 'lucide-react';
import React from 'react';

export interface RepairBrand {
  id: string;
  name: string;
  iconName?: string;
  popular?: boolean;
}

export interface RepairModel {
  id: string;
  brandId: string;
  name: string;
  series: string;
  screenType: 'flat' | 'curved';
  displayTech: string;
  accentColor: string;
  imageBg: string;
  releaseYear: number;
}

export interface RepairTypeItem {
  id: string;
  title: string;
  category: 'Screen' | 'Battery' | 'Camera' | 'Audio' | 'Charging' | 'Body' | 'Others';
  icon: React.ElementType;
  basePrice: number;
  isStartingAt: boolean;
  estimatedTime: string;
  warranty: string;
  shortDescription: string;
  details: {
    whatsIncluded: string[];
    partsQuality: string;
    timeTaken: string;
    warrantyDetails: string;
    recommendedFor: string;
  };
  isPopular: boolean;
  popularityRank: number;
}

// 22+ Brands as specified: Apple, Samsung, Google, OnePlus, Oppo, Vivo, Realme, Xiaomi, Poco, Motorola, Nokia, Nothing, Asus, Huawei, Infinix, Lenovo, LG, Sony, HTC, Microsoft, ZTE, and others.
export const REPAIR_BRANDS: RepairBrand[] = [
  { id: 'apple', name: 'Apple', popular: true },
  { id: 'samsung', name: 'Samsung', popular: true },
  { id: 'google', name: 'Google', popular: true },
  { id: 'oneplus', name: 'OnePlus', popular: true },
  { id: 'oppo', name: 'Oppo', popular: true },
  { id: 'vivo', name: 'Vivo', popular: true },
  { id: 'realme', name: 'Realme', popular: true },
  { id: 'xiaomi', name: 'Xiaomi', popular: true },
  { id: 'poco', name: 'Poco', popular: true },
  { id: 'motorola', name: 'Motorola', popular: true },
  { id: 'nokia', name: 'Nokia' },
  { id: 'nothing', name: 'Nothing', popular: true },
  { id: 'asus', name: 'Asus' },
  { id: 'huawei', name: 'Huawei' },
  { id: 'infinix', name: 'Infinix' },
  { id: 'lenovo', name: 'Lenovo' },
  { id: 'lg', name: 'LG' },
  { id: 'sony', name: 'Sony' },
  { id: 'htc', name: 'HTC' },
  { id: 'microsoft', name: 'Microsoft' },
  { id: 'zte', name: 'ZTE' },
  { id: 'others', name: 'Others (Universal / Unlisted)' }
];

export const BRAND_MODELS_MAP: Record<string, RepairModel[]> = {
  apple: [
    { id: 'iphone-15-pro-max', brandId: 'apple', name: 'iPhone 15 Pro Max', series: '15 Pro Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED (120Hz ProMotion)', accentColor: '#8f8a81', imageBg: 'from-stone-800 to-stone-950', releaseYear: 2023 },
    { id: 'iphone-15-pro', brandId: 'apple', name: 'iPhone 15 Pro', series: '15 Pro Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED (120Hz ProMotion)', accentColor: '#8f8a81', imageBg: 'from-stone-800 to-stone-950', releaseYear: 2023 },
    { id: 'iphone-15-plus', brandId: 'apple', name: 'iPhone 15 Plus', series: '15 Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED', accentColor: '#4f555d', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2023 },
    { id: 'iphone-15', brandId: 'apple', name: 'iPhone 15', series: '15 Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED', accentColor: '#4f555d', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2023 },
    { id: 'iphone-14-pro-max', brandId: 'apple', name: 'iPhone 14 Pro Max', series: '14 Pro Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED (120Hz ProMotion)', accentColor: '#41394e', imageBg: 'from-purple-950 to-slate-950', releaseYear: 2022 },
    { id: 'iphone-14-pro', brandId: 'apple', name: 'iPhone 14 Pro', series: '14 Pro Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED (120Hz ProMotion)', accentColor: '#41394e', imageBg: 'from-purple-950 to-slate-950', releaseYear: 2022 },
    { id: 'iphone-14', brandId: 'apple', name: 'iPhone 14', series: '14 Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED', accentColor: '#2f3b46', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2022 },
    { id: 'iphone-13-pro-max', brandId: 'apple', name: 'iPhone 13 Pro Max', series: '13 Pro Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED (120Hz ProMotion)', accentColor: '#536d7e', imageBg: 'from-sky-950 to-slate-950', releaseYear: 2021 },
    { id: 'iphone-13', brandId: 'apple', name: 'iPhone 13', series: '13 Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED', accentColor: '#2b3948', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2021 },
    { id: 'iphone-12-pro', brandId: 'apple', name: 'iPhone 12 Pro', series: '12 Pro Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED', accentColor: '#253946', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2020 },
    { id: 'iphone-12', brandId: 'apple', name: 'iPhone 12', series: '12 Series', screenType: 'flat', displayTech: 'Super Retina XDR OLED', accentColor: '#1c2833', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2020 },
    { id: 'iphone-11', brandId: 'apple', name: 'iPhone 11', series: '11 Series', screenType: 'flat', displayTech: 'Liquid Retina HD IPS', accentColor: '#303030', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2019 }
  ],
  samsung: [
    { id: 'samsung-s24-ultra', brandId: 'samsung', name: 'Galaxy S24 Ultra', series: 'Galaxy S Series', screenType: 'flat', displayTech: 'Flat Dynamic AMOLED 2X (120Hz LTPO)', accentColor: '#6a6865', imageBg: 'from-neutral-800 to-neutral-950', releaseYear: 2024 },
    { id: 'samsung-s24-plus', brandId: 'samsung', name: 'Galaxy S24+', series: 'Galaxy S Series', screenType: 'flat', displayTech: 'Flat Dynamic AMOLED 2X (120Hz)', accentColor: '#3d3b45', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2024 },
    { id: 'samsung-s23-ultra', brandId: 'samsung', name: 'Galaxy S23 Ultra', series: 'Galaxy S Series', screenType: 'curved', displayTech: 'Curved Dynamic AMOLED 2X (120Hz)', accentColor: '#3c4238', imageBg: 'from-emerald-950 to-slate-950', releaseYear: 2023 },
    { id: 'samsung-s22-ultra', brandId: 'samsung', name: 'Galaxy S22 Ultra', series: 'Galaxy S Series', screenType: 'curved', displayTech: 'Edge Curved Dynamic AMOLED 2X (120Hz)', accentColor: '#4f2c31', imageBg: 'from-rose-950 to-slate-950', releaseYear: 2022 },
    { id: 'samsung-s21-ultra', brandId: 'samsung', name: 'Galaxy S21 Ultra 5G', series: 'Galaxy S Series', screenType: 'curved', displayTech: 'Curved Dynamic AMOLED 2X (120Hz)', accentColor: '#2b2a2e', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2021 },
    { id: 'samsung-s23-fe', brandId: 'samsung', name: 'Galaxy S23 FE', series: 'Galaxy S FE', screenType: 'flat', displayTech: 'Flat Dynamic AMOLED 2X', accentColor: '#334155', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2023 },
    { id: 'samsung-a55-5g', brandId: 'samsung', name: 'Galaxy A55 5G', series: 'Galaxy A Series', screenType: 'flat', displayTech: 'Super AMOLED 120Hz', accentColor: '#3b82f6', imageBg: 'from-blue-950 to-slate-950', releaseYear: 2024 },
    { id: 'samsung-m54-5g', brandId: 'samsung', name: 'Galaxy M54 5G', series: 'Galaxy M Series', screenType: 'flat', displayTech: 'Super AMOLED Plus 120Hz', accentColor: '#0ea5e9', imageBg: 'from-sky-950 to-slate-950', releaseYear: 2023 }
  ],
  google: [
    { id: 'pixel-8-pro', brandId: 'google', name: 'Google Pixel 8 Pro', series: 'Pixel Flagship', screenType: 'flat', displayTech: 'Super Actua LTPO OLED 120Hz', accentColor: '#537b8d', imageBg: 'from-cyan-950 to-slate-950', releaseYear: 2023 },
    { id: 'pixel-8', brandId: 'google', name: 'Google Pixel 8', series: 'Pixel Flagship', screenType: 'flat', displayTech: 'Actua OLED 120Hz', accentColor: '#6f5756', imageBg: 'from-stone-900 to-slate-950', releaseYear: 2023 },
    { id: 'pixel-7-pro', brandId: 'google', name: 'Google Pixel 7 Pro', series: 'Pixel Flagship', screenType: 'curved', displayTech: 'Curved LTPO AMOLED 120Hz', accentColor: '#4d544b', imageBg: 'from-zinc-900 to-slate-950', releaseYear: 2022 },
    { id: 'pixel-7a', brandId: 'google', name: 'Google Pixel 7a', series: 'Pixel A-Series', screenType: 'flat', displayTech: 'Flat OLED 90Hz', accentColor: '#4f6b7c', imageBg: 'from-sky-950 to-slate-950', releaseYear: 2023 },
    { id: 'pixel-6-pro', brandId: 'google', name: 'Google Pixel 6 Pro', series: 'Pixel Flagship', screenType: 'curved', displayTech: '3D Curved AMOLED 120Hz', accentColor: '#373b3e', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2021 }
  ],
  oneplus: [
    { id: 'oneplus-12', brandId: 'oneplus', name: 'OnePlus 12', series: 'Numbered Flagship', screenType: 'curved', displayTech: 'Curved 2K ProXDR AMOLED (120Hz LTPO4)', accentColor: '#2b5247', imageBg: 'from-emerald-950 to-slate-950', releaseYear: 2024 },
    { id: 'oneplus-12r', brandId: 'oneplus', name: 'OnePlus 12R', series: 'R Series', screenType: 'curved', displayTech: 'Curved 1.5K ProXDR AMOLED (120Hz LTPO4)', accentColor: '#284b63', imageBg: 'from-blue-950 to-slate-950', releaseYear: 2024 },
    { id: 'oneplus-11', brandId: 'oneplus', name: 'OnePlus 11 5G', series: 'Numbered Flagship', screenType: 'curved', displayTech: 'Curved 2K Fluid AMOLED (120Hz LTPO3)', accentColor: '#264e36', imageBg: 'from-teal-950 to-slate-950', releaseYear: 2023 },
    { id: 'oneplus-11r', brandId: 'oneplus', name: 'OnePlus 11R 5G', series: 'R Series', screenType: 'curved', displayTech: 'Curved Super Fluid AMOLED (120Hz)', accentColor: '#475569', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 },
    { id: 'oneplus-nord-3', brandId: 'oneplus', name: 'OnePlus Nord 3 5G', series: 'Nord Series', screenType: 'flat', displayTech: 'Flat Super Fluid AMOLED 120Hz', accentColor: '#344e41', imageBg: 'from-green-950 to-slate-950', releaseYear: 2023 },
    { id: 'oneplus-nord-ce-4', brandId: 'oneplus', name: 'OnePlus Nord CE 4', series: 'Nord Series', screenType: 'flat', displayTech: 'Flat Fluid AMOLED 120Hz', accentColor: '#1e3a5f', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2024 }
  ],
  oppo: [
    { id: 'oppo-find-x7-ultra', brandId: 'oppo', name: 'Oppo Find X7 Ultra', series: 'Find Series', screenType: 'curved', displayTech: 'Curved LTPO AMOLED (1-120Hz, 4500 nits)', accentColor: '#634832', imageBg: 'from-amber-950 to-slate-950', releaseYear: 2024 },
    { id: 'oppo-reno-11-pro', brandId: 'oppo', name: 'Oppo Reno 11 Pro 5G', series: 'Reno Series', screenType: 'curved', displayTech: '3D Curved OLED 120Hz', accentColor: '#3b4252', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2024 },
    { id: 'oppo-reno-10-pro', brandId: 'oppo', name: 'Oppo Reno 10 Pro+ 5G', series: 'Reno Series', screenType: 'curved', displayTech: '3D Curved AMOLED 120Hz', accentColor: '#4c3f54', imageBg: 'from-purple-950 to-slate-950', releaseYear: 2023 },
    { id: 'oppo-a79-5g', brandId: 'oppo', name: 'Oppo A79 5G', series: 'A Series', screenType: 'flat', displayTech: 'Flat Sunlight LCD 90Hz', accentColor: '#2b3a42', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 }
  ],
  vivo: [
    { id: 'vivo-x100-pro', brandId: 'vivo', name: 'vivo X100 Pro', series: 'X Series Flagship', screenType: 'curved', displayTech: 'Curved 8T LTPO AMOLED (120Hz, Zeiss Calibrated)', accentColor: '#8a4b2a', imageBg: 'from-orange-950 to-slate-950', releaseYear: 2024 },
    { id: 'vivo-v30-pro', brandId: 'vivo', name: 'vivo V30 Pro 5G', series: 'V Series', screenType: 'curved', displayTech: '3D Curved AMOLED 120Hz', accentColor: '#3a506b', imageBg: 'from-blue-950 to-slate-950', releaseYear: 2024 },
    { id: 'vivo-v29-pro', brandId: 'vivo', name: 'vivo V29 Pro 5G', series: 'V Series', screenType: 'curved', displayTech: '3D Curved 1.5K AMOLED 120Hz', accentColor: '#43281c', imageBg: 'from-amber-950 to-slate-950', releaseYear: 2023 },
    { id: 'vivo-t3-5g', brandId: 'vivo', name: 'vivo T3 5G', series: 'T Series', screenType: 'flat', displayTech: 'Flat AMOLED 120Hz', accentColor: '#1d3557', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2024 }
  ],
  realme: [
    { id: 'realme-12-pro-plus', brandId: 'realme', name: 'Realme 12 Pro+ 5G', series: 'Number Pro Series', screenType: 'curved', displayTech: 'Curved Vision AMOLED 120Hz', accentColor: '#1f3a60', imageBg: 'from-blue-950 to-slate-950', releaseYear: 2024 },
    { id: 'realme-gt-5-pro', brandId: 'realme', name: 'Realme GT 5 Pro', series: 'GT Flagship', screenType: 'curved', displayTech: 'Curved 1.5K AMOLED (144Hz LTPO)', accentColor: '#6f3b20', imageBg: 'from-orange-950 to-slate-950', releaseYear: 2023 },
    { id: 'realme-narzo-60-pro', brandId: 'realme', name: 'Realme Narzo 60 Pro', series: 'Narzo Series', screenType: 'curved', displayTech: 'Curved OLED 120Hz', accentColor: '#5a3d28', imageBg: 'from-amber-950 to-slate-950', releaseYear: 2023 },
    { id: 'realme-c67-5g', brandId: 'realme', name: 'Realme C67 5G', series: 'C Series', screenType: 'flat', displayTech: 'Flat IPS LCD 120Hz', accentColor: '#2b3e50', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 }
  ],
  xiaomi: [
    { id: 'xiaomi-14-ultra', brandId: 'xiaomi', name: 'Xiaomi 14 Ultra', series: 'Xiaomi Flagship', screenType: 'curved', displayTech: 'All-Around Liquid Curved LTPO AMOLED 120Hz', accentColor: '#1c1c1e', imageBg: 'from-neutral-900 to-black', releaseYear: 2024 },
    { id: 'xiaomi-14', brandId: 'xiaomi', name: 'Xiaomi 14', series: 'Xiaomi Flagship', screenType: 'flat', displayTech: 'Flat LTPO OLED 120Hz (3000 nits)', accentColor: '#2d3748', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2024 },
    { id: 'xiaomi-13-pro', brandId: 'xiaomi', name: 'Xiaomi 13 Pro', series: 'Xiaomi Flagship', screenType: 'curved', displayTech: 'Curved 2K LTPO OLED 120Hz', accentColor: '#2e4053', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 },
    { id: 'redmi-note-13-pro-plus', brandId: 'xiaomi', name: 'Redmi Note 13 Pro+ 5G', series: 'Redmi Note', screenType: 'curved', displayTech: '3D Curved 1.5K CrystalRes AMOLED 120Hz', accentColor: '#34495e', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2024 },
    { id: 'redmi-note-13-pro', brandId: 'xiaomi', name: 'Redmi Note 13 Pro 5G', series: 'Redmi Note', screenType: 'flat', displayTech: 'Flat 1.5K AMOLED 120Hz', accentColor: '#2c3e50', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2024 }
  ],
  poco: [
    { id: 'poco-x6-pro', brandId: 'poco', name: 'Poco X6 Pro 5G', series: 'Poco X Series', screenType: 'flat', displayTech: 'Flat 1.5K Flow AMOLED 120Hz', accentColor: '#eab308', imageBg: 'from-yellow-950 to-slate-950', releaseYear: 2024 },
    { id: 'poco-f5-5g', brandId: 'poco', name: 'Poco F5 5G', series: 'Poco F Series', screenType: 'flat', displayTech: 'Flat 12-bit Flow AMOLED 120Hz', accentColor: '#334155', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 },
    { id: 'poco-m6-pro', brandId: 'poco', name: 'Poco M6 Pro 5G', series: 'Poco M Series', screenType: 'flat', displayTech: 'Flat FHD+ IPS LCD 90Hz', accentColor: '#1e293b', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 }
  ],
  motorola: [
    { id: 'motorola-edge-50-pro', brandId: 'motorola', name: 'Motorola Edge 50 Pro', series: 'Edge Series', screenType: 'curved', displayTech: '3D Curved 1.5K pOLED (144Hz Pantone Validated)', accentColor: '#582f48', imageBg: 'from-purple-950 to-slate-950', releaseYear: 2024 },
    { id: 'motorola-edge-40-pro', brandId: 'motorola', name: 'Motorola Edge 40 Pro', series: 'Edge Series', screenType: 'curved', displayTech: 'Endless Edge pOLED (165Hz HDR10+)', accentColor: '#283618', imageBg: 'from-zinc-900 to-slate-950', releaseYear: 2023 },
    { id: 'motorola-razr-40-ultra', brandId: 'motorola', name: 'Motorola Razr 40 Ultra', series: 'Razr Flip', screenType: 'flat', displayTech: 'Foldable LTPO AMOLED (165Hz) + Cover Display', accentColor: '#6a040f', imageBg: 'from-rose-950 to-slate-950', releaseYear: 2023 },
    { id: 'motorola-g84-5g', brandId: 'motorola', name: 'Motorola Moto G84 5G', series: 'Moto G Series', screenType: 'flat', displayTech: 'Flat FHD+ pOLED 120Hz', accentColor: '#780000', imageBg: 'from-red-950 to-slate-950', releaseYear: 2023 }
  ],
  nokia: [
    { id: 'nokia-g42-5g', brandId: 'nokia', name: 'Nokia G42 5G', series: 'G Series', screenType: 'flat', displayTech: 'Flat HD+ IPS LCD 90Hz', accentColor: '#3a0ca3', imageBg: 'from-indigo-950 to-slate-950', releaseYear: 2023 },
    { id: 'nokia-x30-5g', brandId: 'nokia', name: 'Nokia X30 5G', series: 'X Series', screenType: 'flat', displayTech: 'Flat PureDisplay AMOLED 90Hz', accentColor: '#1b4965', imageBg: 'from-sky-950 to-slate-950', releaseYear: 2022 },
    { id: 'nokia-g60-5g', brandId: 'nokia', name: 'Nokia G60 5G', series: 'G Series', screenType: 'flat', displayTech: 'Flat FHD+ IPS LCD 120Hz', accentColor: '#2b2d42', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2022 }
  ],
  nothing: [
    { id: 'nothing-phone-2', brandId: 'nothing', name: 'Nothing Phone (2)', series: 'Phone Series', screenType: 'flat', displayTech: 'Flat LTPO OLED (1-120Hz, Glyph Interface)', accentColor: '#343a40', imageBg: 'from-zinc-900 to-black', releaseYear: 2023 },
    { id: 'nothing-phone-2a', brandId: 'nothing', name: 'Nothing Phone (2a)', series: 'Phone Series', screenType: 'flat', displayTech: 'Flat Flexible AMOLED 120Hz', accentColor: '#212529', imageBg: 'from-zinc-900 to-black', releaseYear: 2024 },
    { id: 'nothing-phone-1', brandId: 'nothing', name: 'Nothing Phone (1)', series: 'Phone Series', screenType: 'flat', displayTech: 'Flat Flexible OLED 120Hz', accentColor: '#495057', imageBg: 'from-zinc-900 to-black', releaseYear: 2022 }
  ],
  asus: [
    { id: 'asus-rog-phone-8-pro', brandId: 'asus', name: 'Asus ROG Phone 8 Pro', series: 'ROG Gaming', screenType: 'flat', displayTech: 'Flat Samsung E6 AMOLED (165Hz LTPO)', accentColor: '#1b1b1b', imageBg: 'from-neutral-900 to-black', releaseYear: 2024 },
    { id: 'asus-zenfone-10', brandId: 'asus', name: 'Asus Zenfone 10', series: 'Zenfone Compact', screenType: 'flat', displayTech: 'Flat 5.9" Super AMOLED 144Hz', accentColor: '#2b3a4a', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 }
  ],
  huawei: [
    { id: 'huawei-p60-pro', brandId: 'huawei', name: 'Huawei P60 Pro', series: 'P Series', screenType: 'curved', displayTech: 'Quad-Curved LTPO OLED (120Hz Kunlun Glass)', accentColor: '#3c3d3e', imageBg: 'from-stone-900 to-slate-950', releaseYear: 2023 },
    { id: 'huawei-mate-50-pro', brandId: 'huawei', name: 'Huawei Mate 50 Pro', series: 'Mate Series', screenType: 'curved', displayTech: 'Curved OLED 120Hz (Kunlun Glass)', accentColor: '#8a4b2a', imageBg: 'from-amber-950 to-slate-950', releaseYear: 2022 }
  ],
  infinix: [
    { id: 'infinix-gt-10-pro', brandId: 'infinix', name: 'Infinix GT 10 Pro', series: 'GT Gaming', screenType: 'flat', displayTech: 'Flat FHD+ AMOLED 120Hz', accentColor: '#e0a96d', imageBg: 'from-amber-950 to-slate-950', releaseYear: 2023 },
    { id: 'infinix-zero-30-5g', brandId: 'infinix', name: 'Infinix Zero 30 5G', series: 'Zero Series', screenType: 'curved', displayTech: '3D Curved 10-bit AMOLED 144Hz', accentColor: '#204051', imageBg: 'from-teal-950 to-slate-950', releaseYear: 2023 }
  ],
  lenovo: [
    { id: 'lenovo-legion-y70', brandId: 'lenovo', name: 'Lenovo Legion Y70', series: 'Legion Series', screenType: 'flat', displayTech: 'Flat FHD+ OLED 144Hz', accentColor: '#9e2a2b', imageBg: 'from-red-950 to-slate-950', releaseYear: 2022 },
    { id: 'lenovo-k14-plus', brandId: 'lenovo', name: 'Lenovo K14 Plus', series: 'K Series', screenType: 'flat', displayTech: 'Flat IPS LCD 90Hz', accentColor: '#2b2d42', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2022 }
  ],
  lg: [
    { id: 'lg-wing-5g', brandId: 'lg', name: 'LG Wing 5G', series: 'Explorer Series', screenType: 'curved', displayTech: 'Swivel P-OLED + G-OLED Secondary', accentColor: '#2b4162', imageBg: 'from-blue-950 to-slate-950', releaseYear: 2020 },
    { id: 'lg-velvet-5g', brandId: 'lg', name: 'LG Velvet 5G', series: 'Velvet Series', screenType: 'curved', displayTech: 'Curved 3D Arc P-OLED', accentColor: '#49111c', imageBg: 'from-rose-950 to-slate-950', releaseYear: 2020 }
  ],
  sony: [
    { id: 'sony-xperia-1-v', brandId: 'sony', name: 'Sony Xperia 1 V', series: 'Xperia 1', screenType: 'flat', displayTech: 'Flat 4K HDR OLED 120Hz (21:9 CinemaWide)', accentColor: '#2b2b2b', imageBg: 'from-neutral-900 to-black', releaseYear: 2023 },
    { id: 'sony-xperia-5-v', brandId: 'sony', name: 'Sony Xperia 5 V', series: 'Xperia 5', screenType: 'flat', displayTech: 'Flat FHD+ HDR OLED 120Hz', accentColor: '#3d405b', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 }
  ],
  htc: [
    { id: 'htc-u23-pro', brandId: 'htc', name: 'HTC U23 Pro', series: 'U Series', screenType: 'flat', displayTech: 'Flat FHD+ OLED 120Hz (VIVERSE Ready)', accentColor: '#30343f', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2023 },
    { id: 'htc-desire-22-pro', brandId: 'htc', name: 'HTC Desire 22 Pro', series: 'Desire Series', screenType: 'flat', displayTech: 'Flat FHD+ IPS LCD 120Hz', accentColor: '#242038', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2022 }
  ],
  microsoft: [
    { id: 'microsoft-surface-duo-2', brandId: 'microsoft', name: 'Surface Duo 2', series: 'Surface Mobile', screenType: 'curved', displayTech: 'Dual Dual Pixel AMOLED (90Hz)', accentColor: '#1b1b1b', imageBg: 'from-neutral-900 to-black', releaseYear: 2021 },
    { id: 'microsoft-surface-duo', brandId: 'microsoft', name: 'Surface Duo (Gen 1)', series: 'Surface Mobile', screenType: 'flat', displayTech: 'Dual AMOLED 60Hz 360-Hinge', accentColor: '#4a4e69', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2020 }
  ],
  zte: [
    { id: 'zte-nubia-z60-ultra', brandId: 'zte', name: 'ZTE Nubia Z60 Ultra', series: 'Nubia Flagship', screenType: 'flat', displayTech: 'Flat Full-Screen AMOLED (UDC Under-Display Cam)', accentColor: '#1e1e1e', imageBg: 'from-neutral-900 to-black', releaseYear: 2023 },
    { id: 'zte-axon-40-ultra', brandId: 'zte', name: 'ZTE Axon 40 Ultra', series: 'Axon Series', screenType: 'curved', displayTech: 'Waterfall Curved AMOLED 120Hz (UDC Gen 3)', accentColor: '#2c3e50', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2022 }
  ],
  others: [
    { id: 'universal-android-smartphone', brandId: 'others', name: 'Universal Android Device', series: 'Standard Chassis', screenType: 'flat', displayTech: 'Capacitive Touch Display', accentColor: '#3b82f6', imageBg: 'from-slate-800 to-slate-950', releaseYear: 2023 },
    { id: 'universal-custom-phone', brandId: 'others', name: 'Custom / Legacy Handset', series: 'Custom Order', screenType: 'flat', displayTech: 'Micro-Tested Hardware Matrix', accentColor: '#e11d48', imageBg: 'from-slate-900 to-slate-950', releaseYear: 2022 }
  ]
};

// 16 Exact Repair Types for Phones as requested by the prompt
export const REPAIR_TYPES_CATALOG: RepairTypeItem[] = [
  {
    id: 'broken-screen-glass',
    title: 'Broken Screen (Outer Glass)',
    category: 'Screen',
    icon: Sparkles,
    basePrice: 1499,
    isStartingAt: true,
    estimatedTime: '~48 hrs',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Precision cryogenic/hot-wire glass separation that replaces shattered exterior glass while preserving 100% original OEM OLED/LCD matrix.',
    details: {
      whatsIncluded: [
        'Molybdenum wire micro-separation of shattered top glass',
        'Preservation of 100% original factory display & digitizer matrix',
        'ISO-5 cleanroom roller dry-film OCA optical lamination',
        '5.5-bar heated autoclave vacuum chamber bubble purge',
        'Oleophobic surface coating & perimeter liquid dust gasket seal'
      ],
      partsQuality: 'OEM-Grade Chemically Strengthened Oleophobic Glass (9H Corning spec)',
      timeTaken: '48 to 72 hours (Laboratory precision turnaround)',
      warrantyDetails: '90-Day Warranty against delamination, bubble formation, or touch calibration loss',
      recommendedFor: 'Devices where top glass is cracked or shattered, but the display panel shows zero lines/ink spots and touch is completely responsive.'
    },
    isPopular: true,
    popularityRank: 1
  },
  {
    id: 'non-original-screen',
    title: 'Non-Original Screen (Glass+Touch+Display)',
    category: 'Screen',
    icon: Layers,
    basePrice: 1999,
    isStartingAt: true,
    estimatedTime: '~2 hrs',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'High-grade aftermarket display assembly replacement for budget-friendly restoration with smooth responsiveness and rich color reproduction.',
    details: {
      whatsIncluded: [
        'Complete assembly swap (Glass + Touch Sensor + Display panel)',
        'Pre-bonded frame chassis installation',
        'Micro-calibration for multi-touch gesture responsiveness',
        'Perimeter structural seal & ambient light sensor testing',
        'Disposal & eco-recycling of damaged screen module'
      ],
      partsQuality: 'Grade-A+ High-Brightness Hard/Incell OLED or IPS (90%+ sRGB gamut)',
      timeTaken: '2 hours standard / walk-in ready',
      warrantyDetails: '90-Day Lab Warranty covering touch responsiveness and display electronics',
      recommendedFor: 'Budget-conscious repairs, secondary phones, trade-in readiness, or severe frame damage where OEM pricing exceeds device valuation.'
    },
    isPopular: true,
    popularityRank: 2
  },
  {
    id: 'original-screen',
    title: 'Original Screen (Glass+Touch+Display)',
    category: 'Screen',
    icon: Eye,
    basePrice: 4499,
    isStartingAt: true,
    estimatedTime: '~2 hrs',
    warranty: '180-Day Lab Warranty',
    shortDescription: '100% Genuine OEM factory-grade complete display module with native refresh rate, peak nits brightness, and TrueTone/biometric support.',
    details: {
      whatsIncluded: [
        'Genuine OEM factory folder assembly with integrated frame',
        'EEPROM TrueTone & biometric serial programming transfer',
        'Full 120Hz LTPO / High-PWM dimming hardware verification',
        'Original IP-certified waterproof perimeter adhesive seal',
        '40-point post-repair touch & color calibration matrix'
      ],
      partsQuality: '100% Authentic OEM Specification (Samsung Display / LG / BOE Tier-1 Factory Unit)',
      timeTaken: '2 to 3 hours with serial data synchronization',
      warrantyDetails: '180-Day Comprehensive Warranty covering panel electronics, lines, and touch anomalies',
      recommendedFor: 'Flagship handsets where camera color grading, HDR brightness, 120Hz ProMotion/LTPO, and biometric integration are paramount.'
    },
    isPopular: true,
    popularityRank: 3
  },
  {
    id: 'charging-port',
    title: 'Charging Port',
    category: 'Charging',
    icon: Zap,
    basePrice: 899,
    isStartingAt: true,
    estimatedTime: '~45 mins',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Replacement or ultrasonic micro-cleaning of bent, corroded, or loose USB-C/Lightning connector docks with fast-charging PD verification.',
    details: {
      whatsIncluded: [
        'High-density USB-C or Lightning sub-board flex dock swap',
        'Support for 65W/100W USB-PD and SuperVOOC fast-charging protocols',
        'Microphone & bottom antenna continuity verification',
        'Lint and debris extraction from speaker grills & port cavity',
        'Digital current load testing under 9V/12V/20V thermal monitoring'
      ],
      partsQuality: 'OEM Gold-Plated Connector Pins on reinforced flex PCB',
      timeTaken: '45 to 60 minutes express turnaround',
      warrantyDetails: '90-Day Warranty against connection intermittent faults and fast-charging degradation',
      recommendedFor: 'Slow charging, cable falling out, moisture detected warning, or complete failure to recognize charger.'
    },
    isPopular: true,
    popularityRank: 4
  },
  {
    id: 'battery',
    title: 'Battery',
    category: 'Battery',
    icon: Battery,
    basePrice: 1299,
    isStartingAt: true,
    estimatedTime: '~45 mins',
    warranty: '180-Day Lab Warranty',
    shortDescription: 'Certified high-density lithium-ion battery replacement with intelligent BMS power controller and 100% full capacity health restoration.',
    details: {
      whatsIncluded: [
        'Fresh 0-cycle certified Li-Po battery cell installation',
        'Battery Management System (BMS) logic board calibration',
        'Thermal dissipation graphene heat pad re-application',
        'Overcharge, thermal runaway & short-circuit protection testing',
        'Authorized e-waste handling and safe recycling of depleted cell'
      ],
      partsQuality: 'Grade-A+ Pure Cobalt Cell (CE/RoHS certified, 100% rated mAh)',
      timeTaken: '45 to 60 minutes express turnaround',
      warrantyDetails: '180-Day Warranty against rapid discharge, swelling, or unexpected shutdowns',
      recommendedFor: 'Battery health under 80%, phone shutting down at 20-30%, or device getting noticeably hot while idling.'
    },
    isPopular: true,
    popularityRank: 5
  },
  {
    id: 'face-id-fingerprint',
    title: 'Face ID / Fingerprint',
    category: 'Body',
    icon: ScanFace,
    basePrice: 1799,
    isStartingAt: true,
    estimatedTime: '~3 hrs',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Board-level micro-soldering and laser alignment to restore TrueDepth infrared dot projectors or under-display optical/ultrasonic biometrics.',
    details: {
      whatsIncluded: [
        'Dot projector micro-soldering & prism laser alignment',
        'Infrared (IR) camera and flood illuminator flex diagnostics',
        'Under-display optical/ultrasonic sensor recalibration tool',
        'Motherboard secure enclave biometric cryptographic handshake sync',
        'Full biometric unlock latency benchmarking'
      ],
      partsQuality: 'Original Biometric Sensor Modules paired via precision micro-jumpers',
      timeTaken: '2 to 4 hours (High-precision bench work)',
      warrantyDetails: '90-Day Warranty covering biometric enrollment and unlock functionality',
      recommendedFor: 'Face ID disabled warnings, under-display fingerprint sensor not reading, or failure after water/drop impact.'
    },
    isPopular: false,
    popularityRank: 6
  },
  {
    id: 'back-panel-glass',
    title: 'Back Panel/Back Glass',
    category: 'Body',
    icon: Shield,
    basePrice: 1199,
    isStartingAt: true,
    estimatedTime: '~3 hrs',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'High-precision cold-laser shattered rear glass extraction and factory tempered glass/polycarbonate back plate rebonding.',
    details: {
      whatsIncluded: [
        'Non-thermal fiber laser paint & epoxy ablation',
        'Safe shattered glass extraction without magnetic coil damage',
        'Qi/MagSafe wireless charging coil continuity inspection',
        'Precision die-cut structural frame waterproofing adhesive',
        'Camera lens protection ring realignment and dust clean'
      ],
      partsQuality: 'OEM Tempered Glass / Vegan Leather / Ceramic Shield match',
      timeTaken: '2 to 4 hours with laser alignment and adhesive cure',
      warrantyDetails: '90-Day Warranty against back plate lifting or camera lens rattle',
      recommendedFor: 'Cracked rear glass, sharp glass fragments peeling off, or bent rear housing.'
    },
    isPopular: true,
    popularityRank: 7
  },
  {
    id: 'earpiece',
    title: 'Earpiece',
    category: 'Audio',
    icon: Volume2,
    basePrice: 699,
    isStartingAt: false,
    estimatedTime: '~45 mins',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Restores faint, muffled, or crackling in-call audio through ultrasonic mesh clearing or acoustic transducer speaker coil replacement.',
    details: {
      whatsIncluded: [
        'Acoustic micro-mesh debris & makeup residue extraction',
        'OEM miniature voice coil speaker transducer replacement',
        'Proximity and ambient light sensor flex alignment',
        'Decibel frequency sweep from 300Hz to 3400Hz voice band',
        'Sealing gasket replacement to prevent sweat ingress'
      ],
      partsQuality: 'High-Fidelity Neodymium Driver Ear Receiver',
      timeTaken: '45 minutes express turnaround',
      warrantyDetails: '90-Day Warranty for crystal-clear call audio volume',
      recommendedFor: 'Struggling to hear callers during phone conversations, distorted voice, or low volume even on max setting.'
    },
    isPopular: false,
    popularityRank: 8
  },
  {
    id: 'loudspeaker',
    title: 'Loudspeaker',
    category: 'Audio',
    icon: VolumeX,
    basePrice: 799,
    isStartingAt: false,
    estimatedTime: '~45 mins',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Bottom stereo speaker module swap for crackle-free media audio, ringtone projection, and speakerphone clarity.',
    details: {
      whatsIncluded: [
        'Complete bottom acoustic chamber box module swap',
        'Dust-proof silicone perimeter dampening ring installation',
        'Audio IC amplifier output voltage benchmark',
        'Stereo channel balance testing with high-gain playback',
        'Vibration motor dampening isolation check'
      ],
      partsQuality: 'OEM Stereo Acoustic Chamber with integrated bass dampening',
      timeTaken: '45 to 60 minutes express turnaround',
      warrantyDetails: '90-Day Warranty against audio distortion or volume drop',
      recommendedFor: 'Ringtone not sounding, crackling when playing videos, muffled hands-free speakerphone.'
    },
    isPopular: false,
    popularityRank: 9
  },
  {
    id: 'microphone',
    title: 'Microphone',
    category: 'Audio',
    icon: Mic,
    basePrice: 799,
    isStartingAt: false,
    estimatedTime: '~60 mins',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Fixes caller complaints of faint, robotic, or muffled voice via primary bottom MEMS mic or top noise-reduction mic flex repair.',
    details: {
      whatsIncluded: [
        'Digital MEMS directional microphone flex sub-assembly',
        'Acoustic duct unblocking and dust mesh renewal',
        'Dual/triple mic noise cancellation circuit diagnostic',
        'Studio voice memo frequency spectrum recording test',
        'Anti-vibration acoustic rubber boot seating'
      ],
      partsQuality: 'Low-Noise Silicon MEMS Microphones with EMI shielding',
      timeTaken: '45 to 75 minutes',
      warrantyDetails: '90-Day Warranty for voice clarity across phone calls and WhatsApp audio',
      recommendedFor: 'Callers saying you sound far away, voice notes recording only static or silence.'
    },
    isPopular: false,
    popularityRank: 10
  },
  {
    id: 'front-camera',
    title: 'Front Camera',
    category: 'Camera',
    icon: Camera,
    basePrice: 1299,
    isStartingAt: true,
    estimatedTime: '~1 hr',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Selfie camera sensor module replacement fixing blurry focus, black camera view, or internal lens dust artifacts.',
    details: {
      whatsIncluded: [
        'OEM front camera optical CMOS sensor module replacement',
        'Autofocus motor and portrait mode depth alignment',
        'Interior display glass lens cleanroom dust extraction',
        'Video call test across 1080p / 4K 60fps modes',
        'Proximity sensor interlock verification'
      ],
      partsQuality: 'OEM Optical Sensor with anti-reflective lens coating',
      timeTaken: '60 minutes walk-in turnaround',
      warrantyDetails: '90-Day Warranty covering autofocus, sharpness, and camera sensor communication',
      recommendedFor: 'Blurry selfies, front camera showing completely black screen, or lens dust spots inside.'
    },
    isPopular: false,
    popularityRank: 11
  },
  {
    id: 'rear-camera',
    title: 'Rear Camera',
    category: 'Camera',
    icon: Camera,
    basePrice: 1899,
    isStartingAt: true,
    estimatedTime: '~2 hrs',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Multi-lens module replacement restoring broken Optical Image Stabilization (OIS), camera vibration buzzing, or scratched lens glass.',
    details: {
      whatsIncluded: [
        'Main primary sensor / telephoto / ultra-wide module replacement',
        'Optical Image Stabilization (OIS) gyroscope stabilization testing',
        'Sapphire glass lens cover replacement if cracked or scratched',
        '4K/8K video recording shake & focus hunting calibration',
        'Laser autofocus module recalibration'
      ],
      partsQuality: 'Original Sensor Modules with factory magnetic OIS actuators',
      timeTaken: '1 to 2 hours',
      warrantyDetails: '90-Day Warranty against camera sensor artifacts, motor hum, and focus failure',
      recommendedFor: 'Camera vibrating loudly when opened, blurry photos that will not focus, or cracked camera glass rings.'
    },
    isPopular: true,
    popularityRank: 12
  },
  {
    id: 'power-volume-buttons',
    title: 'Power/Volume Buttons',
    category: 'Body',
    icon: Sliders,
    basePrice: 799,
    isStartingAt: false,
    estimatedTime: '~45 mins',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Restores non-clicking, sunken, or unresponsive power, volume rocker, and action/mute slider physical switches.',
    details: {
      whatsIncluded: [
        'Internal micro-tactile dome switch flex harness replacement',
        'External aluminum key bracket realignment and de-gunking',
        'Emergency hard-reset key combo test (Power + Vol Up/Down)',
        'Click tactile actuation pressure adjustment',
        'Frame chassis button channel cleaning'
      ],
      partsQuality: 'High-Tactile Fatigue-Tested Metal Dome Switch Flex',
      timeTaken: '45 to 60 minutes',
      warrantyDetails: '90-Day Warranty for tactile feedback and reliable actuation',
      recommendedFor: 'Phone turning on/off by itself, volume button stuck, or power button having zero click.'
    },
    isPopular: false,
    popularityRank: 13
  },
  {
    id: 'water-damage',
    title: 'Water Damage',
    category: 'Others',
    icon: Droplets,
    basePrice: 1499,
    isStartingAt: true,
    estimatedTime: '~24 hrs',
    warranty: '30-Day Recovery Warranty',
    shortDescription: 'Emergency motherboard ultrasonic alcohol bath, corrosion de-oxidation, micro-soldering short removal, and data preservation.',
    details: {
      whatsIncluded: [
        'Immediate battery disconnect to halt electrolytic trace erosion',
        'Full motherboard disassembly and ultrasonic 99.9% IPA bath',
        '40x optical microscope trace corrosion inspection',
        'Power rail short-circuit thermal camera detection and capacitor swap',
        'Critical user data preservation & backup consultation'
      ],
      partsQuality: 'Board-Level SMD Components & Lead-Free Solder Rework',
      timeTaken: '24 to 48 hours for complete chemical dry and diagnostics',
      warrantyDetails: '30-Day Warranty on repaired power circuits and boot integrity',
      recommendedFor: 'Devices dropped in water, pools, toilets, or liquid spills showing moisture warnings or failure to boot.'
    },
    isPopular: false,
    popularityRank: 14
  },
  {
    id: 'software-motherboard',
    title: 'Software/Motherboard Issue',
    category: 'Others',
    icon: Cpu,
    basePrice: 1299,
    isStartingAt: true,
    estimatedTime: '~24 hrs',
    warranty: '60-Day Lab Warranty',
    shortDescription: 'Resolves boot loops, unexpected restarts, Qualcomm/Apple kernel panics, baseband radio errors, and BGA chip micro-soldering.',
    details: {
      whatsIncluded: [
        'UART/JTAG hardware debug log analysis for panic traces',
        'Official clean firmware reflash and partition reconstruction',
        'BGA Power IC (PMIC) and Audio IC micro-soldering reflow/reball',
        'Wi-Fi/Bluetooth IC continuity & RF trace repairs',
        'Full hardware stress test under Geekbench thermal load'
      ],
      partsQuality: 'Original Specification Power Management & Radio ICs',
      timeTaken: '12 to 36 hours based on micro-soldering complexity',
      warrantyDetails: '60-Day Warranty on motherboard boot and connectivity circuits',
      recommendedFor: 'Phone stuck on brand logo, restarting randomly every few minutes, or showing "No Service" baseband glitch.'
    },
    isPopular: false,
    popularityRank: 15
  },
  {
    id: 'other-issue',
    title: 'Other (describe issue)',
    category: 'Others',
    icon: HelpCircle,
    basePrice: 499,
    isStartingAt: true,
    estimatedTime: '~45 mins',
    warranty: '90-Day Lab Warranty',
    shortDescription: 'Custom diagnostic triage for unusual glitches, rattling components, frame straightening, or unlisted hardware symptoms.',
    details: {
      whatsIncluded: [
        '40-point bench inspection with digital microscope diagnostic',
        'Comprehensive multi-meter power rail impedance survey',
        'Custom technician notes and photographic fault documentation',
        'Zero-obligation formal quote before committing to any repair',
        'Full diagnostic fee waived upon proceeding with repair'
      ],
      partsQuality: 'Diagnostic bench assessment using calibrated Fluke & Thermal gear',
      timeTaken: '45-minute on-site bench triage',
      warrantyDetails: 'Full parts warranty specified upon written quote',
      recommendedFor: 'Any issue not listed above, unexplained battery drain, weird noises, bent frames, or unusual sensor glitches.'
    },
    isPopular: false,
    popularityRank: 16
  }
];

export const PINCODE_SERVICEABLE_PREFIXES = [
  '560', // Bengaluru metro & suburban PIN codes (560001 - 560110)
  '561',
  '562',
  '570',
  '571',
  '572'
];

export function isPincodeServiceable(pincode: string): boolean {
  if (!/^\d{6}$/.test(pincode)) return false;
  // Bengaluru and Karnataka major tech hubs are fully serviceable with free pickup & 48-72 hr delivery
  return PINCODE_SERVICEABLE_PREFIXES.some(prefix => pincode.startsWith(prefix));
}
