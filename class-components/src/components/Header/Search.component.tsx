import {
  useContext,
  useLayoutEffect,
  useState,
  type FC,
  type MouseEvent,
} from 'react';
import { AppContext } from '../../context';
import { Button } from '../ui';

export const Search: FC = () => {
  const context = useContext(AppContext);
  const [value, setValue] = useState('');

  useLayoutEffect(() => {
    setValue(context?.searchValue || '');
  }, [context?.searchValue]);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const valueTrimmed = value.trim();

    localStorage.setItem('searchValue', valueTrimmed);
    context?.setSearchValue(valueTrimmed);
  };

  return (
    <form className="flex justify-between items-center gap-5">
      <input
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter something..."
        className="w-full border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors"
      />
      <Button onClick={handleButtonClick}>Search</Button>
    </form>
  );
};
