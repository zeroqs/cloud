import styles from './layout.module.scss';

import { ReactNode } from 'react';
import classNames from 'classnames';

type LayoutType = 'profile' | 'step';

interface ILayout {
  size: LayoutType;
  children: ReactNode;
  className?: string;
}

const Layout = ({ size, children, className }: ILayout) => {
  const classes = classNames(
    className,
    styles.root,
    { [styles.profile]: size === 'profile' },
    { [styles.step]: size === 'step' },
  );
  return <div className={classes}>{children}</div>;
};

export default Layout;
