import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { DataForm, FormsState } from './Forms.type';

const initialState: FormsState = {
  uncontrolledFormData: [],
  controlledFormData: [],
  countries: [
    { value: 'denmark', text: 'Denmark' },
    { value: 'norway', text: 'Norway' },
  ],
};

export const formsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setUncontrolledFormData: (state, { payload }: PayloadAction<DataForm>) => {
      state.uncontrolledFormData.push(payload);
    },
    setControlledFormData: (state, { payload }: PayloadAction<DataForm>) => {
      state.controlledFormData.push(payload);
    },
  },
});

export const { setUncontrolledFormData, setControlledFormData } =
  formsSlice.actions;
export default formsSlice.reducer;
