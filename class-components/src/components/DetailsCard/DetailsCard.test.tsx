import type { PropsWithChildren } from 'react';
import { renderHook, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AxiosError } from 'axios';
import { api } from '../../services';
import { renderWithRouter } from '../../tests/utils';
import { DetailsCard } from './DetailsCard';
import { useFetchVehicle } from './useFetchVehicle';

const MOCK_DATA = {
  properties: {
    name: 'name 1',
    manufacturer: 'manufacturer 1',
  },
  uid: '1',
};

describe('DetailsCard', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockResolvedValue({
      data: {
        result: MOCK_DATA,
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const wrapper = ({ children }: PropsWithChildren) => (
    <MemoryRouter>{children}</MemoryRouter>
  );

  it('should return correct data', async () => {
    renderWithRouter(<DetailsCard />);
    const { result } = renderHook(() => useFetchVehicle('1'), { wrapper });

    const spinner = screen.queryByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    await waitFor(() => {
      expect(spinner).not.toBeInTheDocument();
      expect(
        screen.getByRole('heading', {
          name: result.current.vehicle?.properties.name,
        })
      ).toBeInTheDocument();
    });

    const heading = await screen.findByRole('heading', {
      name: result.current.vehicle?.properties.name,
    });

    expect(heading).toBeInTheDocument();
  });

  it('should displays error message when API call fails', async () => {
    vi.mocked(api.get).mockRejectedValue(new AxiosError('my error'));

    renderWithRouter(<DetailsCard />);
    const { result } = renderHook(() => useFetchVehicle('1'), { wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent(
        result.current.error || ''
      );
    });
  });

  it('should return error message when API call fails unknown error', async () => {
    vi.mocked(api.get).mockRejectedValue('unknown error');
    renderWithRouter(<DetailsCard />);
    renderHook(() => useFetchVehicle('1'), { wrapper });

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent('Response error');
    });
  });
});
