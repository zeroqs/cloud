import styles from './modalSuccess.module.scss';

import { ReactComponent as Success } from '@/assets/success.svg';
import Modal from '@/shared/ui/Modal/Modal';
import Button from '@/shared/ui/Button/Button';

interface IModalSuccess {
  isOpen: boolean;
  onClose: () => void;
  width: string;
  navigateToProfile: () => void;
}

const ModalSuccess = ({ isOpen, width, onClose, navigateToProfile }: IModalSuccess) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={width}>
      <main className={styles.root}>
        <h1 className={styles.header}>Форма успешно отправлена</h1>
        <section className={styles.imgBack}>
          <Success className={styles.img} />
        </section>
        <Button id='button-to-main' className={styles.button} variant='fulfilled' onClick={navigateToProfile}>
          На главную
        </Button>
      </main>
    </Modal>
  );
};

export default ModalSuccess;
