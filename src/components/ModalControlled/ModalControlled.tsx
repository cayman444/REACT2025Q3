import type { FC } from 'react';
import { Modal } from '../ui';

interface ModalControlledProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export const ModalControlled: FC<ModalControlledProps> = ({
  isOpen,
  onCloseModal,
}) => {
  if (!isOpen) return;

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      controlled
    </Modal>
  );
};
