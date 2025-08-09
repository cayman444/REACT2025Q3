import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { renderTestApp } from '../../tests/utils';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('should change next page', async () => {
    const { store } = renderTestApp(
      <Pagination currentPage={1} totalPage={10} searchValue="" />
    );

    const buttons = screen.getAllByTestId('current-page');
    const buttonNext = screen.getByTestId('page-next');
    expect(buttons[0]).toHaveClass('pointer-events-none');

    await userEvent.click(buttonNext);

    expect(store.getState().pagination.currentPage).toBe(2);
  });

  it('should change prev page', async () => {
    const { store } = renderTestApp(
      <Pagination currentPage={2} totalPage={10} searchValue="" />
    );

    const buttons = screen.getAllByTestId('current-page');
    const buttonPrev = screen.getByTestId('page-prev');
    expect(buttons[1]).toHaveClass('pointer-events-none');

    await userEvent.click(buttonPrev);

    expect(store.getState().pagination.currentPage).toBe(1);
  });

  it('should not render pagination when there are no pages or only one', async () => {
    const { container } = renderTestApp(
      <Pagination currentPage={1} totalPage={null} searchValue="" />
    );

    expect(container).toBeEmptyDOMElement();
  });
});
