import { ReactNode } from 'react';
import StoreProvider from '../store/StoreProvider';
import { ErrorBoundary } from '../components';
import '../index.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <ErrorBoundary>
            <StoreProvider>{children}</StoreProvider>
          </ErrorBoundary>
        </div>
      </body>
    </html>
  );
}
