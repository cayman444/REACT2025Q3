import { Outlet } from 'react-router-dom';
import { AppProvider } from './context';
import { ErrorBoundary, Navbar } from './components';

export const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Navbar />
        <Outlet />
      </AppProvider>
    </ErrorBoundary>
  );
};
