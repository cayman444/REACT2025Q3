import { useNavigate, useParams } from 'react-router-dom';
import { useFetchVehicle } from './useFetchVehicle';
import { Button, Spinner } from '../ui';
import type { IVehicle } from '../../types';

export const DetailsCard = () => {
  const { detailsId } = useParams<{ detailsId: string }>();
  const navigate = useNavigate();
  const { vehicle, isLoading, error } = useFetchVehicle(detailsId || '');

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

  const closeDetailedCard = () => {
    navigate('/');
  };

  return (
    <article className="flex flex-col gap-5 bg-white/50 p-5 rounded shadow min-h-28 relative">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error && (
            <div className="text-center font-medium text-red-500">{error}</div>
          )}
          <h2 className="text-center font-medium">
            {vehicle?.properties.name}
          </h2>
          <ul className="flex flex-col gap-2">
            {DESCRIPTION_LIST.map((desc, ind) => (
              <li key={ind}>
                <span className="inline text-gray-800 font-medium">
                  {desc.replaceAll('_', ' ')}:
                </span>{' '}
                <p className="inline text-gray-700">
                  {vehicle?.properties?.[desc]}
                </p>
              </li>
            ))}
          </ul>
          <Button onClick={closeDetailedCard}>Close</Button>
        </>
      )}
    </article>
  );
};
