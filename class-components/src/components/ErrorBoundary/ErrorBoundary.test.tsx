import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ErrorBoundary } from './ErrorBoundary';
import { Main } from '../Main';

const Child = () => {
  throw new Error('child error');
};

describe('Error Boundary Tests', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should error catching in child components', () => {
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    const errorContainer = screen.getByTestId('error-container');
    expect(errorContainer).toBeInTheDocument();
    expect(screen.getByText(/child error/i)).toBeInTheDocument();
    expect(console.error).toHaveBeenCalled();
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
    expect(console.error).toHaveBeenCalled();
  });
});
