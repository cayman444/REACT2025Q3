import type { FC } from 'react';
import { useControlledForm } from '../hooks';
import { Button } from '../../../components/ui';
import { FormInputs } from './FormInputs';
import { FormSelects } from './FormSelects';
import { FormFile } from './FormFile';
import { FormInsurance } from './FormInsurance';

interface ControlledFormProps {
  onCloseModal: () => void;
}

export const ControlledForm: FC<ControlledFormProps> = (props) => {
  const { register, handleSubmit, submitForm, errors, control, isValid } =
    useControlledForm(props);

  return (
    <form
      className="flex flex-col gap-1"
      autoComplete="on"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="mb-3">
        <div className="grid grid-cols-2 gap-5 mb-3">
          <FormInputs register={register} errors={errors} />
          <FormSelects register={register} errors={errors} />
        </div>
        <FormFile control={control} errors={errors} />
        <FormInsurance control={control} errors={errors} />
      </div>
      <Button disabled={!isValid}>Submit</Button>
    </form>
  );
};
