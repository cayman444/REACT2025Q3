import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { renderTestApp } from '../../tests/utils';
import { Home } from './Home';

describe('Home', () => {
  it('should render page', () => {
    const { container } = renderTestApp(<Home />);

    expect(container).toBeInTheDocument();
  });

  it('should be data updated when the refresh button is click', async () => {
    renderTestApp(<Home />);

    const refetchButton = screen.getByRole('button', { name: 'Refetch data' });

    await userEvent.click(refetchButton);

    expect(screen.queryByTestId('spinner')).toBeInTheDocument();
  });
});
