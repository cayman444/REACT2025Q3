import { useState, type FC, type PropsWithChildren } from 'react';
import { AppContext } from './AppContext';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  const changeSearchValue = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue: changeSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
