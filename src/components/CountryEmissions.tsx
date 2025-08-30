import { useEffect, useState, type FC } from 'react';
import { useAppSelector } from '@/store';
import type { CountryEmissionsData } from '@/types/countriesEmissionsTypes';

interface CountryEmissionsProps {
  data: CountryEmissionsData;
  country: string;
  code?: string;
}

export const CountryEmissions: FC<CountryEmissionsProps> = ({
  country,
  code,
  data: actualData,
}) => {
  const { data: countriesInfo, isFilteringByYear } = useAppSelector(
    (state) => state.countriesInfo
  );

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
