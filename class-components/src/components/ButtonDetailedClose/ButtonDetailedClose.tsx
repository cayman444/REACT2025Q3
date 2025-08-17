'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '../../i18n/navigation';
import { Button } from '../ui';
import { ROUTE_NAMES } from '../../constants/pages';

export const ButtonDetailedClose = () => {
  const t = useTranslations('Home');
  const router = useRouter();

  const closeDetailedCard = () => {
    router.push(ROUTE_NAMES.HOME);
  };

  return <Button onClick={closeDetailedCard}>{t('close')}</Button>;
};
