import type { FC } from 'react';
import { useAppSelector } from '@/store';
import type { CountryEmissionsInfo } from '@/types/countriesEmissionsTypes';
import { getActualCountryData } from '@/utils/getActualCountryData';

interface CountryEmissionsProps {
  countryName: string;
  data: CountryEmissionsInfo;
}

export const CountryEmissions: FC<CountryEmissionsProps> = ({
  countryName,
  data: { iso_code, data },
}) => {
  const { data: countriesInfo, selectYear } = useAppSelector(
    (state) => state.countriesInfo
  );

  const actualData = getActualCountryData(data, selectYear);

  return (
    <tr>
      <td className="p-1 border-1 border-gray-300">{iso_code ?? 'N/A'}</td>
      <td className="p-1 border-1 border-gray-300">{countryName}</td>
      {countriesInfo.map(({ field, isAvailable }) => {
        if (!field || !isAvailable) return;

        return (
          <td key={field} className="p-1 border-1 border-gray-300">
            {actualData[field] ?? 'N/A'}
          </td>
        );
      })}
    </tr>
  );
};
