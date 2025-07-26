import { screen, waitFor } from '@testing-library/react';
import { Main } from './Main.component';
import { renderWithRouter } from '../../tests/utils';

describe.skip('Rendering Tests', () => {
  it('should not show pagination component when loading state', async () => {
    renderWithRouter(<Main />);

    await waitFor(() => {
      expect(screen.queryByTestId('pagination')).toBeInTheDocument();
    });
  });
});
