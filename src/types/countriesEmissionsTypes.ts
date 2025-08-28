export interface ICountryEmissions {
  [key: string]: CountryEmissionsInfo;
}

export interface CountryEmissionsInfo {
  iso_code?: string;
  data: CountryEmissionsData[];
}

interface CountryEmissionsData {
  year: number;
  cumulative_cement_co2: number;
  cement_co2: number;
  population?: number;
  cement_co2_per_capita?: number;
  co2?: number;
  methane?: number;
  oil_co2?: number;
  temperature_change_from_co2?: number;
  [key: string]: number | undefined;
}
