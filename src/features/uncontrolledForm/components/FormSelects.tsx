import type { FC } from 'react';
import type { FormErrors } from '../types';
import { FormSelect } from '../../../components';

interface FormSelectsProps {
  errors?: Partial<FormErrors> | null;
}

export const FormSelects: FC<FormSelectsProps> = ({ errors }) => {
  return (
    <div>
      <FormSelect
        name="gender"
        title="Gender"
        options={[
          { value: 'male', text: 'Male' },
          { value: 'female', text: 'Female' },
        ]}
        error={errors?.gender?.errors[0]}
      />
      <FormSelect
        name="country"
        title="Country"
        options={[
          { value: 'denmark', text: 'Denmark' },
          { value: 'norway', text: 'Norway' },
        ]}
        error={errors?.country?.errors[0]}
      />
    </div>
  );
};
