import { useEffect, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { toggleCard } from '../../store/Cards.slice';

interface CardProps {
  name: string;
  description: string;
  id: string;
  isCardChecked: boolean;
}

export const Card: FC<CardProps> = ({
  name,
  description,
  isCardChecked,
  id,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(isCardChecked);
  }, [isCardChecked]);

  const checkboxHandleChange = () => {
    setChecked(!checked);
    dispatch(toggleCard(id));
  };

  return (
    <article
      data-testid="card"
      className="flex items-center gap-5 border-b-2 border-gray-200 pb-2"
    >
      <div
        className="flex-auto cursor-pointer"
        onClick={() => navigate(`details/${id}`)}
      >
        <h2 className="inline text-gray-800 font-medium">{name}: </h2>
        <p className="inline text-gray-700">{description}</p>
      </div>
      <input
        type="checkbox"
        name="card-select"
        checked={checked}
        onChange={checkboxHandleChange}
      />
    </article>
  );
};
