import type { ICountryEmissions } from '@/types/countriesEmissionsTypes';

const API_URL =
  'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json';
let countriesPromise: Promise<ICountryEmissions> | null = null;

export const getCountriesEmissionsData = () => {
  if (!countriesPromise) {
    countriesPromise = fetch(API_URL).then((res) => res.json());
  }

  return countriesPromise;
};
