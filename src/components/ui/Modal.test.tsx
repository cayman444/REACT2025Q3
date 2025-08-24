import { renderWithContext } from '../../tests/utils';
import { Modal } from './Modal';
import { screen } from '@testing-library/react';

describe('Modal', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('should render children in portal to document.body', () => {
    renderWithContext(
      <Modal isVisible={true} onClose={vi.fn()} testid="modal" />
    );

    const modal = screen.getByTestId('modal');

    expect(modal.parentElement).toBe(document.body);
  });
});
