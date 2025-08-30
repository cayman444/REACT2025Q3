import { useSuspenseQuery } from '@tanstack/react-query';
import { getCountriesEmissionsData } from '@/services/countriesEmissionsApi';
import { getActualCountriesData } from '@/utils/getActualData';
import { useAppSelector } from '@/store';
import { CountryEmissions } from './CountryEmissions';
import { AvailableDataModal } from './AvailableDataModal';
import { SelectYear } from './SelectYear';
import { CountrySearch } from './CountrySearch';

export const TableCountriesEmissions = () => {
  const countriesInfo = useAppSelector((state) => state.countriesInfo.data);
  const searchCountryName = useAppSelector(
    (state) => state.countriesInfo.searchCountryName
  );
  const { data: countriesEmissions } = useSuspenseQuery({
    queryKey: ['countriesEmissions'],
    queryFn: getCountriesEmissionsData,
  });

  console.log(countriesEmissions);

  const actualCountriesData = getActualCountriesData(
    countriesEmissions,
    searchCountryName
  );

  return (
    <div className="flex flex-col gap-4 p-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 text-gray-700">
        <CountrySearch />
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
          {actualCountriesData.map(([countryName, data]) => (
            <CountryEmissions
              key={countryName}
              countryName={countryName}
              data={data}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
