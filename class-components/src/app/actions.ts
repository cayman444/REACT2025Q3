'use server';

import { ISelectedCard } from '@/types';

export const csvFormation = async (selectedCards: ISelectedCard[]) => {
  const headerCsv = Object.keys(selectedCards[0]).join(',');
  const bodyCsv = selectedCards.map((card) => Object.values(card)).join('\n');
  const resCsv = [headerCsv, bodyCsv].join('\n');

  const file = new Blob([resCsv], { type: 'text/csv' });

  return file;
};
