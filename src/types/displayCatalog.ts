export type ScreenFormFactor = 'flat' | 'curved' | 'foldable';

export type RepairCategory = 
  | 'front-glass-flat' 
  | 'front-glass-curved' 
  | 'display-assembly' 
  | 'touch-diagnosis' 
  | 'rear-glass';

export type GlassFeasibility = 'eligible' | 'conditional' | 'assembly-only';

export interface DisplayDeviceModel {
  id: string;
  brand: 
    | 'Apple' 
    | 'Samsung' 
    | 'OnePlus' 
    | 'Xiaomi' 
    | 'vivo' 
    | 'OPPO' 
    | 'realme' 
    | 'Google Pixel' 
    | 'Motorola' 
    | 'Nothing' 
    | 'iQOO';
  modelName: string;
  series: string;
  releaseYear: number;
  screenType: ScreenFormFactor;
  displayTechnology: string; // e.g. "6.8\" Dynamic AMOLED 2X, 120Hz LTPO"
  displayResolution: string; // e.g. "3088 x 1440 (QHD+)"
  glassProtection: string; // e.g. "Corning Gorilla Glass Victus 2"
  glassOnlyFeasibility: GlassFeasibility;
  feasibilityTechnicalNotes: string;
  applicableServices: RepairCategory[];
  rearGlassAvailable: boolean;
  rearGlassMaterial?: string; // e.g. "Ceramic / Matte Frosted Glass"
  modelNumberIdentifiers: string[]; // e.g. ["SM-S918B", "SM-S918U"]
  identificationGuide: string; // e.g. "Settings > About Phone > Model Number"
  recommendedPartGrades: {
    glassOnlyGrade: string; // e.g. "High-Grade Pre-Cut Oleophobic OCA Glass"
    fullAssemblyGrade: string; // e.g. "Original Service Center Pack OLED / Premium Soft OLED"
  };
  benchProtocol: {
    separationMethod: string; // e.g. "0.028mm Tungsten Wire Hot-Bed (82°C)" or "Cryogenic Freeze Separator (-150°C)"
    laminationPressure: string; // e.g. "OCA Vacuum Laminator @ 0.45 MPa, 45s cycle"
    autoclaveProfile: string; // e.g. "5.5 Bar De-bubble Chamber @ 40°C for 12 mins"
    turnaroundEstimate: string; // e.g. "2 to 3 Hours"
  };
}

export interface ServiceCategoryDetail {
  category: RepairCategory;
  title: string;
  subtitle: string;
  description: string;
  keyRequirements: string[];
  equipmentUsed: string[];
  idealCandidate: string;
}
