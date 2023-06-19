import { createSlice } from '@reduxjs/toolkit';

type Sex = 'man' | 'woman' | '';

export interface FormState {
  nickname: string;
  name: string;
  sername: string;
  phone: string;
  email: string;
  sex: Sex;
  advantages: string[];
  radio: number;
  checkbox: number[];
  about: string;
}

export const initialState: FormState = {
  nickname: '',
  name: '',
  sername: '',
  phone: '+79867589676',
  email: 'smthq@bk.ru',
  sex: '',
  advantages: [],
  radio: 0,
  checkbox: [],
  about: '',
};

export const counterSlice = createSlice({
  name: 'FormState',
  initialState,
  reducers: {
    fill: (state, action) => {
      const newItems = action.payload;
      console.log(newItems);
      return { ...state, ...newItems };
    },
  },
});

export const { fill } = counterSlice.actions;

export default counterSlice.reducer;
