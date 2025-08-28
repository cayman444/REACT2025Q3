import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setCountryData } from '@/store/countriesInfo';
import { SettingsIcon } from './ui/SettingsIcon';
import { Modal } from './ui/Modal';

export const AvailableDataModal = () => {
  const dispatch = useAppDispatch();
  const countriesInfo = useAppSelector((state) => state.countriesInfo.data);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-end">
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
                      onChange={(e) =>
                        dispatch(
                          setCountryData({
                            title,
                            isAvailable: e.currentTarget.checked,
                          })
                        )
                      }
                    />
                  </label>
                </li>
              )
          )}
        </ul>
      </Modal>
    </div>
  );
};
