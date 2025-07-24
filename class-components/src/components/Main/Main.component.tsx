import { type FC } from 'react';
import { CardList } from './CardList.component';

export const Main: FC = () => {
  return (
    <main className="flex flex-col gap-5 bg-white/50 p-5 rounded shadow">
      <CardList />
    </main>
  );
};
