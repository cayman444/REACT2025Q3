import type {
  CountryEmissionsData,
  ICountryEmissions,
} from '@/types/countriesEmissionsTypes';

export const getActualCountryData = (
  data: CountryEmissionsData[],
  year?: number
): CountryEmissionsData => {
  const lastYearPart = data[data.length - 1];
  if (!year) return lastYearPart;

  const actualData = data.find((part) => part.year === year);

  return actualData ?? lastYearPart;
};

export const getActualCountriesData = (
  data: ICountryEmissions,
  searchCountryName?: string
) => {
  const countriesData = Object.entries(data);
  if (!searchCountryName) return countriesData;

  return countriesData.filter(([countryName]) => {
    return countryName.toLowerCase().includes(searchCountryName.toLowerCase());
  });
};
