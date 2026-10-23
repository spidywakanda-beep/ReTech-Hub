export interface LaptopModel {
  id: string;
  brand: 'Dell' | 'Apple' | 'Lenovo' | 'HP';
  brandKey: 'dell' | 'apple' | 'lenovo' | 'hp';
  series: string; // e.g. 'Latitude', 'MacBook Air', 'MacBook Pro', 'ThinkPad', 'EliteBook', 'XPS'
  name: string;
  releaseYear: number;
  indicativePriceInr: number;
  originalEstimatedMrpInr: number;
  discountPercent: number;
  conditionGrade: 'Pristine' | 'Excellent' | 'Good';
  purposeTags: string[];
  imageUrl: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    graphics: string;
    batteryHealthPercent: number;
    ports: string;
    weight: string;
  };
  inspectionHighlights: string[];
}

export const LAPTOP_DISCOVERY_NOTICE =
  "Certified Pre-Owned Laptop Catalog (Bengaluru, India). All pricing, configurations, and condition grades represent indicative reference benchmarks for in-store walk-in stock. Customers are invited to physically inspect keyboard actuation, display color uniformity, battery health cycle logs, and thermal performance at ReTech Hub prior to purchase.";

export const LAPTOP_CATALOG: LaptopModel[] = [
  // ==================== DELL ====================
  {
    id: 'dell-latitude-3410',
    brand: 'Dell',
    brandKey: 'dell',
    series: 'Latitude',
    name: 'Dell Latitude 3000 Series 3410 (Intel Core i5 10th Gen 14 Inch)',
    releaseYear: 2020,
    indicativePriceInr: 26399,
    originalEstimatedMrpInr: 41999,
    discountPercent: 37,
    conditionGrade: 'Excellent',
    purposeTags: ['Students - For Everyday Use', 'Office - For Work & Business', 'Programming - For Developers'],
    imageUrl: 'https://s3ng.cashify.in/cashify/store/product/9ff48ab7d2794fdea33f8f9762e527c9.png',
    specs: {
      processor: 'Intel Core i5-10210U (4 Cores, 8 Threads, up to 4.20 GHz)',
      ram: '8 GB DDR4 (Upgradable to 32 GB)',
      storage: '256 GB PCIe NVMe M.2 SSD',
      display: '14.0" HD (1366 x 768) Anti-Glare, Non-Touch, 220 nits',
      graphics: 'Intel UHD Graphics',
      batteryHealthPercent: 88,
      ports: '1x USB 3.2 Gen 1 Type-C with DisplayPort, 2x USB 3.2 Gen 1, 1x HDMI 1.4, RJ-45 Ethernet',
      weight: '1.61 kg'
    },
    inspectionHighlights: [
      'Dual RAM slots verified for upgradeability',
      'NVMe SSD SMART health 100% clean',
      'Original 65W barrel charger included',
      'Firm hinges with zero flex'
    ]
  },
  {
    id: 'dell-latitude-5310',
    brand: 'Dell',
    brandKey: 'dell',
    series: 'Latitude',
    name: 'Dell Latitude 5000 Series 5310 (Intel Core i5 10th Gen 13.3 Inch)',
    releaseYear: 2020,
    indicativePriceInr: 29999,
    originalEstimatedMrpInr: 42999,
    discountPercent: 30,
    conditionGrade: 'Pristine',
    purposeTags: ['Students - For Everyday Use', 'Office - For Work & Business', 'Programming - For Developers'],
    imageUrl: 'https://s3ng.cashify.in/cashify/store/product/f068507f263a4c4db14669147351c953.png',
    specs: {
      processor: 'Intel Core i5-10310U vPro (4 Cores, 8 Threads, up to 4.40 GHz)',
      ram: '16 GB DDR4 2666 MHz',
      storage: '512 GB M.2 PCIe NVMe Class 35 SSD',
      display: '13.3" FHD (1920 x 1080) Anti-Glare IPS, 300 nits, 72% NTSC',
      graphics: 'Intel UHD Graphics 620',
      batteryHealthPercent: 91,
      ports: '1x USB-C 3.2 Gen 2 with Power Delivery & DisplayPort, 2x USB 3.2 Gen 1, 1x HDMI 1.4',
      weight: '1.24 kg Ultralight'
    },
    inspectionHighlights: [
      'Magnesium-reinforced chassis spotless',
      'Full HD IPS panel with 0 dead pixels',
      'Precision backlit keyboard tactile test passed',
      'USB-C Power Delivery fast charging tested'
    ]
  },
  {
    id: 'dell-xps-13-9310',
    brand: 'Dell',
    brandKey: 'dell',
    series: 'XPS',
    name: 'Dell XPS 13 9310 InfinityEdge (Intel Core i7 11th Gen 13.4 Inch)',
    releaseYear: 2021,
    indicativePriceInr: 54000,
    originalEstimatedMrpInr: 135000,
    discountPercent: 60,
    conditionGrade: 'Pristine',
    purposeTags: ['Programming - For Developers', 'Office - For Work & Business', 'Creators - Design & Video'],
    imageUrl: 'https://s3ng.cashify.in/cashify/store/product/7e68d1901b6a4fb4a97610aede69bcf3.png',
    specs: {
      processor: 'Intel Core i7-1185G7 (4 Cores, 8 Threads, up to 4.80 GHz, 12MB Cache)',
      ram: '16 GB LPDDR4x 4267 MHz Dual Channel',
      storage: '512 GB M.2 NVMe PCIe 3.0 SSD',
      display: '13.4" 16:10 FHD+ (1920 x 1200) InfinityEdge, 500 nits, 100% sRGB',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 89,
      ports: '2x Thunderbolt 4 with Power Delivery & DisplayPort, 1x MicroSD slot, 3.5mm Headphone',
      weight: '1.20 kg CNC Aluminum'
    },
    inspectionHighlights: [
      'CNC machined aluminum lid and carbon fiber palm rest in flawless state',
      'Dual heat pipe cooling system ultrasonic cleaned & fresh MX-6 repasted',
      'Both Thunderbolt 4 ports negotiate full 40Gbps and 45W PD charging',
      'Glass precision trackpad frictionless'
    ]
  },

  // ==================== APPLE ====================
  {
    id: 'apple-macbook-air-m1',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'MacBook Air',
    name: 'Apple MacBook Air 13.3" (Apple M1 Chip, 8-Core CPU / 7-Core GPU)',
    releaseYear: 2020,
    indicativePriceInr: 49500,
    originalEstimatedMrpInr: 99900,
    discountPercent: 50,
    conditionGrade: 'Excellent',
    purposeTags: ['Students - For Everyday Use', 'Office - For Work & Business', 'Programming - For Developers'],
    imageUrl: 'https://s3no.cashify.in/cashify/store/product/10d518fc07224024855b5b1cdb7ffd86.png',
    specs: {
      processor: 'Apple M1 Chip (8-Core CPU with 4 performance and 4 efficiency cores)',
      ram: '8 GB Unified Memory',
      storage: '256 GB High-Speed NVMe SSD',
      display: '13.3" Retina Display (2560 x 1600) with True Tone technology, P3 wide color',
      graphics: '7-Core Integrated GPU, 16-Core Neural Engine',
      batteryHealthPercent: 92,
      ports: '2x Thunderbolt / USB 4 ports, 3.5mm Headphone Jack',
      weight: '1.29 kg Fanless Silent'
    },
    inspectionHighlights: [
      '100% silent fanless thermal operation',
      'Battery health 92% (approx 14+ hours continuous battery life)',
      'Touch ID sensor instantaneous unlock',
      'Original Apple 30W USB-C power adapter and cable'
    ]
  },
  {
    id: 'apple-macbook-air-m2',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'MacBook Air',
    name: 'Apple MacBook Air 13.6" (Apple M2 Chip, MagSafe 3)',
    releaseYear: 2022,
    indicativePriceInr: 68500,
    originalEstimatedMrpInr: 114900,
    discountPercent: 40,
    conditionGrade: 'Pristine',
    purposeTags: ['Students - For Everyday Use', 'Programming - For Developers', 'Office - For Work & Business'],
    imageUrl: 'https://s3ng.cashify.in/cashify/store/product/6686a73f35cb496badcd27d8e8ab4ab8.webp',
    specs: {
      processor: 'Apple M2 Chip (8-Core CPU, 8-Core GPU, 100GB/s memory bandwidth)',
      ram: '8 GB Unified Memory',
      storage: '256 GB High-Speed SSD',
      display: '13.6" Liquid Retina (2560 x 1664), 500 nits, P3 Color, 1 Billion Colors',
      graphics: '8-Core GPU with ProRes hardware acceleration',
      batteryHealthPercent: 95,
      ports: 'MagSafe 3 charging port, 2x Thunderbolt / USB 4 ports, 3.5mm Headphone Jack',
      weight: '1.24 kg Ultra-thin 11.3mm'
    },
    inspectionHighlights: [
      'Redesigned flat aluminum body with zero dents or corner marks',
      'MagSafe 3 magnetic quick-release tested',
      '1080p FaceTime HD camera clear with zero artifacts',
      'Four-speaker sound system with Spatial Audio tested'
    ]
  },
  {
    id: 'apple-macbook-pro-14-m1-pro',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'MacBook Pro',
    name: 'Apple MacBook Pro 14.2" (Apple M1 Pro, 120Hz Mini-LED)',
    releaseYear: 2021,
    indicativePriceInr: 96000,
    originalEstimatedMrpInr: 194900,
    discountPercent: 51,
    conditionGrade: 'Excellent',
    purposeTags: ['Programming - For Developers', 'Creators - Design & Video', 'Office - For Work & Business'],
    imageUrl: 'https://s3ng.cashify.in/cashify/store/product/514921addab94c1fb115019189ec0134.webp',
    specs: {
      processor: 'Apple M1 Pro (8-Core CPU, 14-Core GPU, 200GB/s bandwidth)',
      ram: '16 GB Unified Memory',
      storage: '512 GB Superfast NVMe SSD (up to 7.4GB/s read)',
      display: '14.2" Liquid Retina XDR (3024 x 1964) 120Hz ProMotion Mini-LED, 1600 nits peak',
      graphics: '14-Core GPU, dedicated ProRes encode/decode engine',
      batteryHealthPercent: 89,
      ports: '3x Thunderbolt 4, HDMI 2.0, SDXC Card slot, MagSafe 3, 3.5mm Headphone',
      weight: '1.60 kg'
    },
    inspectionHighlights: [
      'Mini-LED local dimming zones 100% functional with zero dead pixels',
      'Dual fans silent at idle, peak sustained thermals at 74°C under Cinebench',
      'SDXC UHS-II card reader and full HDMI output verified',
      'Six-speaker sound system with force-cancelling woofers tested'
    ]
  },

  // ==================== LENOVO ====================
  {
    id: 'lenovo-thinkpad-t14-gen2',
    brand: 'Lenovo',
    brandKey: 'lenovo',
    series: 'ThinkPad',
    name: 'Lenovo ThinkPad T14 Gen 2 (Intel Core i5 11th Gen 14 Inch)',
    releaseYear: 2021,
    indicativePriceInr: 34500,
    originalEstimatedMrpInr: 89999,
    discountPercent: 61,
    conditionGrade: 'Pristine',
    purposeTags: ['Programming - For Developers', 'Office - For Work & Business', 'Students - For Everyday Use'],
    imageUrl: 'https://s3ng.cashify.in/cashify/store/product/094811b0e8ea487bbfd18ef497c59a5b.webp',
    specs: {
      processor: 'Intel Core i5-1135G7 (4 Cores, 8 Threads, up to 4.20 GHz, 8MB Cache)',
      ram: '16 GB DDR4 3200 MHz (Upgradable to 48 GB)',
      storage: '512 GB PCIe NVMe M.2 2280 SSD',
      display: '14.0" FHD (1920 x 1080) IPS Anti-glare, 300 nits',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 90,
      ports: '2x Thunderbolt 4 / USB4, 2x USB 3.2 Gen 1, 1x HDMI 2.0, RJ-45 Ethernet, MicroSD',
      weight: '1.53 kg MIL-STD-810H'
    },
    inspectionHighlights: [
      'Legendary spill-resistant ThinkPad ergonomic keyboard with TrackPoint',
      'MIL-STD-810H military spec drop and vibration passed',
      'RJ-45 native Gigabit Ethernet port tested',
      'ThinkShutter physical webcam privacy slider intact'
    ]
  },
  {
    id: 'lenovo-thinkpad-x1-carbon-gen9',
    brand: 'Lenovo',
    brandKey: 'lenovo',
    series: 'ThinkPad',
    name: 'Lenovo ThinkPad X1 Carbon Gen 9 (Intel Core i7 11th Gen, 1.13kg)',
    releaseYear: 2021,
    indicativePriceInr: 58000,
    originalEstimatedMrpInr: 154000,
    discountPercent: 62,
    conditionGrade: 'Pristine',
    purposeTags: ['Programming - For Developers', 'Office - For Work & Business', 'Creators - Design & Video'],
    imageUrl: 'https://s3ng.cashify.in/cashify/store/product/cc37a3dd9dc7423a9bed312ccdfa9d55.webp',
    specs: {
      processor: 'Intel Core i7-1165G7 (4 Cores, 8 Threads, up to 4.70 GHz)',
      ram: '16 GB LPDDR4x 4266 MHz',
      storage: '512 GB PCIe Gen4 Performance SSD',
      display: '14.0" 16:10 WUXGA (1920 x 1200) IPS Low Power, 400 nits, Anti-glare, 100% sRGB',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 88,
      ports: '2x Thunderbolt 4, 2x USB 3.2 Gen 1, 1x HDMI 2.0, Nano-SIM slot, Headphone jack',
      weight: '1.13 kg Carbon-Fiber'
    },
    inspectionHighlights: [
      'Aerospace-grade carbon fiber lid with soft-touch matte finish',
      '16:10 taller aspect ratio display ideal for code and spreadsheet viewing',
      'Quad-array 360-degree far-field microphones tested',
      'Dual-fan cooling system repasted with fresh thermal compound'
    ]
  },

  // ==================== HP ====================
  {
    id: 'hp-elitebook-840-g8',
    brand: 'HP',
    brandKey: 'hp',
    series: 'EliteBook',
    name: 'HP EliteBook 840 G8 (Intel Core i5 11th Gen 14 Inch All-Aluminum)',
    releaseYear: 2021,
    indicativePriceInr: 32500,
    originalEstimatedMrpInr: 82000,
    discountPercent: 60,
    conditionGrade: 'Excellent',
    purposeTags: ['Office - For Work & Business', 'Students - For Everyday Use', 'Programming - For Developers'],
    imageUrl: 'https://s3ng.cashify.in/cashify/store/product/973503a67d044174b86550ca1a6d5b12.webp',
    specs: {
      processor: 'Intel Core i5-1135G7 (4 Cores, 8 Threads, up to 4.20 GHz)',
      ram: '16 GB DDR4 3200 MHz (2x 8GB Dual Channel)',
      storage: '512 GB PCIe NVMe SSD',
      display: '14.0" FHD (1920 x 1080) IPS Anti-glare, 400 nits, 72% NTSC',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 91,
      ports: '2x Thunderbolt 4 with USB4 Type-C, 2x USB 3.2 Gen 1, 1x HDMI 2.0b, Audio jack',
      weight: '1.35 kg'
    },
    inspectionHighlights: [
      'Full CNC aluminum chassis in clean condition',
      'Bang & Olufsen tuned stereo audio system clear',
      'Backlit spill-resistant quiet keyboard tested',
      'Original HP 65W Smart USB-C power adapter included'
    ]
  }
];
