import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      home <Outlet />
    </div>
  );
};
