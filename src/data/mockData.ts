import { DeviceItem, RepairServiceItem, AccessoryItem, DiagnosticOption, TradeInOption } from '../types';

export const DISCLAIMER_TEXT = 
  "Indicative reference catalog for ReTech Hub (Bengaluru, India). All models, specs, and price benchmarks represent typical in-store stock availability and condition grades. In-person physical testing is conducted before every handover.";

export const SMARTPHONES_AND_LAPTOPS: DeviceItem[] = [
  {
    id: 'phone-iphone-14-pro',
    category: 'smartphones',
    name: 'Apple iPhone 14 Pro',
    brand: 'Apple',
    modelYear: 2022,
    indicativePriceInr: 68500,
    originalEstimatedMrpInr: 129900,
    conditionGrade: 'pristine',
    conditionDescription: 'Zero micro-scratches on display and chassis. Original OLED matrix and TrueTone intact.',
    storage: '128 GB',
    ram: '6 GB',
    processor: 'A16 Bionic 6-Core',
    display: '6.1" Super Retina XDR OLED 120Hz ProMotion',
    batteryHealthPercent: 93,
    cycleCount: 214,
    imeiStatus: 'Clean & Verified',
    color: 'Space Black',
    physicalLocation: 'Bengaluru Hub Walk-in Stock',
    featured: true,
    inspectionPoints: [
      { component: 'Display & Digitizer', testMethod: 'Multi-touch 120Hz sensor grid', status: 'passed', metric: '100% responsive, 0 dead pixels' },
      { component: 'TrueTone & FaceID', testMethod: 'Infrared dot projector scan', status: 'passed', metric: 'Hardware biometric verified' },
      { component: 'Battery Chemistry', testMethod: 'Apple Diagnostics telemetry', status: 'passed', metric: '93% peak capacity (214 cycles)' },
      { component: 'Camera Array & OIS', testMethod: '48MP sensor optical stabilizer test', status: 'passed', metric: '3 lenses aligned, no dust artifacts' },
      { component: 'Network & Modem', testMethod: '5G dual SIM test (Airtel/Jio Bengaluru band)', status: 'passed', metric: 'Band n78/n28 lock verified' }
    ]
  },
  {
    id: 'laptop-macbook-pro-14-m1',
    category: 'laptops',
    name: 'Apple MacBook Pro 14" (M1 Pro)',
    brand: 'Apple',
    modelYear: 2021,
    indicativePriceInr: 96000,
    originalEstimatedMrpInr: 194900,
    conditionGrade: 'excellent',
    conditionDescription: 'Minor faint scuff near MagSafe port. Keyboard and liquid retina XDR display in showroom condition.',
    storage: '512 GB NVMe SSD',
    ram: '16 GB Unified Memory',
    processor: 'Apple M1 Pro (8-Core CPU, 14-Core GPU)',
    display: '14.2" Liquid Retina XDR (3024x1964) 120Hz Mini-LED',
    batteryHealthPercent: 89,
    cycleCount: 168,
    imeiStatus: 'Clean & Verified',
    color: 'Space Grey',
    physicalLocation: 'Bengaluru Hub Walk-in Stock',
    featured: true,
    inspectionPoints: [
      { component: 'Liquid Retina XDR Panel', testMethod: 'Color uniformity & local dimming check', status: 'passed', metric: '10,000 mini-LED dimming zones clean' },
      { component: 'Battery Degradation', testMethod: 'Battery cycle log & discharge curve', status: 'passed', metric: '89% capacity (~9.5 hrs video runtime)' },
      { component: 'SSD SMART Health', testMethod: 'Apple NVMe SMART self-test', status: 'passed', metric: '98% life remaining, 0 bad blocks' },
      { component: 'Thermals & Fans', testMethod: 'Cinebench loop stress & thermal camera', status: 'passed', metric: 'Dual fans silent at idle, peak 74°C' },
      { component: 'Ports & MagSafe', testMethod: 'Thunderbolt 4 40Gbps loopback test', status: 'passed', metric: '3x TB4 + HDMI 2.0 fully functional' }
    ]
  },
  {
    id: 'phone-galaxy-s23-ultra',
    category: 'smartphones',
    name: 'Samsung Galaxy S23 Ultra 5G',
    brand: 'Samsung',
    modelYear: 2023,
    indicativePriceInr: 64900,
    originalEstimatedMrpInr: 124999,
    conditionGrade: 'pristine',
    conditionDescription: 'Pristine Dynamic AMOLED 2X. S-Pen digitizer fully responsive with zero latency.',
    storage: '256 GB UFS 4.0',
    ram: '12 GB LPDDR5X',
    processor: 'Snapdragon 8 Gen 2 for Galaxy',
    display: '6.8" Edge QHD+ Dynamic AMOLED 2X 120Hz',
    batteryHealthPercent: 95,
    cycleCount: 178,
    imeiStatus: 'Clean & Verified',
    color: 'Phantom Black',
    physicalLocation: 'Bengaluru Hub Walk-in Stock',
    featured: true,
    inspectionPoints: [
      { component: 'Dynamic AMOLED 2X', testMethod: 'RGB subpixel & burn-in inspection', status: 'passed', metric: 'Zero retention, 1750 nit peak' },
      { component: 'S-Pen Digitizer', testMethod: 'Wacom EMR grid alignment test', status: 'passed', metric: '2.8ms latency, pressure levels intact' },
      { component: '200MP ISOCELL Sensor', testMethod: '100x Space Zoom calibration test', status: 'passed', metric: 'Periscope prism & zoom focus sharp' },
      { component: 'Ultrasonic Biometric', testMethod: 'Qualcomm 3D Sonic sensor check', status: 'passed', metric: '<0.3s dry/wet finger unlock' },
      { component: 'Battery Longevity', testMethod: 'AccuBattery battery telemetry test', status: 'passed', metric: '4,750 mAh actual measured retention' }
    ]
  },
  {
    id: 'laptop-thinkpad-t14s-gen3',
    category: 'laptops',
    name: 'Lenovo ThinkPad T14s Gen 3',
    brand: 'Lenovo',
    modelYear: 2022,
    indicativePriceInr: 49500,
    originalEstimatedMrpInr: 118000,
    conditionGrade: 'excellent',
    conditionDescription: 'Corporate lease return. Pristine matte anti-glare display, flawless classic ThinkPad tactile keyboard.',
    storage: '512 GB PCIe 4.0 SSD',
    ram: '16 GB LPDDR5',
    processor: 'AMD Ryzen 7 PRO 6850U (8C/16T)',
    display: '14" WUXGA (1920x1200) IPS Anti-glare 400 nits',
    batteryHealthPercent: 91,
    cycleCount: 142,
    imeiStatus: 'Clean & Verified',
    color: 'Deep Black',
    physicalLocation: 'Bengaluru Hub Walk-in Stock',
    featured: false,
    inspectionPoints: [
      { component: 'Chassis & Mil-Spec', testMethod: 'MIL-STD-810H flex & hinge test', status: 'passed', metric: 'Hinges firm, magnesium subframe rigid' },
      { component: 'Keyboard & TrackPoint', testMethod: 'Full key switch actuation matrix', status: 'passed', metric: '100% key travel, TrackPoint calibrated' },
      { component: 'Thermals & AMD APU', testMethod: 'AIDA64 30-min CPU stress test', status: 'passed', metric: 'Max sustained 68°C, zero throttling' },
      { component: 'Security & TPM', testMethod: 'dTPM 2.0 & Windows Hello check', status: 'passed', metric: 'Hardware TPM clear, IR camera working' },
      { component: 'Battery Pack', testMethod: 'Lenovo Vantage diagnostic cycle', status: 'passed', metric: '52.1 Wh remaining of 57 Wh design' }
    ]
  },
  {
    id: 'phone-pixel-7-pro',
    category: 'smartphones',
    name: 'Google Pixel 7 Pro',
    brand: 'Google',
    modelYear: 2022,
    indicativePriceInr: 36500,
    originalEstimatedMrpInr: 84999,
    conditionGrade: 'good',
    conditionDescription: 'Light hairline marks on polished camera visor. Display is pristine with oleophobic coating renewed.',
    storage: '128 GB UFS 3.1',
    ram: '12 GB LPDDR5',
    processor: 'Google Tensor G2 (5nm)',
    display: '6.7" LTPO AMOLED QHD+ 120Hz',
    batteryHealthPercent: 88,
    cycleCount: 280,
    imeiStatus: 'Clean & Verified',
    color: 'Obsidian',
    physicalLocation: 'Bengaluru Hub Walk-in Stock',
    featured: false,
    inspectionPoints: [
      { component: 'LTPO OLED Display', testMethod: 'Dynamic refresh rate 10Hz-120Hz check', status: 'passed', metric: 'Variable refresh rate verified' },
      { component: 'Tensor TPU Processing', testMethod: 'On-device Speech & Photo Unblur test', status: 'passed', metric: 'TPU accelerator bench passed' },
      { component: 'Battery Health', testMethod: 'Android 14 battery cycle diagnostic', status: 'passed', metric: '4,410 mAh available capacity' },
      { component: 'Stereo Speakers & Mics', testMethod: '3-mic directional noise filter test', status: 'passed', metric: 'Clean audio capture, 0 distortion' },
      { component: 'Antenna & Wi-Fi 6E', testMethod: 'Tri-band 2.4/5/6 GHz throughput test', status: 'passed', metric: 'Sustained 620 Mbps link' }
    ]
  },
  {
    id: 'laptop-dell-xps-13-9310',
    category: 'laptops',
    name: 'Dell XPS 13 9310',
    brand: 'Dell',
    modelYear: 2021,
    indicativePriceInr: 54000,
    originalEstimatedMrpInr: 135000,
    conditionGrade: 'excellent',
    conditionDescription: 'CNC machined aluminum chassis with carbon fiber palm rest. Glass precision trackpad spotless.',
    storage: '512 GB M.2 NVMe SSD',
    ram: '16 GB LPDDR4x',
    processor: 'Intel Core i7-1185G7 (4C/8T, up to 4.8 GHz)',
    display: '13.4" FHD+ (1920x1200) InfinityEdge 500 nits',
    batteryHealthPercent: 87,
    cycleCount: 195,
    imeiStatus: 'Clean & Verified',
    color: 'Platinum Silver / Carbon Black',
    physicalLocation: 'Bengaluru Hub Walk-in Stock',
    featured: false,
    inspectionPoints: [
      { component: 'InfinityEdge Display', testMethod: '100% sRGB color calibrator check', status: 'passed', metric: '512 nits peak, 0 back-light bleed' },
      { component: 'Carbon Fiber Palm Rest', testMethod: 'Touch surface & palm rejection test', status: 'passed', metric: 'Clean texture, no peeling/stickiness' },
      { component: 'Dual Heat Pipe Cooler', testMethod: 'Thermal conductivity test after repaste', status: 'passed', metric: 'Fresh thermal paste, silent at idle' },
      { component: 'Thunderbolt 4 Ports', testMethod: 'Dual 4K 60Hz display out verification', status: 'passed', metric: 'Both TB4 ports negotiate full PD 45W' },
      { component: 'Battery Retention', testMethod: 'Dell Power Manager diagnostic suite', status: 'passed', metric: '45.3 Wh of 52 Wh original design' }
    ]
  }
];

export const REPAIR_SERVICES: RepairServiceItem[] = [
  {
    id: 'repair-screen-replacement',
    category: 'mobile',
    serviceName: 'Display Glass & OLED Replacement',
    commonSymptoms: [
      'Cracked outer front glass with working touch',
      'Flickering green/purple vertical lines on OLED',
      'Black screen with incoming call vibration sounds',
      'Unresponsive ghost-touch dead zones'
    ],
    indicativeCostRange: '₹1,800 – ₹14,500 (Model dependent)',
    standardTurnaround: '45 – 90 mins (Walk-in)',
    procedureDetails: [
      'Microscope inspection of frame bevel alignment',
      'Separation using regulated thermal heating plate (80°C safe limit)',
      'Installation of OEM-spec high-gamut display assembly',
      'Digitizer touch calibration & ambient light sensor testing',
      'Water/dust ingress adhesive perimeter resealing'
    ],
    partsGrade: 'OEM Grade-A / Original Refurbished'
  },
  {
    id: 'repair-battery-health',
    category: 'mobile',
    serviceName: 'Battery Replacement & Health Restoration',
    commonSymptoms: [
      'Battery percentage drops rapidly under 30%',
      'Device unexpectedly powers off under camera load',
      'Rear back glass lifting due to swollen battery pouch',
      'Device runs excessively hot while charging'
    ],
    indicativeCostRange: '₹1,200 – ₹4,200 (Model dependent)',
    standardTurnaround: '30 – 60 mins (Walk-in)',
    procedureDetails: [
      'Discharge test & safe hazardous cell de-energization',
      'Zero-residue stretch pull-tab adhesive removal',
      'Installation of certified lithium-ion polymer cell with protection IC',
      'Full charge-discharge cycle diagnostic verification',
      'Responsible recycling of degraded cell via certified e-waste channel'
    ],
    partsGrade: 'TI-IC Integrated Li-Polymer Cells'
  },
  {
    id: 'repair-logic-board',
    category: 'mobile',
    serviceName: 'Micro-Soldering & Logic Board Diagnostics',
    commonSymptoms: [
      'Device stuck in boot loop or recovery mode',
      'No power / 0.00A current draw on USB ammeter',
      'No audio from earpiece speaker / Audio IC fault',
      'Charging icon appears but battery percentage never climbs'
    ],
    indicativeCostRange: '₹2,500 – ₹7,800 (Diagnostics first)',
    standardTurnaround: '24 – 48 hrs (Precision bench)',
    procedureDetails: [
      'Thermal camera scan under controlled DC power supply',
      'Schematic line-by-line resistance to ground check',
      'Targeted micro-soldering under 40x optical microscope',
      'Replacement of failed SMD capacitors, chokes, or PMIC chips',
      'Ultrasonic PCB flux residue cleanup & conformal coating'
    ],
    partsGrade: 'Original Spec ICs & Passives'
  },
  {
    id: 'repair-laptop-screen',
    category: 'laptop',
    serviceName: 'Laptop Display Panel & Hinge Restoration',
    commonSymptoms: [
      'Spiderweb cracked LCD / broken liquid crystals',
      'Faint display backlight (image visible only with flashlight)',
      'Loose or broken metal hinges cracking bezel plastic',
      'Display flickers when opening or adjusting lid angle'
    ],
    indicativeCostRange: '₹3,400 – ₹18,500 (Panel dependent)',
    standardTurnaround: '2 – 4 hrs',
    procedureDetails: [
      'Inspection of eDP 30-pin/40-pin video ribbon cable continuity',
      'Disassembly of display assembly without frame warping',
      'Torque recalibration & epoxy reinforcement of hinge anchor threads',
      'Installation of IPS/eDP matte or glossy calibrated panel',
      'Color gamut check & brightness step verification'
    ],
    partsGrade: 'Direct OEM Specification Panels (BOE / LG / AUO)'
  },
  {
    id: 'repair-laptop-thermal',
    category: 'laptop',
    serviceName: 'Thermal Overhaul & Fan De-dusting Service',
    commonSymptoms: [
      'Fans screaming at high RPM even during simple browsing',
      'Laptop chassis uncomfortably hot to the touch',
      'Thermal throttling causing sudden lag or FPS drops',
      'Sudden thermal shutdown under heavy compilation/video export'
    ],
    indicativeCostRange: '₹850 – ₹1,800 (Includes premium thermal paste)',
    standardTurnaround: '60 – 90 mins',
    procedureDetails: [
      'Complete heatsink and dual-fan ultrasonic dust clearance',
      'Removal of dried, crusty factory thermal paste with isopropyl alcohol',
      'Application of high-conductivity thermal compound (Artic MX-6 / Honeywell PTM7950)',
      'Replacement of degraded squishy thermal pads on VRMs and VRAM',
      'Pre- and post-service Cinebench thermal stress logging'
    ],
    partsGrade: 'Phase-change PTM7950 & Arctic MX-6'
  },
  {
    id: 'repair-laptop-keyboard',
    category: 'laptop',
    serviceName: 'Keyboard, Trackpad & Port Replacement',
    commonSymptoms: [
      'Keys sticking, repeating characters, or completely unresponsive',
      'Spilled liquid on keyboard causing sticky keys or shorts',
      'Trackpad click does not register or cursor drifts',
      'USB-C charging port loose and wiggles disconnectively'
    ],
    indicativeCostRange: '₹1,500 – ₹6,500 (Chassis dependent)',
    standardTurnaround: '2 – 4 hrs',
    procedureDetails: [
      'Full top-case or riveted keyboard frame isolation',
      'Precision thermal-rivet welding or screw-mounted replacement',
      'Multi-touch gesture driver calibration for trackpads',
      'USB-C receptacle solder joint reinforcement with leaded solder',
      '100% key stroke actuation check via keyboard test matrix'
    ],
    partsGrade: 'OEM Layout Keyboards & Genuine Ports'
  }
];

export const ACCESSORIES_CATALOG: AccessoryItem[] = [
  {
    id: 'acc-gan-65w',
    name: 'ReTech Pro 65W GaN Dual-Port Fast Charger',
    category: 'charging',
    targetDevice: 'universal',
    indicativePriceInr: 1699,
    keySpecs: ['65W Max Power Delivery', 'Dual USB-C Ports', 'GaN III Cool-Running Silicon', 'Universal Laptop & Mobile Fast Charging'],
    materials: 'Fireproof V0-grade Polycarbonate, Foldable Pins',
    badge: 'Store Benchmark'
  },
  {
    id: 'acc-gan-100w',
    name: 'ReTech Ultra 100W 3-Port GaN Desktop Charger',
    category: 'charging',
    targetDevice: 'laptops',
    indicativePriceInr: 2899,
    keySpecs: ['100W Max Single Port', '2x USB-C + 1x USB-A', 'PPS & QC 4+ Protocol', 'Charges MacBook Pro + iPhone simultaneously'],
    materials: 'Matte Anodized Aluminum accents with thermal graphite layers',
    badge: 'Pro Pick'
  },
  {
    id: 'acc-braided-cable',
    name: 'ArmorWeave 100W USB-C to USB-C Cable (1.8m)',
    category: 'cables',
    targetDevice: 'universal',
    indicativePriceInr: 599,
    keySpecs: ['100W (20V/5A) E-Marker Chip', '480 Mbps Data Sync', '25,000+ Bend Cycle Rating', 'Reinforced Zinc Alloy Connectors'],
    materials: 'High-density ballistic nylon braided jacket',
    badge: 'Heavy-Duty'
  },
  {
    id: 'acc-tempered-glass',
    name: 'PrecisionShield 9H Edge-to-Edge Tempered Glass',
    category: 'protection',
    targetDevice: 'smartphones',
    indicativePriceInr: 349,
    keySpecs: ['9H Mohs Hardness Rating', 'Electrostatically Applied Oleophobic Layer', '0.33mm Japanese Asahi Glass', 'Includes Alignment Applicator Kit'],
    materials: 'Double-tempered aluminosilicate glass',
    badge: 'Walk-in Installation'
  },
  {
    id: 'acc-protective-case',
    name: 'EnduroGuard Shock-Absorbing Bumper Case',
    category: 'protection',
    targetDevice: 'smartphones',
    indicativePriceInr: 699,
    keySpecs: ['10-Foot Military Drop Test Standard', 'Air-Pocket Cushion Corners', '1.5mm Raised Camera Bezel', 'Wireless & MagSafe Compatible'],
    materials: 'Matte Anti-Yellowing TPU + Rigid Polycarbonate Backplate',
    badge: 'Impact Resistant'
  },
  {
    id: 'acc-laptop-stand',
    name: 'AeroLift Ergonomic Aluminum Laptop Stand',
    category: 'ergonomics',
    targetDevice: 'laptops',
    indicativePriceInr: 1299,
    keySpecs: ['6-Level Height & Angle Adjustment', 'Supports 10" to 17" Laptops', 'Open Airflow Thermal Ventilation', 'Foldable Compact Travel Profile'],
    materials: 'Sandblasted Aircraft-Grade 6063 Aluminum with Non-Slip Silicone',
    badge: 'Workspace Essential'
  }
];

export const DIAGNOSTIC_OPTIONS: DiagnosticOption[] = [
  {
    deviceType: 'mobile',
    brand: 'Apple iPhone',
    models: ['iPhone 15 Series', 'iPhone 14 Series', 'iPhone 13 Series', 'iPhone 12 / 11 Series'],
    commonIssues: [
      {
        issueKey: 'screen-crack',
        label: 'Cracked Screen / Display Line Artifacts',
        symptomDesc: 'Front glass shattered or OLED display has colored vertical lines or black blotches.',
        estimatedCostRangeInr: '₹2,800 – ₹14,500',
        turnaround: '45–60 mins walk-in',
        inspectionProtocol: 'Display TrueTone serial reprogrammer & 120-point touch digitizer grid test.'
      },
      {
        issueKey: 'battery-drain',
        label: 'Fast Battery Drain / Below 80% Health',
        symptomDesc: 'Device requires multiple charges a day, lags when opening apps, or cuts off abruptly at 20%.',
        estimatedCostRangeInr: '₹1,600 – ₹3,800',
        turnaround: '30–45 mins walk-in',
        inspectionProtocol: 'Coulomb-counter load test & physical pouch expansion inspection.'
      },
      {
        issueKey: 'charge-port',
        label: 'Lightning / USB-C Port Loose or Intermittent',
        symptomDesc: 'Charging cable wiggles out or only charges when held at a specific angle.',
        estimatedCostRangeInr: '₹600 (Cleaning) – ₹2,400 (Port Swap)',
        turnaround: '20–45 mins walk-in',
        inspectionProtocol: 'Microscopic debris clearance first. Voltage drop ammeter test under 9V/2A PD.'
      },
      {
        issueKey: 'liquid-spill',
        label: 'Liquid Ingress / Moisture Detected Alert',
        symptomDesc: 'Accidental water drop or rain exposure; device refuses to charge or powers off.',
        estimatedCostRangeInr: '₹1,500 – ₹4,500 (Ultrasonic Decon)',
        turnaround: 'Same-day to 24 hrs',
        inspectionProtocol: 'Immediate battery disconnection, ultrasonic pure alcohol bath, thermal infrared inspection.'
      }
    ]
  },
  {
    deviceType: 'mobile',
    brand: 'Samsung Galaxy',
    models: ['S-Series Flagships (S21/S22/S23/S24)', 'Z Flip & Z Fold', 'A-Series / M-Series'],
    commonIssues: [
      {
        issueKey: 'screen-crack',
        label: 'Curved AMOLED Glass Crack or Dead Touch',
        symptomDesc: 'Dynamic AMOLED cracked, flickering green screen on unlock, or digitizer dead spots.',
        estimatedCostRangeInr: '₹2,400 – ₹13,800',
        turnaround: '60–90 mins walk-in',
        inspectionProtocol: 'Samsung hardware secret code *#0*# RGB and touch sensor grid test.'
      },
      {
        issueKey: 'battery-drain',
        label: 'Fast Battery Drain / Overheating in Hand',
        symptomDesc: 'Phone becomes hot to touch near camera bump; battery drops 1% every two minutes.',
        estimatedCostRangeInr: '₹1,200 – ₹3,200',
        turnaround: '40 mins walk-in',
        inspectionProtocol: 'Thermal imaging scan for abnormal standby leak current, followed by cell swap.'
      },
      {
        issueKey: 'camera-shake',
        label: 'Camera Blurry / OIS Motor Vibrating Loudly',
        symptomDesc: 'Main camera buzzes mechanically and cannot focus on distant objects.',
        estimatedCostRangeInr: '₹1,800 – ₹4,600',
        turnaround: '45 mins walk-in',
        inspectionProtocol: 'OIS voice-coil actuator calibration and module replacement.'
      }
    ]
  },
  {
    deviceType: 'laptop',
    brand: 'Apple MacBook (Air & Pro)',
    models: ['MacBook Pro 14" & 16" (M-Series)', 'MacBook Air M1 / M2 / M3', 'Intel MacBooks (2018-2020)'],
    commonIssues: [
      {
        issueKey: 'screen-damage',
        label: 'Cracked Liquid Retina Display or Flexgate Lines',
        symptomDesc: 'Screen glass broken, horizontal lines across bottom, or stage light effect.',
        estimatedCostRangeInr: '₹8,500 – ₹24,000',
        turnaround: '2–4 hrs',
        inspectionProtocol: 'Full display assembly replacement with lid angle sensor calibration.'
      },
      {
        issueKey: 'battery-service',
        label: 'Battery "Service Recommended" Warning',
        symptomDesc: 'Cycle count exceeded 800-1000, battery trackpad lifting, runtime under 2 hours.',
        estimatedCostRangeInr: '₹4,500 – ₹9,800',
        turnaround: '90–120 mins',
        inspectionProtocol: 'Solvent adhesive release, new TI-microcontroller cell installation, SMC reset.'
      },
      {
        issueKey: 'thermal-service',
        label: 'Fan Noise & Extreme Thermal Throttling',
        symptomDesc: 'Fans spinning loudly on idle; kernel_task takes up 300% CPU to slow down machine.',
        estimatedCostRangeInr: '₹1,200 – ₹1,800',
        turnaround: '60 mins',
        inspectionProtocol: 'Ultrasonic fin stack cleanout, thermal compound renewal with PTM7950.'
      },
      {
        issueKey: 'liquid-damage',
        label: 'Spilled Coffee/Water on Keyboard',
        symptomDesc: 'MacBook shut off immediately and does not show battery icon or charge light.',
        estimatedCostRangeInr: '₹3,500 – ₹11,000',
        turnaround: '24–48 hrs',
        inspectionProtocol: 'Board removal, corrosion cleanup, PPBUS_G3H voltage rail trace repair.'
      }
    ]
  },
  {
    deviceType: 'laptop',
    brand: 'Windows Laptops (Dell, Lenovo, HP, ASUS)',
    models: ['ThinkPad X1 & T-Series', 'Dell XPS & Latitude', 'HP Spectre & Envy', 'ASUS ZenBook & ROG'],
    commonIssues: [
      {
        issueKey: 'screen-broken',
        label: 'Shattered LCD Panel or Broken Hinge Mount',
        symptomDesc: 'FHD/QHD panel cracked or plastic hinge anchors broke away from chassis.',
        estimatedCostRangeInr: '₹3,200 – ₹12,500',
        turnaround: '2–3 hrs',
        inspectionProtocol: 'eDP cable continuity check, brass thread anchor reconstruction.'
      },
      {
        issueKey: 'keyboard-trackpad',
        label: 'Key Sticking / Liquid Sticky Keys / Port Loose',
        symptomDesc: 'Certain letters don’t type; spacebar stuck down; DC power jack is loose.',
        estimatedCostRangeInr: '₹1,400 – ₹4,800',
        turnaround: '2 hrs',
        inspectionProtocol: 'Key switch replacement or full bottom assembly rebuild.'
      },
      {
        issueKey: 'overheating-slow',
        label: 'Overheating & Sluggish Performance',
        symptomDesc: 'Laptop freezes, shuts down during video calls, or case gets burning hot.',
        estimatedCostRangeInr: '₹850 – ₹1,500',
        turnaround: '45 mins',
        inspectionProtocol: 'Thermal heatsink ultrasonic scrub, fan lubrication, Arctic MX-6 repaste.'
      }
    ]
  }
];

export const TRADE_IN_OPTIONS: TradeInOption[] = [
  {
    deviceType: 'mobile',
    brand: 'Apple',
    model: 'iPhone 13 (128GB)',
    baseValuationInr: 32000,
    conditionMultipliers: { pristine: 1.0, excellent: 0.9, good: 0.78, fairNeedsRepair: 0.58 }
  },
  {
    deviceType: 'mobile',
    brand: 'Apple',
    model: 'iPhone 14 Pro (128GB)',
    baseValuationInr: 58000,
    conditionMultipliers: { pristine: 1.0, excellent: 0.91, good: 0.8, fairNeedsRepair: 0.6 }
  },
  {
    deviceType: 'mobile',
    brand: 'Samsung',
    model: 'Galaxy S22 Ultra (256GB)',
    baseValuationInr: 38000,
    conditionMultipliers: { pristine: 1.0, excellent: 0.88, good: 0.76, fairNeedsRepair: 0.55 }
  },
  {
    deviceType: 'mobile',
    brand: 'OnePlus',
    model: 'OnePlus 11 5G (256GB)',
    baseValuationInr: 26000,
    conditionMultipliers: { pristine: 1.0, excellent: 0.88, good: 0.75, fairNeedsRepair: 0.52 }
  },
  {
    deviceType: 'laptop',
    brand: 'Apple',
    model: 'MacBook Air M1 (256GB/8GB)',
    baseValuationInr: 44000,
    conditionMultipliers: { pristine: 1.0, excellent: 0.9, good: 0.78, fairNeedsRepair: 0.55 }
  },
  {
    deviceType: 'laptop',
    brand: 'Apple',
    model: 'MacBook Pro 14" M1 Pro (512GB/16GB)',
    baseValuationInr: 78000,
    conditionMultipliers: { pristine: 1.0, excellent: 0.9, good: 0.8, fairNeedsRepair: 0.58 }
  },
  {
    deviceType: 'laptop',
    brand: 'Dell',
    model: 'Dell XPS 13 i7 11th Gen (512GB/16GB)',
    baseValuationInr: 38000,
    conditionMultipliers: { pristine: 1.0, excellent: 0.88, good: 0.75, fairNeedsRepair: 0.5 }
  },
  {
    deviceType: 'laptop',
    brand: 'Lenovo',
    model: 'ThinkPad T14 AMD Ryzen 7 (512GB/16GB)',
    baseValuationInr: 35000,
    conditionMultipliers: { pristine: 1.0, excellent: 0.87, good: 0.74, fairNeedsRepair: 0.5 }
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: '40-Point Hardware Inspection',
    description: 'Every pre-owned device is tested using diagnostic software and physical bench testing — from display subpixel uniformity and battery discharge curves to thermal load endurance.',
    iconName: 'ShieldCheck',
    highlight: 'Rigorous Verification'
  },
  {
    title: 'Transparent Diagnostics & No Hidden Costs',
    description: 'Before any screwdriver touches your phone or laptop, you receive an itemized quote detailing part costs and labor. No unexpected fees or unneeded part replacements.',
    iconName: 'FileText',
    highlight: 'Zero Mystery Fees'
  },
  {
    title: 'Responsible E-Waste Handling',
    description: 'Degraded lithium batteries and cracked display assemblies are systematically directed to authorized Karnataka e-waste recyclers for precious metal recovery and zero landfill contamination.',
    iconName: 'Recycle',
    highlight: 'Eco-Accountable'
  },
  {
    title: 'Bengaluru Local Walk-in Turnaround',
    description: 'Test devices in your own hands before purchasing. Experience rapid 45-minute smartphone triage and 2-hour laptop servicing right here in Bengaluru.',
    iconName: 'MapPin',
    highlight: 'In-Person Assurance'
  }
];
