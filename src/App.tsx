import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TableCountriesEmissions } from '@/components/TableCountriesEmissions';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <TableCountriesEmissions />
      </Suspense>
    </QueryClientProvider>
  );
};
