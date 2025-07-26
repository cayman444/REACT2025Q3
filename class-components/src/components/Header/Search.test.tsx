import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Search } from './Search.component';
import {
  renderWithContext,
  localStorageMocks,
  renderWithRouter,
} from '../../tests/utils';

const getElements = () => {
  return {
    input: screen.getByRole('textbox'),
    button: screen.getByRole('button', { name: /search/i }),
  };
};

const STORAGE_KEY = 'searchValue';
const MOCK_VALUE = 'mock-value';

describe('Rendering tests', () => {
  localStorageMocks();

  it('should render a search field and a search button', () => {
    renderWithRouter(Search);

    const { button, input } = getElements();

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should display a previously saved search query from localStorage when mounted', () => {
    localStorage.setItem(STORAGE_KEY, MOCK_VALUE);

    renderWithRouter(Search);

    const { input } = getElements();

    expect(input).toHaveValue(MOCK_VALUE);
  });

  it('should display an empty value if there is no saved query', () => {
    localStorage.setItem(STORAGE_KEY, '');

    renderWithRouter(Search);

    const { input } = getElements();
    expect(input).toHaveValue('');
  });
});

describe('User interaction tests', () => {
  localStorageMocks();

  it('should update the input value when the user enters data', async () => {
    renderWithRouter(Search);

    const { input } = getElements();

    expect(input).toHaveValue('');
    await userEvent.type(input, MOCK_VALUE);
    expect(input).toHaveValue(MOCK_VALUE);
  });

  it('should saves the search query to localStorage when the search button is clicked', async () => {
    renderWithRouter(Search);

    const { input, button } = getElements();

    await userEvent.type(input, MOCK_VALUE);
    await userEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith(STORAGE_KEY, MOCK_VALUE);
    expect(localStorage.getItem(STORAGE_KEY)).toBe(MOCK_VALUE);
  });

  it('should remove spaces in the query before saving', async () => {
    renderWithRouter(Search);

    const { input, button } = getElements();

    await userEvent.type(input, `  ${MOCK_VALUE}  `);
    await userEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith(STORAGE_KEY, MOCK_VALUE);
  });

  it('should triggers search callback with correct parameters', async () => {
    const setSearchValue = vi.fn();

    renderWithContext(<Search />, {
      searchValue: '',
      setSearchValue,
    });

    const { input, button } = getElements();

    await userEvent.type(input, MOCK_VALUE);
    await userEvent.click(button);

    expect(setSearchValue).toHaveBeenCalledWith(MOCK_VALUE);
  });
});

describe('LocalStorage Integration tests', () => {
  localStorageMocks();

  it('should retrieves saved search term on component mount', () => {
    renderWithContext(<Search />, {
      searchValue: MOCK_VALUE,
    });

    const { input } = getElements();

    expect(input).toHaveValue(MOCK_VALUE);
  });

  it('should overwrites existing localStorage value when new search is performed', async () => {
    localStorage.setItem(STORAGE_KEY, 'old-value');

    renderWithRouter(Search);

    const { input, button } = getElements();

    expect(localStorage.getItem(STORAGE_KEY)).toBe('old-value');
    await userEvent.clear(input);
    await userEvent.type(input, MOCK_VALUE);
    await userEvent.click(button);
    expect(localStorage.getItem(STORAGE_KEY)).toBe(MOCK_VALUE);
  });
});
