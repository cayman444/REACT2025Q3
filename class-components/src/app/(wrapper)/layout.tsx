import { ReactNode } from 'react';
import { AppProvider } from '../../context';
import { Navbar } from '../../components';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <Navbar />
      {children}
    </AppProvider>
  );
}
