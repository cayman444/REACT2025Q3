import { type ReactNode } from 'react';
import { AppContext, type AppContextType } from '../../context';

const defaultValues: AppContextType = {
  searchValue: '',
  setSearchValue: vi.fn(),
  limit: 10,
  currentPage: 1,
  totalPage: null,
  setTotalPage: vi.fn(),
  setCurrentPage: vi.fn(),
};

export const renderWithContext = (
  component: ReactNode,
  value: Partial<AppContextType>
) => {
  return (
    <AppContext.Provider value={{ ...defaultValues, ...value }}>
      {component}
    </AppContext.Provider>
  );
};
