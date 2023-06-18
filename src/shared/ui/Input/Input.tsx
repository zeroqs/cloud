import styles from './input.module.scss';

import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type InputType = 'phone' | 'default';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  tip?: string;
  className?: string;
  type?: InputType;
  disabled?: boolean;
  value?: string;
  id?: string;
  name: string;
  register?: UseFormRegister<FieldValues>;
  error?: string | undefined;
}

const Input = ({
  id,
  label,
  tip,
  className,
  type = 'default',
  disabled,
  value,
  name,
  register,
  error,
  ...props
}: IInput) => {
  const classes = classNames(className, styles.root, { [styles.disabled]: disabled });
  return (
    <label>
      <span className={styles.label}>{label}</span>
      {type === 'phone' ? (
        <InputMask
          {...(register && name && { ...register(name) })}
          id={id}
          value={value}
          disabled={disabled}
          className={classes}
          mask='+7 (999) 999-99-99'
          name={name}
          {...props}
        />
      ) : (
        <input
          {...(register && name && { ...register(name) })}
          id={id}
          value={value}
          disabled={disabled}
          className={classes}
          name={name}
          {...props}
        />
      )}
      <span className={styles.tip}>{tip}</span>
      <span className={styles.tip}>{Boolean(error) && error}</span>
    </label>
  );
};

export default Input;
