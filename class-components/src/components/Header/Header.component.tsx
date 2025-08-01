import type { FC } from 'react';
import { Search } from './Search.component';

export const Header: FC = () => {
  return (
    <header className="bg-white/50 dark:bg-gray-800 p-5 rounded shadow">
      <Search />
    </header>
  );
};
