import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

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
});
