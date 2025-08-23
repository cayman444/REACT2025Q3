import type { FC } from 'react';
import { FORM_SELECTS } from '../../../constants';
import type { FormErrors } from '../types';

interface FormSelectsProps {
  errors: Partial<FormErrors> | null;
}

export const FormSelects: FC<FormSelectsProps> = ({ errors }) => {
  return (
    <div>
      {FORM_SELECTS.map(({ name, options, title }) => (
        <div className="flex flex-col gap-1" key={name}>
          <label htmlFor={name} className="font-medium">
            {title}
          </label>
          <select
            id={name}
            name={name}
            autoComplete="on"
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer min-h-9 ${errors?.[name] && 'border-red-500'}`}
          >
            {options.map(({ value, text }, ind) => (
              <option value={value} key={ind}>
                {text}
              </option>
            ))}
          </select>
          <p className="text-xs text-red-500 min-h-4">
            {errors?.[name] && errors[name].errors[0]}
          </p>
        </div>
      ))}
    </div>
  );
};
