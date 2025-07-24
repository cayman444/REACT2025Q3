import { createContext } from 'react';

export interface AppContextType {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  itemsLimit: number;
  itemsPage: number;
}

export const AppContext = createContext<AppContextType | null>(null);
