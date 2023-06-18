import * as yup from 'yup';

export const stepTwoSchema = yup
  .object({
    checkbox: yup.array().min(1, 'Обязательно'),
  })
  .required();
