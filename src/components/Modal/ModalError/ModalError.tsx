import styles from './modalError.module.scss';

import { ReactComponent as Error } from '@/assets/error.svg';
import { ReactComponent as Close } from '@/assets/close.svg';
import Modal from '@/shared/ui/Modal/Modal';
import Button from '@/shared/ui/Button/Button';

interface IModalError {
  isOpen: boolean;
  onClose: () => void;
  width: string;
}

const ModalError = ({ isOpen, width, onClose }: IModalError) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={width}>
      <main className={styles.root}>
        <div className={styles.headerBlock}>
          <h1 className={styles.header}>Ошибка</h1>
          <button className={styles.imgHeaderBack}>
            <Close className={styles.img} />
          </button>
        </div>
        <section className={styles.imgBack}>
          <Error className={styles.img} />
        </section>
        <Button id='button-close' className={styles.button} variant='fulfilled' onClick={onClose}>
          Закрыть
        </Button>
      </main>
    </Modal>
  );
};

export default ModalError;
