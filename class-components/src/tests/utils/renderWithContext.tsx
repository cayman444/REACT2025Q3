import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { AppContext, type AppContextType } from '../../context';

export const renderWithContext = (
  component: ReactNode,
  value: Partial<AppContextType>
) => {
  const defaultValues: AppContextType = {
    searchValue: '',
    setSearchValue: vi.fn(),
    limit: 10,
    currentPage: 1,
    totalPage: null,
    setTotalPage: vi.fn(),
    setCurrentPage: vi.fn(),
  };

  return render(
    <AppContext.Provider value={{ ...defaultValues, ...value }}>
      {component}
    </AppContext.Provider>
  );
};
