import type {
  CountryEmissionsData,
  ICountryEmissions,
  SortBy,
  SortMethod,
} from '@/types/countriesEmissionsTypes';

export interface IActualCountriesData {
  data: ICountryEmissions;
  search?: string;
  sortBy: SortBy;
  sortMethod: SortMethod;
}

export const getActualCountryData = (
  data: CountryEmissionsData[],
  year?: number
): CountryEmissionsData => {
  const lastYearPart = data[data.length - 1];
  if (!year) return lastYearPart;

  const actualData = data.find((part) => part.year === year);

  return actualData ?? lastYearPart;
};

export const getActualCountriesData = (data: IActualCountriesData) => {
  const actualData = sortingData(data);

  if (!data.search) return actualData;

  return actualData.filter(([countryName]) => {
    return countryName
      .toLowerCase()
      .includes((data.search as string).toLowerCase());
  });
};

const sortingData = ({
  data,
  sortBy,
  sortMethod,
}: Omit<IActualCountriesData, 'search'>) => {
  const formatData = Object.entries(data);

  if (sortBy === 'country') {
    return formatData.sort((a, b) => {
      return sortMethod === 'asc'
        ? a[0].toLowerCase().localeCompare(b[0].toLowerCase())
        : b[0].toLowerCase().localeCompare(a[0].toLowerCase());
    });
  }

  return formatData;
};
