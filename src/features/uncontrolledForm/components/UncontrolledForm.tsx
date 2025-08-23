import { type FC } from 'react';
import { Button } from '../../../components/ui';
import { useUncontrolledForm } from '../hooks';
import { FormInputs } from './FormInputs';
import { FormSelects } from './FormSelects';
import { FormFile } from './FormFile';
import { FormInsurance } from './FormInsurance';

interface UncontrolledFormProps {
  onCloseModal: () => void;
}

export const UncontrolledForm: FC<UncontrolledFormProps> = (props) => {
  const { formSubmit, strengthPassword, errors } = useUncontrolledForm(props);

  return (
    <form
      className="flex flex-col gap-1"
      onSubmit={formSubmit}
      noValidate
      autoComplete="on"
    >
      <div className="mb-3">
        <div className="grid grid-cols-2 gap-5 mb-3">
          <FormInputs errors={errors} strengthPassword={strengthPassword} />
          <FormSelects errors={errors} />
        </div>
        <FormFile errors={errors} />
        <FormInsurance errors={errors} />
      </div>
      <Button>Submit</Button>
    </form>
  );
};
