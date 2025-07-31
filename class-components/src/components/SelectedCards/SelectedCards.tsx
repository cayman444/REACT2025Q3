import { useRef, type FC } from 'react';
import { Button } from '../ui';
import { useAppDispatch } from '../../hooks';
import { unselectAllCards } from '../../store/Cards.slice';

interface SelectedCardsProps {
  cards: string[];
}

export const SelectedCards: FC<SelectedCardsProps> = ({ cards }) => {
  const dispatch = useAppDispatch();
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const saveCards = () => {
    const link = downloadRef.current;
    if (!link) return;

    const file = new Blob([cards.join(',')], { type: 'text/csv' });

    const url = URL.createObjectURL(file);
    link.href = url;
    link.download = `${cards.length}_cards`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-between gap-5 bg-white/50 p-5 rounded shadow">
      <div>Items are selected: {cards.length}</div>
      <div className="flex gap-2">
        <Button onClick={() => dispatch(unselectAllCards())}>
          Unselect all
        </Button>
        <Button onClick={saveCards}>Download</Button>
        <a href="" ref={downloadRef} className="hidden"></a>
      </div>
    </div>
  );
};
