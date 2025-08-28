import type { FC } from 'react';
import type { CountryEmissionsInfo } from '@/types/countriesEmissionsTypes';

interface CountryEmissionsProps {
  countryName: string;
  data: CountryEmissionsInfo;
}

export const CountryEmissions: FC<CountryEmissionsProps> = ({
  countryName,
  data: { iso_code, data },
}) => {
  const lastData = data[data.length - 1];

  return (
    <tr>
      <td className="p-2 border-1 border-gray-300">{iso_code ?? 'N/A'}</td>
      <td className="p-2 border-1 border-gray-300">{countryName}</td>
      <td className="p-2 border-1 border-gray-300">{lastData.year}</td>
      <td className="p-2 border-1 border-gray-300">
        {lastData.population ?? 'N/A'}
      </td>
      <td className="p-2 border-1 border-gray-300">{lastData.co2 ?? 'N/A'}</td>
      <td className="p-2 border-1 border-gray-300">
        {lastData.cement_co2_per_capita ?? 'N/A'}
      </td>
    </tr>
  );
};
