import styles from './mainProfile.module.scss';

import Input from '@/shared/ui/Input/Input';
import Button from '@/shared/ui/Button/Button';

import { useNavigate } from 'react-router-dom';

const MainProfile = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate('/create');
  };

  return (
    <main className={styles.root}>
      <Input value='9867589676' label='Номер телефона' type='phone' disabled name='phone' />
      <Input value='smthq@bk.ru' label='Email' disabled name='mail' />
      <div className={styles.button}>
        <Button id='button-start' variant='fulfilled' onClick={navigateToCreate}>
          Начать
        </Button>
      </div>
    </main>
  );
};

export default MainProfile;
