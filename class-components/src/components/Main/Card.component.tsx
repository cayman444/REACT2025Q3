import { type FC } from 'react';

interface CardProps {
  name: string;
  description: string;
}

export const Card: FC<CardProps> = ({ name, description }) => {
  return (
    <article data-testid="card" className="border-b-2 border-gray-200 pb-2">
      <h2 className="inline text-gray-800 font-medium">{name}: </h2>
      <p className="inline text-gray-700">{description}</p>
    </article>
  );
};
