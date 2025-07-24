import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context';
import { getVehicles } from '../../services';
import type { IVehicle } from '../../types';

export const useFetchVehicles = () => {
  const { searchValue, currentPage, limit, setTotalPage } = useAppContext();
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchItems = useCallback(
    async (searchValue: string, page: number, limit: number) => {
      try {
        setIsLoading(true);
        setError('');
        setVehicles([]);

        const response = await getVehicles(searchValue, page, limit);

        setTotalPage(response.total_pages);

        if (response.result) {
          setVehicles(response.result);
          return;
        }

        setVehicles(response.results);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
          return;
        }

        setError('Response error');
      } finally {
        setIsLoading(false);
      }
    },
    [setTotalPage]
  );

  useEffect(() => {
    fetchItems(searchValue, currentPage, limit);
  }, [searchValue, currentPage, limit, fetchItems]);

  return { vehicles, isLoading, error };
};
