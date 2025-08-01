import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import cardsReducer from '../../store/Cards.slice';
import { AppProvider } from '../../context';
import type { RootState } from '../../store';

export const renderTestApp = (
  component: ReactNode,
  preloadedState?: RootState,
  initialRoute = '/'
) => {
  const store = configureStore({
    reducer: {
      cards: cardsReducer,
    },
    preloadedState,
  });

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppProvider>{component}</AppProvider>
      </MemoryRouter>
    </Provider>
  );
};
