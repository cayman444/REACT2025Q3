import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './Cards.slice';
import { starWarsApi } from '../services';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    [starWarsApi.reducerPath]: starWarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
