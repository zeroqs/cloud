import { createSlice } from '@reduxjs/toolkit';

export interface CheckBox {
  id: number;
  checked: boolean;
  value: string;
}

const initialState: CheckBox[] = [
  { id: 1, checked: true, value: '1' },
  { id: 2, checked: true, value: '2' },
  {
    id: 3,
    checked: false,
    value: '3',
  },
];
export const CheckBoxGroup = createSlice({
  name: 'CheckBoxGroup',
  initialState,
  reducers: {
    change: (state, action) => {
      const checkboxId = Number(action.payload);
      const checkboxesWithRefreshValue = state.map((item) =>
        item.id === checkboxId
          ? {
              ...item,
              checked: !item.checked,
            }
          : item,
      );

      return [...checkboxesWithRefreshValue];
    },
  },
});

export const { change } = CheckBoxGroup.actions;

export default CheckBoxGroup.reducer;
