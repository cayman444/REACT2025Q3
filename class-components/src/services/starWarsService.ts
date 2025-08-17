import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { VehicleResponse, VehiclesResponse } from '@/types';

export const API_URL = 'https://www.swapi.tech/api/';
const LIMIT_ITEMS = 10;

export interface VehiclesParams {
  currentPage: number;
  searchValue: string;
}

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Vehicles'],
  endpoints: (build) => ({
    getVehicles: build.query<VehiclesResponse, VehiclesParams>({
      query: ({ currentPage, searchValue }) => ({
        url: 'vehicles',
        params: {
          expanded: true,
          page: currentPage,
          name: searchValue || undefined,
          limit: LIMIT_ITEMS,
        },
      }),
      providesTags: ['Vehicles'],
    }),
    getVehicle: build.query<VehicleResponse, string>({
      query: (id) => ({
        url: `vehicles/${id}`,
        params: {
          expanded: true,
        },
      }),
      providesTags: ['Vehicles'],
    }),
  }),
});

export const { useGetVehiclesQuery, useGetVehicleQuery } = starWarsApi;
