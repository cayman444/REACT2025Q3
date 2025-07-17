import { render, screen } from '@testing-library/react';
import { Header } from './Header.component';

it('should render header component', () => {
  render(<Header />);

  expect(screen.getByRole('banner')).toBeInTheDocument();
});
