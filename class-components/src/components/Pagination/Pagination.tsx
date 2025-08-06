import { useEffect, type FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import { Button } from '../ui';
import { useAppDispatch } from '../../hooks';
import { setPagination } from '../../store/Pagination';

interface PaginationProps {
  currentPage: number;
  totalPage: number | null;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    searchParams.set('page', currentPage.toString());
    setSearchParams(searchParams);
  }, [currentPage, searchParams, setSearchParams]);

  if (!totalPage || totalPage === 1) return;

  const pages = [...Array(totalPage)];

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPagination({ currentPage: currentPage - 1 }));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      dispatch(setPagination({ currentPage: currentPage + 1 }));
    }
  };

  return (
    <div
      data-testid="pagination"
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <Button
        data-testid="page-prev"
        className={clsx(
          {
            'pointer-events-none opacity-50': currentPage === 1,
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
            key={ind}
            className={clsx(
              {
                'pointer-events-none opacity-50': ind + 1 === currentPage,
              },
              'flex justify-center items-center w-10'
            )}
            onClick={() => dispatch(setPagination({ currentPage: ind + 1 }))}
          >
            {ind + 1}
          </Button>
        ))}
      </div>
      <Button
        data-testid="page-next"
        className={clsx(
          {
            'pointer-events-none opacity-50': currentPage === totalPage,
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
