'use client';

import { type FC } from 'react';
import { IVehicle } from '@/types';
import { useAppSelector } from '@/hooks';
import { Spinner } from '@/components/ui';
import { Card } from '@/components';

interface CardsListProps {
  vehicles?: IVehicle[];
  isFetching: boolean;
  error?: string | number;
}

export const CardList: FC<CardsListProps> = ({
  vehicles,
  isFetching,
  error,
}) => {
  const { selectedCards } = useAppSelector((state) => state.cards);

  return (
    <section className="relative flex flex-col justify-center gap-5 min-h-18">
      {isFetching && <Spinner />}
      {error && !isFetching && (
        <div className="text-center font-medium text-red-500">{error}</div>
      )}
      {!vehicles?.length && !isFetching && !error && (
        <div
          data-testid="card-empty"
          className="text-center font-medium text-gray-800 dark:text-gray-200"
        >
          Nothing found for this request
        </div>
      )}
      {!isFetching
        ? vehicles?.map(
            ({ properties: { name, manufacturer: description }, uid }) => (
              <Card
                key={uid}
                name={name}
                description={description}
                isCardChecked={selectedCards.some((card) => card.id === uid)}
                id={uid}
              />
            )
          )
        : null}
    </section>
  );
};
