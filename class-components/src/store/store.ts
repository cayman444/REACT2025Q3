import { configureStore } from '@reduxjs/toolkit';
import { starWarsApi } from '../services';
import { paginationReducer } from './Pagination';
import { cardsReducer } from './Cards';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cards: cardsReducer,
      pagination: paginationReducer,
      [starWarsApi.reducerPath]: starWarsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(starWarsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
