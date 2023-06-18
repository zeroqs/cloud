import * as yup from 'yup';

export const stepThreeSchema = yup
  .object({
    about: yup.string().required('Обязательно').trim().max(200, 'Максимальная длина 200 симолов'),
  })
  .required();
