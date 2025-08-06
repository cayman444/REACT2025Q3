import { type FC } from 'react';
import { CardList } from './CardList.component';
import { Pagination } from '../Pagination';
import { useAppSelector } from '../../hooks';
import { useGetVehiclesQuery } from '../../services';

export const Main: FC = () => {
  const { currentPage, totalPage } = useAppSelector(
    (state) => state.pagination
  );
  const { data, isLoading, isFetching, error } =
    useGetVehiclesQuery(currentPage);

  return (
    <main className="flex flex-col gap-5 bg-white/50 dark:bg-gray-800 p-5 rounded shadow">
      <CardList
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
      />
      <Pagination currentPage={currentPage} totalPage={totalPage} />
    </main>
  );
};
