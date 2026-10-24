import { DisplayDeviceModel, ServiceCategoryDetail } from '../types/displayCatalog';

export const DISPLAY_SERVICE_CATEGORIES: ServiceCategoryDetail[] = [
  {
    category: 'front-glass-flat',
    title: 'Front Glass Replacement (Flat Screens)',
    subtitle: 'Preserves 100% Genuine Factory OLED/LCD Panel',
    description: 
      'Precision optical refurbishing process for cracked flat displays where the underlying digitizer and AMOLED/LCD matrix remain completely undamaged. We extract the damaged top glass using sub-millimeter molybdenum wire, clean the original polarizing layer, and bond a factory-grade oleophobic glass with dry Optical Clear Adhesive (OCA) in an ISO Class 5 laminar flow cleanroom.',
    keyRequirements: [
      'Original display panel must light up 100% with no black spots (ink bleed) or colored vertical/horizontal lines.',
      'Touchscreen matrix must register touch across all coordinates without phantom ghost touches or dead zones.',
      'Display IC driver flex cables must be physically intact with zero liquid ingress or delamination.'
    ],
    equipmentUsed: [
      '0.028mm Molybdenum / Tungsten Alloy Cutting Wire',
      'High-Precision Heated Vacuum Separator (80°C - 85°C)',
      'Automated Roller Dry-Film OCA Laminator',
      '5.5-Bar High-Pressure Heated Autoclave De-Bubble Chamber'
    ],
    idealCandidate: 'Phones with cracked or shattered exterior glass while display imagery, color reproduction, and touch response remain entirely normal.'
  },
  {
    category: 'front-glass-curved',
    title: 'Curved-Edge Glass Replacement (3D OLED Refurbishing)',
    subtitle: 'Specialized Cryogenic & 3D Mold Precision Refurbishing',
    description: 
      'High-complexity display refurbishing engineered specifically for curved-edge (waterfall and 3D curve) OLED panels (such as Samsung Galaxy S Ultra, OnePlus Flagships, vivo X/V Series, and Motorola Edge). Employs cryogenic -150°C liquid nitrogen freezing separation or contour heated wire to decouple the curved substrate without micro-stress fractures.',
    keyRequirements: [
      'Underlying flexible OLED matrix must be 100% unblemished with zero pixel burnout or green line defects.',
      'Edge curvature touch sensors must register finger drag right into the bezel corners.',
      'Chassis frame must not be heavily buckled along the lateral curvature edges.'
    ],
    equipmentUsed: [
      'Cryogenic Freeze Separator (-140°C to -150°C)',
      'Custom Model-Specific Aluminum Curve Alignment Molds (56° / 61° / 88° radius)',
      '3D Curved Airbag OCA Vacuum Press Machine',
      'Ultra-Precision Optical Centering Microscope'
    ],
    idealCandidate: 'Curved flagship devices with surface glass fractures that want to save up to 60% compared to official folder replacement while preserving the factory Samsung/BOE curved OLED panel.'
  },
  {
    category: 'display-assembly',
    title: 'Complete Display Assembly Replacement (Combo / Folder)',
    subtitle: 'Full Factory Panel, Digitizer & Pre-Bonded Frame Replacement',
    description: 
      'When internal display damage has compromised the OLED substrate (visible ink bleeding, permanent bright lines, blank/black screen, or unresponsive touch digitizer), full assembly replacement is the only technically reliable solution. We install complete pre-tested service modules with integrated touch layers, factory polarizers, and new perimeter environmental seals.',
    keyRequirements: [
      'Mandatory when the inner panel exhibits purple/black ink bleed, green/pink vertical lines, or complete failure to illuminate.',
      'Mandatory when the touch digitizer is unresponsive, sporadic, or ghost typing.',
      'Recommended when the frame housing is crushed or bent beyond flat tolerance.'
    ],
    equipmentUsed: [
      'Anti-Static ESD Workbench & Grounded Matting',
      'Calibrated Digital Torque Drivers (Apple Pentalobe, Tri-point, Phillips #000)',
      'EEPROM Display Serial / TrueTone Programmer Box (iPhone & Ambient Sensor sync)',
      'Structural Cold-Press Display Adhesive Clamps'
    ],
    idealCandidate: 'Devices with severe impact damage, LCD backlight failure, pixel matrix bleeding, or permanent color distortion.'
  },
  {
    category: 'touch-diagnosis',
    title: 'Touchscreen & Display Malfunction Diagnosis',
    subtitle: '10-Point Bench Diagnostic & Flex Circuit Triage',
    description: 
      'Comprehensive laboratory bench inspection to isolate touch glitches, refresh rate stutter, ambient light sensor desync, or intermittent flickering. We differentiate between motherboard Touch IC / display power rail faults, damaged flex cables, and physical panel degradation before any part is replaced.',
    keyRequirements: [
      'Recommended for devices experiencing erratic touch, random freezing, brightness sensor glitches, or display sleep issues without obvious surface cracks.',
      'Useful after drops where glass did not crack but touch response became unresponsive or intermittent.'
    ],
    equipmentUsed: [
      '40x Stereo Optical Inspection Microscope',
      'Digital Oscilloscope & Logic Analyzer (I2C / SPI Touch Lines)',
      'SMD Thermal Camera for Motherboard Display Power IC Triage',
      'Multi-Touch Touchscreen Grid Calibration Matrix'
    ],
    idealCandidate: 'Users experiencing intermittent ghost touch, unresponsive screen zones, or display flickering after an impact or drop.'
  },
  {
    category: 'rear-glass',
    title: 'Rear Glass & Housing Replacement',
    subtitle: 'Cold Laser Ablation & MagSafe Induction Preservation',
    description: 
      'Restoration of fractured rear glass panels and battery covers. On modern glass-back phones (iPhone 8 through 15 Pro, Samsung S-series, OnePlus), the back glass is chemically bonded with epoxy to the midframe. We use automated fiber laser machines to ablate the adhesive without exposing sensitive internal batteries, wireless charging coils, or camera modules to dangerous thermal heat.',
    keyRequirements: [
      'Camera lens sapphire glass inspected and resealed.',
      'Wireless charging coils and NFC antennas tested for resonance continuity post-repair.',
      'Chassis frame checked for alignment to ensure flush fit and dust protection.'
    ],
    equipmentUsed: [
      'High-Precision Fiber Laser Back Glass Removal Machine (Automated CAD Model Profiles)',
      'Cold Press Structural Bonding Clamps',
      'OEM Polyurethane Waterproof Adhesive Gasket',
      'Induction Coil Resonance Tester'
    ],
    idealCandidate: 'Smartphones with spiderweb cracks on the back panel, cracked camera glass surrounds, or broken glass housing.'
  }
];

export const SMARTPHONE_DISPLAY_CATALOG: DisplayDeviceModel[] = [
  // ==========================================
  // 1. APPLE IPHONE
  // ==========================================
  {
    id: 'apple-iphone-15-pro-max',
    brand: 'Apple',
    modelName: 'iPhone 15 Pro Max',
    series: 'iPhone 15 Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.7" Super Retina XDR OLED (LTPO 120Hz ProMotion)',
    displayResolution: '2796 x 1290 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass with titanium frame border',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'High candidate for Glass-Only repair if Dynamic Island and underlying 120Hz LTPO matrix have no ink bleed. Requires EEPROM transfer for TrueTone and ambient sensor preservation.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Textured matte frosted glass (Independent modular back frame design)',
    modelNumberIdentifiers: ['A2849', 'A3105', 'A3106', 'A3108'],
    identificationGuide: 'Settings > General > About > Model Name or Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Refurbished Pre-cut Ceramic Shield Glass with Cold-Press Frame',
      fullAssemblyGrade: 'Original Service Pack Soft OLED / High-Gamut Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 82°C (Grade 5 Titanium Bezel clearance)',
      laminationPressure: 'Dry OCA Vacuum Laminator @ 0.42 MPa, 40s cycle',
      autoclaveProfile: '5.5 Bar De-bubble Chamber @ 42°C for 14 mins',
      turnaroundEstimate: '2.5 to 3.5 Hours'
    }
  },
  {
    id: 'apple-iphone-15-pro',
    brand: 'Apple',
    modelName: 'iPhone 15 Pro',
    series: 'iPhone 15 Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.1" Super Retina XDR OLED (LTPO 120Hz ProMotion)',
    displayResolution: '2556 x 1179 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass with oleophobic coating',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Ultra-thin 1.55mm bezels require precision alignment mold during OCA lamination. Underlying panel must have zero dead subpixels.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte textured rear glass (Modular removable rear design)',
    modelNumberIdentifiers: ['A2848', 'A3101', 'A3102', 'A3104'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Pre-laminated OCA Ceramic Shield Glass with Slim Bezel Bracket',
      fullAssemblyGrade: 'Original Service Pack Soft OLED with TrueTone IC Support'
    },
    benchProtocol: {
      separationMethod: '0.028mm Molybdenum Wire Hot-Bed @ 80°C',
      laminationPressure: 'OCA Laminator @ 0.40 MPa',
      autoclaveProfile: '5.2 Bar De-bubble @ 40°C for 12 mins',
      turnaroundEstimate: '2 to 3 Hours'
    }
  },
  {
    id: 'apple-iphone-15-plus',
    brand: 'Apple',
    modelName: 'iPhone 15 Plus',
    series: 'iPhone 15 Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.7" Super Retina XDR OLED (60Hz)',
    displayResolution: '2796 x 1290 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Glass-only separation is straightforward. 60Hz OLED matrix is flexible and resilient to hot-wire separation if touch digitizer functions.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Color-infused glass back with matte finish',
    modelNumberIdentifiers: ['A2847', 'A3093', 'A3094', 'A3096'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Ceramic Glass with Pre-Applied Mitsubishi OCA',
      fullAssemblyGrade: 'Original Service Pack OLED / Premium Grade-A Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 82°C',
      laminationPressure: 'Vacuum Chamber Lamination @ 0.45 MPa',
      autoclaveProfile: '5.5 Bar De-bubble @ 40°C for 10 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'apple-iphone-15',
    brand: 'Apple',
    modelName: 'iPhone 15',
    series: 'iPhone 15 Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.1" Super Retina XDR OLED (60Hz)',
    displayResolution: '2556 x 1179 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'High success rate for glass replacement when Dynamic Island area has no black bleeding. TrueTone restored via programmer.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Color-infused matte back glass',
    modelNumberIdentifiers: ['A2846', 'A3089', 'A3090', 'A3092'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Purity OCA Ceramic Shield Replacement Glass',
      fullAssemblyGrade: 'Original Service Pack OLED / Premium Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Lamination @ 0.42 MPa',
      autoclaveProfile: '5.2 Bar De-bubble @ 40°C for 10 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'apple-iphone-14-pro-max',
    brand: 'Apple',
    modelName: 'iPhone 14 Pro Max',
    series: 'iPhone 14 Series',
    releaseYear: 2022,
    screenType: 'flat',
    displayTechnology: '6.7" Super Retina XDR OLED (LTPO 120Hz ProMotion)',
    displayResolution: '2796 x 1290 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass with surgical-grade stainless steel frame',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Requires delicate laser removal of front frame bezel before separation. Retains original Apple factory 120Hz ProMotion panel.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Textured matte glass (Requires fiber laser ablation for back glass removal)',
    modelNumberIdentifiers: ['A2651', 'A2893', 'A2894', 'A2896'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Spec Ceramic Shield Glass with Polarizer Pre-Assembled',
      fullAssemblyGrade: 'Original Service Pack Soft OLED with IC Transfer Pads'
    },
    benchProtocol: {
      separationMethod: '0.028mm High-Tension Wire @ 83°C',
      laminationPressure: 'OCA Laminator @ 0.44 MPa, 42s cycle',
      autoclaveProfile: '5.5 Bar De-bubble @ 42°C for 15 mins',
      turnaroundEstimate: '2.5 to 3 Hours'
    }
  },
  {
    id: 'apple-iphone-14-pro',
    brand: 'Apple',
    modelName: 'iPhone 14 Pro',
    series: 'iPhone 14 Series',
    releaseYear: 2022,
    screenType: 'flat',
    displayTechnology: '6.1" Super Retina XDR OLED (LTPO 120Hz ProMotion)',
    displayResolution: '2556 x 1179 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Glass-only viable if touch is fully functional and TrueTone EEPROM read is completed. Rear glass requires automated laser separation.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte frosted back glass',
    modelNumberIdentifiers: ['A2650', 'A2889', 'A2890', 'A2892'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Ceramic Shield Glass with Bezel Frame Assembly',
      fullAssemblyGrade: 'Original Service Pack Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.2 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '2 to 2.5 Hours'
    }
  },
  {
    id: 'apple-iphone-14',
    brand: 'Apple',
    modelName: 'iPhone 14',
    series: 'iPhone 14 Series',
    releaseYear: 2022,
    screenType: 'flat',
    displayTechnology: '6.1" Super Retina XDR OLED (60Hz)',
    displayResolution: '2532 x 1170 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Features modular internal frame. Fast front screen removal and high glass-only refurbishing success rate.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Removable back glass assembly',
    modelNumberIdentifiers: ['A2649', 'A2881', 'A2882', 'A2884'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Grade Ceramic Front Glass with Mitsubishi OCA',
      fullAssemblyGrade: 'Original Service Pack OLED / Premium Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.42 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'apple-iphone-13-pro-max',
    brand: 'Apple',
    modelName: 'iPhone 13 Pro Max',
    series: 'iPhone 13 Series',
    releaseYear: 2021,
    screenType: 'flat',
    displayTechnology: '6.7" Super Retina XDR OLED (LTPO 120Hz ProMotion)',
    displayResolution: '2778 x 1284 pixels (~458 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      '120Hz flexible OLED panel. Screen glass can be replaced independently. Must check for iOS "white/green screen" firmware issues prior to bench triage.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte frosted rear glass (Laser removal required)',
    modelNumberIdentifiers: ['A2484', 'A2641', 'A2643', 'A2645'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Specification Ceramic Shield Replacement Glass',
      fullAssemblyGrade: 'Original Service Pack Soft OLED / Premium Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire @ 82°C',
      laminationPressure: 'Vacuum Chamber @ 0.44 MPa',
      autoclaveProfile: '5.5 Bar @ 42°C for 14 mins',
      turnaroundEstimate: '2.5 Hours'
    }
  },
  {
    id: 'apple-iphone-13-pro',
    brand: 'Apple',
    modelName: 'iPhone 13 Pro',
    series: 'iPhone 13 Series',
    releaseYear: 2021,
    screenType: 'flat',
    displayTechnology: '6.1" Super Retina XDR OLED (LTPO 120Hz ProMotion)',
    displayResolution: '2532 x 1170 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Full ProMotion 120Hz retention when glass-only OCA lamination is performed. TrueTone chip serial cloned.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte frosted rear glass',
    modelNumberIdentifiers: ['A2483', 'A2636', 'A2638', 'A2640'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Ceramic Shield Glass with Pre-Attached Bezel Frame',
      fullAssemblyGrade: 'Original Service Pack Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Laminator @ 0.40 MPa',
      autoclaveProfile: '5.2 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'apple-iphone-13',
    brand: 'Apple',
    modelName: 'iPhone 13',
    series: 'iPhone 13 Series',
    releaseYear: 2021,
    screenType: 'flat',
    displayTechnology: '6.1" Super Retina XDR OLED (60Hz)',
    displayResolution: '2532 x 1170 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'One of the most frequently serviced models. High glass-only success rate due to robust flexible OLED substrate.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Glossy glass back (Cold laser adhesive removal required)',
    modelNumberIdentifiers: ['A2482', 'A2631', 'A2633', 'A2635'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Transparency Ceramic Glass with Oleophobic Coating',
      fullAssemblyGrade: 'Original Service Pack OLED / Premium Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.42 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '1.5 to 2 Hours'
    }
  },
  {
    id: 'apple-iphone-12-pro-max',
    brand: 'Apple',
    modelName: 'iPhone 12 Pro Max',
    series: 'iPhone 12 Series',
    releaseYear: 2020,
    screenType: 'flat',
    displayTechnology: '6.7" Super Retina XDR OLED',
    displayResolution: '2778 x 1284 pixels (~458 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Retains factory Apple OLED panel. Display flex cable must be inspected for flex fold tears before separation.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte textured rear glass',
    modelNumberIdentifiers: ['A2342', 'A2410', 'A2411', 'A2412'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Grade Ceramic Shield Glass with Bracket',
      fullAssemblyGrade: 'Original Service Pack Soft OLED / Hard OLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.42 MPa',
      autoclaveProfile: '5.2 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'apple-iphone-12',
    brand: 'Apple',
    modelName: 'iPhone 12 / 12 Pro',
    series: 'iPhone 12 Series',
    releaseYear: 2020,
    screenType: 'flat',
    displayTechnology: '6.1" Super Retina XDR OLED (Shared Panel Architecture)',
    displayResolution: '2532 x 1170 pixels (~460 ppi)',
    glassProtection: 'Ceramic Shield front glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'iPhone 12 and 12 Pro share identical display dimensions. Glass-only replacement preserves TrueTone and touch responsiveness.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Glossy glass (12) / Matte glass (12 Pro)',
    modelNumberIdentifiers: ['A2172', 'A2402', 'A2341', 'A2406'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Strength Ceramic Glass with Pre-Applied Frame',
      fullAssemblyGrade: 'Original Service Pack Soft OLED / Premium Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '1.5 to 2 Hours'
    }
  },
  {
    id: 'apple-iphone-11-pro',
    brand: 'Apple',
    modelName: 'iPhone 11 Pro / 11 Pro Max',
    series: 'iPhone 11 Series',
    releaseYear: 2019,
    screenType: 'flat',
    displayTechnology: '5.8" / 6.5" Super Retina XDR OLED',
    displayResolution: '2436 x 1125 / 2688 x 1242 pixels (~458 ppi)',
    glassProtection: 'Dual-ion exchange strengthened glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Curved 2.5D bezel rim. Glass-only replacement requires careful frame bevel separation to avoid damaging the ear-speaker flex.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Textured matte rear glass',
    modelNumberIdentifiers: ['A2160', 'A2215', 'A2161', 'A2218'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Curve 2.5D Front Glass with Bezel Glue',
      fullAssemblyGrade: 'Original Refurbished Soft OLED / Premium Soft OLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Wire Hot-Bed @ 78°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'apple-iphone-11',
    brand: 'Apple',
    modelName: 'iPhone 11',
    series: 'iPhone 11 Series',
    releaseYear: 2019,
    screenType: 'flat',
    displayTechnology: '6.1" Liquid Retina HD IPS LCD',
    displayResolution: '1792 x 828 pixels (~326 ppi)',
    glassProtection: 'Ion-strengthened glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Liquid Retina IPS LCD panel. Backlight unit must be protected from alcohol solvent during glue cleaning to prevent moisture stains.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Glossy rear glass panel',
    modelNumberIdentifiers: ['A2111', 'A2221', 'A2223'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Polarizer-bonded Front Glass with OCA',
      fullAssemblyGrade: 'Original Service Pack LCD / High-Gamut Incell LCD'
    },
    benchProtocol: {
      separationMethod: '0.035mm Steel Wire Separation @ 75°C (Low heat for backlight)',
      laminationPressure: 'Vacuum Chamber @ 0.35 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 10 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },
  {
    id: 'apple-iphone-xs-x',
    brand: 'Apple',
    modelName: 'iPhone X / XS / XS Max / XR',
    series: 'iPhone X Series',
    releaseYear: 2018,
    screenType: 'flat',
    displayTechnology: 'Super Retina HD OLED (X/XS/XS Max) & Liquid Retina LCD (XR)',
    displayResolution: 'FHD+ OLED / Liquid Retina',
    glassProtection: 'Ion-strengthened glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Fully eligible for glass-only repair. For OLED models (X/XS), we inspect for 3D Touch matrix response. TrueTone programmer applied.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Glossy back glass',
    modelNumberIdentifiers: ['A1865', 'A1901', 'A1920', 'A1984', 'A1921'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Specification Front Glass with 3D Touch Frame',
      fullAssemblyGrade: 'Premium Soft OLED / Premium Incell LCD'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 78°C',
      laminationPressure: 'Vacuum Chamber @ 0.38 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },
  {
    id: 'apple-iphone-se-gen3',
    brand: 'Apple',
    modelName: 'iPhone SE (3rd & 2nd Gen)',
    series: 'iPhone SE Series',
    releaseYear: 2022,
    screenType: 'flat',
    displayTechnology: '4.7" Retina HD IPS LCD with Touch ID Home Button Cutout',
    displayResolution: '1334 x 750 pixels (~326 ppi)',
    glassProtection: 'Ion-strengthened glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Touch ID capacitive home button flex is transferred to new glass assembly. Preserves original factory Apple IPS display.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Glossy glass back',
    modelNumberIdentifiers: ['A2595', 'A2782', 'A2783', 'A2275'],
    identificationGuide: 'Settings > General > About > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Transmission Front Glass with Home Button Alignment Ring',
      fullAssemblyGrade: 'Original Service Pack LCD / High-Gamut Incell LCD'
    },
    benchProtocol: {
      separationMethod: '0.035mm Steel Wire @ 75°C',
      laminationPressure: 'Vacuum Chamber @ 0.35 MPa',
      autoclaveProfile: '4.5 Bar @ 38°C for 8 mins',
      turnaroundEstimate: '1 Hour'
    }
  },

  // ==========================================
  // 2. SAMSUNG GALAXY (Curved & Flat)
  // ==========================================
  {
    id: 'samsung-galaxy-s24-ultra',
    brand: 'Samsung',
    modelName: 'Galaxy S24 Ultra',
    series: 'Galaxy S Series',
    releaseYear: 2024,
    screenType: 'flat',
    displayTechnology: '6.8" Flat Dynamic AMOLED 2X (1-120Hz LTPO, 2600 nits)',
    displayResolution: '3120 x 1440 pixels (QHD+)',
    glassProtection: 'Corning Gorilla Armor (Anti-reflective, scratch-resistant)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Unlike previous Ultra models, S24 Ultra features a flat screen form factor, making glass-only OCA refurbishing significantly safer and more precise. Anti-reflective properties preserved with high-transmission grade glass.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Corning Gorilla Glass Victus 2 satin finish',
    modelNumberIdentifiers: ['SM-S928B', 'SM-S928U', 'SM-S928W'],
    identificationGuide: 'Settings > About Phone > Model name / Model number',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Purity Anti-Reflective Optical Glass with Integrated OCA',
      fullAssemblyGrade: 'Samsung Original Service Pack (Display + Titanium Subframe)'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 80°C with S-Pen digitizer shield',
      laminationPressure: 'Vacuum Chamber @ 0.42 MPa, 40s cycle',
      autoclaveProfile: '5.5 Bar De-bubble @ 40°C for 12 mins',
      turnaroundEstimate: '2.5 Hours'
    }
  },
  {
    id: 'samsung-galaxy-s23-ultra',
    brand: 'Samsung',
    modelName: 'Galaxy S23 Ultra',
    series: 'Galaxy S Series',
    releaseYear: 2023,
    screenType: 'curved',
    displayTechnology: '6.8" Edge QHD+ Dynamic AMOLED 2X (1-120Hz LTPO, 1750 nits)',
    displayResolution: '3088 x 1440 pixels',
    glassProtection: 'Corning Gorilla Glass Victus 2 (3D Curved Lateral Edges)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Requires specialized 3D curved jig and cryogenic (-145°C) or heated contour wire separation. S-Pen digitizer layer must remain completely intact. Feasible if panel has zero pixel bleed.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Corning Gorilla Glass Victus 2 back cover',
    modelNumberIdentifiers: ['SM-S918B', 'SM-S918U', 'SM-S918W'],
    identificationGuide: 'Settings > About phone > Model Number (SM-S918x)',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Curve-Radius Gorilla Glass with Pre-Formed OCA',
      fullAssemblyGrade: 'Samsung Original Service Pack Display Assembly with Frame'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separator (-145°C) or 3D Contour Wire Jig',
      laminationPressure: '3D Airbag Curved Vacuum Press @ 0.45 MPa',
      autoclaveProfile: '5.8 Bar De-bubble @ 42°C for 16 mins',
      turnaroundEstimate: '3.5 to 4.5 Hours'
    }
  },
  {
    id: 'samsung-galaxy-s22-ultra',
    brand: 'Samsung',
    modelName: 'Galaxy S22 Ultra',
    series: 'Galaxy S Series',
    releaseYear: 2022,
    screenType: 'curved',
    displayTechnology: '6.8" Edge QHD+ Dynamic AMOLED 2X (1-120Hz LTPO)',
    displayResolution: '3088 x 1440 pixels',
    glassProtection: 'Corning Gorilla Glass Victus+ (Curved Sides)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      '3D curved edge requires cryogenic freezer chamber or dedicated curve hot-wire separator. Saves up to 60% compared to full service pack.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte Gorilla Glass Victus+',
    modelNumberIdentifiers: ['SM-S908B', 'SM-S908U', 'SM-S908E'],
    identificationGuide: 'Settings > About Phone > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Precision 3D Curved Replacement Glass',
      fullAssemblyGrade: 'Samsung Original Service Pack Assembly'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-145°C)',
      laminationPressure: 'Curved Airbag Press @ 0.44 MPa',
      autoclaveProfile: '5.5 Bar @ 42°C for 15 mins',
      turnaroundEstimate: '3 to 4 Hours'
    }
  },
  {
    id: 'samsung-galaxy-s21-ultra',
    brand: 'Samsung',
    modelName: 'Galaxy S21 Ultra 5G',
    series: 'Galaxy S Series',
    releaseYear: 2021,
    screenType: 'curved',
    displayTechnology: '6.8" Quad HD+ Dynamic AMOLED 2X 120Hz (Curved Edge)',
    displayResolution: '3200 x 1440 pixels',
    glassProtection: 'Corning Gorilla Glass Victus',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Curved edge display. Must be tested for green/white line issues before separation. Retains Wacom S-Pen layer.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Frosted Gorilla Glass Victus back',
    modelNumberIdentifiers: ['SM-G998B', 'SM-G998U', 'SM-G9980'],
    identificationGuide: 'Settings > About Phone > Model number',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM 3D Curved Glass with Mitsubishi OCA',
      fullAssemblyGrade: 'Samsung Original Service Pack'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Separation (-140°C)',
      laminationPressure: 'Curved Vacuum Press @ 0.42 MPa',
      autoclaveProfile: '5.5 Bar @ 40°C for 14 mins',
      turnaroundEstimate: '3 to 4 Hours'
    }
  },
  {
    id: 'samsung-galaxy-s24-s23-flat',
    brand: 'Samsung',
    modelName: 'Galaxy S24 / S24+ / S23 / S23+',
    series: 'Galaxy S Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.1" to 6.7" Flat Dynamic AMOLED 2X (120Hz LTPO)',
    displayResolution: 'FHD+ / QHD+ Dynamic AMOLED 2X',
    glassProtection: 'Corning Gorilla Glass Victus 2 (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat panel geometry allows ultra-clean wire separation. Ultrasonic in-display fingerprint sensor remains 100% calibrated without re-registration glitches.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte frosted Gorilla Glass back',
    modelNumberIdentifiers: ['SM-S921B', 'SM-S926B', 'SM-S911B', 'SM-S916B'],
    identificationGuide: 'Settings > About Phone > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Flat Victus 2 Replacement Glass with OCA',
      fullAssemblyGrade: 'Samsung Original Service Pack Display Assembly'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.2 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'samsung-galaxy-s23-fe',
    brand: 'Samsung',
    modelName: 'Galaxy S23 FE / S21 FE',
    series: 'Galaxy S FE Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.4" Flat Dynamic AMOLED 2X 120Hz',
    displayResolution: '2340 x 1080 pixels (FHD+)',
    glassProtection: 'Corning Gorilla Glass 5 / Victus (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Rigid AMOLED substrate. Fast wire separation with high refurbishing yield. Optical fingerprint sensor retained.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Gorilla Glass 5 back cover',
    modelNumberIdentifiers: ['SM-S711B', 'SM-G990B', 'SM-G990E'],
    identificationGuide: 'Settings > About Phone > Model name',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Hardness Tempered OCA Front Glass',
      fullAssemblyGrade: 'Samsung Original Service Pack AMOLED'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '1.5 to 2 Hours'
    }
  },
  {
    id: 'samsung-galaxy-a55-a54',
    brand: 'Samsung',
    modelName: 'Galaxy A55 5G / A54 5G / A35 5G',
    series: 'Galaxy A Series',
    releaseYear: 2024,
    screenType: 'flat',
    displayTechnology: '6.6" / 6.4" Super AMOLED 120Hz (1000 nits HBM)',
    displayResolution: '2340 x 1080 pixels (FHD+)',
    glassProtection: 'Corning Gorilla Glass Victus+ / Gorilla Glass 5 (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'High-volume repair candidates. Flat Super AMOLED display separates cleanly. In-display optical fingerprint scanner functionality verified on bench.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Gorilla Glass back cover (A55 / A54 / A35)',
    modelNumberIdentifiers: ['SM-A556B', 'SM-A546B', 'SM-A356B'],
    identificationGuide: 'Settings > About phone > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Specification OCA Laminated Glass with Black Border',
      fullAssemblyGrade: 'Samsung Service Pack Super AMOLED Assembly'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '1.5 to 2 Hours'
    }
  },
  {
    id: 'samsung-galaxy-m54-m34-m14',
    brand: 'Samsung',
    modelName: 'Galaxy M54 5G / M34 5G / M14 5G',
    series: 'Galaxy M Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.5" to 6.7" Super AMOLED 120Hz / PLS LCD 90Hz',
    displayResolution: 'FHD+ 1080 x 2400',
    glassProtection: 'Corning Gorilla Glass 5',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'M-series devices use flat Super AMOLED or PLS LCD. For LCD models (M14), low-temperature separation prevents backlight thermal discoloration.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: false,
    rearGlassMaterial: 'Reinforced polycarbonate back panel',
    modelNumberIdentifiers: ['SM-M546B', 'SM-M346B', 'SM-M146B'],
    identificationGuide: 'Settings > About Phone > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Pre-cut Oleophobic Glass with OCA Sheet',
      fullAssemblyGrade: 'Original Service Pack Display Assembly'
    },
    benchProtocol: {
      separationMethod: '0.032mm Steel Wire @ 78°C',
      laminationPressure: 'Vacuum Chamber @ 0.38 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 10 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },
  {
    id: 'samsung-galaxy-z-fold5-flip5',
    brand: 'Samsung',
    modelName: 'Galaxy Z Fold5 / Z Flip5',
    series: 'Galaxy Z Series (Foldables)',
    releaseYear: 2023,
    screenType: 'foldable',
    displayTechnology: '7.6" / 6.7" Foldable Dynamic AMOLED 2X (UTG) + Outer Cover Screen',
    displayResolution: 'QXGA+ Foldable + Dynamic AMOLED Cover',
    glassProtection: 'Ultra Thin Glass (UTG inner) + Gorilla Glass Victus 2 (Outer cover)',
    glassOnlyFeasibility: 'conditional',
    feasibilityTechnicalNotes: 
      'CRITICAL: Inner folding screen uses factory UTG (Ultra Thin Glass) and is NOT candidate for glass-only separation (assembly replacement required). However, OUTER COVER display is flat and 100% eligible for glass-only refurbishing.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Gorilla Glass Victus 2 outer shell',
    modelNumberIdentifiers: ['SM-F946B', 'SM-F731B'],
    identificationGuide: 'Settings > About phone > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Outer Cover Victus 2 Glass with OCA (Outer Display Only)',
      fullAssemblyGrade: 'Samsung Original Service Pack Foldable Assembly with Hinge'
    },
    benchProtocol: {
      separationMethod: 'Outer display: 0.028mm Wire @ 80°C. Inner screen: Full service pack swap.',
      laminationPressure: 'Outer cover vacuum press @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: 'Outer: 2 Hours | Inner Foldable: 4 Hours'
    }
  },

  // ==========================================
  // 3. ONEPLUS (Flagships, Nord, R Series)
  // ==========================================
  {
    id: 'oneplus-12',
    brand: 'OnePlus',
    modelName: 'OnePlus 12',
    series: 'Numbered Flagships',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.82" 3D Curved 2K ProXDR LTPO AMOLED (1-120Hz, 4500 nits peak)',
    displayResolution: '3168 x 1440 pixels',
    glassProtection: 'Corning Gorilla Glass Victus 2 (Lateral Curved Edges)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flagship 3D curved BOE X1 panel. Glass-only replacement requires precision curved alignment mold and cryogenic/hot-wire separation. Saves considerable cost over full frame combo.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Silk Glass / Emerald Green Ceramic Glass finish',
    modelNumberIdentifiers: ['CPH2581', 'CPH2573', 'CPH2583'],
    identificationGuide: 'Settings > About device > Model name / CPH number',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Radius 3D Curved Victus 2 Replacement Glass with OCA',
      fullAssemblyGrade: 'Original Service Pack ProXDR AMOLED Assembly'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-145°C) or 3D Contour Wire',
      laminationPressure: '3D Airbag Curved Vacuum Laminator @ 0.44 MPa',
      autoclaveProfile: '5.6 Bar @ 42°C for 15 mins',
      turnaroundEstimate: '3.5 Hours'
    }
  },
  {
    id: 'oneplus-12r',
    brand: 'OnePlus',
    modelName: 'OnePlus 12R / 11R',
    series: 'R Series',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.78" 1.5K 3D Curved Super Fluid AMOLED (120Hz LTPO4)',
    displayResolution: '2780 x 1264 pixels (1.5K)',
    glassProtection: 'Corning Gorilla Glass Victus 2 (12R) / Dragontrail (11R)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      '3D curved edge screen. If AMOLED has no green/pink lines, glass-only refurbishing retains the original factory high-frequency PWM dimming panel.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte frosted rear glass',
    modelNumberIdentifiers: ['CPH2609', 'CPH2611', 'CPH2487'],
    identificationGuide: 'Settings > About device > Model (CPH2609)',
    recommendedPartGrades: {
      glassOnlyGrade: '3D Curved High-Toughness Glass with Optical Adhesive',
      fullAssemblyGrade: 'Original Service Pack 1.5K Curved AMOLED'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-140°C)',
      laminationPressure: 'Curved Vacuum Press @ 0.42 MPa',
      autoclaveProfile: '5.5 Bar @ 40°C for 14 mins',
      turnaroundEstimate: '3 to 3.5 Hours'
    }
  },
  {
    id: 'oneplus-11-5g',
    brand: 'OnePlus',
    modelName: 'OnePlus 11 5G / 10 Pro',
    series: 'Numbered Flagships',
    releaseYear: 2023,
    screenType: 'curved',
    displayTechnology: '6.7" QHD+ 3D Curved Fluid AMOLED (LTPO3 120Hz)',
    displayResolution: '3216 x 1440 pixels',
    glassProtection: 'Corning Gorilla Glass Victus',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Curved edge AMOLED. We perform full diagnostic sweep to verify touch continuity and optical in-display sensor prior to glass separation.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Gorilla Glass 5 / Matte back glass',
    modelNumberIdentifiers: ['CPH2449', 'CPH2447', 'NE2210'],
    identificationGuide: 'Settings > About device > Model number',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM 3D Curved Front Glass with Pre-Cut OCA',
      fullAssemblyGrade: 'Original Service Pack Curved AMOLED Assembly'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freezer (-145°C)',
      laminationPressure: '3D Airbag Laminator @ 0.44 MPa',
      autoclaveProfile: '5.5 Bar @ 40°C for 14 mins',
      turnaroundEstimate: '3 Hours'
    }
  },
  {
    id: 'oneplus-nord-3',
    brand: 'OnePlus',
    modelName: 'OnePlus Nord 3 5G / Nord CE 4 5G',
    series: 'Nord Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.74" Flat 1.5K Super Fluid AMOLED (120Hz)',
    displayResolution: '2772 x 1240 pixels',
    glassProtection: 'Dragontrail Glass / Panda Glass (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat screen design with no plastic screen bracket underneath glass. High-speed wire separation with pristine optical result.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Glossy / Matte rear cover',
    modelNumberIdentifiers: ['CPH2493', 'CPH2491', 'CPH2613'],
    identificationGuide: 'Settings > About Device > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Flat High-Impact Front Glass with OCA Sheet',
      fullAssemblyGrade: 'Original Service Pack 1.5K AMOLED Display'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '1.5 to 2 Hours'
    }
  },
  {
    id: 'oneplus-nord-ce3-lite',
    brand: 'OnePlus',
    modelName: 'OnePlus Nord CE 3 Lite 5G',
    series: 'Nord Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.72" Flat 120Hz IPS LCD Display',
    displayResolution: '2400 x 1080 pixels (FHD+)',
    glassProtection: 'Corning Gorilla Glass (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'IPS LCD panel. Requires careful solvent-free cleaning along perimeter to prevent fluid migration into backlight diffusor sheets.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: false,
    rearGlassMaterial: 'Polycarbonate composite rear panel',
    modelNumberIdentifiers: ['CPH2467', 'CPH2465'],
    identificationGuide: 'Settings > About Device > Model (CPH2467)',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Transmission IPS Front Glass with Polarizer',
      fullAssemblyGrade: 'Original Service Pack LCD Assembly'
    },
    benchProtocol: {
      separationMethod: '0.032mm Steel Wire Separation @ 75°C',
      laminationPressure: 'Vacuum Chamber @ 0.35 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 8 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },

  // ==========================================
  // 4. XIAOMI & REDMI
  // ==========================================
  {
    id: 'xiaomi-14-ultra',
    brand: 'Xiaomi',
    modelName: 'Xiaomi 14 Ultra / 14',
    series: 'Xiaomi Flagships',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.73" All-Around Liquid Curved C8 LTPO OLED (120Hz, 3000 nits)',
    displayResolution: '3200 x 1440 pixels (WQHD+)',
    glassProtection: 'Xiaomi Shield Glass (14 Ultra) / Gorilla Glass Victus (14)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      '14 Ultra features an innovative All-Around Liquid Curve panel with subtle quad-curved bezels. Glass-only requires specialized multi-curve mold.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Eco-leather / Nano-tech ceramic glass',
    modelNumberIdentifiers: ['24030PN60G', '23127PN0CG'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Purity Quad-Curved Optical Glass with OCA',
      fullAssemblyGrade: 'Original Service Pack C8 LTPO OLED Assembly'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-145°C) or 3D Contour Wire',
      laminationPressure: '3D Airbag Curved Laminator @ 0.44 MPa',
      autoclaveProfile: '5.5 Bar @ 42°C for 14 mins',
      turnaroundEstimate: '3.5 Hours'
    }
  },
  {
    id: 'redmi-note-13-pro-plus',
    brand: 'Xiaomi',
    modelName: 'Redmi Note 13 Pro+ 5G',
    series: 'Redmi Note Series',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.67" 3D Curved 1.5K CrystalRes AMOLED (120Hz, 1800 nits)',
    displayResolution: '2712 x 1220 pixels (1.5K)',
    glassProtection: 'Corning Gorilla Glass Victus (3D Curved)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'First Redmi Note series phone with 3D curved AMOLED screen. Glass-only replacement saves substantial repair cost compared to full service center folder swap.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Curved glass back / Vegan leather option',
    modelNumberIdentifiers: ['23090RA98G', '23090RA98I'],
    identificationGuide: 'Settings > About phone > Model Number (23090RA98I)',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Radius 3D Curved Glass with Optical Clear Adhesive',
      fullAssemblyGrade: 'Original Service Pack 1.5K Curved AMOLED'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-140°C)',
      laminationPressure: 'Curved Vacuum Press @ 0.42 MPa',
      autoclaveProfile: '5.5 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '3 Hours'
    }
  },
  {
    id: 'redmi-note-13-pro',
    brand: 'Xiaomi',
    modelName: 'Redmi Note 13 Pro 5G / Note 12 Pro+ 5G',
    series: 'Redmi Note Series',
    releaseYear: 2024,
    screenType: 'flat',
    displayTechnology: '6.67" Flat 1.5K AMOLED (120Hz Dolby Vision)',
    displayResolution: '2712 x 1220 pixels',
    glassProtection: 'Corning Gorilla Glass Victus (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat panel design. Fast wire separation with high yield. In-display optical fingerprint calibration verified on bench.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Frosted AG glass back cover',
    modelNumberIdentifiers: ['2312DRA50G', '2312DRA50I', '22101316UG'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Flat Victus Glass with Oleophobic Coating',
      fullAssemblyGrade: 'Original Service Pack 1.5K AMOLED Assembly'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '1.5 to 2 Hours'
    }
  },
  {
    id: 'redmi-13c-12-5g',
    brand: 'Xiaomi',
    modelName: 'Redmi 13C 5G / Redmi 12 5G',
    series: 'Redmi Number Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.74" / 6.79" Flat 90Hz IPS LCD',
    displayResolution: 'HD+ / FHD+ 1080 x 2460',
    glassProtection: 'Corning Gorilla Glass 3',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'High-volume daily driver models. Low-heat separation prevents LCD backlight discoloration or yellow halos.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Glass back (Redmi 12) / Polycarbonate (13C)',
    modelNumberIdentifiers: ['23124RN87G', '23076RN4BI'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Pre-cut Front Glass with Mitsubishi OCA Sheet',
      fullAssemblyGrade: 'Original Service Pack LCD Assembly'
    },
    benchProtocol: {
      separationMethod: '0.032mm Steel Wire @ 75°C',
      laminationPressure: 'Vacuum Chamber @ 0.35 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 8 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },

  // ==========================================
  // 5. VIVO (X, V, Y, T Series)
  // ==========================================
  {
    id: 'vivo-x100-pro',
    brand: 'vivo',
    modelName: 'vivo X100 Pro / X90 Pro',
    series: 'X Series (Flagship)',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.78" 3D Curved 1.5K 8T LTPO AMOLED (1-120Hz, 3000 nits)',
    displayResolution: '2800 x 1260 pixels',
    glassProtection: 'Corning Gorilla Glass Victus / Schott Xensation Up (Curved)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'ZEISS calibrated flagship curved screen. Glass-only preserves factory color gamut and 2160Hz high-frequency PWM eye-care dimming.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Sunburst textured glass / Fluorite AG glass',
    modelNumberIdentifiers: ['V2309', 'V2324A', 'V2241A'],
    identificationGuide: 'Settings > About phone > Model number (V2309)',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Radius 3D Curved Replacement Glass with OCA',
      fullAssemblyGrade: 'Original Service Pack 8T LTPO Curved AMOLED'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-145°C)',
      laminationPressure: '3D Airbag Curved Laminator @ 0.44 MPa',
      autoclaveProfile: '5.6 Bar @ 42°C for 15 mins',
      turnaroundEstimate: '3.5 Hours'
    }
  },
  {
    id: 'vivo-v30-pro-v29-pro',
    brand: 'vivo',
    modelName: 'vivo V30 Pro / V29 Pro / V27 Pro',
    series: 'V Series (Curved & Slim)',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.78" 3D Curved 1.5K AMOLED (120Hz, 2800 nits HDR)',
    displayResolution: '2800 x 1260 pixels',
    glassProtection: 'Schott α (Alpha) / Gorilla Glass 3D Curved',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Extremely popular curved models in Bengaluru. Thin chassis requires gentle heated mold detachment to avoid lateral panel cracking.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: '3D Particle glass / Color-changing Fluorite AG glass',
    modelNumberIdentifiers: ['V2319', 'V2251', 'V2246'],
    identificationGuide: 'Settings > About phone > Model (e.g. V2319)',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Precision 3D Curved Glass with Beveled Edges',
      fullAssemblyGrade: 'Original Service Pack 1.5K Curved AMOLED'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freezer (-140°C) or 3D Contour Wire',
      laminationPressure: 'Curved Vacuum Press @ 0.42 MPa',
      autoclaveProfile: '5.4 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '3 Hours'
    }
  },
  {
    id: 'vivo-t3-t2-pro',
    brand: 'vivo',
    modelName: 'vivo T3 5G / T2 Pro 5G',
    series: 'T Series',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.78" 3D Curved AMOLED (T2 Pro) / 6.67" Flat 120Hz AMOLED (T3)',
    displayResolution: '2400 x 1080 (FHD+)',
    glassProtection: 'Schott Xensation Up (Curved) / Dragontrail (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'T2 Pro uses 3D curved screen (cryogenic bench); T3 5G uses flat AMOLED (wire hot-bed). Both deliver excellent glass-only results.',
    applicableServices: ['front-glass-curved', 'front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Glass back (T2 Pro) / Plastic (T3)',
    modelNumberIdentifiers: ['V2334', 'V2321'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Model-Specific OCA Front Glass',
      fullAssemblyGrade: 'Original Service Pack AMOLED Display Assembly'
    },
    benchProtocol: {
      separationMethod: 'Curved: Cryo (-140°C) | Flat: 0.028mm Wire @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '2 to 3 Hours'
    }
  },
  {
    id: 'vivo-y200-y56',
    brand: 'vivo',
    modelName: 'vivo Y200 5G / Y56 5G',
    series: 'Y Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.67" Flat 120Hz AMOLED (Y200) / 6.58" FHD+ IPS LCD (Y56)',
    displayResolution: '2400 x 1080 pixels',
    glassProtection: 'Panda Glass / Toughened Glass (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat panel construction. Clean wire separation with fast turnaround. Retains factory display vibrancy.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: false,
    rearGlassMaterial: 'Composite plastic back panel',
    modelNumberIdentifiers: ['V2307', 'V2230'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Flat Replacement Glass with OCA Adhesive',
      fullAssemblyGrade: 'Original Service Pack Display Assembly'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 78°C',
      laminationPressure: 'Vacuum Chamber @ 0.38 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 10 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },

  // ==========================================
  // 6. OPPO (Find, Reno, A Series)
  // ==========================================
  {
    id: 'oppo-reno-11-pro-10-pro',
    brand: 'OPPO',
    modelName: 'OPPO Reno 11 Pro 5G / Reno 10 Pro+ 5G',
    series: 'Reno Series',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.74" 3D Curved 1.5K AMOLED (120Hz, 10-bit Color)',
    displayResolution: '2772 x 1240 pixels (1.5K)',
    glassProtection: 'Asahi AGC Dragontrail Star 2 / Gorilla Glass 5 (3D Curved)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      '3D dual-curved edges. Preserves factory 10-bit HDR10+ color calibration and optical in-display biometric sensor.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: '3D Curved glass back (Pearl White / Rock Grey)',
    modelNumberIdentifiers: ['CPH2607', 'CPH2521', 'CPH2525'],
    identificationGuide: 'Settings > About phone > Model (CPH number)',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM 3D Curved Replacement Glass with Pre-Applied OCA',
      fullAssemblyGrade: 'Original Service Pack 1.5K Curved AMOLED'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-140°C)',
      laminationPressure: '3D Airbag Laminator @ 0.42 MPa',
      autoclaveProfile: '5.5 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '3 Hours'
    }
  },
  {
    id: 'oppo-find-x5-pro',
    brand: 'OPPO',
    modelName: 'OPPO Find X5 Pro',
    series: 'Find Series (Flagship)',
    releaseYear: 2022,
    screenType: 'curved',
    displayTechnology: '6.7" QHD+ 3D Curved LTPO2 AMOLED (1-120Hz, 1300 nits)',
    displayResolution: '3216 x 1440 pixels',
    glassProtection: 'Corning Gorilla Glass Victus (3D Curved)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Ceramic rear unibody requires specialized suction heating plate. Front curved panel is refurbished via cryogenic freeze separation.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Micro-crystalline ceramic back housing',
    modelNumberIdentifiers: ['CPH2305', 'PFEM10'],
    identificationGuide: 'Settings > About phone > Model Number',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Specification 3D Curved Victus Glass',
      fullAssemblyGrade: 'Original Service Pack LTPO AMOLED Assembly'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-145°C)',
      laminationPressure: 'Curved Vacuum Press @ 0.44 MPa',
      autoclaveProfile: '5.6 Bar @ 42°C for 15 mins',
      turnaroundEstimate: '3.5 Hours'
    }
  },
  {
    id: 'oppo-a78-a58',
    brand: 'OPPO',
    modelName: 'OPPO A78 5G / A58 4G',
    series: 'A Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.56" Flat 90Hz IPS LCD / 6.72" FHD+ Sunlight Display',
    displayResolution: 'HD+ / FHD+ 1080 x 2400',
    glassProtection: 'Panda MN228 Toughened Glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat screen LCD construction. Low-temperature heating plate preserves backlight brightness and polarizer layer.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: false,
    rearGlassMaterial: 'Composite polycarbonate panel',
    modelNumberIdentifiers: ['CPH2483', 'CPH2577'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Flat Replacement Glass with Pre-Cut OCA',
      fullAssemblyGrade: 'Original Service Pack LCD Assembly'
    },
    benchProtocol: {
      separationMethod: '0.032mm Steel Wire Separation @ 75°C',
      laminationPressure: 'Vacuum Chamber @ 0.35 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 8 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },

  // ==========================================
  // 7. REALME (GT, Number, Narzo, C Series)
  // ==========================================
  {
    id: 'realme-gt-6-neo3',
    brand: 'realme',
    modelName: 'realme GT 6 / GT Neo 3',
    series: 'GT Series (Flagship)',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.78" 3D Curved 1.5K 8T LTPO AMOLED (6000 nits peak) / 6.7" Flat AMOLED',
    displayResolution: '2780 x 1264 pixels (GT 6)',
    glassProtection: 'Corning Gorilla Glass Victus 2 (GT 6 3D Curved)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'GT 6 features record 6000-nit 8T LTPO curved panel. Glass-only refurbishing protects customer from exorbitant official folder replacement costs.',
    applicableServices: ['front-glass-curved', 'front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Mirror-finish AG glass back',
    modelNumberIdentifiers: ['RMX3851', 'RMX3561'],
    identificationGuide: 'Settings > About device > Model (RMX3851)',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM 3D Curved Victus 2 Replacement Glass with OCA',
      fullAssemblyGrade: 'Original Service Pack 8T LTPO AMOLED'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-145°C)',
      laminationPressure: 'Curved Vacuum Press @ 0.44 MPa',
      autoclaveProfile: '5.5 Bar @ 42°C for 14 mins',
      turnaroundEstimate: '3 Hours'
    }
  },
  {
    id: 'realme-12-pro-plus-11-pro',
    brand: 'realme',
    modelName: 'realme 12 Pro+ 5G / 11 Pro+ 5G',
    series: 'Number Series',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.7" 3D Curved 120Hz Vision AMOLED (2160Hz PWM)',
    displayResolution: '2412 x 1080 pixels (FHD+)',
    glassProtection: '0.65mm Double-Reinforced Curved Glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'High-runner model across Bengaluru. 61° precision curved edge. Glass-only refurbishing has high yield when touch digitizer has no dead spots.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Luxury watch-inspired vegan leather / glass back',
    modelNumberIdentifiers: ['RMX3840', 'RMX3741'],
    identificationGuide: 'Settings > About device > Model (RMX3840)',
    recommendedPartGrades: {
      glassOnlyGrade: '61-Degree Precision Curved Replacement Glass',
      fullAssemblyGrade: 'Original Service Pack Curved AMOLED'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freezer (-140°C) or 3D Contour Wire',
      laminationPressure: 'Curved Vacuum Press @ 0.42 MPa',
      autoclaveProfile: '5.4 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '2.5 to 3 Hours'
    }
  },
  {
    id: 'realme-narzo-60-pro-70-pro',
    brand: 'realme',
    modelName: 'realme Narzo 60 Pro 5G / Narzo 70 Pro 5G',
    series: 'Narzo Series',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.7" 3D Curved 120Hz AMOLED (60 Pro) / 6.67" Flat 120Hz AMOLED (70 Pro)',
    displayResolution: 'FHD+ 2412 x 1080',
    glassProtection: 'Double-Reinforced Curved Glass / AGC Glass (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Narzo 60 Pro uses curved glass (cryo process); Narzo 70 Pro uses flat AMOLED (wire separator). Both keep original AMOLED colors intact.',
    applicableServices: ['front-glass-curved', 'front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Vegan leather / Glossy glass back',
    modelNumberIdentifiers: ['RMX3771', 'RMX3868'],
    identificationGuide: 'Settings > About device > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Model-Specific OCA Front Glass',
      fullAssemblyGrade: 'Original Service Pack AMOLED Display Assembly'
    },
    benchProtocol: {
      separationMethod: 'Cryo (-140°C) for 60 Pro | 0.028mm Wire for 70 Pro',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '2 to 3 Hours'
    }
  },
  {
    id: 'realme-c67-c55',
    brand: 'realme',
    modelName: 'realme C67 5G / realme C55',
    series: 'C Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.72" Flat 90Hz / 120Hz FHD+ IPS LCD',
    displayResolution: '2400 x 1080 pixels',
    glassProtection: 'Panda Toughened Glass',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat IPS LCD screen. Preserves factory backlight matrix without yellow thermal patches when separated at 75°C.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: false,
    rearGlassMaterial: 'Composite polymer rear cover',
    modelNumberIdentifiers: ['RMX3782', 'RMX3710'],
    identificationGuide: 'Settings > About device > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Pre-cut Oleophobic Glass with OCA Sheet',
      fullAssemblyGrade: 'Original Service Pack LCD Assembly'
    },
    benchProtocol: {
      separationMethod: '0.032mm Steel Wire @ 75°C',
      laminationPressure: 'Vacuum Chamber @ 0.35 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 8 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },

  // ==========================================
  // 8. OTHER ANDROID BRANDS: PIXEL, MOTOROLA, NOTHING, IQOO
  // ==========================================
  {
    id: 'google-pixel-8-pro',
    brand: 'Google Pixel',
    modelName: 'Google Pixel 8 Pro',
    series: 'Pixel Flagships',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.7" Super Actua Flat LTPO OLED (1-120Hz, 2400 nits)',
    displayResolution: '2992 x 1344 pixels',
    glassProtection: 'Corning Gorilla Glass Victus 2 (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Google shifted to a flat screen design for Pixel 8 Pro, dramatically increasing glass-only success rates. Under-display optical fingerprint scanner calibration runs through Google service tool.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Matte frosted Gorilla Glass Victus 2 with camera visor',
    modelNumberIdentifiers: ['GC3VE', 'G1MNW'],
    identificationGuide: 'Settings > About phone > Regulatory labels / Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Transmission Flat Victus 2 Replacement Glass with OCA',
      fullAssemblyGrade: 'Original Google Service Pack Super Actua OLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.42 MPa',
      autoclaveProfile: '5.2 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '2.5 Hours'
    }
  },
  {
    id: 'google-pixel-7-pro',
    brand: 'Google Pixel',
    modelName: 'Google Pixel 7 Pro',
    series: 'Pixel Flagships',
    releaseYear: 2022,
    screenType: 'curved',
    displayTechnology: '6.7" Micro-Curved LTPO AMOLED 120Hz',
    displayResolution: '3120 x 1440 pixels (QHD+)',
    glassProtection: 'Corning Gorilla Glass Victus (Subtle Curved Edges)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Subtle 2.5D/3D curved edge. Cryogenic or specialized contour wire prevents stress cracks along edge bezels. Fingerprint calibration software verified.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Gorilla Glass Victus back with metal camera bar',
    modelNumberIdentifiers: ['GP4BC', 'GE2AE'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Subtle-Curve Replacement Glass with OCA',
      fullAssemblyGrade: 'Original Google Service Pack OLED Assembly'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-140°C)',
      laminationPressure: 'Curved Vacuum Press @ 0.42 MPa',
      autoclaveProfile: '5.5 Bar @ 40°C for 14 mins',
      turnaroundEstimate: '3 Hours'
    }
  },
  {
    id: 'google-pixel-8-7-7a-6a',
    brand: 'Google Pixel',
    modelName: 'Google Pixel 8 / 7 / 7a / 6a',
    series: 'Pixel Mid-Range & Standard',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.1" to 6.3" Flat OLED (90Hz / 120Hz Actua)',
    displayResolution: 'FHD+ 1080 x 2400',
    glassProtection: 'Corning Gorilla Glass Victus (8/7) / Gorilla Glass 3 (7a/6a)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat OLED displays. Very high glass refurbishing success rate. Fingerprint sensor re-calibrated using official web-based Google pixelrepair tool.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Gorilla Glass (8/7) / 3D Thermoformed Composite (7a/6a)',
    modelNumberIdentifiers: ['G9BQD', 'GVU6C', 'GHL1X', 'GX7AS'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original Flat Replacement Glass with Mitsubishi OCA',
      fullAssemblyGrade: 'Original Service Pack OLED Assembly'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 78°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'motorola-edge-50-pro-40',
    brand: 'Motorola',
    modelName: 'Motorola Edge 50 Pro / Edge 40',
    series: 'Edge Series',
    releaseYear: 2024,
    screenType: 'curved',
    displayTechnology: '6.7" / 6.55" 3D Quad-Curved 1.5K 144Hz pOLED',
    displayResolution: '2712 x 1220 pixels (Edge 50 Pro)',
    glassProtection: 'Corning Gorilla Glass Victus / NEG Glass (3D Curved)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Curved plastic-OLED (pOLED) flexible substrate. High resilience to wire separation when frozen (-140°C). Preserves Pantone validated colors.',
    applicableServices: ['front-glass-curved', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Vegan leather / Acrylic pearl finish',
    modelNumberIdentifiers: ['XT2403-1', 'XT2303-2'],
    identificationGuide: 'Settings > About phone > Model (XT number)',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM 3D Quad-Curved Glass with Optical Adhesive',
      fullAssemblyGrade: 'Original Service Pack 144Hz pOLED Assembly'
    },
    benchProtocol: {
      separationMethod: 'Cryogenic Freeze Separation (-140°C)',
      laminationPressure: 'Curved Vacuum Press @ 0.42 MPa',
      autoclaveProfile: '5.5 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '3 Hours'
    }
  },
  {
    id: 'motorola-moto-g84-g54',
    brand: 'Motorola',
    modelName: 'Moto G84 5G / Moto G54 5G',
    series: 'G Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.55" Flat 120Hz pOLED (G84) / 6.5" 120Hz IPS LCD (G54)',
    displayResolution: 'FHD+ 1080 x 2400',
    glassProtection: 'Panda Glass / Gorilla Glass (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat screens. G84 pOLED separates smoothly with hot wire; G54 LCD requires low thermal setting (75°C) for backlight preservation.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: false,
    rearGlassMaterial: 'Vegan leather / PMMA acrylic plastic',
    modelNumberIdentifiers: ['XT2347-2', 'XT2343-1'],
    identificationGuide: 'Settings > About phone > Model (XT number)',
    recommendedPartGrades: {
      glassOnlyGrade: 'Flat Replacement Glass with OCA Sheet',
      fullAssemblyGrade: 'Original Service Pack Display Assembly'
    },
    benchProtocol: {
      separationMethod: '0.030mm Steel Wire @ 78°C',
      laminationPressure: 'Vacuum Chamber @ 0.38 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 10 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  },
  {
    id: 'nothing-phone-2',
    brand: 'Nothing',
    modelName: 'Nothing Phone (2)',
    series: 'Flagship Series',
    releaseYear: 2023,
    screenType: 'flat',
    displayTechnology: '6.7" Flexible LTPO OLED (1-120Hz, 1600 nits, Symmetric Bezels)',
    displayResolution: '2412 x 1080 pixels (FHD+)',
    glassProtection: 'Corning Gorilla Glass 5 (2.5D Curved Perimeter)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Ultra-thin uniform 4-sided bezels. Flat flexible OLED substrate is ideally suited for wire separation. Back glass replacement requires gentle ungluing around Glyph LED light strips.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Curved transparent Gorilla Glass 5 with Glyph Interface lighting',
    modelNumberIdentifiers: ['AIN065'],
    identificationGuide: 'Settings > About phone > Model (AIN065)',
    recommendedPartGrades: {
      glassOnlyGrade: 'OEM Spec Symmetric Bezel Front Glass with High-Transmittance OCA',
      fullAssemblyGrade: 'Original Service Pack LTPO Flexible OLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.2 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '2 to 2.5 Hours'
    }
  },
  {
    id: 'nothing-phone-2a-1',
    brand: 'Nothing',
    modelName: 'Nothing Phone (2a) / Phone (1)',
    series: 'Mid-Range & Generation 1',
    releaseYear: 2024,
    screenType: 'flat',
    displayTechnology: '6.7" / 6.55" Flexible AMOLED (120Hz, Symmetric Bezels)',
    displayResolution: '2412 x 1080 pixels',
    glassProtection: 'Corning Gorilla Glass 5 (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'High success rate for glass-only repair. Symmetrical border alignment mold utilized. Glyph LEDs checked after back service.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Transparent glass (Phone 1) / Polycarbonate composite (Phone 2a)',
    modelNumberIdentifiers: ['A142', 'A063'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'High-Impact Front Glass with OCA',
      fullAssemblyGrade: 'Original Service Pack Flexible AMOLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.40 MPa',
      autoclaveProfile: '5.0 Bar @ 40°C for 10 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'iqoo-12-neo9-pro',
    brand: 'iQOO',
    modelName: 'iQOO 12 5G / iQOO Neo 9 Pro',
    series: 'Performance Series',
    releaseYear: 2024,
    screenType: 'flat',
    displayTechnology: '6.78" Flat 144Hz 1.5K LTPO AMOLED (3000 nits peak)',
    displayResolution: '2800 x 1260 pixels (1.5K)',
    glassProtection: 'Double-reinforced glass / Schott Xensation Up (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Ultra-high 144Hz refresh rate gaming display. Flat screen allows precision wire separation. 100% preserves 2000Hz instant touch sampling rate.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis', 'rear-glass'],
    rearGlassAvailable: true,
    rearGlassMaterial: 'Fluorite AG glass back with BMW Motorsport / Legend tricolor',
    modelNumberIdentifiers: ['I2220', 'I2301'],
    identificationGuide: 'Settings > About phone > Model',
    recommendedPartGrades: {
      glassOnlyGrade: 'Original 144Hz Gaming Glass with Ultra-Smooth Oleophobic Coating',
      fullAssemblyGrade: 'Original Service Pack 144Hz LTPO AMOLED'
    },
    benchProtocol: {
      separationMethod: '0.028mm Tungsten Wire Hot-Bed @ 80°C',
      laminationPressure: 'Vacuum Chamber @ 0.42 MPa',
      autoclaveProfile: '5.2 Bar @ 40°C for 12 mins',
      turnaroundEstimate: '2 Hours'
    }
  },
  {
    id: 'iqoo-z9-5g',
    brand: 'iQOO',
    modelName: 'iQOO Z9 5G',
    series: 'Z Series',
    releaseYear: 2024,
    screenType: 'flat',
    displayTechnology: '6.67" Flat 120Hz Ultra Vision AMOLED (1800 nits)',
    displayResolution: '2400 x 1080 pixels (FHD+)',
    glassProtection: 'Asahi Dragontrail Star 2 (Flat)',
    glassOnlyFeasibility: 'eligible',
    feasibilityTechnicalNotes: 
      'Flat AMOLED display. Fast turnaround with wire hot-bed separator. Optical fingerprint scanner tested after bonding.',
    applicableServices: ['front-glass-flat', 'display-assembly', 'touch-diagnosis'],
    rearGlassAvailable: false,
    rearGlassMaterial: 'Composite brushed back cover',
    modelNumberIdentifiers: ['I2302'],
    identificationGuide: 'Settings > About phone > Model (I2302)',
    recommendedPartGrades: {
      glassOnlyGrade: 'Flat Replacement Glass with OCA Sheet',
      fullAssemblyGrade: 'Original Service Pack AMOLED Assembly'
    },
    benchProtocol: {
      separationMethod: '0.030mm Wire Separation @ 78°C',
      laminationPressure: 'Vacuum Chamber @ 0.38 MPa',
      autoclaveProfile: '4.8 Bar @ 38°C for 10 mins',
      turnaroundEstimate: '1.5 Hours'
    }
  }
];

export const BRAND_GROUPS = [
  'All Brands',
  'Apple',
  'Samsung',
  'OnePlus',
  'Xiaomi',
  'vivo',
  'OPPO',
  'realme',
  'Google Pixel',
  'Motorola',
  'Nothing',
  'iQOO'
] as const;

export const SCREEN_TYPE_OPTIONS = [
  { value: 'all', label: 'All Screen Types' },
  { value: 'flat', label: 'Flat Screen' },
  { value: 'curved', label: '3D Curved Edge' },
  { value: 'foldable', label: 'Foldable (Inner/Cover)' }
] as const;

export const REPAIR_CATEGORY_OPTIONS = [
  { value: 'all', label: 'All Repair Categories' },
  { value: 'front-glass-flat', label: 'Front Glass (Flat)' },
  { value: 'front-glass-curved', label: 'Curved Glass Refurbishing' },
  { value: 'display-assembly', label: 'Complete Display Assembly' },
  { value: 'touch-diagnosis', label: 'Touch & Circuit Diagnosis' },
  { value: 'rear-glass', label: 'Rear Glass & Housing' }
] as const;
