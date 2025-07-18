import { render, screen } from '@testing-library/react';
import { CardList } from './CardList.component';
import axios, { AxiosError } from 'axios';

const MOCK_DATA = [
  {
    name: 'name 1',
    description: 'desc 1',
    id: '1',
  },
  {
    name: 'name 2',
    description: 'desc 2',
    id: '2',
  },
  {
    name: 'name 3',
    description: 'desc 3',
    id: '3',
  },
];

beforeEach(() => {
  vi.spyOn(axios, 'get').mockResolvedValue({ data: { data: MOCK_DATA } });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Rendering Tests', () => {
  it('should renders correct number of items when data is provided', async () => {
    render(<CardList />);

    const cards = await screen.findAllByTestId('card');
    expect(cards).length(MOCK_DATA.length);
    expect(axios.get).toBeCalledTimes(1);
  });

  it('should displays "no results" message when data array is empty', async () => {
    vi.mocked(axios.get).mockResolvedValue({
      data: {
        data: [],
      },
    });

    render(<CardList />);

    const cardEmpty = await screen.findByTestId('card-empty');
    expect(cardEmpty).toHaveTextContent(/nothing found/i);
  });

  it('should shows loading state while fetching data', async () => {
    render(<CardList />);

    const spinner = screen.queryByTestId('spinner');

    expect(spinner).toBeInTheDocument();
    await screen.findAllByTestId('card');
    expect(spinner).not.toBeInTheDocument();
  });
});

describe('Data Display Tests', () => {
  it('should correctly displays item names and descriptions', async () => {
    render(<CardList />);

    const cards = await screen.findAllByTestId('card');

    MOCK_DATA.forEach(({ name, description }, ind) => {
      const card = cards[ind];

      expect(card).toHaveTextContent(name);
      expect(card).toHaveTextContent(description);
    });
  });

  it('should handles missing or undefined data gracefully', async () => {
    const MOCK_DATA = [
      {
        description: 'desc 1',
        id: '1',
      },
      {
        name: 'name 2',
        id: '2',
      },
    ];

    vi.mocked(axios.get).mockResolvedValue({
      data: {
        data: MOCK_DATA,
      },
    });

    render(<CardList />);

    const cards = await screen.findAllByTestId('card');
    MOCK_DATA.forEach((_, ind) => {
      expect(cards[ind]).toBeInTheDocument();
    });
  });
});

describe('Error Handling Tests', () => {
  it('should displays error message when API call fails', async () => {
    vi.mocked(axios.get).mockRejectedValue(new AxiosError('my error'));

    render(<CardList />);

    expect(await screen.findByText('my error')).toBeInTheDocument();
  });

  it('should shows appropriate error for different HTTP status codes (4xx, 5xx)', async () => {
    vi.mocked(axios.get).mockRejectedValue(new AxiosError('Not Found', '404'));

    render(<CardList />);
    expect(await screen.findByText(/not found/i)).toBeInTheDocument();

    vi.mocked(axios.get).mockRejectedValue(
      new AxiosError('Bad Gateway', '502')
    );

    render(<CardList />);
    expect(await screen.findByText(/bad gateway/i)).toBeInTheDocument();
  });
});
