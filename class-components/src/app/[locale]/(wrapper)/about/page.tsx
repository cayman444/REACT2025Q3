import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { ButtonToHome } from '@/components';

export const metadata: Metadata = {
  title: 'About page',
};

export default function About() {
  const t = useTranslations('About');

  return (
    <div className="flex items-center justify-center h-[calc(100vh-160px)] px-4">
      <div className="flex flex-col justify-center items-center gap-8 bg-white dark:bg-gray-800 p-5 rounded shadow">
        <h1 className="text-gray-800 font-medium text-2xl dark:text-gray-200">
          {t('title')}
        </h1>
        <p className="max-w-128 text-center text-gray-700 dark:text-gray-400 text-lg">
          {t('description')}.
        </p>
        <div className="flex items-center justify-center gap-5">
          <a
            className="underline hover:no-underline text-gray-800 font-medium dark:text-gray-200"
            href="https://github.com/cayman444"
          >
            {t('author')}
          </a>
          <a
            className="underline hover:no-underline text-gray-800 font-medium dark:text-gray-200"
            href="https://rs.school/courses/reactjs"
          >
            {t('course')}
          </a>
        </div>
        <ButtonToHome />
      </div>
    </div>
  );
}
