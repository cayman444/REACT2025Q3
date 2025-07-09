import { createContext } from 'react';

export interface AppContextType {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);
