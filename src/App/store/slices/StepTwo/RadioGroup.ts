import { createSlice } from '@reduxjs/toolkit';

export interface RadioGroup {
  id: number;
  checked: boolean;
  value: string;
  name: string;
}

const initialState: RadioGroup[] = [
  { id: 1, checked: true, value: '1', name: 'radio' },
  { id: 2, checked: false, value: '2', name: 'radio' },
  {
    id: 3,
    checked: false,
    value: '3',
    name: 'radio',
  },
];
export const RadioGroup = createSlice({
  name: 'RadioGroup',
  initialState,
  reducers: {
    change: (state, action) => {
      const checkboxId = Number(action.payload);
      const radioWithRefreshValue = state.map((item) =>
        item.id === checkboxId
          ? {
              ...item,
              checked: !item.checked,
            }
          : {
              ...item,
              checked: false,
            },
      );

      return [...radioWithRefreshValue];
    },
  },
});

export const { change } = RadioGroup.actions;

export default RadioGroup.reducer;
