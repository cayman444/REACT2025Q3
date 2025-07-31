import { useRef, type FC } from 'react';
import { Button } from '../ui';
import { useAppDispatch } from '../../hooks';
import { unselectAllCards } from '../../store/Cards.slice';
import type { ISelectedCard } from '../../types';

interface SelectedCardsProps {
  cards: ISelectedCard[];
}

export const SelectedCards: FC<SelectedCardsProps> = ({ cards }) => {
  const dispatch = useAppDispatch();
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const saveCards = () => {
    const link = downloadRef.current;
    if (!link) return;

    const headerCsv = Object.keys(cards[0]).join(',');
    const bodyCsv = cards.map((card) => Object.values(card)).join('\n');
    const resCsv = [headerCsv, bodyCsv].join('\n');

    const file = new Blob([resCsv], { type: 'text/csv' });

    const url = URL.createObjectURL(file);
    link.href = url;
    link.download = `${cards.length}_cards`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-between gap-5 bg-white/50 dark:bg-gray-800 p-5 rounded shadow">
      <div className="font-medium dark:text-gray-200">
        Items are selected: {cards.length}
      </div>
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
