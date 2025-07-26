import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  name: string;
  description: string;
  id: string;
}

export const Card: FC<CardProps> = ({ name, description, id }) => {
  const navigate = useNavigate();

  return (
    <article
      data-testid="card"
      className="border-b-2 border-gray-200 pb-2 cursor-pointer"
      onClick={() => navigate(`details/${id}`)}
    >
      <h2 className="inline text-gray-800 font-medium">{name}: </h2>
      <p className="inline text-gray-700">{description}</p>
    </article>
  );
};
