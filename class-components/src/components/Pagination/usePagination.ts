import { useAppDispatch } from '@/hooks';
import { usePathname, useRouter } from '@/i18n';
import { setPagination } from '@/store/Pagination';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

interface usePaginationProps {
  currentPage: number;
  totalPage: number | null;
}

interface usePaginationReturn {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleSelectPage: (page: number) => void;
}

export const usePagination = ({
  currentPage,
  totalPage,
}: usePaginationProps): usePaginationReturn => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dispatch = useAppDispatch();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const query = createQueryString('page', currentPage.toString());

    router.push(`${pathname}?${query}`);
  }, [createQueryString, currentPage, pathname, router, searchParams]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPagination({ currentPage: currentPage - 1 }));
    }
  };

  const handleNextPage = () => {
    if (totalPage && currentPage < totalPage) {
      dispatch(setPagination({ currentPage: currentPage + 1 }));
    }
  };

  const handleSelectPage = (page: number) => {
    dispatch(setPagination({ currentPage: page }));
  };

  return { handlePrevPage, handleNextPage, handleSelectPage };
};
