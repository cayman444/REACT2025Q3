'use client';

import { useState, type FC, type MouseEvent } from 'react';
import { useAppContext } from '../../context';
import { Button } from '../ui';
import { useAppDispatch } from '../../hooks';
import { setPagination } from '../../store/Pagination';
import { useTranslations } from 'next-intl';

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const t = useTranslations('Home');
  const { searchValue, setSearchValue } = useAppContext();
  const [value, setValue] = useState(searchValue);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const valueTrimmed = value.trim();

    if (valueTrimmed) dispatch(setPagination({ currentPage: 1 }));

    setSearchValue(valueTrimmed);
  };

  return (
    <form className="flex justify-between items-center gap-5">
      <input
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t('placeholder')}
        className="w-full border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors dark:text-gray-200 dark:border-gray-700 dark:placeholder:text-gray-600 dark:focus:border-blue-400"
      />
      <Button onClick={handleButtonClick}>{t('search')}</Button>
    </form>
  );
};
