import { configureStore } from '@reduxjs/toolkit';
import { countriesInfoReducer } from './countriesInfo';

export const store = configureStore({
  reducer: {
    countriesInfo: countriesInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
