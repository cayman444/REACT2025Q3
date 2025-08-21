import { MODAL_TYPE } from '../../constants';
import { toggleModalVisible } from '../../store/Modals';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Modal } from '../ui';

export const ModalUncontrolled = () => {
  const dispatch = useAppDispatch();
  const { uncontrolledModal } = useAppSelector((state) => state.modals);

  if (!uncontrolledModal.isVisible) return;

  return (
    <Modal
      isVisible={uncontrolledModal.isVisible}
      onClose={() => dispatch(toggleModalVisible(MODAL_TYPE.UNCONTROLLED))}
    >
      uncontrolled
    </Modal>
  );
};
