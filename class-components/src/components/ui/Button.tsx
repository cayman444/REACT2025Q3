import { type ComponentProps, type FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const Button: FC<ComponentProps<'button'>> = ({
  children,
  ...props
}) => {
  const classes =
    'bg-blue-600 hover:bg-blue-500 dark:bg-blue-400 dark:text-gray-200 focus:outline-blue-500 text-white font-medium rounded px-5 py-1 cursor-pointer transition-colors';

  const mergedClasses = twMerge(classes, props.className);

  return (
    <button {...props} className={mergedClasses}>
      {children}
    </button>
  );
};
