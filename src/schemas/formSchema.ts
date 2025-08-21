import z from 'zod';

export const formSchema = z
  .object({
    username: z
      .string()
      .nonempty({ error: 'Required to fill' })
      .refine((val) => val && val[0] === val[0].toUpperCase(), {
        error: 'the first letter must be capitalized',
      }),
    age: z
      .string()
      .nonempty({ error: 'Required to fill' })
      .refine((val) => +val >= 0, {
        error: 'age must not be a negative number',
      }),
    email: z.email(),
    password: z
      .string()
      .nonempty({ error: 'Required to fill' })
      .regex(/[a-z]/, 'Password must contain lowercase letter')
      .regex(/[A-Z]/, 'Password must contain uppercase letter')
      .regex(/\d/, 'Password must contain number')
      .regex(
        /[$&+,:;=?@#|'<>.^*()%!-]/,
        'Password must contain special character'
      ),
    confirmPassword: z.string().nonempty({ error: 'Required to fill' }),
    gender: z.string().nonempty({ error: 'Required to fill' }),
    insurance: z.string().nonempty({ error: 'Required to fill' }),
    file: z
      .file()
      .refine((val) => val.type.match(/png|jpeg/), {
        error: 'file extension must be png or jpeg',
      })
      .refine((val) => val.size <= 2 * 2048, {
        error: 'the file size must not exceed 2MB',
      }),
    country: z.string().nonempty({ error: 'Required to fill' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'the password must match',
    path: ['confirmPassword'],
  });

export type FormFields = z.infer<typeof formSchema>;
