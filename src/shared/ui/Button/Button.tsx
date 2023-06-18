import styles from './button.module.scss';

import { ReactComponent as Add } from '@/assets/Add.svg';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/dedupe';

export type ButtonVariant = 'outlined' | 'fulfilled';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant: ButtonVariant;
  isIcon?: boolean;
}

const Button = ({ children, className, variant, isIcon, ...props }: IButton) => {
  const classes = classNames(
    className,
    styles.root,
    { [styles.fulfilled]: variant === 'fulfilled' },
    { [styles.outlined]: variant === 'outlined' },
  );
  return (
    <button className={classes} {...props}>
      {children}
      {isIcon && <Add className={styles.add} />}
    </button>
  );
};

export default Button;
