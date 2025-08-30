import type {
  IActualCountriesData,
  ICountryEmissions,
  ICountryFormateActualData,
  ICountryFormateData,
  SortBy,
  SortMethod,
} from '@/types/countriesEmissionsTypes';

export const getActualCountriesData = ({
  data,
  search,
  year,
  sortBy,
  sortMethod,
}: IActualCountriesData) => {
  const formateData = getFormateData(data);
  const actualCountriesYear = getActualCountriesYear(formateData, year);
  const dataBySearch = getDataBySearch(actualCountriesYear, search);
  const sortedData = sortingData(dataBySearch, sortBy, sortMethod);

  return sortedData;
};

const getActualCountriesYear = (
  data: ICountryFormateData[],
  year?: number
): ICountryFormateActualData[] => {
  const lastYearsData: ICountryFormateActualData[] = data.map(
    ({ code, country, data }) => ({
      country,
      code,
      data: data[data.length - 1],
    })
  );

  if (!year) return lastYearsData;

  return data.map(({ code, country, data }) => ({
    country,
    code,
    data: data.find((part) => part.year === year) ?? data[data.length - 1],
  }));
};

const getDataBySearch = (
  data: ICountryFormateActualData[],
  search?: string
) => {
  if (!search) return data;

  return data.filter(({ country }) => {
    return country.toLowerCase().includes(search.toLowerCase());
  });
};

const sortingData = (
  data: ICountryFormateActualData[],
  sortBy: SortBy,
  sortMethod: SortMethod
) => {
  if (sortBy === 'country') {
    return data.sort((a, b) => {
      return sortMethod === 'asc'
        ? a.country.toLowerCase().localeCompare(b.country.toLowerCase())
        : b.country.toLowerCase().localeCompare(a.country.toLowerCase());
    });
  }

  if (sortBy === 'population') {
    return data.sort((a, b) => {
      const aValue = a.data[sortBy] ?? 0;
      const bValue = b.data[sortBy] ?? 0;

      return sortMethod === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }

  return data;
};

const getFormateData = (data: ICountryEmissions): ICountryFormateData[] => {
  return Object.entries(data).map(([country, data]) => ({
    country,
    code: data.iso_code,
    data: data.data,
  }));
};
