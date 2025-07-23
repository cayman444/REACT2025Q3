import { useState, type FC } from 'react';
import { CardList } from './CardList.component';
import { Button } from '../ui';

export const Main: FC = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw Error('Error caused by pressing a button');
  }

  const createError = () => {
    setError(true);
  };

  return (
    <main className="flex flex-col gap-5 bg-white/50 p-5 rounded shadow">
      <CardList />
      <Button
        className="bg-red-500 hover:bg-red-400 focus:outline-red-400"
        onClick={createError}
      >
        Error Button
      </Button>
    </main>
  );
};
