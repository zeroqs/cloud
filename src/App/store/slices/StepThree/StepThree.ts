import { createSlice } from '@reduxjs/toolkit';

export interface StepThree {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  length: number;
}

const initialState: StepThree = { id: 'field-about', label: 'About', value: '', placeholder: 'Placeholder', length: 0 };
export const StepThree = createSlice({
  name: 'StepThree',
  initialState,
  reducers: {
    change: (state, action) => {
      const areaValue = action.payload.value;
      const textAreaWithRefreshValue = {
        ...state,
        value: areaValue,
        length: areaValue.replace(/\s/g, '').length,
      };

      return { ...textAreaWithRefreshValue };
    },
  },
});

export const { change } = StepThree.actions;

export default StepThree.reducer;
