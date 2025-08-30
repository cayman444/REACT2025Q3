import { useSuspenseQuery } from '@tanstack/react-query';
import { getCountriesEmissionsData } from '@/services/countriesEmissionsApi';
import { getActualCountriesData } from '@/utils/getActualData';
import { useAppSelector } from '@/store';
import { CountryEmissions } from './CountryEmissions';
import { AvailableDataModal } from './AvailableDataModal';
import { SelectYear } from './SelectYear';
import { CountrySearch } from './CountrySearch';
import CountriesSort from './CountriesSort';

export const TableCountriesEmissions = () => {
  const {
    data: countriesInfo,
    searchCountryName,
    sorting,
    selectYear,
  } = useAppSelector((state) => state.countriesInfo);
  const { data: countriesEmissions } = useSuspenseQuery({
    queryKey: ['countriesEmissions'],
    queryFn: getCountriesEmissionsData,
  });

  console.log(countriesEmissions);

  const actualCountriesData = getActualCountriesData({
    data: countriesEmissions,
    search: searchCountryName,
    year: selectYear,
    ...sorting,
  });

  return (
    <div className="flex flex-col gap-4 p-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 text-gray-700">
        <CountrySearch />
        <CountriesSort />
        <SelectYear />
        <AvailableDataModal />
      </div>
      <table className="text-center text-gray-700 border-collapse shadow">
        <thead className="border-1 border-gray-300 bg-gray-200 ">
          <tr>
            {countriesInfo.map(
              ({ title, isAvailable }) =>
                isAvailable && (
                  <th key={title} className="p-1 border-1 border-gray-300">
                    {title}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody className="bg-white">
          {actualCountriesData.map((data) => (
            <CountryEmissions key={data.country} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
