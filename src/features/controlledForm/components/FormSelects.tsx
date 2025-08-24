import type { FC } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { FormFields } from '../../../schemas';
import { FormSelect } from '../../../components';
import { useAppSelector } from '../../../hooks';

interface FormSelectsProps {
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
}

export const FormSelects: FC<FormSelectsProps> = ({ register, errors }) => {
  const { countries } = useAppSelector((state) => state.forms);

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
        options={countries}
        error={errors.gender?.message}
      />
    </div>
  );
};
