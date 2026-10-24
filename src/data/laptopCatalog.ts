export interface LaptopModel {
  id: string;
  brand: 'Dell' | 'Apple' | 'Lenovo' | 'HP' | 'ASUS';
  brandKey: 'dell' | 'apple' | 'lenovo' | 'hp' | 'asus';
  series: string; // e.g. 'Latitude', 'XPS', 'Inspiron', 'MacBook Air', 'MacBook Pro', 'ThinkPad', 'IdeaPad', 'Yoga', 'EliteBook', 'Pavilion', 'Envy', 'VivoBook', 'Zenbook'
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
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
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
    id: 'dell-latitude-5420',
    brand: 'Dell',
    brandKey: 'dell',
    series: 'Latitude',
    name: 'Dell Latitude 5420 (Intel Core i5 11th Gen 14 Inch Business Workhorse)',
    releaseYear: 2021,
    indicativePriceInr: 33500,
    originalEstimatedMrpInr: 78000,
    discountPercent: 57,
    conditionGrade: 'Pristine',
    purposeTags: ['Office - For Work & Business', 'Programming - For Developers', 'Students - For Everyday Use'],
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1145G7 vPro (4 Cores, 8 Threads, up to 4.40 GHz)',
      ram: '16 GB DDR4 3200 MHz Dual Channel',
      storage: '512 GB PCIe NVMe M.2 SSD',
      display: '14.0" FHD (1920 x 1080) Anti-Glare IPS, 250 nits',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 93,
      ports: '2x Thunderbolt 4 / USB-C, 2x USB 3.2 Gen 1, 1x HDMI 2.0, RJ-45 Ethernet, uSD card reader',
      weight: '1.40 kg'
    },
    inspectionHighlights: [
      'Enterprise vPro remote management clean',
      'Thunderbolt 4 dual 4K display output verified',
      'Quiet dual-cooling fan thermal curve validated',
      'Spill-resistant keyboard and glass-feel trackpad flawless'
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
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
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
  {
    id: 'dell-xps-15-9500',
    brand: 'Dell',
    brandKey: 'dell',
    series: 'XPS',
    name: 'Dell XPS 15 9500 (Intel Core i7 10th Gen 15.6" 4K UHD+ Touch, GTX 1650 Ti)',
    releaseYear: 2020,
    indicativePriceInr: 68000,
    originalEstimatedMrpInr: 175000,
    discountPercent: 61,
    conditionGrade: 'Pristine',
    purposeTags: ['Creators - Design & Video', 'Programming - For Developers', 'Office - For Work & Business'],
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7-10750H (6 Cores, 12 Threads, up to 5.0 GHz, 45W TDP)',
      ram: '32 GB DDR4 2933 MHz (Dual Channel)',
      storage: '1 TB PCIe NVMe M.2 SSD',
      display: '15.6" 4K UHD+ (3840 x 2400) InfinityEdge Touch, 500 nits, 100% Adobe RGB',
      graphics: 'NVIDIA GeForce GTX 1650 Ti 4GB GDDR6 + Intel UHD Graphics',
      batteryHealthPercent: 87,
      ports: '2x Thunderbolt 3, 1x USB-C 3.1 with PD, Full-size SD Card reader v6.0',
      weight: '2.05 kg Precision Milled Aluminum'
    },
    inspectionHighlights: [
      'True 4K UHD+ touchscreen with 100% Adobe RGB verified for color grading',
      'Dedicated NVIDIA GTX 1650 Ti thermal stress tested with FurMark (Max 78°C)',
      'Quad speaker studio sound system tested',
      'Original 130W USB-C Type-C power adapter included'
    ]
  },
  {
    id: 'dell-inspiron-15-3511',
    brand: 'Dell',
    brandKey: 'dell',
    series: 'Inspiron',
    name: 'Dell Inspiron 15 3511 (Intel Core i5 11th Gen 15.6 Inch Full HD)',
    releaseYear: 2021,
    indicativePriceInr: 28999,
    originalEstimatedMrpInr: 54999,
    discountPercent: 47,
    conditionGrade: 'Excellent',
    purposeTags: ['Students - For Everyday Use', 'Office - For Work & Business'],
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1135G7 (4 Cores, 8 Threads, up to 4.20 GHz)',
      ram: '16 GB DDR4 2666 MHz',
      storage: '512 GB M.2 NVMe SSD',
      display: '15.6" FHD (1920 x 1080) Anti-glare LED Backlight Non-touch Narrow Border',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 91,
      ports: '2x USB 3.2 Gen 1, 1x USB 2.0, 1x HDMI 1.4, SD Card reader, Headphone Jack',
      weight: '1.73 kg'
    },
    inspectionHighlights: [
      'Ergonomic lift-hinge design smooth and sturdy',
      'Full numeric keypad actuation tested',
      'Fast NVMe read speeds > 2200 MB/s confirmed',
      'Clean thermal fan assembly with fresh paste'
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
    imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
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
    id: 'apple-macbook-pro-13-m1',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'MacBook Pro',
    name: 'Apple MacBook Pro 13.3" (Apple M1 Chip, Touch Bar, Active Cooling)',
    releaseYear: 2020,
    indicativePriceInr: 58900,
    originalEstimatedMrpInr: 122900,
    discountPercent: 52,
    conditionGrade: 'Excellent',
    purposeTags: ['Programming - For Developers', 'Creators - Design & Video', 'Office - For Work & Business'],
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Apple M1 Chip (8-Core CPU, 8-Core GPU, active cooling fan)',
      ram: '16 GB Unified Memory',
      storage: '512 GB PCIe SSD',
      display: '13.3" Retina Display (2560 x 1600), 500 nits, P3 Wide Color, True Tone',
      graphics: '8-Core GPU, 16-Core Neural Engine',
      batteryHealthPercent: 90,
      ports: '2x Thunderbolt / USB 4, 3.5mm Headphone Jack',
      weight: '1.40 kg Aluminum Chassis'
    },
    inspectionHighlights: [
      'Active cooling allows sustained peak render without throttling',
      'OLED Touch Bar capacitive responsiveness tested',
      'Studio-quality three-mic array tested for podcasting',
      'Battery cycle count under 180 cycles'
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
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
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
  {
    id: 'apple-macbook-pro-16-m1-pro',
    brand: 'Apple',
    brandKey: 'apple',
    series: 'MacBook Pro',
    name: 'Apple MacBook Pro 16.2" (Apple M1 Pro 10-Core, 120Hz Liquid Retina XDR)',
    releaseYear: 2021,
    indicativePriceInr: 118000,
    originalEstimatedMrpInr: 239900,
    discountPercent: 50,
    conditionGrade: 'Pristine',
    purposeTags: ['Creators - Design & Video', 'Programming - For Developers'],
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Apple M1 Pro (10-Core CPU with 8 performance & 2 efficiency cores, 16-Core GPU)',
      ram: '16 GB Unified Memory',
      storage: '512 GB NVMe SSD',
      display: '16.2" Liquid Retina XDR (3456 x 2234) 120Hz ProMotion Mini-LED, 1600 nits peak',
      graphics: '16-Core GPU, 200GB/s bandwidth',
      batteryHealthPercent: 92,
      ports: '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3, 3.5mm Headphone Jack',
      weight: '2.10 kg Heavy-Duty Workstation'
    },
    inspectionHighlights: [
      'Massive 100-watt-hour battery delivering up to 21 hours video playback',
      'Extreme Dynamic Range with 1,000,000:1 contrast ratio calibrated',
      'Full-height physical function key row flawless',
      'Complete Apple 140W USB-C GaN fast charger included'
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
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
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
  {
    id: 'lenovo-ideapad-slim-5',
    brand: 'Lenovo',
    brandKey: 'lenovo',
    series: 'IdeaPad',
    name: 'Lenovo IdeaPad Slim 5 (AMD Ryzen 7 5700U 8-Core 15.6 Inch Full HD)',
    releaseYear: 2021,
    indicativePriceInr: 36000,
    originalEstimatedMrpInr: 72990,
    discountPercent: 50,
    conditionGrade: 'Excellent',
    purposeTags: ['Students - For Everyday Use', 'Office - For Work & Business', 'Programming - For Developers'],
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 7 5700U (8 Cores, 16 Threads, up to 4.30 GHz)',
      ram: '16 GB DDR4 3200 MHz Dual Channel',
      storage: '512 GB M.2 NVMe SSD',
      display: '15.6" FHD (1920 x 1080) IPS, 300 nits Anti-glare, 45% NTSC',
      graphics: 'AMD Radeon Graphics (8 Cores)',
      batteryHealthPercent: 92,
      ports: '1x USB-C 3.2 Gen 1 (PD & DP), 2x USB 3.2 Gen 1, 1x HDMI 1.4b, 4-in-1 Card Reader',
      weight: '1.66 kg Aluminum Anodized Top'
    },
    inspectionHighlights: [
      '8 physical CPU cores delivering exceptional multithreaded compile speeds',
      'Dolby Audio user-facing stereo speakers clear',
      'Integrated fingerprint reader on power button tested',
      '57Wh battery health 92% capacity'
    ]
  },
  {
    id: 'lenovo-yoga-7i-touch',
    brand: 'Lenovo',
    brandKey: 'lenovo',
    series: 'Yoga',
    name: 'Lenovo Yoga 7i 2-in-1 Convertible (Intel Core i7 11th Gen 14" Touchscreen)',
    releaseYear: 2021,
    indicativePriceInr: 52000,
    originalEstimatedMrpInr: 109990,
    discountPercent: 52,
    conditionGrade: 'Pristine',
    purposeTags: ['Creators - Design & Video', 'Students - For Everyday Use', 'Office - For Work & Business'],
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7-1165G7 (4 Cores, 8 Threads, up to 4.70 GHz)',
      ram: '16 GB DDR4 3200 MHz',
      storage: '512 GB PCIe NVMe M.2 SSD',
      display: '14.0" FHD (1920 x 1080) IPS 300 nits Glossy, 10-point Multi-touch, 72% NTSC',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 90,
      ports: '2x Thunderbolt 4, 1x USB 3.2 Gen 1 (Always On), 3.5mm Headphone Jack',
      weight: '1.43 kg 360° Sandblasted Aluminum'
    },
    inspectionHighlights: [
      '360-degree dual-torque hinge tested across laptop, tent, and tablet modes',
      'Active stylus pen digitizer grid 100% responsive',
      'Front-facing Dolby Atmos speaker bar delivers rich audio',
      'Rapid Charge Express giving 3 hours on 15-minute charge'
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
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
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
  },
  {
    id: 'hp-elitebook-840-g7',
    brand: 'HP',
    brandKey: 'hp',
    series: 'EliteBook',
    name: 'HP EliteBook 840 G7 (Intel Core i7 10th Gen 14 Inch Enterprise)',
    releaseYear: 2020,
    indicativePriceInr: 29500,
    originalEstimatedMrpInr: 79000,
    discountPercent: 62,
    conditionGrade: 'Pristine',
    purposeTags: ['Office - For Work & Business', 'Programming - For Developers', 'Students - For Everyday Use'],
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7-10610U vPro (4 Cores, 8 Threads, up to 4.90 GHz)',
      ram: '16 GB DDR4 2666 MHz (Upgradable to 64 GB)',
      storage: '512 GB PCIe NVMe M.2 SSD',
      display: '14.0" FHD (1920 x 1080) IPS Anti-glare, 250 nits',
      graphics: 'Intel UHD Graphics 620',
      batteryHealthPercent: 89,
      ports: '2x USB-C with Thunderbolt 3, 2x USB 3.1 Gen 1, 1x HDMI 1.4, Audio Combo',
      weight: '1.33 kg'
    },
    inspectionHighlights: [
      'Dual SODIMM upgradeable memory slots tested',
      'HP Sure View privacy screen filter hardware intact',
      'World-facing noise cancellation microphone tested',
      'Clean thermal profile with 0 dust buildup'
    ]
  },
  {
    id: 'hp-pavilion-14-dv',
    brand: 'HP',
    brandKey: 'hp',
    series: 'Pavilion',
    name: 'HP Pavilion 14 (Intel Core i5 11th Gen 14 Inch Micro-Edge FHD)',
    releaseYear: 2021,
    indicativePriceInr: 33000,
    originalEstimatedMrpInr: 66990,
    discountPercent: 50,
    conditionGrade: 'Excellent',
    purposeTags: ['Students - For Everyday Use', 'Office - For Work & Business'],
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1135G7 (4 Cores, 8 Threads, up to 4.20 GHz)',
      ram: '16 GB DDR4 3200 MHz',
      storage: '512 GB PCIe NVMe M.2 SSD',
      display: '14.0" FHD (1920 x 1080) IPS Micro-Edge, 250 nits, 45% NTSC',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 93,
      ports: '1x SuperSpeed USB Type-C (10Gbps, USB Power Delivery, DP 1.4), 2x SuperSpeed USB-A, 1x HDMI 2.0',
      weight: '1.41 kg Natural Silver'
    },
    inspectionHighlights: [
      'B&O Audio dual speakers with HP Audio Boost validated',
      'Fast charging support (50% in 45 minutes)',
      'Precision multi-touch trackpad responsive',
      'Full metallic top cover with clean finish'
    ]
  },
  {
    id: 'hp-envy-13-x360',
    brand: 'HP',
    brandKey: 'hp',
    series: 'Envy',
    name: 'HP Envy x360 13 (AMD Ryzen 5 5600U 13.3" OLED Touch Convertible)',
    releaseYear: 2021,
    indicativePriceInr: 47500,
    originalEstimatedMrpInr: 89999,
    discountPercent: 47,
    conditionGrade: 'Pristine',
    purposeTags: ['Creators - Design & Video', 'Students - For Everyday Use', 'Office - For Work & Business'],
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'AMD Ryzen 5 5600U (6 Cores, 12 Threads, up to 4.20 GHz, Zen 3)',
      ram: '16 GB DDR4 3200 MHz Onboard',
      storage: '512 GB PCIe NVMe M.2 SSD',
      display: '13.3" FHD (1920 x 1080) OLED Corning Gorilla Glass Touch, 400 nits, 100% DCI-P3',
      graphics: 'AMD Radeon Graphics (7 Cores)',
      batteryHealthPercent: 91,
      ports: '1x SuperSpeed USB-C (PD & DP), 2x SuperSpeed USB-A (Drop-jaw design), MicroSD card reader',
      weight: '1.30 kg Nightfall Black Aluminum'
    },
    inspectionHighlights: [
      'Stunning 100% DCI-P3 OLED panel with deep true blacks',
      'Physical camera shutter switch and dedicated mic mute button tested',
      'Smooth 360-degree geared hinge mechanism',
      'High battery endurance (approx 11 hours light productivity)'
    ]
  },

  // ==================== ASUS ====================
  {
    id: 'asus-vivobook-15-oled',
    brand: 'ASUS',
    brandKey: 'asus',
    series: 'VivoBook',
    name: 'ASUS VivoBook 15 OLED (Intel Core i5 11th Gen 15.6" Full HD OLED)',
    releaseYear: 2021,
    indicativePriceInr: 37500,
    originalEstimatedMrpInr: 74990,
    discountPercent: 50,
    conditionGrade: 'Pristine',
    purposeTags: ['Students - For Everyday Use', 'Office - For Work & Business', 'Creators - Design & Video'],
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i5-1135G7 (4 Cores, 8 Threads, up to 4.20 GHz)',
      ram: '16 GB DDR4 3200 MHz',
      storage: '512 GB M.2 NVMe PCIe 3.0 SSD',
      display: '15.6" FHD (1920 x 1080) OLED NanoEdge, 600 nits peak, 100% DCI-P3, PANTONE Validated',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 92,
      ports: '1x USB 3.2 Gen 1 Type-C, 1x USB 3.2 Gen 1 Type-A, 2x USB 2.0, 1x HDMI 1.4, MicroSD',
      weight: '1.80 kg'
    },
    inspectionHighlights: [
      'Vibrant 600-nit OLED display with PANTONE color validation verified',
      'ASUS IceBlades aerodynamic fan thermal benchmark passed',
      'ErgoSense backlit keyboard with 1.4mm key travel tested',
      'Fingerprint sensor on trackpad responsive'
    ]
  },
  {
    id: 'asus-zenbook-14-oled',
    brand: 'ASUS',
    brandKey: 'asus',
    series: 'Zenbook',
    name: 'ASUS Zenbook 14 OLED (Intel Core i7 12th Gen 14" 2.8K 90Hz Ultrabook)',
    releaseYear: 2022,
    indicativePriceInr: 62000,
    originalEstimatedMrpInr: 112990,
    discountPercent: 45,
    conditionGrade: 'Pristine',
    purposeTags: ['Programming - For Developers', 'Creators - Design & Video', 'Office - For Work & Business'],
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    specs: {
      processor: 'Intel Core i7-1260P (12 Cores, 16 Threads, up to 4.70 GHz, Intel Evo Certified)',
      ram: '16 GB LPDDR5 4800 MHz',
      storage: '512 GB PCIe 4.0 NVMe M.2 SSD',
      display: '14.0" 16:10 2.8K (2880 x 1800) OLED 90Hz, 0.2ms response, 550 nits peak, 100% DCI-P3',
      graphics: 'Intel Iris Xe Graphics',
      batteryHealthPercent: 94,
      ports: '2x Thunderbolt 4 with DP & PD, 1x USB 3.2 Gen 2 Type-A, 1x HDMI 2.1 TMDS, MicroSD slot',
      weight: '1.39 kg Ponder Blue All-Metal'
    },
    inspectionHighlights: [
      '2.8K 90Hz OLED with 0.2ms pixel response delivers ultra-smooth visuals',
      'ASUS NumberPad 2.0 integrated LED numeric keypad on glass trackpad verified',
      'Harman Kardon certified Dolby Atmos sound system tested',
      '75Wh high-capacity battery health verified at 94%'
    ]
  }
];
