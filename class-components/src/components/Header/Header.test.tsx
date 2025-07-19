import { render, screen } from '@testing-library/react';
import { Header } from './Header.component';

describe('Rendering tests', () => {
  it('should render header component', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
