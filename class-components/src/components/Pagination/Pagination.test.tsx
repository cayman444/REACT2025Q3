import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { renderWithContext, renderWithRouter } from '../../tests/utils';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('should change next page', async () => {
    const setCurrentPage = vi.fn();

    renderWithRouter(
      renderWithContext(<Pagination />, {
        totalPage: 10,
        currentPage: 5,
        setCurrentPage,
      })
    );

    const nextPageButton = screen.getByTestId('page-next');
    await userEvent.click(nextPageButton);
    expect(setCurrentPage).toBeCalledWith(6);
  });

  it('should change prev page', async () => {
    const setCurrentPage = vi.fn();

    renderWithRouter(
      renderWithContext(<Pagination />, {
        totalPage: 10,
        currentPage: 5,
        setCurrentPage,
      })
    );

    const prevPageButton = screen.getByTestId('page-prev');
    await userEvent.click(prevPageButton);
    expect(setCurrentPage).toBeCalledWith(4);
  });

  it('should not render pagination when there are no pages or only one', async () => {
    const { container } = renderWithRouter(
      renderWithContext(<Pagination />, {
        totalPage: 1,
      })
    );

    expect(container).toBeEmptyDOMElement();
  });
});
