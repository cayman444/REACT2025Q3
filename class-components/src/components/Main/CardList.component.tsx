import { type FC } from 'react';
import { Card } from './Card.component';
import { Spinner } from '../ui';
import { useFetchPlaces } from './useFetchPlaces';

export const CardList: FC = () => {
  const { places, isLoading, error } = useFetchPlaces();

  return (
    <section className="relative flex flex-col justify-center gap-5 min-h-18">
      {isLoading && <Spinner />}
      {error && (
        <div className="text-center font-medium text-red-500">{error}</div>
      )}
      {!places.length && !isLoading && !error && (
        <div
          data-testid="card-empty"
          className="text-center font-medium text-gray-800"
        >
          Nothing found for this request
        </div>
      )}
      {places.map(({ id, name, description }) => (
        <Card key={id} name={name} description={description} />
      ))}
    </section>
  );
};
