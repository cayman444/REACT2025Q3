import type { FormFields } from '../schemas';

export interface IFormInput {
  type: string;
  title: string;
  name: keyof FormFields;
  placeholder: string;
}

export interface IFormSelect {
  title: string;
  name: keyof FormFields;
  options: { value: string; text: string }[];
}
