'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui';
import { ROUTE_NAMES } from '../../constants/pages';

export const ButtonToHome = () => {
  const router = useRouter();

  return <Button onClick={() => router.push(ROUTE_NAMES.HOME)}>Back</Button>;
};
