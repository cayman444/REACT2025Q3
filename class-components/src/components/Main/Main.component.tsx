import { useEffect, type FC } from 'react';
import { CardList } from './CardList.component';
import { Pagination } from '../Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetVehiclesQuery } from '../../services';
import { useAppContext } from '../../context';
import { setPagination } from '../../store/Pagination';

export const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppContext();
  const { currentPage, totalPage } = useAppSelector(
    (state) => state.pagination
  );
  const { data, isFetching, error } = useGetVehiclesQuery({
    currentPage,
    searchValue,
  });

  useEffect(() => {
    dispatch(setPagination({ totalPage: data?.total_pages }));
  }, [data?.total_pages, dispatch]);

  return (
    <main className="flex flex-col gap-5 bg-white/50 dark:bg-gray-800 p-5 rounded shadow">
      <CardList data={data} isFetching={isFetching} error={error} />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        searchValue={searchValue}
      />
    </main>
  );
};
