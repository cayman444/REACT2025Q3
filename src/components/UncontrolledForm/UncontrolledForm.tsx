import { useRef, type FormEvent } from 'react';
import { FORM_INPUTS, FORM_SELECTS } from '../../constants';
import { Button } from '../ui';

export const UncontrolledForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);

    console.log(formValues);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={submitHandler}>
      {FORM_INPUTS.map(({ name, placeholder, title, type }) => (
        <div className="flex flex-col gap-1" key={name}>
          <label htmlFor={name} className="font-medium">
            {title}
          </label>
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={'on'}
            className="border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors"
          />
        </div>
      ))}
      {FORM_SELECTS.map(({ name, options, title }) => (
        <div className="flex flex-col gap-1" key={name}>
          <label htmlFor={name} className="font-medium">
            {title}
          </label>
          <select
            id={name}
            name={name}
            autoComplete="on"
            className="border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer"
          >
            {options.map(({ value, text }, ind) => (
              <option value={value} key={ind}>
                {text}
              </option>
            ))}
          </select>
        </div>
      ))}
      <label htmlFor="file" className="flex flex-col gap-1 font-medium">
        File
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed rounded text-center text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors cursor-pointer hover:border-blue-500"
        >
          Upload file
        </button>
        <input
          ref={fileInputRef}
          id="file"
          type="file"
          name="file"
          accept="image/png, image/jpeg"
          className="hidden"
        />
      </label>
      <div className="flex items-center justify-between">
        <label htmlFor="insurance" className="font-medium">
          Terms and Conditions
        </label>
        <input
          id="insurance"
          name="insurance"
          type="checkbox"
          className="cursor-pointer"
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};
