import { memo, useCallback, type ChangeEvent } from 'react';
import { useAppDispatch } from '@/store';
import { setSortBy, setSortMethod } from '@/store/countriesInfo';
import type { SortBy, SortMethod } from '@/types/countriesEmissionsTypes';

export const CountriesSortComponent = () => {
  const dispatch = useAppDispatch();

  const handleChangeSortBy = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortBy(e.target.value as SortBy));
    },
    [dispatch]
  );

  const handleChangeSortMethod = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortMethod(e.target.value as SortMethod));
    },
    [dispatch]
  );

  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center gap-2">
        <span className="font-medium">Sort by:</span>
        <select
          name="sort-select"
          onChange={handleChangeSortBy}
          className="border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer"
        >
          <option value="country">Country</option>
          <option value="population">Population</option>
        </select>
      </label>
      <select
        name="sort-order"
        onChange={handleChangeSortMethod}
        className="border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer"
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
    </div>
  );
};

export const CountriesSort = memo(CountriesSortComponent);
