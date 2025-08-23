import type { FC } from 'react';
import { FORM_INPUTS } from '../../../constants';
import type { FormErrors } from '../types';
import type { StrengthPassword } from '../../../types';

interface FormInputsProps {
  errors: Partial<FormErrors> | null;
  strengthPassword?: StrengthPassword;
}

export const FormInputs: FC<FormInputsProps> = ({
  errors,
  strengthPassword,
}) => {
  return (
    <div>
      {FORM_INPUTS.map(({ name, placeholder, title, type }) => (
        <div className="flex flex-col gap-1" key={name}>
          <label htmlFor={name} className="font-medium">
            {title}
          </label>
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={'on'}
            className={`border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors ${errors?.[name] && 'border-red-500'}`}
          />
          {name === 'password' && strengthPassword && (
            <div className="text-gray-700">
              Password strength:{' '}
              <span className={strengthPassword.class}>
                {strengthPassword.message}
              </span>
            </div>
          )}
          <p className="text-xs text-red-500 min-h-4">
            {errors?.[name] && errors[name].errors[0]}
          </p>
        </div>
      ))}
    </div>
  );
};
