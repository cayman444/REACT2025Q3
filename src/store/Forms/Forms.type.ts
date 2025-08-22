import type { FormFields } from '../../schemas';

export interface FormsState {
  uncontrolledForm: StateForm;
  controlledForm: StateForm;
}

export interface StateForm extends Omit<FormFields, 'file'> {
  file: ArrayBuffer | null;
}
