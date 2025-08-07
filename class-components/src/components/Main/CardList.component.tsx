import { type FC } from 'react';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Card } from './Card.component';
import { Spinner } from '../ui';
import { useAppSelector } from '../../hooks';
import type { VehiclesResponse } from '../../types';

interface CardsListProps {
  data?: VehiclesResponse;
  isFetching: boolean;
  error?: SerializedError | FetchBaseQueryError;
}

export const CardList: FC<CardsListProps> = ({ data, isFetching, error }) => {
  const { selectedCards } = useAppSelector((state) => state.cards);

  const vehicles = data?.result ? data.result : data?.results;

  return (
    <section className="relative flex flex-col justify-center gap-5 min-h-18">
      {isFetching && <Spinner />}
      {error && !isFetching && (
        <div className="text-center font-medium text-red-500">
          {'status' in error ? error.status : ''}
        </div>
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
