import type { FC } from 'react';
import { Controller, type Control, type FieldErrors } from 'react-hook-form';
import type { FormFields } from '../../../schemas';

interface FormFileProps {
  control: Control<FormFields>;
  errors: FieldErrors<FormFields>;
}

export const FormFile: FC<FormFileProps> = ({ control, errors }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="file" className="flex flex-col gap-1 font-medium">
        File
        <Controller
          control={control}
          name="file"
          render={({ field }) => (
            <input
              onChange={(e) => {
                field.onChange(e.target.files?.[0]);
              }}
              id="file"
              type="file"
              name="file"
              accept="image/png, image/jpeg"
              className="border-2 border-dashed rounded text-center text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer hover:border-blue-500"
            />
          )}
        />
      </label>
      <p className="text-xs text-red-500 min-h-4">
        {errors?.['file'] && errors['file'].message}
      </p>
    </div>
  );
};
