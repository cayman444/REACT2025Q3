import { AppProvider } from './context';
import { ErrorBoundary, Navbar } from './components';
import { Outlet } from 'react-router-dom';

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
