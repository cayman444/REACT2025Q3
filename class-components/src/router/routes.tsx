import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { DetailsCard } from '../components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'details/:detailsId', element: <DetailsCard /> }],
  },
]);
