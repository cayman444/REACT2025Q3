import { useEffect, type FC } from 'react';
import { Card } from './Card.component';
import { Spinner } from '../ui';
import { useAppSelector } from '../../hooks';
import { useGetVehiclesQuery } from '../../services';
import { useAppContext } from '../../context';

export const CardList: FC = () => {
  const { searchValue, setCurrentPage, setTotalPage } = useAppContext();
  const { selectedCards } = useAppSelector((state) => state.cards);
  const { data, isLoading, error } = useGetVehiclesQuery();

  const vehicles = data?.result ? data.result : data?.results;

  useEffect(() => {
    if (!data) return;

    if (searchValue) {
      setCurrentPage(1);
    }

    setTotalPage(data.total_pages);
  }, [data, searchValue, setCurrentPage, setTotalPage]);

  return (
    <section className="relative flex flex-col justify-center gap-5 min-h-18">
      {isLoading && <Spinner />}
      {error && (
        <div className="text-center font-medium text-red-500">
          {'message' in error ? error.message : ''}
        </div>
      )}
      {!vehicles?.length && !isLoading && !error && (
        <div
          data-testid="card-empty"
          className="text-center font-medium text-gray-800 dark:text-gray-200"
        >
          Nothing found for this request
        </div>
      )}
      {vehicles?.map(
        ({ properties: { name, manufacturer: description }, uid }) => (
          <Card
            key={uid}
            name={name}
            description={description}
            isCardChecked={selectedCards.some((card) => card.id === uid)}
            id={uid}
          />
        )
      )}
    </section>
  );
};
