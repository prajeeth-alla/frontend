export interface Vehicle {
  id: number;
  rooftop_id: number;
  make: string;
  model: string;
  year: number;
  veh_listing_type: string;
  trim: string;
  body_type: string;
  ext_color: string;
}

export interface VehicleDetail {
  id: number;
  rooftop_id: number;
  make: string;
  model: string;
  year: number;
  veh_listing_type: string;
  trim: string;
  body_type: string;
  ext_color: string;
  engine: string;
  miles: number;
  status: string;
  videos: any[];
  spins: any[];
  images: any[];
  rooftop: any;
}

export interface VehicleVideo {
  id: number;
  vehicleId: number;
  clipDuration: number; // in seconds
  clipUrl: string;
  thumbUrl: string;
  title: string;
  shortDesc: string;
  desc: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
export type VehicleVideoList = VehicleVideo[];

export interface VehicleImage {
  id: number;
  vehicleId: number;
  imageGroupId: number;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export type VehicleImagesList = VehicleImage[];

export interface Vehicle360Spin {
  id: number;
  vehicleId: number;
  playerUrl: string;
  type: 'STITCHED';
  exteriorView: boolean;
  interiorView: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type Vehicle360SpinList = Vehicle360Spin[];

export interface VehicleForm {
  rooftop_id: number | null;
  make: string | null;
  model: string | null;
  year: number | null;
  veh_listing_type: 'New' | 'Used' | null;
  trim: string | null;
  body_type: string | null;
  ext_color: string | null;
  engine: string | null;
  miles: string | null;
  status: string | null;
}
