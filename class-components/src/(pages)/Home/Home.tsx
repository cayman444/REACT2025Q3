import { Outlet, useOutlet } from 'react-router-dom';
import { Header, Main, SelectedCards } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button } from '../../components/ui';
import { starWarsApi } from '../../services';

export const Home = () => {
  const dispatch = useAppDispatch();
  const hasOutlet = useOutlet();
  const { selectedCards } = useAppSelector((state) => state.cards);

  const handleRefreshData = () => {
    dispatch(starWarsApi.util.invalidateTags(['Vehicles']));
  };

  return (
    <div
      data-testid="home"
      className="flex flex-col mx-auto max-w-3xl px-4 pb-4 gap-5"
    >
      <Header />
      <Button onClick={handleRefreshData}>Refetch data</Button>
      <div
        className={`grid ${hasOutlet ? 'grid-cols-2' : 'grid-cols-1'} items-start justify-center gap-5`}
      >
        <Main />
        <Outlet />
      </div>
      {selectedCards.length ? <SelectedCards cards={selectedCards} /> : null}
    </div>
  );
};
