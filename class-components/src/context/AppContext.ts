'use client';

import { createContext } from 'react';

export interface AppContextType {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  isDarkTheme: boolean;
  setIsDarkTheme: (theme: boolean) => void;
}

export const AppContext = createContext<AppContextType | null>(null);
