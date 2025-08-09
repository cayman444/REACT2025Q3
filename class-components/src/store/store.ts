import { configureStore } from '@reduxjs/toolkit';
import { starWarsApi } from '../services';
import { paginationReducer } from './Pagination';
import { cardsReducer } from './Cards';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    pagination: paginationReducer,
    [starWarsApi.reducerPath]: starWarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
