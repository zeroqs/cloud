import { createSlice } from '@reduxjs/toolkit';

export interface InputsState {
  id: string;
  label: string;
  value: string;
  name: string;
}

export interface SelectState {
  id: string;
  label: string;
  value: string;
  name: string;
}

export interface StepOneState {
  inputs: InputsState[];
  select: SelectState;
}

const initialState: StepOneState = {
  inputs: [
    { id: 'field-nickname', name: 'nickname', label: 'Nickname', value: '' },
    { id: 'field-name', name: 'name', label: 'Name', value: '' },
    { id: 'field-sername', name: 'sername', label: 'Sername', value: '' },
  ],
  select: { id: 'field-sex', name: 'sex', label: 'Не выбрано', value: 'Не выбрано' },
};
export const StepOne = createSlice({
  name: 'StepOne',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      const inputId = action.payload.id;
      const inputValue = action.payload.value;
      const inputsWithRefreshValue = state.inputs.map((item) =>
        item.id === inputId
          ? {
              ...item,
              value: inputValue,
            }
          : item,
      );

      return { inputs: [...inputsWithRefreshValue], select: { ...state.select } };
    },
    changeSelect: (state, action) => {
      const newValue = action.payload.value;
      const newLabel = action.payload.label;
      const newSelectValue = {
        ...state.select,
        value: newValue,
        label: newLabel,
      };
      return { inputs: [...state.inputs], select: { ...newSelectValue } };
    },
  },
});

export const { changeInput, changeSelect } = StepOne.actions;

export default StepOne.reducer;
