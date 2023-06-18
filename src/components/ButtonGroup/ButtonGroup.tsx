import styles from './buttonGroup.module.scss';

import Button from '@/shared/ui/Button/Button';

interface IButtonGroup {
  onBack: () => void;
  onNext: () => void;
  isSend?: boolean;
  isValid?: boolean;
}

const ButtonGroup = ({ onBack, onNext, isSend, isValid }: IButtonGroup) => {
  const idLastButton = isSend ? 'button-send' : 'button-next';
  const textLastButton = isSend ? 'Отправить' : 'Далее';
  return (
    <div className={styles.buttonGroup}>
      <Button id='button-back' className={styles.btn} variant='outlined' onClick={onBack}>
        Back
      </Button>
      <Button id={idLastButton} disabled={!isValid} className={styles.btn} variant='fulfilled' onClick={onNext}>
        {textLastButton}
      </Button>
    </div>
  );
};

export default ButtonGroup;
