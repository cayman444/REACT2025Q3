import { ReactNode } from 'react';
import { Metadata } from 'next';
import {
  Header,
  Main,
  SelectedCards,
  ButtonRefreshData,
} from '../../../components';

export const metadata: Metadata = {
  title: 'Home page',
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div
      data-testid="home"
      className="flex flex-col mx-auto max-w-3xl px-4 pb-4 gap-5"
    >
      <Header />
      <ButtonRefreshData />
      <div
        className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-start justify-center gap-5`}
      >
        <Main />
        {children}
      </div>
      <SelectedCards />
    </div>
  );
}
