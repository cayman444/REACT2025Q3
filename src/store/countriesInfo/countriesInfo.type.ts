import type {
  CountryEmissionsData,
  SortBy,
  SortMethod,
} from '@/types/countriesEmissionsTypes';

export interface ICountryInfo {
  title: DataTitles;
  field: keyof CountryEmissionsData | null;
  isAvailable: boolean;
  isAdditional?: boolean;
}

export interface ICountriesInfo {
  data: ICountryInfo[];
  isFilteringByYear: boolean;
  selectYear?: number;
  searchCountryName?: string;
  sorting: {
    sortBy: SortBy;
    sortMethod: SortMethod;
  };
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
