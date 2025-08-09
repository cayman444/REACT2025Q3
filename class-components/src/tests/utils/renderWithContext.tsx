import { type ReactNode } from 'react';
import { AppContext, type AppContextType } from '../../context';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { render } from '@testing-library/react';

const defaultValues: AppContextType = {
  searchValue: '',
  setSearchValue: vi.fn(),
  isDarkTheme: false,
  setIsDarkTheme: vi.fn(),
};

export const renderWithContext = (
  component: ReactNode,
  value: Partial<AppContextType>
) => {
  return render(
    <Provider store={store}>
      <AppContext.Provider value={{ ...defaultValues, ...value }}>
        {component}
      </AppContext.Provider>
    </Provider>
  );
};
