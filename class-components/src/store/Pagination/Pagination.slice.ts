import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const getCurrentPage = () => {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get('page')) || 1;
};

interface PaginationState {
  totalPage: number | null;
  currentPage: number;
}

const initialState: PaginationState = {
  totalPage: null,
  currentPage: getCurrentPage(),
};

export const cardsSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagination: (
      state,
      { payload }: PayloadAction<Partial<PaginationState>>
    ) => {
      if (payload.currentPage) {
        state.currentPage = payload.currentPage;
      }

      if (payload.totalPage) {
        state.totalPage = payload.totalPage;
      }
    },
  },
});

export const { setPagination } = cardsSlice.actions;
export default cardsSlice.reducer;
