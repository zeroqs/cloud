import styles from './HeaderProfile.module.scss';

import avatar from '@/assets/Avatar.png';
import { ReactComponent as Folder } from '@/assets/folder.svg';

import { Link } from 'react-router-dom';

const HeaderProfile = () => {
  return (
    <header className={styles.root}>
      <div>
        <img src={avatar} alt='user_name' />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <h1>Васянькин Никита</h1>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link to='https://t.me/smthv'>
                <Folder />
                Telegram
              </Link>
            </li>
            <li>
              <Link to='https://github.com/zeroqs'>
                <Folder />
                GitHub
              </Link>
            </li>
            <li>
              <Link to='https://drive.google.com/file/d/1Gc251LmaSbKG8qXkbtjbSu2lE5kzk8b5/view?usp=sharing'>
                <Folder />
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderProfile;
