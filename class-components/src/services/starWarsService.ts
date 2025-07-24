import axios from 'axios';
import type { VehiclesResponse } from '../types';

const API_URL = 'https://www.swapi.tech/api';

const api = axios.create({
  baseURL: API_URL,
  params: {
    expanded: true,
  },
});

export const getVehicles = async (
  searchValue: string,
  page: number,
  limit: number
) => {
  const response = await api.get<VehiclesResponse>('/vehicles', {
    params: { name: searchValue ? searchValue : null, page, limit },
  });

  return response.data;
};
