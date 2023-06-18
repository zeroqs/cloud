import styles from './radioGroup.module.scss';

import { ReactNode } from 'react';
import classNames from 'classnames';

interface IRadioGroup {
  children?: ReactNode;
  className?: string;
}

export const RadioSelect = ({ children, className }: IRadioGroup) => {
  const classes = classNames(className, styles.root);

  return (
    <div role='radiogroup' className={classes} aria-labelledby='group_heading'>
      {children}
    </div>
  );
};
