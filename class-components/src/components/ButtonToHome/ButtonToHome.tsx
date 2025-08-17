'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n';
import { ROUTE_NAMES } from '@/constants/pages';
import { Button } from '@/components/ui';

export const ButtonToHome = () => {
  const t = useTranslations('About');
  const router = useRouter();

  return (
    <Button onClick={() => router.push(ROUTE_NAMES.HOME)}>{t('back')}</Button>
  );
};
