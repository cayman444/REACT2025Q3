'use client';

import { type FC } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/ui';
import { usePagination } from './usePagination';

interface PaginationProps {
  currentPage: number;
  totalPage: number | null;
  searchValue: string;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { handleSelectPage, handleNextPage, handlePrevPage } =
    usePagination(props);

  if (!props.totalPage || props.totalPage === 1 || props.searchValue) return;

  const pages = [...Array(props.totalPage)];

  return (
    <div
      data-testid="pagination"
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <Button
        data-testid="page-prev"
        className={clsx(
          {
            'pointer-events-none opacity-50': props.currentPage === 1,
          },
          'flex justify-center items-center w-10'
        )}
        onClick={handlePrevPage}
      >
        {'<'}
      </Button>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {pages.map((_, ind) => (
          <Button
            data-testid="current-page"
            key={ind}
            className={clsx(
              {
                'pointer-events-none opacity-50': ind + 1 === props.currentPage,
              },
              'flex justify-center items-center w-10'
            )}
            onClick={() => handleSelectPage(ind + 1)}
          >
            {ind + 1}
          </Button>
        ))}
      </div>
      <Button
        data-testid="page-next"
        className={clsx(
          {
            'pointer-events-none opacity-50':
              props.currentPage === props.totalPage,
          },
          'flex justify-center items-center w-10'
        )}
        onClick={handleNextPage}
      >
        {'>'}
      </Button>
    </div>
  );
};
