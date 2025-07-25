import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[calc(100vh-160px)] px-4">
      <div className="flex flex-col justify-center items-center gap-8 bg-white p-5 rounded shadow">
        <h1 className="text-gray-800 font-medium text-2xl">
          Routing and Hooks
        </h1>
        <p className="max-w-128 text-center text-gray-700 text-lg">
          The application is designed for Routing and Hooks work assignments
          within the React 2025 Q3 course.
        </p>
        <div className="flex items-center justify-center gap-5">
          <a
            className="underline hover:no-underline text-gray-800 font-medium"
            href="https://github.com/cayman444"
          >
            cayman444
          </a>
          <a
            className="underline hover:no-underline text-gray-800 font-medium"
            href="https://rs.school/courses/reactjs"
          >
            RS School
          </a>
        </div>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
};
