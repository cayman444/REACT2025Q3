import { useAppDispatch } from '@/store';
import { setSearchCountryName } from '@/store/countriesInfo';

export const CountrySearch = () => {
  const dispatch = useAppDispatch();

  return (
    <input
      name="country-search"
      placeholder="Search by country..."
      onChange={(e) => dispatch(setSearchCountryName(e.target.value))}
      className="flex-auto border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors"
    />
  );
};
