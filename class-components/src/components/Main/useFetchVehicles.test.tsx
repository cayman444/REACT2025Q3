import type { PropsWithChildren } from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useFetchVehicles } from './useFetchVehicles';
import type { IVehicle } from '../../types';
import { api } from '../../services';
import { renderWithContext } from '../../tests/utils/renderWithContext';
import { AppProvider } from '../../context';
import { AxiosError } from 'axios';

const MOCK_DATA = [
  {
    properties: {
      name: 'name 1',
      manufacturer: 'manufacturer 1',
    },
    uid: '1',
  },
  {
    properties: {
      name: 'name 2',
      manufacturer: 'manufacturer 2',
    },
    uid: '2',
  },
  {
    properties: {
      name: 'name 3',
      manufacturer: 'manufacturer 3',
    },
    uid: '3',
  },
] as IVehicle[];

describe('useFetchVehicles', () => {
  beforeEach(() => {
    vi.spyOn(api, 'get').mockResolvedValue({
      data: {
        results: MOCK_DATA,
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const wrapper = ({ children }: PropsWithChildren) => (
    <MemoryRouter>
      <AppProvider>{children}</AppProvider>
    </MemoryRouter>
  );

  it('should return correct number of items when data is provided', async () => {
    const { result } = renderHook(() => useFetchVehicles(), { wrapper });

    await waitFor(() => {
      expect(result.current.vehicles.length).toBe(MOCK_DATA.length);
      expect(api.get).toBeCalledTimes(1);
    });
  });

  it('should return correct number of items', async () => {
    vi.spyOn(api, 'get').mockResolvedValue({
      data: {
        result: MOCK_DATA,
      },
    });

    const { result } = renderHook(() => useFetchVehicles(), { wrapper });

    await waitFor(() => {
      expect(result.current.vehicles.length).toBe(MOCK_DATA.length);
      expect(api.get).toBeCalledTimes(1);
    });
  });

  it('should calls API with correct parameters', async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <MemoryRouter>
        {renderWithContext(children, { searchValue: 'search' })}
      </MemoryRouter>
    );

    renderHook(() => useFetchVehicles(), { wrapper });

    await waitFor(() => {
      expect(api.get).toBeCalledWith(
        '/vehicles',
        expect.objectContaining({
          params: expect.objectContaining({
            name: 'search',
          }),
        })
      );
    });
  });

  it('should return error message when API call fails', async () => {
    vi.mocked(api.get).mockRejectedValue(new AxiosError('my error'));

    const { result } = renderHook(() => useFetchVehicles(), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.error).toBe('my error');
      expect(result.current.isLoading).toBe(false);
      expect(result.current.vehicles).toEqual([]);
    });
  });

  it('should return error message when API call fails unknown error', async () => {
    vi.mocked(api.get).mockRejectedValue('unknown error');
    const { result } = renderHook(() => useFetchVehicles(), { wrapper });

    await waitFor(() => {
      expect(result.current.error).toBe('Response error');
      expect(result.current.isLoading).toBe(false);
      expect(result.current.vehicles).toEqual([]);
    });
  });
});
