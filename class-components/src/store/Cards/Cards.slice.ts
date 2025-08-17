import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ISelectedCard } from '@/types';

export interface CardsState {
  selectedCards: ISelectedCard[];
}

const initialState: CardsState = {
  selectedCards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    toggleCard: (
      { selectedCards },
      { payload }: PayloadAction<ISelectedCard>
    ) => {
      const currentCardIndex = selectedCards.findIndex(
        (card) => card.id === payload.id
      );

      if (currentCardIndex !== -1) {
        selectedCards.splice(currentCardIndex, 1);
      } else {
        selectedCards.push(payload);
      }
    },
    unselectAllCards: (state) => {
      state.selectedCards = [];
    },
  },
});

export const { toggleCard, unselectAllCards } = cardsSlice.actions;
export default cardsSlice.reducer;
