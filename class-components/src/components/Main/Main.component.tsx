'use client';

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

  const vehicles = data?.result ? data.result : data?.results;
  const errorStatus = error && 'status' in error ? error.status : '';

  return (
    <main className="flex flex-col gap-5 bg-white/50 dark:bg-gray-800 p-5 rounded shadow">
      <CardList
        vehicles={vehicles}
        isFetching={isFetching}
        error={errorStatus}
      />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        searchValue={searchValue}
      />
    </main>
  );
};
