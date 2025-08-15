'use client';

import { useTranslations } from 'next-intl';
import { useAppDispatch } from '../../hooks';
import { starWarsApi } from '../../services';
import { Button } from '../ui';

export const ButtonRefreshData = () => {
  const t = useTranslations('Home');
  const dispatch = useAppDispatch();

  const handleRefreshData = () => {
    dispatch(starWarsApi.util.invalidateTags(['Vehicles']));
  };

  return <Button onClick={handleRefreshData}>{t('refetch')}</Button>;
};
