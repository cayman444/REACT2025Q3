import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { cardsReducer } from '../../store/Cards';
import { paginationReducer } from '../../store/Pagination';
import { AppProvider } from '../../context';
import type { RootState } from '../../store';
import { starWarsApi } from '../../services';
import { render } from '@testing-library/react';

export const renderTestApp = (
  component: ReactNode,
  preloadedState?: RootState,
  initialRoute = '/'
) => {
  const store = configureStore({
    reducer: {
      cards: cardsReducer,
      pagination: paginationReducer,
      [starWarsApi.reducerPath]: starWarsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(starWarsApi.middleware),
    preloadedState,
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <AppProvider>{component}</AppProvider>
        </MemoryRouter>
      </Provider>
    ),
  };
};
