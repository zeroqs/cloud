import progressBar from './slices/ProgressBar';
import checkBoxGroup from './slices/StepTwo/CheckBoxGroup';
import radioGroup from './slices/StepTwo/RadioGroup';
import advantages from './slices/StepTwo/Advantages';
import stepOne from './slices/StepOne/StepOne';
import stepThree from './slices/StepThree/StepThree';
import form from './slices/Form';

import { formApi } from '@/App/services/form';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    progressBar: progressBar,
    advantages: advantages,
    checkBoxGroup: checkBoxGroup,
    radioGroup: radioGroup,
    stepOne: stepOne,
    stepThree: stepThree,
    form: form,
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(formApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
