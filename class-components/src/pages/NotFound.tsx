import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import { RouteNames } from '../router';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center gap-8 bg-white p-5 rounded shadow">
        <h1 className="text-gray-800 font-medium text-2xl">Nothing found 😕</h1>
        <Button onClick={() => navigate(RouteNames.HOME)}>Back</Button>
      </div>
    </div>
  );
};
