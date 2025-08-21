import type { FC } from 'react';
import { Modal } from '../ui';

interface ModalUncontrolledProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export const ModalUncontrolled: FC<ModalUncontrolledProps> = ({
  isOpen,
  onCloseModal,
}) => {
  if (!isOpen) return;

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      uncontrolled
    </Modal>
  );
};
