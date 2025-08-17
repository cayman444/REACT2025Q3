import { Metadata } from 'next';
import { API_URL } from '@/services';
import { IVehicle, VehicleResponse } from '@/types';
import { ButtonDetailedClose } from '@/components';

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

export const metadata: Metadata = {
  title: 'DetailsCard page',
};

export default async function DetailsCard({
  params,
}: {
  params: Promise<{ detailsId: string }>;
}) {
  const { detailsId } = await params;

  const res = await fetch(`${API_URL}/vehicles/${detailsId}`, {
    next: { revalidate: 60 },
  });
  const data: VehicleResponse = await res.json();

  const vehicle = data?.result;

  return (
    <article className="flex flex-col justify-center gap-5 bg-white/50 dark:bg-gray-800 p-5 rounded shadow min-h-28 relative">
      <h2 className="text-center font-medium text-gray-800 dark:text-gray-200">
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
      <ButtonDetailedClose />
    </article>
  );
}
