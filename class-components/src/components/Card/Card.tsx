'use client';

import { type FC } from 'react';
import { useRouter } from '@/i18n';
import { useAppDispatch } from '@/hooks';
import { toggleCard } from '@/store/Cards';

interface CardProps {
  name: string;
  description: string;
  id: string;
  isCardChecked: boolean;
}

export const Card: FC<CardProps> = ({ isCardChecked, ...card }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const checkboxHandleChange = () => {
    dispatch(toggleCard(card));
  };

  return (
    <article
      data-testid="card"
      className="flex items-center gap-5 border-b-2 border-gray-200 pb-2 dark:border-gray-700"
    >
      <div
        className="flex-auto cursor-pointer"
        onClick={() => router.push(`/details/${card.id}`)}
      >
        <h2 className="inline text-gray-800 font-medium dark:text-gray-200">
          {card.name}:{' '}
        </h2>
        <p className="inline text-gray-700 dark:text-gray-400">
          {card.description}
        </p>
      </div>
      <input
        type="checkbox"
        name="card-select"
        checked={isCardChecked}
        onChange={checkboxHandleChange}
      />
    </article>
  );
};
