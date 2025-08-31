import type { ICountryInfo } from './countriesInfo.type';

export const COUNTRIES_INFO: ICountryInfo[] = [
  {
    title: 'ISO',
    field: null,
    isAvailable: true,
  },
  {
    title: 'Country',
    field: null,
    isAvailable: true,
  },
  {
    title: 'Year',
    field: 'year',
    isAvailable: true,
  },
  {
    title: 'Population',
    field: 'population',
    isAvailable: true,
  },
  {
    title: 'CO2',
    field: 'co2',
    isAvailable: true,
  },
  {
    title: 'CO2 per capita',
    field: 'co2_per_capita',
    isAvailable: true,
  },
  {
    title: 'Methane',
    field: 'methane',
    isAvailable: false,
    isAdditional: true,
  },
  {
    title: 'Oil CO2',
    field: 'oil_co2',
    isAvailable: false,
    isAdditional: true,
  },
  {
    title: 'Temperature change from CO2',
    field: 'temperature_change_from_co2',
    isAvailable: false,
    isAdditional: true,
  },
];
