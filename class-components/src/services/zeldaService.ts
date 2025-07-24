import axios from 'axios';
import type { ZeldaPlaceResponse } from '../types';

const API_URL = 'https://zelda.fanapis.com/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getPlaces = async (
  searchValue: string,
  page: number,
  limit: number
) => {
  const response = await api.get<ZeldaPlaceResponse>('/places', {
    params: { name: searchValue ? searchValue : null, page, limit },
  });

  return response.data;
};
