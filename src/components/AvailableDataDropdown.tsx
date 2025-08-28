import { useState } from 'react';
import { SettingsIcon } from './ui/SettingsIcon';
import { Modal } from './ui/Modal';

export const AvailableDataDropdown = () => {
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
          <li>
            <label className="flex justify-between items-center">
              <span>Option 1</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label className="flex justify-between items-center">
              <span>Option 2</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label className="flex justify-between items-center">
              <span>Option 3</span>
              <input type="checkbox" />
            </label>
          </li>
        </ul>
      </Modal>
    </div>
  );
};
