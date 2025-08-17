'use client';

import { useRef, type FC } from 'react';
import { useTranslations } from 'next-intl';
import { unselectAllCards } from '@/store/Cards';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { csvFormation } from '@/app/actions';
import { Button } from '@/components/ui';

export const SelectedCards: FC = () => {
  const t = useTranslations('Home');
  const { selectedCards } = useAppSelector((state) => state.cards);

  const dispatch = useAppDispatch();
  const downloadRef = useRef<HTMLAnchorElement>(null);

  if (!selectedCards.length) return null;

  const saveCards = async () => {
    const link = downloadRef.current;
    if (!link) return;

    const file = await csvFormation(selectedCards);

    const url = URL.createObjectURL(file);
    link.href = url;
    link.download = `${selectedCards.length}_cards`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      data-testid="selected-cards"
      className="flex items-center justify-between gap-5 bg-white/50 dark:bg-gray-800 p-5 rounded shadow"
    >
      <div
        data-testid="items-selected"
        className="font-medium dark:text-gray-200"
      >
        {t('selected')}: {selectedCards.length}
      </div>
      <div className="flex gap-2">
        <Button
          data-testid="button-unselect"
          onClick={() => dispatch(unselectAllCards())}
        >
          {t('unselect')}
        </Button>
        <Button data-testid="button-download" onClick={saveCards}>
          {t('download')}
        </Button>
        <a
          data-testid="link-download"
          href=""
          ref={downloadRef}
          className="hidden"
        />
      </div>
    </div>
  );
};
