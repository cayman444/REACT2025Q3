import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CountrySelect, ICountryInfo } from './countriesInfo.type';
import { COUNTRIES_INFO } from './countriesInfo.data';

export interface countriesInfo {
  data: ICountryInfo[];
  selectYear: number | null;
}

const initialState: countriesInfo = {
  data: COUNTRIES_INFO,
  selectYear: null,
};

export const countriesInfo = createSlice({
  name: 'countriesInfo',
  initialState,
  reducers: {
    setCountryData: (state, { payload }: PayloadAction<CountrySelect>) => {
      const countryIndex = state.data.findIndex(
        (country) => country.title === payload.title
      );

      state.data[countryIndex].isAvailable = payload.isAvailable;
    },
    setSelectYear: (state, { payload }: PayloadAction<number>) => {
      state.selectYear = payload;
    },
  },
});

export const { setCountryData, setSelectYear } = countriesInfo.actions;
export default countriesInfo.reducer;
