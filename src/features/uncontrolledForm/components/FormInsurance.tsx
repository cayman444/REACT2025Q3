import type { FC } from 'react';

interface FormInsurance {
  error?: string;
}

export const FormInsurance: FC<FormInsurance> = ({ error }) => {
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
          className={`cursor-pointer focus:outline-blue-500 ${error && 'outline-1 outline-red-500'}`}
        />
      </div>
      <p className="text-xs text-red-500 min-h-4">{error}</p>
    </div>
  );
};
