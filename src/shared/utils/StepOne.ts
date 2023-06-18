import { StylesConfig } from 'react-select';
import * as yup from 'yup';

type OptionType = {
  value: string;
  label: string;
};

export const options: OptionType[] = [
  { value: 'man', label: 'Man' },
  { value: 'woman', label: 'Woman' },
];

export const customStyles: StylesConfig<OptionType> = {
  option: (styles) => {
    return {
      ...styles,
      padding: '8px 12px',
      cursor: 'pointer',
    };
  },
  control: (provided) => ({
    ...provided,
    padding: '4px',
    cursor: 'pointer',
  }),
};

export const stepOneSchema = yup
  .object({
    name: yup
      .string()
      .required('Обязательно')
      .matches(/[a-zA-Zа-яА-ЯёЁ]+$/, 'Разрешены только буквы')
      .max(50, 'Максимальная длина 50 симолов'),
    nickname: yup
      .string()
      .required('Обязательно')
      .max(30, 'Максимальная длина 30 симолов')
      .matches(/^[a-zA-Z0-9а-яА-ЯёЁ]+$/, 'Спец символы запрещены'),
    sername: yup
      .string()
      .required('Обязательно')
      .matches(/[a-zA-Zа-яА-ЯёЁ]+$/, 'Разрешены только буквы')
      .max(50, 'Максимальная длина 50 симолов'),
    sex: yup.object().required('Выберите пол'),
  })
  .required();
