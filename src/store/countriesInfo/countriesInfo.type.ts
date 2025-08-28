import type { CountryEmissionsData } from '@/types/countriesEmissionsTypes';

export interface ICountryInfo {
  title: DataTitles;
  field: keyof CountryEmissionsData | null;
  isAvailable: boolean;
  isAdditional?: boolean;
}

export type CountrySelect = Omit<ICountryInfo, 'field'>;

type DataTitles =
  | 'ISO'
  | 'Country'
  | 'Year'
  | 'Population'
  | 'CO2'
  | 'CO2 per capita'
  | 'Methane'
  | 'Oil CO2'
  | 'Temperature change from CO2';
