import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { DetailsCard } from '../components';
import { About, Home, NotFound } from '../pages';

export const RouteNames = {
  HOME: '/',
  ITEM_DETAILS: '/details/:detailsId',
  ABOUT: '/about',
};

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: RouteNames.HOME,
        element: <Home />,
        children: [{ path: RouteNames.ITEM_DETAILS, element: <DetailsCard /> }],
      },
      { path: RouteNames.ABOUT, element: <About /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
