export interface ProductItem {
  id: string;
  nameFa: string;
  nameEn: string;
  category: 'brake' | 'suspension' | 'landing' | 'wheelend' | 'axle';
  image: string;
  code: string;
  tagline: string;
  description: string;
  keySpecs: { label: string; value: string }[];
  applications: string[];
  certifications: string[];
  oemRole: string;
  aftermarketRole: string;
  cadAvailable: boolean;
}

export interface OEMCompany {
  id: number;
  name: string;
  website: string;
  country: string;
  city: string;
  portfolio: string;
  capacity: string;
  group: 'Wave 1' | 'Wave 2' | 'Integrated' | 'Benchmark' | 'SASO' | 'MENA';
  status: string;
  axleBrand: string;
  entryProduct: string;
  note: string;
  coordinates?: { x: number; y: number };
}

export interface ValueChainStep {
  step: number;
  title: string;
  market: string;
  desc: string;
  actor: string;
  rstAdvantage: string;
}

export interface TrailerSegment {
  id: string;
  name: string;
  badge: string;
  apps: string;
  conditions: string;
  painPoint: string;
  keyParts: string[];
  scores: {
    durability: number;
    safety: number;
    uptime: number;
    weight: number;
  };
  strategy: string;
}

export interface DMURole {
  id: string;
  title: string;
  badge: string;
  icon: string;
  question: string;
  vp: string;
  deliverables: string[];
}

export interface SkuItem {
  code: string;
  title: string;
  family: string;
  compat: string;
  specs: string;
  batch: string;
  qrLinks: string[];
}
