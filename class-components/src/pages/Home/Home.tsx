import { Outlet, useOutlet } from 'react-router-dom';
import { Header, Main, SelectedCards } from '../../components';
import { useAppSelector } from '../../hooks';

export const Home = () => {
  const hasOutlet = useOutlet();
  const { selectedCardsId } = useAppSelector((state) => state.cards);

  return (
    <div
      data-testid="home"
      className="flex flex-col mx-auto max-w-3xl px-4 pb-4 gap-5"
    >
      <Header />
      <div
        className={`grid ${hasOutlet ? 'grid-cols-2' : 'grid-cols-1'} items-start justify-center gap-5`}
      >
        <Main />
        <Outlet />
      </div>
      {selectedCardsId.length ? (
        <SelectedCards cards={selectedCardsId} />
      ) : null}
    </div>
  );
};
