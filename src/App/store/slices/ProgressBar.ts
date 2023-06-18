import { createSlice } from '@reduxjs/toolkit';

export interface ProgressState {
  progress: number;
}

const initialState: ProgressState = {
  progress: 0,
};

export const counterSlice = createSlice({
  name: 'progressBar',
  initialState,
  reducers: {
    setStart: (state) => {
      state.progress = 0;
    },
    setMiddle: (state) => {
      state.progress = 50;
    },
    setEnd: (state) => {
      state.progress = 100;
    },
  },
});

export const { setStart, setMiddle, setEnd } = counterSlice.actions;

export default counterSlice.reducer;
