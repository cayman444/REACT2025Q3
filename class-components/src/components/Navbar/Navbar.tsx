'use client';

import clsx from 'clsx';
import { useAppContext } from '../../context';
import { ThemeIcon } from '../ThemeIcon/ThemeIcon';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ROUTE_NAMES } from '../../constants/pages';

export const Navbar = () => {
  const { isDarkTheme, setIsDarkTheme } = useAppContext();
  const pathname = usePathname();

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
    <nav
      data-testid="navbar"
      className="flex gap-5 justify-between items-center min-h-20 mx-auto max-w-3xl px-4"
    >
      <div className="flex gap-5 justify-center items-center flex-auto">
        <Link
          href={ROUTE_NAMES.HOME}
          className={clsx(
            'text-gray-800 font-medium dark:text-gray-200',
            (pathname === ROUTE_NAMES.HOME ||
              pathname === ROUTE_NAMES.ITEM_DETAILS) &&
              'underline pointer-events-none'
          )}
        >
          Home
        </Link>
        <Link
          href={ROUTE_NAMES.ABOUT}
          className={`text-gray-800 font-medium dark:text-gray-200 ${pathname === ROUTE_NAMES.ABOUT ? 'underline pointer-events-none' : ''}`}
        >
          About
        </Link>
      </div>
      <ThemeIcon isDarkTheme={isDarkTheme} onClick={themeClickHandler} />
    </nav>
  );
};
