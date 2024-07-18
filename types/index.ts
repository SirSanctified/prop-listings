export interface Image {
  filePath: string;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  status: string;
  type: string;
  currency: string;
  price: string;
  publishedAs: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  propertySize: string;
  yearBuilt: number;
  images: Image[];
}

export interface Data {
  latestPropertiesForSale: Property[];
  latestPropertiesToRent: Property[];
}

export interface PropertyResponse {
  status: string;
  data: Data;
}
