import clsx from 'clsx';
import { NavLink, useMatch } from 'react-router-dom';
import { RouteNames } from '../../router';

export const Navbar = () => {
  const isHomeActive = useMatch(RouteNames.HOME);
  const isDetailsActive = useMatch(RouteNames.ITEM_DETAILS);

  return (
    <nav className="flex gap-5 justify-center items-center min-h-20">
      <NavLink
        to={RouteNames.HOME}
        className={clsx(
          'text-gray-800 font-medium',
          (isHomeActive || isDetailsActive) && 'underline pointer-events-none'
        )}
      >
        Home
      </NavLink>
      <NavLink
        to={RouteNames.ABOUT}
        className={({ isActive }) =>
          `text-gray-800 font-medium ${isActive ? 'underline pointer-events-none' : ''}`
        }
      >
        About
      </NavLink>
    </nav>
  );
};
