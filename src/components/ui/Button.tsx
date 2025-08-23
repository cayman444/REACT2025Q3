import { type ComponentProps, type FC } from 'react';

export const Button: FC<ComponentProps<'button'>> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="bg-blue-600 not-disabled:hover:bg-blue-500  focus:outline-blue-500 text-white font-medium rounded px-5 py-1 not-disabled:cursor-pointer transition-colors disabled:opacity-50"
    >
      {children}
    </button>
  );
};
