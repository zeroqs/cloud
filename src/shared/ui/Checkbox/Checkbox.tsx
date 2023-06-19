import styles from './checkbox.module.scss';

import { HTMLAttributes, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface ICheckbox extends HTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  id: string;
  className?: string;
  register?: UseFormRegister<FieldValues>;
  defaultValue?: string;
}

const Checkbox = ({ id, children, className, register, defaultValue, ...props }: ICheckbox) => {
  const [isChecked, setIsChecked] = useState(false);
  const classes = classNames(className, styles.root);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label onChange={handleChange} htmlFor={id} className={classes}>
      <input
        {...(register && { ...register('checkbox') })}
        name='checkbox'
        id={id}
        type='checkbox'
        value={defaultValue}
        defaultChecked={isChecked}
        {...props}
      />
      {children}
    </label>
  );
};

export default Checkbox;
