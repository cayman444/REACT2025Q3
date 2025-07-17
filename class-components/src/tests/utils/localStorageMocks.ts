export const localStorageMocks = () => {
  beforeAll(() => {
    vi.spyOn(Storage.prototype, 'getItem');
    vi.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    localStorage.clear();
    vi.resetAllMocks();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });
};
