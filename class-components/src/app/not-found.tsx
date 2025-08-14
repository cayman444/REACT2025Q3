import { ButtonToHome } from '../components';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center gap-8 bg-white dark:bg-gray-800 p-5 rounded shadow">
        <h1 className="text-gray-800 font-medium text-2xl dark:text-white">
          Nothing found 😕
        </h1>
        <ButtonToHome />
      </div>
    </div>
  );
}
