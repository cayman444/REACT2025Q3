'use client';

import { useAppDispatch } from '../../hooks';
import { starWarsApi } from '../../services';
import { Button } from '../ui';

export const ButtonRefreshData = () => {
  const dispatch = useAppDispatch();

  const handleRefreshData = () => {
    dispatch(starWarsApi.util.invalidateTags(['Vehicles']));
  };

  return <Button onClick={handleRefreshData}>Refetch data</Button>;
};
