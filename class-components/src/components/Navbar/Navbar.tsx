import { NavLink, useMatch } from 'react-router-dom';
import clsx from 'clsx';
import { RouteNames } from '../../router';
import { useAppContext } from '../../context';
import { ThemeIcon } from '../ThemeIcon/ThemeIcon';
import { useEffect } from 'react';

export const Navbar = () => {
  const { isDarkTheme, setIsDarkTheme } = useAppContext();
  const isHomeActive = useMatch(RouteNames.HOME);
  const isDetailsActive = useMatch(RouteNames.ITEM_DETAILS);

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
        <NavLink
          to={RouteNames.HOME}
          className={clsx(
            'text-gray-800 font-medium dark:text-gray-200',
            (isHomeActive || isDetailsActive) && 'underline pointer-events-none'
          )}
        >
          Home
        </NavLink>
        <NavLink
          to={RouteNames.ABOUT}
          className={({ isActive }) =>
            `text-gray-800 font-medium dark:text-gray-200 ${isActive ? 'underline pointer-events-none' : ''}`
          }
        >
          About
        </NavLink>
      </div>
      <ThemeIcon isDarkTheme={isDarkTheme} onClick={themeClickHandler} />
    </nav>
  );
};
