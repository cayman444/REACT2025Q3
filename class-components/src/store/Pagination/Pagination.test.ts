import paginationReducer, { setPagination } from './Pagination.slice';

describe('Pagination.slice', () => {
  it('should add the card if it is not in the state', () => {
    expect(
      paginationReducer(
        { currentPage: 1, totalPage: null },
        setPagination({ totalPage: 10 })
      )
    ).toEqual({ currentPage: 1, totalPage: 10 });
  });

  it('should remove the card if it is already in the state', () => {
    expect(
      paginationReducer(
        { currentPage: 1, totalPage: 10 },
        setPagination({ currentPage: 2 })
      )
    ).toEqual({ currentPage: 2, totalPage: 10 });
  });
});
