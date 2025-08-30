import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CountrySelect, ICountryInfo } from './countriesInfo.type';
import { COUNTRIES_INFO } from './countriesInfo.data';

export interface countriesInfo {
  data: ICountryInfo[];
  isFilteringByYear: boolean;
  selectYear?: number;
  searchCountryName?: string;
}

const initialState: countriesInfo = {
  data: COUNTRIES_INFO,
  isFilteringByYear: false,
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
  },
});

export const { setCountryData, setSelectYear, setSearchCountryName } =
  countriesInfo.actions;
export default countriesInfo.reducer;
