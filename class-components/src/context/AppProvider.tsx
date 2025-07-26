import { useState, type FC, type PropsWithChildren } from 'react';
import { AppContext } from './AppContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSearchParams } from 'react-router-dom';

const LIMIT_ITEMS = 10;

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchValue, setSearchValue] = useLocalStorage('searchValue');
  const [totalPage, setTotalPage] = useState<null | number>(null);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1
  );

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        limit: LIMIT_ITEMS,
        currentPage,
        totalPage,
        setTotalPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
