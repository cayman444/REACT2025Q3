import { useEffect, useState, type FC } from 'react';
import type { ICountryInfo } from '@/store/countriesInfo/countriesInfo.type';
import type { CountryEmissionsData } from '@/types/countriesEmissionsTypes';

interface CountryEmissionsProps {
  data: CountryEmissionsData;
  country: string;
  code?: string;
  isFilteringByYear: boolean;
  countriesInfo: ICountryInfo[];
}

export const CountryEmissions: FC<CountryEmissionsProps> = ({
  country,
  code,
  data: actualData,
  isFilteringByYear,
  countriesInfo,
}) => {
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    if (isFilteringByYear) {
      setActiveClass(true);

      const timer = setTimeout(() => {
        setActiveClass(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [actualData, isFilteringByYear]);

  return (
    <tr>
      <td className="p-1 border-1 border-gray-300">{code ?? 'N/A'}</td>
      <td className="p-1 border-1 border-gray-300">{country}</td>
      {countriesInfo.map(({ field, isAvailable }) => {
        if (!field || !isAvailable) return;

        return (
          <td
            key={field}
            className={`p-1 border-1 border-gray-300 transition-colors duration-400 ${actualData[field] && activeClass ? 'bg-blue-500' : ''}`}
          >
            {actualData[field] ?? 'N/A'}
          </td>
        );
      })}
    </tr>
  );
};
