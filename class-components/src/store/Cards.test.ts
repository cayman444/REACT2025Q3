import cardSliceReducer, { toggleCard } from './Cards.slice';

describe('Cards.slice', () => {
  it('should add the card if it is not in the state', () => {
    expect(
      cardSliceReducer(
        { selectedCards: [] },
        toggleCard({ name: 'name 1', description: 'desc 1', id: '1' })
      )
    ).toEqual({
      selectedCards: [{ name: 'name 1', description: 'desc 1', id: '1' }],
    });
  });

  it('should remove the card if it is already in the state', () => {
    expect(
      cardSliceReducer(
        { selectedCards: [{ name: 'name 1', description: 'desc 1', id: '1' }] },
        toggleCard({ name: 'name 1', description: 'desc 1', id: '1' })
      )
    ).toEqual({
      selectedCards: [],
    });
  });
});
