import type { FC } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { FormFields } from '../../../schemas';
import type { StrengthPassword } from '../../../types';
import { FormInput } from './FormInput';

interface FormInputsProps {
  register: UseFormRegister<FormFields>;
  strengthPassword?: StrengthPassword;
  errors: FieldErrors<FormFields>;
}

export const FormInputs: FC<FormInputsProps> = ({
  register,
  strengthPassword,
  errors,
}) => {
  return (
    <div>
      <FormInput
        register={register}
        name="username"
        type="text"
        placeholder="Enter your name"
        title="Name"
        error={errors.username?.message}
      />
      <FormInput
        register={register}
        name="age"
        type="number"
        placeholder="Enter your age"
        title="Age"
        error={errors.age?.message}
      />
      <FormInput
        register={register}
        name="email"
        type="email"
        placeholder="Email"
        title="Email"
        error={errors.email?.message}
      />
      <FormInput
        register={register}
        name="password"
        type="password"
        placeholder="Password"
        title="Password"
        error={errors.password?.message}
      >
        {strengthPassword && (
          <div className="text-gray-700">
            Password strength:{' '}
            <span className={strengthPassword.class}>
              {strengthPassword.message}
            </span>
          </div>
        )}
      </FormInput>
      <FormInput
        register={register}
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        title="Confirm password"
        error={errors.confirmPassword?.message}
      />
    </div>
  );
};
