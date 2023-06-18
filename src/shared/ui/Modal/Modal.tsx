import s from './modal.module.scss';

import React, { useEffect } from 'react';

interface IModal {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width: string;
}

const Modal = ({ children, isOpen, onClose, width }: IModal) => {
  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler);
    if (isOpen) document.body.style.overflowY = 'hidden';

    return () => {
      document.removeEventListener('keydown', keyboardHandler);
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen, onClose]);

  const handleOverlay = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const keyboardHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (isOpen) {
    return (
      <div onClick={handleOverlay} className={s.overlay}>
        <div style={{ maxWidth: `${width}` }} className={s.modal}>
          <div className={s.modalContent}>{children}</div>
          <button className={s.closeButton} onClick={onClose} />
        </div>
      </div>
    );
  } else return null;
};

export default Modal;
