import styles from './textarea.module.scss';

import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface ITextarea extends HTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode;
  className?: string;
  label?: string;
  tip?: string;
  length?: number;
  register?: UseFormRegister<FieldValues>;
}

const Textarea = ({ children, className, label, tip, length, register, ...props }: ITextarea) => {
  const classes = classNames(className, styles.root);

  return (
    <>
      <span className={styles.label}>{label}</span>
      <div className={styles.textarea}>
        <textarea {...(register && { ...register('about') })} className={classes} {...props}>
          {children}
        </textarea>
        <span className={styles.count}>{length}/200</span>
      </div>

      <span className={styles.tip}>{tip}</span>
    </>
  );
};

export default Textarea;
