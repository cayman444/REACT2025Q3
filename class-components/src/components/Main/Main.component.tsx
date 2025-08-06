import { type FC } from 'react';
import { CardList } from './CardList.component';
import { Pagination } from '../Pagination';

export const Main: FC = () => {
  return (
    <main className="flex flex-col gap-5 bg-white/50 dark:bg-gray-800 p-5 rounded shadow">
      <CardList />
      <Pagination />
    </main>
  );
};
