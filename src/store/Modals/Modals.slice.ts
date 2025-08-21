import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ModalsState } from './Modals.type';

const initialState: ModalsState = {
  controlledModal: { isVisible: false, data: [] },
  uncontrolledModal: { isVisible: false, data: [] },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModalVisible: (
      state,
      { payload }: PayloadAction<keyof ModalsState>
    ) => {
      state[payload].isVisible = !state[payload].isVisible;
    },
  },
});

export const { toggleModalVisible } = modalSlice.actions;
export default modalSlice.reducer;
