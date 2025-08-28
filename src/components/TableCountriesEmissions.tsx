import { getCountriesEmissionsData } from '@/services/countriesEmissionsApi';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CountryEmissions } from './CountryEmissions';

export const TableCountriesEmissions = () => {
  const { data: countriesEmissions } = useSuspenseQuery({
    queryKey: ['countriesEmissions'],
    queryFn: getCountriesEmissionsData,
  });

  return (
    <div>
      {Object.entries(countriesEmissions).map(([countryName, data]) => (
        <CountryEmissions
          key={countryName}
          countryName={countryName}
          data={data}
        />
      ))}
    </div>
  );
};
