export type DeviceCategory = 'all' | 'smartphones' | 'laptops';

export type ConditionGrade = 'pristine' | 'excellent' | 'good';

export interface InspectionPoint {
  component: string;
  testMethod: string;
  status: 'passed' | 'benchmark';
  metric: string;
}

export interface DeviceItem {
  id: string;
  category: 'smartphones' | 'laptops';
  name: string;
  brand: string;
  modelYear: number;
  indicativePriceInr: number;
  originalEstimatedMrpInr: number;
  conditionGrade: ConditionGrade;
  conditionDescription: string;
  storage: string;
  ram: string;
  processor: string;
  display: string;
  batteryHealthPercent: number;
  cycleCount?: number;
  imeiStatus: 'Clean & Verified';
  inspectionPoints: InspectionPoint[];
  color: string;
  physicalLocation: string; // "Bengaluru Hub Walk-in Stock"
  featured?: boolean;
}

export interface RepairServiceItem {
  id: string;
  category: 'mobile' | 'laptop';
  serviceName: string;
  commonSymptoms: string[];
  indicativeCostRange: string;
  standardTurnaround: string;
  procedureDetails: string[];
  partsGrade: string;
}

export interface AccessoryItem {
  id: string;
  name: string;
  category: 'charging' | 'cables' | 'protection' | 'ergonomics';
  targetDevice: 'smartphones' | 'laptops' | 'universal';
  indicativePriceInr: number;
  keySpecs: string[];
  materials: string;
  badge?: string;
}

export interface DiagnosticOption {
  deviceType: 'mobile' | 'laptop';
  brand: string;
  models: string[];
  commonIssues: {
    issueKey: string;
    label: string;
    symptomDesc: string;
    estimatedCostRangeInr: string;
    turnaround: string;
    inspectionProtocol: string;
  }[];
}

export interface TradeInOption {
  deviceType: 'mobile' | 'laptop';
  brand: string;
  model: string;
  baseValuationInr: number;
  conditionMultipliers: {
    pristine: number;
    excellent: number;
    good: number;
    fairNeedsRepair: number;
  };
}
