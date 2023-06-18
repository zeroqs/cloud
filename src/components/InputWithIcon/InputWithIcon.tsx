import styles from './inputWithIcon.module.scss';

import Input from '@/shared/ui/Input/Input';
import { ReactComponent as Delete } from '@/assets/delete.svg';

import { ChangeEvent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IInputWithIcon {
  placeholder?: string;
  id: number;
  dataId?: number;
  onClick: (id: number) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  register?: UseFormRegister<FieldValues>;
}

const InputWithIcon = ({ placeholder, id, onClick, onChange, dataId, value, register }: IInputWithIcon) => {
  const idPlaceholder = `field-advatages-${id}`;
  const idDeleteButton = `button-remove-${id}`;
  return (
    <section className={styles.wrapperInput}>
      <Input
        name={idPlaceholder}
        register={register}
        value={value}
        placeholder={placeholder}
        id={idPlaceholder}
        onChange={onChange}
        data-id={dataId}
      />
      <button id={idDeleteButton} className={styles.buttonDelete} onClick={() => onClick(id)}>
        <Delete />
      </button>
    </section>
  );
};

export default InputWithIcon;
