import styles from './radio.module.scss';

import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IRadio extends HTMLAttributes<HTMLInputElement> {
  id: string;
  children?: ReactNode;
  name: string;
  className?: string;
  register?: UseFormRegister<FieldValues>;
  defaultValue?: string;
}

const Radio = ({ id, children, name, className, register, defaultValue, ...props }: IRadio) => {
  const classes = classNames(className, styles.root);

  return (
    <label className={classes}>
      <input
        type='radio'
        {...(register && { ...register(name) })}
        value={defaultValue}
        id={id}
        name={name}
        {...props}
      />
      {children}
    </label>
  );
};

export default Radio;
