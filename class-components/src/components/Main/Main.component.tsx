import { type FC } from 'react';
import { CardList } from './CardList.component';
import { Pagination } from '../Pagination';
import { useFetchVehicles } from './useFetchVehicles';

export const Main: FC = () => {
  const { vehicles, isLoading, error } = useFetchVehicles();

  return (
    <main className="flex flex-col gap-5 bg-white/50 p-5 rounded shadow">
      <CardList vehicles={vehicles} isLoading={isLoading} error={error} />
      {!isLoading && <Pagination />}
    </main>
  );
};
