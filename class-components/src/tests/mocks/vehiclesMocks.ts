import { api } from '../../services';
import type { IVehicle } from '../../types';

export const MOCK_DATA = [
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

export const vehiclesMocks = () => {
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
};
