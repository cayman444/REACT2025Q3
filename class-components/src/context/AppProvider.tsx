import { type FC, type PropsWithChildren } from 'react';
import { AppContext } from './AppContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchValue, setSearchValue] = useLocalStorage('searchValue', '');

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        itemsLimit: 10,
        itemsPage: 1,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
