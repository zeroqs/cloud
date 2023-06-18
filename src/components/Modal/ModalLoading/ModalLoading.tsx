import styles from '@/components/Modal/ModalSuccess/modalSuccess.module.scss';
import Modal from '@/shared/ui/Modal/Modal';
import Loader from '@/components/Modal/ModalLoading/Loader';

import React from 'react';

interface IModalLoading {
  isOpen: boolean;
  onClose: () => void;
  width: string;
}

const ModalLoading = ({ isOpen, width, onClose }: IModalLoading) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={width}>
      <main className={styles.root}>
        <Loader />
      </main>
    </Modal>
  );
};

export default ModalLoading;
