import { useCallback, useEffect, useState } from 'react';
import type { IVehicle } from '../../types';
import { getVehicle } from '../../services';
import axios from 'axios';

export const useFetchVehicle = (id: string) => {
  const [vehicle, setVehicle] = useState<IVehicle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchItem = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');
      setVehicle(null);

      const response = await getVehicle(id);

      setVehicle(response.result);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
        return;
      }

      setError('Response error');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  return { vehicle, isLoading, error };
};
