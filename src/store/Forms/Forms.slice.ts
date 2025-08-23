import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { DataForm, FormsState } from './Forms.type';

const initialState: FormsState = {
  uncontrolledFormData: [],
  controlledFormData: [],
};

export const formsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setUncontrolledFormData: (state, { payload }: PayloadAction<DataForm>) => {
      state.uncontrolledFormData.push(payload);
    },
  },
});

export const { setUncontrolledFormData } = formsSlice.actions;
export default formsSlice.reducer;
