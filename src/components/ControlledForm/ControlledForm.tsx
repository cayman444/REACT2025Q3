import { FORM_INPUTS, FORM_SELECTS } from '../../constants';
import { Button } from '../ui';
import { Controller, useForm } from 'react-hook-form';
import { formSchema, type FormFields } from '../../schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import type { FC } from 'react';
import { useAppDispatch } from '../../hooks';
import { encodeImageFile } from '../../utils';
import { setControlledFormData } from '../../store/Forms';

interface ControlledFormProps {
  onCloseModal: () => void;
}

export const ControlledForm: FC<ControlledFormProps> = ({ onCloseModal }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const submitForm = async (data: FormFields) => {
    reset();
    onCloseModal();

    const encodeFile = await encodeImageFile(data.file);
    dispatch(setControlledFormData({ ...data, file: encodeFile }));
  };

  return (
    <form
      className="flex flex-col gap-1"
      autoComplete="on"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="grid grid-cols-2 gap-5 mb-3">
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
        <div>
          {FORM_SELECTS.map(({ name, options, title }) => (
            <div className="flex flex-col gap-1" key={name}>
              <label htmlFor={name} className="font-medium">
                {title}
              </label>
              <select
                {...register(name)}
                id={name}
                name={name}
                autoComplete="on"
                className="border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer min-h-9"
              >
                {options.map(({ value, text }, ind) => (
                  <option value={value} key={ind}>
                    {text}
                  </option>
                ))}
              </select>
              <p className="text-xs text-red-500 min-h-4">
                {errors?.[name] && errors[name].message}
              </p>
            </div>
          ))}
        </div>
      </div>
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
      <div className="flex flex-col gap-1 mb-3">
        <div className="flex items-center justify-between">
          <label htmlFor="insurance" className="font-medium">
            Terms and Conditions
          </label>
          <Controller
            control={control}
            name="insurance"
            render={({ field }) => (
              <input
                onChange={(e) => field.onChange(e.target.checked ? 'on' : null)}
                id="insurance"
                name="insurance"
                type="checkbox"
                className="cursor-pointer focus:outline-blue-500"
              />
            )}
          />
        </div>
        <p className="text-xs text-red-500 min-h-4">
          {errors?.['insurance'] && errors['insurance'].message}
        </p>
      </div>
      <Button disabled={!isValid}>Submit</Button>
    </form>
  );
};
