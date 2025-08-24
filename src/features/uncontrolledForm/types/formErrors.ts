import type { FormFields } from '../../../schemas';

export type FormErrors = {
  [K in keyof FormFields]: { errors: string[] };
};
