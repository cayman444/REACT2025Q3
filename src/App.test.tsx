import { screen } from '@testing-library/react';
import App from './App';
import { renderWithContext } from './tests/utils';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('should render App', () => {
    const { container } = renderWithContext(<App />);

    expect(container).toBeInTheDocument();
  });

  it('should open and close uncontrolled form in modal', async () => {
    renderWithContext(<App />);

    expect(
      screen.queryByTestId('uncontrolledFormModal')
    ).not.toBeInTheDocument();

    const openButton = screen.getByTestId('uncontrolledFormButton');
    await userEvent.click(openButton);
    expect(screen.getByTestId('uncontrolledFormModal')).toBeInTheDocument();

    const closeButton = screen.getByTestId('modal-close');
    await userEvent.click(closeButton);
    expect(
      screen.queryByTestId('uncontrolledFormModal')
    ).not.toBeInTheDocument();
  });

  it('should open and close controlled form in modal', async () => {
    renderWithContext(<App />);

    expect(screen.queryByTestId('controlledFormModal')).not.toBeInTheDocument();

    const openButton = screen.getByTestId('controlledFormButton');
    await userEvent.click(openButton);
    expect(screen.getByTestId('controlledFormModal')).toBeInTheDocument();

    const closeButton = screen.getByTestId('modal-close');
    await userEvent.click(closeButton);
    expect(screen.queryByTestId('controlledFormModal')).not.toBeInTheDocument();
  });

  it('should modal close when click outside', async () => {
    renderWithContext(<App />);

    const openButton = screen.getByTestId('controlledFormButton');
    await userEvent.click(openButton);

    const dialog = screen.getByTestId('controlledFormModal');
    await userEvent.click(dialog);
    expect(screen.queryByTestId('controlledFormModal')).not.toBeInTheDocument();
  });
});
