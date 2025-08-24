import type { FC } from 'react';

interface FormFileProps {
  error?: string;
}

export const FormFile: FC<FormFileProps> = ({ error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="file" className="flex flex-col gap-1 font-medium">
        File
        <input
          id="file"
          data-testid="file"
          type="file"
          name="file"
          accept="image/png, image/jpeg"
          className={`border-2 border-dashed rounded text-center text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer hover:border-blue-500 ${error && 'border-red-500'}`}
        />
      </label>
      <p data-testid="error-file" className="text-xs text-red-500 min-h-4">
        {error}
      </p>
    </div>
  );
};
