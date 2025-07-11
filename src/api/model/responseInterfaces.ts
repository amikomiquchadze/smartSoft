export interface Word {
  id: string;
  national: string;
  foreign: string;
}

export interface ApiCountry {
  region?: string;
  name: { common: string };
  capital?: string[] | string;
  currencies?: Record<string, { name: string }>;
  languages?: Record<string, string>;
}

export interface CountryRow {
  region: string;
  name: string;
  capital: string;
  currencies: string;
  languages: string;
}