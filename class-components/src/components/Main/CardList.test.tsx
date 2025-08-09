import { screen } from '@testing-library/react';
import { CardList } from './CardList.component';
import type { IVehicle } from '../../types';
import { renderTestApp } from '../../tests/utils';
import { MOCK_DATA } from '../../tests/mocks';

describe('Rendering Tests', () => {
  it('should renders correct number of items when data is provided', async () => {
    renderTestApp(<CardList vehicles={MOCK_DATA} isFetching={false} />);

    const cards = await screen.findAllByTestId('card');
    expect(cards).length(MOCK_DATA.length);
  });

  it('should displays "no results" message when data array is empty', async () => {
    renderTestApp(<CardList vehicles={[]} isFetching={false} />);

    const cardEmpty = await screen.findByTestId('card-empty');
    expect(cardEmpty).toHaveTextContent(/nothing found/i);
  });

  it('should shows loading state while fetching data', async () => {
    renderTestApp(<CardList vehicles={[]} isFetching={true} />);

    expect(screen.queryByTestId('spinner')).toBeInTheDocument();
  });
});

describe('Data Display Tests', () => {
  it('should correctly displays item names and descriptions', async () => {
    renderTestApp(<CardList vehicles={MOCK_DATA} isFetching={false} />);

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

    renderTestApp(<CardList vehicles={MOCK_DATA} isFetching={false} />);

    const cards = await screen.findAllByTestId('card');
    MOCK_DATA.forEach((_, ind) => {
      expect(cards[ind]).toBeInTheDocument();
    });
  });
});

describe('Error Handling Tests', () => {
  it('should displays error message when API call fails', async () => {
    renderTestApp(
      <CardList vehicles={[]} error="my error" isFetching={false} />
    );

    expect(await screen.findByText('my error')).toBeInTheDocument();
  });
});
