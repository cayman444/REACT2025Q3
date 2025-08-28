import type { FC } from 'react';
import { useAppSelector } from '@/store';
import type { CountryEmissionsInfo } from '@/types/countriesEmissionsTypes';

interface CountryEmissionsProps {
  countryName: string;
  data: CountryEmissionsInfo;
}

export const CountryEmissions: FC<CountryEmissionsProps> = ({
  countryName,
  data: { iso_code, data },
}) => {
  const countriesInfo = useAppSelector((state) => state.countriesInfo.data);
  const lastData = data[data.length - 1];

  return (
    <tr>
      <td className="p-1 border-1 border-gray-300">{iso_code ?? 'N/A'}</td>
      <td className="p-1 border-1 border-gray-300">{countryName}</td>
      {countriesInfo.map(({ field, isAvailable }) => {
        if (!field || !isAvailable) return;

        return (
          <td key={field} className="p-1 border-1 border-gray-300">
            {lastData[field] ?? 'N/A'}
          </td>
        );
      })}
    </tr>
  );
};
