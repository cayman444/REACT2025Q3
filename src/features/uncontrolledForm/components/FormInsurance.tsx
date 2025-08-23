import type { FC } from 'react';
import type { FormErrors } from '../types';

interface FormInsurance {
  errors: Partial<FormErrors> | null;
}

export const FormInsurance: FC<FormInsurance> = ({ errors }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label htmlFor="insurance" className="font-medium">
          Terms and Conditions
        </label>
        <input
          id="insurance"
          name="insurance"
          type="checkbox"
          className={`cursor-pointer focus:outline-blue-500 ${errors?.['insurance'] && 'outline-1 outline-red-500'}`}
        />
      </div>
      <p className="text-xs text-red-500 min-h-4">
        {errors?.['insurance'] && errors['insurance'].errors[0]}
      </p>
    </div>
  );
};
