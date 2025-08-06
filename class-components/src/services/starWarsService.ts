import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { VehicleResponse, VehiclesResponse } from '../types';
import { setPagination } from '../store/Pagination';

export const API_URL = 'https://www.swapi.tech/api/';
const LIMIT_ITEMS = 10;

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getVehicles: build.query<VehiclesResponse, number>({
      query: (page) => ({
        url: 'vehicles',
        params: {
          expanded: true,
          page,
          limit: LIMIT_ITEMS,
        },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;

        dispatch(setPagination({ totalPage: data.total_pages }));
      },
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
