import { screen, waitFor } from '@testing-library/react';
import { CardList } from './CardList.component';
import type { IVehicle } from '../../types';
import { renderWithRouter } from '../../tests/utils';
import { MemoryRouter } from 'react-router-dom';
import { MOCK_DATA } from '../../tests/mocks';

describe('Rendering Tests', () => {
  it('should renders correct number of items when data is provided', async () => {
    renderWithRouter(
      <CardList vehicles={MOCK_DATA} error="" isLoading={false} />
    );

    const cards = await screen.findAllByTestId('card');
    expect(cards).length(MOCK_DATA.length);
  });

  it('should displays "no results" message when data array is empty', async () => {
    renderWithRouter(<CardList vehicles={[]} error="" isLoading={false} />);

    const cardEmpty = await screen.findByTestId('card-empty');
    expect(cardEmpty).toHaveTextContent(/nothing found/i);
  });

  it('should shows loading state while fetching data', async () => {
    const { rerender } = renderWithRouter(
      <CardList vehicles={[]} error="" isLoading={true} />
    );

    expect(screen.queryByTestId('spinner')).toBeInTheDocument();

    rerender(
      <MemoryRouter>
        <CardList vehicles={MOCK_DATA} error="" isLoading={false} />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });
  });
});

describe('Data Display Tests', () => {
  it('should correctly displays item names and descriptions', async () => {
    renderWithRouter(
      <CardList vehicles={MOCK_DATA} error="" isLoading={false} />
    );

    const cards = await screen.findAllByTestId('card');

    MOCK_DATA.forEach(({ properties: { name, manufacturer } }, ind) => {
      const card = cards[ind];

      expect(card).toHaveTextContent(name);
      expect(card).toHaveTextContent(manufacturer);
    });
  });

  it('should handles missing or undefined data gracefully', async () => {
    const MOCK_DATA = [
      {
        properties: {
          manufacturer: 'manufacturer 1',
        },
        uid: '1',
      },
      {
        properties: {
          name: 'name 2',
          manufacturer: '',
        },
        uid: '2',
      },
    ] as IVehicle[];

    renderWithRouter(
      <CardList vehicles={MOCK_DATA} error="" isLoading={false} />
    );

    const cards = await screen.findAllByTestId('card');
    MOCK_DATA.forEach((_, ind) => {
      expect(cards[ind]).toBeInTheDocument();
    });
  });
});

describe('Error Handling Tests', () => {
  it('should displays error message when API call fails', async () => {
    renderWithRouter(
      <CardList vehicles={[]} error="my error" isLoading={false} />
    );

    expect(await screen.findByText('my error')).toBeInTheDocument();
  });
});
