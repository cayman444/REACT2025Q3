import type { FC } from 'react';
import { useAppContext } from '../../context';
import { Button } from '../ui';
import clsx from 'clsx';

export const Pagination: FC = () => {
  const { totalPage, currentPage, setCurrentPage } = useAppContext();

  if (!totalPage) return;

  const pages = [...Array(totalPage)];

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button
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
            onClick={() => setCurrentPage(ind + 1)}
          >
            {ind + 1}
          </Button>
        ))}
      </div>
      <Button
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
