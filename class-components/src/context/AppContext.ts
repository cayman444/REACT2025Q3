import { createContext } from 'react';

export interface AppContextType {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  limit: number;
  currentPage: number;
  totalPage: null | number;
  setTotalPage: (totalPage: number) => void;
  setCurrentPage: (page: number) => void;
}

export const AppContext = createContext<AppContextType | null>(null);
