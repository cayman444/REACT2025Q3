import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks';
import { formSchema, type FormFields } from '../../../schemas';
import { encodeImageFile, evaluatePasswordStrength } from '../../../utils';
import { setControlledFormData } from '../../../store/Forms';

interface useControlledFormProps {
  onCloseModal: () => void;
}

export const useControlledForm = ({ onCloseModal }: useControlledFormProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    mode: 'onChange',
    resolver: zodResolver(formSchema),
  });

  const submitForm = async (data: FormFields) => {
    reset();
    onCloseModal();

    const encodeFile = await encodeImageFile(data.file);
    dispatch(setControlledFormData({ ...data, file: encodeFile }));
  };

  const password = watch('password');

  const strengthPassword = evaluatePasswordStrength(password);

  return {
    register,
    handleSubmit,
    control,
    errors,
    isValid,
    strengthPassword,
    submitForm,
  };
};
