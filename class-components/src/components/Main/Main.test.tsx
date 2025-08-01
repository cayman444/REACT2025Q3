import { renderHook, screen, waitFor } from '@testing-library/react';
import { Main } from './Main.component';
import {
  renderTestApp,
  renderWithContext,
  renderWithRouter,
} from '../../tests/utils';
import { useFetchVehicles } from './useFetchVehicles';
import type { PropsWithChildren } from 'react';
import { vehiclesMocks } from '../../tests/mocks';

describe('Rendering Tests', () => {
  vehiclesMocks();

  const wrapper = ({ children }: PropsWithChildren) => renderTestApp(children);

  it('should not show pagination component when loading state', async () => {
    renderWithRouter(renderWithContext(<Main />, { totalPage: 10 }));
    renderHook(() => useFetchVehicles(), { wrapper });

    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('pagination')).toBeInTheDocument();
    });
  });
});
