import styles from './stepTwo.module.scss';

import Layout from '@/shared/ui/Layout/Layout';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup';
import RadioGroup from '@/components/RadioGroup/RadioGroup';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { setEnd, setStart } from '@/App/store/slices/ProgressBar';
import AdvantagesInputs from '@/components/AdvantagesInputs/AdvantagesInputs';
import { RootState } from '@/App/store/store';
import { fill } from '@/App/store/slices/Form';
import { stepTwoSchema } from '@/shared/utils/StepTwo';

import { useDispatch, useSelector } from 'react-redux';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const StepTwo = () => {
  const dispatch = useDispatch();
  const inputs = useSelector((state: RootState) => state.advantages);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(stepTwoSchema),
  });
  const { append } = useFieldArray({ control: control, name: 'advantages' });
  const navigateBack = () => {
    dispatch(setStart());
  };
  const navigateNext = () => {
    append(inputs.map((item) => item.value));
    setTimeout(() => {
      dispatch(setEnd());
    }, 10);
  };
  const onSubmit = (data: any) => {
    const newObj = {
      advantages: [...data.advantages],
      checkbox: [...data.checkbox.map((item: string) => Number(item))],
      radio: [Number(...data.radio)],
    };
    dispatch(fill(newObj));
  };

  return (
    <Layout size='step'>
      <ProgressBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className={styles.root}>
          <AdvantagesInputs register={register} />
          <CheckboxGroup register={register} />
          <RadioGroup register={register} />
        </main>
        <ButtonGroup onBack={navigateBack} isValid={isValid} onNext={navigateNext} />
      </form>
    </Layout>
  );
};

export default StepTwo;
