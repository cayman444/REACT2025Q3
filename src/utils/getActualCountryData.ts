import type { CountryEmissionsData } from '@/types/countriesEmissionsTypes';

export const getActualCountryData = (
  data: CountryEmissionsData[],
  year: number | null
): CountryEmissionsData => {
  const lastYearPart = data[data.length - 1];
  if (!year) return lastYearPart;

  const actualData = data.find((part) => part.year === year);

  return actualData ?? lastYearPart;
};
