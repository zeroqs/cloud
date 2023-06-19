import styles from './stepOne.module.scss';

import Layout from '@/shared/ui/Layout/Layout';
import Input from '@/shared/ui/Input/Input';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { RootState } from '@/App/store/store';
import { changeInput, changeSelect } from '@/App/store/slices/StepOne/StepOne';
import { fill } from '@/App/store/slices/Form';
import { setMiddle } from '@/App/store/slices/ProgressBar';
import { customStyles, options, stepOneSchema } from '@/shared/utils/StepOne';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';

const StepOne = () => {
  const navigate = useNavigate();
  const select = useSelector((state: RootState) => state.stepOne.select);
  const inputs = useSelector((state: RootState) => state.stepOne.inputs);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(stepOneSchema),
    mode: 'onBlur',
  });
  const navigateBack = () => {
    navigate(-1);
  };
  const navigateNext = () => {
    setTimeout(() => {
      dispatch(setMiddle());
    }, 10);
  };
  const handlerInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const id = event.target.id;
    dispatch(changeInput({ value, id }));
  };
  const onSubmit = (data: FieldValues) => {
    const {
      name,
      nickname,
      sername,
      sex: { value },
    } = data;
    const newObj = { name, nickname, sername, sex: value };
    dispatch(fill(newObj));
    dispatch(changeSelect(data.sex));
  };

  return (
    <Layout size='step'>
      <ProgressBar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className={styles.root}>
          {inputs.map((item) => (
            <Input
              key={item.id}
              id={item.id}
              register={register}
              name={item.name}
              label={item.label}
              value={item.value}
              onChange={handlerInput}
              error={(errors[item.name]?.message || '').toString()}
            />
          ))}
          <Controller
            name={select.name}
            control={control}
            render={({ field }) => (
              <Select
                components={{
                  IndicatorSeparator: () => null,
                }}
                styles={customStyles}
                required
                id={select.id}
                {...field}
                options={options}
                defaultValue={{ value: select.value, label: select.label }}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: '#5558FA',
                  },
                })}
              />
            )}
          />
        </main>
        <ButtonGroup onBack={navigateBack} onNext={navigateNext} isValid={isValid} />
      </form>
    </Layout>
  );
};

export default StepOne;
