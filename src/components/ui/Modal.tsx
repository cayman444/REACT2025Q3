import { useEffect, useRef, type FC, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';

interface ModalProps extends PropsWithChildren {
  isVisible: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (isVisible) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      onClick={onClose}
      onClose={onClose}
      className="bg-white rounded shadow m-auto backdrop:bg-black/50"
    >
      <div className="p-5 min-w-3xl" onClick={(e) => e.stopPropagation()}>
        <Button onClick={onClose}>close</Button>
        {children}
      </div>
    </dialog>,
    document.body
  );
};
