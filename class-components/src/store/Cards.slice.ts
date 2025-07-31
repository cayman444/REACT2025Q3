import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CardsState {
  selectedCardsId: string[];
}

const initialState: CardsState = {
  selectedCardsId: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    toggleCard: ({ selectedCardsId }, { payload }: PayloadAction<string>) => {
      const currentCardIndex = selectedCardsId.indexOf(payload);

      if (currentCardIndex !== -1) {
        selectedCardsId.splice(currentCardIndex, 1);
      } else {
        selectedCardsId.push(payload);
      }
    },
  },
});

export const { toggleCard } = cardsSlice.actions;
export default cardsSlice.reducer;
