import { useSuspenseQuery } from '@tanstack/react-query';
import { getCountriesEmissionsData } from '@/services/countriesEmissionsApi';
import { CountryEmissions } from './CountryEmissions';
import { AvailableDataDropdown } from './AvailableDataDropdown';

export const TableCountriesEmissions = () => {
  const { data: countriesEmissions } = useSuspenseQuery({
    queryKey: ['countriesEmissions'],
    queryFn: getCountriesEmissionsData,
  });

  console.log(countriesEmissions);

  return (
    <div className="flex flex-col gap-4 p-20 max-w-5xl mx-auto">
      <AvailableDataDropdown />
      <table className="text-center text-gray-700 border-collapse shadow">
        <thead className="border-1 border-gray-300 bg-gray-200 ">
          <tr>
            <th className="p-2 border-1 border-gray-300">ISO</th>
            <th className="p-2 border-1 border-gray-300">Country</th>
            <th className="p-2 border-1 border-gray-300">Year</th>
            <th className="p-2 border-1 border-gray-300">Population</th>
            <th className="p-2 border-1 border-gray-300">CO2</th>
            <th className="p-2 border-1 border-gray-300">CO2 per capita</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {Object.entries(countriesEmissions).map(([countryName, data]) => (
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
