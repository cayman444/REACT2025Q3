import { type ReactNode } from 'react';
import { AppContext, type AppContextType } from '../../context';
import { Provider } from 'react-redux';
import { store } from '../../store';

const defaultValues: AppContextType = {
  searchValue: '',
  setSearchValue: vi.fn(),
  limit: 10,
  currentPage: 1,
  totalPage: null,
  isDarkTheme: false,
  setIsDarkTheme: vi.fn(),
  setTotalPage: vi.fn(),
  setCurrentPage: vi.fn(),
};

export const renderWithContext = (
  component: ReactNode,
  value: Partial<AppContextType>
) => {
  return (
    <Provider store={store}>
      <AppContext.Provider value={{ ...defaultValues, ...value }}>
        {component}
      </AppContext.Provider>
    </Provider>
  );
};
