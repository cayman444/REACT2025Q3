import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/navigation';
import { routing } from '../../i18n/routing';

export const LanguageSelect = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const locales = routing.locales;

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      name="language-select"
      value={locale}
      onChange={changeLanguage}
      className="text-gray-800 dark:text-gray-200 outline-0 cursor-pointer"
    >
      {locales.map((localeName) => (
        <option
          key={localeName}
          className="bg-white/50 dark:bg-gray-800"
          value={localeName}
        >
          {localeName.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
