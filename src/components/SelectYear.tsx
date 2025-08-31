import { memo, useCallback, type ChangeEvent } from 'react';
import { useAppDispatch } from '@/store';
import { setSelectYear } from '@/store/countriesInfo';

const SelectYearComponent = () => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSelectYear(+e.target.value));
    },
    [dispatch]
  );

  return (
    <label className="flex items-center gap-2">
      <span className="font-medium">Select year:</span>
      <select
        name="year-select"
        defaultValue="2023"
        onChange={handleChange}
        className="border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer"
      >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </label>
  );
};

export const SelectYear = memo(SelectYearComponent);
