import type { FC } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import type { IFormSelect } from '../../types';
import type { FormFields } from '../../schemas';

interface FormSelectProps extends IFormSelect {
  error?: string;
  register?: UseFormRegister<FormFields>;
}

export const FormSelect: FC<FormSelectProps> = ({
  name,
  options,
  title,
  error,
  register,
}) => {
  const registerSelect = register ? register(name) : {};

  return (
    <div className="flex flex-col gap-1" key={name}>
      <label htmlFor={name} className="font-medium">
        {title}
      </label>
      <select
        {...registerSelect}
        id={name}
        name={name}
        autoComplete="on"
        className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer min-h-9 ${error && 'border-red-500'}`}
      >
        {options.map(({ value, text }, ind) => (
          <option value={value} key={ind}>
            {text}
          </option>
        ))}
      </select>
      <p className="text-xs text-red-500 min-h-4">{error}</p>
    </div>
  );
};
