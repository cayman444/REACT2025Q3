import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { renderTestApp } from '../../tests/utils';
import { SelectedCards } from './SelectedCards';
import { MOCK_SELECTED_CARD } from '../../tests/mocks';

describe('SelectedCards', () => {
  it('should display the correct count of selected items', () => {
    render(renderTestApp(<SelectedCards cards={MOCK_SELECTED_CARD} />));

    const itemsSelectedCount = screen.getByTestId('items-selected');
    expect(itemsSelectedCount).toHaveTextContent(
      MOCK_SELECTED_CARD.length.toString()
    );
  });

  it('should save cards when save button click', async () => {
    URL.createObjectURL = vi.fn();
    URL.revokeObjectURL = vi.fn();

    vitest
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockImplementation(() => vi.fn());

    render(renderTestApp(<SelectedCards cards={MOCK_SELECTED_CARD} />));

    const linkDownload: HTMLAnchorElement = screen.getByTestId('link-download');
    const buttonDownload = screen.getByTestId('button-download');

    await userEvent.click(buttonDownload);

    expect(linkDownload.download).toBe(`${MOCK_SELECTED_CARD.length}_cards`);
  });
});
