export interface ProjectResponse {  
  response: string;  
  content: Project;  // ✅ Ensure `content` correctly wraps `Project`
}

export interface Project {
  id: number;
  projectName: string;
  projectShortName: string;
  currency: string;
  countryCode: string;
  phoneNo: string;
  tenure: string;
  propertyCategory: string;
  propertyType: string[];
  sizeUnit: string;
  address1: string;
  address2: string;
  address3: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  longitude: string;
  latitude: string;
  descriptionTitle: string;
  descriptionSubTitle: string;
  logo: string;
  sitePlan?: string | null; 
  landSize?: number | null;
  metricUnit?: string | null;
  bumiDiscount?: number | null;
  totalUnit: number;
  availableUnit?: number;
  showStoreyPlan: boolean;
  showSitePlan: boolean;
  gallery: string[];
  layouts: Layout[];
  projectDetails: ProjectDetail[];
  propertyInfo: PropertyInfo[];
  documents: DocumentInfo[];
  map: MapInfo[];
}

export interface Layout {
  id: number;
  piId: number;
  metId: number;
  name: string;
  buildUpArea: string;
  sqft: number;
  unit?: string | null;
  desc: string;
  status: number;
  createdDatetime: string;
  updatedDatetime: string;
  specifications?: string | null;
  url: string;
  room: string[];
  sizeUnit: string;
  totalUnit: number;
  availableUnit: number;
}

export interface ProjectDetail {
  id: number;
  metId:number;
  type:string;
  name: string;
  description: string;
  param1:string;
  status:number;
  createdDatetime:string;
  updatedDatetime:string;
  imageUrl?: string|null;
}

export interface PropertyInfo {
  id: number;
  metId:number;
  type:string;
  name: string;
  description: string;
  param1: string; 
  status:number;
  createdDatetime:string;
  updatedDatetime:string;
  imageUrl?: string|null;  
}

export interface DocumentInfo {
  id: number;
  value: string;
  url: string;
}

export interface MapInfo {
  id: number;
  url: string;
}



