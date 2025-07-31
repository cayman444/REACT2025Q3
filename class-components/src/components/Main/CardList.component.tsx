import { type FC } from 'react';
import { Card } from './Card.component';
import { Spinner } from '../ui';
import type { IVehicle } from '../../types';
import { useAppSelector } from '../../hooks';

interface CardListProps {
  vehicles: IVehicle[];
  isLoading: boolean;
  error: string;
}

export const CardList: FC<CardListProps> = ({ vehicles, isLoading, error }) => {
  const { selectedCardsId } = useAppSelector((state) => state.cards);

  return (
    <section className="relative flex flex-col justify-center gap-5 min-h-18">
      {isLoading && <Spinner />}
      {error && (
        <div className="text-center font-medium text-red-500">{error}</div>
      )}
      {!vehicles.length && !isLoading && !error && (
        <div
          data-testid="card-empty"
          className="text-center font-medium text-gray-800"
        >
          Nothing found for this request
        </div>
      )}
      {vehicles.map(
        ({ properties: { name, manufacturer: description }, uid }) => (
          <Card
            key={uid}
            name={name}
            description={description}
            isCardChecked={selectedCardsId.includes(uid)}
            id={uid}
          />
        )
      )}
    </section>
  );
};
