import { screen, waitFor } from '@testing-library/react';
import { Main } from './Main.component';
import { renderTestApp } from '../../tests/utils';

describe.skip('Rendering Tests', () => {
  it('should not show pagination component when loading state', async () => {
    renderTestApp(<Main />);

    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('pagination')).toBeInTheDocument();
    });
  });
});
