import { createSlice } from '@reduxjs/toolkit';

export interface AdvantagesState {
  id: number;
  placeholder: string;
  value: string;
}

const initialState: AdvantagesState[] = [
  { id: 1, placeholder: 'Placeholder', value: '' },
  { id: 2, placeholder: 'Placeholder', value: '' },
  {
    id: 3,
    placeholder: 'Placeholder',
    value: '',
  },
];

export const advantagesSlice = createSlice({
  name: 'AdvantagesState',
  initialState,
  reducers: {
    add: (state) => {
      const newId = state[state.length - 1].id + 1;
      const newInput = { id: newId, placeholder: 'Placeholder', value: '' };
      return [...state, newInput];
    },
    del: (state, action) => {
      const inputsWithoutDeletedInput = state.filter((item) => item.id !== action.payload);
      return [...inputsWithoutDeletedInput];
    },
    change: (state, action) => {
      const inputId = Number(action.payload.target);
      const inputValue = action.payload.value;
      const inputsWithRefreshValue = state.map((item) =>
        item.id === inputId
          ? {
              ...item,
              value: inputValue,
            }
          : item,
      );

      return [...inputsWithRefreshValue];
    },
  },
});

export const { add, del, change } = advantagesSlice.actions;

export default advantagesSlice.reducer;
