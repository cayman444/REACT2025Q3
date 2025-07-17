import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { AppContext, type AppContextType } from '../../context';

export const renderWithContext = (
  component: ReactNode,
  value: AppContextType
) => {
  return render(
    <AppContext.Provider value={value}>{component}</AppContext.Provider>
  );
};
