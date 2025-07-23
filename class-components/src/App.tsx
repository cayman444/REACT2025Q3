import { AppProvider } from './context';
import { ErrorBoundary, Header, Main } from './components';

export const App = () => {
  return (
    <AppProvider>
      <ErrorBoundary>
        <div className="flex flex-col mx-auto max-w-3xl px-4 py-8 gap-5">
          <Header />
          <Main />
        </div>
      </ErrorBoundary>
    </AppProvider>
  );
};
