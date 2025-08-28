import { Suspense } from 'react';
import { TableCountriesEmissions } from '@/components/TableCountriesEmissions';

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <TableCountriesEmissions />
      </Suspense>
    </>
  );
};
