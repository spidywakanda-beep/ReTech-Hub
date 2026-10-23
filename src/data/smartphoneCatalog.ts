export type OperatingSystem = 'android' | 'ios';

export type SmartphoneBrand = 'all' | 'samsung' | 'oneplus' | 'xiaomi' | 'vivo' | 'apple';

export type SmartphoneTier = 'all' | 'flagship' | 'mid-range' | 'budget';

export interface SmartphoneModel {
  id: string;
  os: OperatingSystem;
  brand: 'Samsung' | 'OnePlus' | 'Xiaomi' | 'vivo' | 'Apple';
  brandKey: 'samsung' | 'oneplus' | 'xiaomi' | 'vivo' | 'apple';
  series: string; // e.g., 'S Series', 'FE Series', 'A Series', 'Numbered Flagship', 'R Series', 'Nord Series', 'Redmi Note', 'X Series', 'V Series', 'T Series', 'Pro Series', 'Number Series'
  name: string;
  releaseYear: number;
  tier: 'flagship' | 'mid-range' | 'budget';
  tierLabel: string; // 'Flagship Tier', 'Mid-Range Performance', 'Budget-Friendly'
  keyHighlights: string[];
  specs: {
    display: string;
    chipset: string;
    rearCameras: string;
    frontCamera: string;
    batteryAndCharging: string;
    osAtLaunch: string;
    buildAndDesign: string;
    connectivity: string;
  };
  usedMarketGuide: {
    recommendedInspection: string[];
    typicalUsedStorageVariants: string[];
    buyerAdvice: string;
  };
}

export const SMARTPHONE_DISCOVERY_NOTICE =
  "Pre-Owned Technical Discovery Catalog. This curated reference guide assists customers in comparing authentic technical specifications and hardware architectures across popular pre-owned smartphones. Live physical stock and unit-specific condition reports are verified in-person at ReTech Hub Bengaluru.";

export const SMARTPHONE_CATALOG: SmartphoneModel[] = [
  // ==================== SAMSUNG GALAXY ====================
  {
    id: 'samsung-s24-ultra',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'S Series',
    name: 'Samsung Galaxy S24 Ultra',
    releaseYear: 2024,
    tier: 'flagship',
    tierLabel: 'Ultra Flagship',
    keyHighlights: ['Snapdragon 8 Gen 3 for Galaxy', '200MP Quad Cam with 5x Periscope', 'Flat 6.8" 120Hz Gorilla Armor Display', 'Integrated S-Pen'],
    specs: {
      display: '6.8" Flat QHD+ Dynamic AMOLED 2X, 1-120Hz LTPO, 2600 nits peak',
      chipset: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)',
      rearCameras: '200MP Main (OIS) + 50MP 5x Periscope + 10MP 3x Telephoto + 12MP Ultra-wide',
      frontCamera: '12MP Dual Pixel AF',
      batteryAndCharging: '5,000 mAh (45W wired, 15W wireless)',
      osAtLaunch: 'Android 14, One UI 6.1 (7 years OS support)',
      buildAndDesign: 'Titanium frame, Corning Gorilla Armor front & rear',
      connectivity: '5G (Sub-6/mmWave), Wi-Fi 7, Bluetooth 5.3, UWB, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['S-Pen latency & pressure sensor grid', 'Gorilla Armor anti-reflective coating wear', '10x/100x optical periscope alignment'],
      typicalUsedStorageVariants: ['256GB / 12GB', '512GB / 12GB', '1TB / 12GB'],
      buyerAdvice: 'Exceptional longevity with 7-year software updates. Verify camera lens rings for micro-scuffs.'
    }
  },
  {
    id: 'samsung-s23-ultra',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'S Series',
    name: 'Samsung Galaxy S23 Ultra',
    releaseYear: 2023,
    tier: 'flagship',
    tierLabel: 'Ultra Flagship',
    keyHighlights: ['Snapdragon 8 Gen 2 for Galaxy', '200MP ISOCELL HP2 Sensor', '6.8" Curved Dynamic AMOLED 2X', 'Built-in S-Pen'],
    specs: {
      display: '6.8" Edge QHD+ Dynamic AMOLED 2X, 1-120Hz LTPO, 1750 nits peak',
      chipset: 'Qualcomm Snapdragon 8 Gen 2 for Galaxy (4nm)',
      rearCameras: '200MP Main (OIS) + 10MP 10x Periscope + 10MP 3x Telephoto + 12MP Ultra-wide',
      frontCamera: '12MP Dual Pixel AF',
      batteryAndCharging: '5,000 mAh (45W wired, 15W wireless)',
      osAtLaunch: 'Android 13, One UI 5.1 (Upgradable to Android 17)',
      buildAndDesign: 'Armor Aluminum frame, Gorilla Glass Victus 2',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, UWB, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['OLED burn-in test via *#0*# code', '10x optical periscope zoom motor', 'Battery discharge slope under camera recording'],
      typicalUsedStorageVariants: ['256GB / 12GB', '512GB / 12GB'],
      buyerAdvice: 'One of the most reliable Android flagships on the used market. Outstanding battery life and zoom capability.'
    }
  },
  {
    id: 'samsung-s23',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'S Series',
    name: 'Samsung Galaxy S23',
    releaseYear: 2023,
    tier: 'flagship',
    tierLabel: 'Compact Flagship',
    keyHighlights: ['Compact 6.1" Form Factor', 'Snapdragon 8 Gen 2', '50MP Triple Camera with 3x Optical', 'Lightweight 168g'],
    specs: {
      display: '6.1" Flat FHD+ Dynamic AMOLED 2X, 48-120Hz, 1750 nits peak',
      chipset: 'Qualcomm Snapdragon 8 Gen 2 for Galaxy (4nm)',
      rearCameras: '50MP Main (OIS) + 10MP 3x Telephoto + 12MP Ultra-wide',
      frontCamera: '12MP Dual Pixel AF',
      batteryAndCharging: '3,900 mAh (25W wired, 15W wireless)',
      osAtLaunch: 'Android 13, One UI 5.1',
      buildAndDesign: 'Armor Aluminum frame, Gorilla Glass Victus 2, IP68',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Compact battery cycle retention', 'Type-C charging port contact wear', 'Telephoto focus mechanism'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'Top pick for customers seeking an ergonomic, one-handed flagship with Snapdragon efficiency.'
    }
  },
  {
    id: 'samsung-s22',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'S Series',
    name: 'Samsung Galaxy S22',
    releaseYear: 2022,
    tier: 'flagship',
    tierLabel: 'Flagship Value',
    keyHighlights: ['Snapdragon 8 Gen 1', '6.1" Dynamic AMOLED 2X 120Hz', '50MP GN5 Main Sensor', 'Pocketable Form Factor'],
    specs: {
      display: '6.1" Flat FHD+ Dynamic AMOLED 2X, 48-120Hz, 1300 nits peak',
      chipset: 'Qualcomm Snapdragon 8 Gen 1 (4nm)',
      rearCameras: '50MP Main (OIS) + 10MP 3x Telephoto + 12MP Ultra-wide',
      frontCamera: '10MP Dual Pixel',
      batteryAndCharging: '3,700 mAh (25W wired, 15W wireless)',
      osAtLaunch: 'Android 12, One UI 4.1 (Upgradable to Android 16)',
      buildAndDesign: 'Armor Aluminum frame, Gorilla Glass Victus+, IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Thermal throttling under benchmark', 'Remaining battery capacity (benchmark 3700mAh cell)', 'Display oleophobic coating'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'Budget-friendly entry into Samsung S-series ecosystem. Expect moderate battery endurance; ideal with GaN fast charger.'
    }
  },
  {
    id: 'samsung-s23-fe',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'FE Models',
    name: 'Samsung Galaxy S23 FE',
    releaseYear: 2023,
    tier: 'mid-range',
    tierLabel: 'Fan Edition Mid-Range',
    keyHighlights: ['6.4" Dynamic AMOLED 2X', '50MP Main + 8MP 3x Zoom', '4500 mAh Battery', 'S-Series Design Language'],
    specs: {
      display: '6.4" FHD+ Dynamic AMOLED 2X, 60-120Hz, 1450 nits peak',
      chipset: 'Samsung Exynos 2200 (India/Global) (4nm)',
      rearCameras: '50MP Main (OIS) + 8MP 3x Telephoto (OIS) + 12MP Ultra-wide',
      frontCamera: '10MP',
      batteryAndCharging: '4,500 mAh (25W wired, 15W wireless)',
      osAtLaunch: 'Android 13, One UI 5.1',
      buildAndDesign: 'Aluminum frame, Gorilla Glass 5, IP68 water resistance',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Thermals under 4K video recording', 'Fingerprint scanner optical response', 'Speaker mesh clarity'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'Provides flagship camera processing and optical 3x zoom at a accessible pre-owned price point.'
    }
  },
  {
    id: 'samsung-s21-fe',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'FE Models',
    name: 'Samsung Galaxy S21 FE 5G',
    releaseYear: 2022,
    tier: 'mid-range',
    tierLabel: 'Fan Edition Value',
    keyHighlights: ['6.4" Dynamic AMOLED 2X 120Hz', 'Snapdragon 888 / Exynos 2100', 'Optical 3x Telephoto', 'Lightweight Polycarbonate Back'],
    specs: {
      display: '6.4" FHD+ Dynamic AMOLED 2X, 120Hz, 1200 nits peak',
      chipset: 'Qualcomm Snapdragon 888 5G / Exynos 2100 (5nm)',
      rearCameras: '12MP Main (OIS) + 8MP 3x Telephoto + 12MP Ultra-wide',
      frontCamera: '32MP',
      batteryAndCharging: '4,500 mAh (25W wired, 15W wireless)',
      osAtLaunch: 'Android 12, One UI 4.0',
      buildAndDesign: 'Aluminum frame, "Glasstic" polycarbonate back, IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.0, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Green vertical line display check post-update', 'Rear panel adhesive integrity', 'Charging port tightness'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'High-value secondary or student device. Inspect screen closely for post-update line artifacts.'
    }
  },
  {
    id: 'samsung-a55',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'A Series',
    name: 'Samsung Galaxy A55 5G',
    releaseYear: 2024,
    tier: 'mid-range',
    tierLabel: 'Premium Mid-Range',
    keyHighlights: ['Metal Frame Design', 'Exynos 1480 with AMD Xclipse GPU', '50MP OIS Camera', '5000 mAh All-Day Battery'],
    specs: {
      display: '6.6" FHD+ Super AMOLED, 120Hz, 1000 nits HBM, Gorilla Glass Victus+',
      chipset: 'Samsung Exynos 1480 (4nm) with AMD RDNA-based GPU',
      rearCameras: '50MP Main (OIS) + 12MP Ultra-wide + 5MP Macro',
      frontCamera: '32MP',
      batteryAndCharging: '5,000 mAh (25W wired)',
      osAtLaunch: 'Android 14, One UI 6.1 (4 years OS updates)',
      buildAndDesign: 'Solid metal frame, Key Island ergonomic bump, IP67',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Metal frame bevels for drop marks', 'Super AMOLED touch responsiveness', 'E-SIM functionality'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB', '256GB / 12GB'],
      buyerAdvice: 'First A-series with metal frame. Exceptional battery endurance and consistent thermal stability.'
    }
  },
  {
    id: 'samsung-a54',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'A Series',
    name: 'Samsung Galaxy A54 5G',
    releaseYear: 2023,
    tier: 'mid-range',
    tierLabel: 'Popular Mid-Range',
    keyHighlights: ['Glass Back S-Series Look', '50MP OIS Sensor with Nightography', '5000 mAh Battery', 'Stereo Speakers'],
    specs: {
      display: '6.4" FHD+ Super AMOLED, 120Hz, 1000 nits HBM',
      chipset: 'Samsung Exynos 1380 (5nm)',
      rearCameras: '50MP Main (OIS) + 12MP Ultra-wide + 5MP Macro',
      frontCamera: '32MP',
      batteryAndCharging: '5,000 mAh (25W wired)',
      osAtLaunch: 'Android 13, One UI 5.1',
      buildAndDesign: 'Gorilla Glass 5 front & back, plastic midframe, IP67',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Exynos 1380 UI fluidness', 'Camera glass cleanliness', 'Dual SIM tray seal'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'Very popular in the refurbished space due to solid camera and glass back design.'
    }
  },
  {
    id: 'samsung-a35',
    os: 'android',
    brand: 'Samsung',
    brandKey: 'samsung',
    series: 'A Series',
    name: 'Samsung Galaxy A35 5G',
    releaseYear: 2024,
    tier: 'budget',
    tierLabel: 'Budget-Friendly Quality',
    keyHighlights: ['Punch-Hole Infinity-O Display', 'Exynos 1380 5nm', '50MP OIS Camera', 'IP67 Water Resistance'],
    specs: {
      display: '6.6" FHD+ Super AMOLED, 120Hz, 1000 nits HBM',
      chipset: 'Samsung Exynos 1380 (5nm)',
      rearCameras: '50MP Main (OIS) + 8MP Ultra-wide + 5MP Macro',
      frontCamera: '13MP',
      batteryAndCharging: '5,000 mAh (25W wired)',
      osAtLaunch: 'Android 14, One UI 6.1',
      buildAndDesign: 'Key Island design, Gorilla Glass Victus+ front, IP67',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Haptic vibration motor test', 'Battery capacity health', 'Charging speed test with 25W charger'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'Replaces older teardrop notch with punch-hole display. Great budget pick with IP67 rating.'
    }
  },

  // ==================== ONEPLUS ====================
  {
    id: 'oneplus-12',
    os: 'android',
    brand: 'OnePlus',
    brandKey: 'oneplus',
    series: 'Numbered Flagship',
    name: 'OnePlus 12',
    releaseYear: 2024,
    tier: 'flagship',
    tierLabel: 'Performance Flagship',
    keyHighlights: ['Snapdragon 8 Gen 3', 'Sony LYT-808 Hasselblad Camera', '5400 mAh Battery with 100W Charging', '2K 4500 nits ProXDR Display'],
    specs: {
      display: '6.82" 2K (3168x1440) ProXDR LTPO 1-120Hz, 4500 nits peak',
      chipset: 'Qualcomm Snapdragon 8 Gen 3 (4nm)',
      rearCameras: '50MP Sony LYT-808 (OIS) + 64MP 3x Periscope (OIS) + 48MP Ultra-wide',
      frontCamera: '32MP Sony IMX615',
      batteryAndCharging: '5,400 mAh (100W SuperVOOC wired, 50W wireless)',
      osAtLaunch: 'Android 14, OxygenOS 14',
      buildAndDesign: 'Curved glass, aluminum frame, alert slider, IP65',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, Infrared blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Alert slider tactile click switch', 'SuperVOOC 100W fast handshake test', 'Curved edge touch palm rejection'],
      typicalUsedStorageVariants: ['256GB / 12GB', '512GB / 16GB'],
      buyerAdvice: 'Flagship with extraordinary battery life and zero thermal throttling. Ensure original SuperVOOC adapter is present.'
    }
  },
  {
    id: 'oneplus-11',
    os: 'android',
    brand: 'OnePlus',
    brandKey: 'oneplus',
    series: 'Numbered Flagship',
    name: 'OnePlus 11 5G',
    releaseYear: 2023,
    tier: 'flagship',
    tierLabel: 'High Performance Flagship',
    keyHighlights: ['Snapdragon 8 Gen 2', 'Hasselblad 50MP Camera', '100W SuperVOOC', 'Curved AMOLED Display'],
    specs: {
      display: '6.7" QHD+ Super Fluid AMOLED, LTPO 3.0 1-120Hz, Dolby Vision',
      chipset: 'Qualcomm Snapdragon 8 Gen 2 (4nm)',
      rearCameras: '50MP Sony IMX890 (OIS) + 32MP 2x Portrait + 48MP Ultra-wide',
      frontCamera: '16MP',
      batteryAndCharging: '5,000 mAh (100W SuperVOOC wired)',
      osAtLaunch: 'Android 13, OxygenOS 13',
      buildAndDesign: 'Gorilla Glass Victus front, Gorilla Glass 5 back, alert slider',
      connectivity: '5G, Wi-Fi 7 ready, Bluetooth 5.3, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['OLED subpixel test for green tint', 'Haptic feedback motor calibration', 'Alert slider 3-stage switch'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 16GB'],
      buyerAdvice: 'Smooth 120Hz day-to-day experience at competitive used prices. Note absence of wireless charging.'
    }
  },
  {
    id: 'oneplus-10-pro',
    os: 'android',
    brand: 'OnePlus',
    brandKey: 'oneplus',
    series: 'Numbered Flagship',
    name: 'OnePlus 10 Pro 5G',
    releaseYear: 2022,
    tier: 'flagship',
    tierLabel: 'Flagship Value',
    keyHighlights: ['Snapdragon 8 Gen 1', 'Hasselblad 2nd Gen Camera', '80W SuperVOOC + 50W Wireless', 'Ceramic Camera Visor'],
    specs: {
      display: '6.7" QHD+ LTPO2 AMOLED, 1-120Hz, 1300 nits peak',
      chipset: 'Qualcomm Snapdragon 8 Gen 1 (4nm)',
      rearCameras: '48MP Sony IMX789 (OIS) + 8MP 3.3x Telephoto + 50MP 150° Ultra-wide',
      frontCamera: '32MP',
      batteryAndCharging: '5,000 mAh (80W SuperVOOC wired, 50W wireless)',
      osAtLaunch: 'Android 12, OxygenOS 12.1',
      buildAndDesign: 'Aluminum frame, matte frosted glass, micro-crystalline ceramic plate',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Frame structural integrity check', '80W charging handshake speed', 'Microcrystalline ceramic camera visor edges'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 12GB'],
      buyerAdvice: 'Attractive price-to-performance ratio in the used flagship category.'
    }
  },
  {
    id: 'oneplus-12r',
    os: 'android',
    brand: 'OnePlus',
    brandKey: 'oneplus',
    series: 'R Series',
    name: 'OnePlus 12R',
    releaseYear: 2024,
    tier: 'mid-range',
    tierLabel: 'Performance Champion',
    keyHighlights: ['Snapdragon 8 Gen 2 at Mid-Range Price', 'Massive 5500 mAh Battery', '100W SuperVOOC', '1.5K 120Hz LTPO 4.0'],
    specs: {
      display: '6.78" 1.5K (2780x1264) ProXDR LTPO4 AMOLED 1-120Hz, 4500 nits peak',
      chipset: 'Qualcomm Snapdragon 8 Gen 2 (4nm)',
      rearCameras: '50MP Sony IMX890 (OIS) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP',
      batteryAndCharging: '5,500 mAh (100W SuperVOOC wired)',
      osAtLaunch: 'Android 14, OxygenOS 14',
      buildAndDesign: 'Matte aluminum frame, Gorilla Glass Victus 2, alert slider',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, IR Blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Main camera OIS stabilization test', 'Sustained gaming battery temperature', 'Touch responsiveness under 120Hz'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 16GB'],
      buyerAdvice: 'Top recommendation for power users and gamers on a budget. Class-leading battery longevity.'
    }
  },
  {
    id: 'oneplus-11r',
    os: 'android',
    brand: 'OnePlus',
    brandKey: 'oneplus',
    series: 'R Series',
    name: 'OnePlus 11R 5G',
    releaseYear: 2023,
    tier: 'mid-range',
    tierLabel: 'Popular Mid-Range',
    keyHighlights: ['Snapdragon 8+ Gen 1', '50MP Sony IMX890 OIS', '100W Fast Charging', 'Alert Slider Included'],
    specs: {
      display: '6.74" 1.5K Super Fluid AMOLED, 40-120Hz adaptive, 1450 nits peak',
      chipset: 'Qualcomm Snapdragon 8+ Gen 1 (4nm TSMC)',
      rearCameras: '50MP Sony IMX890 (OIS) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP',
      batteryAndCharging: '5,000 mAh (100W SuperVOOC wired)',
      osAtLaunch: 'Android 13, OxygenOS 13',
      buildAndDesign: 'Curved glass back, plastic midframe, alert slider',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, IR blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Dual-cell battery health diagnostic', 'Curved glass edge micro-cracks', 'IR blaster functionality'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 16GB'],
      buyerAdvice: 'Extremely popular used device in Bengaluru. TSMC 8+ Gen 1 processor runs cool and reliable.'
    }
  },
  {
    id: 'oneplus-nord-4',
    os: 'android',
    brand: 'OnePlus',
    brandKey: 'oneplus',
    series: 'Nord Series',
    name: 'OnePlus Nord 4',
    releaseYear: 2024,
    tier: 'mid-range',
    tierLabel: 'Metal Unibody Mid-Range',
    keyHighlights: ['All-Metal Aluminum Unibody Design', 'Snapdragon 7+ Gen 3', '5500 mAh Battery with 100W', '6 Years Software Support'],
    specs: {
      display: '6.74" 1.5K (2772x1240) AMOLED, 120Hz, 2150 nits peak, Aqua Touch',
      chipset: 'Qualcomm Snapdragon 7+ Gen 3 (4nm)',
      rearCameras: '50MP Sony LYT-600 (OIS) + 8MP Ultra-wide',
      frontCamera: '16MP',
      batteryAndCharging: '5,500 mAh (100W SuperVOOC wired)',
      osAtLaunch: 'Android 14, OxygenOS 14.1 (4 OS + 6 years security)',
      buildAndDesign: 'Precision-machined metal unibody, IP65, alert slider',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, IR blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Metal chassis for cosmetic dents', 'Aqua Touch screen response with wet fingers', '100W charging thermals'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB', '256GB / 12GB'],
      buyerAdvice: 'Unique all-metal build eliminates fragile glass back concerns. Modern specs with long-term software commitment.'
    }
  },
  {
    id: 'oneplus-nord-ce4',
    os: 'android',
    brand: 'OnePlus',
    brandKey: 'oneplus',
    series: 'Nord Series',
    name: 'OnePlus Nord CE 4 5G',
    releaseYear: 2024,
    tier: 'budget',
    tierLabel: 'Budget-Friendly Daily',
    keyHighlights: ['Snapdragon 7 Gen 3', '100W SuperVOOC Charging', '5500 mAh Battery', 'Sony LYT-600 Camera'],
    specs: {
      display: '6.7" FHD+ AMOLED, 120Hz, 1100 nits peak, Aqua Touch',
      chipset: 'Qualcomm Snapdragon 7 Gen 3 (4nm)',
      rearCameras: '50MP Sony LYT-600 (OIS) + 8MP Ultra-wide',
      frontCamera: '16MP',
      batteryAndCharging: '5,500 mAh (100W SuperVOOC wired)',
      osAtLaunch: 'Android 14, OxygenOS 14',
      buildAndDesign: 'Marble-finish polycarbonate, IP54 splash resistance',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, IR blaster'
    },
    usedMarketGuide: {
      recommendedInspection: ['Hybrid dual SIM / MicroSD slot', '100W charging connector', 'Speaker balance'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'Practical budget performer offering 100W charging rarely seen in this segment.'
    }
  },
  {
    id: 'oneplus-nord-3',
    os: 'android',
    brand: 'OnePlus',
    brandKey: 'oneplus',
    series: 'Nord Series',
    name: 'OnePlus Nord 3 5G',
    releaseYear: 2023,
    tier: 'mid-range',
    tierLabel: 'Mid-Range Value',
    keyHighlights: ['Dimensity 9000 Flagship Processor', 'Sony IMX890 50MP Main OIS', '80W SuperVOOC', 'Alert Slider'],
    specs: {
      display: '6.74" 1.5K Super Fluid AMOLED, 40-120Hz, 1450 nits peak',
      chipset: 'MediaTek Dimensity 9000 (4nm)',
      rearCameras: '50MP Sony IMX890 (OIS) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP',
      batteryAndCharging: '5,000 mAh (80W SuperVOOC wired)',
      osAtLaunch: 'Android 13, OxygenOS 13.1',
      buildAndDesign: 'Gorilla Glass 5 back, flat edges, IP54',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, IR blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Dimensity 9000 thermal dissipation under load', 'Alert slider mechanism', 'Camera OIS lens rattle'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 16GB'],
      buyerAdvice: 'High RAM capacity (up to 16GB) makes it a multitasking powerhouse for budget-conscious buyers.'
    }
  },

  // ==================== XIAOMI ====================
  {
    id: 'xiaomi-14',
    os: 'android',
    brand: 'Xiaomi',
    brandKey: 'xiaomi',
    series: 'Xiaomi Flagship',
    name: 'Xiaomi 14',
    releaseYear: 2024,
    tier: 'flagship',
    tierLabel: 'Compact Pro Flagship',
    keyHighlights: ['Compact 6.36" Form Factor', 'Snapdragon 8 Gen 3', 'Leica Summilux Triple 50MP Optical System', '90W Wired + 50W Wireless'],
    specs: {
      display: '6.36" 1.5K (2670x1200) LTPO OLED, 1-120Hz, 3000 nits peak, Dolby Vision',
      chipset: 'Qualcomm Snapdragon 8 Gen 3 (4nm)',
      rearCameras: 'Leica 50MP Light Fusion 900 (OIS) + 50MP 3.2x Floating Telephoto (OIS) + 50MP Ultra-wide',
      frontCamera: '32MP 4K recording',
      batteryAndCharging: '4,610 mAh (90W wired, 50W wireless)',
      osAtLaunch: 'Android 14, Xiaomi HyperOS',
      buildAndDesign: 'Aluminum frame, Gorilla Glass Victus front, IP68 water resistance',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Leica lens coating for anti-reflective micro-hazing', 'Floating telephoto macro mechanism', '90W proprietary charging handshake'],
      typicalUsedStorageVariants: ['512GB / 12GB', '512GB / 16GB'],
      buyerAdvice: 'Benchmark compact flagship for photography lovers. Floating telephoto doubles as an incredible macro camera.'
    }
  },
  {
    id: 'xiaomi-13-pro',
    os: 'android',
    brand: 'Xiaomi',
    brandKey: 'xiaomi',
    series: 'Xiaomi Flagship',
    name: 'Xiaomi 13 Pro',
    releaseYear: 2023,
    tier: 'flagship',
    tierLabel: 'Camera Flagship',
    keyHighlights: ['1-inch Sony IMX989 Sensor', 'Leica Co-Engineered Optics', 'Snapdragon 8 Gen 2', '120W HyperCharge'],
    specs: {
      display: '6.73" 2K (3200x1440) LTPO AMOLED 1-120Hz, 1900 nits peak',
      chipset: 'Qualcomm Snapdragon 8 Gen 2 (4nm)',
      rearCameras: '50MP 1-inch Sony IMX989 (OIS) + 50MP 3.2x Floating Telephoto + 50MP Ultra-wide',
      frontCamera: '32MP',
      batteryAndCharging: '4,820 mAh (120W wired, 50W wireless)',
      osAtLaunch: 'Android 13, MIUI 14 (Upgradable to HyperOS)',
      buildAndDesign: 'Bio-ceramic back panel, Gorilla Glass Victus front, IP68',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, IR blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['1-inch sensor physical stabilization module', 'Ceramic back for hairline fissures', '120W charger test (charges 0-100% in ~19 mins)'],
      typicalUsedStorageVariants: ['256GB / 12GB'],
      buyerAdvice: 'Unmatched natural background bokeh from the genuine 1-inch sensor. Ceramic back feels remarkably premium.'
    }
  },
  {
    id: 'redmi-note-13-pro-plus',
    os: 'android',
    brand: 'Xiaomi',
    brandKey: 'xiaomi',
    series: 'Redmi Note Series',
    name: 'Redmi Note 13 Pro+ 5G',
    releaseYear: 2024,
    tier: 'mid-range',
    tierLabel: 'Mid-Range Flagship Look',
    keyHighlights: ['200MP Samsung ISOCELL HP3 with OIS', '1.5K 120Hz 3D Curved AMOLED', 'IP68 Water Resistance', '120W HyperCharge'],
    specs: {
      display: '6.67" 1.5K (2712x1220) Curved AMOLED, 120Hz, 1800 nits peak, Gorilla Glass Victus',
      chipset: 'MediaTek Dimensity 7200-Ultra (4nm)',
      rearCameras: '200MP Main (OIS) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP',
      batteryAndCharging: '5,000 mAh (120W wired, 100% in 19 mins)',
      osAtLaunch: 'Android 13, MIUI 14 (HyperOS ready)',
      buildAndDesign: 'Curved glass or vegan leather, IP68 certified',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, IR blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Curved screen corner touch response', 'IP68 water indicator inside SIM tray', '200MP full-res photo capture speed'],
      typicalUsedStorageVariants: ['256GB / 8GB', '256GB / 12GB', '512GB / 12GB'],
      buyerAdvice: 'Brings IP68 water resistance and 120W charging to the mid-range used market.'
    }
  },
  {
    id: 'redmi-note-13-pro',
    os: 'android',
    brand: 'Xiaomi',
    brandKey: 'xiaomi',
    series: 'Redmi Note Series',
    name: 'Redmi Note 13 Pro 5G',
    releaseYear: 2024,
    tier: 'mid-range',
    tierLabel: 'Popular Mid-Range',
    keyHighlights: ['200MP OIS Camera', 'Snapdragon 7s Gen 2', '1.5K Flat AMOLED 120Hz', '5100 mAh Battery with 67W'],
    specs: {
      display: '6.67" 1.5K Flat AMOLED, 120Hz, 1800 nits peak, Gorilla Glass Victus',
      chipset: 'Qualcomm Snapdragon 7s Gen 2 (4nm)',
      rearCameras: '200MP Main (OIS) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP',
      batteryAndCharging: '5,100 mAh (67W wired)',
      osAtLaunch: 'Android 13, MIUI 14 (HyperOS eligible)',
      buildAndDesign: 'Flat double-sided glass, IP54 splash resistance, 3.5mm jack',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.2, IR blaster, 3.5mm headphone jack'
    },
    usedMarketGuide: {
      recommendedInspection: ['3.5mm headphone jack pin integrity', '200MP sensor autofocus motor', 'Battery standby drain'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB', '256GB / 12GB'],
      buyerAdvice: 'Flat screen makes applying tempered glass effortless. Retains the 3.5mm headphone jack.'
    }
  },
  {
    id: 'redmi-note-12-pro',
    os: 'android',
    brand: 'Xiaomi',
    brandKey: 'xiaomi',
    series: 'Redmi Note Series',
    name: 'Redmi Note 12 Pro 5G',
    releaseYear: 2023,
    tier: 'budget',
    tierLabel: 'Budget-Friendly Value',
    keyHighlights: ['Sony IMX766 50MP OIS Main Camera', 'MediaTek Dimensity 1080', 'FHD+ 120Hz Pro AMOLED', '67W Turbo Charge'],
    specs: {
      display: '6.67" FHD+ Pro AMOLED, 120Hz, 900 nits, Dolby Vision',
      chipset: 'MediaTek Dimensity 1080 (6nm)',
      rearCameras: '50MP Sony IMX766 (OIS) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP',
      batteryAndCharging: '5,000 mAh (67W wired)',
      osAtLaunch: 'Android 12, MIUI 13 (Upgradable to Android 14)',
      buildAndDesign: 'Glass back, plastic frame, IP53, 3.5mm jack',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, IR blaster, 3.5mm jack'
    },
    usedMarketGuide: {
      recommendedInspection: ['Sony IMX766 sensor glass for scratches', 'Pro AMOLED color balance', '67W charging port temperature'],
      typicalUsedStorageVariants: ['128GB / 6GB', '128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'Strong budget contender with a proven flagship Sony camera sensor (IMX766).'
    }
  },

  // ==================== VIVO ====================
  {
    id: 'vivo-x100-pro',
    os: 'android',
    brand: 'vivo',
    brandKey: 'vivo',
    series: 'X Series',
    name: 'vivo X100 Pro',
    releaseYear: 2024,
    tier: 'flagship',
    tierLabel: 'Camera King Flagship',
    keyHighlights: ['ZEISS APO 50MP Floating Telephoto', '1-inch Sony IMX989 Main Sensor', 'MediaTek Dimensity 9300', 'vivo V3 Pro Imaging Chip'],
    specs: {
      display: '6.78" 1.5K (2800x1260) LTPO AMOLED 1-120Hz, 3000 nits peak, 2160Hz PWM dimming',
      chipset: 'MediaTek Dimensity 9300 (4nm, All-Big-Core architecture)',
      rearCameras: '50MP 1-inch Sony IMX989 (OIS) + 50MP ZEISS APO Telephoto (OIS, 4.3x optical) + 50MP Ultra-wide',
      frontCamera: '32MP',
      batteryAndCharging: '5,400 mAh (100W FlashCharge wired, 50W wireless)',
      osAtLaunch: 'Android 14, Funtouch OS 14',
      buildAndDesign: 'Sun Halo stainless steel camera ring, Gorilla Glass front & back, IP68',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['ZEISS T* anti-reflective lens coating integrity', 'APO telephoto prism zoom focus', '100W FlashCharge test'],
      typicalUsedStorageVariants: ['512GB / 16GB'],
      buyerAdvice: 'Widely recognized as one of the best smartphone zoom & portrait cameras ever engineered.'
    }
  },
  {
    id: 'vivo-x90-pro',
    os: 'android',
    brand: 'vivo',
    brandKey: 'vivo',
    series: 'X Series',
    name: 'vivo X90 Pro',
    releaseYear: 2023,
    tier: 'flagship',
    tierLabel: 'Portrait & Optical Flagship',
    keyHighlights: ['1-inch Sony IMX989 Camera', 'ZEISS T* Coating', 'MediaTek Dimensity 9200', '120W FlashCharge'],
    specs: {
      display: '6.78" 1.5K AMOLED, 120Hz, 1300 nits peak',
      chipset: 'MediaTek Dimensity 9200 (4nm)',
      rearCameras: '50.3MP 1-inch (OIS) + 50MP 2x Portrait (OIS) + 12MP Ultra-wide',
      frontCamera: '32MP',
      batteryAndCharging: '4,870 mAh (120W FlashCharge wired, 50W wireless)',
      osAtLaunch: 'Android 13, Funtouch OS 13',
      buildAndDesign: 'Vegan leather back panel, aluminum frame, IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, IR blaster, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Vegan leather back condition and corner wear', 'Dual-cell fast charge test', 'ZEISS portrait bokeh mode verification'],
      typicalUsedStorageVariants: ['256GB / 12GB'],
      buyerAdvice: 'Tactile vegan leather rear provides superior grip and prevents glass shatter risks.'
    }
  },
  {
    id: 'vivo-v30-pro',
    os: 'android',
    brand: 'vivo',
    brandKey: 'vivo',
    series: 'V Series',
    name: 'vivo V30 Pro',
    releaseYear: 2024,
    tier: 'mid-range',
    tierLabel: 'Portrait Specialist Mid-Range',
    keyHighlights: ['ZEISS Co-Engineered Triple 50MP Cameras', 'Smart Aura Light Portrait Flash', 'Ultra-Slim 7.45mm Profile', '5000 mAh Battery'],
    specs: {
      display: '6.78" 1.5K (2800x1260) 3D Curved AMOLED, 120Hz, 2800 nits peak',
      chipset: 'MediaTek Dimensity 8200 (4nm)',
      rearCameras: '50MP Sony IMX920 Main (OIS) + 50MP 2x Telephoto Portrait + 50MP Ultra-wide with Smart Aura Light',
      frontCamera: '50MP AF Group Selfie',
      batteryAndCharging: '5,000 mAh (80W FlashCharge wired)',
      osAtLaunch: 'Android 14, Funtouch OS 14',
      buildAndDesign: 'Curved glass back, ultra-slim 7.45mm chassis, IP54',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Aura Light dual-color LED temperature tuning', 'Curved glass screen edges', 'Front camera autofocus'],
      typicalUsedStorageVariants: ['256GB / 8GB', '512GB / 12GB'],
      buyerAdvice: 'First V-series with ZEISS lenses. Ideal for social media creators and portrait photography enthusiasts.'
    }
  },
  {
    id: 'vivo-v29',
    os: 'android',
    brand: 'vivo',
    brandKey: 'vivo',
    series: 'V Series',
    name: 'vivo V29 5G',
    releaseYear: 2023,
    tier: 'mid-range',
    tierLabel: 'Sleek Design Mid-Range',
    keyHighlights: ['Smart Aura Light Ring Flash', '1.5K 3D Curved Display', 'Snapdragon 778G Proven Stability', '80W Fast Charge'],
    specs: {
      display: '6.78" 1.5K 3D Curved AMOLED, 120Hz, 1300 nits peak, HDR10+',
      chipset: 'Qualcomm Snapdragon 778G (6nm)',
      rearCameras: '50MP Main (OIS) + 8MP Ultra-wide + 2MP Monochrome with Aura Light',
      frontCamera: '50MP Dual Soft-LED Flash',
      batteryAndCharging: '4,600 mAh (80W FlashCharge wired)',
      osAtLaunch: 'Android 13, Funtouch OS 13',
      buildAndDesign: '3D Particle glass back, 7.46mm thickness, IP68 water resistance',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.2, NFC'
    },
    usedMarketGuide: {
      recommendedInspection: ['Aura Light ring LED functionality', 'Snapdragon 778G sustained smoothness', 'Curved screen protector fit'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 12GB'],
      buyerAdvice: 'One of the slimmest 3D curved phones in its class with IP68 certification.'
    }
  },
  {
    id: 'vivo-t3',
    os: 'android',
    brand: 'vivo',
    brandKey: 'vivo',
    series: 'T Series',
    name: 'vivo T3 5G',
    releaseYear: 2024,
    tier: 'budget',
    tierLabel: 'Budget Performance',
    keyHighlights: ['MediaTek Dimensity 7200 4nm', 'Sony IMX882 50MP OIS Camera', 'Dual Stereo Speakers', '5000 mAh Battery'],
    specs: {
      display: '6.67" FHD+ AMOLED, 120Hz, 1800 nits peak',
      chipset: 'MediaTek Dimensity 7200 (4nm)',
      rearCameras: '50MP Sony IMX882 (OIS) + 2MP Depth',
      frontCamera: '16MP',
      batteryAndCharging: '5,000 mAh (44W FlashCharge wired)',
      osAtLaunch: 'Android 14, Funtouch OS 14',
      buildAndDesign: 'Textured plastic back, IP54 dust and splash resistance',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3'
    },
    usedMarketGuide: {
      recommendedInspection: ['Dual speaker output at max volume', 'Sony IMX882 OIS stability', '44W charging port handshake'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'High Antutu benchmark score in the budget category due to Dimensity 7200 chip.'
    }
  },
  {
    id: 'vivo-t2-pro',
    os: 'android',
    brand: 'vivo',
    brandKey: 'vivo',
    series: 'T Series',
    name: 'vivo T2 Pro 5G',
    releaseYear: 2023,
    tier: 'budget',
    tierLabel: 'Curved Screen Value',
    keyHighlights: ['Curved AMOLED Display at Budget Price', 'Dimensity 7200 Processor', '64MP OIS Camera with Aura Light', '66W FlashCharge'],
    specs: {
      display: '6.78" FHD+ 3D Curved AMOLED, 120Hz, 1300 nits peak',
      chipset: 'MediaTek Dimensity 7200 (4nm)',
      rearCameras: '64MP Main (OIS) + 2MP Bokeh with Aura Light Ring',
      frontCamera: '16MP',
      batteryAndCharging: '4,600 mAh (66W FlashCharge wired)',
      osAtLaunch: 'Android 13, Funtouch OS 13',
      buildAndDesign: 'Curved matte glass, 7.36mm ultra-thin, IP52',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3'
    },
    usedMarketGuide: {
      recommendedInspection: ['Curved glass bevel integrity', 'Battery life across 120Hz gaming', 'In-display fingerprint sensor'],
      typicalUsedStorageVariants: ['128GB / 8GB', '256GB / 8GB'],
      buyerAdvice: 'Most affordable curved screen phone on the used market. Light in hand with good battery optimization.'
    }
  },

  // ==================== APPLE IPHONE ====================
  {
    id: 'apple-iphone-15-pro-max',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Pro Series',
    name: 'Apple iPhone 15 Pro Max',
    releaseYear: 2023,
    tier: 'flagship',
    tierLabel: 'Ultra Flagship',
    keyHighlights: ['A17 Pro 3nm Chip', 'Grade 5 Titanium Frame', '5x Tetraprism Telephoto Camera', 'USB-C with 10Gbps Transfer'],
    specs: {
      display: '6.7" Super Retina XDR OLED, 1-120Hz ProMotion, 2000 nits peak, Always-On',
      chipset: 'Apple A17 Pro (3nm, 6-core CPU, 6-core GPU with hardware ray tracing)',
      rearCameras: '48MP Main (Sensor-Shift OIS) + 12MP 5x Tetraprism (3D Sensor-Shift OIS) + 12MP Ultra-wide + LiDAR',
      frontCamera: '12MP TrueDepth with Autofocus',
      batteryAndCharging: '4,441 mAh (20W+ wired, 15W MagSafe, USB-C 3.2 10Gbps)',
      osAtLaunch: 'iOS 17 (Apple Intelligence compatible)',
      buildAndDesign: 'Titanium frame, Ceramic Shield front, textured matte glass back, Action Button',
      connectivity: '5G (Sub-6/mmWave), Wi-Fi 6E, Bluetooth 5.3, Thread, UWB 2nd Gen, USB-C'
    },
    usedMarketGuide: {
      recommendedInspection: ['Battery Health percentage in iOS settings', 'Action Button mechanical feedback', 'Type-C port pin continuity (10Gbps)'],
      typicalUsedStorageVariants: ['256GB', '512GB', '1TB'],
      buyerAdvice: 'First iPhone with USB-C and 3nm processor. Compatible with Apple Intelligence features.'
    }
  },
  {
    id: 'apple-iphone-15-pro',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Pro Series',
    name: 'Apple iPhone 15 Pro',
    releaseYear: 2023,
    tier: 'flagship',
    tierLabel: 'Compact Pro Flagship',
    keyHighlights: ['A17 Pro 3nm Silicon', 'Lightweight Titanium Chassis', 'Action Button & USB-C', '48MP Pro Camera System'],
    specs: {
      display: '6.1" Super Retina XDR OLED, 1-120Hz ProMotion, 2000 nits peak, Always-On',
      chipset: 'Apple A17 Pro (3nm)',
      rearCameras: '48MP Main (Sensor-Shift OIS) + 12MP 3x Telephoto (OIS) + 12MP Ultra-wide + LiDAR',
      frontCamera: '12MP TrueDepth with AF',
      batteryAndCharging: '3,274 mAh (20W+ wired, 15W MagSafe, USB-C)',
      osAtLaunch: 'iOS 17 (Apple Intelligence compatible)',
      buildAndDesign: 'Grade 5 Titanium frame, Ceramic Shield, Action Button, IP68',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, Thread, USB-C'
    },
    usedMarketGuide: {
      recommendedInspection: ['Titanium PVD edge coating for scratches', 'TrueTone and FaceID dot projector check', 'LiDAR sensor in Measure app'],
      typicalUsedStorageVariants: ['128GB', '256GB', '512GB', '1TB'],
      buyerAdvice: 'Significantly lighter in hand (187g) than older stainless steel iPhone Pros. Highly sought-after pre-owned model.'
    }
  },
  {
    id: 'apple-iphone-15',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Number Series',
    name: 'Apple iPhone 15',
    releaseYear: 2023,
    tier: 'mid-range',
    tierLabel: 'Modern Mainstream',
    keyHighlights: ['Dynamic Island Interactive Cutout', '48MP 2x In-Sensor Zoom', 'USB-C Universal Port', 'Color-Infused Matte Back Glass'],
    specs: {
      display: '6.1" Super Retina XDR OLED, 60Hz, 2000 nits peak outdoor brightness',
      chipset: 'Apple A16 Bionic (4nm, 6-core CPU, 5-core GPU)',
      rearCameras: '48MP Main (Sensor-Shift OIS, 2x telephoto crop) + 12MP Ultra-wide',
      frontCamera: '12MP TrueDepth with AF',
      batteryAndCharging: '3,349 mAh (20W wired, 15W MagSafe, USB-C 2.0)',
      osAtLaunch: 'iOS 17',
      buildAndDesign: 'Aerospace aluminum frame, color-infused textured back glass, IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, 2nd-gen UWB, USB-C'
    },
    usedMarketGuide: {
      recommendedInspection: ['Dynamic Island touch animation', 'USB-C charging and audio out verification', 'Battery cycle count in Settings > General > About'],
      typicalUsedStorageVariants: ['128GB', '256GB', '512GB'],
      buyerAdvice: 'Brings Dynamic Island and 48MP camera to the mainstream price point with universal USB-C convenience.'
    }
  },
  {
    id: 'apple-iphone-14-pro',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Pro Series',
    name: 'Apple iPhone 14 Pro',
    releaseYear: 2022,
    tier: 'flagship',
    tierLabel: 'Pro Flagship',
    keyHighlights: ['Dynamic Island Debut', 'A16 Bionic Chip', '48MP Main Camera with 2x Telephoto', '120Hz ProMotion Display'],
    specs: {
      display: '6.1" Super Retina XDR OLED, 1-120Hz ProMotion, Always-On, 2000 nits peak',
      chipset: 'Apple A16 Bionic (4nm)',
      rearCameras: '48MP Main (Sensor-Shift OIS) + 12MP 3x Telephoto + 12MP Ultra-wide + LiDAR',
      frontCamera: '12MP TrueDepth with AF',
      batteryAndCharging: '3,200 mAh (20W wired, 15W MagSafe, Lightning port)',
      osAtLaunch: 'iOS 16',
      buildAndDesign: 'Surgical-grade stainless steel frame, Ceramic Shield, IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, UWB, Lightning'
    },
    usedMarketGuide: {
      recommendedInspection: ['Stainless steel perimeter for polishing marks', 'OLED Always-On display uniformity', 'Battery health percentage (>85% recommended)'],
      typicalUsedStorageVariants: ['128GB', '256GB', '512GB', '1TB'],
      buyerAdvice: 'Gold standard pre-owned choice. Stainless steel heft and Dynamic Island at substantial savings over new retail.'
    }
  },
  {
    id: 'apple-iphone-14',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Number Series',
    name: 'Apple iPhone 14',
    releaseYear: 2022,
    tier: 'mid-range',
    tierLabel: 'Reliable Daily',
    keyHighlights: ['A15 Bionic 5-Core GPU', 'Action Mode Video Stabilization', 'Photonic Engine Low-Light Tech', 'Crash Detection'],
    specs: {
      display: '6.1" Super Retina XDR OLED, 60Hz, 1200 nits peak HDR',
      chipset: 'Apple A15 Bionic (5nm, 5-core GPU)',
      rearCameras: '12MP Main (Sensor-Shift OIS) + 12MP Ultra-wide',
      frontCamera: '12MP TrueDepth with AF',
      batteryAndCharging: '3,279 mAh (20W wired, 15W MagSafe, Lightning)',
      osAtLaunch: 'iOS 16',
      buildAndDesign: 'Aerospace aluminum, Ceramic Shield front, glass back, IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, Lightning'
    },
    usedMarketGuide: {
      recommendedInspection: ['Original display TrueTone verification', 'Microphone recording clarity on memo app', 'Battery cycle health'],
      typicalUsedStorageVariants: ['128GB', '256GB', '512GB'],
      buyerAdvice: 'Solid daily iPhone with excellent repairability and wide parts availability across Bengaluru.'
    }
  },
  {
    id: 'apple-iphone-13-pro',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Pro Series',
    name: 'Apple iPhone 13 Pro',
    releaseYear: 2021,
    tier: 'flagship',
    tierLabel: 'Pro Value',
    keyHighlights: ['First 120Hz ProMotion iPhone', 'A15 Bionic Chip', 'Macro Photography Mode', 'All-Day Battery Life'],
    specs: {
      display: '6.1" Super Retina XDR OLED, 10-120Hz ProMotion, 1000 nits typical, 1200 nits peak',
      chipset: 'Apple A15 Bionic (5nm, 6-core CPU, 5-core GPU)',
      rearCameras: '12MP Main (Sensor-Shift OIS) + 12MP 3x Telephoto + 12MP Ultra-wide with Macro + LiDAR',
      frontCamera: '12MP TrueDepth',
      batteryAndCharging: '3,095 mAh (20W wired, 15W MagSafe, Lightning)',
      osAtLaunch: 'iOS 15',
      buildAndDesign: 'Stainless steel frame, Ceramic Shield front, textured matte glass back, IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.0, UWB, Lightning'
    },
    usedMarketGuide: {
      recommendedInspection: ['120Hz ProMotion smoothness vs 60Hz lock bug', 'Camera macro autofocus switch', 'Lightning port pin corrosion'],
      typicalUsedStorageVariants: ['128GB', '256GB', '512GB', '1TB'],
      buyerAdvice: 'Widely considered the sweetest spot in used iPhone purchases: 120Hz ProMotion screen at accessible cost.'
    }
  },
  {
    id: 'apple-iphone-13',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Number Series',
    name: 'Apple iPhone 13',
    releaseYear: 2021,
    tier: 'budget',
    tierLabel: 'Best-Selling Pre-Owned',
    keyHighlights: ['Diagonal Dual Camera Setup', 'A15 Bionic Silicon', 'Cinematic Mode Video', 'Outstanding Battery Step-Up'],
    specs: {
      display: '6.1" Super Retina XDR OLED, 60Hz, 800 nits typical, 1200 nits peak',
      chipset: 'Apple A15 Bionic (5nm, 4-core GPU)',
      rearCameras: '12MP Main (Sensor-Shift OIS) + 12MP Ultra-wide',
      frontCamera: '12MP TrueDepth',
      batteryAndCharging: '3,227 mAh (20W wired, 15W MagSafe, Lightning)',
      osAtLaunch: 'iOS 15',
      buildAndDesign: 'Aerospace aluminum frame, Ceramic Shield front, glass back, IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.0, UWB, Lightning'
    },
    usedMarketGuide: {
      recommendedInspection: ['Display brightness and color calibration', 'Loudspeaker membrane cleanliness', 'Battery maximum capacity in Settings'],
      typicalUsedStorageVariants: ['128GB', '256GB'],
      buyerAdvice: 'The #1 pre-owned phone sold in India. Modern design, long battery runtime, and guaranteed iOS updates for years.'
    }
  },
  {
    id: 'apple-iphone-12',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Number Series',
    name: 'Apple iPhone 12',
    releaseYear: 2020,
    tier: 'budget',
    tierLabel: 'Budget 5G Entry',
    keyHighlights: ['First 5G iPhone', 'Flat-Edge Design Language', 'OLED Super Retina Display Across Board', 'MagSafe Ecosystem Debut'],
    specs: {
      display: '6.1" Super Retina XDR OLED, 60Hz, 625 nits typical, 1200 nits peak',
      chipset: 'Apple A14 Bionic (5nm)',
      rearCameras: '12MP Main (OIS) + 12MP Ultra-wide',
      frontCamera: '12MP TrueDepth',
      batteryAndCharging: '2,815 mAh (20W wired, 15W MagSafe, Lightning)',
      osAtLaunch: 'iOS 14',
      buildAndDesign: 'Aerospace aluminum, Ceramic Shield front, glass back, IP68',
      connectivity: '5G (Sub-6), Wi-Fi 6, Bluetooth 5.0, UWB, Lightning'
    },
    usedMarketGuide: {
      recommendedInspection: ['Battery health degradation (units often under 80% needing cell renewal)', 'Earpiece speaker mesh volume check', 'OLED true blacks'],
      typicalUsedStorageVariants: ['64GB', '128GB', '256GB'],
      buyerAdvice: 'Affordable entry into 5G iOS. If battery health is below 80%, pair with ReTech Hub’s walk-in battery replacement service.'
    }
  },
  {
    id: 'apple-iphone-11',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Older Generations',
    name: 'Apple iPhone 11',
    releaseYear: 2019,
    tier: 'budget',
    tierLabel: 'Ultra-Budget Entry',
    keyHighlights: ['A13 Bionic Processor', 'Dual 12MP Cameras with Night Mode', '6.1" Liquid Retina Display', 'Curved Aluminum Ergonomics'],
    specs: {
      display: '6.1" Liquid Retina IPS LCD (1792x828), 625 nits',
      chipset: 'Apple A13 Bionic (7nm+)',
      rearCameras: '12MP Main (OIS) + 12MP Ultra-wide',
      frontCamera: '12MP TrueDepth',
      batteryAndCharging: '3,110 mAh (18W wired, Qi wireless)',
      osAtLaunch: 'iOS 13',
      buildAndDesign: 'Curved aluminum frame, glass front & back, IP68',
      connectivity: '4G LTE-Advanced, Wi-Fi 6, Bluetooth 5.0, UWB, Lightning'
    },
    usedMarketGuide: {
      recommendedInspection: ['LCD backlight uniformity and border vignetting', 'FaceID infrared dot projector status', 'Lightning charging pins'],
      typicalUsedStorageVariants: ['64GB', '128GB'],
      buyerAdvice: 'Economical starter iPhone for basic social media and calling. Note: 4G only, does not support 5G.'
    }
  },
  {
    id: 'apple-iphone-se-3rd-gen',
    os: 'ios',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'Compact / SE',
    name: 'Apple iPhone SE (3rd Gen)',
    releaseYear: 2022,
    tier: 'budget',
    tierLabel: 'Compact Classic Touch ID',
    keyHighlights: ['A15 Bionic 5G in Classic Body', 'Physical Touch ID Home Button', 'Pocket-Friendly 4.7" Size', '144g Featherweight'],
    specs: {
      display: '4.7" Retina HD IPS LCD (1334x750), 625 nits, TrueTone',
      chipset: 'Apple A15 Bionic (5nm, same as iPhone 13)',
      rearCameras: '12MP Wide (OIS, Smart HDR 4, Deep Fusion)',
      frontCamera: '7MP FaceTime HD',
      batteryAndCharging: '2,018 mAh (20W wired, Qi wireless, Lightning)',
      osAtLaunch: 'iOS 15',
      buildAndDesign: 'Aerospace aluminum, glass front & back, Touch ID button, IP67',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.0, Lightning'
    },
    usedMarketGuide: {
      recommendedInspection: ['Touch ID capacitive sensor tactile response', 'Haptic Engine feedback', 'Battery endurance testing'],
      typicalUsedStorageVariants: ['64GB', '128GB', '256GB'],
      buyerAdvice: 'Ideal for users who prefer physical Home Button ergonomics with lightning-fast A15 Bionic speed.'
    }
  }
];
