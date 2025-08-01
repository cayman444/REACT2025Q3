import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { renderTestApp } from '../../tests/utils';
import { MOCK_SELECTED_CARD } from '../../tests/mocks';
import { Home } from './Home';

describe('Home', () => {
  it('should render page', () => {
    const { container } = render(renderTestApp(<Home />));

    expect(container).toBeInTheDocument();
  });

  it('should remove SelectedCards when unselect all button click', async () => {
    render(
      renderTestApp(<Home />, {
        cards: { selectedCards: MOCK_SELECTED_CARD },
      })
    );

    const button = screen.getByTestId('button-unselect');

    await userEvent.click(button);

    expect(screen.queryByTestId('selected-cards')).toBeNull();
  });
});
