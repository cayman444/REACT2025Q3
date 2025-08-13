import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AppProvider } from '../../context';
import { Navbar } from '../../components';

export const metadata: Metadata = {
  title: 'Home page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <Navbar />
      {children}
    </AppProvider>
  );
}
