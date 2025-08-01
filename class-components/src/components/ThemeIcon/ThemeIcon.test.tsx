import { render, screen } from '@testing-library/react';
import { ThemeIcon } from './ThemeIcon';

describe('ThemeIcon', () => {
  it('should display the icon correctly depending on the selected theme', () => {
    const { rerender } = render(<ThemeIcon isDarkTheme={true} />);

    expect(screen.getByTestId('dark-theme-icon')).toBeInTheDocument();

    rerender(<ThemeIcon isDarkTheme={false} />);

    expect(screen.getByTestId('light-theme-icon')).toBeInTheDocument();
  });
});
