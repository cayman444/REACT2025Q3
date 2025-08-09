import { useState, type FC, type PropsWithChildren } from 'react';
import { AppContext } from './AppContext';
import { useLocalStorage } from '../hooks';

const STORAGE_KEY = 'searchValue';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchValue, setSearchValue] = useLocalStorage(STORAGE_KEY);

  return (
    <AppContext
      value={{
        searchValue,
        setSearchValue,
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      {children}
    </AppContext>
  );
};
