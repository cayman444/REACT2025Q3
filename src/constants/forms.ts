interface IFormInput {
  type: string;
  title: string;
  name: string;
  placeholder: string;
}

interface IFormSelect {
  title: string;
  name: string;
  options: { value: string; text: string }[];
}

export const FORM_INPUTS: IFormInput[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Enter your name',
    title: 'Name',
  },
  {
    name: 'age',
    type: 'number',
    placeholder: 'Enter your age',
    title: 'Age',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    title: 'Email',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    title: 'Password',
  },
  {
    name: 'confirm-password',
    type: 'password',
    placeholder: 'Confirm password',
    title: 'Confirm password',
  },
];

export const FORM_SELECTS: IFormSelect[] = [
  {
    name: 'gender',
    title: 'Gender',
    options: [
      { value: 'male', text: 'Male' },
      { value: 'female', text: 'Female' },
    ],
  },
  {
    name: 'country',
    title: 'Country',
    options: [
      { value: 'denmark', text: 'Denmark' },
      { value: 'norway', text: 'Norway' },
    ],
  },
];
