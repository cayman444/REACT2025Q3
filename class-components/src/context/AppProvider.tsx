import { useState, type FC, type PropsWithChildren } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from './AppContext';
import { useLocalStorage } from '../hooks';

const LIMIT_ITEMS = 10;
const STORAGE_KEY = 'searchValue';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchValue, setSearchValue] = useLocalStorage(STORAGE_KEY);
  const [totalPage, setTotalPage] = useState<null | number>(null);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1
  );

  return (
    <AppContext
      value={{
        searchValue,
        setSearchValue,
        limit: LIMIT_ITEMS,
        currentPage,
        totalPage,
        isDarkTheme,
        setIsDarkTheme,
        setTotalPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext>
  );
};
