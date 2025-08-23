import type { FormFields } from '../../schemas';

export interface FormsState {
  uncontrolledFormData: DataForm[];
  controlledFormData: DataForm[];
}

export interface DataForm extends Omit<FormFields, 'file'> {
  file: string;
}
