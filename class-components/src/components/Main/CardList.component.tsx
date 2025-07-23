import { useContext, useEffect, useState, type FC } from 'react';
import axios from 'axios';
import type { ZeldaPlaceResponse, IPlace } from '../../types';
import { Card } from './Card.component';
import { Spinner } from '../ui';
import { AppContext } from '../../context';

export const CardList: FC = () => {
  const context = useContext(AppContext);
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchItems = async (searchValue?: string) => {
    try {
      setIsLoading(true);
      setError('');
      setPlaces([]);

      const response = await axios.get<ZeldaPlaceResponse>(
        'https://zelda.fanapis.com/api/places',
        {
          params: {
            name: searchValue ? searchValue : null,
          },
        }
      );

      setPlaces(response.data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
        return;
      }

      setError('Response error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(context?.searchValue);
  }, [context?.searchValue]);

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
