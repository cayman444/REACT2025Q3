'use client';

import { useTranslations } from 'next-intl';
import { starWarsApi } from '@/services';
import { useAppDispatch } from '@/hooks';
import { Button } from '@/components/ui';

export const ButtonRefreshData = () => {
  const t = useTranslations('Home');
  const dispatch = useAppDispatch();

  const handleRefreshData = () => {
    dispatch(starWarsApi.util.invalidateTags(['Vehicles']));
  };

  return <Button onClick={handleRefreshData}>{t('refetch')}</Button>;
};
