import { render, screen } from '@testing-library/react';
import { Main } from './Main.component';
import { ErrorBoundary } from '../ErrorBoundary';
import { userEvent } from '@testing-library/user-event';

describe('Error Button Tests', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should throws error when test button is clicked', async () => {
    render(
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    );

    const button = screen.getByRole('button', { name: /error button/i });
    await userEvent.click(button);
    const errorContainer = screen.getByTestId('error-container');
    expect(errorContainer).toBeInTheDocument();
    expect(
      screen.getByText(/error caused by pressing a button/i)
    ).toBeInTheDocument();
  });

  it('should fix the error when pressing the button in the backup interface', async () => {
    render(
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    );

    const button = screen.getByRole('button', { name: /error button/i });
    await userEvent.click(button);
    const errorContainer = screen.getByTestId('error-container');
    expect(errorContainer).toBeInTheDocument();
    const removeErrorButton = screen.getByRole('button', {
      name: /remove error/i,
    });
    await userEvent.click(removeErrorButton);
    expect(
      screen.getByRole('button', { name: /error button/i })
    ).toBeInTheDocument();
  });
});
