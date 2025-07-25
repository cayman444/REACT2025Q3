import { AppProvider } from './context';
import { ErrorBoundary, Header, Main } from './components';
import { Outlet, useOutlet } from 'react-router-dom';
import { Navbar } from './layouts/Navbar';

export const App = () => {
  const hasOutlet = useOutlet();

  return (
    <AppProvider>
      <ErrorBoundary>
        <div className="flex flex-col mx-auto max-w-3xl px-4 py-8 gap-5">
          <Navbar />
          <Header />
          <div
            className={`grid ${hasOutlet ? 'grid-cols-2' : 'grid-cols-1'} items-start justify-center gap-5`}
          >
            <Main />
            <Outlet />
          </div>
        </div>
      </ErrorBoundary>
    </AppProvider>
  );
};
