'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useRouter } from '../../../../../../i18n/navigation';
import { skipToken } from '@reduxjs/toolkit/query';
import { IVehicle } from '../../../../../../types';
import { useGetVehicleQuery } from '../../../../../../services';
import { Button, Spinner } from '../../../../../../components/ui';
import { ROUTE_NAMES } from '../../../../../../constants/pages';

const DESCRIPTION_LIST: Array<keyof IVehicle['properties']> = [
  'vehicle_class',
  'model',
  'manufacturer',
  'crew',
  'passengers',
  'length',
  'cargo_capacity',
  'consumables',
  'cost_in_credits',
];

export default function DetailsCard() {
  const t = useTranslations('Home');
  const { detailsId } = useParams<{ detailsId: string }>();
  const router = useRouter();
  const { data, isFetching, error } = useGetVehicleQuery(
    detailsId || skipToken
  );

  const vehicle = data?.result;

  const closeDetailedCard = () => {
    router.push(ROUTE_NAMES.HOME);
  };

  return (
    <article className="flex flex-col justify-center gap-5 bg-white/50 dark:bg-gray-800 p-5 rounded shadow min-h-28 relative">
      {isFetching ? (
        <Spinner />
      ) : error && !isFetching ? (
        <div
          data-testid="error"
          className="text-center font-medium text-red-500"
        >
          {'status' in error ? error.status : ''}
        </div>
      ) : (
        <>
          <h2 className="text-center font-medium dark:text-gray-200">
            {vehicle?.properties.name}
          </h2>
          <ul className="flex flex-col gap-2">
            {DESCRIPTION_LIST.map((desc, ind) => (
              <li key={ind}>
                <span className="inline text-gray-800 font-medium dark:text-gray-200">
                  {desc.replace('_', ' ')}:
                </span>{' '}
                <p className="inline text-gray-700 dark:text-gray-400">
                  {vehicle?.properties?.[desc]}
                </p>
              </li>
            ))}
          </ul>
          <Button onClick={closeDetailedCard}>{t('close')}</Button>
        </>
      )}
    </article>
  );
}
