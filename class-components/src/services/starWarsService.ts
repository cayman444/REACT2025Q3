import type { VehicleResponse, VehiclesResponse } from '../types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API_URL = 'https://www.swapi.tech/api/';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getVehicles: build.query<VehiclesResponse, void>({
      query: () => ({
        url: 'vehicles',
        params: {
          expanded: true,
          page: 1,
          limit: 10,
        },
      }),
    }),
    getVehicle: build.query<VehicleResponse, string>({
      query: (id) => ({
        url: `vehicles/${id}`,
        params: {
          expanded: true,
        },
      }),
    }),
  }),
});

export const { useGetVehiclesQuery, useGetVehicleQuery } = starWarsApi;
