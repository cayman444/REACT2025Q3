import type { FC } from 'react';
import type { FormErrors } from '../types';

interface FormFileProps {
  errors: Partial<FormErrors> | null;
}

export const FormFile: FC<FormFileProps> = ({ errors }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="file" className="flex flex-col gap-1 font-medium">
        File
        <input
          id="file"
          type="file"
          name="file"
          accept="image/png, image/jpeg"
          className={`border-2 border-dashed rounded text-center text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer hover:border-blue-500 ${errors?.['file'] && 'border-red-500'}`}
        />
      </label>
      <p className="text-xs text-red-500 min-h-4">
        {errors?.['file'] && errors['file'].errors[0]}
      </p>
    </div>
  );
};
