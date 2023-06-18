import styles from './advantagesInputs.module.scss';

import InputWithIcon from '@/components/InputWithIcon/InputWithIcon';
import Button from '@/shared/ui/Button/Button';
import { add, change, del } from '@/App/store/slices/StepTwo/Advantages';
import { RootState } from '@/App/store/store';

import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IAdvantagesInputs {
  register?: UseFormRegister<FieldValues>;
}

const AdvantagesInputs = ({ register }: IAdvantagesInputs) => {
  const inputs = useSelector((state: RootState) => state.advantages);
  const dispatch = useDispatch();
  const addInput = () => {
    dispatch(add());
  };

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target.dataset.id;
    const value = event.target.value;
    dispatch(change({ target, value }));
  };

  const deleteInput = (id: number) => {
    if (inputs.length > 3) {
      dispatch(del(id));
    }
  };
  return (
    <div className={styles.inputGroup}>
      <span className={styles.advantages}>Advantages</span>
      {inputs.map((item) => (
        <InputWithIcon
          register={register}
          value={item.value}
          dataId={item.id}
          key={item.id}
          placeholder={item.placeholder}
          id={item.id}
          onClick={deleteInput}
          onChange={handler}
        />
      ))}

      <Button id='button add' onClick={addInput} isIcon className={styles.button} variant='outlined'></Button>
    </div>
  );
};

export default AdvantagesInputs;
