import { useState, type FormEvent } from 'react';
import z from 'zod';
import { useAppDispatch } from '../../../hooks';
import type { FormErrors } from '../types';
import { formSchema } from '../../../schemas';
import { encodeImageFile } from '../../../utils';
import { setUncontrolledFormData } from '../../../store/Forms';
import { evaluatePasswordStrength } from '../../../utils/evaluatePasswordStrength';
import type { StrengthPassword } from '../../../types';

interface useUncontrolledFormProps {
  onCloseModal: () => void;
}

export const useUncontrolledForm = ({
  onCloseModal,
}: useUncontrolledFormProps) => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<Partial<FormErrors> | null>(null);
  const [strengthPassword, setStrengthPassword] = useState<StrengthPassword>();

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    const result = formSchema.safeParse(formValues);

    if (!result.success) {
      const treeError = z.treeifyError(result.error);
      if (treeError.properties) {
        setErrors(treeError.properties);
      }

      const passwordStrength = evaluatePasswordStrength(
        formData.get('password')?.toString() ?? ''
      );

      setStrengthPassword(passwordStrength);

      return;
    }

    setErrors(null);
    e.currentTarget.reset();
    onCloseModal();

    const encodeFile = await encodeImageFile(result.data.file);
    dispatch(setUncontrolledFormData({ ...result.data, file: encodeFile }));
  };

  return { formSubmit, errors, strengthPassword };
};
