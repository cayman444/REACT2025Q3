import { useEffect, useState, type FC } from 'react';
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
  const {
    data: countriesInfo,
    selectYear,
    isFilteringYear,
  } = useAppSelector((state) => state.countriesInfo);

  const actualData = getActualCountryData(data, selectYear);
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    if (isFilteringYear) {
      setActiveClass(true);

      const timer = setTimeout(() => {
        setActiveClass(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [actualData, isFilteringYear]);

  return (
    <tr>
      <td className="p-1 border-1 border-gray-300">{iso_code ?? 'N/A'}</td>
      <td className="p-1 border-1 border-gray-300">{countryName}</td>
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
