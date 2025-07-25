import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { DetailsCard } from '../components';
import { About } from '../pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'details/:detailsId', element: <DetailsCard /> }],
  },
  { path: '/about', element: <About /> },
]);
