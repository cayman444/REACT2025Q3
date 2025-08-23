import type { FC, PropsWithChildren } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import type { IFormInput } from '../../types';
import type { FormFields } from '../../schemas';

interface FormInputProps extends IFormInput {
  error?: string;
  register?: UseFormRegister<FormFields>;
}

export const FormInput: FC<PropsWithChildren<FormInputProps>> = ({
  name,
  placeholder,
  title,
  type,
  error,
  children,
  register,
}) => {
  const registerInput = register ? register(name) : {};

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-medium">
        {title}
      </label>
      <input
        {...registerInput}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={'on'}
        className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors ${error && 'border-red-500'}`}
      />
      {children}
      <p className="text-xs text-red-500 min-h-4">{error}</p>
    </div>
  );
};
