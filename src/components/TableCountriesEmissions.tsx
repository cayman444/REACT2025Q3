import { use } from 'react';
import { getCountriesEmissionsData } from '@/services/countriesEmissionsApi';
import { CountryEmissions } from './CountryEmissions';

export const TableCountriesEmissions = () => {
  const countriesEmissions = use(getCountriesEmissionsData());

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
