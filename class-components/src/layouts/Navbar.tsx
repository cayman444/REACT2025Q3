import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex gap-5 justify-center">
      <NavLink
        to={'/'}
        end={false}
        className={({ isActive }) =>
          `text-gray-800 font-medium ${isActive ? 'underline pointer-events-none' : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={'about'}
        className={({ isActive }) =>
          `text-gray-800 font-medium ${isActive ? 'underline pointer-events-none' : ''}`
        }
      >
        About
      </NavLink>
    </nav>
  );
};
