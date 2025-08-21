import { MODAL_TYPE } from '../../constants';
import { toggleModalVisible } from '../../store/Modals';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Modal } from '../ui';

export const ModalControlled = () => {
  const dispatch = useAppDispatch();
  const { controlledModal } = useAppSelector((state) => state.modals);

  if (!controlledModal.isVisible) return;

  return (
    <Modal
      isVisible={controlledModal.isVisible}
      onClose={() => dispatch(toggleModalVisible(MODAL_TYPE.CONTROLLED))}
    >
      controlled
    </Modal>
  );
};
