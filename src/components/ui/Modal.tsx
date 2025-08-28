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
      className="bg-white rounded shadow m-auto backdrop:bg-black/50 focus:outline-0"
    >
      <div
        className="flex flex-col gap-5 p-5 min-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-right">
          <Button onClick={onClose} data-testid="modal-close">
            X
          </Button>
        </div>
        {children}
      </div>
    </dialog>,
    document.body
  );
};
