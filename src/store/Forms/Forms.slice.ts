import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FormsState, StateForm } from './Forms.type';

const initialState: FormsState = {
  uncontrolledForm: {
    username: '',
    age: '',
    password: '',
    confirmPassword: '',
    email: '',
    country: '',
    gender: '',
    insurance: '',
    file: null,
  },
  controlledForm: {
    username: '',
    age: '',
    password: '',
    confirmPassword: '',
    email: '',
    country: '',
    gender: '',
    insurance: '',
    file: null,
  },
};

export const formsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setUncontrolledFormData: (state, { payload }: PayloadAction<StateForm>) => {
      state.uncontrolledForm = payload;
    },
  },
});

export const { setUncontrolledFormData } = formsSlice.actions;
export default formsSlice.reducer;
