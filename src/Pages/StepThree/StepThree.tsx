import styles from './stepThree.module.scss';

import Layout from '@/shared/ui/Layout/Layout';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
import Textarea from '@/shared/ui/Textarea/Textarea';
import Bar from '@/components/ProgressBar/ProgressBar';
import { setMiddle, setStart } from '@/App/store/slices/ProgressBar';
import { RootState } from '@/App/store/store';
import { change } from '@/App/store/slices/StepThree/StepThree';
import { stepThreeSchema } from '@/shared/utils/StepThree';
import { fill } from '@/App/store/slices/Form';
import Modal from '@/components/Modal/Modal';
import { formApi } from '@/App/services/form';

import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const StepThree = () => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const textArea = useSelector((state: RootState) => state.stepThree);
  const formState = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();
  const [fetchData, { isError, isLoading }] = formApi.usePostDataMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(stepThreeSchema),
    mode: 'onBlur',
  });
  const closeModal = () => {
    setIsModal(false);
  };

  const navigateBack = () => {
    dispatch(setMiddle());
  };

  const navigateNext = () => {
    setIsModal(true);
  };

  const navigateToProfile = () => {
    navigate('/');
    dispatch(setStart());
  };

  const handler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    dispatch(change({ id, value }));
  };

  const onSubmit = async (data: any) => {
    dispatch(fill(data));
    await fetchData(formState);
  }; // TODO Fix any
  return (
    <Layout size='step'>
      <Bar />
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className={styles.root}>
          {
            <Textarea
              defaultValue={textArea.value}
              register={register}
              key={textArea.id}
              id={textArea.id}
              label={textArea.label}
              placeholder={textArea.placeholder}
              onChange={handler}
              length={textArea.length}
              tip={(errors.about?.message || '').toString()}
            />
          }
        </main>
        <ButtonGroup isSend onBack={navigateBack} isValid={isValid} onNext={navigateNext} />
        <Modal
          navigateToProfile={navigateToProfile}
          closeModal={closeModal}
          isModal={isModal}
          isLoading={isLoading}
          error={isError}
        />
      </form>
    </Layout>
  );
};

export default StepThree;
