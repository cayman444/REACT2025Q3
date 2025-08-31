import { memo, useCallback, useState, type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import type { DataTitles } from '@/store/countriesInfo/countriesInfo.type';
import { setCountryData } from '@/store/countriesInfo';
import { SettingsIcon } from './ui/SettingsIcon';
import { Modal } from './ui/Modal';

export const AvailableDataModalComponent = () => {
  const dispatch = useAppDispatch();
  const countriesInfo = useAppSelector((state) => state.countriesInfo.data);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, title: DataTitles) => {
      dispatch(
        setCountryData({
          title,
          isAvailable: e.currentTarget.checked,
        })
      );
    },
    [dispatch]
  );

  return (
    <>
      <SettingsIcon onClick={toggleDropdown} />
      <Modal isVisible={isOpen} onClose={toggleDropdown}>
        <div className="font-medium text-center">
          Select additional columns to display
        </div>
        <ul className="flex flex-col gap-1">
          {countriesInfo.map(
            ({ isAdditional, title, isAvailable }) =>
              isAdditional && (
                <li key={title}>
                  <label className="flex justify-between items-center">
                    <span>{title}</span>
                    <input
                      type="checkbox"
                      checked={isAvailable}
                      onChange={(e) => handleChange(e, title)}
                    />
                  </label>
                </li>
              )
          )}
        </ul>
      </Modal>
    </>
  );
};

export const AvailableDataModal = memo(AvailableDataModalComponent);
