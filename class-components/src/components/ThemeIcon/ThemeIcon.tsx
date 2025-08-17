'use client';

import { useEffect, type FC } from 'react';
import Image from 'next/image';
import { useAppContext } from '@/context';

export const ThemeIcon: FC = () => {
  const { isDarkTheme, setIsDarkTheme } = useAppContext();

  const themeClickHandler = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  return (
    <>
      {isDarkTheme ? (
        <Image
          src={'/moon.svg'}
          className="cursor-pointer"
          onClick={themeClickHandler}
          alt="dark-theme-icon"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={'/sun.svg'}
          className="cursor-pointer"
          onClick={themeClickHandler}
          alt="light-theme-icon"
          width={24}
          height={24}
        />
      )}
    </>
  );
};
