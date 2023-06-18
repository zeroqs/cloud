import styles from './radioGroup.module.scss';

import Radio from '@/shared/ui/Radio/Radio';
import { RadioSelect } from '@/shared/ui/RadioSelect/RadioSelect';
import { RootState } from '@/App/store/store';
import { change } from '@/App/store/slices/StepTwo/RadioGroup';

import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IRadioGroup {
  register?: UseFormRegister<FieldValues>;
}

const RadioGroup = ({ register }: IRadioGroup) => {
  const radio = useSelector((state: RootState) => state.radioGroup);
  const dispatch = useDispatch();

  const handler = (event: React.MouseEvent<HTMLInputElement>) => {
    const id = event.currentTarget.dataset.id;
    dispatch(change(id));
  };

  return (
    <div className={styles.root}>
      <span className={styles.header}>Radio group</span>
      <RadioSelect className={styles.radioGroup}>
        {radio.map((item) => (
          <Radio
            register={register}
            name={item.name}
            defaultValue={item.value}
            key={item.id}
            onClick={handler}
            defaultChecked={item.checked}
            id={`field-checkbox-group-option-${item.id}`}
            data-id={item.id}
          >
            {item.value}
          </Radio>
        ))}
      </RadioSelect>
    </div>
  );
};

export default RadioGroup;
