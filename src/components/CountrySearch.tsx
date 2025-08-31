import { memo, useCallback, type ChangeEvent } from 'react';
import { useAppDispatch } from '@/store';
import { setSearchCountryName } from '@/store/countriesInfo';

const CountrySearchComponent = () => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchCountryName(e.target.value));
    },
    [dispatch]
  );

  return (
    <input
      name="country-search"
      placeholder="Search by country..."
      onChange={handleChange}
      className="flex-auto border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors"
    />
  );
};

export const CountrySearch = memo(CountrySearchComponent);
