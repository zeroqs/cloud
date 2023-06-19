import styles from './checkboxGroup.module.scss';

import { RootState } from '@/App/store/store';
import Checkbox from '@/shared/ui/Checkbox/Checkbox';
import { change } from '@/App/store/slices/StepTwo/CheckBoxGroup';

import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface ICheckboxGroup {
  register?: UseFormRegister<FieldValues>;
  error?: string;
}

const CheckboxGroup = ({ register, error }: ICheckboxGroup) => {
  const checkboxes = useSelector((state: RootState) => state.checkBoxGroup);
  const dispatch = useDispatch();

  const handler = (event: React.MouseEvent<HTMLInputElement>) => {
    const id = event.currentTarget.dataset.id;
    dispatch(change(id));
  };

  return (
    <div className={styles.root}>
      <span className={styles.header}>Checkbox group</span>
      {checkboxes.map((item) => (
        <Checkbox
          register={register}
          key={item.id}
          defaultValue={item.value}
          onClick={handler}
          defaultChecked={item.checked}
          id={`field-checkbox-group-option-${item.id}`}
          data-id={item.id}
        >
          {item.value}
        </Checkbox>
      ))}
      <span className={styles.tip}>{error}</span>
    </div>
  );
};

export default CheckboxGroup;
