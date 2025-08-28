import type { FC } from 'react';
import type { CountryEmissionsInfo } from '@/types/countriesEmissionsTypes';

interface CountryEmissionsProps {
  countryName: string;
  data: CountryEmissionsInfo;
}

export const CountryEmissions: FC<CountryEmissionsProps> = ({
  countryName,
}) => {
  return <div>{countryName} </div>;
};
