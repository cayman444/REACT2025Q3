import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CountrySelect, ICountriesInfo } from './countriesInfo.type';
import { COUNTRIES_INFO } from './countriesInfo.data';
import type { SortBy, SortMethod } from '@/types/countriesEmissionsTypes';

const initialState: ICountriesInfo = {
  data: COUNTRIES_INFO,
  isFilteringByYear: false,
  sorting: {
    sortBy: 'country',
    sortMethod: 'asc',
  },
};

export const countriesInfo = createSlice({
  name: 'countriesInfo',
  initialState,
  reducers: {
    setCountryData: (state, { payload }: PayloadAction<CountrySelect>) => {
      state.isFilteringByYear = false;
      const countryIndex = state.data.findIndex(
        (country) => country.title === payload.title
      );

      state.data[countryIndex].isAvailable = payload.isAvailable;
    },
    setSelectYear: (state, { payload }: PayloadAction<number>) => {
      state.isFilteringByYear = true;
      state.selectYear = payload;
    },
    setSearchCountryName: (state, { payload }: PayloadAction<string>) => {
      state.isFilteringByYear = false;
      state.searchCountryName = payload;
    },
    setSortBy: (state, { payload }: PayloadAction<SortBy>) => {
      state.isFilteringByYear = false;
      state.sorting.sortBy = payload;
    },
    setSortMethod: (state, { payload }: PayloadAction<SortMethod>) => {
      state.isFilteringByYear = false;
      state.sorting.sortMethod = payload;
    },
  },
});

export const {
  setCountryData,
  setSelectYear,
  setSearchCountryName,
  setSortBy,
  setSortMethod,
} = countriesInfo.actions;
export default countriesInfo.reducer;
