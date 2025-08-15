'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../../i18n/navigation';
import clsx from 'clsx';
import { ROUTE_NAMES } from '../../constants/pages';
import { LanguageSelect } from '../LanguageSelect';
import { ThemeIcon } from '../ThemeIcon';

export const Navbar = () => {
  const t = useTranslations('Home');
  const pathname = usePathname();

  return (
    <nav
      data-testid="navbar"
      className="flex gap-3 justify-between items-center min-h-20 mx-auto max-w-3xl px-4"
    >
      <div className="flex gap-5 justify-start items-center flex-auto">
        <Link
          href={ROUTE_NAMES.HOME}
          className={clsx('text-gray-800 font-medium dark:text-gray-200', {
            'underline pointer-events-none':
              pathname === ROUTE_NAMES.HOME || pathname.includes('details'),
          })}
        >
          {t('home')}
        </Link>
        <Link
          href={ROUTE_NAMES.ABOUT}
          className={clsx('text-gray-800 font-medium dark:text-gray-200', {
            'underline pointer-events-none': pathname === ROUTE_NAMES.ABOUT,
          })}
        >
          {t('about')}
        </Link>
      </div>
      <ThemeIcon />
      <LanguageSelect />
    </nav>
  );
};
