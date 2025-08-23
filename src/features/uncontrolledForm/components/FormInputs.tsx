import type { FC } from 'react';
import type { FormErrors } from '../types';
import type { StrengthPassword } from '../../../types';
import { FormInput } from './FormInput';

interface FormInputsProps {
  errors?: Partial<FormErrors>;
  strengthPassword?: StrengthPassword;
}

export const FormInputs: FC<FormInputsProps> = ({
  errors,
  strengthPassword,
}) => {
  return (
    <div>
      <FormInput
        name="username"
        placeholder="Enter your name"
        title="Name"
        type="text"
        error={errors?.username?.errors[0]}
      />
      <FormInput
        name="age"
        placeholder="Enter your age"
        title="Age"
        type="text"
        error={errors?.age?.errors[0]}
      />
      <FormInput
        name="email"
        placeholder="Enter your email"
        title="Email"
        type="email"
        error={errors?.email?.errors[0]}
      />
      <FormInput
        name="password"
        placeholder="Enter your password"
        title="Password"
        type="password"
        error={errors?.password?.errors[0]}
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
        name="confirmPassword"
        placeholder="Confirm password"
        title="Confirm password"
        type="password"
        error={errors?.confirmPassword?.errors[0]}
      />
    </div>
  );
};
