import type { FormFields } from '../../schemas';

export interface FormsState {
  uncontrolledFormData: DataForm[];
  controlledFormData: DataForm[];
  countries: { value: string; text: string }[];
}

export interface DataForm extends Omit<FormFields, 'file'> {
  file: string;
}
