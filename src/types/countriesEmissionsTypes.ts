export interface ICountryEmissions {
  [key: string]: CountryEmissionsInfo;
}

export interface CountryEmissionsInfo {
  iso_code?: string;
  data: CountryEmissionsData[];
}

export type SortBy = 'country' | 'population';
export type SortMethod = 'asc' | 'desc';

export interface CountryEmissionsData {
  year: number;
  population?: number;
  co2?: number;
  co2_per_capita?: number;
  methane?: number;
  oil_co2?: number;
  temperature_change_from_co2?: number;
}

export interface IActualCountriesData {
  data: ICountryEmissions;
  sortBy: SortBy;
  sortMethod: SortMethod;
  search?: string;
  year?: number;
}
export interface ICountryFormateData {
  country: string;
  code: string | undefined;
  data: CountryEmissionsData[];
}
export interface ICountryFormateActualData {
  country: string;
  code: string | undefined;
  data: CountryEmissionsData;
}
