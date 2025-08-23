import { useState, type FC, type FormEvent } from 'react';
import z from 'zod';
import { formSchema } from '../../schemas';
import { FORM_INPUTS, FORM_SELECTS } from '../../constants';
import { Button } from '../ui';
import { encodeImageFile } from '../../utils';
import { useAppDispatch } from '../../hooks';
import type { FormErrors } from './UncontrolledForm.type';
import { setUncontrolledFormData } from '../../store/Forms';

interface UncontrolledFormProps {
  onCloseModal: () => void;
}

export const UncontrolledForm: FC<UncontrolledFormProps> = ({
  onCloseModal,
}) => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<Partial<FormErrors> | null>(null);

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    const result = formSchema.safeParse(formValues);

    if (!result.success) {
      const treeError = z.treeifyError(result.error);
      if (treeError.properties) {
        setErrors(treeError.properties);
      }

      return;
    }

    setErrors(null);
    e.currentTarget.reset();
    onCloseModal();

    const encodeFile = await encodeImageFile(result.data.file);
    dispatch(setUncontrolledFormData({ ...result.data, file: encodeFile }));
  };

  return (
    <form
      className="flex flex-col gap-1"
      onSubmit={formSubmit}
      noValidate
      autoComplete="on"
    >
      <div className="grid grid-cols-2 gap-5 mb-3">
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
                className="border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors"
              />
              <p className="text-xs text-red-500 min-h-4">
                {errors?.[name] && errors[name].errors[0]}
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
                {errors?.[name] && errors[name].errors[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="file" className="flex flex-col gap-1 font-medium">
          File
          <input
            id="file"
            type="file"
            name="file"
            accept="image/png, image/jpeg"
            className="border-2 border-dashed rounded text-center text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer hover:border-blue-500"
          />
        </label>
        <p className="text-xs text-red-500 min-h-4">
          {errors?.['file'] && errors['file'].errors[0]}
        </p>
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <div className="flex items-center justify-between">
          <label htmlFor="insurance" className="font-medium">
            Terms and Conditions
          </label>
          <input
            id="insurance"
            name="insurance"
            type="checkbox"
            className="cursor-pointer focus:outline-blue-500"
          />
        </div>
        <p className="text-xs text-red-500 min-h-4">
          {errors?.['insurance'] && errors['insurance'].errors[0]}
        </p>
      </div>
      <Button>Submit</Button>
    </form>
  );
};
