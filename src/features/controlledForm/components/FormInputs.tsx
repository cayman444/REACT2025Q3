import type { FC } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { FormFields } from '../../../schemas';
import { FORM_INPUTS } from '../../../constants';

interface FormInputsProps {
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

export const FormInputs: FC<FormInputsProps> = ({ register, errors }) => {
  return (
    <div>
      {FORM_INPUTS.map(({ name, placeholder, title, type }) => (
        <div className="flex flex-col gap-1" key={name}>
          <label htmlFor={name} className="font-medium">
            {title}
          </label>
          <input
            {...register(name)}
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={'on'}
            className="border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors"
          />
          <p className="text-xs text-red-500 min-h-4">
            {errors?.[name] && errors[name].message}
          </p>
        </div>
      ))}
    </div>
  );
};
