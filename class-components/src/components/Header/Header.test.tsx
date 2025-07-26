import { screen } from '@testing-library/react';
import { Header } from './Header.component';
import { renderWithRouter } from '../../tests/utils';

describe('Rendering tests', () => {
  it('should render header component', () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
