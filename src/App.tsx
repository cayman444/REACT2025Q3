import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TableCountriesEmissions } from '@/components/TableCountriesEmissions';
import { Spinner } from '@/components/ui/Spinner';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="relative h-screen">
            <Spinner />
          </div>
        }
      >
        <TableCountriesEmissions />
      </Suspense>
    </QueryClientProvider>
  );
};
