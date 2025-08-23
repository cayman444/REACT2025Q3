import { useAppSelector } from '../../hooks';
import { DataForm } from '../../components';

export const DataFormList = () => {
  const { uncontrolledFormData } = useAppSelector((state) => state.forms);

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-5">
        <div className="text-center font-medium">Uncontrolled form data:</div>
        <ul className="flex flex-col gap-4">
          {uncontrolledFormData.map((data, ind) => (
            <DataForm key={ind} {...data} />
          ))}
        </ul>
      </div>
      <div>
        <div className="text-center font-medium">Controlled form data:</div>
        <ul></ul>
      </div>
    </div>
  );
};
