import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context';
import { getPlaces } from '../../services';
import type { IPlace } from '../../types';

export const useFetchPlaces = () => {
  const { searchValue, itemsPage, itemsLimit } = useAppContext();
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchItems(searchValue, itemsPage, itemsLimit);
  }, [itemsLimit, itemsPage, searchValue]);

  const fetchItems = async (
    searchValue: string,
    page: number,
    limit: number
  ) => {
    try {
      setIsLoading(true);
      setError('');
      setPlaces([]);

      const { data } = await getPlaces(searchValue, page, limit);

      setPlaces(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
        return;
      }

      setError('Response error');
    } finally {
      setIsLoading(false);
    }
  };

  return { places, isLoading, error };
};
