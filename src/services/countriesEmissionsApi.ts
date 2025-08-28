import axios from 'axios';
import type { ICountryEmissions } from '@/types/countriesEmissionsTypes';

const API_URL =
  'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json';

export const getCountriesEmissionsData = async () => {
  const res = await axios.get<ICountryEmissions>(API_URL);

  return res.data;
};
