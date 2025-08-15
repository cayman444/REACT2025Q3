'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '../../i18n/navigation';
import { Button } from '../ui';
import { ROUTE_NAMES } from '../../constants/pages';

export const ButtonToHome = () => {
  const t = useTranslations('About');
  const router = useRouter();

  return (
    <Button onClick={() => router.push(ROUTE_NAMES.HOME)}>{t('back')}</Button>
  );
};
