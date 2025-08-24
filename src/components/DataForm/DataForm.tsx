import { useEffect, useState, type FC } from 'react';
import type { FormFields } from '../../schemas';

interface DataFormProps extends Omit<FormFields, 'file'> {
  file: string;
}

export const DataForm: FC<DataFormProps> = ({ file, ...data }) => {
  const [activeClass, setActiveClass] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveClass(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <li
      className={`flex flex-col gap-1 border-2 rounded p-4 transition-colors ${activeClass ? 'border-blue-700' : 'border-gray-300'}`}
    >
      {Object.entries(data).map(([key, value], ind) => (
        <div key={ind}>
          <span className="font-medium ">{key}:</span> {value}
        </div>
      ))}
      <div>
        <span className="font-medium">file:</span>{' '}
        <img
          data-testid="file-img"
          src={file}
          alt=""
          className="w-full h-50 object-cover"
        />
      </div>
    </li>
  );
};
