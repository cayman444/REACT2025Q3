import type { FC } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { FormFields } from '../../../schemas';
import { FormSelect } from './FormSelect';

interface FormSelectsProps {
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

export const FormSelects: FC<FormSelectsProps> = ({ register, errors }) => {
  return (
    <div>
      <FormSelect
        register={register}
        name="gender"
        title="Gender"
        options={[
          { value: 'male', text: 'Male' },
          { value: 'female', text: 'Female' },
        ]}
        error={errors.gender?.message}
      />
      <FormSelect
        register={register}
        name="country"
        title="Country"
        options={[
          { value: 'denmark', text: 'Denmark' },
          { value: 'norway', text: 'Norway' },
        ]}
        error={errors.gender?.message}
      />
    </div>
  );
};
